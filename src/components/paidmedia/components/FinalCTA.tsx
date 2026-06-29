"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUpRight, Sparkles, TrendingUp, Compass } from "lucide-react";

interface FinalCTAProps {
  onRequestBlueprint: () => void;
  onTakeAssessment: () => void;
}

export default function FinalCTA({ onRequestBlueprint, onTakeAssessment }: FinalCTAProps) {
  return (
    <section 
      className="relative py-28 overflow-hidden bg-[#0A0A0B]"
      id="final-cta-section"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Glow Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase">Maximize Ad Pipeline</span>
        </div>

        {/* H2 Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto leading-tight">
          Let&apos;s make Paid Media your most efficient growth channel.
        </h2>

        {/* Supporting Copy */}
        <p className="text-slate-400 mt-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
          Book a 30-minute strategy call. We&apos;ll review your current Paid Media performance, identify opportunities your competitors are missing, and show you what it would take to turn paid spend into qualified CRM pipeline.
        </p>

        {/* Double CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={onRequestBlueprint}
            className="group px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded text-sm transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            id="final-primary-cta"
          >
            Request Growth Blueprint
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            onClick={onTakeAssessment}
            className="group px-7 py-3.5 border border-slate-800 text-slate-300 hover:bg-slate-900 font-semibold rounded text-sm transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
            id="final-secondary-cta"
          >
            <Compass className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            Take Paid Media Maturity Assessment
          </button>
        </div>

        {/* Small Trust Verification line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            No Shared Commitments Required
          </span>
          <span className="hidden sm:inline text-slate-800">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
            Direct Access to Core Strategists
          </span>
          <span className="hidden sm:inline text-slate-800">|</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
            Waste Analysis Included
          </span>
        </div>

      </div>
    </section>
  );
}
