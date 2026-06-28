"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BarChart3, 
  Layers, 
  Activity, 
  Linkedin, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  TrendingUp, 
  Server, 
  Database,
  ArrowRightLeft
} from "lucide-react";

interface Touchpoint {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  channel: string;
  weightFirst: number;
  weightLast: number;
  weightUShaped: number;
  weightWShaped: number;
  weightLinear: number;
  color: string;
}

export default function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<"attribution" | "funnel" | "stream">("attribution");
  const [selectedModel, setSelectedModel] = useState<"first" | "last" | "ushaped" | "wshaped" | "linear">("ushaped");
  const [pipelineBudget, setPipelineBudget] = useState<number>(10000);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Live Stream Logs state
  const [logs, setLogs] = useState<Array<{ id: number; timestamp: string; type: string; message: string; badge: string; status: 'info' | 'success' | 'warning' }>>([
    { id: 1, timestamp: "06:51:12", type: "First-Party ID", message: "Glow session created for committee member 81b2", badge: "Server-Track", status: "info" },
    { id: 2, timestamp: "06:51:15", type: "Attribution", message: "Attributed: Linkedin Ad Campaign [Enterprise-ABM-Q2]", badge: "Assisted", status: "success" },
    { id: 3, timestamp: "06:51:24", type: "LLM Tracker", message: "ChatGPT referral detected on buyer intent category query", badge: "AI Citation", status: "warning" },
  ]);

  // Handle continuous simulation log append
  useEffect(() => {
    const logPool = [
      { type: "CRM Sync", message: "Deal Stage Synchronized: 'Qualified Opportunity' ($140k value)", badge: "Salesforce API", status: "success" },
      { type: "First-Party Event", message: "Enterprise lead firmographics matched: Cloudscale Tech", badge: "Clearbit API", status: "info" },
      { type: "Server-CAPI", message: "Conversion event hashed & pushed to LinkedIn Conversions API", badge: "Direct Server", status: "success" },
      { type: "LLM Tracker", message: "Cited in Perplexity recommendation index for 'Best B2B attribution tool'", badge: "AI Citation", status: "warning" },
      { type: "Attribution Engine", message: "Linear weight adjusted: 3 assisted touchpoints matched to Closed-Won", badge: "Engine", status: "info" },
      { type: "CRM Sync", message: "Deal closed-won: CloudScale Tech ($240,000 ACV)", badge: "Hubspot API", status: "success" },
    ];

    const interval = setInterval(() => {
      if (activeTab === "stream") {
        const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
        const now = new Date();
        const timestamp = now.toTimeString().split(' ')[0];
        
        setLogs((prev) => [
          {
            id: Date.now(),
            timestamp,
            type: randomLog.type,
            message: randomLog.message,
            badge: randomLog.badge,
            status: randomLog.status as 'info' | 'success' | 'warning'
          },
          ...prev.slice(0, 5)
        ]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTab]);

  const touchpoints: Touchpoint[] = [
    {
      name: "1. Brand Awareness",
      channel: "LinkedIn Sponsored Post",
      icon: Linkedin,
      weightFirst: 100,
      weightLast: 0,
      weightUShaped: 40,
      weightWShaped: 30,
      weightLinear: 25,
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "2. Intent Search",
      channel: "Google Organic Keyword",
      icon: Search,
      weightFirst: 0,
      weightLast: 0,
      weightUShaped: 10,
      weightWShaped: 30,
      weightLinear: 25,
      color: "from-amber-400 to-orange-500"
    },
    {
      name: "3. Market Research",
      channel: "Perplexity AI Recommendation",
      icon: Sparkles,
      weightFirst: 0,
      weightLast: 0,
      weightUShaped: 10,
      weightWShaped: 10,
      weightLinear: 25,
      color: "from-violet-500 to-purple-600"
    },
    {
      name: "4. Conversion Touch",
      channel: "Interactive ROI Tool S/S API",
      icon: CheckCircle2,
      weightFirst: 0,
      weightLast: 100,
      weightUShaped: 40,
      weightWShaped: 30,
      weightLinear: 25,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const getWeight = (tp: Touchpoint) => {
    switch (selectedModel) {
      case "first": return tp.weightFirst;
      case "last": return tp.weightLast;
      case "ushaped": return tp.weightUShaped;
      case "wshaped": return tp.weightWShaped;
      case "linear": return tp.weightLinear;
    }
  };

  // Funnel calculations
  const trafficSourced = Math.floor(pipelineBudget * 2.5);
  const leadsGenerated = Math.floor(trafficSourced * 0.12);
  const sqlsAccepted = Math.floor(leadsGenerated * 0.35);
  const opportunitiesClosed = Math.floor(sqlsAccepted * 0.40);
  const estimatedRevenue = opportunitiesClosed * 12500;
  const simulatedROI = ((estimatedRevenue - pipelineBudget) / pipelineBudget * 100).toFixed(0);

  return (
    <div id="interactive-analytics-sandbox" className="w-full bg-[#0f172a] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative">
      {/* Absolute background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />

      {/* Top Bar / Header */}
      <div className="p-4 bg-[#1e293b]/80 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <Activity className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>
          <div>
            <h4 className="font-display font-medium text-sm text-white">SiteOnLab Engine Sandbox</h4>
            <p className="text-xs text-gray-500 font-mono">Live attribution & data flow simulation</p>
          </div>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-1.5 bg-blue-950/40 border border-blue-800/40 px-2.5 py-1 rounded-full text-[10px] font-mono text-blue-300">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          <span>Active Pipeline: $4.5M/mo</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-white/5 bg-[#0f172a] relative z-10">
        <button
          id="btn-tab-attribution"
          onClick={() => setActiveTab("attribution")}
          className={`flex-1 py-3 px-4 text-xs font-medium flex items-center justify-center gap-2 transition-all ${
            activeTab === "attribution"
              ? "text-blue-400 bg-[#1e293b]/50 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-slate-200 hover:bg-[#1e293b]/20"
          }`}
        >
          <ArrowRightLeft className="w-3.5 h-3.5" />
          Attribution Models
        </button>
        <button
          id="btn-tab-funnel"
          onClick={() => setActiveTab("funnel")}
          className={`flex-1 py-3 px-4 text-xs font-medium flex items-center justify-center gap-2 transition-all ${
            activeTab === "funnel"
              ? "text-blue-400 bg-[#1e293b]/50 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-slate-200 hover:bg-[#1e293b]/20"
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          CRM Funnel & ROI
        </button>
        <button
          id="btn-tab-stream"
          onClick={() => setActiveTab("stream")}
          className={`flex-1 py-3 px-4 text-xs font-medium flex items-center justify-center gap-2 transition-all ${
            activeTab === "stream"
              ? "text-blue-400 bg-[#1e293b]/50 border-b-2 border-blue-500"
              : "text-gray-400 hover:text-slate-200 hover:bg-[#1e293b]/20"
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          Server Data Stream
        </button>
      </div>

      {/* Sandbox Content Area */}
      <div className="p-6 h-[340px] flex flex-col justify-between relative z-10">
        
        {/* TAB 1: ATTRIBUTION SIMULATOR */}
        {activeTab === "attribution" && (
          <div className="space-y-4 h-full flex flex-col justify-between">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-[#1e293b]/40 p-2 border border-white/5 rounded-xl">
              <span className="text-xs text-gray-400 font-medium px-2">Select B2B Model:</span>
              <div className="flex flex-wrap gap-1">
                {(["first", "last", "ushaped", "wshaped", "linear"] as const).map((model) => (
                  <button
                    id={`btn-model-${model}`}
                    key={model}
                    onClick={() => setSelectedModel(model)}
                    className={`px-2 py-1 text-[10px] font-mono uppercase rounded-md transition-all ${
                      selectedModel === model
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-[#1e293b] hover:bg-[#334155] text-gray-400 hover:text-slate-200"
                    }`}
                  >
                    {model === "ushaped" ? "U-Shaped" : model === "wshaped" ? "W-Shaped" : model}
                  </button>
                ))}
              </div>
            </div>

            {/* Path Graphic */}
            <div className="grid grid-cols-4 gap-2 relative mt-2">
              {/* Connector Line behind nodes */}
              <div className="absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-white/5 -translate-y-1/2 z-0" />
              
              {touchpoints.map((tp, idx) => {
                const Icon = tp.icon;
                const weight = getWeight(tp);
                return (
                  <div 
                    key={idx}
                    className="flex flex-col items-center relative z-10"
                    onMouseEnter={() => setHoveredNode(tp.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Circle Node */}
                    <div className={`w-10 h-10 rounded-xl bg-[#1e293b] border flex items-center justify-center transition-all duration-300 ${
                      weight > 0 
                        ? "border-blue-500 shadow-lg shadow-blue-500/10 text-blue-400 scale-105" 
                        : "border-white/5 text-gray-500 hover:border-white/10"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="text-center mt-2 max-w-[100px]">
                      <p className="text-[10px] text-gray-400 font-medium truncate">{tp.name.split('. ')[1]}</p>
                      <p className="text-[9px] text-gray-500 truncate">{tp.channel}</p>
                    </div>

                    {/* Weight badge */}
                    <div className={`mt-2 px-1.5 py-0.5 rounded text-[10px] font-mono transition-all duration-300 ${
                      weight > 0 
                        ? "bg-blue-950/40 text-blue-300 border border-blue-800/40" 
                        : "bg-[#0f172a] text-gray-600 border border-transparent"
                    }`}>
                      {weight}%
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dynamic model explanation text */}
            <div className="bg-[#1e293b]/60 border border-white/5 p-3 rounded-xl flex items-start gap-2.5">
              <TrendingUp className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div className="text-[11px] text-gray-400 leading-relaxed">
                {selectedModel === "ushaped" && (
                  <span><strong>U-Shaped Attribution:</strong> Allocates 40% credit to the first and last touches (awareness and conversion), splitting the remaining 20% across middle touches. Perfect for identifying both catalyst events and bottom-funnel close triggers.</span>
                )}
                {selectedModel === "first" && (
                  <span><strong>First-Touch Attribution:</strong> Gives 100% of pipeline credit to the channel that first brought the user to your site. High value for understanding brand awareness and raw lead generation.</span>
                )}
                {selectedModel === "last" && (
                  <span><strong>Last-Touch Attribution:</strong> Allocates 100% credit to the touchpoint immediately preceding the conversion. Highlights immediate triggers but completely obscures branding and initial research cycles.</span>
                )}
                {selectedModel === "wshaped" && (
                  <span><strong>W-Shaped Attribution:</strong> Awards 30% credit each to the First Touch, Lead Sourced Touch, and Opportunities Created Touch. Great for complex Enterprise multi-stage pipeline alignment.</span>
                )}
                {selectedModel === "linear" && (
                  <span><strong>Linear Attribution:</strong> Distributes conversion credit equally (25% each) across every recorded milestone. Honest but generic allocation that doesn't highlight impact.</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CRM PIPELINE FUNNEL & ROI */}
        {activeTab === "funnel" && (
          <div className="space-y-4 h-full flex flex-col justify-between">
            {/* Range Input Budget */}
            <div className="flex items-center justify-between gap-4 bg-[#1e293b]/30 p-2 border border-white/5 rounded-xl">
              <span className="text-xs text-gray-400 font-medium">Test Monthly Spend Allocation:</span>
              <div className="flex items-center gap-2">
                <input 
                  id="range-budget-spend"
                  type="range" 
                  min="5000" 
                  max="50000" 
                  step="5000"
                  value={pipelineBudget} 
                  onChange={(e) => setPipelineBudget(Number(e.target.value))}
                  className="w-24 sm:w-36 accent-blue-500 cursor-pointer h-1.5 rounded-full bg-gray-800"
                />
                <span className="text-xs font-mono font-bold text-white">${pipelineBudget.toLocaleString()}</span>
              </div>
            </div>

            {/* Funnel visual bars */}
            <div className="space-y-2.5">
              {/* Row 1 */}
              <div>
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-1">
                  <span>1. Traffic Sourced S/S</span>
                  <span className="text-gray-300 font-bold">{trafficSourced.toLocaleString()} visitors</span>
                </div>
                <div className="w-full h-2.5 bg-[#1e293b] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div>
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-1">
                  <span>2. Qualified Leads (12%)</span>
                  <span className="text-indigo-300 font-bold">{leadsGenerated.toLocaleString()} MQLs</span>
                </div>
                <div className="w-full h-2.5 bg-[#1e293b] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-1">
                  <span>3. CRM Opportunities (35%)</span>
                  <span className="text-violet-300 font-bold">{sqlsAccepted.toLocaleString()} Sales Opps</span>
                </div>
                <div className="w-full h-2.5 bg-[#1e293b] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-1">
                  <span>4. Closed Revenue (40%)</span>
                  <span className="text-emerald-400 font-bold">{opportunitiesClosed.toLocaleString()} Won (${(opportunitiesClosed * 12500).toLocaleString()})</span>
                </div>
                <div className="w-full h-2.5 bg-[#1e293b] rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "30%" }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Impact outcomes banner */}
            <div className="bg-[#1e293b]/40 border border-white/5 p-2.5 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">Estimated Revenue Sourced</p>
                <p className="text-sm font-display font-semibold text-emerald-400">${estimatedRevenue.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">Simulated Pipeline ROI</p>
                <p className="text-sm font-display font-semibold text-blue-400">+{simulatedROI}%</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: LIVE EVENT LOGS STREAM */}
        {activeTab === "stream" && (
          <div className="space-y-3 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-blue-400" />
                Live serverless listener active
              </span>
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3 animate-spin text-blue-400" />
                Listening
              </span>
            </div>

            {/* Console Log Lines */}
            <div className="bg-[#020617] border border-white/5 p-3 rounded-xl font-mono text-[10px] space-y-2.5 flex-1 overflow-hidden relative">
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
              <AnimatePresence mode="popLayout">
                {logs.map((log) => (
                  <motion.div
                    key={log.id}
                    layout
                    initial={{ opacity: 0, x: -15, y: -5 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-start gap-2 border-b border-white/5 pb-1.5 last:border-0"
                  >
                    <span className="text-gray-600 shrink-0">{log.timestamp}</span>
                    <span className={`px-1 py-0.2 rounded text-[8px] font-bold uppercase tracking-wider shrink-0 ${
                      log.status === "success" 
                        ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/40" 
                        : log.status === "warning"
                        ? "bg-amber-950/40 text-amber-400 border border-amber-900/40"
                        : "bg-blue-950/40 text-blue-400 border border-blue-900/40"
                    }`}>
                      {log.badge}
                    </span>
                    <span className="text-gray-300 truncate">{log.message}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Quick Summary Badge */}
            <div className="flex items-center justify-between text-[9px] text-gray-500 font-mono px-1">
              <span>First-Touch cookie block bypassed: 100%</span>
              <span>Data latency: &lt;180ms</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom sandbox control bar */}
      <div className="px-6 py-3.5 bg-[#1e293b]/80 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
        <span>SiteOnLab Attribution Engine v2.4</span>
        <span className="text-blue-400">Secure Client Sandbox</span>
      </div>
    </div>
  );
}
