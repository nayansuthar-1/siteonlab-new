"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RELATED_SERVICES } from '../data';
import { Sparkles, ArrowRight } from 'lucide-react';

interface RelatedServicesProps {
  onScrollToSection: (id: string) => void;
}

export default function RelatedServices({ onScrollToSection }: RelatedServicesProps) {
  return (
    <section id="related-services" className="bg-dark-bg py-20 sm:py-24 relative overflow-hidden border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent">
            Related Services
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Demand Generation performs better alongside these services.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Maximizing pipeline velocity requires a tightly connected, multi-channel growth architecture.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RELATED_SERVICES.map((serv, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-dark-border bg-dark-card p-6 sm:p-8 space-y-4 hover:border-white/10 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Visual Accent badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[10px] font-mono font-bold text-brand-accent border border-brand-primary/20">
                  <Sparkles className="h-3 w-3" />
                  <span>Integration Layer</span>
                </div>

                <h4 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-brand-accent transition-colors">
                  {serv.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {serv.description}
                </p>
              </div>

              {/* Benefit footer anchor */}
              <div className="pt-4 border-t border-dark-border flex items-center justify-between mt-4">
                <span className="text-[10px] font-mono text-brand-secondary font-bold uppercase tracking-wider">
                  {serv.benefit}
                </span>
                <button
                  onClick={() => onScrollToSection('overview')}
                  className="rounded-full p-1 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
