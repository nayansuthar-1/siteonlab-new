import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, ChevronRight } from "lucide-react";

/**
 * Global site footer — single source of truth used in the root layout.
 * Layout mirrors the approved reference (link columns + "Follow us on" social
 * badges + copyright bar); content maps to the SiteOnLab navigation.
 */

type FooterLink = { label: string; href: string };
type FooterColumn = { title: string; links: FooterLink[] };

const columns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "AI SEO & GEO", href: "/service/ai-seo-and-geo" },
      { label: "SEO", href: "/service/seo" },
      { label: "Technical SEO", href: "/service/technical-seo" },
      { label: "Demand Generation", href: "/service/demand-generation" },
      { label: "B2B Paid Media", href: "/service/b2b-paid-media" },
      { label: "ABM", href: "/service/abm" },
    ],
  },
  {
    title: "More Services",
    links: [
      { label: "Content Marketing", href: "/service/content-marketing" },
      { label: "Marketing Automation", href: "/service/marketing-automation" },
      { label: "Conversion Rate Optimization", href: "/service/conversion-rate-optimization" },
      { label: "GTM & Revenue Strategy", href: "/service/gtm-revenue-strategy" },
      { label: "Website Design & Dev", href: "/service/b2b-website-design-development" },
      { label: "AI Software Development", href: "/service/ai-software-development" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Website Audit", href: "/website-audit" },
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "B2B SaaS", href: "/industries/b2b-saas" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socials: { label: string; href: string; icon: typeof Facebook }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://www.twitter.com", icon: Twitter },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com", icon: Youtube },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#080d18] font-(family-name:--font-inter) text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-slate-200">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-blue-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA + socials */}
        <div className="mt-14 flex flex-col gap-8 border-t border-slate-800/80 pt-10 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center" aria-label="SiteOnLab home">
            <Image src="/siteonlab-logo.png" alt="SiteOnLab" width={240} height={80} className="h-14 w-auto" />
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-400">Follow us on:</span>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-800/50 text-slate-300 transition-colors hover:border-blue-500/50 hover:bg-blue-600 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Book a Strategy Call <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 SiteOnLab Agency Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="transition-colors hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
