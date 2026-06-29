"use client";

import { TESTIMONIAL } from "../data/copywriting";
import { Quote, Sparkles } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="bg-[#0A0A0B] py-24 border-b border-slate-800/50 relative">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-950/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold font-mono text-blue-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Client Testimonial</span>
        </div>

        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-slate-900 border border-slate-800 text-blue-400">
            <Quote className="w-8 h-8" />
          </div>
        </div>

        <blockquote className="text-xl sm:text-2xl font-medium text-white tracking-tight leading-relaxed italic font-sans">
          "{TESTIMONIAL.quote}"
        </blockquote>

        <div className="pt-4 border-t border-slate-800 max-w-sm mx-auto">
          <div className="font-bold text-white text-base font-sans">{TESTIMONIAL.clientName}</div>
          <div className="text-xs text-slate-500 font-mono mt-0.5 uppercase tracking-wider">
            {TESTIMONIAL.role} | <span className="text-blue-400 font-semibold">{TESTIMONIAL.company}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto pt-4 text-left">
          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">PARTNERSHIP IMPACT</span>
            <span className="text-xs text-slate-300 font-semibold">{TESTIMONIAL.outcome}</span>
          </div>
          <div className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/50">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">TIMELINE VALUE</span>
            <span className="text-xs text-slate-300 font-semibold">{TESTIMONIAL.timeline}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
