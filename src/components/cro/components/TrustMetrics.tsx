"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Zap, HeartHandshake, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function TrustMetrics() {
  const metrics = [
    {
      value: "300%",
      label: "Average Program ROI",
      description: "Direct return measured by client pipeline and qualified opportunities.",
      icon: <Target className="text-[#3b82f6]" size={20} />
    },
    {
      value: "14 Days",
      label: "To First Live Experiment",
      description: "Rapid technical audit to first live test movement on key landing pages.",
      icon: <Zap className="text-[#3b82f6]" size={20} />
    },
    {
      value: "NPS 74",
      label: "Client Satisfaction Score",
      description: "Class-leading retention and feedback from B2B SaaS and Tech founders.",
      icon: <HeartHandshake className="text-[#3b82f6]" size={20} />
    },
    {
      value: "120+",
      label: "B2B Funnels Optimized",
      description: "Tailored conversion pathways engineered across 50+ unique SaaS verticals.",
      icon: <ShieldCheck className="text-[#3b82f6]" size={20} />
    }
  ];

  const highlights = [
    { title: "B2B-Only Growth Focus", text: "We understand long enterprise sales cycles, multi-touch attribution, and buyer-intent psychology." },
    { title: "Revenue-First Reporting", text: "We measure success by pipeline generated and opportunities added, not isolated bounce rate changes." },
    { title: "Built for AI Search", text: "Optimized web structure guarantees your brand is clearly cited by ChatGPT, Perplexity, and Google AI." },
    { title: "Full-Funnel Execution", text: "We write the copy, design the layouts, code the experiments, and integrate the CRM metrics ourselves." }
  ];

  return (
    <section id="trust-metrics" className="py-16 border-t border-b border-white/10 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Core numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              id={`trust-metric-${idx}`}
              whileHover={{ y: -4, borderColor: "rgba(251, 146, 60, 0.3)" }}
              transition={{ duration: 0.2 }}
              className="bg-[#0D0D0D] border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-4xl sm:text-5xl font-display font-medium text-slate-100 tracking-tight">
                  {m.value}
                </div>
                <div className="p-2 bg-black rounded-xl border border-white/10">
                  {m.icon}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-200 mb-1">{m.label}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pillars / Core Focus */}
        <div className="border-t border-white/10 pt-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                  <h5 className="text-xs font-mono font-semibold tracking-wider text-slate-300 uppercase">
                    {h.title}
                  </h5>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
