"use client";

import React, { useState } from "react";
import { solutions } from "../data/copy";
import { Search, Sparkles, Layout, Bot, Target, BarChart3, BookOpen, Zap, CheckCircle2 } from "lucide-react";

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  // Helper to match string icon names to Lucide icon components
  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "search":
        return <Search className={className} />;
      case "sparkles":
        return <Sparkles className={className} />;
      case "layout":
        return <Layout className={className} />;
      case "bot":
        return <Bot className={className} />;
      case "target":
        return <Target className={className} />;
      case "bar-chart":
        return <BarChart3 className={className} />;
      case "book-open":
        return <BookOpen className={className} />;
      case "zap":
        return <Zap className={className} />;
      default:
        return <CheckCircle2 className={className} />;
    }
  };

  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
            Our Solution
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            A complete B2B growth system built for <span className="italic font-serif text-[#3b82f6]">Law Firms</span>.
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
            HybridMonks deploys a unified, state-bar-compliant client acquisition engine that connects high-intent search queries directly to your partner consultation calendars. We combine prestige-tier design with advanced automation to ensure no leads are lost.
          </p>
        </div>

        {/* Desktop Interactive Layout (Tabs + Active Detail View) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Sidebar Tab Selector */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {solutions.map((sol, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center space-x-3 text-left p-4 rounded-sm transition-all duration-200 border text-sm font-sans cursor-pointer ${
                  activeTab === idx
                    ? "bg-white/10 border-[#3b82f6]/30 text-white font-semibold shadow-md shadow-[#3b82f6]/5"
                    : "bg-[#0A0A0B] border-white/10 hover:border-white/20 text-white/50 hover:text-white"
                }`}
              >
                <div className={`p-1.5 rounded-sm border ${
                  activeTab === idx ? "bg-[#3b82f6]/10 border-[#3b82f6]/20 text-[#3b82f6]" : "bg-white/5 border-white/10 text-white/40"
                }`}>
                  {getIcon(sol.icon, "h-4 w-4")}
                </div>
                <span className="flex-1 truncate tracking-wide">{sol.title}</span>
              </button>
            ))}
          </div>

          {/* Right Side: Active Focus Detail Card */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-sm p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[360px]">
            {/* Ambient gold glow in corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/5 blur-2xl pointer-events-none" />

            <div>
              {/* Icon & Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/30 p-3 rounded-sm text-[#3b82f6]">
                  {getIcon(solutions[activeTab].icon, "h-6 w-6")}
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase block">SOLUTION CORE 0{activeTab + 1}</span>
                  <h3 className="text-xl sm:text-2xl font-sans font-semibold text-white mt-1">
                    {solutions[activeTab].title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed font-sans">
                {solutions[activeTab].description}
              </p>
            </div>

            {/* Outlining Outcomes & Tech Specs */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-start space-x-3 bg-[#0A0A0B]/40 border border-white/10 p-4 rounded-sm">
                <div className="bg-[#3b82f6]/15 border border-[#3b82f6]/30 text-[#3b82f6] p-1 rounded-sm mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#3b82f6] tracking-wider uppercase block">GUARANTEED REVENUE OUTCOME</span>
                  <p className="text-white/80 text-xs sm:text-sm mt-1 font-light leading-relaxed">
                    {solutions[activeTab].outcome}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Small screen grid view fallback (only on screens without hover interaction) */}
        <div className="mt-12 md:hidden">
          <p className="text-xs text-white/30 text-center font-mono italic">
            💡 Select each solution option in the list above to view full outcomes.
          </p>
        </div>

      </div>
    </section>
  );
}
