"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, BarChart2, Sparkles, TrendingUp, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const differentiators = [
    {
      title: "Revenue-first strategy",
      description: "We optimize for business outcomes and customer acquisition cost (CAC) efficiency, not isolated channel metrics or click bounce rates.",
      icon: <Target className="text-[#3b82f6]" size={20} />
    },
    {
      title: "Measurement that is honest",
      description: "We connect on-page testing activity directly to first-touch, assisted, and last-touch CRM opportunities and closed-won revenue signals.",
      icon: <BarChart2 className="text-[#3b82f6]" size={20} />
    },
    {
      title: "Built for AI search and LLM visibility",
      description: "We structure your web content, Schema tags, and brand authority signals so buyers find your optimized pages in Google, Gemini, and ChatGPT.",
      icon: <Sparkles className="text-[#3b82f6]" size={20} />
    },
    {
      title: "Compounding growth over time",
      description: "We build high-value content assets and permanent conversion systems that keep creating pipeline instead of one-off paid campaign spikes.",
      icon: <TrendingUp className="text-[#3b82f6]" size={20} />
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 max-w-7xl mx-auto px-6 border-t border-white/10 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] uppercase tracking-[0.2em]">
            Why Teams Pick Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-100 tracking-tight leading-tight">
            A CRO agency that connects user behavior to revenue.
          </h2>
        </div>
        <div className="lg:col-span-7 flex items-center">
          <p className="text-white/60 text-base leading-relaxed">
            Most conversion agencies hand you simple screenshots or a report of button clicks and call it done. SiteOnLab builds a full measurement layer so you can see how our Conversion Rate Optimization contributes across the actual buyer journey, from first touch to qualified opportunity.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {differentiators.map((d, idx) => (
          <motion.div
            key={idx}
            id={`differentiator-card-${idx}`}
            whileHover={{ y: -4, borderColor: "rgba(251, 146, 60, 0.2)" }}
            transition={{ duration: 0.2 }}
            className="bg-[#0D0D0D] border border-white/10 p-6 sm:p-8 rounded-xl flex gap-5 items-start hover:bg-white/[0.02] transition-colors"
          >
            <div className="p-3 bg-black rounded-xl border border-white/10 shrink-0">
              {d.icon}
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-display font-medium text-slate-100">
                {d.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {d.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
