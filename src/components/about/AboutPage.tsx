"use client";

import { useState, useEffect } from "react";
import * as LucideIcons from "lucide-react";
import {
  TrendingUp, Bot, Users, CheckCircle, ArrowRight, ChevronRight, Star,
  Briefcase, Shield, Globe, Award, Zap, Sparkles, Clock, ArrowUpRight,
  DollarSign, Mail, Play, Check, Activity,
  Info, Eye, Edit, MessageSquare, AlertCircle, RefreshCw
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";
import { TEAM_MEMBERS, CORE_VALUES, CULTURE_PILLARS, TESTIMONIALS, METRICS, INDUSTRIES } from "@/lib/about-data";
import BookingModal from "./BookingModal";
import AssessmentModal from "./AssessmentModal";

export default function AboutPage() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  // Interactive Widgets states
  const [selectedIndustry, setSelectedIndustry] = useState(INDUSTRIES[0].id);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  // Placeholder-highlight scaffolding is disabled on the public page.
  const highlightPlaceholders = false;

  // Animated Counter States
  const [counterPipeline, setCounterPipeline] = useState(0);
  const [counterBrands, setCounterBrands] = useState(0);
  const [counterGrowth, setCounterGrowth] = useState(0);
  const [countersTriggered, setCountersTriggered] = useState(false);

  // Trigger counters with a smooth interval animation on mount
  useEffect(() => {
    let pipelineInterval: NodeJS.Timeout;
    let brandsInterval: NodeJS.Timeout;
    let growthInterval: NodeJS.Timeout;

    // Reset counters
    setCounterPipeline(0);
    setCounterBrands(0);
    setCounterGrowth(0);

    const animateCounters = () => {
      setCountersTriggered(true);

      // Animate Pipeline up to 25
      let pCurrent = 0;
      pipelineInterval = setInterval(() => {
        if (pCurrent < 25) {
          pCurrent += 1;
          setCounterPipeline(pCurrent);
        } else {
          clearInterval(pipelineInterval);
        }
      }, 50);

      // Animate Brands up to 120
      let bCurrent = 0;
      brandsInterval = setInterval(() => {
        if (bCurrent < 120) {
          bCurrent += 4;
          setCounterBrands(bCurrent);
        } else {
          clearInterval(brandsInterval);
        }
      }, 30);

      // Animate Growth up to 180
      let gCurrent = 0;
      growthInterval = setInterval(() => {
        if (gCurrent < 180) {
          gCurrent += 6;
          setCounterGrowth(gCurrent);
        } else {
          clearInterval(growthInterval);
        }
      }, 25);
    };

    animateCounters();

    return () => {
      clearInterval(pipelineInterval);
      clearInterval(brandsInterval);
      clearInterval(growthInterval);
    };
  }, []);

  const handleResetCounters = () => {
    setCounterPipeline(0);
    setCounterBrands(0);
    setCounterGrowth(0);
    setTimeout(() => {
      // Re-trigger
      let pCurrent = 0;
      const pipelineInterval = setInterval(() => {
        if (pCurrent < 25) {
          pCurrent += 1;
          setCounterPipeline(pCurrent);
        } else {
          clearInterval(pipelineInterval);
        }
      }, 40);

      let bCurrent = 0;
      const brandsInterval = setInterval(() => {
        if (bCurrent < 120) {
          bCurrent += 4;
          setCounterBrands(bCurrent);
        } else {
          clearInterval(brandsInterval);
        }
      }, 25);

      let gCurrent = 0;
      const growthInterval = setInterval(() => {
        if (gCurrent < 180) {
          gCurrent += 6;
          setCounterGrowth(gCurrent);
        } else {
          clearInterval(growthInterval);
        }
      }, 20);
    }, 100);
  };

  // Helper to dynamically render Lucide icons
  const renderValueIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-brand-accent" />;
    }
    return <Sparkles className="w-5 h-5 text-brand-accent" />;
  };

  return (
    <div className="theme-about min-h-screen bg-brand-bg text-brand-text-primary selection:bg-brand-accent/30 selection:text-white">

      {/* SECTION 3: ABOUT HERO */}
      <section id="about-hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-slate-900">
        {/* Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase text-brand-accent">About SiteOnLab</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight max-w-5xl mx-auto">
            Building the B2B growth engine for the <span className="text-gradient">AI search era.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-brand-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
            We help scaling B2B companies become the brand buyers find in Google, trust in ChatGPT and Perplexity, and choose when they're ready to buy — measured in pipeline, not vanity metrics.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-xl transition-all-300 shadow-xl shadow-brand-accent/20 cursor-pointer flex items-center justify-center gap-2 group text-sm md:text-base"
            >
              Book an Intro Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setIsAssessmentOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-brand-text-secondary hover:text-white font-bold rounded-xl transition-all-300 cursor-pointer flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Take the AI Visibility Assessment
              <Bot className="w-4 h-4 text-brand-orange" />
            </button>
          </div>

          {/* Breadcrumb Navigation */}
          <div className="pt-12 border-t border-slate-900/60 max-w-sm mx-auto">
            <nav className="flex justify-center text-xs font-mono text-brand-text-muted" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <a href="#" className="hover:text-brand-text-secondary transition-colors">Home</a>
                </li>
                <li>
                  <div className="flex items-center">
                    <span className="mx-2">/</span>
                    <span className="text-brand-text-secondary font-semibold" aria-current="page">About Us</span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO WE ARE (MISSION) */}
      <section id="who-we-are" className="py-20 md:py-28 bg-brand-bg-light/40 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">THE STANDARD</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Meet SiteOnLab. <br className="hidden md:inline"/>
                <span className="text-brand-text-secondary font-light">Growth isn't just a goal — it's the standard we hold ourselves to.</span>
              </h2>

              <div className="space-y-4 text-sm md:text-base text-brand-text-secondary leading-relaxed">
                <p>
                  We partner with growth-stage B2B firms to build revenue systems that unify SEO, GEO/AEO, demand generation, conversion, and AI automation — engineered around how buyers actually research today.
                </p>
                <p>
                  Our clients don't see us as a vendor; we're their dedicated growth and AI-visibility partner, accountable to pipeline and revenue from day one.
                </p>
              </div>
            </div>

            {/* Right Pull-Stat Column */}
            <div className="lg:col-span-5">
              <div className={`p-8 bg-slate-900 border rounded-3xl relative overflow-hidden flex flex-col justify-between h-[280px] md:h-[320px] transition-all-300 ${
                highlightPlaceholders ? "border-amber-500/40 border-glow" : "border-slate-800"
              }`}>
                {/* Admin label indicator */}
                {highlightPlaceholders && (
                  <div className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                    <Info className="w-3 h-3" /> Editable Partner Stat
                  </div>
                )}

                <div className="space-y-2 pt-4">
                  <Star className="w-8 h-8 text-brand-orange fill-brand-orange/20" />
                  <span className="text-sm font-mono text-brand-text-muted uppercase tracking-widest block">Client Satisfaction Scoring</span>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl md:text-7xl font-black text-white">94</span>
                    <span className="text-2xl text-brand-accent font-extrabold">/100</span>
                  </div>
                  <p className="text-sm text-brand-text-secondary font-semibold mt-1">Verified Client Net Promoter Score (NPS)</p>
                  <p className="text-xs text-brand-text-muted mt-0.5">Industry average for B2B digital agencies is currently 42.</p>
                </div>

                <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-xs text-brand-text-muted">
                  <span>Audited: June 2026</span>
                  <span className="font-mono text-brand-orange">SiteOnLab Inc.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: MISSION & VISION (TWO CARDS) */}
      <section id="mission-vision" className="py-20 md:py-24 bg-brand-bg border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

            {/* Mission Card */}
            <div className="p-8 md:p-12 bg-slate-900 border border-slate-800/80 rounded-3xl hover:border-slate-700 transition-all-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl group-hover:bg-brand-accent/10 transition-all"></div>
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
                <TargetIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent block mb-2">01 / OUR MISSION</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">To make clients the dominant recommended choice.</h3>
              <p className="text-sm md:text-base text-brand-text-secondary leading-relaxed font-light">
                To make every B2B client we work with the most discoverable, most recommended, and most trusted option in their category — across traditional search and generative AI engines.
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 md:p-12 bg-slate-900 border border-slate-800/80 rounded-3xl hover:border-slate-700 transition-all-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-full blur-xl group-hover:bg-brand-orange/10 transition-all"></div>
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-orange block mb-2">02 / OUR VISION</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">The ultimate scaling partner for B2B innovators.</h3>
              <p className="text-sm md:text-base text-brand-text-secondary leading-relaxed font-light">
                To become the leading AI-powered B2B revenue growth agency — the partner scaling companies turn to when visibility must convert into predictable revenue.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: OUR CORE VALUES */}
      <section id="core-values" className="py-20 md:py-28 bg-brand-bg-light/30 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">OUR COMPASS</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">What we stand for.</h2>
            <p className="text-sm md:text-base text-brand-text-secondary max-w-2xl mx-auto">
              We operate on alignment, extreme ownership, and revenue impact. These core pillars guide how we design campaigns, build algorithms, and deliver results.
            </p>
          </div>

          {/* Grid of 6 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CORE_VALUES.map((val) => (
              <div
                key={val.id}
                className="p-6 md:p-8 bg-slate-900 border border-slate-800/85 rounded-2xl hover:border-slate-700 hover:bg-slate-850 transition-all-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 mb-5 shadow-inner">
                    {renderValueIcon(val.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{val.title}</h3>
                  <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed font-light">{val.description}</p>
                </div>
                <div className="mt-6 border-t border-slate-800/60 pt-3 flex justify-between items-center text-[10px] text-brand-text-muted font-mono">
                  <span>SITEONLAB CORE</span>
                  <span>VALUE 0{val.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: HOW WE WORK / OUR CULTURE */}
      <section id="how-we-work" className="py-20 md:py-28 bg-brand-bg border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">METHODOLOGY</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">The principles behind the results.</h2>
            <p className="text-sm md:text-base text-brand-text-secondary max-w-2xl mx-auto">
              Digital marketing has changed. Here is how our operational model adapts to the modern buyer research journey.
            </p>
          </div>

          {/* Cards with icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CULTURE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="p-8 bg-slate-900 border border-slate-800/80 rounded-2xl relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all"></div>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 mb-6">
                    {pillar.iconName === "Award" && <Award className="w-6 h-6 text-brand-accent" />}
                    {pillar.iconName === "Zap" && <Zap className="w-6 h-6 text-brand-orange" />}
                    {pillar.iconName === "Briefcase" && <Briefcase className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight">{pillar.title}</h3>
                  <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed font-light">{pillar.description}</p>
                </div>
                <div className="mt-8 border-t border-slate-850 pt-4 flex justify-between items-center text-[10px] text-brand-text-muted font-mono">
                  <span>ENGAGEMENT CODE</span>
                  <span>PILLAR 0{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: PROOF BAR (ANIMATED COUNTERS) */}
      <section id="proof-bar" className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-brand-bg border-b border-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.06),transparent_40%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left items-center">

            {/* Metric 1 */}
            <div className={`p-6 bg-slate-900/60 border rounded-2xl flex flex-col justify-center h-44 relative overflow-hidden transition-all-300 ${
              highlightPlaceholders ? "border-amber-500/40 border-glow" : "border-slate-800/80"
            }`}>
              {highlightPlaceholders && (
                <div className="absolute top-2 right-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-mono px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Edit className="w-2.5 h-2.5" /> Editable Value
                </div>
              )}
              <div className="flex items-baseline justify-center md:justify-start gap-0.5">
                <span className="text-5xl font-black text-white">$</span>
                <span className="text-6xl font-black text-white">{counterPipeline}</span>
                <span className="text-4xl font-extrabold text-brand-accent">M+</span>
              </div>
              <p className="text-sm font-semibold text-brand-text-secondary mt-2">B2B Revenue Pipeline Influenced</p>
              <p className="text-xs text-brand-text-muted mt-1">Directly attributed in client Salesforce instances.</p>
            </div>

            {/* Metric 2 */}
            <div className={`p-6 bg-slate-900/60 border rounded-2xl flex flex-col justify-center h-44 relative overflow-hidden transition-all-300 ${
              highlightPlaceholders ? "border-amber-500/40 border-glow" : "border-slate-800/80"
            }`}>
              {highlightPlaceholders && (
                <div className="absolute top-2 right-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-mono px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Edit className="w-2.5 h-2.5" /> Editable Value
                </div>
              )}
              <div className="flex items-baseline justify-center md:justify-start gap-0.5">
                <span className="text-6xl font-black text-white">{counterBrands}</span>
                <span className="text-4xl font-extrabold text-brand-orange">+</span>
              </div>
              <p className="text-sm font-semibold text-brand-text-secondary mt-2">B2B Categories & Brands Scaled</p>
              <p className="text-xs text-brand-text-muted mt-1">From Seed-stage SaaS to Fortune 100 enterprise tech.</p>
            </div>

            {/* Metric 3 */}
            <div className={`p-6 bg-slate-900/60 border rounded-2xl flex flex-col justify-center h-44 relative overflow-hidden transition-all-300 ${
              highlightPlaceholders ? "border-amber-500/40 border-glow" : "border-slate-800/80"
            }`}>
              {highlightPlaceholders && (
                <div className="absolute top-2 right-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-mono px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <Edit className="w-2.5 h-2.5" /> Editable Value
                </div>
              )}
              <div className="flex items-baseline justify-center md:justify-start gap-0.5">
                <span className="text-6xl font-black text-white">{counterGrowth}</span>
                <span className="text-4xl font-extrabold text-emerald-400">%</span>
              </div>
              <p className="text-sm font-semibold text-brand-text-secondary mt-2">Avg. YoY Pipeline Growth from Search & GEO</p>
              <p className="text-xs text-brand-text-muted mt-1">Determined using 12-month post-campaign data.</p>
            </div>

          </div>

          {/* Interactive Trigger Control */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleResetCounters}
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-text-secondary hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all-300 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3 text-brand-accent" /> Re-trigger Counters Animation
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 9: CLIENT TESTIMONIALS */}
      <section id="testimonials" className="py-20 md:py-28 bg-brand-bg-light/25 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-900 pb-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">PROOF OF IMPACT</span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Kind words from B2B leaders.</h2>
            </div>
            <p className="text-sm text-brand-text-secondary max-w-sm font-light">
              We focus on revenue. Our clients measure our contribution directly on marketing qualified leads and sales cycle speed.
            </p>
          </div>

          {/* Carousel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left carousel selectors */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
              {TESTIMONIALS.map((test, idx) => (
                <button
                  key={test.id}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all-300 cursor-pointer shrink-0 lg:shrink ${
                    activeTestimonial === idx
                      ? "bg-brand-accent/5 border-brand-accent/50 text-white"
                      : "bg-slate-900 border-slate-850 text-brand-text-secondary hover:border-slate-800"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white block">{test.author}</span>
                    <span className="text-[10px] font-mono text-brand-accent bg-brand-accent/10 px-1.5 py-0.5 rounded">{test.company}</span>
                  </div>
                  <span className="text-[11px] text-brand-text-secondary block mt-1">{test.role}</span>
                </button>
              ))}
            </div>

            {/* Main Active Testimonial Card */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`p-8 md:p-10 bg-slate-900 border rounded-2xl relative flex flex-col justify-between h-full ${
                    highlightPlaceholders ? "border-amber-500/40 border-glow" : "border-slate-800/80"
                  }`}
                >
                  {highlightPlaceholders && (
                    <div className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono px-2 py-0.5 rounded flex items-center gap-1">
                      <Edit className="w-3 h-3" /> Editable Testimonial
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Stars & Industry */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-brand-orange fill-brand-orange" />
                        ))}
                      </div>
                      <span className="text-xs font-mono text-brand-text-muted">{TESTIMONIALS[activeTestimonial].industry}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-base md:text-lg text-brand-text-primary leading-relaxed font-light italic">
                      "{TESTIMONIALS[activeTestimonial].quote}"
                    </p>
                  </div>

                  {/* Profile info & Metric Badge */}
                  <div className="mt-8 pt-6 border-t border-slate-850 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-white">{TESTIMONIALS[activeTestimonial].author}</h4>
                      <p className="text-xs text-brand-text-secondary">{TESTIMONIALS[activeTestimonial].role} at {TESTIMONIALS[activeTestimonial].company}</p>
                    </div>

                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 flex items-center gap-2">
                      <Check className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold tracking-tight">{TESTIMONIALS[activeTestimonial].metrics}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 10: OUR TEAM */}
      <section id="team" className="py-20 md:py-28 bg-brand-bg border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent">THE COHORT</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">The team behind your growth.</h2>
            <p className="text-sm md:text-base text-brand-text-secondary max-w-2xl mx-auto">
              Our experts come from engineering, data analytics, and enterprise demand-generation leadership.
            </p>
          </div>

          {/* Grid of team-member cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className={`p-4 bg-slate-900 border rounded-2xl transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 relative group ${
                  highlightPlaceholders ? "border-amber-500/30 hover:border-amber-500/50" : "border-slate-800"
                }`}
              >
                {highlightPlaceholders && (
                  <span className="absolute top-2 right-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] font-mono px-1 py-0.5 rounded z-10">
                    Editable Profile
                  </span>
                )}

                {/* Team Member Photo */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-brand-accent/20 to-slate-800 border border-slate-800/80 shadow-md relative select-none mb-4 group-hover:border-brand-accent/40 transition-colors duration-300">
                  {member.avatarUrl ? (
                    <img
                      src={member.avatarUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-black text-brand-accent text-2xl">
                      {member.initials}
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm font-extrabold text-white group-hover:text-brand-accent transition-colors truncate">{member.name}</h3>
                  <p className="text-xs text-brand-orange font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11: INDUSTRIES WE SERVE (QUICK BAND) */}
      <section id="industries" className="py-16 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Header */}
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">VERTICAL FOCUS</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Built for SaaS, tech, services, & industrials.
            </h2>
            <p className="text-xs md:text-sm text-brand-text-secondary">
              Select an industry below to see how our AI crawler optimization playbook adapts to your space.
            </p>
          </div>

          {/* Interactive Tag Selector Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all-300 cursor-pointer ${
                  selectedIndustry === ind.id
                    ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/25"
                    : "bg-slate-900 text-brand-text-secondary border border-slate-850 hover:border-slate-700 hover:text-white"
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Expanded sector details container */}
          <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-850 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-accent/5 rounded-full blur-xl"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-brand-orange" />
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    {INDUSTRIES.find(i => i.id === selectedIndustry)?.name} Playbook Strategy
                  </h4>
                </div>
                <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed font-light">
                  {INDUSTRIES.find(i => i.id === selectedIndustry)?.description} We construct tailored semantic clusters and index your technical specs directly to Google Search Console and OpenAI crawlers to lock in category recommendation share.
                </p>
                <div className="flex justify-between items-center pt-2 text-[10px] text-brand-text-muted font-mono">
                  <span>SITEONLAB LABS</span>
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="text-brand-accent hover:underline flex items-center gap-1 font-bold cursor-pointer"
                  >
                    Get Segment Playbook <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* SECTION 12: FINAL CTA */}
      <section id="final-cta" className="relative py-20 md:py-28 bg-brand-bg overflow-hidden border-b border-slate-900">
        {/* Background gradient banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/15 via-slate-950 to-brand-orange/15 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex p-3 rounded-full bg-slate-900 border border-slate-800 text-brand-accent">
            <Activity className="w-8 h-8 text-brand-accent animate-pulse" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Let's build your revenue engine.
          </h2>

          <p className="text-sm md:text-base text-brand-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
            Book a 30-minute intro call. We'll assess your search and AI presence, show you where the pipeline leaks are, and map a realistic growth trajectory — before you commit to anything.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-bold rounded-xl transition-all-300 shadow-xl shadow-brand-accent/20 cursor-pointer flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Book a Meeting
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsAssessmentOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-brand-text-secondary hover:text-white font-bold rounded-xl transition-all-300 cursor-pointer flex items-center justify-center gap-2 text-sm md:text-base"
            >
              Take the AI Visibility Assessment
              <Bot className="w-4 h-4 text-brand-orange" />
            </button>
          </div>
        </div>
      </section>


      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Assessment Modal */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

    </div>
  );
}

// Minimal helper component for target/bullseye icon
function TargetIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
