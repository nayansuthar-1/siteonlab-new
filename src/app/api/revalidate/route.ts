import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

// Called by the WordPress "Headless CMS" plugin whenever a blog post is
// saved or deleted, so edits appear on the site immediately instead of
// waiting out the ISR window. The secret must match the one configured on
// the plugin's settings; override via the REVALIDATE_SECRET env var.
const SECRET =
  process.env.REVALIDATE_SECRET ??
  "fd04107fce18bbf57d0246bb21e90d80c70a79abc790c1cd";

function handle(request: NextRequest) {
  const secret =
    request.nextUrl.searchParams.get("secret") ??
    request.headers.get("x-revalidate-secret");
  if (secret !== SECRET) {
    return NextResponse.json({ revalidated: false }, { status: 401 });
  }
  // "max" expires the tag immediately: the next request renders fresh data
  // instead of serving stale-while-revalidate.
  revalidateTag("wp", "max");
  return NextResponse.json({ revalidated: true });
}

export async function POST(request: NextRequest) {
  return handle(request);
}

export async function GET(request: NextRequest) {
  return handle(request);
}
