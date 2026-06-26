"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, BarChart2 } from 'lucide-react';

interface FinalCTAProps {
  onRequestBlueprint: () => void;
  onOpenAssessment: () => void;
}

export default function FinalCTA({ onRequestBlueprint, onOpenAssessment }: FinalCTAProps) {
  return (
    <section id="final-cta" className="bg-dark-bg py-20 sm:py-24 relative overflow-hidden border-t border-dark-border">
      {/* Background glow flares */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-brand-primary/10 via-brand-accent/5 to-brand-secondary/10 blur-[150px]"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl border border-dark-border bg-gradient-to-tr from-dark-bg via-dark-card to-dark-bg p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-2xl shadow-brand-primary/5">
          
          <div className="mx-auto inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-accent border border-brand-primary/20">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            <span>Scale Your B2B Revenue</span>
          </div>

          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
            Let&apos;s make Demand Generation your most efficient growth channel.
          </h2>

          <p className="mx-auto max-w-2xl text-sm sm:text-base text-zinc-400 leading-relaxed">
            Book a 30-minute strategy call. We’ll review your current Demand Generation performance, identify opportunities your competitors are missing, and show you what it would take to turn paid and organic channels into qualified pipeline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <button
              onClick={onRequestBlueprint}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 rounded-xl bg-brand-primary hover:bg-brand-primary/90 px-6 py-3.5 text-sm font-bold text-white shadow-lg cursor-pointer transition-all duration-150"
            >
              Request a Growth Blueprint
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-dark-border bg-dark-bg hover:bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:text-white cursor-pointer transition-all duration-150"
            >
              <BarChart2 className="h-4 w-4 text-brand-accent" />
              Take Assessment
            </button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500 font-mono">
            <span>✓ No-obligation diagnostic call</span>
            <span>✓ Confidential pipeline blueprint</span>
            <span>✓ Direct principal architect advice</span>
          </div>

        </div>

      </div>
    </section>
  );
}
