"use client";

import React, { useState, forwardRef } from "react";
import { caseStudies } from "../data/copy";
import { Trophy, Clock, ArrowRight, CircleDot } from "lucide-react";

interface CaseStudiesProps {
  onOpenBlueprintWithPractice: (practice: string) => void;
}

const CaseStudies = forwardRef<HTMLDivElement, CaseStudiesProps>(
  ({ onOpenBlueprintWithPractice }, ref) => {
    const [activeCase, setActiveCase] = useState(0);

    return (
      <section
        ref={ref}
        id="case-studies-section"
        className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl text-left mb-16">
            <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
              Success Stories
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
              Growth results from elite <span className="italic font-serif text-[#3b82f6]">Law Firms</span>.
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
              We translate marketing initiatives into cold practice revenue. Review our recent jurisdictional campaigns and structural acquisitions.
            </p>
          </div>

          {/* Interactive Case Study Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Case Toggles */}
            <div className="lg:col-span-4 flex flex-col space-y-3">
              {caseStudies.map((cs, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCase(idx)}
                  className={`flex flex-col text-left p-5 rounded-sm border transition-all duration-200 cursor-pointer ${
                    activeCase === idx
                      ? "bg-white/10 border-[#3b82f6]/30 text-white shadow-lg shadow-[#3b82f6]/5"
                      : "bg-[#0A0A0B] border-white/10 hover:border-white/15 text-white/50"
                  }`}
                >
                  <span className="text-[9px] font-mono font-bold text-[#3b82f6] tracking-wider uppercase mb-1">
                    {cs.industry}
                  </span>
                  <span className="font-sans font-semibold text-sm leading-snug">
                    {cs.practiceArea}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Active Case Narrative and Metric Board */}
            <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-sm p-8 relative overflow-hidden flex flex-col justify-between min-h-[460px]">
              {/* Corner accent decorative badge */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6]/5 blur-3xl pointer-events-none" />

              <div>
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5 mb-6 gap-3">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block">
                      CASE STUDY FOCUS
                    </span>
                    <h3 className="text-xl font-sans font-semibold text-white mt-1">
                      {caseStudies[activeCase].practiceArea}
                    </h3>
                  </div>
                  <div className="self-start sm:self-center flex items-center space-x-1.5 px-3 py-1 bg-[#0A0A0B] border border-white/10 rounded-sm text-xs font-mono text-white/50">
                    <Clock className="h-3.5 w-3.5 text-[#3b82f6]/80" />
                    <span>{caseStudies[activeCase].timeline}</span>
                  </div>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xs sm:text-sm font-sans leading-relaxed">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wide mb-2 flex items-center space-x-1.5">
                      <CircleDot className="h-3 w-3 text-[#3b82f6]" />
                      <span>The Challenge</span>
                    </h4>
                    <p className="text-white/80 font-light bg-[#0A0A0B]/40 border border-white/10 p-4 rounded-sm">
                      {caseStudies[activeCase].challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wide mb-2 flex items-center space-x-1.5">
                      <Trophy className="h-3.5 w-3.5 text-[#3b82f6]" />
                      <span>HybridMonks Solution</span>
                    </h4>
                    <p className="text-white/80 font-light bg-[#0A0A0B]/40 border border-white/10 p-4 rounded-sm">
                      {caseStudies[activeCase].solution}
                    </p>
                  </div>
                </div>

                {/* Outcome Segment */}
                <div className="bg-[#0A0A0B]/50 border border-white/10 p-5 rounded-sm mb-8">
                  <h4 className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wider mb-2">
                    BUSINESS REVENUE OUTCOME
                  </h4>
                  <p className="text-white/85 text-xs sm:text-sm font-light leading-relaxed font-sans">
                    {caseStudies[activeCase].outcome}
                  </p>
                </div>
              </div>

              {/* Empirical Metric Grid Board */}
              <div className="border-t border-white/10 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudies[activeCase].metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="bg-[#0A0A0B] border border-white/10 rounded-sm p-4 flex flex-col justify-center items-center text-center"
                    >
                      <span className="text-base sm:text-lg font-serif font-bold text-white">
                        {metric.split(" ")[0]}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono font-medium text-[#3b82f6] mt-1">
                        {metric.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Request Blueprint Contextual Trigger CTA */}
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() =>
                      onOpenBlueprintWithPractice(
                        caseStudies[activeCase].practiceArea
                      )
                    }
                    className="group flex items-center space-x-2 text-xs font-sans font-semibold text-[#3b82f6] hover:text-[#3b82f6]/80 transition-colors duration-200 cursor-pointer"
                  >
                    <span>
                      Apply Strategy to My {caseStudies[activeCase].practiceArea.split(" & ")[0]} Practice
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default CaseStudies;
