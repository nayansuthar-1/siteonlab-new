"use client";

import { Compass, BookOpen, Search, HelpCircle, Eye, ShieldCheck, Zap, Handshake } from "lucide-react";
import { CYBERSECURITY_COPY } from "../data/copywriting";

export default function BuyerJourneySection() {
  const { eyebrow, h2, introduction, stages } = CYBERSECURITY_COPY.journey;

  const icons = [
    <Compass className="h-5 w-5 text-sky-400" />,
    <Search className="h-5 w-5 text-sky-400" />,
    <ShieldCheck className="h-5 w-5 text-sky-400" />,
    <Handshake className="h-5 w-5 text-sky-400" />
  ];

  return (
    <section className="bg-slate-950 py-20 lg:py-28 border-b border-slate-800" id="buyer-journey">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-sky-500"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-500">{eyebrow}</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl font-display leading-[1.1]">
            {h2}
          </h2>
          <p className="mt-6 text-base text-slate-400 leading-relaxed font-sans max-w-2xl">
            {introduction}
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mt-16 relative">
          {/* Vertical timeline bar for desktop */}
          <div className="absolute left-8 top-4 bottom-4 w-px bg-slate-800 hidden md:block" />

          <div className="space-y-12">
            {stages.map((stage, idx) => (
              <div key={stage.id} className="relative md:pl-20 text-left">
                
                {/* Timeline Node Icon (Desktop) */}
                <div className="absolute left-3 top-1 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-sky-400 z-10">
                  {icons[idx] || <BookOpen className="h-5 w-5" />}
                </div>

                <div className="rounded-sm border border-slate-800 bg-slate-900/10 p-6 md:p-8 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white font-sans">
                      {stage.stageName}
                    </h3>
                    <span className="inline-block self-start rounded-sm bg-slate-900 px-2.5 py-1 text-xs font-mono text-slate-400 border border-slate-800">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Buyer Mindset column */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                        <Eye className="h-4 w-4 text-sky-500/80" />
                        Buyer Mindset
                      </div>
                      <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans">
                        {stage.buyerMindset}
                      </p>
                    </div>

                    {/* Critical Friction point column */}
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400 font-mono">
                        <HelpCircle className="h-4 w-4 text-rose-500/80" />
                        Critical friction
                      </div>
                      <p className="mt-3 text-sm text-rose-200/85 leading-relaxed font-sans">
                        {stage.challenges}
                      </p>
                    </div>

                    {/* HybridMonks Campaign Playbook */}
                    <div className="lg:border-l lg:border-slate-800 lg:pl-6">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
                        <Zap className="h-4 w-4 text-sky-400" />
                        HybridMonks Playbook
                      </div>
                      <p className="mt-3 text-sm text-sky-100/90 leading-relaxed font-sans font-medium">
                        {stage.marketingStrategy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
