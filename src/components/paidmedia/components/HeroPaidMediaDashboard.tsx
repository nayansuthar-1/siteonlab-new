"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import {
  TrendingUp,
  Coins,
  Users,
  Target,
  DollarSign,
  ArrowUpRight,
  Activity,
  Award,
} from "lucide-react";

type Platform = "ALL" | "GOOGLE" | "LINKEDIN" | "META";

export default function HeroPaidMediaDashboard() {
  const [activePlatform, setActivePlatform] = useState<Platform>("ALL");
  const [budget, setBudget] = useState<number>(15000);
  const [cpc, setCpc] = useState<number>(4.5);
  const [convRate, setConvRate] = useState<number>(3.5); // Visitor -> Lead %
  const [leadToSql, setLeadToSql] = useState<number>(20); // Lead -> SQL %
  const [dealValue, setDealValue] = useState<number>(35000); // Deal value in $

  // Handle preset settings for specific platforms to make it feel authentic
  const handlePlatformChange = (platform: Platform) => {
    setActivePlatform(platform);
    if (platform === "GOOGLE") {
      setCpc(6.5);
      setConvRate(4.2);
      setLeadToSql(25);
    } else if (platform === "LINKEDIN") {
      setCpc(12.0);
      setConvRate(2.8);
      setLeadToSql(35);
    } else if (platform === "META") {
      setCpc(2.5);
      setConvRate(1.8);
      setLeadToSql(12);
    } else {
      // Restore defaults for ALL
      setCpc(4.5);
      setConvRate(3.5);
      setLeadToSql(20);
    }
  };

  // Calculations
  const metrics = useMemo(() => {
    const clicks = Math.round(budget / cpc);
    const leads = Math.round(clicks * (convRate / 100));
    const sqls = Math.round(leads * (leadToSql / 100));
    const deals = Math.round(sqls * 0.22); // Assume standard 22% SQL-to-won close rate for SiteOnLab optimization
    const revenue = deals * dealValue;
    const roas = budget > 0 ? (revenue / budget) * 100 : 0;
    const costPerSql = sqls > 0 ? budget / sqls : 0;

    return {
      clicks,
      leads,
      sqls,
      deals,
      revenue,
      roas,
      costPerSql,
    };
  }, [budget, cpc, convRate, leadToSql, dealValue]);

  // Format currency
  const formatCurrency = (val: number) => {
    if (val >= 1000000) {
      return `$${(val / 1000000).toFixed(1)}M`;
    }
    if (val >= 1000) {
      return `$${(val / 1000).toFixed(0)}K`;
    }
    return `$${val}`;
  };

  return (
    <div className="w-full bg-[#111] border border-zinc-800 rounded-none shadow-2xl overflow-hidden font-sans">
      {/* Dashboard Header */}
      <div className="p-4 bg-zinc-900 border-b border-zinc-800/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 bg-blue-500 rounded-none animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">SiteOnLab Campaign Simulator</span>
        </div>
        <div className="flex items-center gap-1 bg-black p-1 rounded-none border border-zinc-800">
          <span className="text-[10px] text-zinc-500 px-1.5 uppercase font-mono">Live Bids</span>
          <span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded-none font-mono font-semibold">Active</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-3 pb-1 border-b border-zinc-800/50 flex gap-2 overflow-x-auto scrollbar-none">
        {(["ALL", "GOOGLE", "LINKEDIN", "META"] as Platform[]).map((plat) => (
          <button
            key={plat}
            onClick={() => handlePlatformChange(plat)}
            className={`text-xs px-3 py-1.5 rounded-none font-medium tracking-widest uppercase whitespace-nowrap transition-all duration-200 ${
              activePlatform === plat
                ? "bg-zinc-800 text-blue-400 border border-zinc-700/80"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {plat === "ALL" && "All Platforms"}
            {plat === "GOOGLE" && "Google Ads"}
            {plat === "LINKEDIN" && "LinkedIn Ads"}
            {plat === "META" && "Meta Ads"}
          </button>
        ))}
      </div>

      <div className="p-5 lg:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sliders Area (6 cols) */}
        <div className="md:col-span-7 space-y-4">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
            <Coins className="h-3.5 w-3.5 text-blue-500" />
            Ad Spend & Funnel Parameters
          </h4>

          {/* Slider 1: Budget */}
          <div className="space-y-1.5 bg-zinc-900/40 p-3 rounded-none border border-zinc-800/40">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400 font-medium">Monthly Ad Budget</span>
              <span className="text-blue-400 font-mono font-bold">{formatCurrency(budget)}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={100000}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>$1K</span>
              <span>$50K</span>
              <span>$100K</span>
            </div>
          </div>

          {/* Slider 2: CPC */}
          <div className="space-y-1.5 bg-zinc-900/40 p-3 rounded-none border border-zinc-800/40">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400 font-medium">Average CPC (Cost Per Click)</span>
              <span className="text-blue-400 font-mono font-bold">${cpc.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={1.00}
              max={25.00}
              step={0.5}
              value={cpc}
              onChange={(e) => setCpc(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>$1.00</span>
              <span>$12.50</span>
              <span>$25.00</span>
            </div>
          </div>

          {/* Slider 3: Conversion Rate */}
          <div className="space-y-1.5 bg-zinc-900/40 p-3 rounded-none border border-zinc-800/40">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400 font-medium">Landing Page Conv. Rate (Click → Lead)</span>
              <span className="text-zinc-200 font-mono font-bold">{convRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min={0.5}
              max={12.0}
              step={0.1}
              value={convRate}
              onChange={(e) => setConvRate(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-blue-400"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>0.5%</span>
              <span>6.0%</span>
              <span>12.0%</span>
            </div>
          </div>

          {/* Slider 4: Lead-to-SQL Rate */}
          <div className="space-y-1.5 bg-zinc-900/40 p-3 rounded-none border border-zinc-800/40">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400 font-medium">Lead to SQL Opportunity %</span>
              <span className="text-zinc-200 font-mono font-bold">{leadToSql}%</span>
            </div>
            <input
              type="range"
              min={5}
              max={60}
              step={1}
              value={leadToSql}
              onChange={(e) => setLeadToSql(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>5%</span>
              <span>30%</span>
              <span>60%</span>
            </div>
          </div>

          {/* Slider 5: Average Deal Value */}
          <div className="space-y-1.5 bg-zinc-900/40 p-3 rounded-none border border-zinc-800/40">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400 font-medium">Average B2B Deal Value (LTV)</span>
              <span className="text-zinc-200 font-mono font-bold">{formatCurrency(dealValue)}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={150000}
              step={5000}
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>$5K</span>
              <span>$75K</span>
              <span>$150K</span>
            </div>
          </div>
        </div>

        {/* Results Area (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-4">
          <div className="bg-black p-4 lg:p-5 rounded-none border border-zinc-800 flex-1 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block">Calculated Revenue Output</span>

              {/* ROAS Indicator */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <span className="text-xs text-zinc-400 font-mono uppercase tracking-wider">Ad Spend Return (ROAS)</span>
                <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-none border ${
                  metrics.roas >= 400 
                    ? "bg-blue-900/20 text-blue-400 border-blue-500/30" 
                    : metrics.roas >= 200 
                    ? "bg-zinc-800 text-zinc-200 border-zinc-700" 
                    : "bg-amber-950/20 text-amber-400 border-amber-900/30"
                }`}>
                  {metrics.roas.toFixed(0)}% ROAS
                </span>
              </div>

              {/* Huge Metrics */}
              <div className="space-y-1">
                <span className="text-xs text-zinc-400 font-mono uppercase">Estimated Revenue</span>
                <div className="text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight flex items-baseline gap-1">
                  {formatCurrency(metrics.revenue)}
                  <span className="text-xs text-zinc-500 font-mono">/mo</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-400 font-mono uppercase">Pipeline Opportunities</span>
                <div className="text-xl lg:text-2xl font-display font-bold text-zinc-200">
                  {metrics.sqls} SQLs
                  <span className="text-[11px] text-zinc-500 font-mono ml-2">({metrics.leads} leads)</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-zinc-400 font-mono uppercase">Cost Per SQL</span>
                <div className="text-lg font-mono font-semibold text-blue-400">
                  ${metrics.costPerSql.toFixed(0)}
                  <span className="text-xs text-zinc-500 font-normal ml-1">avg. cost</span>
                </div>
              </div>
            </div>

            {/* Micro comparison */}
            <div className="bg-zinc-900/60 p-3 rounded-none border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
              <span className="font-semibold text-zinc-200 block font-mono text-[10px] uppercase tracking-wider">SiteOnLab Pipeline Shield:</span>
              <span>We focus bidding on SQL-potential channels, lowering B2B buyer Acquisition Cost by 30-45%.</span>
            </div>
          </div>

          {/* Interactive Spark graph */}
          <div className="bg-zinc-900/50 p-3.5 rounded-none border border-zinc-800 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-zinc-500 block">Projected Trend</span>
              <span className="text-xs font-semibold text-white flex items-center gap-1">
                <TrendingUp className="h-3.5 w-3.5 text-blue-400" />
                Compounding Curve
              </span>
            </div>
            {/* Elegant SVG mini graph representing compounding ROI */}
            <svg className="w-24 h-10 overflow-visible" viewBox="0 0 100 40">
              <defs>
                <linearGradient id="sparkline-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 35 Q 20 28 40 22 T 80 10 T 100 2"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 0 35 Q 20 28 40 22 T 80 10 T 100 2 L 100 40 L 0 40 Z"
                fill="url(#sparkline-grad)"
              />
              <circle cx="100" cy="2" r="3" fill="#3B82F6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
