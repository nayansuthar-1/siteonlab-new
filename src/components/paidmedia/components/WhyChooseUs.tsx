"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TrendingUp, BarChart3, Binary, Compass } from "lucide-react";
import { Differentiator } from "../types";

export default function WhyChooseUs() {
  const differentiators: Differentiator[] = [
    {
      title: "Revenue-First Strategy",
      description: "We optimize for business outcomes and CAC efficiency, not isolated channel metrics like cost-per-click or generic impression counts.",
      badge: "Pipeline ROI"
    },
    {
      title: "Measurement That is Honest",
      description: "We connect search and social ad actions directly to first-touch, assisted, and last-touch revenue signals in your CRM.",
      badge: "Attributed Revenue"
    },
    {
      title: "Built for AI Search and LLM Visibility",
      description: "We structure ad content and authority signals so high-intent buyers find your brand cited inside Google AI Overviews and major LLMs.",
      badge: "Generative Engine Visibility"
    },
    {
      title: "Compounding Growth Over Time",
      description: "We build digital assets, search channels, and automated systems that keep creating qualified pipeline instead of one-off campaign spikes.",
      badge: "Sustained Velocity"
    }
  ];

  const getDifferentiatorIcon = (idx: number) => {
    switch (idx) {
      case 0: return <TrendingUp className="w-5 h-5 text-blue-500" />;
      case 1: return <BarChart3 className="w-5 h-5 text-blue-500" />;
      case 2: return <Binary className="w-5 h-5 text-blue-500" />;
      default: return <Compass className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section 
      className="relative py-24 bg-[#0A0A0B] border-b border-slate-900"
      id="why-choose-us-section"
    >
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-left mb-16" id="why-choose-us-header">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
            Why Teams Pick Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
            A Paid Media agency that connects paid ad performance to revenue.
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base font-light">
            Most agencies hand you vanity reports full of CTRs, impressions, and click scores and call it done. HybridMonks builds a full measurement layer so you can see how paid media contributes across the complete buyer journey, from first touch to qualified opportunity.
          </p>
        </div>

        {/* 4 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="why-choose-us-grid">
          {differentiators.map((diff, index) => (
            <div 
              key={index}
              className="p-6 rounded bg-[#111114] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
              id={`differentiator-card-${index}`}
            >
              <div>
                {/* Header Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                    {getDifferentiatorIcon(index)}
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {diff.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {diff.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {diff.description}
                </p>
              </div>

              {/* Technical Indicator Footer */}
              <div className="border-t border-slate-900 mt-6 pt-4 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Optimization Protocol</span>
                <span className="text-blue-400">HybridMonks Standard</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
