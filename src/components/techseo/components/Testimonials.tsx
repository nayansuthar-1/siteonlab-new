"use client";

import { Quote, Sparkles } from "lucide-react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const data: Testimonial = {
    quote: "Their strategic approach helped us turn technical search health into a serious source of qualified opportunities, not just website traffic. Our site indexing issues vanished in weeks, and we began seeing citations in AI search summaries within months.",
    client: "Sarah Jenkins",
    title: "VP of Growth Marketing",
    companyType: "Enterprise B2B SaaS Company",
    proofLine: "+312% organic growth · 9 months",
  };

  return (
    <section className="bg-[#050505] py-20 relative overflow-hidden border-t border-white/10">
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative bg-[#080808] border border-white/5 rounded-xl p-8 sm:p-12 md:p-16 text-center overflow-hidden">
          
          <div className="flex justify-center mb-8">
            <div className="h-12 w-12 rounded-lg bg-blue-600/10 border border-white/10 flex items-center justify-center text-blue-400">
              <Quote className="h-5 w-5 transform rotate-180" />
            </div>
          </div>

          <h2 className="font-display font-light text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            &ldquo;{data.quote}&rdquo;
          </h2>

          <div className="mt-8 space-y-1.5">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              {data.client}
            </div>
            <div className="text-[11px] text-gray-500 uppercase tracking-widest font-mono">
              {data.title}, {data.companyType}
            </div>
          </div>

          {/* Testimonial Proof Line */}
          <div className="mt-10 inline-flex items-center gap-2 bg-[#050505] border border-white/5 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-wider">
            <Sparkles className="h-3 w-3 text-blue-500 animate-pulse" />
            <span className="text-gray-500">VERIFIED METRIC:</span>
            <span className="text-emerald-400 font-bold">{data.proofLine}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
