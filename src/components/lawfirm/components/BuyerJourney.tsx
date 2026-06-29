"use client";

import React from "react";
import { buyerJourney } from "../data/copy";
import { Circle, MapPin, Eye, FileSearch, ShieldCheck, CheckSquare } from "lucide-react";

export default function BuyerJourney() {
  // Mapping stage indices to distinct visual helpers
  const icons = [
    <Eye className="h-5 w-5 text-[#3b82f6]" />,
    <FileSearch className="h-5 w-5 text-[#3b82f6]" />,
    <ShieldCheck className="h-5 w-5 text-[#3b82f6]" />,
    <CheckSquare className="h-5 w-5 text-[#3b82f6]" />
  ];

  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
            Buyer Journey
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            How modern <span className="italic font-serif text-[#3b82f6]">Law Firm</span> buyers choose vendors.
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
            Legal clients navigate a highly structured, risk-averse vetting process before committing to high-stakes retainer agreements. We map authoritative digital content and frictionless channels to satisfy decision-makers at each critical phase.
          </p>
        </div>

        {/* 4-Stage Horizontal/Vertical Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle connecting connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#3b82f6]/10 via-[#3b82f6]/30 to-[#3b82f6]/10 pointer-events-none" />

          {buyerJourney.map((stageInfo, idx) => (
            <div
              key={idx}
              id={`buyer-stage-${idx}`}
              className="bg-white/5 border border-white/10 hover:border-[#3b82f6]/30 p-6 rounded-sm relative transition-all duration-300"
            >
              {/* Chronological Indicator Ball */}
              <div className="flex items-center space-x-3 mb-6 relative">
                <div className="z-10 flex items-center justify-center h-10 w-10 rounded-full bg-[#0A0A0B] border border-[#3b82f6]/40 shadow-md">
                  {icons[idx] || <Circle className="h-4 w-4 text-[#3b82f6]" />}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono tracking-widest text-[#3b82f6] font-bold uppercase">STAGE 0{idx + 1}</span>
                  <span className="text-sm font-sans font-bold text-white tracking-tight">{stageInfo.stage.split(" & ")[0]}</span>
                </div>
              </div>

              {/* Mindset Segment */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono font-bold text-white/40 uppercase tracking-wider mb-1">Buyer Mindset</h4>
                  <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed font-sans">
                    {stageInfo.buyerMindset}
                  </p>
                </div>

                {/* Agency Support Segment */}
                <div className="pt-3 border-t border-white/10">
                  <h4 className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wider mb-1">Our Strategy</h4>
                  <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed font-sans">
                    {stageInfo.agencySupport}
                  </p>
                </div>

                {/* Content Assets Badges */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest mb-2">Required Core Assets:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {stageInfo.contentAssets.map((asset, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10px] font-sans px-2 py-1 rounded-sm bg-[#0A0A0B] border border-white/10 text-white/80 font-medium"
                      >
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
