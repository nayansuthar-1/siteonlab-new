"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Search, Compass, PlayCircle, Layers } from "lucide-react";
import { ProcessStep } from "../types";

export default function Process() {
  const steps: ProcessStep[] = [
    {
      step: "01",
      title: "Audit and Intent Map",
      description: "We review your current paid performance, deep-dive into competitors, map your complete buyer journey, and identify clear, high-yield revenue opportunities.",
      timeline: "2 Weeks"
    },
    {
      step: "02",
      title: "Architecture and Sprint Plan",
      description: "We build the campaign roadmap, prioritize high-intent channels, outline targeted keyword pools, and sequence execution based on likely pipeline impact.",
      timeline: "1 Week"
    },
    {
      step: "03",
      title: "Build, Launch, and Measure",
      description: "We design high-converting landing pages, write direct-response ad copy, deploy campaign assets, and establish end-to-end attribution systems.",
      timeline: "Ongoing"
    },
    {
      step: "04",
      title: "Optimize for Pipeline",
      description: "We continuously refine bidding parameters, prune negative keywords, test ad variations, and leverage sales feedback to scale qualified pipelines.",
      timeline: "Monthly"
    }
  ];

  const getStepIcon = (step: string) => {
    switch (step) {
      case "01": return <Search className="w-5 h-5 text-blue-500" />;
      case "02": return <Compass className="w-5 h-5 text-blue-500" />;
      case "03": return <PlayCircle className="w-5 h-5 text-blue-500" />;
      default: return <Layers className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section 
      className="relative py-24 bg-[#0A0A0B] border-b border-slate-900"
      id="process-section"
    >
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16" id="process-header">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
            From ad spend to qualified sales pipeline in 30 days.
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base font-light">
            We don&apos;t keep you in the dark for months. Our structured sprint framework gets your high-intent search campaigns and account-based social channels audited, structured, and converting inside your first month of partnership.
          </p>
        </div>

        {/* Steps Horizontal/Vertical Path */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative" id="process-steps-grid">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-blue-500/20 -z-10" />

          {steps.map((step, idx) => (
            <div 
              key={step.step}
              className="relative p-6 rounded bg-[#111114] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between h-full"
              id={`process-step-card-${step.step}`}
            >
              <div>
                {/* Header Indicator */}
                <div className="flex items-center justify-between mb-6">
                  {/* Step Number Badge */}
                  <span className="text-xs font-mono font-bold text-blue-400 px-2.5 py-0.5 bg-blue-500/5 rounded border border-blue-500/20">
                    Step {step.step}
                  </span>
                  
                  {/* Duration Badge */}
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    {step.timeline}
                  </span>
                </div>

                {/* Step Title & Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-slate-950 border border-slate-800">
                    {getStepIcon(step.step)}
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Step Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-light mb-6">
                  {step.description}
                </p>
              </div>

              {/* Status bar */}
              <div className="border-t border-slate-900 pt-4 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Milestone</span>
                <span className="text-[10px] font-mono text-blue-400/80 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse" />
                  Sprint Verified
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
