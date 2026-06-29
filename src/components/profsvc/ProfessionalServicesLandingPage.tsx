"use client";

import { useState } from "react";
import {
  Search,
  Cpu,
  Globe,
  BookOpen,
  Megaphone,
  TrendingUp,
  Zap,
  Sliders,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Check,
  CheckCircle,
} from "lucide-react";

import {
  CHALLENGES,
  SOLUTIONS,
  BUYER_JOURNEY,
  PROCESS_STEPS,
  DIFFERENTIATORS,
  SERVICES,
  CASE_STUDIES,
  TESTIMONIAL,
  RELATED_INDUSTRIES,
  FAQS,
  SEO_METADATA,
} from "./data/copyData";

import MarketingGraphic from "./components/MarketingGraphic";
import GrowthBlueprintForm from "./components/GrowthBlueprintForm";

export default function ProfessionalServicesLandingPage() {
  // FAQ interactive state
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // Journey stage interactive state
  const [selectedJourneyStage, setSelectedJourneyStage] = useState<number>(0);

  // Scroll to helper
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Icon mapper helper
  const renderIcon = (iconName: string, className: string = "w-5 h-5") => {
    switch (iconName) {
      case "Search": return <Search className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "Globe": return <Globe className={className} />;
      case "BookOpen": return <BookOpen className={className} />;
      case "Megaphone": return <Megaphone className={className} />;
      case "TrendingUp": return <TrendingUp className={className} />;
      case "Zap": return <Zap className={className} />;
      case "Sliders": return <Sliders className={className} />;
      default: return <Check className={className} />;
    }
  };

  return (
    <div className="theme-profsvc min-h-screen bg-[#0F172A] flex flex-col text-slate-200 selection:bg-sky-500/20 selection:text-sky-200 font-sans">

      {/* LIVE DESIGNED PREVIEW FLAGSHIP PAGE */}
      <div className="flex-1 flex flex-col">

        {/* ========================================================== */}
        {/* 1. HERO SECTION */}
        {/* ========================================================== */}
        <section id="hero-section" className="bg-[#0F172A] text-white py-16 md:py-24 relative overflow-hidden">
          {/* Soft decorative blur nodes */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left side: Copy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full text-xs text-sky-400 font-semibold font-mono uppercase tracking-wider">
                  Industries <ChevronRight className="w-3 h-3 text-sky-400 inline" /> Professional Services
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white tracking-tight">
                  {SEO_METADATA.h1}
                </h1>

                <p className="text-slate-350 text-sm sm:text-base leading-relaxed max-w-xl">
                  Turn your firm’s elite reputation and advisory expertise into an active, predictable business acquisition engine. We help leading consultancies, corporate law networks, and expert advisors capture enterprise buyers through a unified growth strategy—merging high-intent organic visibility, account-based ads, and authority website architectures.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                  <button
                    id="btn-hero-primary-cta"
                    onClick={() => scrollToElement("blueprint-form")}
                    className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-bold rounded-xl shadow-lg shadow-sky-500/15 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Request a Growth Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    id="btn-hero-secondary-cta"
                    onClick={() => scrollToElement("case-studies")}
                    className="px-6 py-3 bg-slate-900/60 hover:bg-slate-900 text-slate-200 border border-white/10 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>See Case Studies</span>
                  </button>
                </div>
              </div>

              {/* Right side: Modern Unified Marketing Graphic */}
              <div className="lg:col-span-6">
                <MarketingGraphic />
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* 2. TRUST & CREDIBILITY SECTION */}
        {/* ========================================================== */}
        <section id="trust-metrics" className="bg-slate-950/40 border-y border-white/5 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

              <div className="border-r border-white/5 last:border-0 pr-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-sky-400 tracking-tight">$180M+</div>
                <p className="text-xs text-slate-400 mt-1 font-sans">Pipeline Generated</p>
              </div>

              <div className="border-r border-white/5 last:border-0 pr-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-sky-400 tracking-tight">14.2x</div>
                <p className="text-xs text-slate-400 mt-1 font-sans">Average Practice ROI</p>
              </div>

              <div className="border-r border-white/5 last:border-0 pr-2">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-sky-400 tracking-tight">100%</div>
                <p className="text-xs text-slate-400 mt-1 font-sans">B2B Specialist Focus</p>
              </div>

              <div className="border-r border-white/5 last:border-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-sky-400 tracking-tight">82%</div>
                <p className="text-xs text-slate-400 mt-1 font-sans">Organic & AI Traffic Share</p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* 3. INDUSTRY CHALLENGES */}
        {/* ========================================================== */}
        <section id="challenges" className="py-20 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Industry Challenges</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                Why scaling a modern Professional Services firm is becoming aggressively competitive.
              </h2>
              <p className="text-slate-400 text-sm mt-3.5 leading-relaxed">
                Enterprise buyer behavior has evolved fundamentally. Corporate decision-makers are highly tech-literate, conduct extensive anonymous online research, and scrutinize strategic capabilities through multiple internal committees long before ever booking an initial sales call.
              </p>
            </div>

            {/* Challenge Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CHALLENGES.map((challenge) => (
                <div
                  key={challenge.id}
                  className="card-glass border border-white/10 rounded-2xl p-6.5 shadow-sm hover:shadow-sky-500/5 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-sky-500 opacity-60"></div>
                  <h3 className="text-base font-bold text-white font-display flex items-center gap-2 group-hover:text-sky-400 transition-colors">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {challenge.explanation}
                  </p>
                  <div className="bg-slate-950/60 border border-white/5 rounded-lg p-3 mt-4 text-[11px] text-slate-400 leading-normal">
                    <strong className="text-sky-400 block mb-0.5 font-semibold">Strategic Impact:</strong>
                    {challenge.impact}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 4. HOW SITEONLAB SOLVES THESE CHALLENGES */}
        {/* ========================================================== */}
        <section id="solutions" className="py-20 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Our Solution</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                A complete, high-converting B2B growth system engineered for Professional Services.
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                We eliminate reliance on unpredictable physical referrers by positioning your senior partners as unquestioned digital market authorities. Our integrated client acquisition framework includes:
              </p>
            </div>

            {/* Solution Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUTIONS.map((sol) => (
                <div
                  key={sol.id}
                  className="card-glass border border-white/10 rounded-2xl p-6 hover:border-sky-500/40 hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-sky-500 group-hover:text-slate-950">
                      {renderIcon(sol.iconName, "w-5 h-5")}
                    </div>
                    <h3 className="text-base font-bold text-white font-display">
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                      {sol.explanation}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-white/5 text-[11px] text-slate-400 leading-normal">
                    <span className="text-sky-400 font-bold block">Commercial Outcome:</span>
                    {sol.outcome}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 5. INDUSTRY BUYING JOURNEY */}
        {/* ========================================================== */}
        <section id="journey" className="py-20 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Buyer Journey</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                How modern Professional Services clients choose premium partners.
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Enterprise clients undergo a high-scrutiny, four-stage discovery and validation lifecycle. See how SiteOnLab actively positions your firm to convert prospects during every key touchpoint.
              </p>
            </div>

            {/* Journey Grid: Active state selector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left pane: Journey Stages Buttons */}
              <div className="lg:col-span-4 space-y-3">
                {BUYER_JOURNEY.map((item, idx) => (
                  <button
                    id={`journey-btn-${idx}`}
                    key={idx}
                    onClick={() => setSelectedJourneyStage(idx)}
                    className={`w-full p-4.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      selectedJourneyStage === idx
                        ? "bg-sky-500 border-sky-500 text-slate-950 shadow-md shadow-sky-500/10"
                        : "bg-slate-900/60 border-white/10 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <span className={`font-mono text-[10px] uppercase tracking-wider block ${
                        selectedJourneyStage === idx ? "text-slate-800 font-semibold" : "text-slate-400"
                      }`}>
                        Stage 0{idx + 1}
                      </span>
                      <span className="text-sm font-bold font-display block mt-0.5">{item.stage}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedJourneyStage === idx ? "translate-x-1" : ""}`} />
                  </button>
                ))}
              </div>

              {/* Right pane: Deep Dive Context */}
              <div className="lg:col-span-8 card-glass border border-white/10 rounded-2xl p-6.5 sm:p-8 shadow-sm">
                <div className="border-b border-white/5 pb-4 mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs text-sky-400 font-bold uppercase tracking-widest">
                      Stage 0{selectedJourneyStage + 1} Focus
                    </span>
                    <h3 className="text-lg font-bold text-white font-display mt-0.5">
                      {BUYER_JOURNEY[selectedJourneyStage].title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-[11px] rounded-full font-semibold">
                    Account Centric
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Buyer Mindset & Intent</h4>
                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed bg-slate-950/60 border border-white/5 p-3 rounded-lg font-sans">
                      "{BUYER_JOURNEY[selectedJourneyStage].buyerMindset}"
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Primary Risk & Friction</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {BUYER_JOURNEY[selectedJourneyStage].keyChallenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">SiteOnLab Tactical Delivery</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {BUYER_JOURNEY[selectedJourneyStage].siteonlabSupport}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono uppercase tracking-wider">Critical Metrics:</span>
                    <span className="font-mono font-semibold text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded">
                      {BUYER_JOURNEY[selectedJourneyStage].metricsToWatch}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 6. OUR PROCESS */}
        {/* ========================================================== */}
        <section id="process" className="py-20 bg-[#0F172A] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Our Process</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                From onboarding audit to predictable inbound revenue.
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                We don't believe in guessing or generic, slow-moving setups. Our four-step systems launch framework ensures absolute alignment, clear strategic timelines, and rigorous closed-loop execution.
              </p>
            </div>

            {/* Process Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="card-glass border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative hover:border-sky-500/30 transition-all duration-300">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-sky-500/10 text-sky-400 font-mono font-bold text-xs rounded-full flex items-center justify-center border border-sky-500/30">
                    0{step.step}
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider block mb-1">
                      {step.timeline}
                    </span>
                    <h3 className="text-sm font-bold text-white font-display">
                      {step.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5">Key Deliverables</span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((del, i) => (
                        <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5 leading-snug">
                          <Check className="w-3 h-3 text-sky-400 shrink-0 mt-0.5" />
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

        {/* ========================================================== */}
        {/* 7. WHY CHOOSE SITEONLAB */}
        {/* ========================================================== */}
        <section id="why-us" className="py-20 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Why Companies Choose SiteOnLab</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                A premium B2B growth agency that truly understands Professional Services.
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                We don’t treat high-value advisory or legal partnerships like commodity e-commerce stores. Our team possesses the direct corporate literacy required to translate sophisticated strategic methodologies into high-impact pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {DIFFERENTIATORS.map((diff) => (
                <div key={diff.id} className="card-glass border border-white/10 rounded-2xl p-6.5 shadow-sm hover:border-sky-500/30 transition-all duration-300">
                  <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>{diff.title}</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {diff.explanation}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 8. SERVICES SECTION */}
        {/* ========================================================== */}
        <section id="services" className="py-20 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Services</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                Growth services built specifically to scale Professional Services firms.
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                We deploy hyper-targeted organic, paid, web, and automation capabilities aligned strictly with complex, multi-stakeholder corporate sales cycles.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.map((serv) => (
                <div key={serv.id} className="card-glass border border-white/10 rounded-2xl p-5 flex flex-col justify-between group hover:border-sky-500/40 hover:shadow-sky-500/5 transition-all duration-300">
                  <div>
                    <div className="w-9 h-9 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-lg flex items-center justify-center mb-4">
                      {renderIcon(serv.iconName, "w-4.5 h-4.5")}
                    </div>
                    <h3 className="text-sm font-bold text-white font-display group-hover:text-sky-400 transition-colors">
                      {serv.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {serv.description}
                    </p>
                  </div>

                  <button
                    onClick={() => scrollToElement("blueprint-form")}
                    className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer w-full text-left"
                  >
                    <span>Explore this system</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 9. CASE STUDIES */}
        {/* ========================================================== */}
        <section id="case-studies" className="py-20 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Success Stories</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                Growth outcomes from leading B2B firms.
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                We hold ourselves accountable to bottom-line results. See how our systems converted anonymous enterprise executives into qualified pipeline.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CASE_STUDIES.map((cs) => (
                <div key={cs.id} className="card-glass border border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-sky-500/5 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between">
                  <div className="p-6">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                      <span className="px-2.5 py-0.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-[10px] font-semibold font-mono rounded-full uppercase tracking-wider">
                        {cs.industry}
                      </span>
                      <span className="text-slate-400 text-xs font-mono font-medium">Timeline: {cs.timeline}</span>
                    </div>

                    <h3 className="text-base font-bold text-white font-display mb-3">
                      {cs.clientName}
                    </h3>

                    <div className="space-y-3.5 text-xs text-slate-300">
                      <div>
                        <strong className="text-white font-semibold block">The Friction Challenge:</strong>
                        <p className="mt-0.5 leading-relaxed text-slate-400">{cs.challenge}</p>
                      </div>
                      <div>
                        <strong className="text-white font-semibold block">The System Solution:</strong>
                        <p className="mt-0.5 leading-relaxed text-slate-400">{cs.solution}</p>
                      </div>
                      <div>
                        <strong className="text-white font-semibold block">The Business Outcome:</strong>
                        <p className="mt-0.5 leading-relaxed text-slate-400">{cs.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Metric Row */}
                  <div className="bg-slate-950/60 border-t border-white/5 text-white px-6 py-4 grid grid-cols-3 gap-2 text-center">
                    {cs.metrics.map((met, i) => (
                      <div key={i} className="border-r border-white/5 last:border-0">
                        <div className="text-sm font-bold text-sky-400 font-display tracking-tight">{met.value}</div>
                        <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">{met.label}</div>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 10. TESTIMONIAL SECTION */}
        {/* ========================================================== */}
        <section id="testimonials" className="py-20 bg-[#0F172A] text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block">Executive Endorsement</span>
            </div>

            <div className="card-glass border border-white/10 rounded-2xl p-6.5 sm:p-10 relative">
              <span className="absolute top-4 left-6 text-sky-500/10 text-6xl font-serif select-none leading-none">“</span>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed relative z-10 italic">
                "{TESTIMONIAL.quote}"
              </p>

              <div className="mt-6 pt-5 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="font-bold text-white font-display text-sm sm:text-base">{TESTIMONIAL.clientName}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{TESTIMONIAL.role}, {TESTIMONIAL.company}</div>
                </div>

                <div className="bg-slate-950/80 border border-white/5 rounded-xl px-4 py-2.5">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">Outcome Achieved:</span>
                  <span className="text-xs text-sky-400 font-mono font-semibold block mt-0.5">{TESTIMONIAL.outcome}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* 11. RELATED INDUSTRIES */}
        {/* ========================================================== */}
        <section id="industries" className="py-20 bg-[#0B0F19]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Other Sectors</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                Explore how we help other complex B2B companies grow.
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                SiteOnLab works exclusively with high-value B2B business units, applying custom pipeline-acquisition templates to high-barrier sectors.
              </p>
            </div>

            {/* Industries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {RELATED_INDUSTRIES.map((ind, idx) => (
                <div key={idx} className="card-glass border border-white/10 rounded-xl p-4.5 flex flex-col justify-between shadow-xs hover:border-sky-500/30 transition-all duration-300">
                  <div>
                    <h3 className="text-xs font-bold text-white font-display">
                      {ind.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1.5 leading-normal">
                      {ind.description}
                    </p>
                  </div>

                  <button
                    onClick={() => scrollToElement("blueprint-form")}
                    className="mt-3 text-[10px] font-mono font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Explore sector</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 12. FREQUENTLY ASKED QUESTIONS */}
        {/* ========================================================== */}
        <section id="faqs" className="py-20 bg-[#0F172A] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-14">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">Frequently Asked Questions</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-2">
                Have questions about professional services customer acquisition?
              </h2>
              <p className="text-slate-400 text-sm mt-3.5 leading-relaxed">
                Explore our concise, strategic responses below, covering attribution, AI search updates, timelines, and scaling practices.
              </p>
            </div>

            {/* Accordions */}
            <div className="space-y-3.5">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-white/5 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    id={`faq-btn-${idx}`}
                    onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                    className="w-full px-5 py-4.5 bg-slate-900/45 hover:bg-slate-900/85 transition-colors flex items-center justify-between text-left cursor-pointer text-white"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white font-display pr-4">
                      {faq.question}
                    </span>
                    <div className="shrink-0 p-1 bg-slate-950 border border-white/5 rounded-md text-slate-400">
                      {expandedFAQ === idx ? <ChevronDown className="w-4 h-4 text-sky-400" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>

                  {expandedFAQ === idx && (
                    <div id={`faq-panel-${idx}`} className="px-5 py-4 border-t border-white/5 bg-slate-950/40 text-xs text-slate-300 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 13. FINAL CTA & FORM INTEGRATION */}
        {/* ========================================================== */}
        <section id="blueprint-form" className="py-20 bg-gradient-to-b from-[#0F172A] to-[#0B0F19] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Form Pitch */}
              <div className="lg:col-span-5 space-y-6">
                <span className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs font-semibold rounded-full uppercase tracking-wider">
                  Next Steps
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display leading-tight tracking-tight text-white">
                  Let’s build a predictable growth engine for your Professional Services firm.
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Stop relying solely on volatile regional referral networks. Partner with SiteOnLab to transform your firm's expertise into an active digital pipeline. We will align your organic visibility, web UX, and ABM systems to target enterprise buying committees, protect your billing margins, and accelerate partner retainers.
                </p>

                <div className="space-y-3 pt-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-sky-400 shrink-0" />
                    <span>Includes custom competitor organic visibility gap analysis</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-sky-400 shrink-0" />
                    <span>Details your current generative AI search recommendation index</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-sky-400 shrink-0" />
                    <span>Completely complimentary, with zero strategic obligation</span>
                  </div>
                </div>
              </div>

              {/* Right Interactive Form Component */}
              <div className="lg:col-span-7">
                <GrowthBlueprintForm />
              </div>

            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
