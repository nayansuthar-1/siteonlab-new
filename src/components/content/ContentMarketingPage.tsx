"use client";

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import TrustMetrics from './components/TrustMetrics';
import ServiceOverview from './components/ServiceOverview';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Testimonial from './components/Testimonial';
import RelatedServices from './components/RelatedServices';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import BlueprintModal from './components/BlueprintModal';
import { 
  Sparkles, 
  Menu, 
  X, 
  Phone, 
  ChevronRight, 
  ExternalLink, 
  Mail, 
  Globe, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // SEO Fields Injection
  useEffect(() => {
    // 1. Title Tag
    document.title = "Content Marketing Agency for B2B Pipeline Growth | SiteOnLab";

    // 2. Meta Description
    let metaDescriptionElement = document.querySelector('meta[name="description"]');
    if (!metaDescriptionElement) {
      metaDescriptionElement = document.createElement('meta');
      metaDescriptionElement.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionElement);
    }
    metaDescriptionElement.setAttribute(
      'content', 
      "SiteOnLab helps B2B SaaS, tech, and services companies use Content Marketing to drive qualified pipeline, improve visibility, and connect marketing performance to revenue."
    );
  }, []);

  const openBlueprintModal = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="theme-content min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-white">
      
      {/* 1. Header Sticky Nav */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/85 backdrop-blur-md border-b border-zinc-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono font-black text-sm shadow-lg shadow-blue-600/15">
              SL
            </div>
            <div>
              <span className="font-sans text-base font-extrabold tracking-tight text-white block">SiteOn<span className="text-blue-500">Lab</span></span>
              <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest block font-bold mt-[-3px]">REVENUE MARKETING</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-zinc-400">
            <button onClick={() => scrollToSection('service-overview-section')} className="hover:text-white transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('process-section')} className="hover:text-white transition-colors cursor-pointer">Process</button>
            <button onClick={() => scrollToSection('why-choose-us-section')} className="hover:text-white transition-colors cursor-pointer">Why Us</button>
            <button onClick={() => scrollToSection('case-studies-section')} className="hover:text-white transition-colors cursor-pointer">Results</button>
            <button onClick={() => scrollToSection('faq-section')} className="hover:text-white transition-colors cursor-pointer">FAQs</button>
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={openBlueprintModal}
              className="flex items-center space-x-1 bg-blue-600/10 border border-blue-500/20 text-blue-400 font-sans text-xs font-bold py-2 px-4 rounded-lg hover:bg-blue-600/20 active:scale-95 transition-all cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get Free Blueprint</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-400 hover:text-white p-1 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050505] border-b border-zinc-900 px-4 pt-2 pb-6 space-y-3 flex flex-col text-left">
            <button onClick={() => scrollToSection('service-overview-section')} className="py-2 text-sm font-semibold text-zinc-400 hover:text-white">Services</button>
            <button onClick={() => scrollToSection('process-section')} className="py-2 text-sm font-semibold text-zinc-400 hover:text-white">Process</button>
            <button onClick={() => scrollToSection('why-choose-us-section')} className="py-2 text-sm font-semibold text-zinc-400 hover:text-white">Why Us</button>
            <button onClick={() => scrollToSection('case-studies-section')} className="py-2 text-sm font-semibold text-zinc-400 hover:text-white">Results</button>
            <button onClick={() => scrollToSection('faq-section')} className="py-2 text-sm font-semibold text-zinc-400 hover:text-white">FAQs</button>
            <div className="pt-2">
              <button
                onClick={openBlueprintModal}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-sans text-xs font-bold py-3 rounded-lg cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                <span>Request a Growth Blueprint</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Layout (Strictly in the requested Section Order) */}
      <main className="relative">
        
        {/* 1. Hero Section */}
        <HeroSection 
          onRequestBlueprint={openBlueprintModal} 
          onSeeCaseStudies={() => scrollToSection('case-studies-section')} 
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
        <CaseStudies onRequestBlueprint={openBlueprintModal} />

        {/* 7. Testimonial Section */}
        <Testimonial />

        {/* 8. Related Services Section */}
        <RelatedServices />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Final CTA Section */}
        <FinalCTA onRequestBlueprint={openBlueprintModal} />

      </main>

      {/* 11. B2B Corporate Footer */}
      <footer className="bg-[#09090b] border-t border-zinc-900 py-12 md:py-16 text-left text-zinc-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-zinc-900">
            
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 font-mono font-black text-xs">
                  SL
                </div>
                <div>
                  <span className="font-sans text-sm font-extrabold tracking-tight text-white block">SiteOn<span className="text-blue-500">Lab</span></span>
                  <span className="font-mono text-[8px] uppercase tracking-widest block font-bold mt-[-3px]">REVENUE PIPELINE ARCHITECTS</span>
                </div>
              </div>
              
              <p className="font-sans text-xs leading-relaxed text-zinc-400 max-w-sm">
                SiteOnLab transforms organic search and generative AI visibility into compounding revenue channels for enterprise SaaS, cybersecurity, and tech platforms.
              </p>

              <div className="flex items-center space-x-3 text-zinc-400 font-mono text-[11px]">
                <Globe className="h-4 w-4 text-blue-500" />
                <span>siteonlab.com</span>
                <span className="text-zinc-850">|</span>
                <Mail className="h-4 w-4 text-blue-500" />
                <span>growth@siteonlab.com</span>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-4 grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">CORE SERVICES</span>
                <ul className="space-y-2 font-sans text-xs text-zinc-500">
                  <li><a href="#service-overview-section" className="hover:text-blue-400 transition-colors">Content Marketing</a></li>
                  <li><a href="#related-services-section" className="hover:text-blue-400 transition-colors">AI Search (GEO)</a></li>
                  <li><a href="#related-services-section" className="hover:text-blue-400 transition-colors">Technical SEO</a></li>
                  <li><a href="#related-services-section" className="hover:text-blue-400 transition-colors">Revenue Measurement</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">RESOURCES</span>
                <ul className="space-y-2 font-sans text-xs text-zinc-500">
                  <li><button onClick={() => scrollToSection('case-studies-section')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Case Studies</button></li>
                  <li><button onClick={() => scrollToSection('faq-section')} className="hover:text-blue-400 transition-colors cursor-pointer text-left">FAQs</button></li>
                  <li><button onClick={openBlueprintModal} className="hover:text-blue-400 transition-colors cursor-pointer text-left">Scorecard Builder</button></li>
                  <li><a href="https://siteonlab.com" target="_blank" rel="noreferrer noopener" className="hover:text-blue-400 transition-colors inline-flex items-center space-x-1"><span>Main Site</span> <ExternalLink className="h-2.5 w-2.5" /></a></li>
                </ul>
              </div>
            </div>

            {/* Certifications right */}
            <div className="md:col-span-3 space-y-3.5">
              <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-bold">ALIGNED ECOSYSTEMS</span>
              <div className="space-y-2 text-[11px] text-zinc-400 font-sans leading-relaxed">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Certified HubSpot App Partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Google Search Partner Network</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Salesforce AppExchange Vendor</span>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-600">
            <span>© {new Date().getFullYear()} SiteOnLab. All Rights Reserved.</span>
            <div className="flex items-center space-x-4">
              <a href="#privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#terms" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
              <span>·</span>
              <span className="text-blue-500/60 uppercase tracking-widest">Revenue-First Content Architecture</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 12. Strategy & Blueprint Modal */}
      <BlueprintModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
