"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { Clock, Tag, TrendingUp, CheckCircle, HelpCircle, ArrowUpRight } from 'lucide-react';

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState<string>("case-cyber");
  
  // Interactive Opportunity Estimator State
  const [dealSize, setDealSize] = useState<number>(25000); // Average Contract Value (ACV)
  const [monthlyLeads, setMonthlyLeads] = useState<number>(20); // Current leads per month

  // Calculation estimates based on our program averages (approx. 2.45x increase in pipeline opportunities and 1.8x better demo conversion)
  const estimatedNewDeals = Math.round((monthlyLeads * 1.5) * 0.12); // Assuming 150% lift in MQAs and 12% sales close rate
  const estimatedPipelineValue = estimatedNewDeals * dealSize;
  const currentPipelineValue = Math.round((monthlyLeads * 0.05) * dealSize); // Current baseline
  const incrementalRevenue = Math.max(0, estimatedPipelineValue - currentPipelineValue);

  return (
    <section id="case-studies" className="bg-dark-bg py-20 sm:py-24 relative overflow-hidden border-t border-dark-border">
      {/* Visual background details */}
      <div className="absolute right-1/4 top-0 h-[200px] w-[200px] rounded-full bg-brand-primary/5 blur-[100px]"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent">
              Case Studies & Results
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Demand Generation results we can put a number on.
            </h2>
          </div>
          <div className="shrink-0">
            <a
              href="#app-header"
              className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-brand-primary border-b border-brand-primary/20 pb-0.5 hover:border-brand-accent transition-all cursor-pointer"
            >
              See our verified testimonials
            </a>
          </div>
        </div>

        {/* Dynamic Case Tab Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Case Cards List */}
          <div className="lg:col-span-6 space-y-4">
            {CASE_STUDIES.map((c) => {
              const isActive = activeCase === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => setActiveCase(c.id)}
                  className={`rounded-2xl border p-5 sm:p-6 transition-all duration-150 cursor-pointer text-left relative overflow-hidden ${
                    isActive
                      ? 'border-brand-primary bg-brand-primary/5 shadow-lg shadow-brand-primary/5'
                      : 'border-dark-border bg-dark-card hover:border-white/10 hover:bg-zinc-800/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-accent uppercase tracking-wider font-mono">
                      <Tag className="h-3 w-3" />
                      {c.industry}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-500">
                      <Clock className="h-3 w-3" />
                      {c.timeline}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display font-bold text-white text-base sm:text-lg leading-snug">
                    {c.headline}
                  </h4>

                  {/* Highlights if active */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-dark-border grid grid-cols-2 gap-4 animate-in fade-in duration-150">
                      <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">Outcome Achieved:</span>
                        <span className="text-2xl font-extrabold text-brand-accent font-mono">{c.metric}</span>
                        <span className="block text-[10px] text-zinc-300 mt-0.5 leading-snug">{c.metricLabel}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">Timeframe:</span>
                        <span className="text-xl font-bold text-zinc-200 mt-1.5 block">{c.timeline}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Case Deep Dive Details */}
          <div className="lg:col-span-6">
            {CASE_STUDIES.map((c) => {
              if (c.id !== activeCase) return null;
              return (
                <div
                  key={c.id}
                  className="rounded-2xl border border-dark-border bg-dark-card p-6 sm:p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-200"
                >
                  <div className="flex items-center justify-between border-b border-dark-border pb-4">
                    <h4 className="font-display text-lg font-bold text-white">
                      Campaign Anatomy & Execution
                    </h4>
                    <span className="rounded-full bg-brand-primary/10 border border-brand-primary/20 px-3 py-1 text-xs font-mono font-bold text-brand-accent">
                      {c.metric} LIFT
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">The Challenge:</span>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {c.challenge}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">The Solution Implemented:</span>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                        {c.solution}
                      </p>
                    </div>
                  </div>

                  {/* Program Impact Highlights */}
                  <div className="rounded-xl bg-dark-bg/60 border border-dark-border p-4 space-y-2.5">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">Verified Program Highlights:</span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-brand-secondary shrink-0 mt-0.5" />
                        <span>Connected marketing outcomes directly to Salesforce/HubSpot opportunities.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-brand-secondary shrink-0 mt-0.5" />
                        <span>Reduced pipeline attrition rate by 40% using progressive nurtures.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Interactive Pipeline & Opportunity Calculator */}
        <div className="mt-16 rounded-2xl border border-dark-border bg-dark-card p-6 sm:p-8 space-y-6 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 h-[100px] w-[100px] rounded-full bg-brand-primary/5 blur-xl"></div>

          <div className="space-y-1.5 border-b border-dark-border pb-4">
            <h4 className="font-display font-bold text-white text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand-accent" />
              Pipeline & ROI Opportunity Estimator
            </h4>
            <p className="text-xs text-zinc-400">
              Select your parameters below to see estimated business impact based on historic SiteOnLab program performance averages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Controls */}
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wide">Average Deal Size (ACV)</label>
                  <span className="font-mono text-sm font-semibold text-brand-accent">${dealSize.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={dealSize}
                  onChange={(e) => setDealSize(Number(e.target.value))}
                  className="w-full h-2 bg-dark-bg rounded-lg appearance-none cursor-pointer accent-brand-primary focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>$5,000</span>
                  <span>$150,000</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wide">Avg. Demo Requests / mo</label>
                  <span className="font-mono text-sm font-semibold text-brand-accent">{monthlyLeads} requests</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-dark-bg rounded-lg appearance-none cursor-pointer accent-brand-primary focus:outline-none"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>5 / mo</span>
                  <span>150 / mo</span>
                </div>
              </div>
            </div>

            {/* Calculations Outputs */}
            <div className="rounded-xl border border-dark-border bg-dark-bg p-5 flex flex-col justify-between space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">Est. Annual Revenue Inbound:</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">${estimatedPipelineValue.toLocaleString()}</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold block">Est. Incremental Gain:</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-brand-secondary font-mono">+${incrementalRevenue.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t border-dark-border pt-3 text-xs text-zinc-400 leading-relaxed">
                * Based on achieving an average <strong className="text-zinc-200 font-medium">+150% boost</strong> in total Qualified Marketing Accounts and optimized conversion paths. Estimates are illustrative and subject to market vertical verification.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
