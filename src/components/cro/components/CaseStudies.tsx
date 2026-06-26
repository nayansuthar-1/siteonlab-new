"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, ArrowUpRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function CaseStudies() {
  const cases = [
    {
      industry: "SaaS · B2B",
      headline: "From stagnant demo bookings to a high-velocity enterprise pipeline",
      shortCopy: "We rebuilt their demo page layout, simplified multi-step questions, and tested value-first copy.",
      metric: "+216% booking rate",
      timeline: "6 months"
    },
    {
      industry: "Cybersecurity",
      headline: "Unlocking sign-ups by optimizing checkout friction and visual trust",
      shortCopy: "We resolved critical checkout interface bugs, streamlined form fields, and tested dynamic social proof elements.",
      metric: "+45% free trial sign-ups",
      timeline: "3 months"
    },
    {
      industry: "IT & Managed Services",
      headline: "Increasing qualified inquiries through personalized landing pages",
      shortCopy: "We tested industry-specific hero variations and structured interactive value calculators for key accounts.",
      metric: "-32% Cost Per Acquisition",
      timeline: "4 months"
    }
  ];

  return (
    <section id="case-studies" className="py-24 border-t border-b border-white/10 bg-black text-left">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] uppercase tracking-[0.2em]">
              Case Studies & Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-100 tracking-tight leading-tight">
              Conversion Rate Optimization results we can put a number on.
            </h2>
          </div>

          <a
            href="#final-cta"
            className="flex items-center gap-2 text-xs font-mono text-[#3b82f6] hover:text-[#3b82f6]/80 font-semibold group self-start md:self-end cursor-pointer"
          >
            Request Your Growth Roadmap
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <motion.div
              key={idx}
              id={`case-study-card-${idx}`}
              whileHover={{ y: -6, borderColor: "rgba(251, 146, 60, 0.3)" }}
              transition={{ duration: 0.25 }}
              className="bg-[#0D0D0D] border border-white/10 rounded-xl p-6 flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#3b82f6] font-semibold uppercase bg-[#3b82f6]/10 px-2.5 py-0.5 rounded border border-[#3b82f6]/20">
                    {c.industry}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <Calendar size={12} />
                    <span>{c.timeline}</span>
                  </div>
                </div>

                <h3 className="text-lg font-display text-slate-100 font-medium leading-snug group-hover:text-[#3b82f6] transition-colors">
                  {c.headline}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {c.shortCopy}
                </p>
              </div>

              {/* Huge Metric Row */}
              <div className="border-t border-white/10 mt-6 pt-5 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Verified Metric Lift:</span>
                  <span className="text-2xl font-display font-bold text-[#3b82f6]">
                    {c.metric}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 border border-white/10 rounded px-2 py-1">
                  100% Stat-Sig
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
