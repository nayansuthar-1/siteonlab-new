import type { NextConfig } from "next";

// Origin server where WordPress actually runs (Hostinger internal hostname).
// When set, WordPress paths on this domain are proxied to it, so
// hybridmonks.com serves the Next.js site while hybridmonks.com/wp-admin
// opens the WordPress dashboard.
const WP_ORIGIN = process.env.WORDPRESS_ORIGIN?.replace(/\/$/, "");

const nextConfig: NextConfig = {
  // Produce a self-contained build (.next/standalone) that can run on any
  // machine with Node.js — also fully compatible with Vercel.
  output: "standalone",
  async rewrites() {
    if (!WP_ORIGIN) return [];
    return [
      { source: "/wp-admin", destination: `${WP_ORIGIN}/wp-admin/` },
      { source: "/wp-admin/:path*", destination: `${WP_ORIGIN}/wp-admin/:path*` },
      { source: "/wp-login.php", destination: `${WP_ORIGIN}/wp-login.php` },
      { source: "/wp-json/:path*", destination: `${WP_ORIGIN}/wp-json/:path*` },
      { source: "/wp-content/:path*", destination: `${WP_ORIGIN}/wp-content/:path*` },
      { source: "/wp-includes/:path*", destination: `${WP_ORIGIN}/wp-includes/:path*` },
      { source: "/wp-cron.php", destination: `${WP_ORIGIN}/wp-cron.php` },
    ];
  },
};

export default nextConfig;
