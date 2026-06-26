"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonial() {
  return (
    <section id="testimonial" className="py-24 max-w-5xl mx-auto px-6 text-center relative overflow-hidden">
      {/* Decorative center background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-8 relative z-10">
        <div className="flex justify-center gap-1 text-[#3b82f6]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" className="animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
          ))}
        </div>

        <Quote className="mx-auto text-white/10" size={48} strokeWidth={1} />

        <blockquote className="text-xl sm:text-2xl md:text-[28px] font-display italic text-slate-100 font-medium tracking-tight leading-relaxed max-w-4xl mx-auto">
          “Their strategic approach helped us turn search and existing traffic into a serious source of qualified opportunities, not just website views. Our sales pipeline has never been healthier.”
        </blockquote>

        <div className="space-y-1">
          <div className="text-sm font-semibold text-slate-200">
            Sarah Jenkins
          </div>
          <div className="text-xs text-slate-400 font-mono">
            VP of Growth, Enterprise Securiti.io
          </div>
        </div>

        <div className="inline-flex items-center gap-3 bg-[#3b82f6]/10 border border-[#3b82f6]/20 px-4 py-1.5 rounded-md text-xs font-mono text-[#3b82f6]">
          <span>+216% booking rate</span>
          <span className="text-slate-600">·</span>
          <span>6 months</span>
        </div>
      </div>
    </section>
  );
}
