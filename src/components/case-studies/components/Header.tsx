"use client";

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, HelpCircle, Activity, Box, Shield, Briefcase, ChevronDown } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor page scroll to add a glassmorphism blur background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative w-full z-50">
      {/* SECTION 1: STICKY ANNOUNCEMENT BAR */}
      <div 
        id="announcement-bar" 
        className="w-full bg-blue-600/10 border-b border-blue-500/20 px-6 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 relative z-50"
      >
        <span className="inline-flex items-center gap-1.5 font-medium text-[11px] tracking-wide text-blue-400 uppercase">
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" id="announcement-spark" />
          <span>Now helping B2B teams get cited in ChatGPT, Perplexity & AI Overviews</span>
        </span>
        <a 
          href="#book-a-call" 
          id="btn-announcement-cta"
          className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded font-bold uppercase tracking-tighter hover:bg-blue-500 transition-colors duration-200"
        >
          Book a Meeting
        </a>
      </div>

      {/* SECTION 2: NAVIGATION */}
      <nav 
        id="sticky-navigation"
        className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'fixed top-0 left-0 right-0 bg-brand-bg/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
            : 'absolute bg-transparent border-b border-transparent'
        }`}
        style={{
          top: scrolled ? '0' : 'auto'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" id="site-logo" className="flex items-center gap-2 group">
                <div className="relative w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-accent to-brand-orange flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-200">
                  S
                  <div className="absolute inset-0.5 rounded-[6px] bg-slate-950 flex items-center justify-center text-white font-display font-bold">
                    S
                  </div>
                  {/* Glowing core indicator */}
                  <div className="absolute right-1 top-1 w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold tracking-tight text-white">
                    SiteOn<span className="text-brand-orange">Lab</span>
                  </span>
                  <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none">
                    AI Revenue Agency
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2">
              <a 
                href="#framework" 
                id="nav-framework"
                className="px-3 py-2 rounded-md text-xs font-medium tracking-wide text-slate-300 hover:text-white hover:bg-slate-900/40 transition-all duration-200"
              >
                Framework
              </a>
              <div className="relative group">
                <button 
                  id="nav-services"
                  className="px-3 py-2 rounded-md text-xs font-medium tracking-wide text-slate-300 hover:text-white hover:bg-slate-900/40 transition-all duration-200 flex items-center gap-1.5"
                >
                  Services
                  <ChevronDown className="w-3 h-3 text-slate-500" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1.5 w-60 rounded-xl bg-slate-950 border border-slate-800/80 p-2 shadow-2xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200">
                  <a href="#service-geo" className="block px-3 py-2 rounded-lg hover:bg-slate-900 text-xs text-slate-300 hover:text-white transition-colors">
                    Generative Engine Optimization (GEO)
                  </a>
                  <a href="#service-seo" className="block px-3 py-2 rounded-lg hover:bg-slate-900 text-xs text-slate-300 hover:text-white transition-colors">
                    Revenue-Focused SEO
                  </a>
                  <a href="#service-demand" className="block px-3 py-2 rounded-lg hover:bg-slate-900 text-xs text-slate-300 hover:text-white transition-colors">
                    Account-Based Demand Gen
                  </a>
                  <a href="#service-cro" className="block px-3 py-2 rounded-lg hover:bg-slate-900 text-xs text-slate-300 hover:text-white transition-colors">
                    Web Architecture & CRO
                  </a>
                </div>
              </div>
              
              <a 
                href="#industries" 
                id="nav-industries"
                className="px-3 py-2 rounded-md text-xs font-medium tracking-wide text-slate-300 hover:text-white hover:bg-slate-900/40 transition-all duration-200"
              >
                Industries
              </a>
              <a 
                href="#" 
                id="nav-case-studies"
                className="px-3 py-2 rounded-md text-xs font-semibold tracking-wide bg-brand-accent-glow text-blue-400 border border-brand-accent/20 transition-all duration-200"
              >
                Case Studies
              </a>
              <a 
                href="#about" 
                id="nav-about"
                className="px-3 py-2 rounded-md text-xs font-medium tracking-wide text-slate-300 hover:text-white hover:bg-slate-900/40 transition-all duration-200"
              >
                About
              </a>
              <a 
                href="#resources" 
                id="nav-resources"
                className="px-3 py-2 rounded-md text-xs font-medium tracking-wide text-slate-300 hover:text-white hover:bg-slate-900/40 transition-all duration-200"
              >
                Resources
              </a>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="#book-a-call" 
                id="nav-btn-cta"
                className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-accent hover:bg-blue-600 active:bg-blue-700 shadow-md shadow-brand-accent-glow transition-all duration-200"
              >
                Book a Strategy Call
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-btn"
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div 
          id="mobile-navigation-drawer"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100 border-b border-slate-800 bg-brand-bg/95 backdrop-blur-lg' 
              : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 text-center border-t border-slate-900">
            <a 
              href="#framework" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Framework
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Services
            </a>
            <a 
              href="#industries" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Industries
            </a>
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-semibold text-blue-400 bg-brand-accent-glow border border-brand-accent/20"
            >
              Case Studies
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              About
            </a>
            <a 
              href="#resources" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Resources
            </a>
            
            <div className="pt-4 px-3">
              <a 
                href="#book-a-call" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-accent hover:bg-blue-600 transition-all duration-200"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacing correction so static nav doesn't jump under fix navigation */}
      <div className="h-20 lg:h-24 w-full" />
    </header>
  );
}
