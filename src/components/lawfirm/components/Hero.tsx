"use client";

import React from "react";
import { ArrowRight, Award, Shield } from "lucide-react";

interface HeroProps {
  onOpenBlueprint: () => void;
  onScrollToCases: () => void;
}

export default function Hero({ onOpenBlueprint, onScrollToCases }: HeroProps) {
  return (
    <header className="relative bg-[#0A0A0B] text-[#E0E0E1] overflow-hidden border-b border-white/10 py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-[#3b82f6]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Copywriting */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Eyebrow */}
            <div className="flex items-center space-x-2">
              <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] opacity-90 bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
                Industries | Law Firms
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-light tracking-tight text-white leading-[1.1] text-left">
              B2B Marketing for <span className="italic font-serif text-[#3b82f6]">Law Firms</span> that drives qualified pipeline and revenue.
            </h1>

            {/* Supporting Copy */}
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl font-light font-sans text-left">
              HybridMonks helps elite law firms establish jurisdictional dominance and secure high-value signed cases. By integrating authoritative practice-area SEO, pioneering Generative Engine Optimization (GEO) for AI search tools, prestige-tier web portals, and bar-compliant intake automation, we align your marketing directly with billable partner revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={onOpenBlueprint}
                className="group flex items-center justify-center space-x-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Request Growth Blueprint</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={onScrollToCases}
                className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>See Case Studies</span>
              </button>
            </div>

            {/* Minimal Compliance & Quality Badges */}
            <div className="flex items-center space-x-6 pt-4 text-white/40 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-[#3b82f6]/80" />
                <span>100% Bar-Compliance Vetted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-[#3b82f6]/80" />
                <span>B2B Pipeline Specialists</span>
              </div>
            </div>
          </div>

          {/* Right Side: Simple Static Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-square bg-[#0A0A0B] rounded-sm border border-white/10 p-8 flex items-center justify-center shadow-2xl">
              {/* Ambient Background Grid lines */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5 pointer-events-none">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border-t border-l border-white" />
                ))}
              </div>

              {/* Static SVG Illustration: Scales of Justice + Growth Path */}
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-[#E0E0E1] select-none"
              >
                {/* Outer circular network border */}
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-white/10" />
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" className="text-white/5" />

                {/* Data Growth Grids & Target Intercept Lines (Static) */}
                <path d="M 30 150 L 170 150" stroke="currentColor" strokeWidth="1" className="text-white/10" />
                <path d="M 30 150 L 170 30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" className="text-[#3b82f6]/20" />
                
                {/* Pipeline nodes (Static) */}
                <circle cx="65" cy="120" r="3" className="fill-white/10" />
                <circle cx="100" cy="90" r="3.5" className="fill-[#3b82f6]/30" />
                <circle cx="135" cy="60" r="4" className="fill-[#3b82f6]" />
                
                {/* Core Legal Element: Modernist Pillars & Pedestal */}
                <rect x="85" y="140" width="30" height="6" rx="1" className="fill-[#0A0A0B] stroke-white/10" strokeWidth="1" />
                <rect x="90" y="135" width="20" height="5" rx="0.5" className="fill-[#0A0A0B] stroke-white/10" strokeWidth="0.5" />
                <line x1="100" y1="50" x2="100" y2="135" stroke="currentColor" strokeWidth="2.5" className="text-white/30" />

                {/* Crossbeam of the Scales (Balanced - completely level, denoting precision) */}
                <path d="M 50 65 L 150 65" stroke="currentColor" strokeWidth="2" className="text-[#3b82f6]" />
                <circle cx="100" cy="65" r="4.5" className="fill-[#0A0A0B] stroke-[#3b82f6]" strokeWidth="1.5" />
                
                {/* Left Scale Pan Assembly (Balanced) */}
                <line x1="50" y1="65" x2="35" y2="105" stroke="currentColor" strokeWidth="0.75" className="text-white/20" />
                <line x1="50" y1="65" x2="65" y2="105" stroke="currentColor" strokeWidth="0.75" className="text-white/20" />
                <path d="M 30 105 C 30 115, 70 115, 70 105 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#3b82f6]/40" />
                <circle cx="50" cy="107" r="1.5" className="fill-[#3b82f6]" />

                {/* Right Scale Pan Assembly (Balanced) */}
                <line x1="150" y1="65" x2="135" y2="105" stroke="currentColor" strokeWidth="0.75" className="text-white/20" />
                <line x1="150" y1="65" x2="165" y2="105" stroke="currentColor" strokeWidth="0.75" className="text-white/20" />
                <path d="M 130 105 C 130 115, 170 115, 170 105 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#3b82f6]/40" />
                <circle cx="150" cy="107" r="1.5" className="fill-[#3b82f6]" />

                {/* Central Equilibrium Indicator */}
                <polygon points="100,52 97,62 103,62" className="fill-[#3b82f6]" />

                {/* Growth Trend Accent Overlay (representing pipeline acceleration) */}
                <path d="M 30 170 Q 100 160 170 100" stroke="currentColor" strokeWidth="1.5" className="text-white/10" />
                <path d="M 30 170 Q 100 130 170 50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" className="text-[#3b82f6]/30" />
                
                {/* Small entity coordinate labels */}
                <text x="35" y="165" className="text-[6px] font-mono fill-white/20" letterSpacing="0.1">JURISDICTION</text>
                <text x="145" y="42" className="text-[6px] font-mono fill-[#3b82f6]" letterSpacing="0.1">PIPELINE</text>
              </svg>

              {/* Accent Border Badges */}
              <div className="absolute top-4 left-4 text-[9px] font-mono text-white/40 uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-sm">
                System 1.0b
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-[#3b82f6] tracking-widest bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm">
                PRECISION GRID
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Trust Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-white/10 pt-10">
          <div>
            <div className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">240%</div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1.5">Pipeline Growth</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">LLM #1</div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1.5">AI Search Visibility</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">B2B Spec</div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1.5">Legal Practice Focus</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-light text-white font-serif tracking-tight">$42M+</div>
            <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1.5">Attributed Revenue</div>
          </div>
        </div>
      </div>
    </header>
  );
}
