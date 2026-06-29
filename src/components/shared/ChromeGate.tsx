"use client";

import { usePathname } from "next/navigation";

/**
 * Hides whatever it wraps (currently the global SiteFooter) on standalone,
 * directly-accessed pages that ship their own footer.
 * Currently: the /package landing page — it uses the global SiteNav but
 * keeps its own footer, so only the footer is gated here.
 */
const STANDALONE_PREFIXES = ["/package"];

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStandalone = STANDALONE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname?.startsWith(`${prefix}/`),
  );
  if (isStandalone) return null;
  return <>{children}</>;
}
