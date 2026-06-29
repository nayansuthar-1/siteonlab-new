"use client";

import React, { useState } from 'react';
import {
  ArrowRight, Check, Shield, Search, Sparkles, Navigation, MapPin, Star, ChevronDown,
  ChevronUp, BarChart, Eye, Globe, Phone, FileText, Cpu, Compass, HardHat, Layers
} from 'lucide-react';
import ServiceIntentGraphic from './components/ServiceIntentGraphic';
import AssessmentCalculator from './components/AssessmentCalculator';
import BlueprintModal from './components/BlueprintModal';
import { CaseStudy, FAQItem, ServiceComponent } from './types';

const TRUST_LOGOS = [
  { name: "ApexSaaS", type: "Cloud SaaS" },
  { name: "NexaGroup", type: "IT Services" },
  { name: "Veracity", type: "Cybersecurity" },
  { name: "TheraHealth", type: "MedTech" },
  { name: "ColdLogix", type: "Regional Logistics" }
];

const SERVICE_COMPONENTS: ServiceComponent[] = [
  {
    title: "Hyper-Local Keyword & Intent Mapping",
    description: "We map search queries to hyper-specific geographic targets. We optimize for localized 'commercial-intent' search variations rather than generic global terms.",
    icon: "Search",
    benefit: "Capture active buyers looking for immediate local assistance.",
    metric: "100% NAP compliance"
  },
  {
    title: "Google Business Profile & Apple Maps",
    description: "Full management and optimization of map-pack assets. We audit coordinates, categories, business hours, and load high-res photos to rank in the Local 3-Pack.",
    icon: "MapPin",
    benefit: "Dominate primary map results on both iOS and Android platforms.",
    metric: "3.4x map pack clicks"
  },
  {
    title: "Geo-Targeted Landing Page Architecture",
    description: "We construct lightweight, lightning-fast regional landing pages with embedded maps, structured local testimonials, and customized value propositions.",
    icon: "Layers",
    benefit: "Deliver hyper-relevant geographic user experiences that convert.",
    metric: "72% average speed index score"
  },
  {
    title: "Structured Local Schema (JSON-LD)",
    description: "We inject advanced location-schema scripts containing precise GPS coordinates, corporate ties, and service boundaries to streamline Google's crawling.",
    icon: "Cpu",
    benefit: "Feed rich snippet data and geographical authority straight to indexing spiders.",
    metric: "100% Google Rich Results ready"
  },
  {
    title: "AI Search Optimization & voice GEO",
    description: "We structure regional copy and localized Q&As so your physical addresses are cited inside conversational AI search engines.",
    icon: "Sparkles",
    benefit: "Remain visible as ChatGPT, Siri, Gemini, and Perplexity serve local answers.",
    metric: "Top voice-query rankings"
  },
  {
    title: "Local Revenue & Pipeline Attribution",
    description: "We bypass simple impressions. We link map clicks, direction actions, and offline phone calls directly to Salesforce or HubSpot opportunities.",
    icon: "BarChart",
    benefit: "Know exactly which cities and regions produce real business value.",
    metric: "Full-funnel attribution"
  }
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit and intent map",
    description: "We review your current local performance, competitor profile density, geographical citation gaps, and local pipeline opportunities.",
    timeline: "2 weeks",
    highlights: ["Citation health check", "Competitor local authority audit", "High-intent geo-modifier blueprint"]
  },
  {
    step: "02",
    title: "Architecture and sprint plan",
    description: "We build the geographic directory roadmap, construct location-specific schema architectures, and sequence campaigns by near-term revenue impact.",
    timeline: "1 week",
    highlights: ["Profile verification sprint", "Schema blueprint deployment", "Local page structure alignment"]
  },
  {
    step: "03",
    title: "Build, launch, and measure",
    description: "We optimize Google/Apple profile parameters, deploy localized landing assets, execute geographic schemas, and configure call/form-tracking models.",
    timeline: "Ongoing",
    highlights: ["Structured NAP citation push", "Local page launch", "Attribution hub sync"]
  },
  {
    step: "04",
    title: "Optimize for pipeline",
    description: "We scale local review networks, capture fresh citation backlinks, analyze voice search trends, and expand coordinates based on pipeline data.",
    timeline: "Monthly",
    highlights: ["Automated review acquisition", "LLM citation expansion", "Attribution reports review"]
  }
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    industry: "B2B SaaS",
    tag: "Multi-Location B2B SaaS",
    headline: "From invisible in local search to owning Chicago buyer-intent keywords",
    challenge: "A regional enterprise software provider was ignored in geographical searches, forcing them to rely on costly CPC programs.",
    solution: "We rebuilt their Google Business Profile structure and rolled out 12 custom geo-targeted intent landing pages rich in local schemas.",
    metric: "+312% organic pipeline growth",
    metricLabel: "Attributed local revenue",
    timeline: "9 months",
    companyName: "NexaGroup Systems",
    logoColor: "text-cyan-500"
  },
  {
    id: "cs-2",
    industry: "IT/MSP & Managed Services",
    tag: "Regional Technology Services",
    headline: "Scaling Local 3-Pack authority to drive high-value IT contracts across Texas",
    challenge: "An IT support firm struggled to gain visibility in enterprise hubs like Austin, Dallas, and Houston, losing ground to generic aggregators.",
    solution: "We optimized their citation profiles across major technology databases and initiated an automated B2B customer review campaign.",
    metric: "+185% map-pack lead volume",
    metricLabel: "Monthly SQL creation",
    timeline: "6 months",
    companyName: "Vanguard Tech",
    logoColor: "text-blue-500"
  },
  {
    id: "cs-3",
    industry: "Enterprise Logistics",
    tag: "Commercial Warehousing Group",
    headline: "Unifying profile authority across 45 logistics hubs to scale inbound inquiries",
    challenge: "A national industrial storage chain had siloed, duplicate listings and broken address schemas causing search penalties.",
    solution: "We performed complete citation deduplication and deployed programmatic hub-specific landing templates with synchronized maps.",
    metric: "-42% customer acquisition cost",
    metricLabel: "Attributed digital CPA spend",
    timeline: "12 months",
    companyName: "ColdLogix Logistics",
    logoColor: "text-purple-500"
  }
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is B2B Local SEO?",
    answer: "B2B Local SEO is the process of optimizing your physical business coordinates, digital properties, and directories (like Google Business Profiles, Apple Maps, Bing, and industry networks) so that regional enterprise buyers find your regional offices when looking for solutions near them. It connects local physical presence directly to search visibility."
  },
  {
    question: "How is Local SEO different for B2B and enterprise companies?",
    answer: "Unlike retail local SEO which focuses on quick consumer transactions, B2B Local SEO targets long-term corporate contracts, professional services, and high-value inquiries. It centers on demonstrating localized regional credibility, implementing complex service schemas, and driving qualified leads directly to regional sales reps, rather than simple consumer walk-ins."
  },
  {
    question: "How long does it take to see results in local search?",
    answer: "Most B2B clients observe significant ranking movements and Local 3-Pack entries within the first 45 to 90 days. Full-funnel pipeline and inbound call volume compounding typically hits its stride at the 6-month mark as Google coordinates citations and registers profile activity updates."
  },
  {
    question: "How do you measure Local SEO ROI?",
    answer: "We configure a dedicated measurement layer that maps Local Map clicks, direction inquiries, and geographic search forms directly to your sales pipeline. Using dynamic call-routing numbers and CRM integrations, we measure exact outcomes—qualified pipeline value and CAC efficiency—rather than simple web impressions."
  },
  {
    question: "What makes HybridMonks different from other local SEO agencies?",
    answer: "Most agencies run template checkmarks: they blast your business to generic directories and deliver a vanity report. HybridMonks builds a full-funnel local marketing system. We integrate advanced coordinate schemas, optimize for voice search and AI LLM citation algorithms, and build honest multi-location analytics dashboards to demonstrate clear revenue attribution."
  },
  {
    question: "Do you handle profile implementation or only strategy?",
    answer: "We handle complete end-to-end execution. Our team writes and implements geo-targeted schema tags, claims and cleans duplicate profiles, formats multi-location pages, pushes localized NAP directory data, and maintains active weekly updates to save your bandwidth and ensure technical excellence."
  },
  {
    question: "We tried local SEO before and it did not work. Why would this be different?",
    answer: "Usually, past failures trace back to poor citation hygiene (competing duplicate listings), generic non-B2B keyword maps, or send-to-homepage layouts that drop conversions. HybridMonks focuses strictly on high-intent intent queries, programmatic geo-targeted landing templates, and honest CRM-integrated tracking to guarantee measurable growth."
  },
  {
    question: "How does this service support voice search and AI visibility?",
    answer: "Large language models (like ChatGPT, Gemini, and Perplexity) rely heavily on structured LocalBusiness schema tags and trusted regional citation networks to answer conversational near-me searches. We format your coordinate data and local landing page copy so these AI engines easily register and quote your locations."
  },
  {
    question: "What does a typical engagement look like?",
    answer: "We start with a thorough Local Presence Audit to identify authority gaps. Following that, we deploy a geographic sprint roadmap dividing tasks into profile cleanup, landing page schema injection, and reviews acquisition. You receive monthly pipeline reports detailing call volume and SQL generation by city."
  }
];

