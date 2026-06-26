"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DIFFERENTIATORS } from '../data';
import { TrendingUp, ShieldCheck, Sparkles, Infinity as InfinityIcon } from 'lucide-react';

export default function WhyChooseUs() {
  // Mapping icons named in data.ts
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'TrendingUp': TrendingUp,
    'ShieldCheck': ShieldCheck,
    'Sparkles': Sparkles,
    'Infinity': InfinityIcon
  };

  return (
    <section id="why-us" className="bg-dark-bg py-20 sm:py-24 relative overflow-hidden border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 border-b border-dark-border">
          <div className="lg:col-span-6 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent">
              Why Teams Pick Us
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              A Demand Generation agency that connects channel performance to revenue.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Most agencies hand you a PDF containing click reports or impression graphs and call it done. <strong className="text-white font-medium">SiteOnLab</strong> builds a full measurement layer so you can see exactly how our campaign activities contribute across the entire buyer journey, from first touch to qualified opportunity.
            </p>
          </div>
        </div>

        {/* 4 Differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {DIFFERENTIATORS.map((diff, i) => {
            const IconComponent = iconMap[diff.iconName] || TrendingUp;
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-dark-border bg-dark-card p-6 sm:p-8 space-y-4 hover:border-white/10 hover:bg-zinc-800/20 transition-all duration-200"
              >
                {/* Glowing subtle hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-brand-primary/0 to-brand-accent/0 group-hover:from-brand-primary/5 group-hover:to-brand-accent/5 transition-all duration-300 z-0"></div>

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon Wrapper */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-accent border border-brand-primary/20 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-200">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-brand-accent transition-colors">
                      {diff.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
