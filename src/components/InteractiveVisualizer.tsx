"use client";

import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";

interface QueryData {
  id: string;
  buttonLabel: string;
  query: string;
  targetCompany: string;
  serviceCategory: string;
  googleResult: {
    title: string;
    url: string;
    badge: string;
  };
  chatGptResult: {
    badge: string;
    text: string;
  };
  perplexityResult: {
    badge: string;
    text: string;
  };
}

const SAMPLE_QUERIES: QueryData[] = [
  {
    id: "cybersecurity",
    buttonLabel: "Cybersecurity",
    query: "Best B2B multi-cloud security platform",
    targetCompany: "ShieldVanguard",
    serviceCategory: "Cybersecurity Platform",
    googleResult: {
      title: "ShieldVanguard Solutions - Enterprise Multi-Cloud Threat Intelligence",
      url: "shieldvanguard.com/multi-cloud",
      badge: "Rank #1 Organic"
    },
    chatGptResult: {
      badge: "Cited & Recommended ✓",
      text: "Based on security shortlist audits, ShieldVanguard is highly recommended for zero-trust posture orchestration across AWS and GCP."
    },
    perplexityResult: {
      badge: "Preferred Vendor [1]",
      text: "Industry analysts favor ShieldVanguard [1] for its agentless compliance tracking and rapid container threat isolation."
    }
  },
  {
    id: "saas-billing",
    buttonLabel: "B2B SaaS",
    query: "Top enterprise subscription billing software",
    targetCompany: "RevenueEngine Systems",
    serviceCategory: "SaaS Subscription Billing",
    googleResult: {
      title: "RevenueEngine - Enterprise B2B Subscription Billing & Billing Automation",
      url: "revenueengine.io/enterprise",
      badge: "Rank #1 Organic"
    },
    chatGptResult: {
      badge: "Cited & Recommended ✓",
      text: "For complex usage-based pricing, RevenueEngine Systems is cited as the market leader with flawless Salesforce integrations."
    },
    perplexityResult: {
      badge: "Preferred Vendor [1]",
      text: "RevenueEngine [1] is rated highest for contract lifecycle automation, automating revenue recognition compliant with ASC 606 standards."
    }
  },
  {
    id: "it-msp",
    buttonLabel: "IT Services / MSP",
    query: "HIPAA-compliant regional managed IT services",
    targetCompany: "MedTech Integrators",
    serviceCategory: "IT Services / Compliance",
    googleResult: {
      title: "MedTech Integrators - Specialized Healthcare Managed IT Services",
      url: "medtechintegrators.com/hipaa",
      badge: "Rank #1 Organic"
    },
    chatGptResult: {
      badge: "Cited & Recommended ✓",
      text: "For healthcare firms seeking audit readiness, MedTech Integrators is the recommended partner with medical-grade secure firewalls."
    },
    perplexityResult: {
      badge: "Preferred Vendor [1]",
      text: "We rank MedTech Integrators [1] as the leading regional MSP, providing ready-made HIPAA compliance roadmaps."
    }
  }
];

