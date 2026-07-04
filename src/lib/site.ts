// Canonical public URL of the site. Override with SITE_URL in the environment
// (e.g. Hostinger env vars) if the live domain differs. Used by
// metadataBase, sitemap.xml and robots.txt.
export const SITE_URL = (process.env.SITE_URL ?? "https://hybridmonks.com").replace(
  /\/$/,
  ""
);

// Google Analytics measurement ID. Public by design (ships in client JS).
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-9M3XN9R9SN";
