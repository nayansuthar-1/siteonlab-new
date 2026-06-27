"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Search,
  Wrench,
  TrendingUp,
  Target,
  Crosshair,
  FileText,
  Zap,
  MousePointerClick,
  Rocket,
  MonitorSmartphone,
  Cpu,
  Cloud,
  BookOpen,
  Gauge,
  type LucideIcon,
} from "lucide-react";

/**
 * Global site navigation — a single source of truth used in the root layout so
 * every page shares the same blue (theme-home) navbar + mega-menu dropdown.
 * Colors are hardcoded (slate/blue) so the bar is identical regardless of the
 * per-page `theme-*` scope it renders above.
 */

type MenuItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

type NavEntry =
  | { label: string; href: string }
  | { label: string; columns: MenuItem[][]; featured?: boolean };

const services: MenuItem[] = [
  { label: "AI SEO & GEO", href: "/service/ai-seo-and-geo", description: "Get cited in ChatGPT, Perplexity & AI Overviews.", icon: Sparkles },
  { label: "SEO", href: "/service/seo", description: "Rank for high-intent buyer keywords.", icon: Search },
  { label: "Technical SEO", href: "/service/technical-seo", description: "Fix crawl, speed & indexation issues.", icon: Wrench },
  { label: "Demand Generation", href: "/service/demand-generation", description: "A multi-channel pipeline engine.", icon: TrendingUp },
  { label: "B2B Paid Media", href: "/service/b2b-paid-media", description: "High-ROI paid acquisition.", icon: Target },
  { label: "ABM", href: "/service/abm", description: "Account-based marketing programs.", icon: Crosshair },
  { label: "Content Marketing", href: "/service/content-marketing", description: "Authority content that converts.", icon: FileText },
  { label: "Marketing Automation", href: "/service/marketing-automation", description: "Nurture & scale with workflows.", icon: Zap },
  { label: "Conversion Rate Optimization", href: "/service/conversion-rate-optimization", description: "Turn traffic into revenue.", icon: MousePointerClick },
  { label: "GTM & Revenue Strategy", href: "/service/gtm-revenue-strategy", description: "Go-to-market revenue planning.", icon: Rocket },
  { label: "B2B Website Design & Dev", href: "/service/b2b-website-design-development", description: "Sites engineered to convert.", icon: MonitorSmartphone },
  { label: "AI Software Development", href: "/service/ai-software-development", description: "Custom AI tools & applications.", icon: Cpu },
];

const industries: MenuItem[] = [
  { label: "B2B SaaS", href: "/industries/b2b-saas", description: "Growth & AI visibility for SaaS.", icon: Cloud },
];

const resources: MenuItem[] = [
  { label: "Website Audit", href: "/website-audit", description: "Free instant performance & SEO report.", icon: Gauge },
  { label: "Blog", href: "/blog", description: "Insights on B2B growth & AI search.", icon: BookOpen },
];

// Split services into 3 balanced columns for the mega menu.
const serviceColumns: MenuItem[][] = [services.slice(0, 4), services.slice(4, 8), services.slice(8, 12)];

const navEntries: NavEntry[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", columns: serviceColumns, featured: true },
  { label: "Industries", columns: [industries] },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", columns: [resources] },
];

function MegaLink({ item, onClick }: { item: MenuItem; onClick?: () => void }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className="group/item flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-blue-500/10"
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/60 text-blue-400 transition-colors group-hover/item:border-blue-500/40 group-hover/item:text-blue-300">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-white">{item.label}</span>
        <span className="block text-xs leading-snug text-slate-400">{item.description}</span>
      </span>
    </Link>
  );
}

export default function SiteNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock body scroll when the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openWithCancel = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0b1120]/90 font-(family-name:--font-inter) backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="SiteOnLab home">
          <Image
            src="/siteonlab-logo.png"
            alt="SiteOnLab"
            width={210}
            height={70}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={scheduleClose}>
          {navEntries.map((entry) => {
            if ("href" in entry) {
              return (
                <Link
                  key={entry.label}
                  href={entry.href}
                  onMouseEnter={() => openWithCancel(entry.label)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800/60 hover:text-white"
                >
                  {entry.label}
                </Link>
              );
            }
            const isOpen = openMenu === entry.label;
            return (
              <div key={entry.label} className="static" onMouseEnter={() => openWithCancel(entry.label)}>
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-800/60 ${
                    isOpen ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                  aria-expanded={isOpen}
                >
                  {entry.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Book a Strategy Call
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800/60 hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Desktop mega-menu panel (full width, shared across dropdown entries) */}
      {navEntries.map((entry) => {
        if ("href" in entry) return null;
        const isOpen = openMenu === entry.label;
        if (!isOpen) return null;
        return (
          <div
            key={entry.label}
            onMouseEnter={() => openWithCancel(entry.label)}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden border-b border-slate-800/80 bg-[#0b1120]/98 backdrop-blur-md lg:block"
          >
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
              <div className={`grid gap-8 ${entry.featured ? "lg:grid-cols-[1fr_1fr_1fr_minmax(0,17rem)]" : "lg:grid-cols-[minmax(0,28rem)]"}`}>
                {entry.columns.map((col, i) => (
                  <div key={i} className="space-y-1">
                    {col.map((item) => (
                      <MegaLink key={item.href} item={item} onClick={() => setOpenMenu(null)} />
                    ))}
                  </div>
                ))}

                {entry.featured && (
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">Get started</p>
                    <h4 className="mt-2 text-base font-bold text-white">Engineer your revenue engine</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Book a strategy call and get a custom AI-visibility &amp; growth plan.
                    </p>
                    <Link
                      href="/contact"
                      onClick={() => setOpenMenu(null)}
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                    >
                      Book a Strategy Call <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-[#0b1120] lg:hidden">
          <nav className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto px-4 py-4">
            {navEntries.map((entry) => {
              if ("href" in entry) {
                return (
                  <Link
                    key={entry.label}
                    href={entry.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-slate-200 hover:bg-slate-800/60 hover:text-white"
                  >
                    {entry.label}
                  </Link>
                );
              }
              const isOpen = mobileSection === entry.label;
              return (
                <div key={entry.label}>
                  <button
                    type="button"
                    onClick={() => setMobileSection(isOpen ? null : entry.label)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium text-slate-200 hover:bg-slate-800/60 hover:text-white"
                    aria-expanded={isOpen}
                  >
                    {entry.label}
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="space-y-1 pb-2 pl-2">
                      {entry.columns.flat().map((item) => (
                        <MegaLink key={item.href} item={item} onClick={() => setMobileOpen(false)} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex flex-col gap-2 pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500"
              >
                Book a Strategy Call
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
