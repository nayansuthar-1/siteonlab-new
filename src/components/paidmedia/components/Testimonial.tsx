"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Quote, Sparkles, Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section 
      className="relative py-24 bg-[#0A0A0B] border-b border-slate-900"
      id="testimonial-section"
    >
      {/* Visual lighting spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Quote symbol */}
        <div className="inline-flex p-3 rounded bg-slate-950 border border-slate-800 text-blue-500 mb-8 shadow-inner">
          <Quote className="w-6 h-6 rotate-180" />
        </div>

        {/* Client Quote */}
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight leading-relaxed max-w-3xl mx-auto">
          &ldquo;Their strategic approach helped us turn search and social ad spend into a serious source of qualified opportunities, not just website traffic. They truly understand B2B buyer intent.&rdquo;
        </blockquote>

        {/* Rating stars */}
        <div className="flex justify-center gap-1 mt-6 text-blue-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-blue-500" />
          ))}
        </div>

        {/* Client details & company type */}
        <div className="mt-6">
          <div className="text-white font-bold text-base">Sarah Jenkins</div>
          <div className="text-slate-400 text-xs mt-1">VP of Marketing Â· B2B SaaS Enterprise</div>
        </div>

        {/* Attributed Outcome Proof Line */}
        <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded bg-emerald-500/10 border border-emerald-500/20">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
            Proven Result: +248% demo bookings &middot; 6 months
          </span>
        </div>

      </div>
    </section>
  );
}
