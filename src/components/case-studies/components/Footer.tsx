"use client";

import { Linkedin, Twitter, Youtube, ArrowRight, Github, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs relative overflow-hidden">
      {/* Subtle top background decorative glow */}
      <div id="footer-ambient-glow" className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-accent/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <a href="#" id="footer-logo" className="flex items-center gap-2 group">
              <div className="relative w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-accent to-brand-orange flex items-center justify-center text-white font-bold text-lg shadow-md">
                S
                <div className="absolute inset-0.5 rounded-[6px] bg-slate-950 flex items-center justify-center text-white font-display font-bold">
                  S
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  Hybrid<span className="text-brand-orange">Monks</span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-slate-400 uppercase leading-none">
                  AI Revenue Agency
                </span>
              </div>
            </a>
            
            <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
              The AI-powered B2B revenue growth and AI visibility agency. We construct technical organic engines that command recommendations in search engines and AI agents alike.
            </p>

            {/* Newsletter form */}
            <div className="space-y-3 max-w-sm">
              <span className="block text-[10px] font-bold tracking-wider text-slate-300 uppercase">
                Subscribe to B2B Revenue Insights
              </span>
              <div className="flex rounded-lg overflow-hidden border border-slate-800/80 focus-within:border-brand-accent transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter your work email"
                  id="newsletter-email"
                  className="bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none w-full"
                />
                <button 
                  id="btn-newsletter-submit"
                  className="bg-brand-accent hover:bg-blue-600 text-white px-3.5 flex items-center justify-center transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a href="#" id="social-linkedin" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" id="social-twitter" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" id="social-github" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" id="social-youtube" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: Services */}
          <div className="space-y-4">
            <span className="block text-[11px] font-bold tracking-wider text-slate-200 uppercase">
              Services
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#service-geo" className="hover:text-white transition-colors">Generative Engine Optimization (GEO)</a></li>
              <li><a href="#service-seo" className="hover:text-white transition-colors">Revenue-Focused SEO</a></li>
              <li><a href="#service-demand" className="hover:text-white transition-colors">Account-Based Demand Gen</a></li>
              <li><a href="#service-cro" className="hover:text-white transition-colors">Web Architecture & CRO</a></li>
              <li><a href="#service-leads" className="hover:text-white transition-colors">B2B Lead Conversion Systems</a></li>
            </ul>
          </div>

          {/* Col 2: Industries */}
          <div className="space-y-4">
            <span className="block text-[11px] font-bold tracking-wider text-slate-200 uppercase">
              Industries
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#industry-saas" className="hover:text-white transition-colors">B2B SaaS</a></li>
              <li><a href="#industry-msp" className="hover:text-white transition-colors">IT Services & MSPs</a></li>
              <li><a href="#industry-cyber" className="hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#industry-prof" className="hover:text-white transition-colors">Professional Services</a></li>
              <li><a href="#industry-mfg" className="hover:text-white transition-colors">Advanced Manufacturing</a></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-4">
            <span className="block text-[11px] font-bold tracking-wider text-slate-200 uppercase">
              Company
            </span>
            <ul className="space-y-2.5 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About HybridMonks</a></li>
              <li><a href="#framework" className="hover:text-white transition-colors">Our Methodology</a></li>
              <li><a href="#resources" className="hover:text-white transition-colors">B2B Search Lab</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Team</a></li>
            </ul>
          </div>

        </div>

        {/* Divider & Legal Strip */}
        <div className="border-t border-slate-900/80 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            <span>© {currentYear} HybridMonks. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
