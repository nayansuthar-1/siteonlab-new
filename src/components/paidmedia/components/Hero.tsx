"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import AdGraphics from "./AdGraphics";

interface HeroProps {
  onRequestBlueprint: () => void;
  onSeeCaseStudies: () => void;
}

export default function Hero({ onRequestBlueprint, onSeeCaseStudies }: HeroProps) {
  return (
    <section 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#0A0A0B] border-b border-slate-900"
      id="hero-section"
    >
      {/* Absolute background visual accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Context, Heading, Value Prop, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left" id="hero-content-column">
            
            {/* Service Category & Service Name Eyebrow */}
            <div className="inline-block px-3 py-1 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded bg-blue-500/5">
              Paid Media | Advanced Demand Generation
            </div>

            {/* H1 Title matching Elegant Dark styling */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              The <span className="text-blue-500 italic font-serif font-semibold">Paid Media</span> agency that drives <span className="text-slate-400">demos</span>, inquiries, and pipeline.
            </h1>

            {/* Structured B2B Subheading */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl font-light">
              SiteOnLab helps B2B SaaS, technology, IT/MSP, and professional-services companies turn search and social ad networks into a measurable revenue channel. We help you <strong className="text-white font-medium">rank instantly for buyer-intent terms</strong>, <strong className="text-white font-medium">hyper-target ICP stakeholders</strong>, and <strong className="text-white font-medium">convert traffic into qualified opportunities</strong> â€” measured by pipeline, not vanity metrics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onRequestBlueprint}
                className="group px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded shadow-lg shadow-blue-900/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                id="hero-primary-cta"
              >
                Request Growth Blueprint
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onSeeCaseStudies}
                className="px-6 py-3.5 border border-slate-800 text-slate-300 hover:bg-slate-900 font-semibold text-sm rounded transition-all text-center cursor-pointer"
                id="hero-secondary-cta"
              >
                See Case Studies
              </button>
            </div>

            {/* Mini Trust Credential */}
            <div className="pt-6 border-t border-zinc-900/80 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="B2B Marketer"
                    className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                Trusted by marketing teams at high-growth enterprise verticals
              </div>
            </div>

          </div>

          {/* Right Column: High-End Paid Media Pipeline Visual */}
          <div className="lg:col-span-5 flex justify-center items-center" id="hero-graphics-column">
            <AdGraphics />
          </div>

        </div>
      </div>
    </section>
  );
}
