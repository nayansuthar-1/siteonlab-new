"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Search, Users, LayoutTemplate, BarChart3, RotateCw, Trash2, ArrowRight } from "lucide-react";
import { ServiceComponent } from "../types";

export default function Services() {
  const components: ServiceComponent[] = [
    {
      id: "keyword",
      title: "High-Intent Keyword Bidding",
      description: "Capture active buyers exactly when they search for software or solutions. We target competitor, comparison, and alternative keywords to maximize demo-intent traffic.",
      bullets: ["Competitor alternative keywords", "Intent-level semantic grouping", "Symmetric message matching"]
    },
    {
      id: "abm",
      title: "Account-Based Paid Social (ABM)",
      description: "Stop spending ad budget on unqualified viewers. We upload your CRM target account lists directly to LinkedIn and Meta, targeting decision-makers with laser-focused content.",
      bullets: ["C-Suite firmographic targeting", "Target account list integration", "Personalized decision-maker ads"]
    },
    {
      id: "pages",
      title: "High-Converting Landing Pages",
      description: "Directing paid ads to your homepage kills conversions. We design bespoke, lightning-fast landing page variations optimized for direct-response and frictionless form submissions.",
      bullets: ["A/B tested copywriting", "Frictionless form-fill funnels", "Sub-second loading architecture"]
    },
    {
      id: "attribution",
      title: "Multi-Touch Revenue Attribution",
      description: "Standard pixel tracking doesn't tell the full story. We align ad clicks with actual HubSpot or Salesforce records, tracking first-touch, multi-touch, and last-touch pipelines.",
      bullets: ["Salesforce & HubSpot sync", "Closed-won pipeline mapping", "Ad-to-deal cycle tracking"]
    },
    {
      id: "creative",
      title: "Continuous Creative Sprints",
      description: "B2B buyers suffer from banner fatigue. We run bi-weekly creative sprints to supply high-performance ad graphics, video scripts, and copy tests to maintain high CTRs.",
      bullets: ["Multi-variate ad copy tests", "Engaging B2B static & video assets", "Scheduled frequency capped rotators"]
    },
    {
      id: "spend",
      title: "Wasted Spend Elimination",
      description: "Most ad budgets suffer from 30%+ waste. We implement aggressive negative keyword groups, disable poor mobile app placements, and black-list non-converting audiences.",
      bullets: ["Aggressive negative keyword lists", "Mobile placement blacklisting", "Daily bidding hygiene audits"]
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case "keyword": return <Search className="w-5 h-5 text-blue-500" />;
      case "abm": return <Users className="w-5 h-5 text-blue-500" />;
      case "pages": return <LayoutTemplate className="w-5 h-5 text-blue-500" />;
      case "attribution": return <BarChart3 className="w-5 h-5 text-blue-500" />;
      case "creative": return <RotateCw className="w-5 h-5 text-blue-500" />;
      default: return <Trash2 className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section 
      className="relative py-24 bg-[#0A0A0B] border-b border-slate-900"
      id="service-overview-section"
    >
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16" id="service-overview-header">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
            Paid Media Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
            Paid Media built for compounding B2B revenue growth.
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base font-light">
            Most agencies just handle basic bidding setups and call it a day. SiteOnLab builds a complete growth system that combines high-intent paid search, account-based paid social, custom conversion-focused landing pages, and multi-touch CRM attribution into one unified revenue channel designed to earn trust and maximize pipeline value.
          </p>
        </div>

        {/* Bento-Style Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="service-overview-grid">
          {components.map((comp) => (
            <div 
              key={comp.id}
              className="p-6 rounded bg-[#111114] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
              id={`service-component-${comp.id}`}
            >
              <div>
                {/* Header Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 shrink-0">
                    {getIcon(comp.id)}
                  </div>
                  <h3 className="text-base font-bold text-white">{comp.title}</h3>
                </div>

                {/* Explanation */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                  {comp.description}
                </p>
              </div>

              {/* Sub-Bullets / Capabilities */}
              <div className="border-t border-slate-900 pt-4 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Key Focus Areas</span>
                <ul className="space-y-1.5">
                  {comp.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
