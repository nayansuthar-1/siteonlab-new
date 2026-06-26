"use client";

import { caseStudies } from "../data";
import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface CaseStudiesProps {
  onCtaClick: () => void;
}

export default function CaseStudies({ onCtaClick }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        
        {/* Header block with inline link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4 text-left">
            <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded">
              Case Studies & Results
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              B2B website results we can put a number on.
            </h2>
          </div>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors py-2 cursor-pointer border-b border-blue-500/20 hover:border-blue-400 uppercase tracking-wider"
          >
            See all case studies
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative flex flex-col justify-between p-8 rounded-sm bg-zinc-900/40 border border-white/5 hover:border-blue-500/50 transition-all duration-300"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-blue-400 font-bold tracking-wider uppercase">
                    {item.industry}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-950 border border-white/5 text-[10px] font-mono text-zinc-400">
                    {item.timeline}
                  </span>
                </div>

                {/* Headline & Description */}
                <h3 className="font-display text-xl font-bold text-white tracking-tight mb-4 group-hover:text-blue-400 transition-colors leading-snug">
                  {item.headline}
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed mb-8">
                  {item.description}
                </p>
              </div>

              {/* Big Metric Footer */}
              <div className="border-t border-white/5 pt-6 mt-auto">
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-bold">Key Impact</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                    {item.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
