"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, FileText, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function RelatedServices() {
  const services = [
    {
      title: "AI Visibility Optimization",
      description: "Get cited and prioritized in ChatGPT, Gemini, Perplexity, and Google AI Overviews to capture top-of-funnel buyer research.",
      icon: <Sparkles className="text-[#3b82f6]" size={18} />,
      link: "#"
    },
    {
      title: "Content Marketing",
      description: "Build deep topic clusters and high-authority thought leadership assets that attract qualified buyers and earn natural links.",
      icon: <FileText className="text-[#3b82f6]" size={18} />,
      link: "#"
    },
    {
      title: "Revenue Measurement",
      description: "Connect conversion and traffic activity to opportunities, pipeline, and ultimate closed revenue to prove exact ROI.",
      icon: <BarChart3 className="text-[#3b82f6]" size={18} />,
      link: "#"
    }
  ];

  return (
    <section id="related-services" className="py-24 border-t border-white/10 bg-black text-left">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] uppercase tracking-[0.2em]">
            Related Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-100 tracking-tight leading-tight">
            Conversion Rate Optimization performs better alongside these services.
          </h2>
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
            Maximize your traffic investment by pairing conversion science with high-intent acquisition and modern attribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              id={`related-service-${idx}`}
              whileHover={{ y: -4, borderColor: "rgba(251, 146, 60, 0.2)" }}
              transition={{ duration: 0.2 }}
              className="bg-[#0D0D0D] border border-white/10 p-6 rounded-xl flex flex-col justify-between hover:bg-white/[0.02] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-black rounded-xl border border-white/10">
                    {s.icon}
                  </div>
                  <h3 className="text-base font-display font-medium text-slate-200">
                    {s.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="border-t border-white/5 mt-6 pt-4">
                <a
                  href="#final-cta"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#3b82f6] hover:text-[#3b82f6]/80 font-semibold group cursor-pointer"
                >
                  Explore integration
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
