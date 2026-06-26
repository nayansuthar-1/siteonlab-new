"use client";

import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-white/5 pb-10 mb-8">
          
          {/* Logo and Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#080808] border border-white/10 text-blue-500 shadow-lg">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white text-base">
                SiteOnLab
              </span>
              <span className="font-mono text-[9px] text-gray-500 tracking-wider uppercase -mt-1">
                Technical SEO Engine
              </span>
            </div>
          </div>

          {/* Copyright text */}
          <p className="text-xs text-gray-400 font-sans font-light">
            &copy; 2026 SiteOnLab Services Inc. All rights reserved. Built for B2B pipeline scale.
          </p>

        </div>

        {/* Footer Bottom Credentials / Professional Meta Labels */}
        <div className="flex flex-wrap justify-between items-center gap-6 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>AUDIT SECURITY: AES-256</span>
            <span>GOOGLE CRAWLER AGENT: COMPLIANT</span>
            <span>LLM CRAWL DIRECTIVES: VALIDATED</span>
            <span>DATA PRIVACY: GDPR & CCPA</span>
          </div>
          
          <div className="text-gray-600 italic">
            SiteOnLab is an independent technical engineering agency. All metrics verified via CRM endpoints.
          </div>
        </div>

      </div>
    </footer>
  );
}
