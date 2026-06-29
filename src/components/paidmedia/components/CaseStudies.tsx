"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight, TrendingUp, Calendar, ChevronRight } from "lucide-react";
import { CaseStudy } from "../types";

interface CaseStudiesProps {
  onRequestBlueprint: () => void;
}

export default function CaseStudies({ onRequestBlueprint }: CaseStudiesProps) {
  const cases: CaseStudy[] = [
    {
      industry: "SaaS Â· B2B",
      headline: "From invisible in search to owning buyer-intent keywords",
      shortCopy: "We rebuilt their search ad strategy around high-intent category, comparison, and competitor-alternative searches, paired with high-converting landing pages.",
      metric: "+312% Pipeline Growth",
      timeline: "9 months",
      adChannels: ["Google Search", "Symmetric Landing Pages"]
    },
    {
      industry: "Cybersecurity Â· Enterprise",
      headline: "Scaling qualified enterprise demo bookings through buyer alternative groups",
      shortCopy: "We deployed exact-match intent terms targeting active evaluators, using multi-variant copy testing to optimize bidding logic directly for sales qualification.",
      metric: "+248% Demo Bookings",
      timeline: "6 months",
      adChannels: ["Google Search Ads", "HubSpot CRM Sync"]
    },
    {
      industry: "IT Services Â· Mid-Market",
      headline: "Capturing Fortune 500 decision-makers with ABM social funnels",
      shortCopy: "We bypassed waste-prone demographic filters to sync target accounts from Salesforce directly to LinkedIn, reaching key procurement decision-makers.",
      metric: "-42% CAC Reduction",
      timeline: "3 months",
      adChannels: ["LinkedIn ABM", "Salesforce Attribution"]
    }
  ];

  return (
    <section 
      className="relative py-24 bg-[#0A0A0B] border-b border-slate-900"
      id="case-studies-section"
    >
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16" id="case-studies-header">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
              Case Studies &amp; Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
              Paid Media results we can put a number on.
            </h2>
            <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base font-light">
              We focus on qualified sales pipelines, closed-won deals, and customer acquisition efficiency. Read how we have transformed paid spend into scalable channels for leading brands.
            </p>
          </div>
          
          <button 
            onClick={onRequestBlueprint}
            className="mt-6 md:mt-0 px-5 py-3 rounded border border-slate-800 hover:bg-slate-900 text-slate-200 font-semibold text-sm transition-all flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            Request Custom Case Study
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="case-studies-grid">
          {cases.map((cs, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded bg-[#111114] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
              id={`case-card-${idx}`}
            >
              <div>
                {/* Industry & Duration Header */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-4">
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                    {cs.industry}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {cs.timeline}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200 leading-snug mb-3">
                  {cs.headline}
                </h3>

                {/* Short Challenge/Result Copy */}
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  {cs.shortCopy}
                </p>
              </div>

              <div>
                {/* Core Metric Highlight */}
                <div className="p-4 rounded bg-slate-950 border border-slate-800 flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">Attributed Outcome</span>
                    <span className="text-lg font-mono font-bold text-emerald-400 mt-0.5 block">{cs.metric}</span>
                  </div>
                  <div className="p-2 rounded bg-emerald-500/10 text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>

                {/* Ad Channels Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {cs.adChannels.map((ch, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-900"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
