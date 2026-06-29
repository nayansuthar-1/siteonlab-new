"use client";

import React from "react";
import { differentiators } from "../data/copy";
import { ShieldAlert, Cpu, Network, Palette, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  // Map icons to differentiators
  const icons = [
    <ShieldAlert className="h-6 w-6 text-[#3b82f6]" />,
    <Cpu className="h-6 w-6 text-[#3b82f6]" />,
    <Network className="h-6 w-6 text-[#3b82f6]" />,
    <Palette className="h-6 w-6 text-[#3b82f6]" />
  ];

  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
            Why Companies Choose SiteOnLab
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            A B2B growth agency that understands <span className="italic font-serif text-[#3b82f6]">Law Firms</span>.
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
            We are not a generalist retail agency. We do not use cookie-cutter templates or report on empty clicks. We speak the language of litigation, corporate advisory, and jurisdictional rules.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              id={`diff-card-${idx}`}
              className="bg-white/5 border border-white/10 rounded-sm p-8 hover:border-[#3b82f6]/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner ambient indicator */}
              <div className="absolute top-0 right-0 p-4 font-mono text-white/20 text-xs">
                // 0{idx + 1}
              </div>

              <div>
                {/* Icon & Title */}
                <div className="flex items-center space-x-4 mb-5">
                  <div className="bg-[#0A0A0B] p-2.5 rounded-sm border border-white/10">
                    {icons[idx] || <CheckCircle className="h-6 w-6 text-[#3b82f6]" />}
                  </div>
                  <h3 className="text-lg sm:text-xl font-sans font-semibold text-white">
                    {diff.title}
                  </h3>
                </div>

                {/* Explanation */}
                <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed font-sans mb-6">
                  {diff.description}
                </p>
              </div>

              {/* Proof Point Block */}
              <div className="bg-[#0A0A0B]/70 p-4 rounded-sm border border-white/10 flex items-start space-x-2.5">
                <span className="text-[10px] font-mono font-bold text-[#3b82f6] bg-[#3b82f6]/10 px-1.5 py-0.5 rounded-sm mt-0.5 uppercase tracking-wider">
                  PROOF
                </span>
                <p className="text-white/50 text-xs font-light font-sans leading-relaxed">
                  {diff.proofPoint}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