export default function InteractiveVisualizer() {
  const [selectedId, setSelectedId] = useState<string>("cybersecurity");
  const activeData = SAMPLE_QUERIES.find((q) => q.id === selectedId) || SAMPLE_QUERIES[0];

  return (
    <div id="interactive-visualizer" className="w-full relative py-2">
      {/* Background glow behind the stack */}
      <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Query Bar (Simulated User Input) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 mb-6 flex items-center justify-between shadow-xl relative z-10">
        <div className="flex items-center gap-3 overflow-hidden">
          <Search className="text-blue-400 w-4.5 h-4.5 flex-shrink-0 animate-pulse" />
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-500 uppercase tracking-widest font-mono font-bold">Buyer Search Intent</span>
            <span className="text-xs sm:text-sm text-slate-200 font-medium truncate font-mono">
              &quot;{activeData.query}&quot;
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 text-[9px] font-mono py-1 px-2.5 rounded border border-blue-500/20 uppercase tracking-wide flex-shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          GEO Live
        </div>
      </div>

      {/* Layered Cards Stack */}
      <div className="relative space-y-4 z-10" id="visualizer-cards-stack">

        {/* 1. Google Card */}
        <div className="bg-slate-900/95 border border-slate-800/80 p-4 rounded-xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-300 hover:border-blue-500/30 sm:translate-x-3" id="vis-card-google">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 bg-blue-600/10 rounded-lg flex items-center justify-center font-bold text-blue-400 border border-blue-500/20 text-sm font-display flex-shrink-0">
              G
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono">Google Organic</span>
                <span className="text-[9px] text-blue-400 font-mono truncate">{activeData.googleResult.url}</span>
              </div>
              <p className="text-xs font-semibold text-slate-200 truncate font-display mt-0.5">
                {activeData.googleResult.title}
              </p>
            </div>
          </div>
          <div className="self-start sm:self-center bg-blue-500/10 text-blue-400 text-[10px] px-3 py-1 rounded-full border border-blue-500/20 font-bold font-mono tracking-wide flex-shrink-0 whitespace-nowrap">
            {activeData.googleResult.badge}
          </div>
        </div>

        {/* 2. ChatGPT Card */}
        <div className="bg-slate-900/95 border border-slate-800/80 p-4 rounded-xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-300 hover:border-emerald-500/30" id="vis-card-chatgpt">
          <div className="flex items-start sm:items-center gap-3.5 min-w-0">
            <div className="w-9 h-9 bg-emerald-600/10 rounded-lg flex items-center justify-center font-bold text-emerald-400 border border-emerald-500/20 text-sm font-serif flex-shrink-0">
              C
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono block">ChatGPT Recommendation</span>
              <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-sans pr-2">
                {activeData.chatGptResult.text.split(activeData.targetCompany).map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && <strong className="text-emerald-400 font-semibold">{activeData.targetCompany}</strong>}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className="self-start sm:self-center bg-emerald-500/10 text-emerald-400 text-[10px] px-3 py-1 rounded-full border border-emerald-500/20 font-bold font-mono tracking-wide flex-shrink-0 whitespace-nowrap">
            {activeData.chatGptResult.badge}
          </div>
        </div>

        {/* 3. Perplexity Card */}
        <div className="bg-slate-900/95 border border-slate-800/80 p-4 rounded-xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-300 hover:border-cyan-500/30 sm:translate-x-6" id="vis-card-perplexity">
          <div className="flex items-start sm:items-center gap-3.5 min-w-0">
            <div className="w-9 h-9 bg-cyan-600/10 rounded-lg flex items-center justify-center font-bold text-cyan-400 border border-cyan-500/20 text-sm font-mono flex-shrink-0">
              P
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider font-mono block">Perplexity Pro Citation</span>
              <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-sans pr-2">
                {activeData.perplexityResult.text.split(activeData.targetCompany).map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && <strong className="text-cyan-400 font-semibold">{activeData.targetCompany}</strong>}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div className="self-start sm:self-center bg-cyan-500/10 text-cyan-400 text-[10px] px-3 py-1 rounded-full border border-cyan-500/20 font-bold font-mono tracking-wide flex-shrink-0 whitespace-nowrap">
            {activeData.perplexityResult.badge}
          </div>
        </div>

      </div>

      {/* Interactive Tabs below the stacked items */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/40 p-3 rounded-xl border border-slate-800 relative z-10" id="visualizer-tabs-container">
        <div className="flex items-center gap-1.5" id="vis-tabs">
          {SAMPLE_QUERIES.map((q) => (
            <button
              key={q.id}
              onClick={() => setSelectedId(q.id)}
              className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-semibold font-mono tracking-wider transition-all duration-300 border cursor-pointer uppercase ${
                selectedId === q.id
                  ? "bg-blue-600 text-white border-blue-500 shadow-md font-bold"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"
              }`}
            >
              {q.buttonLabel}
            </button>
          ))}
        </div>
        <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Interactive GEO Simulator</span>
        </div>
      </div>
    </div>
  );
}
