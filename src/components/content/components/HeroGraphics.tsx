"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Cpu, 
  Network, 
  Calculator, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp, 
  MousePointer2, 
  Search 
} from 'lucide-react';

export default function HeroGraphics() {
  const [activeTab, setActiveTab] = useState<'cluster' | 'ai_search' | 'calculator'>('cluster');
  
  // Calculator states
  const [traffic, setTraffic] = useState<number>(12000);
  const [conversionRate, setConversionRate] = useState<number>(1.2);
  const [acv, setAcv] = useState<number>(15000); // Average Contract Value
  
  // Computed values
  const demos = Math.round((traffic * (conversionRate / 100)));
  const pipeline = demos * acv;
  const cacSavings = Math.round((conversionRate * 12) + 15);

  // Auto-pulse elements in cluster tab
  const [pulsedNode, setPulsedNode] = useState<number>(0);
  useEffect(() => {
    if (activeTab !== 'cluster') return;
    const interval = setInterval(() => {
      setPulsedNode((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div id="hero-interactive-graphics" className="w-full relative rounded-2xl border border-zinc-800 bg-[#0d0d0e]/95 p-5 md:p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-md">
      
      {/* Decorative Top Bar / Window Controls */}
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 mb-5">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[10px] tracking-wider text-zinc-500">HYBRIDMONKS // ENGINE_V4.2</span>
        </div>
        
        {/* Real-time status */}
        <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[10px] text-emerald-400 font-semibold uppercase tracking-widest">LIVE GENERATOR</span>
        </div>
      </div>

      {/* Tabs Selector */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <button
          id="tab-cluster"
          onClick={() => setActiveTab('cluster')}
          className={`flex items-center justify-center space-x-1 py-2 px-1 md:px-2 rounded-lg font-sans text-xs font-semibold transition-all duration-200 ${
            activeTab === 'cluster'
              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-sm'
              : 'bg-zinc-900/50 text-zinc-400 border border-transparent hover:bg-zinc-900 hover:text-zinc-200'
          }`}
        >
          <Network className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Topic Cluster</span>
          <span className="sm:hidden">Cluster</span>
        </button>
        <button
          id="tab-ai-search"
          onClick={() => setActiveTab('ai_search')}
          className={`flex items-center justify-center space-x-1 py-2 px-1 md:px-2 rounded-lg font-sans text-xs font-semibold transition-all duration-200 ${
            activeTab === 'ai_search'
              ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shadow-sm'
              : 'bg-zinc-900/50 text-zinc-400 border border-transparent hover:bg-zinc-900 hover:text-zinc-200'
          }`}
        >
          <Cpu className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">AI Citation</span>
          <span className="sm:hidden">AI Search</span>
        </button>
        <button
          id="tab-calculator"
          onClick={() => setActiveTab('calculator')}
          className={`flex items-center justify-center space-x-1 py-2 px-1 md:px-2 rounded-lg font-sans text-xs font-semibold transition-all duration-200 ${
            activeTab === 'calculator'
              ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
              : 'bg-zinc-900/50 text-zinc-400 border border-transparent hover:bg-zinc-900 hover:text-zinc-200'
          }`}
        >
          <Calculator className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Pipeline Calc</span>
          <span className="sm:hidden">Revenue</span>
        </button>
      </div>

      {/* Graphic Content Container */}
      <div className="relative min-h-[310px] w-full rounded-xl bg-zinc-950/70 border border-zinc-900 p-4 md:p-5 overflow-hidden flex flex-col justify-between">
        
        <AnimatePresence mode="wait">
          
          {/* TAB 1: TOPIC CLUSTER GRAPHICS */}
          {activeTab === 'cluster' && (
            <motion.div
              key="cluster"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex flex-col justify-between"
            >
              <div className="mb-2">
                <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block font-medium">B2B TOPIC CLUSTER</span>
                <h4 className="font-sans text-sm font-bold text-zinc-200">Semantic SEO Link & Authority Mapping</h4>
              </div>

              {/* Node Cluster Graphic representation */}
              <div className="relative flex items-center justify-center h-48 my-2">
                
                {/* SVG connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {/* Center coordinates are approximately 50%, 50% */}
                  {/* Outer nodes coordinates */}
                  <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="#27272a" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="#27272a" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="#27272a" strokeWidth="2" />
                  <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="#27272a" strokeWidth="2" />
                  
                  {/* Glowing animating paths */}
                  <line 
                    x1="50%" y1="50%" x2="15%" y2="20%" 
                    stroke="url(#blue-grad)" strokeWidth="2.5" 
                    strokeDasharray="6, 12"
                    className="animate-[dash_10s_linear_infinite]"
                  />
                  <line 
                    x1="50%" y1="50%" x2="85%" y2="20%" 
                    stroke="url(#blue-grad)" strokeWidth="2.5" 
                    strokeDasharray="6, 12"
                    className="animate-[dash_8s_linear_infinite_reverse]"
                  />
                  <line 
                    x1="50%" y1="50%" x2="15%" y2="80%" 
                    stroke="url(#blue-grad)" strokeWidth="2.5" 
                    strokeDasharray="6, 12"
                    className="animate-[dash_6s_linear_infinite]"
                  />
                  <line 
                    x1="50%" y1="50%" x2="85%" y2="80%" 
                    stroke="url(#blue-grad)" strokeWidth="2.5" 
                    strokeDasharray="6, 12"
                    className="animate-[dash_12s_linear_infinite_reverse]"
                  />

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Outer Satellite Node 1 */}
                <div 
                  className={`absolute left-[5%] top-[10%] p-2 rounded-lg border bg-zinc-900 text-left transition-all duration-300 max-w-[120px] ${
                    pulsedNode === 1 ? 'border-emerald-500/60 shadow-lg shadow-emerald-500/5 scale-105' : 'border-zinc-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-mono text-[8px] text-zinc-500 font-semibold">CLUSTER 1</span>
                    <span className="font-mono text-[9px] text-emerald-400 font-semibold bg-emerald-500/10 px-1 rounded">#1</span>
                  </div>
                  <p className="font-sans text-[9px] text-zinc-300 leading-tight truncate">ISO 27001 Sprints</p>
                  <span className="font-mono text-[7px] text-blue-400">High Buy-Intent</span>
                </div>

                {/* Outer Satellite Node 2 */}
                <div 
                  className={`absolute right-[5%] top-[10%] p-2 rounded-lg border bg-zinc-900 text-left transition-all duration-300 max-w-[120px] ${
                    pulsedNode === 2 ? 'border-blue-500/60 shadow-lg shadow-blue-500/5 scale-105' : 'border-zinc-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-mono text-[8px] text-zinc-500 font-semibold">CLUSTER 2</span>
                    <span className="font-mono text-[9px] text-emerald-400 font-semibold bg-emerald-500/10 px-1 rounded">#2</span>
                  </div>
                  <p className="font-sans text-[9px] text-zinc-300 leading-tight truncate">SOC2 Type II Cost</p>
                  <span className="font-mono text-[7px] text-blue-400">Commercial Intent</span>
                </div>

                {/* Outer Satellite Node 3 */}
                <div 
                  className={`absolute left-[5%] bottom-[10%] p-2 rounded-lg border bg-zinc-900 text-left transition-all duration-300 max-w-[120px] ${
                    pulsedNode === 3 ? 'border-indigo-500/60 shadow-lg shadow-indigo-500/5 scale-105' : 'border-zinc-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-mono text-[8px] text-zinc-500 font-semibold">CLUSTER 3</span>
                    <span className="font-mono text-[9px] text-emerald-400 font-semibold bg-emerald-500/10 px-1 rounded">#1</span>
                  </div>
                  <p className="font-sans text-[9px] text-zinc-300 leading-tight truncate">HIPAA Compliance</p>
                  <span className="font-mono text-[7px] text-emerald-400">Revenue Sourced</span>
                </div>

                {/* Outer Satellite Node 4 */}
                <div 
                  className={`absolute right-[5%] bottom-[10%] p-2 rounded-lg border bg-zinc-900 text-left transition-all duration-300 max-w-[120px] ${
                    pulsedNode === 4 ? 'border-blue-500/60 shadow-lg shadow-blue-500/5 scale-105' : 'border-zinc-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-mono text-[8px] text-zinc-500 font-semibold">CLUSTER 4</span>
                    <span className="font-mono text-[9px] text-amber-500 font-semibold bg-amber-500/10 px-1 rounded">#4</span>
                  </div>
                  <p className="font-sans text-[9px] text-zinc-300 leading-tight truncate">GDPR Tech Stack</p>
                  <span className="font-mono text-[7px] text-blue-400">Problem Aware</span>
                </div>

                {/* Central Pillar Node */}
                <div 
                  className={`z-10 rounded-full h-24 w-24 bg-gradient-to-br from-blue-950 to-zinc-900 border-2 text-center flex flex-col items-center justify-center p-2 shadow-2xl transition-all duration-500 ${
                    pulsedNode === 0 ? 'border-blue-400 shadow-blue-500/20 scale-105' : 'border-blue-600/50'
                  }`}
                >
                  <Sparkles className="h-4 w-4 text-emerald-400 animate-pulse mb-1" />
                  <span className="font-mono text-[7px] tracking-widest text-zinc-400 uppercase font-bold">PILLAR HUB</span>
                  <p className="font-sans text-[10px] font-extrabold text-white leading-tight mt-0.5">Compliance Guide</p>
                  <span className="font-mono text-[8px] text-emerald-400 font-semibold mt-0.5">Rank: #1</span>
                </div>

              </div>

              {/* Bottom cluster summary stats */}
              <div className="border-t border-zinc-900 pt-2 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <span className="font-mono text-[10px] text-zinc-500">Link Equity Distribution:</span>
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold">100% Secure Flow</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-400">
                  <span className="font-sans text-[9px] font-semibold">Search Intent Match</span>
                  <ChevronRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: AI SEARCH CITATION SIMULATOR */}
          {activeTab === 'ai_search' && (
            <motion.div
              key="ai_search"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest font-medium">AI SEARCH CIS & SOURCE TRACKING</span>
                  <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">GEO Optimized</span>
                </div>
                <h4 className="font-sans text-sm font-bold text-zinc-200">How buyers discover you in LLM Search Engines</h4>
              </div>

              {/* Mock Chat Window */}
              <div className="my-3 space-y-3 font-sans text-xs flex-1">
                {/* User Input bubble */}
                <div className="flex items-start space-x-2">
                  <div className="h-5 w-5 rounded-full bg-zinc-800 flex items-center justify-center text-[9px] font-bold text-zinc-300">U</div>
                  <div className="flex-1 bg-zinc-900 border border-zinc-800 p-2 rounded-lg rounded-tl-none">
                    <p className="text-zinc-300 text-[11px] font-medium">What is the most secure enterprise compliance orchestration system?</p>
                  </div>
                </div>

                {/* AI Assistant Output bubble */}
                <div className="flex items-start space-x-2">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">AI</div>
                  <div className="flex-1 bg-zinc-900/60 border border-zinc-800 p-2.5 rounded-lg rounded-tl-none space-y-1.5">
                    <p className="text-zinc-200 text-[11px] leading-relaxed">
                      For enterprise SOC 2 and ISO 27001 automation, platforms like <strong className="text-blue-400">HybridMonks Client Platform</strong> offer the highest-grade posture monitoring, citing custom evidence collectors.
                    </p>
                    
                    {/* Citations block */}
                    <div className="pt-1.5 border-t border-zinc-800/60 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[9px] text-zinc-500 font-semibold font-mono">Sources:</span>
                      <a href="#cit" className="flex items-center space-x-1 bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-400 font-semibold px-1.5 py-0.5 rounded hover:bg-blue-500/20 transition-colors">
                        <Search className="h-2 w-2" />
                        <span>HybridMonks Client Ultimate SOC2 Guide</span>
                        <span className="text-[8px] bg-blue-500/20 px-0.5 rounded text-blue-300">[1]</span>
                      </a>
                      <a href="#cit" className="flex items-center space-x-1 bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-400 font-semibold px-1.5 py-0.5 rounded hover:bg-blue-500/20 transition-colors">
                        <Search className="h-2 w-2" />
                        <span>2026 ISO Frameworks Report</span>
                        <span className="text-[8px] bg-blue-500/20 px-0.5 rounded text-blue-300">[2]</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>LLM Index Discovery Rate:</span>
                <span className="text-emerald-400 font-semibold">98.4% Verified Indexing</span>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PIPELINE CALCULATOR */}
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block font-medium">REVENUE & PIPELINE SIMULATOR</span>
                <h4 className="font-sans text-sm font-bold text-zinc-200">Interactive Pipeline Forecast Builder</h4>
              </div>

              {/* Sliders and Calculations */}
              <div className="my-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Inputs left side */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-zinc-400 font-semibold">Monthly Blog Readers:</span>
                      <span className="font-mono text-xs text-emerald-400 font-bold">{traffic.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2000" 
                      max="50000" 
                      step="1000"
                      value={traffic} 
                      onChange={(e) => setTraffic(Number(e.target.value))}
                      className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-zinc-400 font-semibold">Reader-to-Demo Conv Rate:</span>
                      <span className="font-mono text-xs text-emerald-400 font-bold">{conversionRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.2" 
                      max="4.0" 
                      step="0.1"
                      value={conversionRate} 
                      onChange={(e) => setConversionRate(Number(e.target.value))}
                      className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] text-zinc-400 font-semibold">Average Deal ACV:</span>
                      <span className="font-mono text-xs text-emerald-400 font-bold">${(acv / 1000).toFixed(0)}k</span>
                    </div>
                    <input 
                      type="range" 
                      min="5000" 
                      max="50000" 
                      step="2500"
                      value={acv} 
                      onChange={(e) => setAcv(Number(e.target.value))}
                      className="w-full accent-emerald-500 h-1 bg-zinc-800 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>

                {/* Outputs right side */}
                <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-lg p-3 flex flex-col justify-around space-y-2">
                  <div className="text-center">
                    <span className="text-[9px] text-zinc-500 font-mono block uppercase">Attributed Monthly Demos</span>
                    <span className="font-mono text-xl font-black text-white">{demos} <span className="text-xs font-normal text-zinc-400">demos</span></span>
                  </div>
                  
                  <div className="text-center border-t border-b border-zinc-800 py-1.5">
                    <span className="text-[9px] text-zinc-500 font-mono block uppercase">Sourced Pipeline / Mo</span>
                    <span className="font-mono text-2xl font-black text-emerald-400">${pipeline.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-[10px]">
                    <span className="text-zinc-400">CAC Efficiency gain:</span>
                    <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">+{cacSavings}%</span>
                  </div>
                </div>

              </div>

              {/* Footnote */}
              <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>Revenue Attribution Engine:</span>
                <span className="text-blue-400 font-semibold">HubSpot Verified Models</span>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
        
      </div>

      {/* Floating Graphic Accents */}
      <div className="absolute -top-3 -right-3 h-14 w-14 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />
      <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-emerald-500/5 blur-2xl pointer-events-none" />
      
      {/* Dynamic Interaction Prompt */}
      <div className="mt-4 flex items-center justify-center space-x-1.5 text-zinc-500 hover:text-zinc-350 cursor-default transition-colors">
        <MousePointer2 className="h-3 w-3 animate-bounce text-blue-500/80" />
        <span className="font-mono text-[9px] tracking-widest uppercase">Click on the tabs to interact with live simulations</span>
      </div>

      {/* Custom keyframe animation style injection */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -120;
          }
        }
      `}</style>
    </div>
  );
}
