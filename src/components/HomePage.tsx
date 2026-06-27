"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Target,
  Layout,
  Cpu,
  TrendingUp,
  Layers,
  Shield,
  Lock,
  Briefcase,
  Code,
  Factory,
  ChevronRight,
  ChevronDown,
  Check,
  X,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  ArrowRight,
  ChevronUp,
  Award,
} from "lucide-react";
import InteractiveVisualizer from "./InteractiveVisualizer";
import {
  SERVICES_DATA,
  PAIN_POINTS,
  FRAMEWORK_STEPS,
  INDUSTRIES_DATA,
  CASE_STUDIES,
  FAQS_DATA,
  BLOG_POSTS
} from "@/lib/data";

export default function HomePage() {
  // Navigation & UI States
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("saas");

  // Modal / Conversion Flow States
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);

  // Assessment Form Progress
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [assessmentAnswers, setAssessmentAnswers] = useState({
    industry: "",
    cited: "",
    bottleneck: "",
    growthRate: "",
    name: "",
    email: "",
    website: ""
  });
  const [assessmentScore, setAssessmentScore] = useState<number | null>(null);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    website: "",
    spend: "",
    day: "Monday",
    time: "10:00 AM",
    completed: false
  });

  // Animated Results Counters (Increment on mount)
  const [pipelineCount, setPipelineCount] = useState(0);
  const [growthPercent, setGrowthPercent] = useState(0);
  const [brandsCount, setBrandsCount] = useState(0);

  useEffect(() => {
    // Increment counters smoothly
    const pipelineInterval = setInterval(() => {
      setPipelineCount(prev => (prev < 25 ? prev + 1 : 25));
    }, 40);

    const growthInterval = setInterval(() => {
      setGrowthPercent(prev => (prev < 180 ? prev + 4 : 180));
    }, 10);

    const brandsInterval = setInterval(() => {
      setBrandsCount(prev => (prev < 120 ? prev + 3 : 120));
    }, 15);

    return () => {
      clearInterval(pipelineInterval);
      clearInterval(growthInterval);
      clearInterval(brandsInterval);
    };
  }, []);

  // Helper to map Lucide icons
  const getIcon = (name: string) => {
    switch (name) {
      case "Sparkles": return <Sparkles className="w-6 h-6 text-brand-primary" />;
      case "Target": return <Target className="w-6 h-6 text-brand-primary" />;
      case "Layout": return <Layout className="w-6 h-6 text-brand-primary" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-brand-primary" />;
      case "TrendingUp": return <TrendingUp className="w-6 h-6 text-brand-primary" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Shield": return <Shield className="w-5 h-5" />;
      case "Lock": return <Lock className="w-5 h-5" />;
      case "Briefcase": return <Briefcase className="w-5 h-5" />;
      case "Code": return <Code className="w-5 h-5" />;
      case "Factory": return <Factory className="w-5 h-5" />;
      default: return <Sparkles className="w-6 h-6 text-brand-primary" />;
    }
  };

  // Handle Assessment submission & custom scoring
  const processAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple conversion score algorithm based on answers
    let score = 85; // Start high, deduct points for leaks
    if (assessmentAnswers.cited === "No, we are invisible" || assessmentAnswers.cited === "Unsure / Haven't tested") {
      score -= 30;
    } else if (assessmentAnswers.cited === "We show up occasionally") {
      score -= 15;
    }
    if (assessmentAnswers.bottleneck === "High traffic but no pipeline/leads") {
      score -= 20;
    } else if (assessmentAnswers.bottleneck === "Our agency cannot prove revenue/ROI") {
      score -= 25;
    }
    score = Math.max(28, score); // Min score 28%
    setAssessmentScore(score);
    setAssessmentStep(6); // Report Step
  };

  // Reset Assessment Wizard
  const resetAssessment = () => {
    setAssessmentStep(1);
    setAssessmentScore(null);
    setAssessmentAnswers({
      industry: "",
      cited: "",
      bottleneck: "",
      growthRate: "",
      name: "",
      email: "",
      website: ""
    });
  };

  // Handle Booking submission
  const processBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingForm(prev => ({ ...prev, completed: true }));
  };

  // Reset Booking Form
  const resetBooking = () => {
    setBookingForm({
      name: "",
      email: "",
      website: "",
      spend: "",
      day: "Monday",
      time: "10:00 AM",
      completed: false
    });
  };

  // Shortcut triggers
  const triggerBookingWithAssessment = () => {
    // Fill booking form with info collected from assessment
    setBookingForm(prev => ({
      ...prev,
      name: assessmentAnswers.name,
      email: assessmentAnswers.email,
      website: assessmentAnswers.website
    }));
    setAssessmentModalOpen(false);
    setBookingModalOpen(true);
  };

  return (
    <div className="theme-home min-h-screen bg-brand-bg text-gray-100 font-sans selection:bg-brand-primary selection:text-black relative overflow-x-hidden">

      {/* SECTION 3: Hero Section */}
      <section id="hero" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900 overflow-hidden">

        {/* Background mesh glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center" id="hero-grid">

          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6 lg:pr-6" id="hero-content">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full border border-brand-primary/20" id="hero-badge">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-wide uppercase">AI-Powered B2B Revenue Growth</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-display font-black text-white leading-[1.1] tracking-tight" id="hero-title">
              Get found by your buyers — <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">and recommended by AI.</span> Then watch it turn into pipeline.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-sans" id="hero-subtitle">
              SiteOnLab is the AI-Powered B2B Revenue Growth agency for SaaS, tech, IT/MSP, cybersecurity, and professional-services firms. We engineer demand, win the shortlist in Google AND AI search, and convert it into revenue we can prove.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto" id="hero-ctas">
              <button
                id="hero-primary-cta"
                onClick={() => { resetBooking(); setBookingModalOpen(true); }}
                className="bg-brand-primary hover:bg-cyan-400 text-black px-8 py-4 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 text-center cursor-pointer"
              >
                Book a Strategy Call
              </button>
              <button
                id="hero-secondary-cta"
                onClick={() => { resetAssessment(); setAssessmentModalOpen(true); }}
                className="bg-brand-card hover:bg-brand-card-light text-gray-200 border border-zinc-800 px-6 py-4 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 text-center cursor-pointer"
              >
                Take the AI Visibility Assessment
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 text-xs font-mono text-gray-500" id="hero-pillars">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-primary" /> Generative Optimization (GEO)
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-primary" /> Multi-Channel Demand Gen
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-primary" /> Direct CRM ROI Attribution
              </span>
            </div>
          </div>

          {/* Right Hero Visual Panel (Interactive engine visualizer) */}
          <div className="lg:col-span-6 flex justify-center w-full" id="hero-visual">
            <div className="w-full max-w-2xl bg-slate-950/40 p-2 rounded-2xl border border-slate-800 shadow-2xl relative">
              {/* Corner badge overlay */}
              <div className="absolute -top-3 -right-3 z-20 bg-brand-orange text-white text-[9px] font-bold tracking-wider font-mono px-2.5 py-1 rounded-full uppercase shadow-lg shadow-brand-orange/20 animate-pulse">
                Interactive Simulator
              </div>
              <InteractiveVisualizer />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Results Bar (Animated counters) */}
      <section id="results" className="bg-zinc-950 border-y border-zinc-900 py-10 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800">

          {/* Note: SiteOnLab Team can easily edit these placeholders */}
          {/* PLACEHOLDER 1 */}
          <div className="text-center md:px-6 pt-6 md:pt-0" id="result-stat-1">
            <span className="block font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-primary tracking-tight mb-2">
              ${pipelineCount}M+
            </span>
            <span className="block text-xs uppercase tracking-widest text-gray-500 font-mono">
              Pipeline Influenced
            </span>
            <span className="block text-[11px] text-gray-500 mt-1 italic">
              *Directly tracked via client CRM hub audits
            </span>
          </div>

          {/* PLACEHOLDER 2 */}
          <div className="text-center md:px-6 pt-6 md:pt-0" id="result-stat-2">
            <span className="block font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-primary tracking-tight mb-2">
              {growthPercent}%
            </span>
            <span className="block text-xs uppercase tracking-widest text-gray-500 font-mono">
              Avg. revenue growth from search
            </span>
            <span className="block text-[11px] text-gray-500 mt-1 italic">
              *Year-over-year organic &amp; paid compounding
            </span>
          </div>

          {/* PLACEHOLDER 3 */}
          <div className="text-center md:px-6 pt-6 md:pt-0" id="result-stat-3">
            <span className="block font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-primary tracking-tight mb-2">
              {brandsCount}+
            </span>
            <span className="block text-xs uppercase tracking-widest text-gray-500 font-mono">
              B2B Brands Scaled
            </span>
            <span className="block text-[11px] text-gray-500 mt-1 italic">
              *SaaS, Enterprise Cybersecurity &amp; IT MSPs
            </span>
          </div>

        </div>
      </section>

      {/* SECTION 5: The AI Search Shift (Signature Section) */}
      <section id="ai-shift" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="ai-shift-header">
          <div className="inline-block px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-primary/20">
            The New Search landscape
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            Your buyers research in Google, ChatGPT, and Perplexity — <span className="text-brand-primary">before they ever contact you.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Standard SEO rankings are no longer enough. B2B software and service decisions now rely heavily on conversational AI search shortlists. Here is how buyers find answers:
          </p>
        </div>

        {/* Three Columns comparing SEO, PPC, GEO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="ai-shift-grid">

          {/* Column 1: SEO */}
          <div className="bg-brand-card rounded-xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition" id="shift-card-seo">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase text-gray-500 tracking-wider">SEO — Organic</span>
                <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-[10px] font-mono rounded font-bold border border-blue-500/20">Google index</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">Targeting Intent Keywords</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Capturing buyers looking specifically for guides, calculators, and solutions on primary search result pages.
              </p>

              <div className="bg-zinc-950 p-4 rounded border border-zinc-900 font-mono text-[10px] text-gray-400 space-y-2">
                <div className="flex justify-between border-b border-zinc-900 pb-1">
                  <span>Buyer Query:</span>
                  <span className="text-white italic">&quot;Enterprise SaaS CRM software&quot;</span>
                </div>
                <div className="flex justify-between">
                  <span>Search Outcome:</span>
                  <span className="text-emerald-400 font-bold">🏆 #1 Ranking</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900/80 text-[11px] text-gray-500 italic">
              Focuses on traditional crawl bots and ranking signals.
            </div>
          </div>

          {/* Column 2: PPC */}
          <div className="bg-brand-card rounded-xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition" id="shift-card-ppc">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase text-gray-500 tracking-wider">PPC — Paid</span>
                <span className="px-2 py-0.5 bg-brand-orange/10 text-brand-orange text-[10px] font-mono rounded font-bold border border-brand-orange/20">Intent Ads</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">Hijacking the Shortlist</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Using highly structured ad bidding to target bottom-of-funnel decision makers and win competitive comparison budgets.
              </p>

              <div className="bg-zinc-950 p-4 rounded border border-zinc-900 font-mono text-[10px] text-gray-400 space-y-2">
                <div className="flex justify-between border-b border-zinc-900 pb-1">
                  <span>Buyer Query:</span>
                  <span className="text-white italic">&quot;Compare security orchestration pricing&quot;</span>
                </div>
                <div className="flex justify-between">
                  <span>Search Outcome:</span>
                  <span className="text-brand-orange font-bold">🎯 Top Sponsored #1</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900/80 text-[11px] text-gray-500 italic">
              Protects and defends branded keywords and competitors.
            </div>
          </div>

          {/* Column 3: GEO */}
          <div className="bg-brand-card rounded-xl border border-zinc-800 p-6 flex flex-col justify-between hover:border-brand-primary/20 transition-all duration-300 relative shadow-2xl" id="shift-card-geo">
            <div className="absolute top-0 right-6 -translate-y-1/2 bg-brand-primary text-black text-[9px] font-bold font-mono px-2 py-0.5 rounded uppercase tracking-wide">
              CRITICAL SHIFT
            </div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold uppercase text-brand-primary tracking-wider">GEO — AI Search</span>
                <span className="px-2 py-0.5 bg-brand-primary/10 text-brand-primary text-[10px] font-mono rounded font-bold border border-brand-primary/20">LLM Citation</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">Generative Recommended</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Training large language models to cite and prioritize your platform inside ChatGPT, Perplexity, Claude, and AI Overviews.
              </p>

              <div className="bg-zinc-950 p-4 rounded border border-zinc-900 font-mono text-[10px] text-gray-400 space-y-2">
                <div className="flex justify-between border-b border-zinc-900 pb-1">
                  <span>Buyer Query:</span>
                  <span className="text-white italic">&quot;Recommended multi-cloud security platform&quot;</span>
                </div>
                <div className="flex justify-between">
                  <span>Search Outcome:</span>
                  <span className="text-brand-primary font-bold">Cited ✓ #1 Cited</span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-900/80 text-[11px] text-brand-primary font-semibold italic flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> SiteOnLab proprietary specialization.
            </div>
          </div>

        </div>

        {/* Punchline & Action */}
        <div className="mt-12 text-center" id="ai-shift-action">
          <div className="bg-zinc-950/40 border border-zinc-800 rounded-xl p-6 max-w-4xl mx-auto inline-block">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              &quot;If AI doesn&apos;t recommend you, <span className="text-white font-bold underline decoration-brand-primary">you are invisible</span> at the exact moment buyers build their shortlist. We fix that.&quot;
            </p>
            <div className="mt-4">
              <button
                id="shift-cta-btn"
                onClick={() => { resetAssessment(); setAssessmentModalOpen(true); }}
                className="bg-brand-primary hover:bg-cyan-400 text-black px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition inline-flex items-center gap-2 cursor-pointer"
              >
                Take the AI Visibility Assessment <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 6: Trust / Logo Bar */}
      <section id="logos" className="bg-zinc-950/50 py-12 border-b border-zinc-900 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-mono font-bold mb-8">
            Trusted by growth-stage B2B enterprise teams
          </p>

          {/* Row of 6 grayscale mock logos (constructed with pure HTML/Tailwind for crisp vector presentation) */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-40 hover:opacity-60 transition-all duration-300" id="logos-row">

            <div className="flex items-center gap-1.5 font-display font-semibold text-sm tracking-tight text-white" id="logo-1">
              <Shield className="w-4 h-4 text-gray-400" />
              <span>Intellect<span className="font-bold text-gray-400">Sec</span></span>
            </div>

            <div className="flex items-center gap-1 font-sans font-black text-sm uppercase tracking-wider text-white" id="logo-2">
              <Layers className="w-3.5 h-3.5 text-gray-400" />
              <span>CloudScale</span>
            </div>

            <div className="flex items-center gap-1.5 font-display font-extrabold text-sm tracking-wide text-white" id="logo-3">
              <Cpu className="w-4 h-4 text-gray-400" />
              <span>Apex<span className="text-gray-400">Systems</span></span>
            </div>

            <div className="flex items-center gap-1 font-mono text-xs text-white" id="logo-4">
              <span>[</span>
              <span className="font-bold tracking-widest">SaaSify</span>
              <span>]</span>
            </div>

            <div className="flex items-center gap-1.5 font-sans font-bold text-sm tracking-tight text-white" id="logo-5">
              <span className="w-2 h-2 rounded-full bg-gray-400" />
              <span>Optima<span className="font-light text-gray-400">IT</span></span>
            </div>

            <div className="flex items-center gap-1 font-display font-black text-base tracking-widest text-white" id="logo-6">
              <span>SYNC</span>
              <span className="text-gray-400 font-light">PRO</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: Problem Agitation — "Sound familiar?" */}
      <section id="problems" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="problems-header">
          <div className="inline-block px-2.5 py-1 bg-brand-orange/10 text-brand-orange rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-orange/20">
            Pipeline Agitation
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            Behind every missed pipeline target is one of these problems.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            Many B2B companies find themselves generating vanity metrics instead of closed revenue. Do any of these match your current operations?
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="problems-grid">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.id}
              id={`problem-card-${item.id}`}
              className="bg-brand-card rounded-xl border border-zinc-800/80 p-6 md:p-8 hover:border-zinc-700 transition duration-300 relative overflow-hidden group"
            >
              {/* Highlight bar inside card */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-orange opacity-40 group-hover:opacity-100 transition" />

              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-orange bg-brand-orange/10 px-2 py-1 rounded self-start border border-brand-orange/10">
                  Problem {item.id}
                </span>

                <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                  &quot;{item.pain}&quot;
                </h3>

                <div className="bg-zinc-950/80 rounded-lg p-4 border border-zinc-900 flex items-start gap-3 mt-2">
                  <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-brand-primary font-bold">The SiteOnLab Solution</span>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 8: What We Do (Services) */}
      <section id="services" className="py-16 sm:py-24 md:py-32 bg-zinc-950/30 border-b border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="services-header">
            <div>
              <div className="inline-block px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-primary/20">
                Core Offerings
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
                AI-first. Revenue-obsessed. <span className="text-brand-primary">Built for B2B.</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-md leading-relaxed">
              We replace standard fragmented marketing tactics with a unified search-to-revenue machine powered by modern LLM engineering.
            </p>
          </div>

          {/* Five Numbered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`bg-brand-card rounded-xl border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-brand-primary/30 transition-all duration-300 relative group ${
                  index === 0 ? "md:col-span-2 lg:col-span-1 border-brand-primary/10 shadow-lg shadow-brand-primary/5" : ""
                }`}
              >
                <div>
                  {/* Top identifier */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-display font-black text-zinc-800 font-mono group-hover:text-brand-primary transition">
                      0{service.id}
                    </span>
                    <div className="p-2.5 bg-zinc-950 rounded-lg border border-zinc-800 group-hover:border-brand-primary/20 transition">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-3 font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Details Bullet points */}
                  <div className="space-y-2 border-t border-zinc-900 pt-4" id={`service-bullets-${service.id}`}>
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 font-sans">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trigger button inside card */}
                <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between">
                  <button
                    onClick={() => { resetBooking(); setBookingModalOpen(true); }}
                    className="text-xs text-gray-400 hover:text-brand-primary flex items-center gap-1 font-semibold tracking-wide cursor-pointer uppercase transition-colors"
                  >
                    Discuss Campaign <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="mt-12 text-center" id="services-cta">
            <button
              id="explore-services-cta"
              onClick={() => { resetBooking(); setBookingForm(prev => ({ ...prev, spend: "$10,000 - $25,000 /mo" })); setBookingModalOpen(true); }}
              className="bg-brand-primary hover:bg-cyan-400 text-black px-8 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase transition cursor-pointer"
            >
              Explore Services
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 9: The Revenue Growth Framework (Methodology) */}
      <section id="framework" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="framework-header">
          <div className="inline-block px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-primary/20">
            Our Playbook
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            A methodology built for compounding revenue growth.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            We don&apos;t guess. We deploy a systematic 4-stage deployment roadmap designed to expose visibility leaks, construct targeted shortlists, and tie leads directly to pipelines.
          </p>
        </div>

        {/* Horizontal steps flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" id="framework-steps-flow">

          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-zinc-800 z-0" />

          {FRAMEWORK_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              id={`framework-step-${step.stepNumber}`}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left bg-brand-card/20 md:bg-transparent rounded-xl border border-zinc-800/40 md:border-transparent p-5 md:p-0"
            >
              {/* Number head */}
              <div className="w-14 h-14 rounded-full bg-zinc-950 border-2 border-brand-primary flex items-center justify-center text-brand-primary font-display font-black text-xl shadow-lg shadow-brand-primary/10 mb-6">
                0{step.stepNumber}
              </div>

              {/* Step info */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-display">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center" id="framework-action">
          <button
            id="framework-cta-btn"
            onClick={() => { resetBooking(); setBookingModalOpen(true); }}
            className="bg-brand-primary hover:bg-cyan-400 text-black px-8 py-4 rounded-xl text-xs md:text-sm font-bold tracking-wider uppercase transition cursor-pointer"
          >
            Book a Strategy Call
          </button>
        </div>

      </section>

      {/* SECTION 10: Industry Expertise */}
      <section id="industries" className="py-16 sm:py-24 md:py-32 bg-zinc-950/20 border-b border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-16" id="industries-header">
            <div className="inline-block px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-primary/20">
              ICP Specialization
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
              Built for SaaS, tech, IT/MSP, cybersecurity, professional services &amp; industrials.
            </h2>
            <p className="text-sm text-gray-400 mt-4">
              We specialize in complex, multi-buyer committee markets. Click an industry below to see how we align search to their specific buyer journey:
            </p>
          </div>

          {/* Clickable industry tiles split layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="industries-grid">

            {/* Left Column: Six tiles */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" id="industries-tiles">
              {INDUSTRIES_DATA.map((ind) => (
                <button
                  key={ind.id}
                  id={`ind-btn-${ind.id}`}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`p-5 rounded-xl border text-left transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    selectedIndustry === ind.id
                      ? "bg-brand-card border-brand-primary shadow-lg shadow-brand-primary/5 text-white"
                      : "bg-brand-card/40 border-zinc-900 text-gray-400 hover:text-white hover:border-zinc-800"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border ${
                    selectedIndustry === ind.id
                      ? "bg-brand-primary/10 border-brand-primary/30 text-brand-primary"
                      : "bg-zinc-950 border-zinc-800 text-gray-500"
                  }`}>
                    {getIcon(ind.iconName)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base font-display text-white mb-1">
                      {ind.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-gray-400 line-clamp-2">
                      {ind.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Column: Highlight Box details based on active state */}
            <div className="lg:col-span-5 bg-brand-card border border-zinc-800 p-6 md:p-8 rounded-xl shadow-2xl relative" id="industries-active-panel">
              {(() => {
                const activeInd = INDUSTRIES_DATA.find(i => i.id === selectedIndustry) || INDUSTRIES_DATA[0];
                return (
                  <div className="flex flex-col gap-6" id={`ind-detail-${activeInd.id}`}>
                    <div className="flex items-center gap-3 pb-4 border-b border-zinc-900">
                      <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-xl border border-brand-primary/20">
                        {getIcon(activeInd.iconName)}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase text-brand-primary tracking-widest">Active Specialization</span>
                        <h4 className="text-lg font-bold font-display text-white">{activeInd.title}</h4>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs uppercase tracking-wider text-gray-500 font-mono font-bold mb-2">Our Strategic Objective:</h5>
                      <p className="text-sm text-gray-300 leading-relaxed font-sans">
                        {activeInd.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h5 className="text-xs uppercase tracking-wider text-gray-500 font-mono font-bold">Standard Campaign Focus:</h5>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span>Buyer Persona Committee Alignment &amp; Trust mapping</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span>Technical documentation schema, semantic indexing SEO</span>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-300">
                          <Check className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span>Active Generative Engine Optimization (GEO) source citation training</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-900 flex justify-between items-center">
                      <span className="text-xs text-gray-500 font-mono">Ready to scale?</span>
                      <button
                        onClick={() => { resetBooking(); setBookingForm(prev => ({ ...prev, spend: "$10,000 - $25,000 /mo" })); setBookingModalOpen(true); }}
                        className="text-xs font-bold text-brand-primary hover:underline cursor-pointer flex items-center gap-1 uppercase"
                      >
                        Request GTM Audit <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 11: Case Studies */}
      <section id="case-studies" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-zinc-900">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16" id="case-studies-header">
          <div className="inline-block px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-primary/20">
            Proven revenue
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            Real results across B2B.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed">
            We measure our relationships in terms of commercial pipeline and ARR growth. Review our latest partner highlights:
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="case-studies-grid">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              id={`case-card-${cs.id}`}
              className="bg-brand-card rounded-xl border border-zinc-800/80 p-6 flex flex-col justify-between hover:border-zinc-700 transition group h-full"
            >
              <div>
                {/* Sector tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-2 py-1 rounded border border-brand-primary/20">
                    {cs.sector}
                  </span>
                  <Award className="w-4 h-4 text-gray-500 group-hover:text-brand-primary transition" />
                </div>

                {/* Big Metric (Editable Placeholder) */}
                <div className="mb-4">
                  <span className="block font-display font-black text-4xl sm:text-5xl text-brand-primary tracking-tight">
                    {cs.metric}
                  </span>
                  <span className="block text-[11px] uppercase tracking-wider font-mono text-gray-500 font-bold mt-1">
                    {cs.metricLabel}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 font-display leading-snug">
                  {cs.title}
                </h3>

                {/* Results summary details */}
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {cs.resultsDetail}
                </p>
              </div>

              {/* Read Full Case Study link */}
              <div className="mt-8 pt-4 border-t border-zinc-900">
                <button
                  onClick={() => { resetBooking(); setBookingModalOpen(true); }}
                  className="text-xs text-gray-400 hover:text-brand-primary font-bold tracking-wide uppercase flex items-center gap-1 transition cursor-pointer"
                >
                  Read full case study <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-brand-primary" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 12: Why It Works (Proof Points) */}
      <section id="why-works" className="py-16 sm:py-24 md:py-32 bg-zinc-950/30 border-b border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="why-works-grid">

          {/* Left Column: Concept details */}
          <div className="lg:col-span-7 flex flex-col gap-6" id="why-works-content">
            <div>
              <div className="inline-block px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-primary/20">
                The SiteOnLab Edge
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
                Why it works.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
              We aren&apos;t generalist marketing generalists who deliver generic reports on traffic fluctuations. We are technical Growth Engineers who treat search visibility as a financial pipeline.
            </p>

            <div className="space-y-4" id="why-works-points">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-primary flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-display mb-1">Specialists, not generalists</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    Our team contains technical SEO architects, certified PPC analysts, and LLM training engineers. We specialize exclusively in enterprise B2B buying logic.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-primary flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-display mb-1">Executive-level reporting tied to revenue</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    Forget vanity reports. We connect campaign tracking to CRM fields (HubSpot/Salesforce) so you see exactly how many SQLs, SQL values, and closed wins correspond to individual queries.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-primary flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white font-display mb-1">AI-accelerated execution</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                    We use custom AI prompting workflows and structural schema engines to map, test, and deploy content 4x faster than manual agencies without sacrificing accuracy or technical quality.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                id="why-works-cta"
                onClick={() => { resetBooking(); setBookingModalOpen(true); }}
                className="bg-brand-primary hover:bg-cyan-400 text-black px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition cursor-pointer"
              >
                Meet the Team
              </button>
            </div>
          </div>

          {/* Right Column: Workforce Graphic Placeholder */}
          <div className="lg:col-span-5 bg-brand-card border border-zinc-800 p-6 rounded-xl flex flex-col justify-center gap-6 relative overflow-hidden" id="why-works-visual">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />

            <div className="text-center pb-4 border-b border-zinc-900">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 font-bold mb-1">Operations Hub</span>
              <h4 className="text-sm font-bold font-display text-white">SiteOnLab Core Growth Engineers</h4>
            </div>

            {/* Simulated Team Active Status Matrix */}
            <div className="space-y-3" id="team-status-matrix">
              <div className="flex items-center justify-between text-xs bg-zinc-950 p-3 rounded border border-zinc-900">
                <span className="text-gray-400">SEO &amp; GEO Architecture</span>
                <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active Deploy
                </span>
              </div>
              <div className="flex items-center justify-between text-xs bg-zinc-950 p-3 rounded border border-zinc-900">
                <span className="text-gray-400">Demand Gen &amp; Paid Media</span>
                <span className="font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 100% Capacity
                </span>
              </div>
              <div className="flex items-center justify-between text-xs bg-zinc-950 p-3 rounded border border-zinc-900">
                <span className="text-gray-400">Marketing &amp; CRM Automation</span>
                <span className="font-mono text-brand-primary font-bold">Optimizing</span>
              </div>
            </div>

            <div className="bg-brand-primary/5 rounded p-4 border border-brand-primary/10 text-center text-xs text-gray-400 leading-relaxed font-sans">
              &quot;SiteOnLab combines executive engineering rigor with rapid marketing execution, allowing us to hit aggressive pipelines comfortably.&quot;
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 13: FAQ (Accordion) */}
      <section id="faq" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-zinc-900">

        {/* Section header */}
        <div className="text-center mb-16" id="faq-header">
          <div className="inline-block px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-primary/20">
            Common Inquiries
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
            What leaders ask us before they engage.
          </h2>
          <p className="text-sm text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have questions about Generative Engine Optimization or pipeline tracking? We believe in transparent answers.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-4" id="faq-accordions">
          {FAQS_DATA.map((faq) => (
            <div
              key={faq.id}
              id={`faq-item-${faq.id}`}
              className="bg-brand-card rounded-lg border border-zinc-800 overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                className="w-full text-left p-5 flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-brand-primary font-display cursor-pointer focus:outline-none transition-colors"
              >
                <span>{faq.question}</span>
                {activeFaq === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {activeFaq === faq.id && (
                <div className="p-5 pt-0 border-t border-zinc-900 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans bg-zinc-950/40">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 14: Insights / Blog Teaser */}
      <section id="insights" className="py-16 sm:py-24 md:py-32 bg-zinc-950/10 border-b border-zinc-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" id="insights-header">
            <div>
              <div className="inline-block px-2.5 py-1 bg-brand-primary/10 text-brand-primary rounded font-mono text-[10px] uppercase font-bold tracking-wider mb-4 border border-brand-primary/20">
                Industry Intel
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">
                Staying ahead of B2B search — <span className="text-brand-primary">so you don&apos;t have to.</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              We regularly publish tactical blueprints concerning generative engine rankings, CAC reduction, and enterprise positioning.
            </p>
          </div>

          {/* Three blog cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8" id="blog-grid">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                id={`blog-card-${post.id}`}
                className="bg-brand-card rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition flex flex-col justify-between overflow-hidden group h-full"
              >
                <div className="p-6">
                  {/* Category & Date metadata */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 font-bold mb-4">
                    <span>{post.category}</span>
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 font-display group-hover:text-brand-primary transition leading-snug">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                {/* Bottom link & read time */}
                <div className="p-6 pt-4 border-t border-zinc-900 bg-zinc-950/20 flex items-center justify-between text-[11px]">
                  <span className="text-gray-500 font-mono">{post.readTime}</span>
                  <button
                    onClick={() => { resetBooking(); setBookingModalOpen(true); }}
                    className="text-brand-primary font-bold group-hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Section CTA */}
          <div className="mt-12 text-center" id="insights-cta">
            <button
              id="read-blog-cta-btn"
              onClick={() => { resetBooking(); setBookingModalOpen(true); }}
              className="bg-brand-primary hover:bg-cyan-400 text-black px-8 py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase transition cursor-pointer"
            >
              Read the Blog
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 15: Final CTA (Full-width, accent background) */}
      <section id="book-a-call" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center bg-brand-card border-b border-zinc-900">

        {/* Background glow overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-6" id="final-cta-container">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full border border-brand-primary/20" id="final-cta-badge">
            <Calendar className="w-4 h-4 text-brand-primary" />
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-wide uppercase">30-Minute Growth Strategy Session</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white leading-[1.15]" id="final-cta-title">
            Ready to build a revenue engine that scales?
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed font-sans" id="final-cta-subtitle">
            Book a 30-minute strategy call. We&apos;ll assess your search and AI presence, show you exactly where the pipeline leaks are, and map a realistic growth trajectory — before you commit to anything.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4" id="final-cta-buttons">
            <button
              id="final-primary-cta"
              onClick={() => { resetBooking(); setBookingModalOpen(true); }}
              className="bg-brand-primary hover:bg-cyan-400 text-black px-8 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/30 cursor-pointer"
            >
              Book a Strategy Call
            </button>
            <button
              id="final-secondary-cta"
              onClick={() => { resetAssessment(); setAssessmentModalOpen(true); }}
              className="bg-brand-card-light hover:bg-zinc-800 text-white border border-zinc-700 px-6 py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              Take the AI Visibility Assessment
            </button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-[11px] font-mono text-gray-500" id="final-cta-assurances">
            <span>No sales pressure</span>
            <span>•</span>
            <span>Custom findings report included</span>
            <span>•</span>
            <span>Direct partner-level advice</span>
          </div>
        </div>
      </section>


      {/* CONVERSION OVERLAY 1: INTERACTIVE BOOKING MODAL */}
      {bookingModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" id="booking-modal-overlay">
          <div className="bg-brand-card border border-zinc-800 rounded-2xl w-full max-w-lg p-6 md:p-8 relative shadow-2xl overflow-hidden animate-fade-in-up" id="booking-modal-container">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingForm.completed ? (
              <form onSubmit={processBooking} className="space-y-4" id="booking-form">
                <div className="text-center pb-4 border-b border-zinc-900">
                  <Calendar className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white font-display">Schedule Your Strategy Session</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Select a slot below to outline your 30-minute B2B growth roadmap.
                  </p>
                </div>

                {/* Form fields */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Business Email</label>
                      <input
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Company Website</label>
                      <input
                        type="url"
                        required
                        value={bookingForm.website}
                        onChange={(e) => setBookingForm({ ...bookingForm, website: e.target.value })}
                        placeholder="https://company.com"
                        className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Preferred Day</label>
                      <select
                        value={bookingForm.day}
                        onChange={(e) => setBookingForm({ ...bookingForm, day: e.target.value })}
                        className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-300"
                      >
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Preferred Time</label>
                      <select
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-300"
                      >
                        <option>9:00 AM EST</option>
                        <option>11:30 AM EST</option>
                        <option>2:00 PM EST</option>
                        <option>4:15 PM EST</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Estimated Monthly Marketing Budget</label>
                    <select
                      value={bookingForm.spend}
                      onChange={(e) => setBookingForm({ ...bookingForm, spend: e.target.value })}
                      className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-300"
                    >
                      <option value="">Select range...</option>
                      <option>$5,000 - $10,000 /mo</option>
                      <option>$10,000 - $25,000 /mo</option>
                      <option>$25,000 - $50,000 /mo</option>
                      <option>$50,000+ /mo</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  id="booking-submit-btn"
                  className="bg-brand-primary hover:bg-cyan-400 text-black w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition cursor-pointer mt-4"
                >
                  Confirm Meeting Slot
                </button>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4" id="booking-confirmation">
                <CheckCircle className="w-16 h-16 text-brand-primary mx-auto animate-pulse" />
                <h3 className="text-2xl font-bold text-white font-display">Meeting Confirmed!</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                  Excellent, <strong className="text-brand-primary">{bookingForm.name}</strong>. We have saved your slot for <strong className="text-white">{bookingForm.day} at {bookingForm.time}</strong>. An email calendar invite containing meeting links has been dispatched.
                </p>
                <p className="text-[11px] text-gray-500 italic">
                  A SiteOnLab strategic partner will review your business presence beforehand. See you soon!
                </p>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="mt-6 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white px-6 py-2.5 rounded-lg text-xs font-mono cursor-pointer"
                >
                  Return to Homepage
                </button>
              </div>
            )}
          </div>
        </div>
      )}


      {/* CONVERSION OVERLAY 2: INTERACTIVE AI VISIBILITY ASSESSMENT DIAGNOSTIC WIZARD */}
      {assessmentModalOpen && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4" id="assessment-modal-overlay">
          <div className="bg-brand-card border border-zinc-800 rounded-2xl w-full max-w-xl p-6 md:p-8 relative shadow-2xl overflow-hidden animate-fade-in-up" id="assessment-modal-container">
            <button
              onClick={() => setAssessmentModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
              aria-label="Close Assessment"
            >
              <X className="w-5 h-5" />
            </button>

            {/* HEADER */}
            <div className="pb-4 border-b border-zinc-900 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-brand-primary animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">AI Visibility assessment</span>
              </div>
              <span className="text-xs font-mono text-gray-500">
                {assessmentStep <= 5 ? `Question ${assessmentStep} of 5` : "Assessment Complete"}
              </span>
            </div>

            {/* STEP 1: INDUSTRY */}
            {assessmentStep === 1 && (
              <div className="space-y-6" id="assessment-step-1">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">What is your primary commercial sector?</h3>
                  <p className="text-xs text-gray-400">SiteOnLab strategies are optimized for specialized B2B committee markets.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["B2B SaaS / Software", "IT Services / MSPs", "Cybersecurity", "Professional Services", "Manufacturing / Industrial", "Other B2B Sector"].map((sector) => (
                    <button
                      key={sector}
                      onClick={() => {
                        setAssessmentAnswers({ ...assessmentAnswers, industry: sector });
                        setAssessmentStep(2);
                      }}
                      className="p-3.5 bg-zinc-950/60 hover:bg-zinc-950 border border-zinc-800 hover:border-brand-primary rounded-xl text-left text-xs text-gray-300 font-semibold cursor-pointer transition"
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: CITED */}
            {assessmentStep === 2 && (
              <div className="space-y-6" id="assessment-step-2">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">Do you know if your brand is cited when buyers ask ChatGPT or Perplexity for solutions like yours?</h3>
                  <p className="text-xs text-gray-400">Conversational search recommendations build immediate trust before direct sales contacts.</p>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { val: "Yes, we are consistently cited", desc: "Our brand gets named regularly in comparative LLM prompts." },
                    { val: "We show up occasionally", desc: "We are mentioned sometimes, but often lose citations to competitors." },
                    { val: "No, we are invisible", desc: "AI engines consistently fail to recommend our software/services." },
                    { val: "Unsure / Haven't tested", desc: "We have not run diagnostic analysis on AI search databases." }
                  ].map((option) => (
                    <button
                      key={option.val}
                      onClick={() => {
                        setAssessmentAnswers({ ...assessmentAnswers, cited: option.val });
                        setAssessmentStep(3);
                      }}
                      className="p-4 bg-zinc-950/60 hover:bg-zinc-950 border border-zinc-800 hover:border-brand-primary rounded-xl text-left cursor-pointer transition"
                    >
                      <span className="block text-xs font-bold text-white mb-0.5">{option.val}</span>
                      <span className="block text-[10px] text-gray-500 font-mono">{option.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: PIPELINE BOTTLENECK */}
            {assessmentStep === 3 && (
              <div className="space-y-6" id="assessment-step-3">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">What is your primary commercial pipeline bottleneck?</h3>
                  <p className="text-xs text-gray-400">Help us understand where your current search investment is leaking value.</p>
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    "Low organic search visibility &amp; traffic",
                    "We get traffic — but it doesn&apos;t convert to pipeline or leads",
                    "Our agency delivers reports but cannot prove CRM ROI",
                    "Marketing sends leads, but sales struggles to close them"
                  ].map((bottleneck) => (
                    <button
                      key={bottleneck}
                      onClick={() => {
                        setAssessmentAnswers({ ...assessmentAnswers, bottleneck: bottleneck });
                        setAssessmentStep(4);
                      }}
                      className="p-4 bg-zinc-950/60 hover:bg-zinc-950 border border-zinc-800 hover:border-brand-primary rounded-xl text-left text-xs text-gray-300 font-semibold cursor-pointer transition"
                    >
                      {bottleneck.replace("&amp;", "&").replace("&apos;", "'")}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: GROWTH TARGET */}
            {assessmentStep === 4 && (
              <div className="space-y-6" id="assessment-step-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">What is your target annual revenue growth rate?</h3>
                  <p className="text-xs text-gray-400">This helps us scale realistic traffic acquisition and conversion campaigns.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["20% - 50% YoY", "50% - 100% YoY", "100%+ (Hyper-scale)", "Stabilizing / Solidifying market"].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => {
                        setAssessmentAnswers({ ...assessmentAnswers, growthRate: rate });
                        setAssessmentStep(5);
                      }}
                      className="p-4 bg-zinc-950/60 hover:bg-zinc-950 border border-zinc-800 hover:border-brand-primary rounded-xl text-center text-xs text-gray-300 font-semibold cursor-pointer transition"
                    >
                      {rate}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5: LEAD CAPTURE */}
            {assessmentStep === 5 && (
              <form onSubmit={processAssessment} className="space-y-4" id="assessment-lead-form">
                <div>
                  <h3 className="text-lg font-bold text-white font-display mb-1">Who should we send this report to?</h3>
                  <p className="text-xs text-gray-400">Our diagnostic algorithm is compiling your customized AI Search Visibility Score.</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={assessmentAnswers.name}
                      onChange={(e) => setAssessmentAnswers({ ...assessmentAnswers, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Business Email</label>
                    <input
                      type="email"
                      required
                      value={assessmentAnswers.email}
                      onChange={(e) => setAssessmentAnswers({ ...assessmentAnswers, email: e.target.value })}
                      placeholder="jane@enterprise.com"
                      className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-1">Company Website URL</label>
                    <input
                      type="url"
                      required
                      value={assessmentAnswers.website}
                      onChange={(e) => setAssessmentAnswers({ ...assessmentAnswers, website: e.target.value })}
                      placeholder="https://enterprise.com"
                      className="w-full bg-zinc-950 rounded-lg p-2.5 border border-zinc-800 text-xs focus:outline-none focus:border-brand-primary text-gray-200"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  id="assessment-submit-btn"
                  className="bg-brand-primary hover:bg-cyan-400 text-black w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition cursor-pointer mt-4"
                >
                  Generate AI Visibility Score
                </button>
              </form>
            )}

            {/* STEP 6: CUSTOMIZED RESULTS CARD */}
            {assessmentStep === 6 && (
              <div className="space-y-6 text-center py-4" id="assessment-report">
                <div className="w-24 h-24 rounded-full border-4 border-dashed border-red-500 flex items-center justify-center mx-auto bg-red-500/15 animate-pulse">
                  <span className="font-display font-black text-2xl text-red-400">{assessmentScore}%</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                    Visibility Rating: Vulnerable
                  </span>
                  <h3 className="text-xl font-bold font-display text-white mt-3">Critical Visibility Leak Detected</h3>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed mt-1">
                    Based on your answers, your brand is highly invisible to conversational AI buying pools (ChatGPT/Perplexity), resulting in high organic shortlist leakage.
                  </p>
                </div>

                {/* Score breakdown metrics details */}
                <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-900 text-left space-y-2.5 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                    <span className="text-gray-400 font-mono">Target Market Sector</span>
                    <span className="text-white font-bold">{assessmentAnswers.industry}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                    <span className="text-gray-400 font-mono">AI Engine Citations Status</span>
                    <span className="text-red-400 font-semibold">{assessmentAnswers.cited}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-mono">Top Strategic Leak</span>
                    <span className="text-brand-primary font-bold">GEO Citation Gap</span>
                  </div>
                </div>

                <div className="bg-brand-primary/5 rounded-lg p-3.5 border border-brand-primary/20 text-xs text-gray-300 leading-relaxed font-sans">
                  🚀 <strong className="text-brand-primary">Our Recommendation:</strong> Traditional keyword mapping is failing your GTM pipeline. Let&apos;s trace these leaks on a live 30-minute review call. We will pre-generate a technical database audit for your website.
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 justify-center">
                  <button
                    onClick={triggerBookingWithAssessment}
                    id="assessment-booking-cta"
                    className="bg-brand-primary hover:bg-cyan-400 text-black px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 w-full sm:w-auto cursor-pointer"
                  >
                    Schedule Audit Review Call
                  </button>
                  <button
                    onClick={resetAssessment}
                    className="text-xs text-gray-400 hover:text-white cursor-pointer"
                  >
                    Restart Assessment
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
