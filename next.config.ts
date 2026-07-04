import type { NextConfig } from "next";

// Production WordPress lives on its own subdomain (cms.hybridmonks.com) and
// wp-admin is used there directly. The apex only serves the Next.js site;
// /wp-admin on the apex is a convenience redirect to the real dashboard.
const WP_ADMIN_URL = process.env.WORDPRESS_ADMIN_URL;

const nextConfig: NextConfig = {
  // Produce a self-contained build (.next/standalone) that can run on any
  // machine with Node.js — also fully compatible with Vercel.
  output: "standalone",
  // Blog images are served through next/image so the browser loads them from
  // this app (Vercel) instead of hitting the WordPress origin directly.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "backend.hybridmonks.com" },
      { protocol: "http", hostname: "localhost", port: "8882" },
    ],
  },
  async redirects() {
    if (!WP_ADMIN_URL) return [];
    return [
      { source: "/wp-admin", destination: WP_ADMIN_URL, permanent: false },
      { source: "/wp-admin/:path*", destination: WP_ADMIN_URL, permanent: false },
    ];
  },
};

export default nextConfig;
