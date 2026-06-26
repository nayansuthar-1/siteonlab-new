"use client";

import { useState } from "react";
import { ArrowUpRight, HelpCircle, LayoutGrid, Layers, RefreshCw, Terminal, PhoneCall, CheckCircle } from "lucide-react";
import HeroSection from "./components/HeroSection";
import TrustMetrics from "./components/TrustMetrics";
import ServiceOverview from "./components/ServiceOverview";
import ProcessSection from "./components/ProcessSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CaseStudies from "./components/CaseStudies";
import Testimonial from "./components/Testimonial";
import RelatedServices from "./components/RelatedServices";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="theme-webdesign min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Sleek Dark Agency Header Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 border-b border-white/5 backdrop-blur-md">
        <div className="container mx-auto px-8 max-w-7xl h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg italic shadow-lg shadow-blue-500/10">
              <span className="font-display font-black text-white text-lg">S</span>
            </div>
            <div>
              <span className="font-display font-bold text-white text-lg tracking-tight uppercase">SiteOnLab</span>
              <span className="text-[9px] font-mono text-blue-400 block -mt-1 uppercase tracking-widest font-semibold">Web Studio</span>
            </div>
          </div>

          {/* Quick Anchor Jumps */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400 uppercase tracking-widest">
            <button 
              onClick={() => scrollToSection("services")} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("process")} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection("case-studies")} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              FAQs
            </button>
          </nav>

          {/* Header Action Button */}
          <div>
            <button
              onClick={() => scrollToSection("cta")}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-md shadow-blue-500/15 cursor-pointer active:scale-95"
            >
              Request Growth Blueprint
            </button>
          </div>

        </div>
      </header>

      {/* Assembly of Ordered Template Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection 
          onPrimaryClick={() => scrollToSection("cta")} 
          onSecondaryClick={() => scrollToSection("case-studies")} 
        />

        {/* 2. Trust Metrics Section */}
        <TrustMetrics />

        {/* 3. Service Overview Section */}
        <ServiceOverview />

        {/* 4. Process Section */}
        <ProcessSection />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Case Studies Section */}
        <CaseStudies onCtaClick={() => scrollToSection("cta")} />

        {/* 7. Testimonial Section */}
        <Testimonial />

        {/* 8. Related Services Section */}
        <RelatedServices />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Final CTA Section with Assessment/Form tab widget */}
        <FinalCTA />
      </main>

      {/* Structured Dark Footer representing SiteOnLab */}
      <footer className="border-t border-white/5 bg-zinc-950 py-16 text-zinc-500 text-xs font-sans">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-12">
            
            {/* Left Brand Col */}
            <div className="md:col-span-4 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="font-display font-black text-blue-400 text-base italic">S</span>
                </div>
                <span className="font-display font-bold text-white text-base tracking-tight uppercase">SiteOnLab</span>
              </div>
              <p className="text-zinc-500 leading-relaxed max-w-sm">
                Engineered website design and development solutions built to accelerate B2B brand authority, traffic indexing, and qualified outbound pipeline.
              </p>
              <p className="font-mono text-[10px] text-zinc-600">
                SEO Title: B2B Website Design & Development Agency | SiteOnLab
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3 text-left">
              <h5 className="font-mono text-xs font-semibold text-zinc-350 uppercase tracking-widest">Solutions</h5>
              <ul className="space-y-2 font-mono">
                <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors cursor-pointer">Journey Wireframing</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors cursor-pointer">Bespoke Design System</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors cursor-pointer">Sub-second Web Coding</button></li>
                <li><button onClick={() => scrollToSection("services")} className="hover:text-blue-400 transition-colors cursor-pointer">CRM pipeline attribution</button></li>
              </ul>
            </div>

            {/* Resources / FAQ anchor */}
            <div className="md:col-span-3 space-y-3 text-left">
              <h5 className="font-mono text-xs font-semibold text-zinc-350 uppercase tracking-widest">Support</h5>
              <ul className="space-y-2 font-mono">
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-blue-400 transition-colors cursor-pointer">Service FAQs</button></li>
                <li><button onClick={() => scrollToSection("process")} className="hover:text-blue-400 transition-colors cursor-pointer">Our 8-Week Blueprint</button></li>
                <li><button onClick={() => scrollToSection("case-studies")} className="hover:text-blue-400 transition-colors cursor-pointer">SaaS Case Studies</button></li>
                <li><button onClick={() => scrollToSection("cta")} className="hover:text-blue-400 transition-colors cursor-pointer">ROI Assessment Tool</button></li>
              </ul>
            </div>

            {/* Contact quick point */}
            <div className="md:col-span-2 space-y-3 text-left">
              <h5 className="font-mono text-xs font-semibold text-zinc-350 uppercase tracking-widest">Connect</h5>
              <p className="font-sans leading-relaxed text-zinc-500">
                Have questions?<br />
                <button onClick={() => scrollToSection("cta")} className="text-blue-400 font-semibold hover:underline cursor-pointer">Book a Strategy Call</button>
              </p>
            </div>

          </div>

          {/* Legal / Copyright Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-zinc-600">
            <div>
              &copy; {new Date().getFullYear()} SiteOnLab. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400">Terms of Service</a>
              <span className="text-zinc-800">|</span>
              <span className="text-zinc-600">Optimized for Google & LLM Crawlers</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
