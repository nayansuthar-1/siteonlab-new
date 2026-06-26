"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onRequestBlueprint: () => void;
  onScrollToSection: (id: string) => void;
}

export default function HeroSection({ onRequestBlueprint, onScrollToSection }: HeroSectionProps) {
  // Dynamic state to simulate a live de-anonymization engine tracking target accounts in real-time
  const [activeTab, setActiveTab] = React.useState<'live' | 'stats'>('live');
  const [liveAccounts, setLiveAccounts] = React.useState([
    { name: 'Securiti.io', industry: 'Cybersecurity', action: 'Pricing Page • 3m ago', intent: 'High', logoBg: 'bg-indigo-600/20 text-indigo-400' },
    { name: 'Vanguard Tech', industry: 'Fintech Enterprise', action: 'Case Study • 12m ago', intent: 'High', logoBg: 'bg-emerald-600/20 text-emerald-400' },
    { name: 'Datadog Partner', industry: 'Cloud Ops', action: 'Booked Demo • 24m ago', intent: 'High', logoBg: 'bg-rose-600/20 text-rose-400' },
  ]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLiveAccounts(prev => {
        const next = [...prev];
        next.pop();
        const templates = [
          { name: 'Snowflake Enterprise', industry: 'Cloud Data', action: 'Pricing Page • Just now', intent: 'High', logoBg: 'bg-sky-600/20 text-sky-400' },
          { name: 'Okta Suite', industry: 'IAM Security', action: 'Comparison Guide • 1m ago', intent: 'High', logoBg: 'bg-violet-600/20 text-violet-400' },
          { name: 'Snyk Partner', industry: 'DevSecOps SaaS', action: 'Booked Demo • 2m ago', intent: 'High', logoBg: 'bg-green-600/20 text-green-400' },
          { name: 'CrowdStrike Admin', industry: 'SecOps', action: 'Contact Form • 4m ago', intent: 'High', logoBg: 'bg-red-600/20 text-red-400' },
        ];
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        return [randomTemplate, ...next];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-bg py-24 lg:py-28">
      {/* Visual background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-primary/10 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-brand-accent/10 blur-[120px]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: PAGE INTENT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-4 py-1.5 text-xs font-semibold text-brand-accent">
              <Sparkles className="h-3.5 w-3.5 text-brand-accent animate-spin-slow animate-pulse" />
              <span>B2B Demand Generation</span>
              <span className="text-zinc-600">|</span>
              <span>Demand Generation Services</span>
            </div>

            {/* Heading 1 (H1) */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.15]">
              The{' '}
              <span className="text-brand-accent">
                Demand Generation
              </span>{' '}
              agency driving qualified bookings.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              SiteOnLab helps high-growth B2B SaaS, technology, and cybersecurity companies turn paid acquisition and content authority into a measurable revenue channel. We help you{' '}
              <span className="text-zinc-200 font-medium">capture existing high-intent search demand</span>,{' '}
              <span className="text-zinc-200 font-medium">generate net-new industry authority</span>, and{' '}
              <span className="text-zinc-200 font-medium">turn anonymous website traffic into qualified sales opportunities</span>{' '}
              — measured by qualified pipeline, not vanity metrics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={onRequestBlueprint}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-primary/20 transition-all cursor-pointer duration-150 transform hover:-translate-y-0.5"
              >
                Request a Growth Blueprint
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onScrollToSection('case-studies')}
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-xl border border-dark-border bg-dark-card hover:bg-zinc-800/80 px-8 py-4 text-base font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer duration-150"
              >
                See Case Studies
                <ChevronRight className="h-4 w-4 text-zinc-500" />
              </button>
            </div>

            {/* Quick Tech Badge */}
            <div className="pt-6 flex flex-wrap gap-y-3 gap-x-6 text-xs text-zinc-500 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary"></span>
                CRM Integrated (HubSpot, Salesforce)
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent"></span>
                Intent-Data Overlay Active
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary"></span>
                Optimized for Google & LLM Citations
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-POLISHED INTERACTIVE REVENUE INTENT GRAPHIC */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] rounded-2xl border border-dark-border bg-dark-card/80 p-5 sm:p-6 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-primary/5 blur-2xl"></div>

              {/* Mock Browser Header */}
              <div className="flex items-center justify-between border-b border-dark-border pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 font-mono text-[10px] text-zinc-500 font-semibold tracking-wider uppercase">
                    SiteOnLab Pipeline Signal Hub
                  </span>
                </div>
                <span className="flex h-2 w-2 rounded-full bg-brand-secondary animate-pulse"></span>
              </div>

              {/* Toggle Switch Tabs */}
              <div className="grid grid-cols-2 gap-2 bg-dark-bg p-1 rounded-lg border border-dark-border mb-4">
                <button
                  onClick={() => setActiveTab('live')}
                  className={`py-1.5 text-xs font-mono font-bold rounded transition-all cursor-pointer ${
                    activeTab === 'live'
                      ? 'bg-brand-primary/10 text-brand-accent border border-brand-primary/20'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Identified Accounts
                </button>
                <button
                  onClick={() => setActiveTab('stats')}
                  className={`py-1.5 text-xs font-mono font-bold rounded transition-all cursor-pointer ${
                    activeTab === 'stats'
                      ? 'bg-brand-primary/10 text-brand-accent border border-brand-primary/20'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  Funnel Analytics
                </button>
              </div>

              {/* Dynamic Panel Content */}
              {activeTab === 'live' ? (
                <div className="space-y-3.5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold tracking-wider">
                      De-Anonymization Engine Feed
                    </span>
                    <span className="text-[10px] font-mono text-brand-secondary font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="inline-block h-1 w-1 bg-brand-secondary rounded-full animate-ping"></span>
                      Streaming Live
                    </span>
                  </div>

                  <div className="space-y-2">
                    {liveAccounts.map((acc, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-xl border border-dark-border bg-dark-bg/50 p-3 hover:border-white/5 transition-all duration-150 animate-in slide-in-from-top-2"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg font-mono font-bold text-xs ${acc.logoBg}`}>
                            {acc.name.substring(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white leading-none">{acc.name}</h5>
                            <span className="text-[10px] text-zinc-500 leading-none">{acc.industry}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="block text-[10px] font-mono text-zinc-300 font-medium leading-none mb-1">
                            {acc.action}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded bg-brand-primary/10 border border-brand-primary/20 px-1.5 py-0.5 text-[9px] font-mono font-bold text-brand-accent">
                            {acc.intent} Intent
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[10px] text-zinc-500 font-mono italic text-center pt-1.5 border-t border-dark-border">
                    * Displays anonymous account activity matches filtered using direct IP intelligence overlay.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-3 flex flex-col justify-between">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase font-bold">Pipeline Velocity</span>
                      <div>
                        <span className="text-xl font-extrabold text-white font-mono leading-none">$4.2M</span>
                        <span className="block text-[10px] text-brand-secondary font-bold font-mono mt-0.5">+245% LIFT</span>
                      </div>
                    </div>
                    <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-3 flex flex-col justify-between">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase font-bold">Demo Booked Rate</span>
                      <div>
                        <span className="text-xl font-extrabold text-white font-mono leading-none">132 / mo</span>
                        <span className="block text-[10px] text-brand-secondary font-bold font-mono mt-0.5">+150% EFFICIENCY</span>
                      </div>
                    </div>
                  </div>

                  {/* Funnel chart simulation */}
                  <div className="space-y-2 border-t border-dark-border pt-3">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase font-bold tracking-wider block mb-1">
                      Conversion Pipeline Efficiency
                    </span>
                    {[
                      { label: 'Anonymous Visitors', val: '100%', width: 'w-full', color: 'bg-zinc-700' },
                      { label: 'Identified B2B ICP', val: '42%', width: 'w-[42%]', color: 'bg-brand-primary/60' },
                      { label: 'Target Demo Booked', val: '14.5%', width: 'w-[20%]', color: 'bg-brand-primary' }
                    ].map((step, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono">
                          <span className="text-zinc-400 font-medium">{step.label}</span>
                          <span className="text-zinc-200 font-bold">{step.val}</span>
                        </div>
                        <div className="h-1.5 w-full bg-dark-bg rounded-full overflow-hidden border border-dark-border/40">
                          <div className={`h-full ${step.color} ${step.width} rounded-full`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Integrated Platforms Bar */}
              <div className="mt-4 pt-3.5 border-t border-dark-border flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Integrated Signals:</span>
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-dark-border text-zinc-400">HubSpot</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-dark-border text-zinc-400">Salesforce</span>
                  <span className="px-1.5 py-0.5 rounded bg-zinc-900 border border-dark-border text-zinc-400">LinkedIn Ads</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
