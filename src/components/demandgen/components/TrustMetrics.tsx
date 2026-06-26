"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { METRICS } from '../data';
import { Award, Zap, HeartHandshake, Layers } from 'lucide-react';

export default function TrustMetrics() {
  // Map icons dynamically to support high fidelity
  const icons = [Award, Zap, HeartHandshake, Layers];

  return (
    <section id="trust-metrics" className="border-y border-dark-border bg-dark-bg py-12 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-10 gap-x-4 md:grid-cols-4">
          {METRICS.map((metric, i) => {
            const IconComponent = icons[i] || Award;
            return (
              <div
                key={i}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl border border-dark-border bg-dark-card hover:bg-zinc-800/50 hover:border-white/10 transition-all duration-200"
              >
                {/* Micro logo accent */}
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-accent group-hover:scale-110 transition-transform">
                  <IconComponent className="h-4 w-4" />
                </div>

                <div className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {metric.value}
                </div>
                
                <div className="mt-1 text-sm font-semibold text-zinc-200">
                  {metric.label}
                </div>
                
                <div className="mt-1 text-xs text-zinc-400 leading-relaxed max-w-[200px]">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
