"use client";

import { HERO_CONTENT } from "../data/copywriting";
import { ArrowUpRight, ShieldCheck, Cpu, LayoutGrid } from "lucide-react";

interface HeroSectionProps {
  onRequestBlueprint: () => void;
  onSeeCaseStudies: () => void;
}

export default function HeroSection({ onRequestBlueprint, onSeeCaseStudies }: HeroSectionProps) {
  return (
    <section id="hero" className="relative bg-[#0A0A0B] text-slate-200 overflow-hidden pt-28 pb-20 border-b border-slate-800/50">
      {/* Blueprint Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#3B82F6 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }}></div>
      
      {/* Ambient Lighting Gradient */}
      <div className="absolute top-0 right-0 w-[45rem] h-[35rem] bg-blue-950/20 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[30rem] h-[30rem] bg-slate-900/20 blur-[100px] rounded-full pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Copy Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            {HERO_CONTENT.eyebrow}
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white leading-[1.1]">
            B2B marketing for <span className="text-blue-500 italic">Manufacturing & Industrial</span> companies that drives qualified pipeline.
          </h1>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-sans max-w-xl">
            {HERO_CONTENT.supporting}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <button
              id="hero-cta-primary"
              onClick={onRequestBlueprint}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20 text-sm cursor-pointer hover:-translate-y-0.5"
            >
              {HERO_CONTENT.ctaPrimary}
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              id="hero-cta-secondary"
              onClick={onSeeCaseStudies}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 hover:bg-slate-800 text-white font-bold rounded-lg transition-all text-sm cursor-pointer"
            >
              {HERO_CONTENT.ctaSecondary}
            </button>
          </div>
 
          {/* Quick trust stamps */}
          <div className="flex flex-wrap gap-6 pt-6 text-slate-500 text-xs font-mono border-t border-slate-800/80 w-full">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-500/80" />
              <span>ISO 9001 & AS9100 Standard-Ready SEO</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-500/80" />
              <span>AI Engine Citation Optimizations</span>
            </div>
          </div>
        </div>
 
        {/* Right Graphic Column: Static Technical Blueprint Drawing */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md bg-slate-900/80 border border-slate-700/50 rounded-2xl p-6 relative shadow-2xl backdrop-blur-xl">
            {/* Corner Bracket decorations */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-slate-750 pointer-events-none"></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-slate-750 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-slate-750 pointer-events-none"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-slate-750 pointer-events-none"></div>
 
            <div className="flex justify-between items-center pb-4 border-b border-slate-800 text-xs font-mono text-slate-500">
              <div className="flex items-center gap-1.5">
                <LayoutGrid className="w-3.5 h-3.5 text-blue-500" />
                <span>SHEET_01: CAPABILITIES_MAP</span>
              </div>
              <span className="text-slate-600">SCALE: 1:1</span>
            </div>
 
            {/* Static High-Contrast Industrial Blueprint SVG Graphic */}
            <div className="my-6 aspect-square w-full bg-slate-950/90 rounded-lg border border-slate-800/80 p-4 flex items-center justify-center relative overflow-hidden">
              <svg 
                viewBox="0 0 400 400" 
                className="w-full h-full text-slate-700 stroke-1"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Micro-grid coordinates system */}
                <g stroke="#121214" strokeWidth="0.5">
                  <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150 M 0,200 L 400,200 M 0,250 L 400,250 M 0,300 L 400,300 M 0,350 L 400,350" />
                  <path d="M 50,0 L 50,400 M 100,0 L 100,400 M 150,0 L 150,400 M 200,0 L 200,400 M 250,0 L 250,400 M 300,0 L 300,400 M 350,0 L 350,400" />
                </g>
 
                {/* Concentric Calibration Rings */}
                <circle cx="200" cy="200" r="140" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="100" stroke="#334155" strokeWidth="1" />
                <circle cx="200" cy="200" r="10" stroke="#3b82f6" strokeWidth="1.5" />
 
                {/* Isometric Axis Lines */}
                <line x1="60" y1="60" x2="340" y2="340" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 4" />
                <line x1="340" y1="60" x2="60" y2="340" stroke="#1e293b" strokeWidth="1" strokeDasharray="2 4" />
 
                {/* Modular Smart Manufacturing Nodes & Component Blueprint */}
                {/* Node 1: Sourcing Database / SEO Entity */}
                <g transform="translate(100, 120)">
                  <rect x="-35" y="-15" width="70" height="30" rx="4" fill="#09090b" stroke="#334155" strokeWidth="1" />
                  <text x="0" y="4" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">SEO_ENTITY</text>
                  <circle cx="0" cy="-15" r="3" fill="#3b82f6" />
                </g>
 
                {/* Node 2: Manufacturing AI Model Citations */}
                <g transform="translate(300, 120)">
                  <rect x="-35" y="-15" width="70" height="30" rx="4" fill="#09090b" stroke="#334155" strokeWidth="1" />
                  <text x="0" y="4" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">LLM_INDEX</text>
                  <circle cx="0" cy="-15" r="3" fill="#3b82f6" />
                </g>
 
                {/* Node 3: RFQ Conversion Engine */}
                <g transform="translate(200, 280)">
                  <rect x="-35" y="-15" width="70" height="30" rx="4" fill="#09090b" stroke="#2563eb" strokeWidth="1.5" />
                  <text x="0" y="4" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">RFQ_PORTAL</text>
                  <circle cx="0" cy="15" r="3" fill="#3b82f6" />
                </g>
 
                {/* Linking Technical Data Pipelines */}
                <path d="M 100,135 L 100,200 L 165,200" stroke="#1e293b" strokeWidth="1.5" />
                <path d="M 300,135 L 300,200 L 235,200" stroke="#1e293b" strokeWidth="1.5" />
                <path d="M 200,200 L 200,265" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
 
                {/* Technical Dimension Callouts & Indicator Marks */}
                <line x1="200" y1="40" x2="200" y2="180" stroke="#334155" strokeWidth="1" />
                <path d="M 197,50 L 200,40 L 203,50" fill="none" stroke="#334155" strokeWidth="1" />
                
                {/* Horizontal blueprint measurements */}
                <line x1="50" y1="360" x2="350" y2="360" stroke="#2563eb" strokeWidth="1" opacity="0.6" />
                <line x1="50" y1="355" x2="50" y2="365" stroke="#2563eb" strokeWidth="1" opacity="0.6" />
                <line x1="350" y1="355" x2="350" y2="365" stroke="#2563eb" strokeWidth="1" opacity="0.6" />
                <text x="200" y="375" fill="#3b82f6" fontSize="9" fontFamily="monospace" textAnchor="middle">REVENUE_TARGET: +320% RFQs</text>
 
                {/* Grid Overlay / Elevation detail */}
                <path d="M 50,230 L 70,210 L 110,210 L 130,230 L 110,250 L 70,250 Z" stroke="#1e293b" strokeWidth="1" />
                <text x="90" y="233" fill="#475569" fontSize="7" fontFamily="monospace">ISO_9001</text>
 
                <path d="M 270,230 L 290,210 L 330,210 L 350,230 L 330,250 L 290,250 Z" stroke="#1e293b" strokeWidth="1" />
                <text x="308" y="233" fill="#475569" fontSize="7" fontFamily="monospace">AS_9100</text>
              </svg>
            </div>
 
            {/* Technical Parameters Readout */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-[10px] font-mono text-slate-400">
              <div>
                <span className="text-slate-600 block">OPTIMIZATION ENGINE:</span>
                <span className="text-blue-400">SITEONLAB_GEO_v4.1</span>
              </div>
              <div>
                <span className="text-slate-600 block">CYCLES COHORT:</span>
                <span className="text-slate-300">B2B_INDUSTRIAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
