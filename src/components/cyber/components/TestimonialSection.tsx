"use client";

import { CYBERSECURITY_COPY } from "../data/copywriting";
import { Quote } from "lucide-react";

export default function TestimonialSection() {
  const { quote, clientName, role, company, outcome, timeline } = CYBERSECURITY_COPY.testimonial;

  return (
    <section className="bg-slate-950 py-20 lg:py-24 border-b border-slate-800" id="testimonial">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm border border-slate-800 bg-slate-900/5 px-6 py-12 md:px-12 md:py-16 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 h-96 w-96 -translate-y-12 translate-x-12 rounded-full bg-sky-500/5 blur-3xl" />
          
          <div className="relative max-w-4xl mx-auto text-left">
            <Quote className="h-10 w-10 text-sky-500/20 mb-8" />
            
            <p className="text-xl md:text-2xl font-medium tracking-tight text-white leading-relaxed font-sans">
              "{quote}"
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-slate-800 pt-8">
              <div>
                <div className="text-base font-bold text-white font-sans">
                  {clientName}
                </div>
                <div className="text-[10px] font-bold text-sky-400 font-mono tracking-wider uppercase mt-1">
                  {role}, {company}
                </div>
              </div>

              {/* Partnership Stats Callout */}
              <div className="flex gap-8">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Direct Outcome
                  </div>
                  <div className="text-sm font-bold text-white font-sans mt-1">
                    {outcome}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Timeframe
                  </div>
                  <div className="text-sm font-bold text-sky-400 font-mono mt-1">
                    {timeline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
