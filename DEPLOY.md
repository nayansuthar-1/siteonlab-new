# Deploying to Hostinger (Business/Cloud, Node.js Apps)

The site is a Next.js server app (API routes for the contact/lead emails,
PageSpeed audit, Gemini tools, and on-demand blog revalidation), so it must be
deployed as a **Node.js App** in hPanel — not unzipped into `public_html`.

## 1. Build the zip

```
npm run deploy:zip
```

Creates `hybridmonks.zip` next to the project folder (`D:\siteonlab\`) —
source + configs + `.env.production`; excludes `node_modules`, `.next`,
`.git`, `.env.local`. Secrets are NOT in the zip (see step 3).

## 2. Create the app in hPanel

1. hPanel → **Websites** → **Add Website** → **Node.js Apps**.
2. Choose **Upload your website files** and upload `hybridmonks.zip`.
3. Build settings:
   - **Framework**: Next.js (pick "Other" if not auto-detected)
   - **Build command**: `npm run build`
   - **Output directory**: `.next`
   - **Entry file**: `.next/standalone/server.js`
   - **Node version**: 20.x or 22.x
4. Assign the main domain to the app and deploy.

The build automatically runs `postbuild` (copies static assets + `public/`
into the standalone folder), so the entry file is fully self-contained. The
server reads `PORT` from the environment, which Hostinger sets.

## 3. Set the secrets in the hPanel UI

In the app's **Environment Variables** section, add:

- `GMAIL_USER` — Gmail address that sends the lead emails
- `GMAIL_APP_PASSWORD` — Google app password (Google account → Security →
  2-Step Verification → App passwords). Required for the lead form emails.
- `GEMINI_API_KEY` — optional; only the AI blueprint/service-generator tools
  need it.
- `LEAD_RECIPIENT` — optional; defaults to hitesh@hybridmonks.com.

These override anything in `.env.production` and are never stored in the zip.
Redeploy or restart the app after adding them so the running server picks
them up.

## 4. After the domain is live

- Verify the WordPress "Headless CMS" plugin (on backend.hybridmonks.com)
  pings `https://<domain>/api/revalidate` with the configured secret so blog
  edits appear instantly.
- Submit the contact form once and confirm both emails arrive (lead
  notification at hitesh@hybridmonks.com + auto-reply to the sender).

## Redeploying

Re-run `npm run deploy:zip` and upload the new zip to the same app
(hPanel keeps the previous files; choose the new upload).

## Local testing of the exact production build

```
npm run build
npm run start:standalone   # serves the same server.js Hostinger runs
```
