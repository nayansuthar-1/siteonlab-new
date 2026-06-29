"use client";

import { useState } from "react";
import { CHALLENGES, INDUSTRY_NAME } from "../data/copywriting";
import { AlertCircle, ArrowRight, HelpCircle } from "lucide-react";

export default function IndustryChallenges() {
  const [selectedChallenge, setSelectedChallenge] = useState<string>(CHALLENGES[0].id);

  return (
    <section id="challenges" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold font-mono text-blue-500 uppercase tracking-widest mb-3">
            Industry Challenges
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Why growing a modern {INDUSTRY_NAME} company is becoming more competitive.
          </h2>
          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            Buyer behavior has fundamentally shifted in the industrial sector. Procurement officers, technical directors, and supply chain managers bypass traditional sales reps, opting instead to execute deep online investigations, download CAD parameters, and consult AI summary engines. Traditional sales outreach alone is no longer enough to scale predictably.
          </p>
        </div>

        {/* Challenge Cards & Interactive Mitigation System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Challenge Cards Left (Col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CHALLENGES.map((challenge) => {
              const isSelected = selectedChallenge === challenge.id;
              return (
                <div
                  key={challenge.id}
                  onClick={() => setSelectedChallenge(challenge.id)}
                  className={`p-6 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? "bg-slate-900/80 border-blue-500/80 shadow-lg shadow-blue-900/20"
                      : "bg-slate-900/30 border-slate-800/60 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-1.5 rounded-md border ${
                      isSelected ? "bg-blue-950/50 border-blue-500/50 text-blue-400" : "bg-slate-900 border-slate-800 text-slate-500"
                    }`}>
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <h3 className={`text-sm font-semibold tracking-tight ${isSelected ? "text-white" : "text-slate-300"}`}>
                      {challenge.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                    {challenge.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-blue-500 hover:text-blue-400 font-medium">
                    <span>Analyze impact</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Mitigation Sidebar Right (Col-span-5) */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800/50 p-8 rounded-xl relative overflow-hidden backdrop-blur-sm sticky top-24">
            <div className="absolute top-0 right-0 w-36 h-36 bg-blue-950/10 blur-[40px] rounded-full -mr-12 -mt-12"></div>
            
            <div className="flex items-center gap-2 mb-6 text-slate-500 text-xs font-mono">
              <HelpCircle className="w-4 h-4 text-blue-500" />
              <span>DIAGNOSTIC IMPACT REPORT</span>
            </div>

            {(() => {
              const current = CHALLENGES.find((c) => c.id === selectedChallenge) || CHALLENGES[0];
              return (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest block mb-1">SELECTED OBSTACLE</span>
                    <h4 className="text-xl font-bold text-white tracking-tight">{current.title}</h4>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">EXECUTIVE EXPLANATION</span>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {current.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-950/20 border border-slate-700/50 text-xs">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-2">COMMERCIAL CONSEQUENCE</span>
                    <p className="text-slate-300 font-sans leading-relaxed">
                      This challenge results in long, stalled pipelines, missed opportunities during early-stage buyer screening, and an over-reliance on outbound sales teams chasing shrinking customer pools.
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-slate-500 italic">
                      ðŸ’¡ Click other challenges to explore specific B2B impact factors and see why industrial manufacturers partner with HybridMonks.
                    </p>
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
