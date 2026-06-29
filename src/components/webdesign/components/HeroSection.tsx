"use client";

import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import HeroDashboard from "./HeroDashboard";

interface HeroSectionProps {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}

export default function HeroSection({ onPrimaryClick, onSecondaryClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-zinc-950 text-zinc-100">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-400 inline-block mr-1.5 align-middle animate-pulse" />
              <span className="align-middle">Website Design & Development | Enterprise Performance</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              The Web Design agency that drives <span className="text-blue-500">Demos</span>, <span className="text-blue-500">Sales</span>, and <span className="text-blue-500">Pipeline</span>.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed max-w-xl"
            >
              HybridMonks helps B2B SaaS and Tech companies turn digital surfaces into a <span className="text-white italic underline underline-offset-4 decoration-blue-500">measurable revenue channel</span>. We build for buyer-intent and AI visibility — measured by qualified pipeline, not vanity metrics.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={onPrimaryClick}
                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs rounded shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-zinc-200 transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                Request a Growth Blueprint
              </button>
              
              <button
                onClick={onSecondaryClick}
                className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold uppercase tracking-wider text-xs rounded transition-all duration-300 active:scale-[0.98] cursor-pointer"
              >
                See Case Studies
              </button>
            </motion.div>

            {/* Quick Features Grid inside hero (combining design HTML layout) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/5"
            >
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-200">Revenue-First Strategy</p>
                  <p className="text-[11px] text-zinc-500">We optimize for business outcomes and long-term CAC efficiency.</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="mt-1 w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-200">AI Search Optimization</p>
                  <p className="text-[11px] text-zinc-500">We structure metadata and authority signals so LLMs cite your product.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Related Graphics */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Visual background glow panel */}
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-3xl pointer-events-none transform -rotate-2 scale-95" />
            
            {/* Decorative device frame / container */}
            <div className="relative w-full max-w-md bg-zinc-950 rounded-2xl p-3 border border-white/5 shadow-2xl overflow-hidden backdrop-blur-3xl group">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 opacity-80" />
              
              {/* Browser control bar mockup */}
              <div className="flex items-center justify-between px-3 py-2 bg-zinc-900/60 rounded-t-lg border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-zinc-600 bg-zinc-950 px-4 py-0.5 rounded border border-white/5">
                  hybridmonks.com/conversion-engine
                </div>
                <div className="w-4" />
              </div>

              {/* Live interactive B2B performance analytics graph dashboard */}
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden rounded-b-lg bg-zinc-950 flex flex-col justify-between">
                <HeroDashboard />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
