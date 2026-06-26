"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PROCESS_STEPS } from '../data';
import { Calendar, Layers, Activity, TrendingUp } from 'lucide-react';

export default function ProcessSection() {
  const icons = [Calendar, Layers, Activity, TrendingUp];

  return (
    <section id="process" className="bg-dark-bg py-20 sm:py-24 relative overflow-hidden border-t border-dark-border">
      {/* Decorative BG Blob */}
      <div className="absolute left-1/4 bottom-0 h-[250px] w-[250px] rounded-full bg-brand-primary/5 blur-[100px]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent">
            Our Process
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From fragmented marketing campaigns to a scalable, predictable pipeline machine in 90 Days.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            A battle-tested, structured framework engineered for speed-to-value and CRM transparency.
          </p>
        </div>

        {/* Process Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Horizontal timeline connecting line on desktop */}
          <div className="hidden md:block absolute top-[43px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-primary/20 via-brand-accent/20 to-brand-secondary/20 z-0"></div>

          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = icons[idx] || Calendar;
            return (
              <div
                key={step.step}
                className="group relative flex flex-col items-center md:items-start text-center md:text-left space-y-4 z-10"
              >
                {/* Step badge bubble with glowing ring */}
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-dark-border bg-dark-bg text-white shadow-xl group-hover:border-brand-primary/50 group-hover:shadow-brand-primary/5 transition-all duration-300">
                  <div className="absolute inset-0.5 rounded-xl bg-dark-card z-0"></div>
                  <IconComponent className="h-6 w-6 text-brand-accent group-hover:scale-110 transition-transform relative z-10" />
                  
                  {/* Floating index badge */}
                  <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 border border-dark-border text-[10px] font-mono text-zinc-400 font-bold group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all">
                    {step.step}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
                    <h4 className="font-display font-bold text-white text-base group-hover:text-brand-accent transition-colors">
                      {step.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Meta tag boxes */}
                  <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-dark-card px-2.5 py-0.5 text-[10px] font-mono font-medium text-zinc-400 border border-dark-border">
                      Duration: {step.timeline}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[10px] font-mono font-medium text-brand-accent border border-brand-primary/20">
                      Key: {step.deliverable}
                    </span>
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
