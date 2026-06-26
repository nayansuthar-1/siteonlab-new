"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, ShieldAlert, Layers, PlayCircle, Eye, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Audit and intent map",
      description: "We review your current performance, key competitors, buyer journey, and immediate high-impact revenue opportunities.",
      timeline: "2 weeks",
      icon: <ShieldAlert size={20} className="text-[#3b82f6]" />,
      deliverables: [
        "Full-funnel dropoff diagnostic report",
        "Qualitative heatmap & scroll analysis",
        "Form completion & checkout friction logs",
        "Key buyer objection map"
      ]
    },
    {
      num: "02",
      title: "Architecture and sprint plan",
      description: "We construct the technical testing roadmap, prioritize optimization sprints, and sequence experiments based on likely business impact.",
      timeline: "1 week",
      icon: <Layers size={20} className="text-[#3b82f6]" />,
      deliverables: [
        "A/B experiment pipeline dashboard",
        "Prioritized copy & layout hypothesis log",
        "Interactive wireframes of proposed changes",
        "Event tracking schema alignment"
      ]
    },
    {
      num: "03",
      title: "Build, launch, and measure",
      description: "We create high-converting copy, design the test variations, implement front-end updates, and connect tests to telemetry systems.",
      timeline: "Ongoing",
      icon: <PlayCircle size={20} className="text-[#3b82f6]" />,
      deliverables: [
        "Zero-flicker client-side scripts",
        "High-intent conversion copywriting",
        "A/B platform configuration & verification",
        "CRM integration connection"
      ]
    },
    {
      num: "04",
      title: "Optimize for pipeline",
      description: "We continuously refine performance using search data, AI visibility markers, live conversion data, and direct sales team feedback.",
      timeline: "Monthly",
      icon: <Eye size={20} className="text-[#3b82f6]" />,
      deliverables: [
        "Monthly statistical confidence reports",
        "Next-cycle hypothesis updates",
        "Qualified pipeline yield tracking",
        "A/B win archiving and global implementation"
      ]
    }
  ];

  return (
    <section id="process" className="py-24 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] uppercase tracking-[0.2em]">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-100 tracking-tight leading-tight">
            From traffic leaks to pipeline velocity in 90 days.
          </h2>
          <p className="text-xs sm:text-sm text-white/50">
            Click on each step below to inspect the key milestones and standard timelines of a SiteOnLab engagement.
          </p>
        </div>

        {/* Desktop timeline / step selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4 text-left">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-5 rounded-xl border transition-all flex items-start gap-4 cursor-pointer relative overflow-hidden ${
                  activeStep === idx
                    ? 'bg-[#0D0D0D] border-[#3b82f6]/30 shadow-lg shadow-[#3b82f6]/2'
                    : 'bg-black border-white/10 hover:border-white/20 hover:bg-white/[0.01]'
                }`}
              >
                {activeStep === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3b82f6]" />
                )}
                
                <span className={`text-sm font-mono font-bold shrink-0 mt-0.5 ${activeStep === idx ? 'text-[#3b82f6]' : 'text-slate-600'}`}>
                  {s.num}
                </span>

                <div className="space-y-1">
                  <h4 className={`text-sm sm:text-base font-display font-medium ${activeStep === idx ? 'text-slate-100' : 'text-slate-400'}`}>
                    {s.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <Calendar size={10} />
                    <span>Duration: {s.timeline}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active step details view */}
          <div className="lg:col-span-7 bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 md:p-8 min-h-[380px] flex flex-col justify-between relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-black rounded-2xl border border-white/10">
                    {steps[activeStep].icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-500">Step {steps[activeStep].num}</span>
                    <h3 className="text-lg sm:text-xl font-display font-medium text-slate-100">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full px-3.5 py-1 text-xs font-mono text-[#3b82f6] flex items-center gap-1.5 shrink-0">
                  <Calendar size={12} />
                  <span>{steps[activeStep].timeline}</span>
                </div>
              </div>

              <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                  Deliverables & Outputs:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {steps[activeStep].deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="bg-black border border-white/5 p-3 rounded-lg flex items-start gap-2">
                      <ChevronRight size={14} className="text-[#3b82f6] mt-0.5 shrink-0" />
                      <span className="text-xs text-white/80 leading-normal">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 mt-8 pt-4 flex flex-col sm:flex-row gap-2 justify-between items-start sm:items-center text-xs font-mono text-slate-500">
              <span>Full deployment managed entirely by SiteOnLab.</span>
              <span>Next Step: {steps[(activeStep + 1) % steps.length].title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
