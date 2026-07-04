import { NextRequest, NextResponse } from "next/server";
import { getTransport, LEAD_RECIPIENT, FROM_NAME } from "@/lib/mailer";

// Shared lead endpoint for every form on the site. Sends an internal
// notification to LEAD_RECIPIENT and a confirmation auto-reply to the
// visitor. Payload:
//   { source: string, name?: string, email: string, fields?: Record<string,string> }
// "fields" holds any extra form fields and is rendered as label/value rows.

const MAX_FIELD_LENGTH = 2000;
const MAX_FIELDS = 20;

// Best-effort per-IP rate limit (resets on serverless cold start).
const hits = new Map<string, { count: number; windowStart: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count++;
  return entry.count > MAX_PER_WINDOW;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function notificationHtml(
  source: string,
  name: string,
  email: string,
  fields: Record<string, string>
) {
  const rows = [
    ["Source", source],
    ["Name", name || "—"],
    ["Email", email],
    ...Object.entries(fields),
  ]
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 14px;border-bottom:1px solid #e2e8f0;font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.05em;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 14px;border-bottom:1px solid #e2e8f0;font-size:14px;color:#0f172a;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f1f5f9;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
      <div style="background:#0a0f1e;padding:18px 24px;">
        <span style="color:#3b82f6;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">New Lead</span>
        <h1 style="color:#ffffff;font-size:18px;margin:6px 0 0;">${escapeHtml(source)}</h1>
      </div>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">${rows}</table>
      <div style="padding:14px 24px;font-size:12px;color:#94a3b8;">Reply directly to this email to answer ${escapeHtml(name || email)}.</div>
    </div>
  </div>`;
}

function autoReplyHtml(name: string) {
  const firstName = (name || "").trim().split(/\s+/)[0];
  const greeting = firstName ? `Hi ${escapeHtml(firstName)},` : "Hi,";
  return `
  <div style="font-family:Arial,Helvetica,sans-serif;background:#f1f5f9;padding:24px;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
      <div style="background:#0a0f1e;padding:22px 28px;">
        <h1 style="color:#ffffff;font-size:20px;margin:0;">We've received your request</h1>
      </div>
      <div style="padding:28px;color:#334155;font-size:14px;line-height:1.7;">
        <p style="margin:0 0 16px;">${greeting}</p>
        <p style="margin:0 0 16px;">Thanks for reaching out to <strong>HybridMonks</strong>. Your request is in our queue and a senior strategist is reviewing it now.</p>
        <p style="margin:0 0 16px;"><strong>What happens next:</strong></p>
        <ol style="margin:0 0 16px;padding-left:20px;">
          <li style="margin-bottom:6px;">We review your website, search presence and AI visibility.</li>
          <li style="margin-bottom:6px;">We map where your pipeline leaks are.</li>
          <li>We reply within one business day with next steps.</li>
        </ol>
        <p style="margin:0;">Talk soon,<br/><strong>The HybridMonks Team</strong></p>
      </div>
      <div style="padding:14px 28px;border-top:1px solid #e2e8f0;font-size:11px;color:#94a3b8;">
        You're receiving this because you submitted a form on hybridmonks.com. No spam, ever.
      </div>
    </div>
  </div>`;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests" },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const {
    source,
    name = "",
    email,
    fields = {},
    website, // honeypot: hidden input real users never fill
  } = (body ?? {}) as {
    source?: string;
    name?: string;
    email?: string;
    fields?: Record<string, unknown>;
    website?: string;
  };

  // Bots that fill every field get a fake success.
  if (website) return NextResponse.json({ ok: true });

  if (!source || typeof source !== "string") {
    return NextResponse.json(
      { ok: false, error: "Missing source" },
      { status: 400 }
    );
  }
  if (!email || typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Valid email is required" },
      { status: 400 }
    );
  }

  const cleanFields: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields).slice(0, MAX_FIELDS)) {
    if (value === undefined || value === null || value === "") continue;
    cleanFields[key.slice(0, 100)] = String(value).slice(0, MAX_FIELD_LENGTH);
  }
  const cleanName = String(name).slice(0, 200);
  const cleanSource = source.slice(0, 200);

  try {
    const transport = getTransport();
    const fromAddress = process.env.GMAIL_USER!;

    await transport.sendMail({
      from: `"${FROM_NAME} Website" <${fromAddress}>`,
      to: LEAD_RECIPIENT,
      replyTo: cleanName ? `"${cleanName}" <${email}>` : email,
      subject: `New lead — ${cleanSource}${cleanName ? ` — ${cleanName}` : ""}`,
      html: notificationHtml(cleanSource, cleanName, email, cleanFields),
    });

    // Auto-reply failures shouldn't fail the submission.
    try {
      await transport.sendMail({
        from: `"${FROM_NAME}" <${fromAddress}>`,
        to: email,
        replyTo: LEAD_RECIPIENT,
        subject: "We've received your request — HybridMonks",
        html: autoReplyHtml(cleanName),
      });
    } catch (err) {
      console.error("Auto-reply failed:", err);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead email failed:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
