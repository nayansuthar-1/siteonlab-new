import nodemailer from "nodemailer";

// Gmail SMTP. GMAIL_USER is the full Gmail address; GMAIL_APP_PASSWORD is a
// 16-character app password (Google account > Security > 2-Step Verification
// > App passwords), NOT the account password.
export function getTransport() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    throw new Error("GMAIL_USER / GMAIL_APP_PASSWORD env vars are not set");
  }
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

export const LEAD_RECIPIENT =
  process.env.LEAD_RECIPIENT ?? "hitesh@hybridmonks.com";

export const FROM_NAME = "HybridMonks";
