"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, Network, ShieldAlert, LineChart, Coins, Zap, 
  TrendingUp, ClipboardCheck, Sparkles, Workflow, FileText,
  ChevronDown, ChevronUp, ArrowUpRight, ArrowRight, Check,
  MessageSquare, Layers, Lock, ChevronRight, HelpCircle,
  Clock, ShieldCheck, Star, Users, Phone, Mail, Award, BookOpen, X
} from 'lucide-react';

import { 
  METRICS_DATA, 
  TRUST_PILLARS, 
  SERVICES_DATA, 
  PROCESS_DATA, 
  DIFFERENTIATORS_DATA, 
  CASE_STUDIES_DATA, 
  RELATED_SERVICES_DATA, 
  FAQS_DATA 
} from './data';

import GTMCalculator from './components/GTMCalculator';
import GTMBlueprintModal from './components/GTMBlueprintModal';
import RevenueAssessmentModal from './components/RevenueAssessmentModal';

// Explicit mapper to prevent type errors with dynamic strings
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Network,
  ShieldAlert,
  LineChart,
  Coins,
  Zap,
  TrendingUp,
  ClipboardCheck,
  Sparkles,
  Workflow,
  FileText
};

export default function App() {
  const [isBlueprintOpen, setIsBlueprintOpen] = useState<boolean>(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState<boolean>(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Set document SEO tags dynamically
  useEffect(() => {
    document.title = "GTM & Revenue Strategy Agency for B2B Pipeline Growth | SiteOnLab";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descContent = "SiteOnLab helps B2B SaaS, technology, IT/MSP, and professional-services companies turn GTM & Revenue Strategy into qualified pipeline.";
    if (metaDescription) {
      metaDescription.setAttribute("content", descContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeCase = CASE_STUDIES_DATA.find(c => c.id === selectedCaseId);

  return (
    <div className="theme-gtm min-h-screen bg-[#050505] text-slate-300 font-sans antialiased selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      
      {/* Absolute Decorative Glow Elements */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-30%] w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* ────────────────────────────────────────────────────────
          NAV HEADER (Highly Polished Contextual Frame)
          ──────────────────────────────────────────────────────── */}
      <header 
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-9 h-9 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-lg shadow-md shadow-blue-500/10">
              <span className="font-display font-black text-white text-xl tracking-tighter">S</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-indigo-500 rounded-full border border-slate-950" />
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg tracking-tight">SiteOn<span className="text-blue-500">Lab</span></span>
              <span className="hidden sm:inline-block text-[10px] text-blue-400 font-mono tracking-widest uppercase ml-2 px-1.5 py-0.5 bg-blue-500/10 rounded border border-blue-500/20">
                GTM & Revenue Strategy
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button id="nav-btn-services" onClick={() => scrollToSection('services-overview')} className="hover:text-blue-400 transition-colors">Services</button>
            <button id="nav-btn-process" onClick={() => scrollToSection('process-section')} className="hover:text-blue-400 transition-colors">Process</button>
            <button id="nav-btn-why" onClick={() => scrollToSection('why-us')} className="hover:text-blue-400 transition-colors">Why SiteOnLab</button>
            <button id="nav-btn-cases" onClick={() => scrollToSection('case-studies')} className="hover:text-blue-400 transition-colors">Case Studies</button>
            <button id="nav-btn-faqs" onClick={() => scrollToSection('faqs')} className="hover:text-blue-400 transition-colors">FAQs</button>
          </nav>

          <button 
            id="header-cta-blueprint"
            onClick={() => setIsBlueprintOpen(true)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-blue-500/30 text-white text-xs font-semibold rounded-lg shadow-lg transition-all duration-200"
          >
            Request Growth Blueprint
          </button>
        </div>
      </header>

      {/* Spacer for Nav Header */}
      <div className="h-24 sm:h-28" />

      {/* ────────────────────────────────────────────────────────
          1. HERO SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="hero-section" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-white/5 rounded-full">
              <span className="text-blue-400 text-xs font-mono font-bold uppercase tracking-wider">
                Go-To-Market
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300 text-xs font-mono">
                GTM & Revenue Strategy
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 italic">GTM & Revenue Strategy</span> agency that drives predictable pipeline, accelerated sales velocity, and efficient revenue growth.
            </h1>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
              SiteOnLab helps B2B SaaS, technology, IT/MSP, and professional-services companies turn Go-To-Market and Revenue Strategy into a measurable revenue engine. We help you design winning launch playbooks, align sales & marketing teams, and optimize pricing/funnels — measured by qualified pipeline, not vanity metrics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                id="hero-primary-cta"
                onClick={() => setIsBlueprintOpen(true)}
                className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-200 text-sm"
              >
                Request a Growth Blueprint
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                id="hero-secondary-cta"
                onClick={() => scrollToSection('case-studies')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-800 border border-white/5 hover:border-white/10 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                See Case Studies
              </button>
            </div>
          </div>

          {/* Right Graphics (Interactive Simulator Component) */}
          <div className="lg:col-span-5 w-full">
            <GTMCalculator />
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. TRUST METRICS SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="trust-metrics" className="relative z-10 border-y border-white/5 bg-slate-950/40 backdrop-blur-sm py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Numeric Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 border-b border-white/5 pb-12">
            {METRICS_DATA.map((metric) => (
              <div id={`metric-card-${metric.id}`} key={metric.id} className="text-center lg:text-left space-y-2 group">
                <div className={`text-4xl sm:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${metric.accentColor} tracking-tight`}>
                  {metric.value}
                </div>
                <div className="font-display font-semibold text-white text-sm sm:text-base">
                  {metric.label}
                </div>
                <div className="text-xs text-gray-400 leading-relaxed max-w-[240px] mx-auto lg:mx-0">
                  {metric.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Fallback Credibility Proof Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, i) => (
              <div id={`trust-pillar-${i}`} key={i} className="bg-slate-900/40 border border-white/5 rounded-xl p-4 flex gap-3.5 items-start hover:border-white/10 transition-colors">
                <div className="p-1.5 bg-blue-500/10 text-blue-400 rounded-md mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-xs sm:text-sm mb-1">{pillar.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. SERVICE OVERVIEW SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="services-overview" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
            GTM & Revenue Strategy Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GTM & Revenue Strategy built for compounding B2B revenue growth.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Most agencies just run basic ads and look at simple campaigns. Our GTM & Revenue Strategy builds a complete growth system that combines ICP validation, cross-channel orchestration, pipeline attribution, and sales enablement into one revenue channel designed to earn trust with buyers, Google, and AI search engines.
          </p>
        </div>

        {/* 6 Service Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || Target;
            return (
              <div 
                id={`service-card-${service.id}`}
                key={service.id} 
                className="bg-slate-900/50 hover:bg-slate-900 border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Micro glow on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6">
                  <div className="text-[10px] font-mono font-semibold text-gray-400 uppercase mb-2">Key Deliverables:</div>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5 text-xs text-gray-300">
                        <Check className="w-3 h-3 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. PROCESS SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="process-section" className="relative z-10 border-t border-white/5 bg-slate-950/20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From strategy misalignment to predictable pipeline in 90 days.
            </h2>
          </div>

          {/* Stepper Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            
            {/* Horizontal Connector Line for Desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-slate-800 pointer-events-none z-0" />

            {PROCESS_DATA.map((step, sIdx) => (
              <div 
                id={`process-step-${step.id}`}
                key={step.id} 
                className="relative z-10 bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step bubble and timeline header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-white bg-blue-600 px-2.5 py-1 rounded-full shadow-lg shadow-blue-600/15">
                      {step.stepNumber}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3" />
                      {step.timeline}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-base md:text-lg mb-2 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6">
                  <div className="text-[9px] font-mono tracking-wider font-semibold text-gray-400 uppercase mb-2">Activities Focus:</div>
                  <ul className="space-y-1">
                    {step.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1 text-xs text-gray-300">
                        <Check className="w-2.5 h-2.5 text-blue-400 mt-1 flex-shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. WHY CHOOSE US SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="why-us" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20 w-fit">
              Why Teams Pick Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              A GTM & Revenue Strategy agency that connects channel performance to revenue.
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Most agencies hand you a vanity spreadsheet of clicks and traffic and call it done. SiteOnLab builds a full measurement layer so you can see how Go-To-Market and Revenue Strategy initiatives contribute across the entire buyer journey, from first touch to qualified opportunity.
            </p>
            <div className="p-4 bg-slate-900/60 border border-white/5 rounded-xl flex gap-3">
              <Award className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-400 leading-relaxed">
                We combine analytical CRM tracking structures with high-intent digital positioning so your revenue team receives actual qualified interest.
              </p>
            </div>
          </div>

          {/* Right Differentiator Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DIFFERENTIATORS_DATA.map((item) => {
              const IconComponent = iconMap[item.iconName] || Target;
              return (
                <div 
                  id={`diff-card-${item.id}`}
                  key={item.id} 
                  className="bg-slate-900/40 hover:bg-slate-900/70 border border-white/5 hover:border-blue-500/30 rounded-xl p-5 transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm sm:text-base group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. CASE STUDIES SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="case-studies" className="relative z-10 border-t border-white/5 bg-slate-950/40 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
                Case Studies & Results
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                GTM & Revenue Strategy results we can put a number on.
              </h2>
            </div>
            <button 
              id="cases-btn-blueprint"
              onClick={() => setIsBlueprintOpen(true)}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-blue-500/30 text-white text-xs font-bold rounded-lg transition-all duration-200"
            >
              See all case studies
            </button>
          </div>

          {/* 3 Case Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES_DATA.map((study) => (
              <div 
                id={`case-card-${study.id}`}
                key={study.id}
                onClick={() => setSelectedCaseId(study.id)}
                className="bg-slate-900/40 hover:bg-slate-900 border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/10 font-medium">
                      {study.industry} · {study.subIndustry}
                    </span>
                    <span className="text-gray-500">{study.timeline}</span>
                  </div>

                  <h3 className="font-display font-bold text-white text-base md:text-lg group-hover:text-blue-400 transition-colors leading-snug">
                    {study.headline}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {study.shortCopy}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 mt-6 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider block">Impact</span>
                    <span className="text-base sm:text-lg font-display font-extrabold text-blue-400">{study.metricValue}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. TESTIMONIAL SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="testimonial" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="bg-gradient-to-r from-slate-900/80 to-slate-900/40 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-3xl rounded-full" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            {/* Quote Icon */}
            <div className="text-blue-500 font-serif text-6xl leading-none">“</div>
            
            <p className="text-lg sm:text-2xl font-display font-medium text-white italic leading-relaxed">
              Their strategic GTM approach completely aligned our marketing and sales teams. Instead of arguing over MQL quality, we are now focused on a single source of truth: pipeline dollar growth.
            </p>

            <div className="pt-4 border-t border-white/5 max-w-md mx-auto">
              <h4 className="font-display font-bold text-white text-base">Marcus Chen</h4>
              <p className="text-xs text-gray-400 mt-0.5">VP of Growth, Enterprise FinTech Platform</p>
              
              <div className="inline-flex items-center gap-1.5 mt-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold">
                <Star className="w-3.5 h-3.5 fill-current" />
                +240% Pipeline Velocity · 6 months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          8. RELATED SERVICES SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="related-services" className="relative z-10 border-t border-white/5 bg-slate-950/20 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
              Related Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              GTM & Revenue Strategy performs better alongside these services.
            </h2>
          </div>

          {/* 3 Related Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {RELATED_SERVICES_DATA.map((service) => {
              const IconComponent = iconMap[service.iconName] || Target;
              return (
                <div 
                  id={`related-service-${service.id}`}
                  key={service.id} 
                  className="bg-slate-900/40 hover:bg-slate-900 border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg w-fit group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-white text-base sm:text-lg group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-4 mt-6">
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {service.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          9. FAQ SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="faqs" className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
            FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently asked questions about GTM & Revenue Strategy.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                id={`faq-item-${idx}`}
                key={faq.id} 
                className="bg-slate-900/40 border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-display font-semibold text-white hover:text-blue-400 text-sm md:text-base transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <div className="p-1 hover:bg-white/5 rounded-full flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          10. FINAL CTA SECTION
          ──────────────────────────────────────────────────────── */}
      <section id="final-cta" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-white/5">
        <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute top-[-30%] left-[-10%] w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-30%] right-[-10%] w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let’s make GTM & Revenue Strategy your most efficient growth channel.
            </h2>
            
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Book a 30-minute strategy call. We’ll review your current Go-To-Market and Revenue Strategy performance, identify opportunities your competitors are missing, and show you what it would take to turn Go-To-Market and Revenue Strategy into qualified pipeline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                id="cta-btn-blueprint"
                onClick={() => setIsBlueprintOpen(true)}
                className="group flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-200 text-sm"
              >
                Request a Growth Blueprint
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="cta-btn-assessment"
                onClick={() => setIsAssessmentOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-white/5 text-white font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Take the Revenue Health Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="site-footer" className="bg-[#030303] border-t border-white/5 py-12 text-xs text-gray-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded flex items-center justify-center">
                <span className="font-display font-black text-white text-xs">S</span>
              </div>
              <span className="font-display font-bold text-white text-sm">SiteOnLab</span>
            </div>
            <p className="leading-relaxed">
              B2B-first Go-To-Market & Revenue Strategy consulting. We build systems that turn intent signals into qualified revenue.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-xs mb-3">Service Deliverables</h4>
            <ul className="space-y-1.5">
              <li>ICP Validation Models</li>
              <li>Multi-Channel Playbooks</li>
              <li>Sales Enablement Assets</li>
              <li>Closed-Loop Attribution</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-xs mb-3">Growth Resources</h4>
            <ul className="space-y-1.5 cursor-pointer">
              <li onClick={() => setIsBlueprintOpen(true)} className="hover:text-emerald-400 transition-colors">Growth Blueprint Diagnostic</li>
              <li onClick={() => setIsAssessmentOpen(true)} className="hover:text-emerald-400 transition-colors">GTM Revenue Assessment</li>
              <li onClick={() => scrollToSection('case-studies')} className="hover:text-emerald-400 transition-colors">Enterprise Case Studies</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-xs mb-3">Governance</h4>
            <p className="leading-relaxed mb-2">
              All strategies are customized for your company’s technographic parameters.
            </p>
            <p>© {new Date().getFullYear()} SiteOnLab. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ────────────────────────────────────────────────────────
          MODALS & FLYOUTS
          ──────────────────────────────────────────────────────── */}
      
      {/* 1. Case Study Expansion Modal */}
      <AnimatePresence>
        {selectedCaseId && activeCase && (
          <div id="case-study-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
            >
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-slate-950/40">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-bold uppercase">
                    {activeCase.industry} Case Study
                  </span>
                </div>
                <button 
                  id="close-case-modal"
                  onClick={() => setSelectedCaseId(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-white/5 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-white text-lg sm:text-xl leading-snug">{activeCase.headline}</h3>
                  <div className="flex gap-4 mt-3 border-y border-white/5 py-3">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block">Duration</span>
                      <span className="text-sm font-semibold text-white">{activeCase.timeline}</span>
                    </div>
                    <div className="border-l border-white/5 pl-4">
                      <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block">Result</span>
                      <span className="text-sm font-bold text-emerald-400">{activeCase.metricValue}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-gray-300">
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider block">The Challenge:</span>
                    <p>{activeCase.challenge}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider block">Our Strategy:</span>
                    <p>{activeCase.approach}</p>
                  </div>
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider block">Key Accomplishments:</span>
                    <div className="space-y-2">
                      {activeCase.results.map((res, rIdx) => (
                        <div key={rIdx} className="flex gap-2 items-start text-xs text-gray-200">
                          <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-white/10 bg-slate-950/40 flex justify-end gap-3">
                <button 
                  id="btn-case-close"
                  onClick={() => setSelectedCaseId(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Close Case
                </button>
                <button 
                  id="btn-case-consult"
                  onClick={() => {
                    setSelectedCaseId(null);
                    setIsBlueprintOpen(true);
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-xs font-bold rounded-lg shadow-md hover:opacity-90 transition-opacity"
                >
                  Replicate This Result
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. GTM Growth Blueprint Wizard Modal */}
      <AnimatePresence>
        {isBlueprintOpen && (
          <GTMBlueprintModal 
            isOpen={isBlueprintOpen} 
            onClose={() => setIsBlueprintOpen(false)} 
          />
        )}
      </AnimatePresence>

      {/* 3. Revenue Health Assessment Wizard Modal */}
      <AnimatePresence>
        {isAssessmentOpen && (
          <RevenueAssessmentModal 
            isOpen={isAssessmentOpen} 
            onClose={() => setIsAssessmentOpen(false)} 
          />
        )}
      </AnimatePresence>

    </div>
  );
}
