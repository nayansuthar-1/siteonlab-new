"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { 
  Search, 
  Cpu, 
  Megaphone, 
  Users, 
  Target, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  FileText, 
  PhoneCall, 
  ArrowRight,
  Database,
  Globe,
  Zap
} from "lucide-react";

interface NodeDetails {
  title: string;
  category: string;
  description: string;
  metric: string;
}

export default function MarketingGraphic() {
  const [activeNode, setActiveNode] = useState<string>("central-hub");

  const nodes: Record<string, NodeDetails> = {
    "inbound-seo": {
      title: "Authority SEO",
      category: "Inbound Acquisition",
      description: "Dominating high-intent search terms queried by corporate legal, financial, and executive buyers looking for expert advisors.",
      metric: "Targeting high-intent, low-volume keywords with $15k+ contract value potential."
    },
    "inbound-ai": {
      title: "Generative Engine Optimization (GEO)",
      category: "AI Visibility",
      description: "Structuring your firm's proprietary methodologies, partners, and entity data to trigger recommendations inside ChatGPT, Gemini, and Perplexity.",
      metric: "Securing primary mentions in complex conversational AI summaries."
    },
    "inbound-paid": {
      title: "Account-Based Paid Ads",
      category: "Paid Acquisition",
      description: "Laser-focused campaigns targeting C-level stakeholders, General Counsels, and IT directors at pre-selected accounts on LinkedIn and Google Search.",
      metric: "Bypasses consumer waste to focus 100% of budget on pre-vetted corporate targets."
    },
    "inbound-referral": {
      title: "Digital Referral Amplifier",
      category: "Trust Reinforcement",
      description: "Reinforcing physical word-of-mouth with strong digital proof, so referred executives who research your firm are instantly converted.",
      metric: "Protects and converts high-value offline recommendations."
    },
    "central-hub": {
      title: "The B2B Digital Flagship",
      category: "Trust & Conversion Core",
      description: "The secure, high-speed website core designed specifically for B2B multi-stakeholder committees, mapping solutions to executive concerns.",
      metric: "Converts anonymous researchers into booked client consultations."
    },
    "qualification-ai": {
      title: "AI Enrichment & Vetting",
      category: "Lead Qualification",
      description: "Smart automation checking incoming inquiries against target account lists, enriching with company revenue, and instantly notifying partners.",
      metric: "Slashes discovery call response times to under two minutes."
    },
    "closed-loop": {
      title: "Closed-Loop Revenue Analytics",
      category: "Attribution Engine",
      description: "Full integration with your CRM (Salesforce/HubSpot) tracking every dollar of marketing investment straight to signed client retainers.",
      metric: "Proves exact ROI and guides capital allocation to highest-yield channels."
    },
    "partner-pipeline": {
      title: "Partner Pipeline & Contracts",
      category: "Growth Target",
      description: "Predictable, qualified client meetings delivered directly to your senior partners, eliminating the traditional feast-or-famine cycle.",
      metric: "Predictable volume of premium-rate, closed-won advisory engagements."
    }
  };

  const active = nodes[activeNode] || nodes["central-hub"];

  return (
    <div id="marketing-pipeline-graphic" className="card-glass rounded-2xl p-6 shadow-2xl overflow-hidden relative border border-white/10">
      {/* Absolute Ambient Background Lights & Geometric Balance lines/circles */}
      <div className="accent-glow absolute inset-0 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none overflow-hidden">
        <div className="geo-circle w-[350px] h-[350px] left-[-50px] top-[-50px]"></div>
        <div className="geo-circle w-[250px] h-[250px] left-[50px] top-[50px]"></div>
        <div className="geo-circle w-[150px] h-[150px] left-[100px] top-[100px]"></div>
        <div className="geo-line w-full h-px top-1/2 left-0 rotate-12"></div>
        <div className="geo-line w-full h-px top-1/3 left-0 -rotate-12"></div>
      </div>

      {/* Header Info */}
      <div className="mb-6 flex justify-between items-start border-b border-white/10 pb-4 relative z-10">
        <div>
          <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">Multi-Channel B2B Growth System</span>
          <h3 className="text-lg font-semibold text-white font-display mt-1">Unified Marketing & Pipeline Flow</h3>
        </div>
        <div className="flex items-center gap-1.5 bg-slate-900/60 border border-white/10 px-2.5 py-1 rounded-full text-xs text-slate-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>
          <span>Interactive Model</span>
        </div>
      </div>

      {/* Interactive Visual Map */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center min-h-[340px] relative z-10">
        
        {/* The SVG and Connection Nodes Block */}
        <div className="md:col-span-7 flex flex-col justify-center relative">
          
          {/* Channels Input Section */}
          <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
            {/* SEO Node */}
            <button 
              id="node-seo-btn"
              onClick={() => setActiveNode("inbound-seo")}
              className={`p-3 rounded-xl border transition-all text-left flex items-start gap-2.5 group ${
                activeNode === "inbound-seo" 
                  ? "bg-sky-950/40 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                  : "bg-slate-900/40 border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-colors ${activeNode === "inbound-seo" ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-400 group-hover:text-white"}`}>
                <Search className="w-4.5 h-4.5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-white">Authority SEO</div>
                <span className="text-[10px] opacity-80 block font-mono mt-0.5">High-Intent Traffic</span>
              </div>
            </button>

            {/* AI Visibility Node */}
            <button 
              id="node-ai-btn"
              onClick={() => setActiveNode("inbound-ai")}
              className={`p-3 rounded-xl border transition-all text-left flex items-start gap-2.5 group ${
                activeNode === "inbound-ai" 
                  ? "bg-sky-950/40 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                  : "bg-slate-900/40 border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-colors ${activeNode === "inbound-ai" ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-400 group-hover:text-white"}`}>
                <Cpu className="w-4.5 h-4.5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-white">AI Visibility (GEO)</div>
                <span className="text-[10px] opacity-80 block font-mono mt-0.5">ChatGPT/Gemini</span>
              </div>
            </button>

            {/* Paid Ads Node */}
            <button 
              id="node-paid-btn"
              onClick={() => setActiveNode("inbound-paid")}
              className={`p-3 rounded-xl border transition-all text-left flex items-start gap-2.5 group ${
                activeNode === "inbound-paid" 
                  ? "bg-sky-950/40 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                  : "bg-slate-900/40 border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-colors ${activeNode === "inbound-paid" ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-400 group-hover:text-white"}`}>
                <Megaphone className="w-4.5 h-4.5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-white">ABM Paid Media</div>
                <span className="text-[10px] opacity-80 block font-mono mt-0.5">LinkedIn/Search</span>
              </div>
            </button>

            {/* Referral Node */}
            <button 
              id="node-referral-btn"
              onClick={() => setActiveNode("inbound-referral")}
              className={`p-3 rounded-xl border transition-all text-left flex items-start gap-2.5 group ${
                activeNode === "inbound-referral" 
                  ? "bg-sky-950/40 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                  : "bg-slate-900/40 border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-colors ${activeNode === "inbound-referral" ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-400 group-hover:text-white"}`}>
                <Users className="w-4.5 h-4.5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold text-white">Referral Amplifier</div>
                <span className="text-[10px] opacity-80 block font-mono mt-0.5">Trust Converter</span>
              </div>
            </button>
          </div>

          {/* SVG Animated Flow Connectors */}
          <div className="h-10 flex justify-center items-center relative select-none">
            <svg className="w-full h-full max-w-[280px]" viewBox="0 0 200 40" fill="none">
              <path d="M20,5 C50,30 100,5 100,20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M180,5 C150,30 100,5 100,20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M100,20 L100,40" stroke="#0ea5e9" strokeWidth="2" className="animate-pulse" />
              <circle cx="100" cy="35" r="4.5" fill="#0ea5e9" className="animate-ping" />
            </svg>
          </div>

          {/* Core Flagship Conversion Node */}
          <div className="flex justify-center mb-6 relative z-10">
            <button 
              id="node-central-btn"
              onClick={() => setActiveNode("central-hub")}
              className={`p-4 rounded-2xl border transition-all text-left w-full max-w-[320px] flex items-center justify-between group ${
                activeNode === "central-hub" 
                  ? "bg-sky-950/80 border-sky-400 text-sky-100 shadow-[0_0_20px_rgba(56,189,248,0.35)]" 
                  : "bg-slate-900/60 border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl transition-colors ${activeNode === "central-hub" ? "bg-sky-500 text-slate-950" : "bg-slate-800 text-slate-400"}`}>
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Trust & Conversion Core</div>
                  <div className="text-xs text-slate-400 mt-0.5">Authority Digital Flagship</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Connectors from Web to Pipeline */}
          <div className="h-8 flex justify-center items-center relative select-none">
            <svg className="w-full h-full max-w-[200px]" viewBox="0 0 100 20" fill="none">
              <path d="M50,0 L50,20" stroke="#0ea5e9" strokeWidth="2" className="animate-pulse" />
              <circle cx="50" cy="15" r="4.5" fill="#0ea5e9" className="animate-ping" />
            </svg>
          </div>

          {/* Bottom Automation, Analytics and Target Nodes */}
          <div className="grid grid-cols-3 gap-3 relative z-10">
            {/* Qualification AI */}
            <button 
              id="node-qual-btn"
              onClick={() => setActiveNode("qualification-ai")}
              className={`p-2.5 rounded-xl border transition-all text-left flex flex-col gap-1 group ${
                activeNode === "qualification-ai" 
                  ? "bg-sky-950/60 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                  : "bg-slate-900/40 border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-1.5 text-white">
                <Zap className={`w-3.5 h-3.5 ${activeNode === "qualification-ai" ? "text-sky-400" : "text-slate-400"}`} />
                <span className="text-[11px] font-semibold">AI Enrichment</span>
              </div>
              <span className="text-[9px] text-slate-500 font-mono block mt-0.5">Vetting Inbound</span>
            </button>

            {/* Closed-Loop Analytics */}
            <button 
              id="node-closed-btn"
              onClick={() => setActiveNode("closed-loop")}
              className={`p-2.5 rounded-xl border transition-all text-left flex flex-col gap-1 group ${
                activeNode === "closed-loop" 
                  ? "bg-sky-950/60 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                  : "bg-slate-900/40 border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-1.5 text-white">
                <TrendingUp className={`w-3.5 h-3.5 ${activeNode === "closed-loop" ? "text-sky-400" : "text-slate-400"}`} />
                <span className="text-[11px] font-semibold">Attribution</span>
              </div>
              <span className="text-[9px] text-slate-500 font-mono block mt-0.5">Full-Loop Metrics</span>
            </button>

            {/* Partner Pipeline */}
            <button 
              id="node-partner-btn"
              onClick={() => setActiveNode("partner-pipeline")}
              className={`p-2.5 rounded-xl border transition-all text-left flex flex-col gap-1 group ${
                activeNode === "partner-pipeline" 
                  ? "bg-sky-950/60 border-sky-500 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]" 
                  : "bg-slate-900/40 border-white/10 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              <div className="flex items-center gap-1.5 text-white">
                <Target className={`w-3.5 h-3.5 ${activeNode === "partner-pipeline" ? "text-sky-400" : "text-slate-400"}`} />
                <span className="text-[11px] font-semibold">Firm Pipeline</span>
              </div>
              <span className="text-[9px] text-slate-500 font-mono block mt-0.5">Partner Retainers</span>
            </button>
          </div>

        </div>

        {/* Dynamic Details Sidebar */}
        <div className="md:col-span-5 bg-slate-950/80 border border-white/10 rounded-xl p-4.5 flex flex-col h-full justify-between backdrop-blur-md">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-sky-500/10 border border-sky-500/20 text-sky-300 font-mono text-[10px] rounded">
                {active.category}
              </span>
            </div>
            <h4 className="text-md font-bold text-white font-display flex items-center gap-2">
              {active.title}
            </h4>
            <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
              {active.description}
            </p>
          </div>

          <div className="mt-4 pt-3.5 border-t border-white/10">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Strategic Focus & Metric</span>
            <div className="bg-slate-900/80 border border-white/5 rounded-lg p-2.5 mt-1 text-xs text-sky-200 font-mono leading-normal">
              {active.metric}
            </div>
          </div>
        </div>

      </div>

      {/* Footer Info Banner */}
      <div className="mt-4 pt-4 border-t border-white/10 text-center text-slate-500 text-[11px] leading-relaxed relative z-10">
        Our multi-channel architecture ensures physical partner trust is augmented by continuous digital authority, driving predictable B2B pipeline. Click any system module to inspect the alignment strategy.
      </div>
    </div>
  );
}
