"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Target, 
  MailOpen, 
  Layers, 
  GitMerge, 
  Cpu, 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Eye, 
  X, 
  HelpCircle,
  Database,
  Lock,
  Slack,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Shared data imports
import { 
  serviceComponents, 
  processSteps, 
  whyUsItems, 
  caseStudies, 
  relatedServices, 
  faqs 
} from './data';

// Subcomponents
import AutomationEngine from './components/AutomationEngine';
import BlueprintModal from './components/BlueprintModal';
import AssessmentModal from './components/AssessmentModal';

export default function App() {
  // Modal toggle states
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  
  // Interactive Section states
  const [activeFAQIndex, setActiveFAQIndex] = useState<number | null>(null);
  const [hoveredComponent, setHoveredComponent] = useState<number | null>(null);
  const [expandedProcessStep, setExpandedProcessStep] = useState<number>(0);
  const [seoPanelOpen, setSeoPanelOpen] = useState(false);

  // Helper to resolve icon components dynamically
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5 text-blue-400" />;
      case 'MailOpen': return <MailOpen className="w-5 h-5 text-blue-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'GitMerge': return <GitMerge className="w-5 h-5 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-blue-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-blue-400" />;
      default: return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="theme-marketingauto min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* SECTION 0: SEO Tag & Meta Verification Badge/Bar */}
      <div className="relative bg-zinc-950 border-b border-zinc-900 z-40">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center space-x-2">
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-zinc-400">SEO Meta-Tags Verified</span>
          </div>
          <button 
            id="btn-toggle-seo"
            onClick={() => setSeoPanelOpen(!seoPanelOpen)}
            className="flex items-center space-x-1.5 text-blue-400 hover:text-blue-300 transition-colors cursor-pointer font-bold"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{seoPanelOpen ? "Hide Technical SEO Data" : "Inspect Technical SEO Data"}</span>
            <ChevronDown className={`w-3 h-3 transform transition-transform ${seoPanelOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <AnimatePresence>
          {seoPanelOpen && (
            <motion.div 
              id="seo-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-zinc-900 border-t border-zinc-800 px-4 py-4 overflow-hidden"
            >
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-[10px] text-blue-400 block mb-1 font-bold">TITLE TAG</span>
                  <p className="text-zinc-200">Marketing Automation Agency for B2B Pipeline Growth | HybridMonks</p>
                </div>
                <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-[10px] text-blue-400 block mb-1 font-bold">META DESCRIPTION</span>
                  <p className="text-zinc-300 leading-normal">
                    HybridMonks helps B2B SaaS and technology companies use marketing automation to drive qualified pipeline, improve velocity, and connect marketing performance to revenue.
                  </p>
                </div>
                <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                  <span className="text-[10px] text-blue-400 block mb-1 font-bold">PRIMARY H1 HEADER</span>
                  <p className="text-zinc-200">
                    The Marketing Automation agency that drives qualified leads, sales velocity, and predictable revenue.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* TOP NAVBAR BRAND BAR */}

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-10 pb-16 md:py-24 overflow-hidden border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold">
                  B2B Revenue Operations | Marketing Automation
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white leading-tight">
                The Marketing Automation agency that drives <span className="text-blue-500">qualified leads</span>, <span className="text-zinc-400">sales velocity</span>, and <span className="text-blue-400">predictable revenue</span>.
              </h1>
              
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light">
                HybridMonks helps B2B SaaS, technology, IT/MSP, and professional-services companies turn marketing automation into a measurable revenue channel. We help you nurture cold prospects, speed up sales cycles, and convert engagement into qualified pipeline — measured by qualified pipeline, not vanity metrics.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  id="hero-primary-cta"
                  onClick={() => setIsBlueprintOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3 px-6 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-lg shadow-blue-600/10"
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span>Request a Growth Blueprint</span>
                </button>
                <button
                  id="hero-secondary-cta"
                  onClick={() => handleScrollTo('case-studies')}
                  className="border border-zinc-800 bg-zinc-950/40 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-300 font-bold py-3 px-6 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  <span>See Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Related Graphics Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <AutomationEngine />
            </div>

          </div>
        </div>

        {/* Ambient lighting meshes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 2. TRUST METRICS SECTION */}
      <section id="trust-metrics" className="bg-zinc-950 border-b border-zinc-900/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            
            <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-900 hover:border-blue-500/25 transition-all group">
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">ROI PROOF</span>
              <p className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1 group-hover:text-blue-400 transition-colors">300% average</p>
              <span className="text-xs text-zinc-400 block mt-0.5">program ROI</span>
            </div>

            <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-900 hover:border-blue-500/25 transition-all group">
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">SPEED PROOF</span>
              <p className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1 group-hover:text-blue-400 transition-colors">90 days</p>
              <span className="text-xs text-zinc-400 block mt-0.5">to first lead movement</span>
            </div>

            <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-900 hover:border-blue-500/25 transition-all group">
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">SATISFACTION PROOF</span>
              <p className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1 group-hover:text-blue-400 transition-colors">NPS 74</p>
              <span className="text-xs text-zinc-400 block mt-0.5">client satisfaction</span>
            </div>

            <div className="bg-zinc-900/40 p-4 rounded-xl border border-zinc-900 hover:border-blue-500/25 transition-all group">
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">EXPERIENCE PROOF</span>
              <p className="text-xl sm:text-2xl font-display font-extrabold text-white mt-1 group-hover:text-blue-400 transition-colors font-sans">50+ verticals</p>
              <span className="text-xs text-zinc-400 block mt-0.5">B2B markets ranked</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICE OVERVIEW SECTION */}
      <section id="services" className="py-16 md:py-24 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold block">
              Marketing Automation Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Marketing Automation built for compounding B2B revenue growth.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">
              Most agencies just blast emails to everyone and call it a day. Our marketing automation builds a complete growth system that combines CRM integration, behavioral nurturing, intelligent lead scoring, and automated sales handoffs into one seamless revenue engine designed to earn trust and speed up the buyer journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceComponents.map((component, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredComponent(idx)}
                onMouseLeave={() => setHoveredComponent(null)}
                className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-900 hover:border-zinc-800 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800/80 group-hover:border-blue-500/30">
                    {renderIcon(component.iconName)}
                  </div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">{component.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">{component.description}</p>
                
                {/* Micro accent line */}
                <div 
                  className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ${
                    hoveredComponent === idx ? 'w-full' : 'w-0'
                  }`} 
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section id="process" className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold block">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              From disconnected tools to automated pipeline in 30 days.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Steps Navigation Track (Left Column) */}
            <div className="lg:col-span-5 space-y-3">
              {processSteps.map((step, idx) => {
                const isActive = expandedProcessStep === idx;
                return (
                  <button
                    key={idx}
                    id={`btn-process-step-${idx}`}
                    onClick={() => setExpandedProcessStep(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      isActive 
                        ? 'bg-zinc-900 border-blue-500 text-white shadow-lg' 
                        : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-zinc-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3.5">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        isActive ? 'bg-blue-600/20 text-blue-400' : 'bg-zinc-900 text-zinc-500'
                      }`}>
                        {step.step}
                      </span>
                      <span className="text-xs font-semibold">{step.title}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">{step.timeline}</span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Step Deliverables View (Right Column) */}
            <div className="lg:col-span-7 bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-xl relative min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={expandedProcessStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="text-xs text-blue-400 font-mono font-bold tracking-wide">
                      {processSteps[expandedProcessStep].step} · Sprint Deliverables
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-full border border-zinc-800/50">
                      Duration: {processSteps[expandedProcessStep].timeline}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-extrabold text-white">
                    {processSteps[expandedProcessStep].title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {processSteps[expandedProcessStep].description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block mb-2">Key Accomplishments:</span>
                    <div className="space-y-2">
                      {processSteps[expandedProcessStep].deliverables.map((item, i) => (
                        <div key={i} className="flex items-start space-x-2.5">
                          <div className="w-4 h-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs text-zinc-300 font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-16 md:py-24 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left intro text panel */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold block">
                Why Teams Pick Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">
                A marketing automation agency that connects campaign activity to revenue.
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Most agencies hand you open-rate reports and call it done. HybridMonks builds a full measurement layer so you can see how marketing automation contributes across the buyer journey, from first touch to qualified opportunity.
              </p>
              <div className="pt-2">
                <button
                  id="why-choose-us-cta"
                  onClick={() => setIsAssessmentOpen(true)}
                  className="bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 hover:text-blue-200 border border-blue-500/20 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Check Your Tech Maturity Score</span>
                </button>
              </div>
            </div>

            {/* Right 4 cards grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUsItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-zinc-900/30 p-5 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-colors"
                >
                  <div className="p-2 bg-zinc-950 rounded-lg w-max border border-zinc-850 mb-3 text-blue-500">
                    {renderIcon(item.iconName)}
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1.5 tracking-tight">{item.title}</h3>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section id="case-studies" className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 space-y-4 sm:space-y-0">
            <div className="max-w-2xl space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold block">
                Case Studies & Results
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Marketing automation results we can put a number on.
              </h2>
            </div>
            <button
              id="case-studies-header-cta"
              onClick={() => setIsBlueprintOpen(true)}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-1 cursor-pointer h-max group"
            >
              <span>See all case studies</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-zinc-900/40 border border-zinc-900 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-800 hover:bg-zinc-900/60 transition-all duration-300 group"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 border-b border-zinc-900/60 pb-3">
                    <span>{study.industry}</span>
                    <span className="text-blue-400">{study.tag}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    "{study.headline}"
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {study.shortCopy}
                  </p>
                </div>

                <div className="px-6 py-4 bg-zinc-950 border-t border-zinc-900/60 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Metric Gain</span>
                    <span className="text-sm font-display font-bold text-green-400">{study.metric}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">Duration</span>
                    <span className="text-xs text-zinc-300 font-semibold">{study.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section id="testimonial" className="py-16 md:py-24 border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          
          <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-blue-400">
            <MessageSquare className="w-5 h-5 fill-current" />
          </div>

          <blockquote className="text-lg sm:text-2xl font-light text-white leading-relaxed italic">
            “Their strategic approach helped us turn marketing automation into a serious source of qualified opportunities, not just bulk email lists.”
          </blockquote>

          <div className="space-y-1">
            <cite className="text-xs font-bold text-zinc-200 not-italic block">Founder & CMO, B2B SaaS Company</cite>
            <span className="text-[10px] font-mono text-blue-400 block font-bold tracking-wider uppercase">
              +148% Pipeline Velocity · 6 months
            </span>
          </div>

        </div>

        {/* Backdrop accent blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* 8. RELATED SERVICES SECTION */}
      <section id="related-services" className="py-16 md:py-24 bg-zinc-950 border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold block">
              Related Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Marketing automation performs better alongside these services.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-zinc-900/35 p-6 rounded-2xl border border-zinc-900 flex flex-col justify-between hover:border-zinc-800 transition-colors"
              >
                <div className="space-y-3">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400 w-max block">
                    {service.tag}
                  </span>
                  <h3 className="text-sm font-bold text-white tracking-tight">{service.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">{service.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-zinc-900/60">
                  <span className="text-xs text-blue-400 font-semibold flex items-center space-x-1 cursor-pointer hover:text-blue-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faqs" className="py-16 md:py-24 border-b border-zinc-900/60">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="text-center space-y-4 mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold block">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              Frequently asked questions about marketing automation.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFAQIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-zinc-900/30 rounded-xl border border-zinc-900 overflow-hidden"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setActiveFAQIndex(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between font-medium cursor-pointer"
                  >
                    <span className="text-xs md:text-sm text-zinc-200 hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded bg-zinc-950 text-zinc-400 flex-shrink-0 ml-3">
                      <ChevronDown className={`w-3.5 h-3.5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-zinc-900/60"
                      >
                        <div className="px-5 py-4 text-xs text-zinc-400 leading-relaxed font-light bg-zinc-950/40">
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
      <section id="final-cta" className="py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-zinc-950 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white leading-tight">
            Let’s make marketing automation your most efficient growth channel.
          </h2>
          
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            Book a 30-minute strategy call. We’ll review your current marketing automation performance, identify opportunities your competitors are missing, and show you what it would take to turn marketing automation into qualified pipeline.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-sm sm:max-w-none mx-auto">
            <button
              id="final-primary-cta"
              onClick={() => setIsBlueprintOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-3 px-6 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-lg shadow-blue-500/10"
            >
              <Sparkles className="w-4 h-4 fill-current" />
              <span>Request a Growth Blueprint</span>
            </button>
            <button
              id="final-secondary-cta"
              onClick={() => setIsAssessmentOpen(true)}
              className="border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-300 font-bold py-3 px-6 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
            >
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span>Take the Stack Assessment</span>
            </button>
          </div>

        </div>

        {/* Backdrop accent ring */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* FOOTER */}

      {/* BLUEPRINT REQUEST FORM MODAL (STEP WIZARD) */}
      <BlueprintModal 
        isOpen={isBlueprintOpen} 
        onClose={() => setIsBlueprintOpen(false)} 
      />

      {/* MATURITY ASSESSMENT MODAL WIZARD */}
      <AssessmentModal 
        isOpen={isAssessmentOpen} 
        onClose={() => setIsAssessmentOpen(false)} 
        onOpenConsultation={() => {
          setIsBlueprintOpen(true);
        }}
      />

    </div>
  );
}
