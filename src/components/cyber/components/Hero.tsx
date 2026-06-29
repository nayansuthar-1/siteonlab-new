"use client";

import { motion } from "motion/react";
import { ShieldCheck, ArrowRight, ArrowUpRight, BarChart3, Database, Globe, Network } from "lucide-react";
import { CYBERSECURITY_COPY } from "../data/copywriting";

interface HeroProps {
  onRequestBlueprint: () => void;
}

export default function Hero({ onRequestBlueprint }: HeroProps) {
  const { eyebrow, h1, supportingCopy, primaryCta, secondaryCta, metrics } = CYBERSECURITY_COPY.hero;

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-900">
      {/* Background ambient soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      
      {/* Structural pattern (grid) */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Hero Copy (7 columns on large screens) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky-500"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-500">{eyebrow}</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl font-display"
              id="hero-main-title"
            >
              {h1}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-400 font-sans max-w-xl leading-relaxed"
            >
              {supportingCopy}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={onRequestBlueprint}
                className="group inline-flex items-center gap-2 rounded-sm bg-white text-slate-950 px-6 py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-slate-200 transition-all shadow-lg"
                id="btn-hero-primary"
              >
                {primaryCta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-sm border border-slate-700 bg-transparent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-slate-900 transition-all"
              >
                {secondaryCta}
              </a>
            </motion.div>
          </div>

          {/* Static Typographic Visual (5 columns on large screens) */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-md rounded-sm border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 font-mono tracking-widest">AI SEARCH VISIBILITY & ENTITY GRAPH</span>
                </div>
                <Globe className="h-4 w-4 text-slate-500" />
              </div>

              {/* Static Representation of AI Search recommendation index */}
              <div className="mt-6 space-y-4 font-mono">
                
                {/* Search query box */}
                <div className="rounded-sm border border-slate-800 bg-slate-950 p-3 text-left">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-sky-500 mb-1">CISO INTERACTIVE QUERY</div>
                  <div className="text-xs text-white font-sans leading-normal">"What are the top enterprise MDR options for multi-cloud environments?"</div>
                </div>

                <div className="flex justify-center my-1">
                  <Network className="h-4 w-4 text-slate-700" />
                </div>

                {/* LLM Synthesis Processing */}
                <div className="rounded-sm border border-slate-800 bg-slate-900/40 p-3 text-left">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-sky-500 mb-1">LLM KNOWLEDGE SYNTHESIS</div>
                  <div className="space-y-1.5 text-[11px] text-slate-400">
                    <div className="flex justify-between border-b border-slate-800/40 pb-1">
                      <span>1. Cloud Compliance Security</span>
                      <span className="text-sky-400 font-bold">98.2% Match</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/40 pb-1">
                      <span>2. HybridMonks Client Brand</span>
                      <span className="text-sky-400 font-bold">97.4% Match</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3. Peer Community Citation</span>
                      <span className="text-sky-400 font-bold">84 citations</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center my-1">
                  <Network className="h-4 w-4 text-slate-700" />
                </div>

                {/* Final Citation Recommendation Output */}
                <div className="rounded-sm border border-sky-500/20 bg-sky-500/5 p-3 text-left">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-sky-400 mb-1">RECOMMENDED SOLUTION PROVIDED BY AI</div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    "Based on industry compliance benchmarks and technical comparisons, <strong className="text-sky-400 font-semibold font-mono">VigilantOps Security</strong> provides the highest-rated multi-cloud MDR coverage..."
                  </p>
                  <div className="mt-2 text-[9px] text-slate-500 font-mono uppercase tracking-wider">
                    Source: <span className="text-sky-400 hover:underline">vigilantops.com/resources</span>
                  </div>
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="absolute -bottom-3 -right-3 rounded-sm bg-sky-500/10 border border-sky-500/30 px-3 py-1 text-[9px] font-bold text-sky-400 font-mono tracking-widest uppercase shadow-lg">
                GEO Vetted
              </div>
            </motion.div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="mt-20 border-t border-slate-800 pt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.05 }}
                className="text-left"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  {metric.label}
                </div>
                <div className="text-3xl font-mono text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs text-slate-400 font-sans leading-relaxed">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
