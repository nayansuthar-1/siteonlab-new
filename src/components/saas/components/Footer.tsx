"use client";

import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Logo & Tagline (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <a 
              href="#" 
              className="flex items-center gap-2 focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="w-8 h-8 rounded-sm bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-cyan-500"></div>
                <span className="relative font-display font-bold text-white text-base">S</span>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tighter">
                SiteOn<span className="text-blue-500">Lab</span>
              </span>
            </a>
            
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              SiteOnLab is an AI-powered B2B revenue growth and AI search visibility agency. We make B2B companies the brand buyers find in Google and get recommended in ChatGPT, Perplexity, and AI Overviews.
            </p>

            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-sm bg-slate-900 hover:bg-blue-600/10 hover:text-blue-500 border border-slate-800 transition-colors" aria-label="LinkedIn profile">
                <Linkedin size={14} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-sm bg-slate-900 hover:bg-blue-600/10 hover:text-blue-500 border border-slate-800 transition-colors" aria-label="Twitter profile">
                <Twitter size={14} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-sm bg-slate-900 hover:bg-blue-600/10 hover:text-blue-500 border border-slate-800 transition-colors" aria-label="GitHub profile">
                <Github size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Services (2 cols on lg) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">AI Search & GEO</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">SEO & Content Strategy</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">Paid Media & ICP PPC</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">Web Optimization & CRO</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-white transition-colors">Revenue Attribution</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries (2 cols on lg) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Industries</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <span className="text-blue-500 font-semibold cursor-default">B2B SaaS (Active)</span>
              </li>
              <li>
                <a href="#ai-visibility-assessment" onClick={(e) => handleNavClick(e, "#ai-visibility-assessment")} className="hover:text-white transition-colors">IT Services & MSPs</a>
              </li>
              <li>
                <a href="#ai-visibility-assessment" onClick={(e) => handleNavClick(e, "#ai-visibility-assessment")} className="hover:text-white transition-colors">Cybersecurity Platforms</a>
              </li>
              <li>
                <a href="#ai-visibility-assessment" onClick={(e) => handleNavClick(e, "#ai-visibility-assessment")} className="hover:text-white transition-colors">Professional Services</a>
              </li>
              <li>
                <a href="#ai-visibility-assessment" onClick={(e) => handleNavClick(e, "#ai-visibility-assessment")} className="hover:text-white transition-colors">Advanced Manufacturing</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Resources (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Contact & Corporate</h4>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex gap-2.5 items-start">
                <MapPin size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <address className="not-italic text-slate-400 leading-normal">
                  85 Broad Street, 18th Floor<br />
                  New York, NY 10004
                </address>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail size={14} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:intelligence@siteonlab.com" className="hover:text-white transition-colors">intelligence@siteonlab.com</a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone size={14} className="text-blue-500 flex-shrink-0" />
                <a href="tel:+18005550192" className="hover:text-white transition-colors">+1 (800) 555-0192</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
          <div>
            &copy; {currentYear} SiteOnLab LLC. All rights reserved. 
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
