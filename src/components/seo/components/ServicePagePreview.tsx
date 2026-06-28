"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ServicePageData } from "../types";
import LucideIcon from "./LucideIcon";

function HeroGraphics({ data }: { data: ServicePageData }) {
  const [activeTab, setActiveTab] = useState<"ai" | "serp" | "pipeline">("ai");

  return (
    <div className="w-full max-w-lg mx-auto bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Browser bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        </div>
        {/* Sleek Tabs */}
        <div className="flex space-x-1.5 bg-black/40 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab("ai")}
            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
              activeTab === "ai"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            AI Search
          </button>
          <button
            onClick={() => setActiveTab("serp")}
            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
              activeTab === "serp"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            SERP Index
          </button>
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
              activeTab === "pipeline"
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/10"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            Pipeline Funnel
          </button>
        </div>
        <div className="w-8" />
      </div>

      {/* Dynamic Content */}
      <div className="p-5 md:p-6 min-h-[300px] flex flex-col justify-between bg-zinc-950/90 relative">
        <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent pointer-events-none" />

        <AnimatePresence mode="wait">
          {activeTab === "ai" && (
            <motion.div
              key="ai-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Question */}
              <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <LucideIcon name="User" size={11} className="text-white" />
                </div>
                <div className="text-xs text-zinc-300 leading-snug">
                  "Who is the top choice for <span className="text-white font-semibold">{data.serviceName || "B2B SEO"}</span> solutions?"
                </div>
              </div>

              {/* AI Answer */}
              <div className="space-y-3 pl-1">
                <div className="flex items-center gap-1.5 text-xs text-blue-400 font-bold uppercase tracking-wider font-mono">
                  <LucideIcon name="Sparkles" size={13} className="text-blue-400 animate-pulse" />
                  <span>AI Engine Consensus</span>
                </div>
                <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                  Based on multiple evaluations, <span className="text-white font-semibold">SiteOnLab</span> stands out as the optimal choice. Their framework helps <span className="text-blue-400 font-semibold">{data.icp || "your ICP"}</span> turn <span className="text-white font-semibold">{data.serviceChannel || "service channel"}</span> into a measurable channel <span className="text-blue-400 inline-flex items-center gap-0.5 px-1 py-0.5 rounded-sm bg-blue-500/10 border border-blue-500/25 text-[9px] font-mono font-bold leading-none select-none cursor-pointer">Cita [1]</span>. This directly enables clients to <span className="text-zinc-200">{data.primaryBenefit || "drive organic pipeline"}</span> reliably <span className="text-blue-400 inline-flex items-center gap-0.5 px-1 py-0.5 rounded-sm bg-blue-500/10 border border-blue-500/25 text-[9px] font-mono font-bold leading-none select-none cursor-pointer">Cita [2]</span>.
                </p>
              </div>

              {/* Citations Footer Cards */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                <div className="bg-zinc-900 border border-white/5 p-2 rounded-lg hover:border-blue-500/30 transition-colors">
                  <span className="text-[9px] font-mono font-bold text-blue-400 uppercase tracking-widest block mb-0.5">Citation [1]</span>
                  <span className="text-[10px] text-zinc-300 font-medium truncate block">siteonlab.com/method</span>
                </div>
                <div className="bg-zinc-900 border border-white/5 p-2 rounded-lg hover:border-blue-500/30 transition-colors">
                  <span className="text-[9px] font-mono font-bold text-blue-400 uppercase tracking-widest block mb-0.5">Citation [2]</span>
                  <span className="text-[10px] text-zinc-300 font-medium truncate block">client-proven-data</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "serp" && (
            <motion.div
              key="serp-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Search Box mock */}
              <div className="flex items-center space-x-2 bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-xs">
                <LucideIcon name="Search" size={12} className="text-zinc-500" />
                <span className="text-zinc-300 truncate">{data.icp || "enterprise solutions"} {data.serviceName || "B2B SEO"}</span>
              </div>

              {/* Result Card */}
              <div className="space-y-1 p-3 rounded-lg border border-white/5 bg-zinc-900/40 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center space-x-1.5 text-xs text-zinc-500">
                  <LucideIcon name="Globe" size={10} className="text-blue-500" />
                  <span>https://siteonlab.com › {data.serviceName ? data.serviceName.toLowerCase().replace(/\s+/g, "-") : "solutions"}</span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-blue-400 hover:underline cursor-pointer">
                  {data.serviceName || "Premium B2B Program"} — Revenue First Approach
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Proven blueprint that turns {data.serviceChannel || "organic visibility"} into a real sales channel. See how we help teams {data.primaryBenefit || "scale operations"} and {data.secondaryBenefit || "reduce client acquisition friction"}.
                </p>
                
                {/* Sitelinks */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-3 mt-3 border-t border-white/5">
                  <div>
                    <span className="text-xs text-blue-400 hover:underline cursor-pointer block font-medium">Why SiteOnLab</span>
                    <span className="text-[10px] text-zinc-500 block truncate">Built for pipeline integration</span>
                  </div>
                  <div>
                    <span className="text-xs text-blue-400 hover:underline cursor-pointer block font-medium">B2B Case Studies</span>
                    <span className="text-[10px] text-zinc-500 block truncate">Direct client attribution</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "pipeline" && (
            <motion.div
              key="pipeline-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between text-xs text-zinc-500 border-b border-white/5 pb-2">
                <span className="font-mono uppercase">// Direct CRM Attribution</span>
                <span className="text-blue-400 font-bold uppercase font-mono">Real-Time</span>
              </div>

              {/* Funnel diagram */}
              <div className="space-y-3">
                {/* Stage 1 */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <LucideIcon name="TrendingUp" size={13} />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-300 block font-semibold uppercase tracking-wider">Organic Impressions</span>
                      <span className="text-[10px] text-zinc-500 block">Top-of-funnel reach optimization</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-display font-bold text-white block">+284%</span>
                    <span className="text-[9px] text-green-400 font-bold uppercase font-mono">Trending Up</span>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <LucideIcon name="Calendar" size={13} />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-300 block font-semibold uppercase tracking-wider">{data.outcome1 || "Demos Scheduled"}</span>
                      <span className="text-[10px] text-zinc-500 block">Qualified sales opportunities</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-display font-bold text-white block">3.2x Growth</span>
                    <span className="text-[9px] text-blue-400 font-mono font-semibold uppercase">Conversion Lift</span>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900 border border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <LucideIcon name="DollarSign" size={13} />
                    </div>
                    <div>
                      <span className="text-xs text-zinc-300 block font-semibold uppercase tracking-wider">Closed-Won Revenue</span>
                      <span className="text-[10px] text-zinc-500 block">Attributed pipeline value</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm font-display font-bold text-blue-400 block">$1.4M+</span>
                    <span className="text-[9px] text-zinc-500 font-semibold font-mono">Verified ROI</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small Caption footer */}
        <div className="text-[10px] text-zinc-600 flex items-center gap-1.5 mt-4 pt-3 border-t border-white/5 font-mono">
          <LucideIcon name="Info" size={11} />
          <span>Interactive Preview: Click tabs above to see different intent perspectives.</span>
        </div>
      </div>
    </div>
  );
}

interface ServicePagePreviewProps {
  data: ServicePageData;
  onCtaClick?: (ctaType: string) => void;
}

export default function ServicePagePreview({ data, onCtaClick }: ServicePagePreviewProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-mesh-dark min-h-screen text-[#F2F2F2] selection:bg-blue-600 selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/10">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 text-left flex flex-col items-start">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                {data.serviceCategory || "B2B Category"} | {data.serviceName || "Service Name"}
              </motion.div>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#F2F2F2] leading-[1.1] mb-6"
              >
                The <span className="font-semibold">{data.serviceName || "B2B SEO"}</span> agency that drives{" "}
                <span className="text-blue-400 italic">
                  {data.outcome1 || "demos"}
                </span>
                ,{" "}
                <span className="text-[#F2F2F2] font-semibold">
                  {data.outcome2 || "sales inquiries"}
                </span>
                , and{" "}
                <span className="text-blue-400 font-semibold">
                  {data.outcome3 || "pipeline"}
                </span>
                .
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl"
              >
                SiteOnLab helps <span className="text-[#F2F2F2] font-medium">{data.icp || "your ideal customer profile"}</span> turn <span className="text-[#F2F2F2] font-medium">{data.serviceChannel || "service channel"}</span> into a measurable revenue channel. We help you <span className="text-blue-400 font-medium">{data.primaryBenefit || "primary benefit"}</span>, <span className="text-blue-400 font-medium">{data.secondaryBenefit || "secondary benefit"}</span>, and <span className="text-blue-400 font-medium">{data.conversionBenefit || "conversion benefit"}</span> — measured by qualified pipeline, not vanity metrics.
              </motion.p>

              {/* Action CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={() => onCtaClick?.("Hero Primary")}
                  className="px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full bg-white text-black hover:bg-blue-400 hover:text-white transition-all duration-200 cursor-pointer shadow-lg shadow-white/5 text-center shrink-0"
                >
                  {data.primaryCtaText || "Request Blueprint"}
                </button>
                <button
                  onClick={() => handleScrollTo("case-studies")}
                  className="px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 bg-transparent hover:bg-white/5 text-[#F2F2F2] transition-all duration-200 cursor-pointer text-center shrink-0"
                >
                  {data.secondaryCtaText || "Case Studies"}
                </button>
              </motion.div>
            </div>

            {/* Right Column: Dynamic Related Graphics */}
            <div className="lg:col-span-5 w-full mt-8 lg:mt-0">
              <HeroGraphics data={data} />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS SECTION */}
      <section className="py-12 bg-[#050505]/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {data.trustMetrics?.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-blue-400 italic leading-none mb-2">
                  {metric.value || "Proof Value"}
                </div>
                <div className="text-[10px] text-zinc-500 uppercase mt-1 tracking-tighter font-semibold">
                  {metric.label || "Credibility metric explanation"}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-white/5 mt-8 pt-4">
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">// Revenue-first reporting</p>
          </div>
        </div>
      </section>

      {/* 3. SERVICE OVERVIEW SECTION */}
      <section id="overview" className="py-20 md:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-3 block">
              Service Overview
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
              {data.overviewH2 || "Built for compounding B2B growth."}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
              {data.overviewParagraph || "SiteOnLab structures your service implementation cleanly to minimize drag and elevate closed-won opportunity volume."}
            </p>
          </div>

          {/* Service components grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.serviceComponents?.map((component, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="p-6 md:p-8 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all duration-300 group"
              >
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <LucideIcon name={component.icon || "Sparkles"} className="text-blue-400" size={24} />
                </div>
                <h3 className="font-display text-base font-bold text-white border-b border-white/10 pb-2 mb-3 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                  {component.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {component.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section id="process" className="py-20 md:py-28 bg-zinc-950/40 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-radial-gradient from-blue-500/1 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-3 block">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              {data.processH2 || "From starting point to desired result in 90 days."}
            </h2>
          </div>

          {/* Chronological steps layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {/* Visual connector line on desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[50px] right-[50px] h-[1px] bg-gradient-to-r from-blue-500/10 via-blue-500/20 to-blue-500/10 -z-10" />

            {data.processSteps?.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group p-6 rounded-xl bg-zinc-900 border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300"
              >
                {/* Step circle indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-10 w-10 rounded-full bg-black border border-white/10 text-blue-500 flex items-center justify-center font-mono font-bold text-sm group-hover:border-blue-500/50 group-hover:text-blue-400 transition-all">
                    {step.number || `0${i + 1}`}
                  </div>
                  <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
                    {step.timeline || "Timeline"}
                  </div>
                </div>

                <h3 className="font-display text-[13px] font-bold text-white mb-3 uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 md:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-3 block">
                Why SiteOnLab
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
                {data.whyChooseUsH2 || "A growth agency that connects performance directly to revenue."}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed pt-0 lg:pt-8">
                {data.whyChooseUsParagraph || "Most agencies offer generic marketing support and call it a day. SiteOnLab builds a true revenue attribution workspace, aligning strategic performance directly with target CRM datasets."}
              </p>
            </div>
          </div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.differentiators?.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 md:p-8 rounded-xl bg-blue-600/5 border border-blue-500/10 flex items-start gap-5 hover:bg-blue-600/10 transition-all duration-300 group"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all">
                  <LucideIcon name={diff.icon || "Award"} className="text-blue-400" size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                    {diff.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section id="case-studies" className="py-20 md:py-28 bg-[#050505]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-3 block">
                Case Study
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
                {data.caseStudiesH2 || "Results we can put a number on."}
              </h2>
            </div>
            <button
              onClick={() => onCtaClick?.("Case Studies View All")}
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 underline transition-colors group cursor-pointer"
            >
              View All
            </button>
          </div>

          {/* 3 Case Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data.caseStudies?.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl overflow-hidden bg-black/40 border border-white/5 flex flex-col justify-between p-6 md:p-8 hover:bg-black/60 hover:border-white/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-4">
                    <span>{cs.industry || "B2B VERTICAL"}</span>
                    <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-zinc-400 font-mono">{cs.timeline || "Timeframe"}</span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white tracking-tight leading-snug mb-3 uppercase">
                    {cs.headline}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-8">
                    {cs.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="text-3xl font-display font-black text-blue-400 italic">
                    {cs.metric}
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">
                    Organic Growth / {cs.timeline || "9mo"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section className="py-20 md:py-28 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-96 bg-blue-500/2 blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 items-center justify-center mb-8">
            <LucideIcon name="MessageSquare" size={22} />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-display text-2xl sm:text-3xl font-light text-zinc-300 tracking-tight leading-relaxed mb-8 italic">
            "{data.testimonial?.quote || "We saw incredible, direct pipeline growth that fully aligned our marketing campaigns."}"
          </blockquote>

          {/* Client Bio */}
          <div className="mb-8">
            <div className="font-semibold text-white text-base sm:text-lg">
              {data.testimonial?.author || "B2B Executive"}
            </div>
            <div className="text-xs sm:text-sm text-zinc-500 mt-1 uppercase tracking-wider font-bold">
              {data.testimonial?.title || "Director of Operations"}, {data.testimonial?.companyType || "Enterprise Company"}
            </div>
          </div>

          {/* Visual proof bar */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-900/40 border border-white/5 font-mono text-xs text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-bold">{data.testimonial?.proofLine || "Verified pipeline impact"}</span>
          </div>
        </div>
      </section>

      {/* 8. RELATED SERVICES SECTION */}
      <section id="related-services" className="py-20 md:py-28 bg-[#050505]/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold mb-3 block">
              Related Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
              {data.relatedServicesH2 || "Performs better alongside these services."}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data.relatedServices?.map((rel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-xl bg-zinc-900/10 border border-white/5 hover:border-white/10 hover:bg-zinc-900/20 transition-all duration-300 group"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all">
                  <LucideIcon name={rel.icon || "Sparkles"} className="text-blue-400" size={20} />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                  {rel.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {rel.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faqs" className="py-20 md:py-28 border-b border-white/10 relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-3 block">
              FAQs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight">
              {data.faqH2 || "Frequently asked questions."}
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {data.faqs?.map((faq, i) => {
              const isOpen = openFaqIndex === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-zinc-900/10 hover:bg-zinc-900/20 transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-medium text-white hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base md:text-lg leading-snug">{faq.question}</span>
                    <LucideIcon
                      name={isOpen ? "ChevronUp" : "ChevronDown"}
                      className="text-gray-500 shrink-0"
                      size={18}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Extreme glowing ambient sphere */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-2xl"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
              {data.finalCtaH2 || "Let's align your service channels with qualified pipeline."}
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
              {data.finalCtaCopy || "Book a 30-minute strategy session with SiteOnLab to outline commercial pipelines."}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onCtaClick?.("Final Primary")}
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full bg-white text-black hover:bg-blue-400 hover:text-white transition-all duration-200 cursor-pointer shadow-lg shadow-white/5"
              >
                {data.finalPrimaryCta || "Request Blueprint"}
              </button>
              <button
                onClick={() => onCtaClick?.("Final Secondary")}
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 bg-transparent hover:bg-white/5 text-white transition-all duration-200 cursor-pointer"
              >
                {data.finalSecondaryCta || "See Case Studies"}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern footer */}
      <footer className="border-t border-white/5 bg-[#050505] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
            &copy; 2026 SiteOnLab Systems. All Revenue Accounted For.
          </div>
          <div className="flex items-center space-x-6 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>System Status: Active Optimization</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