export default function LocalSeoPage() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isBlueprintOpen, setIsBlueprintOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<{ score?: number; weakest?: string } | undefined>(undefined);

  const openBlueprintWithData = (data?: { score: number; weakest: string }) => {
    setModalInitialData(data);
    setIsBlueprintOpen(true);
  };

  const openBlueprintDefault = () => {
    setModalInitialData(undefined);
    setIsBlueprintOpen(true);
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="landing-page-root" className="theme-localseo min-h-screen bg-dark-base text-gray-100 font-sans antialiased overflow-x-hidden selection:bg-brand-primary/30 selection:text-brand-primary-light">

      {/* 1. HERO SECTION */}
      <section id="hero-cta" className="relative pt-12 pb-20 md:py-28 overflow-hidden bg-gradient-to-b from-dark-base via-dark-panel/30 to-dark-base">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full bg-brand-primary/3 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-xs text-brand-primary-light font-mono font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
                <span>B2B Local SEO | Map Pack Optimization</span>
              </div>

              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white leading-[1.1] max-w-xl">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-primary-light">Local SEO</span> agency that drives map pack rankings, regional calls, and qualified pipeline.
              </h1>

              <p id="hero-subtext" className="text-sm md:text-base text-gray-400 mt-5 leading-relaxed max-w-lg">
                HybridMonks helps B2B enterprise networks, multi-location tech firms, IT/MSPs, and professional service companies turn geographic search and local map listings into a measurable revenue engine. We help you rank in the Local 3-Pack, capture regional intent queries, and attribute citations directly to CRM pipeline.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto">
                <button
                  id="hero-primary-cta"
                  onClick={openBlueprintDefault}
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-primary text-dark-base font-bold text-sm rounded-xl hover:bg-brand-primary-light transition flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 hover:scale-[1.02] duration-200 cursor-pointer"
                >
                  Request a Growth Blueprint
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-secondary-cta"
                  onClick={() => handleScrollToSection('case-studies')}
                  className="w-full sm:w-auto px-6 py-3.5 border border-dark-border text-gray-300 hover:text-white rounded-xl hover:bg-dark-panel-light text-sm font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  See Case Studies
                </button>
              </div>
            </div>

            {/* Hero Right Related Graphics (Service Intent Graphic) */}
            <div className="lg:col-span-6 w-full">
              <ServiceIntentGraphic />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS SECTION */}
      <section id="trust-banner" className="py-12 bg-dark-panel/40 border-y border-dark-border/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center pb-8 border-b border-dark-border/40">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-display font-extrabold text-brand-primary-light">+340%</span>
              <span className="text-[11px] font-mono text-gray-400 uppercase mt-1 tracking-wider">Average Map Visibility</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-display font-extrabold text-white">45 Days</span>
              <span className="text-[11px] font-mono text-gray-400 uppercase mt-1 tracking-wider">To First Map Entry</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-display font-extrabold text-white">98.4%</span>
              <span className="text-[11px] font-mono text-gray-400 uppercase mt-1 tracking-wider">Citation Accuracy Rating</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-display font-extrabold text-brand-primary-light">1,200+</span>
              <span className="text-[11px] font-mono text-gray-400 uppercase mt-1 tracking-wider">B2B Markets Ranked</span>
            </div>
          </div>

          {/* Client Logos Banner */}
          <div className="pt-8 text-center">
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-5">
              Empowering multi-location growth for forward-thinking brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-65">
              {TRUST_LOGOS.map((logo, index) => (
                <div key={index} className="flex flex-col items-center">
                  <span className="text-sm font-display font-bold text-gray-300 tracking-tight">{logo.name}</span>
                  <span className="text-[8px] font-mono text-gray-500 uppercase">{logo.type}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SERVICE OVERVIEW SECTION */}
      <section id="service-overview" className="py-20 md:py-24 bg-dark-base relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
              Local SEO Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mt-3 tracking-tight">
              Local SEO built for compounding B2B revenue growth.
            </h2>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Most agencies just submit your company to outdated directories and hope for the best. Our Local SEO solution establishes a complete geographic authority network, combining advanced citation pipelines, coordinate schemas, localized content clusters, and voice search SEO into a compounding pipeline channel.
            </p>
          </div>

          {/* Service Components Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_COMPONENTS.map((comp, index) => (
              <div
                id={`srv-comp-${index}`}
                key={index}
                className="p-6 rounded-2xl bg-dark-panel border border-dark-border/80 hover:border-brand-primary/40 hover:bg-dark-panel-light/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-dark-base transition duration-300 mb-5">
                    {comp.icon === 'Search' && <Search className="w-5 h-5" />}
                    {comp.icon === 'MapPin' && <MapPin className="w-5 h-5" />}
                    {comp.icon === 'Layers' && <Layers className="w-5 h-5" />}
                    {comp.icon === 'Cpu' && <Cpu className="w-5 h-5" />}
                    {comp.icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                    {comp.icon === 'BarChart' && <BarChart className="w-5 h-5" />}
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-brand-primary-light transition">
                    {comp.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {comp.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-dark-border/60 flex flex-col gap-1.5 text-[11px] font-mono">
                  <div className="text-brand-primary flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{comp.benefit}</span>
                  </div>
                  <div className="text-gray-500">
                    Baseline Benchmark: <strong className="text-gray-300">{comp.metric}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section id="process-steps" className="py-20 md:py-24 bg-dark-panel/30 border-y border-dark-border/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 tracking-tight">
              From invisible to dominating local search in 90 days.
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mt-3">
              We leverage clean schedules, scientific profile management, and direct CRM integrations.
            </p>
          </div>

          {/* Staggered process step row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

            {/* Process Steps */}
            {PROCESS_STEPS.map((step, index) => (
              <div
                id={`proc-step-${index}`}
                key={index}
                className="relative bg-dark-panel p-6 rounded-2xl border border-dark-border/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-display font-black text-3xl text-brand-primary-light/10">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded-full border border-brand-primary/20">
                      {step.timeline}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-dark-border/60">
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Deliverables</div>
                  <div className="flex flex-col gap-1.5">
                    {step.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-[10px] text-gray-300">
                        <span className="w-1 h-1 rounded-full bg-brand-primary shrink-0"></span>
                        <span className="truncate">{h}</span>
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
      <section id="why-us" className="py-20 md:py-24 bg-dark-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left intro text */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
                Why Teams Pick Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 tracking-tight">
                A Local SEO agency that connects maps visibility to revenue.
              </h2>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Most agencies hand you a vanity spreadsheet showing search impressions and call it a success. HybridMonks constructs a complete multi-coordinate attribution layer so you can trace how Local SEO drives physical conversions and regional pipeline.
              </p>

              <button
                id="why-blueprint-btn"
                onClick={openBlueprintDefault}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary-light hover:text-white transition group"
              >
                Analyze your current coordinate gap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition duration-200" />
              </button>
            </div>

            {/* Right differentiators grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="p-5 bg-dark-panel rounded-2xl border border-dark-border/80">
                <h4 className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider">01 // Outcome First</h4>
                <h5 className="text-sm font-semibold text-white mt-2">Revenue-first local strategy</h5>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  We optimize for inbound qualified pipeline and regional client meetings, not isolated keywords.
                </p>
              </div>

              <div className="p-5 bg-dark-panel rounded-2xl border border-dark-border/80">
                <h4 className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider">02 // Attribution</h4>
                <h5 className="text-sm font-semibold text-white mt-2">Measurement that is honest</h5>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  We link coordinate phone routes and local forms back to CRM opportunity pipeline.
                </p>
              </div>

              <div className="p-5 bg-dark-panel rounded-2xl border border-dark-border/80">
                <h4 className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider">03 // AI Optimization</h4>
                <h5 className="text-sm font-semibold text-white mt-2">Built for AI search & Voice</h5>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  We structure coordinates and schemas so local buyers cite you in Gemini, Siri, and ChatGPT.
                </p>
              </div>

              <div className="p-5 bg-dark-panel rounded-2xl border border-dark-border/80">
                <h4 className="text-xs font-mono font-bold text-brand-primary uppercase tracking-wider">04 // Assets</h4>
                <h5 className="text-sm font-semibold text-white mt-2">Compounding local growth</h5>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                  We build lasting geo-targeted profiles and citation networks that drive permanent value.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section id="case-studies" className="py-20 md:py-24 bg-dark-panel/30 border-y border-dark-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
                Case Studies & Results
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 tracking-tight">
                Local SEO results we can put a number on.
              </h2>
            </div>

            {/* Tab Selectors */}
            <div className="flex gap-2 mt-4 sm:mt-0 bg-dark-base/60 p-1.5 rounded-xl border border-dark-border">
              {CASE_STUDIES.map((cs, idx) => (
                <button
                  id={`case-tab-${idx}`}
                  key={cs.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeCaseIndex === idx
                      ? 'bg-brand-primary text-dark-base font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Case 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Study Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-dark-panel p-6 sm:p-10 rounded-3xl border border-dark-border/80 glow-shadow">

            {/* Metric Box (Left Column) */}
            <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left bg-dark-base p-6 sm:p-8 rounded-2xl border border-dark-border relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-primary/10 text-brand-primary text-[10px] px-2 py-0.5 rounded-bl font-mono">
                {CASE_STUDIES[activeCaseIndex].timeline} Project
              </div>

              <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
                {CASE_STUDIES[activeCaseIndex].tag}
              </span>

              <div className="text-3xl sm:text-4xl font-display font-black text-white mt-4 tracking-tight">
                {CASE_STUDIES[activeCaseIndex].metric}
              </div>

              <div className="text-xs text-brand-primary font-mono mt-1 font-medium">
                {CASE_STUDIES[activeCaseIndex].metricLabel}
              </div>

              <div className="mt-6 pt-5 border-t border-dark-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500">Client Partner</span>
                <span className="text-white font-semibold">{CASE_STUDIES[activeCaseIndex].companyName}</span>
              </div>
            </div>

            {/* Narrative Content (Right Column) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-mono text-brand-primary-light bg-brand-primary/5 border border-brand-primary/20 px-2.5 py-0.5 rounded-full mb-3">
                {CASE_STUDIES[activeCaseIndex].industry}
              </span>

              <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white leading-snug">
                "{CASE_STUDIES[activeCaseIndex].headline}"
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 text-xs leading-relaxed text-gray-400">
                <div>
                  <strong className="text-gray-200 font-semibold block mb-1 font-mono uppercase tracking-wider text-[10px]">The Challenge</strong>
                  <p>{CASE_STUDIES[activeCaseIndex].challenge}</p>
                </div>
                <div>
                  <strong className="text-brand-primary block mb-1 font-mono uppercase tracking-wider text-[10px]">The HybridMonks Solution</strong>
                  <p>{CASE_STUDIES[activeCaseIndex].solution}</p>
                </div>
              </div>

              <button
                id="case-cta-btn"
                onClick={openBlueprintDefault}
                className="mt-8 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary-light text-xs font-mono px-5 py-2.5 rounded-xl hover:bg-brand-primary hover:text-dark-base font-bold transition flex items-center gap-1.5"
              >
                Estimate your market lift <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section id="testimonial" className="py-20 md:py-24 bg-dark-base relative overflow-hidden">
        {/* Subtle radial light in background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          <div className="max-w-3xl mx-auto">
            <span className="text-3xl md:text-4xl text-brand-primary-light font-display opacity-40">“</span>

            <p className="text-lg sm:text-xl md:text-2xl font-display font-medium text-white italic leading-relaxed">
              Their strategic local approach helped us turn map pack searches into a serious source of qualified regional opportunities, not just website traffic.
            </p>

            <div className="mt-8">
              <h5 className="text-sm font-semibold text-white">Sarah Jenkins</h5>
              <p className="text-xs text-gray-500 font-mono mt-0.5">VP of Marketing, NexaGroup Systems</p>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-panel border border-dark-border text-xs text-gray-400 font-mono">
              <span className="text-brand-primary-light font-bold">+312% organic local growth</span>
              <span className="text-gray-600">•</span>
              <span>9 months timeline</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. RELATED SERVICES SECTION */}
      <section id="related-services" className="py-20 bg-dark-panel/30 border-t border-dark-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
              Related Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 tracking-tight">
              Local SEO performs better alongside these services.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 bg-dark-panel rounded-2xl border border-dark-border/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-brand-primary font-bold uppercase">01 // Voice Search</span>
                <h4 className="text-base font-semibold text-white mt-2">AI Visibility Optimization</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Get cited and recommended inside ChatGPT, Gemini, Perplexity, and Google AI Overviews for high-intent queries.
                </p>
              </div>
              <button onClick={openBlueprintDefault} className="mt-5 text-left text-xs font-mono text-brand-primary-light hover:text-white transition font-medium flex items-center gap-1">
                Explore framework <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-dark-panel rounded-2xl border border-dark-border/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-brand-primary font-bold uppercase">02 // Local Copy</span>
                <h4 className="text-base font-semibold text-white mt-2">Content Marketing</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Build localized topic clusters and geographic authority copy that attracts and educates regional decision makers.
                </p>
              </div>
              <button onClick={openBlueprintDefault} className="mt-5 text-left text-xs font-mono text-brand-primary-light hover:text-white transition font-medium flex items-center gap-1">
                Explore framework <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 bg-dark-panel rounded-2xl border border-dark-border/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-brand-primary font-bold uppercase">03 // Attr. Dashboard</span>
                <h4 className="text-base font-semibold text-white mt-2">Revenue Measurement</h4>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Connect map directions, clicks, and physical office call metrics directly to Salesforce or HubSpot pipelines.
                </p>
              </div>
              <button onClick={openBlueprintDefault} className="mt-5 text-left text-xs font-mono text-brand-primary-light hover:text-white transition font-medium flex items-center gap-1">
                Explore framework <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faqs" className="py-20 md:py-24 bg-dark-base border-t border-dark-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
              FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-3 tracking-tight">
              Frequently asked questions about our B2B Local SEO.
            </h2>
          </div>

          {/* Interactive Accordion */}
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                id={`faq-item-${index}`}
                key={index}
                className="bg-dark-panel border border-dark-border/80 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  id={`faq-trigger-${index}`}
                  onClick={() => handleFaqToggle(index)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center text-sm md:text-base font-semibold text-white hover:bg-dark-panel-light/40 transition cursor-pointer"
                >
                  <span>{item.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-brand-primary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>

                {openFaqIndex === index && (
                  <div id={`faq-answer-${index}`} className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-dark-border/40 bg-dark-base/20">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. FINAL CTA SECTION (featuring the Interactive Assessment Widget) */}
      <section id="final-cta" className="py-20 md:py-24 bg-gradient-to-t from-dark-panel/40 via-dark-base to-dark-base relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* CTA Left Copy Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
                Instant Evaluation
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight mt-3">
                Let’s make local search your most efficient growth channel.
              </h2>

              <p className="text-xs md:text-sm text-gray-400 mt-5 leading-relaxed">
                Book a 30-minute strategy call. We’ll review your current geographic coordinates presence, identify high-intent local opportunities your competitors are overlooking, and show you exactly what it takes to turn local visibility into attributed CRM pipeline.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto">
                <button
                  id="final-primary-cta"
                  onClick={openBlueprintDefault}
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-primary text-dark-base font-bold text-sm rounded-xl hover:bg-brand-primary-light transition flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 hover:scale-[1.02] duration-200 cursor-pointer"
                >
                  Request a Growth Blueprint
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="final-secondary-cta"
                  onClick={() => {
                    const el = document.getElementById('assessment-widget');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 border border-dark-border text-gray-300 hover:text-white rounded-xl hover:bg-dark-panel-light text-sm font-semibold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Take Local Assessment
                </button>
              </div>
            </div>

            {/* CTA Right Interactive Calculator Widget */}
            <div className="lg:col-span-6 w-full">
              <AssessmentCalculator onOpenBlueprint={openBlueprintWithData} />
            </div>

          </div>

        </div>
      </section>

      {/* Global custom generated blueprint popup modal */}
      <BlueprintModal
        isOpen={isBlueprintOpen}
        onClose={() => setIsBlueprintOpen(false)}
        initialData={modalInitialData}
      />

    </div>
  );
}
