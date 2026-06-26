"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SERVICE_COMPONENTS } from '../data';
import { Target, Search, Share2, LineChart, Cpu, Zap, Check } from 'lucide-react';

export default function ServiceOverview() {
  const [activeComponent, setActiveComponent] = useState<string | null>("abm");

  // Dynamic icons mapping
  const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'abm': Target,
    'paid-acq': Search,
    'content-synd': Share2,
    'attrib': LineChart,
    'cro': Cpu,
    'intent-data': Zap
  };

  return (
    <section id="overview" className="bg-dark-bg py-20 sm:py-24 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-brand-primary/5 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="max-w-3xl space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent">
            Demand Generation Services
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Demand Generation built for compounding B2B revenue growth.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Most agencies just run disjointed ads or gate random lead-magnets that gather dust. Our <strong className="text-white font-medium">Demand Generation</strong> builds a complete growth system that combines <span className="text-zinc-200">Account-Based Marketing</span>, <span className="text-zinc-200">Paid Ads</span>, <span className="text-zinc-200">Content Syndication</span>, and <span className="text-zinc-200">Pipeline Attribution</span> into one seamless engine designed to earn trust with buyers, Google, and AI search engines.
          </p>
        </div>

        {/* Interactive Layout: Column Tabs on Desktop / Cards on Mobile */}
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-10 items-start">
          
          {/* Left: Interactive list tabs */}
          <div className="col-span-5 space-y-3">
            {SERVICE_COMPONENTS.map((comp) => {
              const IconComponent = iconMap[comp.id] || Target;
              const isActive = activeComponent === comp.id;
              return (
                <button
                  key={comp.id}
                  onClick={() => setActiveComponent(comp.id)}
                  className={`w-full text-left flex items-center gap-4 rounded-xl border p-4 transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'border-brand-primary bg-brand-primary/10 text-white shadow-lg shadow-brand-primary/5'
                      : 'border-dark-border bg-dark-card text-zinc-400 hover:bg-zinc-800/50 hover:border-white/10'
                  }`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    isActive ? 'bg-brand-primary text-white' : 'bg-zinc-900 text-zinc-400'
                  }`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className="font-display font-bold text-sm sm:text-base">
                    {comp.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic display details card */}
          <div className="col-span-7 mt-8 lg:mt-0">
            {SERVICE_COMPONENTS.map((comp) => {
              if (comp.id !== activeComponent) return null;
              const IconComponent = iconMap[comp.id] || Target;
              return (
                <div
                  key={comp.id}
                  className="rounded-2xl border border-dark-border bg-dark-card p-6 sm:p-8 space-y-6 animate-in fade-in slide-in-from-right-4 duration-200"
                >
                  <div className="flex items-center gap-4 border-b border-dark-border pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-accent">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white sm:text-xl">
                        {comp.title}
                      </h4>
                      <span className="font-mono text-[10px] text-brand-accent uppercase tracking-wider font-bold">
                        SiteOnLab Core Component
                      </span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {comp.description}
                  </p>

                  <div className="space-y-3 bg-dark-bg/60 rounded-xl border border-dark-border p-4 sm:p-5">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block">
                      Key Program Deliverables
                    </span>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      {comp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-zinc-500 font-mono">
                    * Full execution, strategy, copy, and visual tracking are included as standard.
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
