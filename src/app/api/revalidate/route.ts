import { revalidateTag } from "next/cache";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Called by the WordPress "Headless CMS" plugin whenever a blog post is
// saved or deleted, so edits appear on the site immediately instead of
// waiting out the ISR window. The secret must match the one configured on
// the plugin's settings; override via the REVALIDATE_SECRET env var.
const SECRET =
  process.env.REVALIDATE_SECRET ??
  "fd04107fce18bbf57d0246bb21e90d80c70a79abc790c1cd";

async function handle(request: NextRequest) {
  const secret =
    request.nextUrl.searchParams.get("secret") ??
    request.headers.get("x-revalidate-secret");
  if (secret !== SECRET) {
    console.warn("[revalidate] Rejected — invalid secret");
    return NextResponse.json({ revalidated: false }, { status: 401 });
  }

  // Try to extract a post slug from the webhook body (the Headless CMS
  // plugin may send { post_id, slug, ... } in the POST payload).
  let slug: string | undefined;
  try {
    if (request.method === "POST") {
      const body = await request.json();
      slug = body?.slug ?? body?.post_slug;
    }
  } catch {
    // No JSON body — that's fine, we still purge everything.
  }

  // --- Data-level cache ---
  // { expire: 0 } immediately expires data tagged "wp" so the very next
  // request fetches fresh content from WordPress instead of serving stale
  // data. This is the recommended approach for external webhook callers
  // per the Next.js 16 docs.
  revalidateTag("wp", { expire: 0 });

  // --- Page-level cache ---
  // Purge the rendered blog listing and all individual blog post pages so
  // the HTML is regenerated on the next visit.
  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");

  // If we know the exact slug, also purge that specific path.
  if (slug) {
    revalidatePath(`/blog/${slug}`);
  }

  console.log(
    `[revalidate] Purged wp tag + blog paths${slug ? ` (slug: ${slug})` : ""}`
  );
  return NextResponse.json({ revalidated: true, slug: slug ?? null });
}

export async function POST(request: NextRequest) {
  return handle(request);
}

export async function GET(request: NextRequest) {
  return handle(request);
}
