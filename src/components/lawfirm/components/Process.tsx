"use client";

import React, { useState } from "react";
import { processSteps } from "../data/copy";
import { Clock, CheckSquare } from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            From strategy to <span className="italic font-serif text-[#3b82f6]">predictable revenue</span>.
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
            Our multi-disciplinary onboarding and execution roadmap is engineered for zero downtime and full regulatory compliance, ensuring a frictionless launch of your custom pipeline systems.
          </p>
        </div>

        {/* Step Grid with Sidebar Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Step selectors with Timeline indicators */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            {processSteps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`group flex items-center justify-between p-5 rounded-sm border text-left transition-all duration-200 cursor-pointer ${
                  activeStep === idx
                    ? "bg-white/10 border-[#3b82f6]/30 text-white shadow-lg shadow-[#3b82f6]/5"
                    : "bg-[#0A0A0B] border-white/10 hover:border-white/20 text-white/50 hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`font-mono text-base font-bold transition-colors duration-200 ${
                    activeStep === idx ? "text-[#3b82f6]" : "text-white/30 group-hover:text-white/50"
                  }`}>
                    {step.step}
                  </div>
                  <div className="font-sans font-semibold text-sm tracking-wide">
                    {step.title.split(" & ")[0]}
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-xs font-mono bg-[#0A0A0B] border border-white/10 px-2 py-1 rounded-sm text-white/40 group-hover:text-white/60">
                  <Clock className="h-3 w-3 text-[#3b82f6]/70" />
                  <span>{step.timeline.split(" - ")[0]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Focused Step Details Display */}
          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-sm p-8 relative flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#3b82f6]/5 blur-3xl pointer-events-none" />

            <div>
              {/* Header Title & Timeline Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#3b82f6] font-bold uppercase block">OPERATIONAL STEP {processSteps[activeStep].step}</span>
                  <h3 className="text-xl sm:text-2xl font-sans font-semibold text-white mt-1">
                    {processSteps[activeStep].title}
                  </h3>
                </div>
                <div className="self-start sm:self-center flex items-center space-x-1.5 px-3 py-1.5 bg-[#0A0A0B] border border-white/10 rounded-sm text-xs font-mono text-[#3b82f6] font-semibold">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{processSteps[activeStep].timeline}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed font-light font-sans mb-8">
                {processSteps[activeStep].description}
              </p>

              {/* Key Deliverables Bullet Grid */}
              <div>
                <h4 className="text-xs font-mono font-bold text-white/50 uppercase tracking-wider mb-4 flex items-center space-x-1.5">
                  <CheckSquare className="h-4 w-4 text-[#3b82f6]/80" />
                  <span>Key Agency Deliverables:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {processSteps[activeStep].deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start space-x-2.5 bg-[#0A0A0B]/50 p-3 rounded-sm border border-white/10"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
                      <span className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
