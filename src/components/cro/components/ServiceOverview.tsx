"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, Compass, Activity, FileText, CheckSquare, BarChart3, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServiceOverview() {
  const components = [
    {
      title: "Funnel Analysis & Intent Mapping",
      description: "We audit your complete landing page network, check form drop-offs, and align user traffic acquisition to key buyer intent profiles.",
      icon: <Search className="text-[#3b82f6]" size={18} />,
      benefits: ["Identify drop-offs", "SaaS intent scoring", "Leakage heatmaps"]
    },
    {
      title: "Behavioral Auditing & Heatmapping",
      description: "We deploy scroll-depth analysis, click-tracking heatmaps, and live session playbacks to reveal where qualified prospects get stuck.",
      icon: <Compass className="text-[#3b82f6]" size={18} />,
      benefits: ["Scroll-depth charts", "Click mapping", "User path recordings"]
    },
    {
      title: "High-Velocity A/B Testing",
      description: "We write, build, and deploy robust experiments using secure, client-side scripts to scientifically validate winning layout updates.",
      icon: <Activity className="text-[#3b82f6]" size={18} />,
      benefits: ["Statistical testing", "Zero page flicker", "Mobile responsive tests"]
    },
    {
      title: "Conversion-Focused B2B Copywriting",
      description: "We rewrite headings, call-to-actions, and value messaging to remove jargon and speak directly to enterprise buyer objections.",
      icon: <FileText className="text-[#3b82f6]" size={18} />,
      benefits: ["Enterprise value-props", "Objection busting copy", "Micro-copy updates"]
    },
    {
      title: "Landing Page & Multi-Step Forms",
      description: "We design and develop modern, lightweight progressive forms that capture more qualified leads without sacrificing data quality.",
      icon: <CheckSquare className="text-[#3b82f6]" size={18} />,
      benefits: ["Frictionless forms", "Dynamic progress indicator", "Data validation rules"]
    },
    {
      title: "Pipeline & CRM Measurement Integration",
      description: "We connect frontend testing suites directly to HubSpot, Salesforce, and Marketo so we measure pipeline revenue, not just button clicks.",
      icon: <BarChart3 className="text-[#3b82f6]" size={18} />,
      benefits: ["Sales pipeline sync", "Multi-touch insights", "Downstream revenue tracking"]
    }
  ];

  return (
    <section id="service-overview" className="py-24 max-w-7xl mx-auto px-6 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-5 space-y-4">
          <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] uppercase tracking-[0.2em]">
            Conversion Rate Optimization Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-100 tracking-tight leading-tight">
            CRO engineered for compounding B2B revenue growth.
          </h2>
        </div>
        <div className="lg:col-span-7 flex items-center">
          <p className="text-white/60 text-base leading-relaxed">
            Most agencies just focus on isolated activities like changing button colors or reporting vanity traffic spikes. Our Conversion Rate Optimization builds a complete, high-yield system that combines deep behavioral analysis, elite B2B conversion copy, scientifically-backed A/B testing, and full-funnel pipeline tracking into a single predictable revenue engine.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((c, idx) => (
          <motion.div
            key={idx}
            id={`service-component-${idx}`}
            whileHover={{ y: -4, borderColor: "rgba(251, 146, 60, 0.25)", backgroundColor: "rgba(255, 255, 255, 0.01)" }}
            transition={{ duration: 0.25 }}
            className="bg-[#0D0D0D] border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:shadow-2xl hover:shadow-[#3b82f6]/5 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-black rounded-xl border border-white/10">
                  {c.icon}
                </div>
                <h3 className="text-base font-display font-medium text-slate-200">
                  {c.title}
                </h3>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                {c.description}
              </p>
            </div>

            <div className="border-t border-white/10 mt-6 pt-4 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">Core Deliverables:</span>
              <ul className="grid grid-cols-1 gap-1">
                {c.benefits.map((b, bIdx) => (
                  <li key={bIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                    <ChevronRight size={10} className="text-[#3b82f6] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
