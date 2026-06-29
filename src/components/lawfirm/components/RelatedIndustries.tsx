"use client";

import React from "react";
import { relatedIndustries } from "../data/copy";
import { ArrowRight } from "lucide-react";

export default function RelatedIndustries() {
  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
            Other Industries
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Explore how we help other B2B companies grow.
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
            While we have a dedicated compliance division for Law Firms, HybridMonks builds pipeline and visibility across multiple technical commercial sectors.
          </p>
        </div>

        {/* 2x4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedIndustries.map((ind, idx) => (
            <div
              key={idx}
              id={`industry-card-${idx}`}
              className="group bg-white/5 border border-white/10 hover:border-[#3b82f6]/30 rounded-sm p-5 transition-all duration-300 hover:bg-white/10 flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <h3 className="text-sm sm:text-base font-sans font-semibold text-white transition-colors duration-200">
                  {ind.name}
                </h3>
                <p className="mt-2 text-white/70 text-[11px] sm:text-xs font-light leading-relaxed font-sans">
                  {ind.description}
                </p>
              </div>

              {/* Link Indicator */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                <span className="text-white/40">PATH: {ind.link}</span>
                <span className="flex items-center space-x-1 text-[#3b82f6]/80 group-hover:text-[#3b82f6] font-sans font-semibold transition-colors duration-200">
                  <span>View</span>
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
