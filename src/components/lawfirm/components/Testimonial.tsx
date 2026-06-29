"use client";

import React from "react";
import { testimonial } from "../data/copy";
import { Quote, Sparkles, Scale } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#3b82f6]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-sm p-8 sm:p-12 relative overflow-hidden">
          
          {/* Quote Mark Accent */}
          <div className="absolute -top-4 -left-4 text-white/5 select-none pointer-events-none">
            <Quote className="h-28 w-28" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left/Main Column: Quote Text */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full">
              <div>
                <Quote className="h-8 w-8 text-[#3b82f6] mb-6" />
                <blockquote className="text-white/90 text-base sm:text-lg font-light leading-relaxed font-sans italic text-left">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="mt-8 flex items-center space-x-3 border-t border-white/10 pt-6">
                <div className="h-10 w-10 rounded-full bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-[#3b82f6] font-sans font-bold text-sm">
                  MV
                </div>
                <div>
                  <span className="font-sans font-bold text-white text-sm sm:text-base block">
                    {testimonial.author}
                  </span>
                  <span className="font-mono text-xs text-white/40 block">
                    {testimonial.role} | <span className="text-white/60">{testimonial.company}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Key Certified Outcome Card */}
            <div className="lg:col-span-4 bg-[#0A0A0B] border border-white/10 rounded-sm p-6 flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="flex items-center space-x-2 text-[#3b82f6] text-[10px] font-mono tracking-widest uppercase mb-4">
                  <Scale className="h-3.5 w-3.5" />
                  <span>AUDITED CASE GROWTH</span>
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight tracking-tight">
                  {testimonial.outcome.split(" ")[0]}
                </div>
                <p className="text-white/60 text-xs mt-2 leading-relaxed font-sans font-light">
                  {testimonial.outcome.split(" ").slice(1).join(" ")}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-white/40 uppercase block tracking-wider">
                  PARTNER RELATIONSHIP
                </span>
                <span className="text-xs font-sans font-semibold text-white/80 mt-0.5 block">
                  {testimonial.timeline}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
