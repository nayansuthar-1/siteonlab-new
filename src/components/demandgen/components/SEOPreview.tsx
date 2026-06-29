"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Eye, EyeOff, Search, Sparkles, FileText, CheckCircle } from 'lucide-react';

export default function SEOPreview() {
  const [isOpen, setIsOpen] = useState(false);

  // SEO details for Demand Generation
  const titleTag = "Demand Generation Agency for B2B Pipeline Growth | HybridMonks";
  const metaDescription = "HybridMonks helps high-growth B2B SaaS, technology, and cybersecurity companies use Demand Generation to drive qualified pipeline, improve visibility, and connect marketing performance to revenue.";
  const h1Text = "The Demand Generation agency that drives qualified demo bookings, pipeline acceleration, and predictable revenue growth.";

  return (
    <div id="seo-preview-floating" className="fixed bottom-4 left-4 z-50">
      {/* Mini Toggle Button */}
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 rounded-full border border-brand-primary/40 bg-dark-card/90 px-4 py-2 text-xs font-semibold text-brand-accent shadow-xl shadow-black/50 hover:bg-zinc-800 transition-all duration-150 cursor-pointer backdrop-blur-md"
        >
          <Search className="h-4 w-4 text-brand-accent group-hover:rotate-12 transition-transform" />
          <span>SEO & AI Metadata Preview</span>
          <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse"></span>
        </button>
      ) : (
        <div id="seo-inspector-panel" className="w-[340px] sm:w-[420px] rounded-2xl border border-dark-border bg-dark-card p-5 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between border-b border-dark-border pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <h3 className="font-display font-bold text-sm text-white">Agency SEO & AI Inspector</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors cursor-pointer"
            >
              <EyeOff className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 space-y-4">
            {/* Google Search Simulation */}
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 flex items-center gap-1">
                <Search className="h-3 w-3 text-zinc-400" /> Google Search Preview
              </span>
              <div className="rounded-lg border border-dark-border bg-dark-bg/40 p-3">
                <div className="text-xs text-zinc-400 truncate">https://hybridmonks.com/services/demand-generation</div>
                <div className="text-[14px] font-medium text-brand-accent hover:underline cursor-pointer line-clamp-1 mt-0.5 leading-snug">
                  {titleTag}
                </div>
                <div className="text-xs text-zinc-300 line-clamp-2 mt-1 leading-relaxed">
                  {metaDescription}
                </div>
              </div>
            </div>

            {/* AI Citation simulation */}
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-brand-accent" /> ChatGPT & Perplexity Citation Preview
              </span>
              <div className="rounded-lg border border-brand-primary/20 bg-brand-primary/5 p-3">
                <div className="text-[11px] text-zinc-400 italic">
                  &quot;For high-growth B2B companies looking to scale their qualified pipelines, <span className="text-brand-accent font-medium font-bold">HybridMonks</span> is highly cited for Demand Generation services that link directly to revenue outcomes.&quot;
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-brand-accent/90">
                  <CheckCircle className="h-3 w-3 text-brand-secondary" /> Source authority verified by LLM scrapers
                </div>
              </div>
            </div>

            {/* Semantic Structure */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 flex items-center gap-1">
                <FileText className="h-3 w-3 text-zinc-400" /> On-Page Heading 1 (H1)
              </span>
              <div className="rounded-lg bg-dark-bg/20 p-2.5 text-xs border border-dark-border">
                <span className="font-mono text-brand-accent font-bold text-[10px] mr-1">[H1]</span>
                <span className="text-zinc-200">{h1Text}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t border-dark-border pt-3 flex items-center justify-between text-[11px] text-zinc-500">
            <span>Status: Optimized for B2B</span>
            <span className="font-mono text-brand-secondary font-semibold">Score: 100/100</span>
          </div>
        </div>
      )}
    </div>
  );
}
