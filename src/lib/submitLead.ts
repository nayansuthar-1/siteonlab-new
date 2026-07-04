// Client helper used by every form on the site to send a lead to
// /api/contact. Extra form fields go in `fields` and are rendered as
// label/value rows in the notification email. Returns true on success.
export async function submitLead(params: {
  source: string;
  email: string;
  name?: string;
  fields?: Record<string, string | undefined>;
}): Promise<boolean> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    return res.ok;
  } catch {
    return false;
  }
}
