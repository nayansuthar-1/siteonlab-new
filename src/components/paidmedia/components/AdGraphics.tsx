"use client";

import React from "react";
import { Search, Users, TrendingUp, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

export default function AdGraphics() {
  return (
    <div className="relative w-full max-w-md mx-auto" id="hero-graphics-container">
      {/* Background radial soft ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/10 via-blue-900/5 to-transparent rounded blur-3xl pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative bg-[#111114] rounded p-5 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-900 mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">Live Bid Optimizer</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold uppercase tracking-wide">Campaign Active</span>
        </div>

        {/* Paid Media Inputs (Intent & Targets) */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {/* Google Search High Intent Mockup */}
            <div className="p-3 rounded bg-slate-950 border border-slate-900 flex flex-col justify-between min-h-[100px]">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="p-1 rounded bg-[#111114] text-blue-400">
                    <Search className="w-3 h-3" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">Google Search</span>
                </div>
                <div className="bg-[#111114] px-2 py-1 rounded border border-slate-900 text-[10px] text-slate-200 font-mono truncate">
                  &quot;Enterprise SaaS Pricing&quot;
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[9px] text-slate-500">Intent Layer</span>
                <span className="text-[9px] text-blue-400 font-medium bg-blue-500/5 px-1 py-0.2 rounded">Buyer Intent</span>
              </div>
            </div>

            {/* LinkedIn ABM Target Mockup */}
            <div className="p-3 rounded bg-slate-950 border border-slate-900 flex flex-col justify-between min-h-[100px]">
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="p-1 rounded bg-[#111114] text-blue-400">
                    <Users className="w-3 h-3" />
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">LinkedIn ABM</span>
                </div>
                <div className="text-[10px] text-slate-300 font-mono flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />
                  C-Suite / VPs
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[9px] text-slate-500">Target Fit</span>
                <span className="text-[9px] text-emerald-400 font-medium bg-emerald-500/5 px-1 py-0.2 rounded">Matched ICP</span>
              </div>
            </div>
          </div>

          {/* Core Conversion Flow Connector */}
          <div className="flex items-center justify-center py-0.5">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111114] border border-slate-900 text-[9px] font-mono text-slate-500">
              <span>Symmetric Landing Page</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
            </div>
          </div>

          {/* Outcome Metric Row */}
          <div className="p-3.5 rounded bg-slate-950 border border-slate-900">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">Attributed Revenue Node</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400">+100% Tracked</span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1">
              <div>
                <span className="text-[9px] text-slate-500 font-mono block">Conversion Rate</span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-sm font-extrabold text-white">4.85%</span>
                  <span className="text-[9px] text-emerald-400 font-mono font-medium">+1.2%</span>
                </div>
              </div>

              <div className="border-l border-slate-900 pl-4">
                <span className="text-[9px] text-slate-500 font-mono block">ROAS Performance</span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-sm font-extrabold text-white">3.8x</span>
                  <span className="text-[9px] text-blue-400 font-mono font-medium">Top 5%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <div className="flex items-center justify-center gap-1 pt-1 text-[9px] font-mono text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>HybridMonks Performance Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}

