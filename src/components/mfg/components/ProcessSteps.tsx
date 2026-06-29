"use client";

import { PROCESS } from "../data/copywriting";
import { Search, Map, Wrench, BarChart4, ChevronRight } from "lucide-react";

export default function ProcessSteps() {
  const getIcon = (step: number) => {
    switch (step) {
      case 1: return <Search className="w-5 h-5 text-blue-400" />;
      case 2: return <Map className="w-5 h-5 text-blue-400" />;
      case 3: return <Wrench className="w-5 h-5 text-blue-400" />;
      default: return <BarChart4 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="process" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest mb-3">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            From strategy to predictable revenue.
          </h2>
          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            We don't believe in guessing games or sudden campaign launches. We execute a rigorous, highly structured onboarding framework designed to align with your shop floor capacity and corporate goals.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS.map((step, idx) => (
            <div 
              key={step.step} 
              className="bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 p-6 rounded-xl flex flex-col justify-between transition-all relative"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                    {getIcon(step.step)}
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-blue-400 font-semibold">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  Step {step.step}: {step.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed font-sans mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables lists */}
              <div className="pt-4 border-t border-slate-800/50">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2">KEY DELIVERABLES</span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {step.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-1.5 font-sans">
                      <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" />
                      <span>{del}</span>
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
