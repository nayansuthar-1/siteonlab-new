"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Coins,
  Users,
  Target,
  DollarSign,
  ArrowUpRight,
  Activity,
  Award,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  FileText,
  Search,
  ExternalLink,
  MessageSquare,
  Globe,
  Plus,
  Mail,
} from "lucide-react";

import {
  SERVICE_EYEBROW,
  SERVICE_NAME,
  SEO_TITLE,
  SEO_META,
  HERO_H1,
  HERO_SUBHEADING,
  TRUST_METRICS,
  SERVICE_OVERVIEW_H2,
  SERVICE_OVERVIEW_PARA,
  SERVICE_COMPONENTS,
  PROCESS_STEPS,
  WHY_CHOOSE_US_PARA,
  DIFFERENTIATORS,
  CASE_STUDIES,
  TESTIMONIAL,
  RELATED_SERVICES,
  FAQS,
} from "./data";

import HeroPaidMediaDashboard from "./components/HeroPaidMediaDashboard";
import BlueprintModal from "./components/BlueprintModal";
import AssessmentModal from "./components/AssessmentModal";

export default function App() {
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [activeFaqId, setActiveFaqId] = useState<string | null>("faq-1");
  const [scrolled, setScrolled] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);
  const [activeComponentId, setActiveComponentId] = useState<string>("comp-1");

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (id: string) => {
    if (activeFaqId === id) {
      setActiveFaqId(null);
    } else {
      setActiveFaqId(id);
    }
  };

  const handleCaseStudyClick = () => {
    setIsBlueprintOpen(true);
  };

  return (
    <div className="theme-paidmedia min-h-screen bg-[#0A0A0A] text-zinc-100 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Background Decorative Gradients - editorial & minimalist */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-zinc-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-[12%] left-[-5%] w-[450px] h-[450px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[45%] right-[-5%] w-[500px] h-[500px] bg-zinc-800/[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* STICKY EDITORIAL HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md border-zinc-800/80 py-3.5 shadow-lg"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Coins className="h-4.5 w-4.5 text-blue-500 stroke-[2]" />
            </div>
            <div>
              <span className="font-display font-medium text-sm text-white tracking-widest uppercase">
                SiteOn<span className="text-blue-500">Lab</span>
              </span>
              <span className="text-[9px] font-mono text-zinc-500 block leading-none uppercase tracking-wider">Paid Media</span>
            </div>
          </div>

          {/* Desktop Navigation links - elegant editorial serif hover */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] text-zinc-400 font-mono uppercase tracking-widest">
            <a href="#overview" className="hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-blue-400 transition-colors">
              Our Process
            </a>
            <a href="#why-choose-us" className="hover:text-blue-400 transition-colors">
              Why Us
            </a>
            <a href="#case-studies" className="hover:text-blue-400 transition-colors">
              Results
            </a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">
              FAQs
            </a>
          </nav>

          {/* Header Action Button - flat, sharp border */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBlueprintOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded-none transition-all duration-200 border border-blue-500 hover:border-blue-400 cursor-pointer"
            >
              Get Blueprint
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION (Editorial format: Display font, Serif accents, side-by-side) */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-none px-3 py-1.5 text-[10px] text-zinc-400">
                <Sparkles className="h-3 w-3 text-blue-400" />
                <span className="font-mono font-medium uppercase tracking-widest">
                  {SERVICE_EYEBROW}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light text-white tracking-tight leading-[1.15]">
                The Paid Media agency that drives{" "}
                <span className="font-serif italic font-normal text-blue-400">demos</span>,{" "}
                <span className="font-serif italic font-normal text-zinc-400">sales inquiries</span>, and{" "}
                <span className="font-serif italic font-normal text-blue-500">qualified pipeline</span>.
              </h1>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl font-sans">
                {HERO_SUBHEADING}
              </p>

              {/* CTAs - sharp, high contrast */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setIsBlueprintOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] font-bold px-6 py-3 rounded-none tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-blue-500"
                >
                  Request a Growth Blueprint
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a
                  href="#case-studies"
                  className="bg-zinc-900/60 hover:bg-zinc-900 text-zinc-300 hover:text-white font-mono text-[11px] font-bold px-6 py-3 rounded-none tracking-widest uppercase transition-all duration-200 border border-zinc-800 flex items-center justify-center gap-2"
                >
                  See Case Studies
                </a>
              </div>

              {/* Tag checklist */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> No Vanity Lead metrics
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> CRM Closed-Loop Sync
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-blue-500" /> B2B ICP Match Guarantee
                </span>
              </div>
            </div>

            {/* Right side Graphics (Interactive Simulator/Dashboard) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1.5 bg-zinc-800/20 rounded-none blur-lg opacity-40 pointer-events-none" />
              <div className="relative border border-zinc-800">
                <HeroPaidMediaDashboard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS SECTION */}
      <section className="bg-black py-10 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y-0 divide-x-0 lg:divide-x lg:divide-zinc-900">
            {TRUST_METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col justify-center p-3 lg:px-6 text-center lg:text-left space-y-1">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight flex items-baseline justify-center lg:justify-start gap-0.5">
                  <span className="text-blue-400">{metric.value.split(" ")[0]}</span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider ml-1">
                    {metric.value.split(" ").slice(1).join(" ")}
                  </span>
                </div>
                <div className="text-xs font-bold text-zinc-200 tracking-tight leading-snug font-sans uppercase">
                  {metric.label}
                </div>
                <div className="text-[10px] font-mono text-zinc-500 lowercase">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICE OVERVIEW SECTION */}
      <section id="overview" className="py-20 lg:py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto pb-12 lg:pb-16">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
              {SERVICE_NAME} Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-white tracking-tight uppercase">
              {SERVICE_OVERVIEW_H2}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {SERVICE_OVERVIEW_PARA}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Component selector - left (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block px-1">Choose Core Pillars</span>
              {SERVICE_COMPONENTS.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setActiveComponentId(comp.id)}
                  className={`w-full text-left p-4 rounded-none transition-all duration-200 border flex flex-col gap-1 cursor-pointer ${
                    activeComponentId === comp.id
                      ? "bg-zinc-900 border-zinc-700 shadow-md"
                      : "bg-[#0E0E0E]/40 border-zinc-900/50 hover:bg-zinc-900/30 hover:border-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                      activeComponentId === comp.id ? "text-blue-400" : "text-white"
                    }`}>
                      {comp.title}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider">SiteOnLab Optimized</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Component Detail View - right (7 cols) */}
            <div className="lg:col-span-7 bg-[#0F0F0F] rounded-none border border-zinc-800 p-6 sm:p-8 space-y-6">
              {(() => {
                const activeComp = SERVICE_COMPONENTS.find((c) => c.id === activeComponentId)!;
                return (
                  <>
                    <div className="space-y-3">
                      <div className="inline-flex items-center gap-1.5 bg-blue-950/40 text-blue-400 px-2.5 py-0.5 rounded-none text-[9px] font-mono uppercase tracking-widest border border-blue-500/10">
                        <Activity className="h-3 w-3" />
                        Pillar Strategy
                      </div>
                      <h3 className="text-lg font-display font-bold text-white tracking-tight uppercase">
                        {activeComp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                        {activeComp.description}
                      </p>
                    </div>

                    <div className="space-y-3.5 border-t border-zinc-800/60 pt-5">
                      <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                        How We Execute This Component:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {activeComp.bulletPoints.map((bp, bpIdx) => (
                          <div key={bpIdx} className="bg-black border border-zinc-900 p-3 rounded-none flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                            <span className="text-xs text-zinc-400 font-sans">{bp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] font-mono uppercase text-zinc-500">
                      <span>100% Client Managed & Controlled</span>
                      <button
                        onClick={() => setIsBlueprintOpen(true)}
                        className="text-blue-400 font-bold hover:text-blue-300 flex items-center gap-1 transition-colors uppercase tracking-wider"
                      >
                        Request Diagnostic for this Service <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section id="process" className="py-20 lg:py-24 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto pb-12 lg:pb-16">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-white tracking-tight uppercase">
              From spend leakage to profitable pipeline in 4 steps.
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              Our structured approach replaces chaotic trial-and-error campaign launches with a predictable, pipeline-first transition framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0F0F0F] border border-zinc-800/80 rounded-none p-5 relative overflow-hidden flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300"
              >
                {/* Visual Step number background */}
                <div className="absolute top-2 right-2 text-6xl font-mono font-bold text-zinc-900/30 pointer-events-none group-hover:text-blue-500/5 transition-colors">
                  {step.step}
                </div>

                <div className="space-y-3 relative z-10">
                  <div className="h-8 w-8 bg-black rounded-none flex items-center justify-center border border-zinc-800">
                    <span className="text-xs font-mono font-bold text-blue-400">{step.step}</span>
                  </div>
                  <h3 className="text-xs font-bold text-white tracking-widest uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider relative z-10">
                  <span className="text-zinc-500">Timeline:</span>
                  <span className="text-blue-400 font-bold">{step.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 lg:py-24 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left intro text (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
                Why Teams Pick Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-white tracking-tight leading-tight uppercase">
                A {SERVICE_NAME} agency that connects performance to revenue.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                {WHY_CHOOSE_US_PARA}
              </p>

              {/* Small accent quote block - serif styling */}
              <div className="bg-[#0F0F0F] border-l border-blue-500 p-4 rounded-none space-y-1.5 text-xs text-zinc-300">
                <p className="font-serif italic text-zinc-400">"We fired our previous agency because they kept boasting about high CTR, but our sales floor had empty calendars. SiteOnLab completely changed our pipeline trajectory."</p>
                <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider">— Founder, Enterprise Cybersecurity Firm</p>
              </div>
            </div>

            {/* Right differentiators cards (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {DIFFERENTIATORS.map((diff) => (
                <div
                  key={diff.id}
                  className="bg-[#0F0F0F] border border-zinc-800 p-5 space-y-2 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between rounded-none"
                >
                  <div className="space-y-1.5">
                    <div className="inline-block bg-blue-950/30 text-blue-400 font-mono text-[9px] px-2 py-0.5 rounded-none font-bold uppercase border border-blue-500/10">
                      {diff.benefit}
                    </div>
                    <h3 className="text-xs font-bold text-white tracking-widest uppercase">
                      {diff.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                      {diff.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section id="case-studies" className="py-20 lg:py-24 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 lg:pb-16">
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
                Case Studies & Results
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-white tracking-tight uppercase">
                {SERVICE_NAME} results we can put a number on.
              </h2>
            </div>
            <button
              onClick={handleCaseStudyClick}
              className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold hover:text-blue-300 transition-colors whitespace-nowrap group shrink-0"
            >
              Request Custom Audit Model <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="bg-[#0F0F0F] border border-zinc-800 rounded-none p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 relative group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    <span>{cs.industry}</span>
                    <span className="text-blue-400">{cs.timeline}</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider">{cs.subCategory}</span>
                    <h3 className="text-sm font-bold text-white tracking-widest uppercase group-hover:text-blue-400 transition-colors">
                      {cs.headline}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {cs.shortCopy}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[9px] font-mono bg-black text-zinc-500 px-1.5 py-0.5 rounded-none border border-zinc-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono uppercase text-zinc-500 tracking-wider block">Verified Result</span>
                    <span className="text-base font-mono font-bold text-blue-400">
                      {cs.metric}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsBlueprintOpen(true)}
                    className="h-8 w-8 bg-black group-hover:bg-blue-600 text-zinc-500 group-hover:text-white rounded-none flex items-center justify-center border border-zinc-800 group-hover:border-blue-500 transition-all duration-300 cursor-pointer"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section className="py-20 border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0F0F0F] border border-zinc-800 p-8 sm:p-10 rounded-none text-center space-y-6 overflow-hidden">
            <div className="absolute top-4 left-6 text-7xl font-serif text-zinc-800/15 select-none font-normal">“</div>

            <p className="text-sm sm:text-base text-zinc-300 italic font-serif leading-relaxed max-w-3xl mx-auto relative z-10 font-normal">
              {TESTIMONIAL.quote}
            </p>

            <div className="space-y-1 relative z-10">
              <h4 className="text-xs font-mono uppercase tracking-widest font-bold text-white">{TESTIMONIAL.author}</h4>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{TESTIMONIAL.title}</p>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-blue-950/40 text-blue-400 px-3 py-1 rounded-none text-[9px] font-mono font-bold uppercase tracking-widest border border-blue-500/10">
              <span>{TESTIMONIAL.metric}</span>
              <span className="text-zinc-700">•</span>
              <span>{TESTIMONIAL.timeline}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RELATED SERVICES SECTION */}
      <section id="related-services" className="py-20 lg:py-24 bg-black border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto pb-12 lg:pb-16">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
              Related Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-white tracking-tight uppercase">
              Paid Media performs better alongside these services.
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              Cross-channel synergy. Combine your search and social ad tactics with conversion optimization and authority signals to maximize cost efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RELATED_SERVICES.map((rel) => (
              <div
                key={rel.id}
                className="bg-[#0F0F0F] border border-zinc-800 rounded-none p-5 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300"
              >
                <div className="space-y-2">
                  <span className="text-[9px] font-mono bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded-none font-bold uppercase inline-block border border-zinc-800">
                    Synergy Asset
                  </span>
                  <h3 className="text-xs font-bold text-white tracking-widest uppercase">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {rel.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider">
                  <span className="text-zinc-500">Performance Impact:</span>
                  <span className="text-blue-400 font-bold">{rel.primaryMetric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (Accordion) */}
      <section id="faq" className="py-20 lg:py-24 border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-2xl mx-auto pb-12">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-white tracking-tight uppercase">
              Frequently asked questions about Paid Media.
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              Clear answers to tactical and strategic queries regarding budgets, measurement, and onboarding timelines.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq) => (
              <div
                key={faq.id}
                className="bg-[#0F0F0F] border border-zinc-850 rounded-none overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-white hover:text-blue-400 transition-colors cursor-pointer uppercase tracking-wider font-mono"
                >
                  <span>{faq.question}</span>
                  {activeFaqId === faq.id ? (
                    <ChevronUp className="h-4 w-4 text-blue-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                {activeFaqId === faq.id && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs text-zinc-400 leading-relaxed border-t border-zinc-900 font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION (Immersive Banner) */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-black border-b border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light text-white tracking-tight max-w-2xl mx-auto uppercase">
            Let’s make Paid Media your most efficient growth channel.
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl mx-auto font-sans">
            Book a 30-minute strategy call. We’ll review your current Paid Media performance, identify opportunities your competitors are missing, and show you what it would take to turn Paid Media into qualified pipeline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setIsBlueprintOpen(true)}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-mono text-[11px] font-bold px-7 py-3.5 rounded-none tracking-widest uppercase transition-all duration-200 border border-blue-500 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Request a Growth Blueprint
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsAssessmentOpen(true)}
              className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white font-mono text-[11px] font-bold px-7 py-3.5 rounded-none tracking-widest uppercase transition-all duration-200 border border-zinc-800 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Take the Paid Media ROI Assessment
            </button>
          </div>

          <div className="pt-8 text-[10px] font-mono text-zinc-500 flex justify-center items-center gap-5 uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4 w-4 text-blue-500" /> Secure SSL Encryption
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Award className="h-4 w-4 text-blue-500" /> GDPR & Privacy Compliant
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-zinc-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <Coins className="h-4.5 w-4.5 text-blue-500 stroke-[2]" />
              </div>
              <span className="font-display font-medium text-sm text-white tracking-widest uppercase">
                SiteOn<span className="text-blue-500">Lab</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm font-sans">
              Connecting search & social campaign architectures to downstream revenue. We eliminate vanity spend waste and drive predictable sales meetings.
            </p>
            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">
              © 2026 SiteOnLab Corp. All rights reserved.
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
            <div className="space-y-3">
              <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Navigation</h5>
              <ul className="space-y-2 text-xs text-zinc-500 font-sans">
                <li><a href="#overview" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-blue-400 transition-colors">Process Roadmap</a></li>
                <li><a href="#why-choose-us" className="hover:text-blue-400 transition-colors">Why Teams Pick Us</a></li>
                <li><a href="#case-studies" className="hover:text-blue-400 transition-colors">Case Metrics</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Contact</h5>
              <ul className="space-y-2 text-xs text-zinc-500 font-sans">
                <li className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" /> +1 (888) 555-0192</li>
                <li className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> grow@siteonlab.com</li>
                <li className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> siteonlab.com/paid-media</li>
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h5 className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-bold">Interactive Utilities</h5>
              <div className="space-y-2">
                <button
                  onClick={() => setIsBlueprintOpen(true)}
                  className="w-full text-left bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 text-xs px-3 py-1.5 rounded-none text-zinc-400 hover:text-white transition-colors cursor-pointer uppercase tracking-widest font-mono text-[9px]"
                >
                  Growth Audit Form
                </button>
                <button
                  onClick={() => setIsAssessmentOpen(true)}
                  className="w-full text-left bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 text-xs px-3 py-1.5 rounded-none text-zinc-400 hover:text-white transition-colors cursor-pointer uppercase tracking-widest font-mono text-[9px]"
                >
                  Funnel Scorecard
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING SEO INSPECTOR */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setIsSeoOpen(!isSeoOpen)}
          className="bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-blue-400 border border-zinc-800 px-3 py-1.5 rounded-none text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-xl transition-all cursor-pointer"
        >
          <Search className="h-3.5 w-3.5 text-blue-400" />
          {isSeoOpen ? "Close SEO Auditor" : "Review Page SEO Fields"}
        </button>

        {isSeoOpen && (
          <div className="absolute bottom-10 left-0 w-80 bg-[#0F0F0F] border border-zinc-800 rounded-none p-4 shadow-2xl text-left space-y-3 font-sans text-xs animate-in slide-in-from-bottom-2 duration-200">
            <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
              <span className="font-mono text-[9px] uppercase font-bold text-blue-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> SEO Audit Checklist
              </span>
              <span className="text-[9px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded-none border border-blue-500/10 font-mono font-bold">100% Passed</span>
            </div>

            <div className="space-y-2.5">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block">Title Tag:</span>
                <p className="text-white font-medium bg-black p-1.5 rounded-none border border-zinc-900 leading-relaxed font-sans">
                  {SEO_TITLE}
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block">Meta Description:</span>
                <p className="text-zinc-300 leading-relaxed bg-black p-1.5 rounded-none border border-zinc-900 text-[11px] font-sans">
                  {SEO_META}
                </p>
              </div>

              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-zinc-500 uppercase block">H1 Target Element:</span>
                <p className="text-zinc-300 leading-relaxed bg-black p-1.5 rounded-none border border-zinc-900 text-[11px] font-sans">
                  {HERO_H1}
                </p>
              </div>
            </div>

            <div className="bg-black p-2 rounded-none border border-zinc-900 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              * Page complies with B2B pipeline requirements!
            </div>
          </div>
        )}
      </div>

      {/* POPUP MODALS */}
      <BlueprintModal isOpen={isBlueprintOpen} onClose={() => setIsBlueprintOpen(false)} />
      <AssessmentModal isOpen={isAssessmentOpen} onClose={() => setIsAssessmentOpen(false)} />
    </div>
  );
}
