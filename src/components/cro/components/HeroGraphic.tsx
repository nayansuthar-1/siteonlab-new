"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, TrendingUp, Sparkles, CheckCircle2, AlertCircle, DollarSign, Users, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function HeroGraphic() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'calculator'>('simulator');

  // Simulator State
  const [controlVisitors, setControlVisitors] = useState(1240);
  const [controlConversions, setControlConversions] = useState(18); // ~1.45% CR
  const [variantVisitors, setVariantVisitors] = useState(1240);
  const [variantConversions, setVariantConversions] = useState(41); // ~3.3% CR
  const [isSimulating, setIsSimulating] = useState(false);
  const [simCount, setSimCount] = useState(0);

  // Calculator State
  const [traffic, setTraffic] = useState(25000);
  const [currentCr, setCurrentCr] = useState(1.2); // in %
  const [avgLtv, setAvgLtv] = useState(15000); // in dollars

  // Simulator math
  const controlCr = controlVisitors > 0 ? (controlConversions / controlVisitors) * 100 : 0;
  const variantCr = variantVisitors > 0 ? (variantConversions / variantVisitors) * 100 : 0;
  const lift = controlCr > 0 ? ((variantCr - controlCr) / controlCr) * 100 : 0;

  // Simple Z-score approximation for statistical confidence
  const getConfidence = () => {
    if (controlVisitors < 100 || variantVisitors < 100) return 0;
    const p1 = controlConversions / controlVisitors;
    const p2 = variantConversions / variantVisitors;
    const p_pool = (controlConversions + variantConversions) / (controlVisitors + variantVisitors);
    const se = Math.sqrt(p_pool * (1 - p_pool) * (1 / controlVisitors + 1 / variantVisitors));
    if (se === 0) return 0;
    const z = (p2 - p1) / se;
    // convert Z-score to approximate confidence percentage
    if (z <= 0) return 0;
    if (z > 2.58) return 99.5;
    if (z > 1.96) return 95.0;
    if (z > 1.645) return 90.0;
    if (z > 1.28) return 80.0;
    return Math.max(50, Math.floor(50 + (z / 1.28) * 30));
  };

  const confidence = getConfidence();

  // Run simulation increments
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating && simCount < 10) {
      interval = setInterval(() => {
        // Control has 1.4% CR, Variant has 3.4% CR
        const addedVisitors = 50;
        
        let controlNewConv = 0;
        let variantNewConv = 0;

        for (let i = 0; i < addedVisitors; i++) {
          if (Math.random() < 0.014) controlNewConv++;
          if (Math.random() < 0.034) variantNewConv++;
        }

        setControlVisitors(prev => prev + addedVisitors);
        setControlConversions(prev => prev + controlNewConv);
        setVariantVisitors(prev => prev + addedVisitors);
        setVariantConversions(prev => prev + variantNewConv);
        setSimCount(prev => prev + 1);
      }, 300);
    } else if (simCount >= 10) {
      setIsSimulating(false);
    }
    return () => clearInterval(interval);
  }, [isSimulating, simCount]);

  const handleSimulate = () => {
    if (isSimulating) return;
    setSimCount(0);
    setIsSimulating(true);
  };

  const handleReset = () => {
    setControlVisitors(850);
    setControlConversions(12); // ~1.41%
    setVariantVisitors(850);
    setVariantConversions(29); // ~3.41%
    setSimCount(0);
    setIsSimulating(false);
  };

  // Calculator math
  const targetCr = currentCr * 2.16; // Standard SiteOnLab 216% lift (3.88% avg lift / or standard multiplier)
  const currentLeads = Math.round(traffic * (currentCr / 100));
  const newLeads = Math.round(traffic * (targetCr / 100));
  const incrementalLeads = Math.max(0, newLeads - currentLeads);
  const incrementalRevenue = incrementalLeads * avgLtv;

  return (
    <div className="bg-[#0D0D0D] border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden font-sans">
      {/* Decorative gradient light */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Tabs */}
      <div className="flex border-b border-white/10 pb-4 mb-6 justify-between items-center relative z-10">
        <h4 className="text-xs font-mono text-white/50 uppercase tracking-wider flex items-center gap-1.5">
          <Award size={14} className="text-[#3b82f6] animate-pulse" />
          Interactive CRO Playground
        </h4>
        <div className="flex bg-black p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-white/10 text-[#3b82f6] shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            A/B Test Simulator
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'calculator'
                ? 'bg-white/10 text-[#3b82f6] shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Value Calculator
          </button>
        </div>
      </div>

      {activeTab === 'simulator' ? (
        <div className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* VARIANT A: CONTROL */}
            <div className="bg-black/40 border border-white/10 p-4 rounded-2xl relative text-left">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  Variant A: Control
                </span>
                <span className="text-xs text-slate-500">Original Page</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-display text-slate-200 font-semibold">
                    {controlCr.toFixed(2)}%
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Conv. Rate</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-slate-600 h-full rounded-full"
                    animate={{ width: `${Math.min(100, controlCr * 12)}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-1">
                  <span>Conversions: <strong>{controlConversions}</strong></span>
                  <span>Visitors: <strong>{controlVisitors}</strong></span>
                </div>
              </div>
            </div>

            {/* VARIANT B: SITEONLAB */}
            <div className="bg-[#3b82f6]/5 border border-[#3b82f6]/20 p-4 rounded-2xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 bg-[#3b82f6]/10 text-[#3b82f6] text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-bl font-mono">
                SiteOnLab
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono text-[#3b82f6] bg-[#3b82f6]/10 px-2.5 py-1 rounded-md border border-[#3b82f6]/25">
                  Variant B: Optimized
                </span>
                <span className="text-xs text-[#3b82f6] font-mono flex items-center gap-0.5">
                  <TrendingUp size={12} />
                  +{lift.toFixed(0)}% Lift
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-display text-[#3b82f6] font-semibold">
                    {variantCr.toFixed(2)}%
                  </span>
                  <span className="text-xs text-[#3b82f6]/80 font-mono">Conv. Rate</span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-[#3b82f6] h-full rounded-full shadow-[0_0_8px_rgba(251,146,60,0.5)]"
                    animate={{ width: `${Math.min(100, variantCr * 12)}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-[#3b82f6]/80 pt-1">
                  <span>Conversions: <strong>{variantConversions}</strong></span>
                  <span>Visitors: <strong>{variantVisitors}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Info bar */}
          <div className="bg-black/60 border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className={`p-2 rounded-xl ${confidence >= 95 ? 'bg-[#3b82f6]/10 text-[#3b82f6]' : 'bg-white/5 text-slate-400'}`}>
                {confidence >= 95 ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
              </div>
              <div>
                <div className="text-xs text-slate-400 font-mono">Statistical Confidence</div>
                <div className="text-sm font-semibold text-slate-200">
                  {confidence.toFixed(1)}% Confidence {confidence >= 95 ? '· Significant! 🏆' : '· Accumulating Data'}
                </div>
              </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={handleSimulate}
                disabled={isSimulating}
                className="flex-1 sm:flex-initial bg-[#3b82f6] text-black font-semibold text-xs px-4 py-2.5 rounded-md hover:bg-white transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Play size={12} fill="currentColor" />
                {isSimulating ? 'Sending Traffic...' : 'Simulate Traffic'}
              </button>
              <button
                onClick={handleReset}
                className="bg-white/10 hover:bg-white/15 text-slate-300 p-2.5 rounded-md transition-all cursor-pointer"
                title="Reset Simulator"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          <div className="text-center">
            <span className="text-[11px] font-mono text-slate-500">
              SiteOnLab applies strict sequential testing math to determine true business-level uplift.
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-6 relative z-10 text-left">
          <div className="space-y-4">
            {/* SLIDER 1: Monthly Traffic */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1"><Users size={12} /> Monthly Website Traffic</span>
                <span className="text-slate-100 font-semibold">{traffic.toLocaleString()} unique users</span>
              </div>
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={traffic}
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full accent-[#3b82f6] cursor-pointer"
              />
            </div>

            {/* SLIDER 2: Current Conversion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">📊 Current Conversion Rate (Demo / Trial)</span>
                <span className="text-slate-100 font-semibold">{currentCr.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="5.0"
                step="0.1"
                value={currentCr}
                onChange={(e) => setCurrentCr(Number(e.target.value))}
                className="w-full accent-[#3b82f6] cursor-pointer"
              />
            </div>

            {/* SLIDER 3: Average Annual Contract Value */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1"><DollarSign size={12} /> Avg. Deal Value / Customer LTV</span>
                <span className="text-slate-100 font-semibold">${avgLtv.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="2000"
                max="50000"
                step="1000"
                value={avgLtv}
                onChange={(e) => setAvgLtv(Number(e.target.value))}
                className="w-full accent-[#3b82f6] cursor-pointer"
              />
            </div>
          </div>

          {/* Calculator Output */}
          <div className="bg-[#3b82f6]/5 border border-[#3b82f6]/20 p-5 rounded-2xl relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[#3b82f6]">
              <Sparkles size={16} className="animate-pulse" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {/* Left col: Additional qualified leads */}
              <div className="space-y-1 pb-3 sm:pb-0">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Additional Opportunities
                </div>
                <div className="text-3xl font-display text-[#3b82f6] font-bold">
                  +{incrementalLeads} <span className="text-sm font-sans text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Increasing conversions from {currentCr.toFixed(1)}% to {targetCr.toFixed(1)}% (SiteOnLab standard +216% uplift).
                </p>
              </div>

              {/* Right col: Annual additional pipeline value */}
              <div className="space-y-1 pt-3 sm:pt-0 sm:pl-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Annual Revenue Potential
                </div>
                <div className="text-3xl font-display text-[#3b82f6] font-bold text-wrap break-all">
                  ${(incrementalRevenue * 12).toLocaleString()} <span className="text-xs text-[#3b82f6]/80 font-mono">(+216% min)</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Based on a monthly increase of {incrementalLeads} qualified accounts converted at your LTV.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <span className="text-[11px] font-mono text-slate-500">
              Uplifts derived from historical averages across SiteOnLab client programs. Results vary by industry vertical.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
