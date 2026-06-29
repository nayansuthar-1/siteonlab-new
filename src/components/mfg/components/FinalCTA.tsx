"use client";

import { INDUSTRY_NAME } from "../data/copywriting";
import { ArrowUpRight, Calendar, Sparkles } from "lucide-react";

interface FinalCTAProps {
  onRequestBlueprint: () => void;
  onBookStrategyCall: () => void;
}

export default function FinalCTA({ onRequestBlueprint, onBookStrategyCall }: FinalCTAProps) {
  return (
    <section id="contact" className="bg-[#0A0A0B] py-24 relative overflow-hidden border-b border-slate-800/50">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 w-[50rem] h-[30rem] bg-blue-950/15 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold font-mono text-blue-400">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Sourcing Strategy Engagements</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none">
          Let's build a predictable growth engine for your {INDUSTRY_NAME} company.
        </h2>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
          Stop wondering where your next enterprise quote will come from. Settle your organic positioning, secure your prominence in AI searches, and establish a scientific system to measure return on marketing spend.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            id="final-cta-primary"
            onClick={onRequestBlueprint}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold font-sans text-sm tracking-wide transition-all shadow-lg shadow-blue-950/20 hover:-translate-y-0.5 cursor-pointer"
          >
            Request a Growth Blueprint
            <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <button
            id="final-cta-secondary"
            onClick={onBookStrategyCall}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800/60 font-semibold font-sans text-sm tracking-wide transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-blue-400" />
            Book a Strategy Call
          </button>
        </div>

        <p className="text-[11px] text-slate-600 font-mono">
          * Strictly focused on mid-to-enterprise manufacturing companies ($10M - $150M annual revenue bracket). No credit card required.
        </p>
      </div>
    </section>
  );
}
