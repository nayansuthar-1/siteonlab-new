import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * SiteOnLab Website Audit engine.
 * Runs a server-side performance + quality analysis and returns a normalized,
 * SiteOnLab-branded result. The underlying analysis provider is intentionally
 * never exposed to the client.
 */

const ANALYSIS_ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

type Strategy = "mobile" | "desktop";

type NormalizedMetric = {
  id: string;
  label: string;
  displayValue: string;
  score: number | null; // 0..1
  numericValue: number;
};

function normalizeUrl(input: string): string | null {
  let value = input.trim();
  if (!value) return null;
  if (!/^https?:\/\//i.test(value)) value = `https://${value}`;
  try {
    const u = new URL(value);
    if (!u.hostname.includes(".")) return null;
    return u.toString();
  } catch {
    return null;
  }
}

function pct(score: number | null | undefined): number | null {
  if (score === null || score === undefined) return null;
  return Math.round(score * 100);
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const rawUrl: string = typeof body?.url === "string" ? body.url : "";
  const strategy: Strategy = body?.strategy === "desktop" ? "desktop" : "mobile";

  const target = normalizeUrl(rawUrl);
  if (!target) {
    return NextResponse.json({ error: "Please enter a valid website URL." }, { status: 400 });
  }

  const apiKey = process.env.PAGESPEED_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "The audit engine is not configured. Please try again later." },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({ url: target, key: apiKey, strategy });
  for (const c of ["PERFORMANCE", "ACCESSIBILITY", "BEST_PRACTICES", "SEO"]) {
    params.append("category", c);
  }

  let data: Record<string, unknown>;
  try {
    const res = await fetch(`${ANALYSIS_ENDPOINT}?${params.toString()}`, {
      headers: { Accept: "application/json" },
      // Long analysis; do not cache.
      cache: "no-store",
    });
    data = await res.json();
    if (!res.ok) {
      const message =
        (data as { error?: { message?: string } })?.error?.message ||
        "We couldn't analyze that site. Make sure it is publicly reachable and try again.";
      return NextResponse.json({ error: message }, { status: 400 });
    }
  } catch {
    return NextResponse.json(
      { error: "The audit timed out. Please try again in a moment." },
      { status: 504 }
    );
  }

  const lh = (data as { lighthouseResult?: Record<string, unknown> }).lighthouseResult;
  if (!lh) {
    return NextResponse.json(
      { error: "We couldn't analyze that site. Please try a different URL." },
      { status: 400 }
    );
  }

  const categories = lh.categories as Record<string, { score?: number | null }> | undefined;
  const audits = lh.audits as Record<
    string,
    { displayValue?: string; score?: number | null; numericValue?: number; details?: { data?: string } }
  >;

  const metricDefs: { id: string; label: string }[] = [
    { id: "first-contentful-paint", label: "First Contentful Paint" },
    { id: "largest-contentful-paint", label: "Largest Contentful Paint" },
    { id: "total-blocking-time", label: "Total Blocking Time" },
    { id: "cumulative-layout-shift", label: "Cumulative Layout Shift" },
    { id: "speed-index", label: "Speed Index" },
    { id: "interactive", label: "Time to Interactive" },
  ];

  const metrics: NormalizedMetric[] = metricDefs
    .filter((m) => audits[m.id])
    .map((m) => ({
      id: m.id,
      label: m.label,
      displayValue: audits[m.id].displayValue ?? "—",
      score: audits[m.id].score ?? null,
      numericValue: audits[m.id].numericValue ?? 0,
    }));

  const screenshot = audits["final-screenshot"]?.details?.data ?? null;

  const result = {
    url: (lh.finalDisplayedUrl as string) || (lh.requestedUrl as string) || target,
    strategy,
    fetchedAt: new Date().toISOString(),
    scores: {
      performance: pct(categories?.performance?.score),
      accessibility: pct(categories?.accessibility?.score),
      bestPractices: pct(categories?.["best-practices"]?.score),
      seo: pct(categories?.seo?.score),
    },
    metrics,
    screenshot,
  };

  return NextResponse.json({ success: true, result });
}
