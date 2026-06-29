"use client";

import { SOLUTIONS, INDUSTRY_NAME } from "../data/copywriting";
import { CheckCircle2, Award, Zap, HeartHandshake } from "lucide-react";

export default function HybridMonksSolutions() {
  return (
    <section id="solutions" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50 relative">
      <div className="absolute top-1/2 left-1/2 w-[35rem] h-[35rem] bg-blue-950/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest mb-3">
            Our Solution
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            A complete B2B growth system built for {INDUSTRY_NAME} companies.
          </h2>
          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            HybridMonks bridges the gap between complex engineering capabilities and enterprise buyer requirements. We deploy a unified system that identifies active demand, captures buying committees, and records every single transaction back to its exact organic source.
          </p>
        </div>

        {/* Grid of Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((sol, index) => (
            <div 
              key={sol.id} 
              className="bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 p-8 rounded-xl flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-blue-400">
                    <span className="font-mono text-sm font-semibold">{`0${index + 1}`}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-500/40 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-white tracking-tight mb-3">
                  {sol.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  {sol.description}
                </p>
              </div>

              {/* Outcome Focused Footnote */}
              <div className="mt-8 pt-4 border-t border-slate-800/60 text-xs flex items-start gap-2">
                <div className="p-1 rounded bg-blue-950/40 border border-slate-700/50 text-blue-400 shrink-0 mt-0.5">
                  <Zap className="w-3 h-3" />
                </div>
                <div>
                  <span className="text-slate-500 font-mono block uppercase text-[9px] tracking-wide mb-0.5">EXPECTED OUTCOME:</span>
                  <span className="text-slate-300 font-sans font-medium">{sol.outcome}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Special Custom Agency Guarantee CTA Card */}
          <div className="bg-gradient-to-br from-slate-900/40 to-[#0A0A0B] border border-blue-500/20 p-8 rounded-xl flex flex-col justify-between transition-all relative overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full"></div>
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-lg bg-blue-950/40 border border-slate-700/50 text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">Our Commitment</span>
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                No Vanity Metrics, Period.
              </h3>
              
              <p className="text-sm text-slate-400 leading-relaxed font-sans mb-6">
                We measure success purely on sourced qualified pipeline, RFQ submissions, and signed enterprise contracts. If a channel does not generate cold, hard business outcomes, we optimize it or turn it off.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/60 text-xs flex items-center gap-2 text-slate-500">
              <HeartHandshake className="w-4 h-4 text-blue-500" />
              <span>Full compliance with strict NDA parameters</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
