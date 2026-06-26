"use client";

import { differentiators } from "../data";
import { motion } from "motion/react";
import { BarChart3, Radio, SearchCode, Milestone } from "lucide-react";

const icons = [BarChart3, Radio, SearchCode, Milestone];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-20 text-left">
          <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Why Teams Pick Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            A website design & development agency that connects performance to revenue.
          </h2>
          <p className="font-sans text-base text-zinc-400 leading-relaxed">
            Most agencies hand you standard design files, mockups, or basic code folders and call it done. SiteOnLab builds a complete measurement, indexing, and attribution layer so you can see exactly how your web platform drives pipeline from first touch to closed opportunity.
          </p>
        </div>

        {/* 4 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative p-8 rounded-sm bg-zinc-900/40 border border-white/5 hover:border-blue-500/50 transition-all duration-300 flex gap-6 items-start"
              >
                {/* Glowing decorative indicator */}
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/0 group-hover:bg-blue-500 transition-all duration-300 rounded-l-sm" />
                
                {/* Icon Column */}
                <div className="w-12 h-12 rounded bg-zinc-950 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-blue-500/30 transition-colors">
                  <IconComponent className="w-5 h-5 text-blue-500 group-hover:scale-105 transition-transform" />
                </div>

                {/* Content Column */}
                <div className="space-y-2">
                  <h3 className="font-display text-lg md:text-xl font-bold text-white tracking-tight">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
