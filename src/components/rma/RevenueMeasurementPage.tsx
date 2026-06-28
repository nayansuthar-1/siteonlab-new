"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  CheckCircle,
  Target,
  Sparkles,
  Layers,
  Activity,
  TrendingUp,
  BarChart2,
  Award,
  HelpCircle,
  Eye,
  Compass,
  ExternalLink,
  ShieldCheck,
  Zap,
  PhoneCall,
  Lock,
  Clock
} from "lucide-react";

import {
  HERO_CONTENT,
  TRUST_METRICS,
  SERVICE_COMPONENTS,
  PROCESS_STEPS,
  DIFFERENTIATORS,
  CASE_STUDIES,
  TESTIMONIAL,
  RELATED_SERVICES,
  FAQ_ITEMS
} from "./data";

import InteractiveDashboard from "./components/InteractiveDashboard";
import GrowthBlueprintModal from "./components/GrowthBlueprintModal";

export default function RevenueMeasurementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"blueprint" | "assessment">("blueprint");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);
  const [showSeoDrawer, setShowSeoDrawer] = useState(false);

  const triggerModal = (mode: "blueprint" | "assessment") => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="theme-rma min-h-screen bg-[#020617] text-white selection:bg-blue-600 selection:text-white font-sans relative overflow-x-hidden antialiased">

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section id="hero" className="pt-16 pb-24 md:pt-24 md:pb-28 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">

            {/* Eyebrow */}
            <div className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Revenue Measurement | Analytics Optimization
            </div>

            {/* H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white">
              The Analytics agency that drives <span className="text-blue-400">Pipeline</span>, <span className="text-emerald-400">LTV</span>, and <span className="text-indigo-400">CAC Efficiency</span>.
            </h1>

            {/* Subheading Paragraph */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-sans max-w-xl">
              SiteOnLab helps B2B SaaS and technology companies turn raw data into a measurable revenue channel. We help you connect activity to qualified pipeline, not vanity metrics.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-btn-primary"
                onClick={() => triggerModal("blueprint")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2 cursor-pointer"
              >
                <span>{HERO_CONTENT.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-secondary"
                onClick={() => scrollToSection("case-studies")}
                className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl transition-colors cursor-pointer"
              >
                {HERO_CONTENT.secondaryCTA}
              </button>
            </div>

            {/* Subtext info */}
            <div className="flex items-center gap-4 text-[11px] text-gray-500 font-mono">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> First-Party Tracking Protocols</span>
              <span className="text-slate-800">•</span>
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-emerald-400" /> Bypasses Safari Cookie Blocks</span>
            </div>
          </div>

          {/* Right Column: Related Graphics Widget */}
          <div className="lg:col-span-5 w-full">
            <InteractiveDashboard />
          </div>

        </div>
      </section>

      {/* 2. TRUST METRICS SECTION */}
      <section id="trust-metrics" className="py-12 bg-[#020617] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="p-5 bg-[#0f172a] border border-white/5 rounded-xl hover:border-white/10 transition-all text-center sm:text-left"
              >
                <p className="text-2xl sm:text-3xl font-display font-bold text-blue-400 tracking-tight">
                  {metric.value}
                </p>
                <p className="text-xs text-gray-400 font-medium mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICE OVERVIEW SECTION */}
      <section id="service-overview" className="py-20 md:py-28 max-w-7xl mx-auto px-6 relative z-10 scroll-mt-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase font-mono">
            Revenue Measurement Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Revenue Measurement built for compounding B2B revenue growth.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Most agencies just drop a basic script and set up generic pageview counts in Google Analytics. Our <strong>Revenue Measurement & Analytics</strong> service builds a complete, robust intelligence system that combines multi-touch attribution, CRM pipeline alignment, predictive life value, and automated lead scoring into one single revenue channel designed to earn trust with buying committees, Google, and modern AI engines.
          </p>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_COMPONENTS.map((comp) => (
            <div
              key={comp.id}
              className="p-6 bg-[#0f172a] border border-white/5 rounded-2xl hover:border-white/10 transition-all hover:bg-[#1e293b] group"
            >
              <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-5 group-hover:scale-105 transition-transform">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-display font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                {comp.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mt-3">
                {comp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section id="process-flow" className="py-20 md:py-28 bg-[#020617] border-t border-white/5 relative z-10 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase font-mono">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              From data audit to clear pipeline visibility in 30 days.
            </h2>
          </div>

          {/* Process Timeline Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.id}
                className="p-6 bg-[#0f172a] border border-white/5 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-all"
              >
                {/* Number card decoration */}
                <div className="text-[10px] font-mono font-bold text-blue-400 uppercase bg-blue-950/40 border border-blue-900/30 px-2.5 py-1 rounded-full inline-block mb-6">
                  {step.stepNumber}
                </div>

                <h3 className="text-base font-display font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                  {step.description}
                </p>

                {/* Duration banner */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>Implementation Timeline:</span>
                  <span className="text-gray-300 font-semibold">{step.timeline}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section id="why-us" className="py-20 md:py-28 max-w-7xl mx-auto px-6 relative z-10 scroll-mt-12">

        {/* Top block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase font-mono">
              Why Teams Pick Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              A Revenue Measurement agency that connects marketing performance to revenue.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed pt-2">
              Most generic digital agencies hand you a vanity click report or impression tally and call it done. SiteOnLab builds a full-funnel, secure measurement layer so you can see exactly how every campaign and content cluster contributes across the buyer journey, from first touch to qualified pipeline.
            </p>
          </div>
        </div>

        {/* Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIFFERENTIATORS.map((diff, idx) => (
            <div
              key={diff.id}
              className="p-8 bg-[#0f172a] border border-white/5 rounded-2xl flex gap-5 hover:border-white/10 hover:bg-[#1e293b] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                {idx === 0 && <Target className="w-5 h-5" />}
                {idx === 1 && <BarChart2 className="w-5 h-5" />}
                {idx === 2 && <Sparkles className="w-5 h-5" />}
                {idx === 3 && <TrendingUp className="w-5 h-5" />}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  {diff.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section id="case-studies" className="py-20 md:py-28 bg-[#020617] border-t border-white/5 relative z-10 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-16">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase font-mono">
                Case Studies & Results
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Revenue measurement results we can put a number on.
              </h2>
            </div>
            <button
              id="cases-btn-see-all"
              onClick={() => triggerModal("blueprint")}
              className="text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 shrink-0 group border-b border-transparent hover:border-blue-400 pb-0.5 transition-all cursor-pointer"
            >
              <span>See all case studies</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((caseCard) => (
              <div
                key={caseCard.id}
                className="p-6 bg-[#0f172a] border border-white/5 rounded-2xl flex flex-col justify-between hover:border-white/10 hover:bg-[#1e293b] transition-all group"
              >
                <div>
                  <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">
                    {caseCard.industry}
                  </div>
                  <h3 className="text-base font-display font-bold text-white mt-3 group-hover:text-blue-400 transition-colors leading-tight">
                    "{caseCard.headline}"
                  </h3>
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {caseCard.shortCopy}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono">Verified Metric:</p>
                    <p className="text-sm font-display font-bold text-emerald-400 mt-0.5">{caseCard.metric}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-500 font-mono">Timeline:</p>
                    <p className="text-xs font-mono font-medium text-gray-300 mt-1">{caseCard.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section id="testimonial" className="py-20 md:py-28 max-w-7xl mx-auto px-6 relative z-10">
        <div className="p-8 md:p-12 bg-[#0f172a] border border-white/5 rounded-2xl relative overflow-hidden">
          {/* Decorative quote mark */}
          <div className="absolute top-6 right-8 text-8xl font-serif text-white/5 select-none pointer-events-none">
            “
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-medium font-sans">
                "{TESTIMONIAL.quote}"
              </p>

              <div>
                <p className="text-sm font-display font-bold text-white">{TESTIMONIAL.author}</p>
                <p className="text-xs text-gray-400">{TESTIMONIAL.title}</p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-white/10 lg:pl-8 space-y-4">
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase">Verified Result:</p>
                <p className="text-lg font-display font-bold text-emerald-400">{TESTIMONIAL.metric}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase">Time to Value:</p>
                <p className="text-xs font-mono text-gray-300">{TESTIMONIAL.timeline}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. RELATED SERVICES SECTION */}
      <section id="related-services" className="py-20 md:py-28 bg-[#020617] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-3xl mb-16 space-y-4">
            <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase font-mono">
              Related Services
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Revenue measurement performs better alongside these services.
            </h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELATED_SERVICES.map((serv) => (
              <div
                key={serv.id}
                className="p-6 bg-[#0f172a] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-[#1e293b] transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider">
                    {serv.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                    {serv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <button
                    id={`btn-related-${serv.id}`}
                    onClick={() => triggerModal("blueprint")}
                    className="text-[10px] font-mono text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 group cursor-pointer"
                  >
                    <span>Learn more about this integration</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq-accordion" className="py-20 md:py-28 max-w-4xl mx-auto px-6 relative z-10 scroll-mt-12">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-widest text-blue-400 uppercase font-mono">
            FAQs
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            Frequently asked questions about Revenue Measurement.
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0f172a] border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  id={`btn-faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-display font-bold text-xs sm:text-sm text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2 text-white">
                    <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-400 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section id="final-cta" className="py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-tr from-[#0f172a] via-[#0f172a] to-blue-950/20 border border-white/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">

          {/* Subtle glow rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Let’s make revenue measurement your most efficient growth channel.
            </h2>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto">
              Book a 30-minute strategy call. We’ll review your current tracking performance, identify opportunities your competitors are missing, and show you what it would take to turn data measurement into qualified pipeline.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                id="cta-btn-primary"
                onClick={() => triggerModal("blueprint")}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-all cursor-pointer"
              >
                <span>Request a Growth Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="cta-btn-secondary"
                onClick={() => triggerModal("assessment")}
                className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl transition-all cursor-pointer"
              >
                Take the Measurement Assessment
              </button>
            </div>

            <div className="pt-8 flex items-center justify-center gap-6 text-[10px] text-gray-500 font-mono">
              <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-blue-500/50" /> Secure 256-bit encryption</span>
              <span className="text-slate-800">•</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-500/50" /> 14-day direct setup blueprint</span>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING UTILITY: SEO CONFIGURATION DRAWER */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          id="btn-seo-toggle"
          onClick={() => setShowSeoDrawer(!showSeoDrawer)}
          className="flex items-center gap-1.5 px-3 py-2 bg-[#0f172a] border border-white/5 hover:border-blue-500 text-gray-300 hover:text-blue-400 font-mono text-[10px] rounded-full shadow-xl shadow-slate-950/40 transition-all cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>SEO Config Preview</span>
        </button>

        {showSeoDrawer && (
          <div className="absolute bottom-12 right-0 w-80 bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-2xl z-50 space-y-3 font-sans">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-indigo-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified SEO Properties
              </span>
              <button
                id="btn-seo-drawer-close"
                onClick={() => setShowSeoDrawer(false)}
                className="text-[10px] text-slate-500 hover:text-slate-300"
              >
                Close
              </button>
            </div>

            <div className="space-y-2.5 text-[11px]">
              <div>
                <p className="text-[9px] font-mono text-slate-500 uppercase">Title Tag (&lt;title&gt;)</p>
                <div className="bg-slate-950 border border-slate-850 p-2 rounded text-slate-300 font-mono text-[10px] break-words">
                  {HERO_CONTENT.metaTitle}
                </div>
              </div>

              <div>
                <p className="text-[9px] font-mono text-slate-500 uppercase">Meta Description</p>
                <div className="bg-slate-950 border border-slate-850 p-2 rounded text-slate-400 leading-normal">
                  {HERO_CONTENT.metaDescription}
                </div>
              </div>

              <div>
                <p className="text-[9px] font-mono text-slate-500 uppercase">H1 Tag Structure</p>
                <div className="bg-slate-950 border border-slate-850 p-2 rounded text-slate-300 leading-tight">
                  "{HERO_CONTENT.title}"
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-2 text-[9px] text-slate-500 font-mono leading-normal">
              Matches crawler criteria for B2B search-visibility rankings.
            </div>
          </div>
        )}
      </div>

      {/* CONVERSION MODALS */}
      <GrowthBlueprintModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMode={modalMode}
      />

    </div>
  );
}
