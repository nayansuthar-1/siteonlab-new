"use client";

import { ArrowRight, Sparkles, PhoneCall, CheckCircle } from 'lucide-react';

interface FinalCTAProps {
  onRequestBlueprint: () => void;
}

export default function FinalCTA({ onRequestBlueprint }: FinalCTAProps) {
  return (
    <section id="final-cta-section" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/30 border-t border-zinc-900">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-[250px] w-[250px] rounded-full bg-emerald-900/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glow Sparkle */}
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-400 mb-6">
          <Sparkles className="h-4.5 w-4.5 animate-pulse" />
        </div>

        {/* Focal H2 */}
        <h2 className="font-sans text-3.5xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl mx-auto">
          Let’s make Content Marketing your most efficient growth channel.
        </h2>

        {/* Verbatim requested copy */}
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
          Book a 30-minute strategy call. We’ll review your current <strong className="text-zinc-200">content marketing</strong> performance, identify opportunities your competitors are missing, and show you what it would take to turn <strong className="text-zinc-200">content marketing</strong> into qualified pipeline.
        </p>

        {/* Interactive CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-10 max-w-md sm:max-w-none mx-auto">
          <button
            id="final-primary-cta"
            onClick={onRequestBlueprint}
            className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-sans text-sm font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 active:scale-98 transition-all duration-150 cursor-pointer"
          >
            <span>Request a Growth Blueprint</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            id="final-secondary-cta"
            onClick={onRequestBlueprint}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border border-zinc-800 hover:border-zinc-700 font-sans text-sm font-semibold py-4 px-8 rounded-xl active:scale-98 transition-all duration-150 cursor-pointer"
          >
            <PhoneCall className="h-4 w-4 text-emerald-400" />
            <span>Take the Content Scorecard Assessment</span>
          </button>
        </div>

        {/* Quick assurance row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-mono">
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            <span>No obligations strategy walk</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            <span>Competitor audit map included</span>
          </div>
        </div>

      </div>
    </section>
  );
}
