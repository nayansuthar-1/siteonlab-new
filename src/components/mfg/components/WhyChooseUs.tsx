"use client";

import { DIFFERENTIATORS, INDUSTRY_NAME } from "../data/copywriting";
import { Hammer, Coins, BrainCircuit, Users } from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Hammer className="w-5 h-5 text-blue-400" />;
      case 1: return <Coins className="w-5 h-5 text-blue-400" />;
      case 2: return <BrainCircuit className="w-5 h-5 text-blue-400" />;
      default: return <Users className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="why-choose-us" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50 relative overflow-hidden">
      {/* Visual blueprint background decorations */}
      <div className="absolute right-0 top-0 w-80 h-80 border-r border-t border-slate-800/30 pointer-events-none translate-x-10 -translate-y-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest mb-3">
            Why Companies Choose HybridMonks
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            A B2B growth agency that understands {INDUSTRY_NAME}.
          </h2>
          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            We are not generalists running generic copy-paste templates. We understand the physical and commercial realities of modern precision engineering, supply chain risk, and long-term procurement agreements.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIFFERENTIATORS.map((diff, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 p-8 rounded-xl transition-all flex gap-6 items-start"
            >
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-blue-400 shrink-0">
                {getIcon(idx)}
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {diff.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-sans">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
