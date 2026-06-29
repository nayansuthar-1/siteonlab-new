"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Map, 
  Code2, 
  Share2, 
  FileText, 
  BarChart3, 
  Target, 
  Landmark, 
  Bot, 
  TrendingUp, 
  ShieldCheck, 
  Newspaper, 
  Cpu,
  ChevronDown, 
  ArrowRight, 
  Check, 
  CheckCircle2,
  Menu, 
  X, 
  HelpCircle, 
  Quote, 
  Award,
  Clock,
  PhoneCall,
  ExternalLink
} from 'lucide-react';

import { 
  trustMetrics, 
  serviceComponents, 
  processSteps, 
  differentiators, 
  caseStudies, 
  testimonial, 
  relatedServices, 
  faqItems 
} from './data';
import HeroGraphics from './components/HeroGraphics';
import BlueprintGenerator from './components/BlueprintGenerator';

// Map icon strings to Lucide icon components for safe, robust rendering
const IconMap: Record<string, React.ComponentType<any>> = {
  Sparkles,
  Map,
  Code2,
  Share2,
  FileText,
  BarChart3,
  Target,
  Landmark,
  Bot,
  TrendingUp,
  ShieldCheck,
  Newspaper,
  Cpu
};

export default function App() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalBlueprintOpen, setIsModalBlueprintOpen] = useState(false);
  const [modalGoal, setModalGoal] = useState('Increase Search Citations');

  const openBlueprintModal = (goal: string) => {
    setModalGoal(goal);
    setIsModalBlueprintOpen(true);
  };

  return (
    <div className="theme-aiseo min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none -z-20"></div>
      
      {/* Top absolute light glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none -z-20"></div>
      <div className="absolute top-[800px] right-10 w-[600px] h-[600px] rounded-full bg-blue-950/10 blur-[160px] pointer-events-none -z-20"></div>
      <div className="absolute bottom-[1200px] left-10 w-[600px] h-[600px] rounded-full bg-purple-950/10 blur-[180px] pointer-events-none -z-20"></div>

      {/* HEADER & NAVIGATION */}

      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 md:py-28" id="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Category Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono text-xs font-semibold tracking-wider text-blue-300 uppercase">
                  B2B SEO Agency | AI SEO & GEO Visibility Services
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-indigo-500">AI SEO & GEO</span> agency that drives <span className="underline decoration-blue-500/40">demos</span>, <span className="underline decoration-indigo-500/40">sales inquiries</span>, and <span className="underline decoration-emerald-500/40">qualified pipeline</span>.
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                HybridMonks helps B2B SaaS, technology, IT/MSP, and professional-services companies turn organic search and AI visibility into a measurable revenue channel. We help you rank for buyer-intent searches, get cited by AI engines, and convert visibility into qualified pipeline — measured by qualified pipeline, not vanity metrics.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  id="hero-primary-cta"
                  onClick={() => openBlueprintModal('Increase Search Citations')}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-500/10 cursor-pointer"
                >
                  <span>Request a Growth Blueprint</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </button>
                <a
                  href="#case-studies-section"
                  className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition"
                >
                  <span>See Case Studies</span>
                </a>
              </div>

              {/* Quick trust line */}
              <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-400" /> NO LOCKED-IN CONTRACTS
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-400" /> 100% PIPELINE TRANSPARENCY
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-blue-400" /> AI SEARCH CRAWLER AUDITED
                </span>
              </div>

            </div>

            {/* Hero Right Interactive Graphic */}
            <div className="lg:col-span-5">
              <HeroGraphics />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS SECTION */}
      <section className="border-y border-slate-900 bg-slate-950/60 py-12 relative" id="metrics-section">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/5 via-transparent to-blue-950/5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustMetrics.map((metric) => (
              <div key={metric.id} className="text-center md:text-left relative group">
                {/* Decorative border line on hover */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"></div>
                <div className="md:pl-6 space-y-1">
                  <span className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight block">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-300 block uppercase tracking-wider">
                    {metric.label}
                  </span>
                  <span className="text-xs text-slate-500 block font-mono">
                    {metric.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. SERVICE OVERVIEW SECTION */}
      <section className="py-20 md:py-28 relative" id="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-950/30 px-3 py-1 rounded border border-blue-900/40">
              AI SEO & GEO Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              AI SEO & GEO built for compounding B2B revenue growth.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Most agencies just write low-gain content or stuff arbitrary keywords. Our AI SEO and Generative Engine Optimization (GEO) builds a complete organic growth system that integrates <strong className="text-slate-200">LLM recommendations, conversational search intent, technical semantic code, and full-funnel attribution</strong> into a single compounding revenue channel.
            </p>
          </div>

          {/* Grid of 6 components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceComponents.map((comp) => {
              const CompIcon = IconMap[comp.icon] || Sparkles;
              return (
                <div 
                  key={comp.id} 
                  className="bg-slate-900/40 hover:bg-slate-900/80 border border-slate-900 hover:border-slate-800 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group relative"
                  id={`service-${comp.id}`}
                >
                  <div className="space-y-4">
                    {/* Icon container */}
                    <div className="h-11 w-11 rounded-lg bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-400 transition group-hover:bg-blue-500/10 group-hover:border-blue-500/30">
                      <CompIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-blue-300 transition">
                        {comp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                        {comp.description}
                      </p>
                    </div>
                  </div>

                  {/* Business impact indicator */}
                  <div className="mt-6 pt-4 border-t border-slate-950 flex items-start gap-2 text-xs text-slate-300 bg-slate-950/30 p-2.5 rounded border border-slate-900/50">
                    <Award className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-blue-400 font-mono text-[10px] block uppercase tracking-wider">BUSINESS IMPACT</strong>
                      {comp.businessImpact}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 relative" id="process-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-950/30 px-3 py-1 rounded border border-indigo-900/40">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              From search invisibility to organic authority in 90 days.
            </h2>
            <p className="text-slate-400 text-sm">
              We execute in disciplined, high-velocity sprints designed to build trust with buyers, Google, and conversational AI crawlers from week one.
            </p>
          </div>

          {/* Process Timeline Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            {/* Connector Line for Desktop */}
            <div className="absolute top-[34px] left-[15%] right-[15%] h-0.5 bg-slate-900 hidden md:block -z-10"></div>

            {processSteps.map((step, idx) => (
              <div 
                key={step.number} 
                className="bg-slate-900/30 border border-slate-900 rounded-xl p-5 relative flex flex-col justify-between group hover:border-slate-800 transition"
                id={`process-step-${step.number}`}
              >
                <div>
                  
                  {/* Step Header Block */}
                  <div className="flex items-center justify-between mb-4">
                    {/* Step Number Badge */}
                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 rounded">
                      Step {step.number}
                    </span>
                    
                    {/* Timeline Badge */}
                    <span className="font-mono text-[10px] text-slate-400 bg-slate-950 border border-slate-900 px-2 py-0.5 rounded flex items-center gap-1 font-semibold uppercase tracking-wider">
                      <Clock className="w-3 h-3 text-slate-500" /> {step.timeline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Sub-activities checklist */}
                <div className="border-t border-slate-950 pt-4 mt-4 space-y-2">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Key Activities</span>
                  <div className="space-y-1.5">
                    {step.activities.map((act, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-blue-400 shrink-0" />
                        <span className="truncate">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-20 md:py-28 bg-slate-950/40 border-t border-slate-900 relative" id="differentiators-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left pitch copy */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="font-mono text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-950/30 px-3 py-1 rounded border border-blue-900/40">
                Why Teams Pick Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight leading-tight">
                An AI SEO & GEO agency that connects LLM visibility to revenue.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Most agencies hand you monthly organic impressions reports, raw traffic clicks, and call it done. HybridMonks builds a full attribution measurement layer so you can see exactly how AI search and traditional SEO contribute across the buyer journey, from first touch to qualified opportunity in your CRM.
              </p>
              
              <div className="pt-4">
                <button 
                  id="why-blueprint-btn"
                  onClick={() => openBlueprintModal('Fix CRM Pipeline')}
                  className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 px-5 rounded-lg border border-slate-800 transition cursor-pointer"
                >
                  <span>Build custom tracking with us</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
              </div>
            </div>

            {/* Right 4 differentiator cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentiators.map((diff, index) => {
                const DiffIcon = IconMap[diff.icon] || Sparkles;
                return (
                  <div 
                    key={index} 
                    className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-900 hover:border-slate-800 rounded-xl p-5 transition flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="h-9 w-9 bg-blue-500/10 border border-blue-500/20 rounded flex items-center justify-center text-blue-400">
                          <DiffIcon className="w-4.5 h-4.5" />
                        </div>
                        
                        {/* Custom metric indicator */}
                        {diff.metricValue && (
                          <div className="text-right font-mono">
                            <span className="text-lg font-black text-blue-400 block leading-none">{diff.metricValue}</span>
                            <span className="text-[8px] text-slate-500 uppercase tracking-wider">{diff.metricLabel}</span>
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-white tracking-tight">
                          {diff.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                          {diff.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 6. CASE STUDIES SECTION (WITH INTERACTIVE SVG CHARTS) */}
      <section className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 relative" id="case-studies-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 text-left">
              <span className="font-mono text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-950/30 px-3 py-1 rounded border border-indigo-900/40">
                Case Studies & Results
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                GEO & AI SEO results we can put a number on.
              </h2>
            </div>
            
            <button
              id="case-blueprints-cta"
              onClick={() => openBlueprintModal('Dominate Google AI Overviews')}
              className="font-mono text-xs font-bold text-blue-400 hover:text-white flex items-center gap-1.5 bg-slate-900 py-2.5 px-4 rounded border border-slate-800 hover:border-slate-700 transition cursor-pointer"
            >
              <span>See all case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Case Studies Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Sidebar Tabs Selectors */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-start">
              {caseStudies.map((caseCard, idx) => (
                <button
                  id={`case-tab-${caseCard.id}`}
                  key={caseCard.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                    activeCaseIndex === idx 
                      ? 'bg-slate-900 border-blue-500/40 shadow-lg shadow-blue-500/5' 
                      : 'bg-slate-900/20 border-slate-900/80 hover:border-slate-800 hover:bg-slate-900/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded uppercase font-semibold">
                      {caseCard.industry}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {caseCard.timeline}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-tight mb-3 line-clamp-2">
                    {caseCard.headline}
                  </h3>
                  <div className="flex items-center justify-between border-t border-slate-950 pt-2 mt-1">
                    <span className="text-xs text-slate-400">Metrics yield</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">{caseCard.metric}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Display Active Case details with interactive SVG growth chart */}
            <div className="lg:col-span-8 bg-slate-900/40 border border-slate-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden" id="active-case-detail-card">
              
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                
                {/* Active Case Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/60 pb-5 mb-6">
                  <div>
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">{caseStudies[activeCaseIndex].industry} Case Study</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1 leading-tight">
                      {caseStudies[activeCaseIndex].headline}
                    </h2>
                  </div>
                  
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-850 flex flex-col items-end">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">Documented Lift</span>
                    <span className="text-xl font-black text-emerald-400 font-mono leading-none mt-1">
                      {caseStudies[activeCaseIndex].metric}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">Timeline: {caseStudies[activeCaseIndex].timeline}</span>
                  </div>
                </div>

                {/* Challenge & Solution details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-900">
                    <h4 className="text-xs font-mono font-bold uppercase text-rose-400 tracking-wider flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span> Corporate Challenge
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {caseStudies[activeCaseIndex].challenge}
                    </p>
                  </div>

                  <div className="space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-900">
                    <h4 className="text-xs font-mono font-bold uppercase text-blue-400 tracking-wider flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> HybridMonks Execution
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {caseStudies[activeCaseIndex].solution}
                    </p>
                  </div>
                </div>

                {/* Key results checkboxes */}
                <div className="space-y-3 mb-6">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">VERIFIED METRIC BREAKDOWNS</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {caseStudies[activeCaseIndex].resultDetails.map((detail, i) => (
                      <div key={i} className="bg-slate-950/30 p-2.5 rounded-lg border border-slate-850 flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compound Growth chart drawing (SVG interactive visual) */}
                <div className="space-y-2 border-t border-slate-800/40 pt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">COMPOUND GROWTH CHRONOLOGY</span>
                      <span className="text-xs font-semibold text-slate-300 block">Organic Search Traffic vs. AI Citation Share Index</span>
                    </div>
                    
                    <div className="flex gap-4 text-[10px] font-mono">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span className="h-2 w-2 rounded-full bg-slate-600"></span> Organic Clicks
                      </div>
                      <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                        <span className="h-2 w-2 rounded-full bg-blue-400"></span> AI Citations Share
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="w-full bg-slate-950/90 rounded-xl p-4 border border-slate-900 relative">
                    <svg viewBox="0 0 500 150" className="w-full h-28 overflow-visible">
                      <defs>
                        <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Grid Lines */}
                      <line x1="0" y1="20" x2="500" y2="20" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4 4" />
                      <line x1="0" y1="65" x2="500" y2="65" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4 4" />
                      <line x1="0" y1="110" x2="500" y2="110" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="4 4" />
                      
                      {/* Plot organic curve (gray line) */}
                      <path
                        d={caseStudies[activeCaseIndex].mockChartData.reduce((acc, point, i, arr) => {
                          const x = (i / (arr.length - 1)) * 500;
                          const y = 140 - (point.organic / 550) * 120;
                          return acc + `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }, '')}
                        fill="none"
                        stroke="#475569"
                        strokeWidth="1.5"
                      />

                      {/* Plot AI citation area block */}
                      <path
                        d={caseStudies[activeCaseIndex].mockChartData.reduce((acc, point, i, arr) => {
                          const x = (i / (arr.length - 1)) * 500;
                          const y = 140 - (point.aiCitations / 550) * 120;
                          return acc + `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }, '') + ` L 500 140 L 0 140 Z`}
                        fill="url(#chartGlow)"
                      />

                      {/* Plot AI citation curve (teal line) */}
                      <path
                        d={caseStudies[activeCaseIndex].mockChartData.reduce((acc, point, i, arr) => {
                          const x = (i / (arr.length - 1)) * 500;
                          const y = 140 - (point.aiCitations / 550) * 120;
                          return acc + `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                        }, '')}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2.5"
                      />

                      {/* Plot interactive nodes and labels */}
                      {caseStudies[activeCaseIndex].mockChartData.map((point, i, arr) => {
                        const x = (i / (arr.length - 1)) * 500;
                        const yVal = 140 - (point.aiCitations / 550) * 120;
                        const labelStep = Math.ceil(arr.length / 4);
                        if (i % labelStep === 0 || i === arr.length - 1) {
                          return (
                            <g key={i}>
                              <circle cx={x} cy={yVal} r="3" fill="#3b82f6" />
                              <text x={x} y="148" fill="#475569" fontSize="8" textAnchor="middle" fontFamily="monospace">
                                {point.month}
                              </text>
                            </g>
                          );
                        }
                        return null;
                      })}
                    </svg>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section className="py-20 md:py-24 bg-slate-950 border-t border-slate-900 relative" id="testimonial-section">
        <div className="absolute inset-0 bg-radial-glow opacity-5 -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="space-y-6">
            
            {/* Quote Icon */}
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mb-2">
              <Quote className="w-6 h-6" />
            </div>

            {/* Quote Block */}
            <blockquote className="text-xl sm:text-2xl font-medium text-slate-100 font-display leading-relaxed">
              "{testimonial.quote}"
            </blockquote>

            {/* Author details */}
            <div className="pt-4 border-t border-slate-900 max-w-sm mx-auto">
              <div className="font-display font-bold text-white text-base">
                {testimonial.author}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {testimonial.title}, <span className="text-blue-400 font-semibold">{testimonial.companyType}</span>
              </div>
              
              {/* Proof badges inside testimonial */}
              <div className="mt-4 flex items-center justify-center gap-3 bg-slate-900/60 p-2 rounded-lg border border-slate-850 max-w-[280px] mx-auto text-[10px] font-mono">
                <span className="text-emerald-400 font-bold uppercase">{testimonial.metric}</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 uppercase">Timeline: {testimonial.timeline}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. RELATED SERVICES SECTION */}
      <section className="py-20 md:py-24 bg-slate-950 border-t border-slate-900 relative animate-fade-in" id="related-services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-950/30 px-3 py-1 rounded border border-blue-900/40">
              Related Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              AI SEO performs better alongside these services.
            </h2>
            <p className="text-slate-400 text-sm">
              True business growth requires an integrated marketing and attribution system. Here is how we complete your customer acquisition ecosystem.
            </p>
          </div>

          {/* Grid list of related services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, index) => {
              const ServiceIcon = IconMap[service.icon] || Sparkles;
              return (
                <div 
                  key={index} 
                  className="bg-slate-900/30 border border-slate-900 hover:border-slate-800 rounded-xl p-6 transition flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="h-10 w-10 bg-indigo-500/10 border border-indigo-500/20 rounded flex items-center justify-center text-indigo-400">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight group-hover:text-blue-300 transition">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-950 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>STRATEGIC KPI</span>
                    <span className="text-blue-400 font-bold">{service.primaryMetric}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 relative" id="faq-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-950/30 px-3 py-1 rounded border border-indigo-900/40">
              FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Frequently asked questions about AI SEO & GEO.
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Clear answers to tactical and strategic queries on Generative Engine Optimization.
            </p>
          </div>

          {/* Expandable Accordion list */}
          <div className="space-y-3" id="faq-accordion-group">
            {faqItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 border border-slate-900 hover:border-slate-800 rounded-xl overflow-hidden transition"
              >
                <button
                  id={`faq-trigger-${idx}`}
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-semibold text-sm sm:text-base text-white hover:text-blue-300 transition"
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ml-4 ${
                      openFaqIndex === idx ? 'transform rotate-180 text-blue-400' : ''
                    }`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {openFaqIndex === idx && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-950/40">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. FINAL CTA SECTION (WITH EMBEDDED DIAGNOSTIC BUILDER) */}
      <section className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 relative" id="contact-section">
        
        {/* Subtle background graphics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left pitch CTA text */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="font-mono text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-950/30 px-3.5 py-1.5 rounded-full border border-blue-900/40">
                Let's secure your organic channel
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                Let's make organic search your most efficient growth channel.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Book a 30-minute strategy call. We will review your current search and LLM visibility performance, identify opportunities your competitors are completely missing, and show you exactly what it would take to turn organic search into qualified CRM pipeline.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Complimentary 2-week LLM citation diagnostic analysis included.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Detailed topic cluster layout customized for your top competitor.</span>
                </div>
              </div>

              {/* Contact Info Box */}
              <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-850 flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">DIRECT EMAIL CONDUIT</span>
                    <a href="mailto:hitesh@hybridmonks.com" className="text-xs font-semibold text-white hover:text-blue-400 transition">
                      hitesh@hybridmonks.com
                    </a>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-850 flex items-center gap-3">
                  <div className="h-10 w-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">SECURE CHAT PROTOCOL</span>
                    <span className="text-xs font-semibold text-white">
                      Active SLA Response &lt; 2h
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Static Form / Diagnostic Embed */}
            <div className="lg:col-span-7">
              <div className="bg-slate-900/40 p-1.5 rounded-2xl border border-slate-900 shadow-xl">
                <BlueprintGenerator initialGoal="Dominate Google AI Overviews" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}

      {/* MODAL LIGHTBOX OVERLAY FOR GROWTH BLUEPRINT GENERATOR */}
      <AnimatePresence>
        {isModalBlueprintOpen && (
          <motion.div 
            id="blueprint-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div 
              id="blueprint-modal-content"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl"
            >
              <BlueprintGenerator 
                initialGoal={modalGoal} 
                onClose={() => setIsModalBlueprintOpen(false)} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
