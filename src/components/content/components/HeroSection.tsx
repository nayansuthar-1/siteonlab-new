"use client";

import { HERO_CONTENT } from '../data';
import HeroGraphics from './HeroGraphics';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onRequestBlueprint: () => void;
  onSeeCaseStudies: () => void;
}

export default function HeroSection({ onRequestBlueprint, onSeeCaseStudies }: HeroSectionProps) {
  return (
    <section id="hero-section" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-12 right-1/4 h-[450px] w-[450px] rounded-full bg-blue-950/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 h-[300px] w-[300px] rounded-full bg-emerald-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Hero text content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Service Category & Name Eyebrow */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] tracking-wider uppercase font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>B2B Content Marketing</span>
              <span className="text-zinc-700">|</span>
              <span>Enterprise Growth Engine</span>
            </div>

            {/* Custom Structured H1 */}
            <h1 className="font-sans text-3.5xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              The <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">Content Marketing</span> agency that drives demos, sales inquiries, and qualified pipeline.
            </h1>

            {/* Subheading with explicit benefit mappings */}
            <p className="font-sans text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              HybridMonks helps <strong className="text-zinc-200">B2B SaaS, technology, cybersecurity, and professional-services</strong> companies turn content marketing into a measurable revenue channel. We help you <span className="text-emerald-400 font-medium">rank for buyer-intent searches</span>, <span className="text-blue-400 font-medium">get cited by AI engines</span>, and <span className="text-blue-500 font-medium">convert visibility into qualified pipeline</span> — measured by qualified pipeline, not vanity metrics.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md sm:max-w-none">
              <button
                id="hero-primary-cta"
                onClick={onRequestBlueprint}
                className="flex items-center justify-center space-x-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-sans text-sm font-bold py-3.5 px-7 rounded-xl shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-98 transition-all duration-150 cursor-pointer"
              >
                <span>{HERO_CONTENT.primaryCTA}</span>
                <ArrowRight className="h-4 w-4 text-blue-250" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onSeeCaseStudies}
                className="flex items-center justify-center space-x-2 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-sans text-sm font-semibold py-3.5 px-7 rounded-xl active:scale-98 transition-all duration-150 cursor-pointer"
              >
                <FileText className="h-4 w-4 text-blue-400" />
                <span>{HERO_CONTENT.secondaryCTA}</span>
              </button>
            </div>

            {/* Trust Badging under CTAs */}
            <div className="pt-4 border-t border-zinc-900 max-w-xl flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-500 font-mono">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/80" />
                <span>No mock metrics</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/80" />
                <span>100% Salesforce & HubSpot aligned</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/80" />
                <span>Expert interviews guaranteed</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Interactive related graphics panel */}
          <div className="lg:col-span-5 w-full">
            <HeroGraphics />
          </div>

        </div>
      </div>
    </section>
  );
}
