"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, Sparkles, ShieldCheck } from 'lucide-react';

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-dark-bg py-20 relative overflow-hidden border-t border-dark-border">
      {/* Decorative Radial glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-brand-primary/5 blur-[120px] z-0"></div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Large Quote Mark */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-accent">
          <Quote className="h-5 w-5 fill-current" />
        </div>

        {/* Client Quote */}
        <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed italic max-w-3xl mx-auto">
          &ldquo;HybridMonks transformed our demand generation from a black box of vanity metrics into a predictable pipeline engine. We finally know exactly where our best customer accounts come from.&rdquo;
        </blockquote>

        {/* Client Author Details */}
        <div className="space-y-1">
          <div className="font-display font-bold text-base text-zinc-100">
            Sarah Jenkins
          </div>
          <div className="text-xs text-zinc-400">
            VP of Marketing, Securiti.io (Enterprise B2B SaaS)
          </div>
        </div>

        {/* Performance Proof Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-brand-secondary/10 px-4.5 py-2 text-xs font-semibold text-brand-secondary">
          <ShieldCheck className="h-4 w-4" />
          <span>Verified Achievement:</span>
          <span className="font-mono bg-brand-secondary/20 px-1.5 py-0.5 rounded text-[11px] font-bold text-white">+245% pipeline volume</span>
          <span className="text-zinc-600">·</span>
          <span className="font-mono">6 Months</span>
        </div>

      </div>
    </section>
  );
}
