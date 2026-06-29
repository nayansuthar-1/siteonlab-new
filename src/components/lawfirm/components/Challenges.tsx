"use client";

import React, { useState } from "react";
import { challenges } from "../data/copy";
import { AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function Challenges() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedId(expandedId === idx ? null : idx);
  };

  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Headers */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
            Industry Challenges
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Why growing a modern <span className="italic font-serif text-[#3b82f6]">Law Firm</span> is becoming exponentially more competitive.
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
            The traditional legal buying process has shattered. Today's commercial GCs, tech executives, and high-value legal consumers are highly self-educated, researching solutions long before ever talking to a partner. With soaring digital acquisition costs, bar constraints, and generative search changing how information is retrieved, legacy marketing playbooks are no longer viable.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, idx) => {
            const isExpanded = expandedId === idx;
            return (
              <div
                key={idx}
                id={`challenge-card-${idx}`}
                onClick={() => toggleExpand(idx)}
                className={`group cursor-pointer flex flex-col justify-between p-6 rounded-sm border transition-all duration-300 ${
                  isExpanded
                    ? "bg-white/10 border-[#3b82f6]/40 shadow-lg shadow-[#3b82f6]/5"
                    : "bg-white/5 border-white/10 hover:border-[#3b82f6]/30 hover:bg-white/10"
                }`}
              >
                <div>
                  {/* Top line: Icon and Expand indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/5 p-2 rounded-sm border border-white/10">
                      <AlertCircle className="h-4 w-4 text-[#3b82f6]" />
                    </div>
                    <span className="text-xs text-white/40 font-mono">0{idx + 1}</span>
                  </div>

                  {/* Challenge Title */}
                  <h3 className="text-lg font-sans font-semibold text-white group-hover:text-[#3b82f6] transition-colors duration-200">
                    {challenge.title}
                  </h3>

                  {/* Challenge Description */}
                  <p className="mt-3 text-white/50 text-xs sm:text-sm font-light leading-relaxed">
                    {challenge.description}
                  </p>
                </div>

                {/* Interactive Expandable Segment */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <button className="flex items-center space-x-1.5 text-xs font-sans font-bold uppercase tracking-wider text-[#3b82f6] group-hover:text-white transition-colors duration-200">
                    <span>{isExpanded ? "Hide Business Impact" : "Show Business Impact"}</span>
                    {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-3 p-3 bg-[#0A0A0B]/85 rounded-sm border border-white/10 text-xs text-white/70 font-sans leading-relaxed animate-fadeIn">
                      <span className="font-bold text-[#3b82f6] font-mono block mb-1 tracking-wider uppercase">REVENUE IMPACT:</span>
                      {challenge.impact}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
