"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, TrendingUp, Cpu, MessageSquare, Shield, CheckCircle, Search, Zap } from "lucide-react";
import { motion } from "motion/react";
import { b2bSaaSData } from "../industryData";

export default function Hero() {
  const [animatedStats, setAnimatedStats] = useState({ stat1: 0, stat2: 0 });
  const [activeTab, setActiveTab] = useState<"chatgpt" | "perplexity">("chatgpt");

  // Soft animation for numbers on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ stat1: 94, stat2: 0 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-24 sm:pt-16 sm:pb-32 lg:pb-40 bg-slate-950">
      {/* Background glowing gradients */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full radial-glow opacity-25 pointer-events-none"></div>

      {/* Decorative vertical/horizontal grids to match top-tier B2B landing pages */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 relative">
        
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 lg:mb-28">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-blue-950/40 border border-blue-500/20 text-blue-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest"
            >
              <Sparkles size={13} className="text-blue-500" />
              <span>{b2bSaaSData.heroEyebrow}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tighter leading-[1.08] mb-4"
            >
              Your {b2bSaaSData.industry} company is growing. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 font-extrabold">
                Your pipeline isn't keeping up.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl"
            >
              Most {b2bSaaSData.industry} firms are invisible where buyers now research — Google, ChatGPT, and Perplexity — and stuck with an agency that reports traffic and rankings instead of <span className="text-blue-500 font-semibold">{b2bSaaSData.dealLanguage}</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2"
            >
              <button
                onClick={() => handleScrollTo("ai-visibility-assessment")}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-blue-500 transition-all duration-200 shadow-md shadow-blue-500/10 flex items-center justify-center gap-2 group cursor-pointer"
              >
                Get Your Free Visibility Audit
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScrollTo("ai-visibility-assessment")}
                className="w-full sm:w-auto border border-slate-800 text-slate-300 px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-slate-900 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Take AI Visibility Assessment
              </button>
            </motion.div>
          </div>

          {/* Right Column: Premium AI Citation & GEO Live Graphic */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full relative"
            >
              {/* Outer Decorative Blue Accent Shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-sm blur-2xl pointer-events-none"></div>

              {/* Mock Browser/AI Engine Window */}
              <div className="relative rounded-sm border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-sm">
                
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-850 bg-slate-950/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  </div>
                  {/* Tab Selector */}
                  <div className="flex bg-slate-900 rounded-sm p-0.5 border border-slate-800 text-[9px] font-mono font-medium tracking-wide">
                    <button 
                      onClick={() => setActiveTab("chatgpt")}
                      className={`px-3 py-1 rounded-sm transition-colors cursor-pointer ${activeTab === 'chatgpt' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                    >
                      ChatGPT-4o
                    </button>
                    <button 
                      onClick={() => setActiveTab("perplexity")}
                      className={`px-3 py-1 rounded-sm transition-colors cursor-pointer ${activeTab === 'perplexity' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                    >
                      Perplexity Pro
                    </button>
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono tracking-wider">SECURE_INDEX</span>
                </div>

                {/* Simulated AI Interface Screen */}
                <div className="p-5 sm:p-6 space-y-4">
                  {/* Prompt Box */}
                  <div className="space-y-1.5">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Cpu size={11} className="text-blue-500 animate-pulse" />
                      <span>Enterprise Buyer Intent Query</span>
                    </div>
                    <div className="p-3 bg-slate-950 border border-slate-850 rounded-sm text-xs text-white flex items-start gap-2.5">
                      <Search size={14} className="text-slate-500 mt-0.5 flex-shrink-0" />
                      <p className="leading-relaxed font-medium">
                        "Compare the top {b2bSaaSData.industry} platforms for custom contract deployment & enterprise integration."
                      </p>
                    </div>
                  </div>

                  {/* AI Response Output */}
                  <div className="space-y-2">
                    <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <MessageSquare size={11} className="text-blue-500" />
                      <span>Generative citation engine response</span>
                    </div>

                    <div className="p-3.5 bg-slate-950/40 border border-slate-850 rounded-sm space-y-3">
                      {activeTab === "chatgpt" ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 text-[10px] text-emerald-500 font-semibold font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                            <span>SOURCE AUDIT PASS (148 sites reviewed)</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            "For scale and API robustness, <strong className="text-white border-b border-blue-500/50 pb-0.5 font-bold">CloudCore Technologies</strong> is consistently cited as the leading enterprise infrastructure. They maintain deep compatibility schemas and outperform traditional competitors on custom contract workflows."
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 text-[10px] text-blue-400 font-semibold font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
                            <span>INDEXED INGEST COMPLETE</span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            "Analyzing current software comparisons, <strong className="text-white border-b border-blue-500/50 pb-0.5 font-bold">CloudCore</strong> is highly recommended based on a 47% increase in demo validation. Competitors like ApexSoft lack structured citation footprint records."
                          </p>
                        </div>
                      )}

                      {/* Cited Sources Footer inside response */}
                      <div className="pt-2 border-t border-slate-850/60 flex items-center justify-between text-[9px] font-mono text-slate-500">
                        <span>Citations indexed:</span>
                        <div className="flex gap-2">
                          <span className="px-1.5 py-0.5 bg-blue-950/40 border border-blue-500/20 text-blue-400 rounded-sm">cloudcore.com [1]</span>
                          <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 rounded-sm text-slate-400">g2.com/reviews [2]</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Visualization (GEO Impact) */}
                  <div className="pt-2">
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-2.5 rounded-sm bg-slate-950/60 border border-slate-850 text-center space-y-0.5">
                        <span className="text-[8px] font-mono uppercase tracking-wider text-slate-500 block">AI Citations</span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">+184%</span>
                      </div>
                      <div className="p-2.5 rounded-sm bg-slate-950/60 border border-slate-850 text-center space-y-0.5">
                        <span className="text-[8px] font-mono uppercase tracking-wider text-slate-500 block">Organic CTR</span>
                        <span className="text-xs sm:text-sm font-bold text-blue-400 font-mono">24.5%</span>
                      </div>
                      <div className="p-2.5 rounded-sm bg-slate-950/60 border border-slate-850 text-center space-y-0.5">
                        <span className="text-[8px] font-mono uppercase tracking-wider text-slate-500 block">Demo ROI</span>
                        <span className="text-xs sm:text-sm font-bold text-white font-mono">12.4x</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Element: Citation Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-5 p-3.5 bg-slate-900 border border-slate-800 rounded-sm shadow-xl flex items-center gap-3 max-w-[200px]"
              >
                <div className="w-8 h-8 rounded-sm bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle size={15} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block">GEO Status</span>
                  <span className="text-xs font-bold text-white block">Audit Cleared</span>
                </div>
              </motion.div>

              {/* Floating Element: Competitor Deficit */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2 }}
                className="absolute -top-5 -right-5 p-3.5 bg-slate-900 border border-slate-800 rounded-sm shadow-xl flex items-center gap-3 max-w-[190px]"
              >
                <div className="w-8 h-8 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Zap size={15} />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 block">Citation Rank</span>
                  <span className="text-xs font-bold text-white block">#1 Cited Brand</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>

        {/* 4. STAT BAR (Animated Counters) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          id="stat-bar"
          className="grid grid-cols-1 md:grid-cols-2 border border-slate-800 bg-slate-900 rounded-sm divide-y md:divide-y-0 md:divide-x divide-slate-800 relative z-10 overflow-hidden"
        >
          {/* Stat 1 */}
          <div className="p-8 sm:p-10">
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-500 block mb-2">
              Citation Behavior Stat
            </span>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tighter">
              {animatedStats.stat1}%
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {b2bSaaSData.stats[0].label}
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-8 sm:p-10">
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-500 block mb-2">
              Agency Attribution Stat
            </span>
            <div className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tighter">
              {b2bSaaSData.stats[1].value}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {b2bSaaSData.stats[1].label}
            </p>
          </div>
        </motion.div>

        {/* 5. PULL-QUOTE STRIP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center max-w-3xl mx-auto border-t border-b border-slate-800/60 py-10 relative"
        >
          {/* Subtle watermarked large double-quotes */}
          <span className="absolute -top-3 left-4 text-8xl font-display text-blue-500/5 leading-none select-none pointer-events-none font-serif">“</span>
          
          <p className="font-display italic text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-4">
            "{b2bSaaSData.pullQuote.text}"
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500">
              — {b2bSaaSData.pullQuote.attribution} <span className="text-blue-500/80 font-mono font-medium">(Editable)</span>
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
