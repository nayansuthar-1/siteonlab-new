"use client";

import React from "react";
import { trustMetrics } from "../data/copy";
import { ShieldCheck, Award, GraduationCap, Scale } from "lucide-react";

export default function TrustSection() {
  // Map icons to metrics for visual polish
  const icons = [
    <Scale className="h-5 w-5 text-[#3b82f6]" />,
    <Award className="h-5 w-5 text-[#3b82f6]" />,
    <GraduationCap className="h-5 w-5 text-[#3b82f6]" />,
    <ShieldCheck className="h-5 w-5 text-[#3b82f6]" />
  ];

  return (
    <section className="bg-[#0A0A0B] border-b border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustMetrics.map((metric, idx) => (
            <div
              key={idx}
              id={`trust-metric-${idx}`}
              className="relative group p-6 rounded-sm bg-white/5 border border-white/10 hover:border-[#3b82f6]/30 transition-all duration-300"
            >
              {/* Metric Icon Accent */}
              <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                {icons[idx] || <Scale className="h-5 w-5 text-[#3b82f6]" />}
              </div>

              {/* Number */}
              <div className="text-3xl sm:text-4xl font-serif text-white tracking-tight group-hover:text-[#3b82f6] transition-colors duration-300">
                {metric.value}
              </div>

              {/* Label */}
              <div className="mt-2 text-xs sm:text-sm font-sans text-white/60 font-light leading-relaxed">
                {metric.label}
              </div>

              {/* Tiny design accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#3b82f6]/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
