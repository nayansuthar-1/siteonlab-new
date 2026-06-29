"use client";

import { useState } from "react";
import { JOURNEY, INDUSTRY_NAME } from "../data/copywriting";
import { Compass, BookOpen, CheckSquare, Sparkles } from "lucide-react";

export default function BuyingJourney() {
  const [activeStage, setActiveStage] = useState<string>(JOURNEY[0].id);

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Compass className="w-5 h-5" />;
      case 1: return <BookOpen className="w-5 h-5" />;
      case 2: return <CheckSquare className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="journey" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest mb-3">
            Buyer Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            How modern {INDUSTRY_NAME} buyers choose vendors.
          </h2>
          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            Purchasing industrial services or high-value machinery is never an impulsive decision. Sourcing agents, procurement officers, and engineering leads follow a rigorous multi-stage checklist. Here is how they buyâ€”and how we optimize each phase.
          </p>
        </div>

        {/* Interactive Stepper Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Timeline Selector Buttons Left (Col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            {JOURNEY.map((stage, index) => {
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all flex items-center gap-4 cursor-pointer ${
                    isActive
                      ? "bg-slate-900 border-blue-500 text-white shadow-lg"
                      : "bg-slate-900/10 border-slate-800/60 text-slate-400 hover:border-slate-700"
                  }`}
                >
                  <div className={`p-2 rounded-lg border ${
                    isActive ? "bg-blue-600 text-white border-blue-400" : "bg-slate-900 border-slate-800 text-slate-500"
                  }`}>
                    {getIcon(index)}
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] font-mono text-blue-400 tracking-wider block uppercase font-semibold">PHASE 0{index + 1}</span>
                    <h3 className="text-base font-bold tracking-tight">{stage.stageName.split(". ")[1]}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Stage Content Right (Col-span-7) */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/50 rounded-2xl p-8 relative overflow-hidden min-h-[420px] flex flex-col justify-between">
            {/* Ambient decoration */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-950/10 blur-[50px] rounded-full"></div>

            {(() => {
              const current = JOURNEY.find((j) => j.id === activeStage) || JOURNEY[0];
              const currentIndex = JOURNEY.findIndex((j) => j.id === activeStage);
              return (
                <div className="space-y-8 relative z-10">
                  
                  {/* Stage Headline */}
                  <div className="flex items-center justify-between border-b border-slate-850 pb-4">
                    <h4 className="text-2xl font-bold text-white tracking-tight">
                      {current.stageName}
                    </h4>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-blue-400 font-semibold">
                      STAGE_ALIGNED
                    </span>
                  </div>

                  {/* Buyer Mindset */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-semibold">BUYER MINDSET & CONTEXT</span>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans">
                      {current.buyerMindset}
                    </p>
                  </div>

                  {/* Sourcing Challenge */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest block font-semibold">CRITICAL BARRIER OR FRICTION</span>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {current.challenge}
                    </p>
                  </div>

                  {/* SiteOnLab Solutions */}
                  <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/60 space-y-2">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-semibold">âœ¨ HOW SITEONLAB CAPTURES & ASSISTS</span>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans">
                      {current.siteOnLabSupport}
                    </p>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 italic pt-2">
                    ðŸ‘‰ Interactive view: Currently showing step {currentIndex + 1} of 4 in the industrial sales sequence.
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
