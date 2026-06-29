"use client";

import React from 'react';
import { LineChart, BarChart2, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function HeroGraphic() {
  return (
    <div id="hero-graphic" className="relative w-full max-w-xl mx-auto xl:max-w-none bg-white/[0.02] border border-white/10 rounded-lg p-6 shadow-2xl overflow-hidden font-sans">
      {/* Subtle glowing ambient background radial gradient */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar of the dashboard mockup */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <span className="w-3 h-3 bg-red-500/60 rounded-full inline-block" />
            <span className="w-3 h-3 bg-yellow-500/60 rounded-full inline-block" />
            <span className="w-3 h-3 bg-emerald-500/60 rounded-full inline-block" />
          </div>
          <span className="text-xs font-mono text-white/40">siteonlab_growth_engine_v4.0.sys</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/5 px-2.5 py-1 rounded border border-white/10">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse" />
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">Live Pipeline</span>
        </div>
      </div>

      {/* Main KPI Row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white/[0.04] p-3.5 rounded-sm border border-white/10">
          <div className="flex items-center justify-between text-white/50 mb-1.5">
            <span className="text-[10px] font-medium tracking-wider uppercase">Organic SEO</span>
            <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div className="text-lg font-bold text-[#F8F8F8] font-display">84,290</div>
          <div className="text-[10px] text-emerald-400 font-semibold mt-0.5 flex items-center">
            <span>+142%</span>
            <span className="text-white/40 font-normal ml-1">vs L30D</span>
          </div>
        </div>

        <div className="bg-white/[0.04] p-3.5 rounded-sm border border-white/10">
          <div className="flex items-center justify-between text-white/50 mb-1.5">
            <span className="text-[10px] font-medium tracking-wider uppercase">AI Search Citations</span>
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-lg font-bold text-[#F8F8F8] font-display">88.4%</div>
          <div className="text-[10px] text-emerald-400 font-semibold mt-0.5 flex items-center">
            <span>Top Rec</span>
            <span className="text-white/40 font-normal ml-1">in SaaS</span>
          </div>
        </div>

        <div className="bg-white/[0.04] p-3.5 rounded-sm border border-white/10">
          <div className="flex items-center justify-between text-white/50 mb-1.5">
            <span className="text-[10px] font-medium tracking-wider uppercase">Pipeline Velocity</span>
            <Users className="w-3.5 h-3.5 text-blue-300" />
          </div>
          <div className="text-lg font-bold text-[#F8F8F8] font-display">3.4x</div>
          <div className="text-[10px] text-emerald-400 font-semibold mt-0.5 flex items-center">
            <span>Accelerated</span>
            <span className="text-white/40 font-normal ml-1">Cycles</span>
          </div>
        </div>
      </div>

      {/* Main Vector Diagram representing Closed-Won Attribution Pipeline */}
      <div className="bg-white/[0.02] border border-white/5 rounded-sm p-4 mb-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white/80">Revenue attribution dashboard</span>
            <span className="text-[10px] text-white/40">Full-funnel traffic mapped directly to CRM opportunities</span>
          </div>
          <span className="text-xs font-mono text-blue-400 font-bold">$142.8M Attributed</span>
        </div>

        {/* Vector SVG Chart representing the pipeline growth */}
        <div className="relative h-44 w-full bg-white/[0.02] rounded-sm border border-white/10 p-2 overflow-hidden flex items-end">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between py-4 pointer-events-none opacity-20">
            <div className="border-b border-white/10 w-full" />
            <div className="border-b border-white/10 w-full" />
            <div className="border-b border-white/10 w-full" />
            <div className="border-b border-white/10 w-full" />
          </div>
          <div className="absolute inset-0 flex justify-between px-6 pointer-events-none opacity-10">
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-white/10 h-full" />
            <div className="border-l border-white/10 h-full" />
          </div>

          {/* SVG curves */}
          <svg className="absolute inset-0 w-full h-full p-1" viewBox="0 0 400 160" fill="none" preserveAspectRatio="none">
            {/* Legend / Gradient Definition */}
            <defs>
              <linearGradient id="blue-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="emerald-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Competitor / Old Channel line (Flat / slow growing) */}
            <path
              d="M 10 130 Q 100 120 200 115 T 390 100"
              fill="none"
              stroke="#475569"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* SiteOnLab SEO Organic line (Steady curve) */}
            <path
              d="M 10 140 C 80 130, 150 90, 220 60 T 390 20"
              fill="url(#blue-grad)"
              opacity="0.6"
            />
            <path
              d="M 10 140 C 80 130, 150 90, 220 60 T 390 20"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />

            {/* SiteOnLab AI Search Citations + High-Intent Paid line (Explosive hockey stick) */}
            <path
              d="M 10 150 C 90 140, 140 100, 200 50 T 390 10"
              fill="url(#emerald-grad)"
              opacity="0.8"
            />
            <path
              d="M 10 150 C 90 140, 140 100, 200 50 T 390 10"
              fill="none"
              stroke="#10b981"
              strokeWidth="3.5"
            />

            {/* Highlighted Nodes */}
            <circle cx="200" cy="50" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="390" cy="10" r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="220" cy="60" r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
            <circle cx="390" cy="20" r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="1" />
          </svg>

          {/* Node Overlay Labels */}
          <div className="absolute top-[35px] left-[150px] bg-[#0A0A0B] border border-white/10 text-[9px] font-mono px-1.5 py-0.5 rounded text-blue-300">
            CRM Integration Live
          </div>
          <div className="absolute top-[8px] right-[40px] bg-[#0A0A0B] border border-white/10 text-[9px] font-mono px-1.5 py-0.5 rounded text-emerald-400 font-semibold">
            AI Overviews: Primary Brand Citation
          </div>
        </div>

        {/* Chart Legend */}
        <div className="flex items-center justify-between text-[10px] text-white/40 mt-2 font-mono">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-1 bg-emerald-400 inline-block rounded-full" />
              <span>SiteOnLab System</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-1 bg-blue-500 inline-block rounded-full" />
              <span>Organic Tech SEO</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-1 bg-slate-600 inline-block rounded-full border-dashed" />
              <span>Industry Average</span>
            </div>
          </div>
          <span>Updated: Real-Time Sync</span>
        </div>
      </div>

      {/* Verified Pipeline Attribution Ledger Block */}
      <div className="bg-white/[0.04] border border-white/10 rounded-sm p-4">
        <span className="text-xs font-semibold text-white/80 block mb-3">Enterprise Sales Cycle Milestones</span>
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs bg-[#0A0A0B]/60 p-2.5 rounded border border-white/5">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-medium text-white/75">AetherShield Cybersecurity</span>
            </div>
            <div className="text-[10px] font-mono text-white/40">Contract Closed: $1.2M ACV</div>
          </div>

          <div className="flex items-center justify-between text-xs bg-[#0A0A0B]/60 p-2.5 rounded border border-white/5">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-medium text-white/75">DevSecOps Core Platform</span>
            </div>
            <div className="text-[10px] font-mono text-white/40">SQL Conversion: L14D</div>
          </div>

          <div className="flex items-center justify-between text-xs bg-[#0A0A0B]/60 p-2.5 rounded border border-white/5">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="font-medium text-white/75">QuantumDB Cloud Engine</span>
            </div>
            <div className="text-[10px] font-mono text-white/40">AI Citation Click {"→"} Demo Form</div>
          </div>
        </div>
      </div>

      {/* Decorative design attributes (Honoring architectural honesty - clean labels) */}
      <div className="mt-4 flex items-center justify-between text-[10px] text-white/30 border-t border-white/10 pt-3">
        <span>SiteOnLab B2B Engine v4.0</span>
        <span>Secure SSL Data Pipeline</span>
      </div>
    </div>
  );
}
