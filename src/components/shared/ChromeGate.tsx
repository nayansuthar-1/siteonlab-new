"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the global site chrome (SiteNav / SiteFooter) on standalone,
 * directly-accessed pages that ship their own header + footer.
 * Currently: the /package landing page.
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
