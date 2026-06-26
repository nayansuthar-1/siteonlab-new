"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, ArrowRight, Layers, HelpCircle, FileText, BarChart3, Menu, X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import sub-components
import SEOPreview from './components/SEOPreview';
import HeroGraphic from './components/HeroGraphic';
import TrustMetrics from './components/TrustMetrics';
import ServiceOverview from './components/ServiceOverview';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Testimonial from './components/Testimonial';
import RelatedServices from './components/RelatedServices';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

export default function App() {
  const [showSeoMeta, setShowSeoMeta] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="theme-cro bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-[#3b82f6]/20 selection:text-[#3b82f6] font-sans antialiased overflow-x-hidden border-8 border-[#1A1A1A]">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 border-b border-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-[#3b82f6] rounded-sm flex items-center justify-center text-black font-bold text-sm shadow-lg shadow-[#3b82f6]/20 group-hover:scale-105 transition-transform">
              SL
            </div>
            <div>
              <span className="font-display text-lg font-medium text-[#F5F5F5] tracking-tight">SiteOn<span className="text-[#3b82f6]">Lab</span></span>
              <span className="block text-[8px] font-mono uppercase text-white/40 tracking-widest leading-none">CRO Elite</span>
            </div>
          </div>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => handleScroll('trust-metrics')} className="text-xs font-mono font-medium text-white/60 hover:text-white transition-colors cursor-pointer">
              Metrics
            </button>
            <button onClick={() => handleScroll('service-overview')} className="text-xs font-mono font-medium text-white/60 hover:text-white transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={() => handleScroll('process')} className="text-xs font-mono font-medium text-white/60 hover:text-white transition-colors cursor-pointer">
              Our Process
            </button>
            <button onClick={() => handleScroll('case-studies')} className="text-xs font-mono font-medium text-white/60 hover:text-white transition-colors cursor-pointer">
              Case Studies
            </button>
            <button onClick={() => handleScroll('faq')} className="text-xs font-mono font-medium text-white/60 hover:text-white transition-colors cursor-pointer">
              FAQs
            </button>
          </nav>

          {/* Nav Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setShowSeoMeta(!showSeoMeta)}
              className="flex items-center gap-1.5 border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-white/80 hover:text-white px-3.5 py-2 rounded-xl transition-all cursor-pointer"
            >
              <Sparkles size={14} className={showSeoMeta ? "text-[#3b82f6] animate-spin" : "text-white/60"} />
              {showSeoMeta ? "Hide SEO Meta" : "View SEO Meta"}
            </button>
            <button
              onClick={() => handleScroll('final-cta')}
              className="px-5 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white/5 text-white transition-colors cursor-pointer"
            >
              Growth Blueprint
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setShowSeoMeta(!showSeoMeta)}
              className="p-2 border border-white/10 rounded-lg text-white/60"
            >
              <Sparkles size={16} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-white/10 rounded-lg text-white/80 hover:bg-white/5 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#050505] px-6 py-6 space-y-4"
          >
            <div className="flex flex-col gap-4 text-left">
              <button onClick={() => handleScroll('trust-metrics')} className="text-sm font-mono text-white/60 hover:text-white transition-colors">
                1. Trust Metrics
              </button>
              <button onClick={() => handleScroll('service-overview')} className="text-sm font-mono text-white/60 hover:text-white transition-colors">
                2. CRO Services
              </button>
              <button onClick={() => handleScroll('process')} className="text-sm font-mono text-white/60 hover:text-white transition-colors">
                3. Our Process
              </button>
              <button onClick={() => handleScroll('case-studies')} className="text-sm font-mono text-white/60 hover:text-white transition-colors">
                4. Case Studies
              </button>
              <button onClick={() => handleScroll('faq')} className="text-sm font-mono text-white/60 hover:text-white transition-colors">
                5. FAQs
              </button>
            </div>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => handleScroll('final-cta')}
                className="w-full text-center bg-[#3b82f6] text-black text-xs font-mono font-semibold py-3 rounded-xl transition-all"
              >
                Request Blueprint
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEO META FLOATING PREVIEW BAR */}
      <AnimatePresence>
        {showSeoMeta && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-7xl mx-auto px-6 pt-4 relative z-40"
          >
            <SEOPreview />
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECTION 1: HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Category / Service Eyebrow */}
            <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] uppercase tracking-[0.2em]">
              Conversion Rate Optimization | SiteOnLab Elite
            </div>

            {/* H1 Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-[50px] leading-[1.1] font-display font-medium text-slate-100 tracking-tight">
              The B2B CRO agency that drives <span className="text-[#3b82f6] italic">qualified pipeline</span>, <span className="text-white/80">sales velocity</span>, and <span className="text-[#3b82f6] italic">closed-won revenue</span>.
            </h1>

            {/* Subheading */}
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              SiteOnLab helps B2B SaaS, technology, IT/MSP, and professional-services companies turn existing web traffic and user journeys into a measurable revenue channel. We help you identify conversion friction, design high-impact A/B experiments, and maximize pipeline yield — measured by qualified pipeline, not vanity metrics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={() => handleScroll('final-cta')}
                className="bg-white text-black px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-[#3b82f6] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Request a Growth Blueprint
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => handleScroll('case-studies')}
                className="bg-transparent border border-white/30 text-white px-6 py-3.5 rounded-md font-semibold text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                See Case Studies
              </button>
            </div>

            {/* Fast Value Indicators */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-white/10 max-w-md">
              <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                <Check size={14} className="text-[#3b82f6]" />
                <span>No development overhead</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
                <Check size={14} className="text-[#3b82f6]" />
                <span>HubSpot & Salesforce sync</span>
              </div>
            </div>

          </div>

          {/* Right Column: Related graphics */}
          <div className="lg:col-span-5 w-full">
            <HeroGraphic />
          </div>

        </div>
      </section>

      {/* SECTION 2: TRUST METRICS */}
      <TrustMetrics />

      {/* SECTION 3: SERVICE OVERVIEW */}
      <ServiceOverview />

      {/* SECTION 4: PROCESS */}
      <Process />

      {/* SECTION 5: WHY CHOOSE US */}
      <WhyChooseUs />

      {/* SECTION 6: CASE STUDIES */}
      <CaseStudies />

      {/* SECTION 7: TESTIMONIAL */}
      <Testimonial />

      {/* SECTION 8: RELATED SERVICES */}
      <RelatedServices />

      {/* SECTION 9: FAQ */}
      <FAQ />

      {/* SECTION 10: FINAL CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-12 text-slate-500 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#3b82f6] flex items-center justify-center text-black font-bold text-[10px]">
              S
            </div>
            <span className="text-slate-400 font-sans font-semibold">SiteOnLab CRO</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px]">
            <span>© 2026 SiteOnLab. All rights reserved.</span>
            <span>·</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
