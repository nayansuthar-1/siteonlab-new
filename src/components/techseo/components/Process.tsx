"use client";

import { ClipboardCheck, Route, ShieldAlert, TrendingUp, Calendar } from "lucide-react";
import { ProcessStep } from "../types";

export default function Process() {
  const steps: ProcessStep[] = [
    {
      id: "step-1",
      stepNum: "01",
      title: "Audit and intent map",
      description: "We review your current crawl files, script performance, competitors, rendering pipelines, and revenue-intent opportunities.",
      timeline: "2 weeks",
    },
    {
      id: "step-2",
      stepNum: "02",
      title: "Architecture and sprint plan",
      description: "We build the architectural roadmap, prioritize speed-blocking opportunities, and sequence developer tickets by likely pipeline impact.",
      timeline: "1 week",
    },
    {
      id: "step-3",
      stepNum: "03",
      title: "Build, launch, and measure",
      description: "We directly create, implement, deploy optimizations (or partner with your engineering team), and wire the results to pipeline reporting systems.",
      timeline: "Ongoing",
    },
    {
      id: "step-4",
      stepNum: "04",
      title: "Optimize for pipeline",
      description: "We continuously fine-tune performance using real-time search data, AI engine visibility logs, conversion rates, and direct sales team feedback.",
      timeline: "Monthly",
    },
  ];

  return (
    <section id="process" className="bg-[#050505] py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-3">
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            From technical bottlenecks to search dominance in 90 days.
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-light">
            We follow an engineering-backed process to accelerate indexation, streamline crawl budget, and convert search visits into booked B2B revenue.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6">
          {steps.map((step, idx) => {
            const icons = [ClipboardCheck, Route, ShieldAlert, TrendingUp];
            const IconComp = icons[idx] || ClipboardCheck;

            return (
              <div 
                key={step.id}
                className="bg-[#080808] border border-white/5 p-6 rounded-xl relative hover:bg-[#111] hover:border-white/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-blue-500 text-xs font-bold">{step.stepNum}</span>
                      <span className="text-[10px] text-gray-600 font-mono uppercase tracking-wider">Step</span>
                    </div>
                    
                    {/* Timeline tag */}
                    <div className="flex items-center gap-1 font-mono text-[9px] text-gray-400 bg-[#050505] px-2.5 py-1 rounded-full border border-white/5">
                      <Calendar className="h-3 w-3 text-blue-500" />
                      <span>{step.timeline}</span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
                  <span>ENGAGEMENT PHASE</span>
                  <span className="text-gray-400">STAGE {step.stepNum}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
