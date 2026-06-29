"use client";

import { TESTIMONIALS } from '../data';
import { Quote, Sparkles } from 'lucide-react';

export default function Testimonial() {
  return (
    <section id="testimonial-section" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section label */}
        <div className="mb-10 text-center">
          <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase font-bold">HUMAN CONVERSION EVIDENCE</span>
          <h2 className="font-sans text-xs text-zinc-400 uppercase tracking-widest font-semibold mt-1">Verified Partner Testimony</h2>
        </div>

        {/* Testimonials Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="relative rounded-2xl border border-zinc-900 bg-[#0d0d0e]/60 p-6 md:p-8 text-left flex flex-col justify-between shadow-xl hover:border-zinc-800 transition-all duration-200"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-zinc-900/40 pointer-events-none">
                <Quote className="h-10 w-10 stroke-[3px]" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Quotation text */}
                <p className="font-sans text-sm sm:text-base text-zinc-200 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Proof Line bottom */}
              <div className="mt-8 pt-5 border-t border-zinc-900/80 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-xs sm:text-sm font-bold text-white">
                    {t.author}
                  </h4>
                  <p className="font-sans text-[11px] text-zinc-500">
                    {t.role}, <span className="text-blue-400 font-medium">{t.companyName}</span>
                  </p>
                </div>
                
                {/* Proof Line badge */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded px-2 py-1 font-mono text-[9px] font-bold text-right">
                  {t.proofLine.split(' · ')[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtitle assurance */}
        <p className="font-mono text-[9px] text-zinc-500 mt-8 text-center uppercase tracking-widest">
          HybridMonks customer satisfaction score: NPS 76 (Industry Average: 24)
        </p>

      </div>
    </section>
  );
}
