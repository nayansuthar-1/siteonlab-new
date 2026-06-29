"use client";

import React, { useState } from 'react';
import { Search, Sparkles, AlertCircle, CheckCircle2, ChevronRight, HelpCircle, ArrowRight, Gauge, FileText, Share2, Award } from 'lucide-react';

export default function SeoAuditor() {
  const [domain, setDomain] = useState('');
  const [category, setCategory] = useState('enterprise-saas');
  const [auditState, setAuditState] = useState<'idle' | 'scanning' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [currentStepText, setCurrentStepText] = useState('');

  const runAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain) return;

    setAuditState('scanning');
    setProgress(0);
    
    const steps = [
      { p: 15, text: "Ingesting domain DNS entity registries..." },
      { p: 35, text: "Scraping brand schema citations on open tech networks..." },
      { p: 55, text: "Querying simulated Perplexity, Gemini & Claude models..." },
      { p: 75, text: "Analyzing index alignment with Knowledge Graph hubs..." },
      { p: 90, text: "Calculating entity semantic relevance score..." },
      { p: 100, text: "Compiling strategic GEO optimization recommendations..." }
    ];

    let currentStepIdx = 0;
    const interval = setInterval(() => {
      if (currentStepIdx < steps.length) {
        setProgress(steps[currentStepIdx].p);
        setCurrentStepText(steps[currentStepIdx].text);
        currentStepIdx++;
      } else {
        clearInterval(interval);
        setAuditState('completed');
      }
    }, 450);
  };

  const resetAudit = () => {
    setAuditState('idle');
    setDomain('');
    setProgress(0);
  };

  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 md:p-8 shadow-2xl relative overflow-hidden font-sans">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header and Title */}
      <div className="max-w-2xl mb-8">
        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest font-mono flex items-center gap-1.5 mb-2">
          <Sparkles className="w-4 h-4" /> B2B Technical Optimization Tool
        </span>
        <h3 className="text-2xl font-bold text-slate-100 font-display">Simulated AI Search & SEO Citation Auditor</h3>
        <p className="text-sm text-slate-400 mt-2 leading-relaxed">
          Modern technology buyers query LLMs directly instead of clicking standard blue links. Insert your company's domain to run a mock diagnostic analyzing how effectively your product entities are indexed across major AI engines.
        </p>
      </div>

      {auditState === 'idle' && (
        <form onSubmit={runAudit} className="space-y-4 max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Tech Domain URL</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g., cloudshield.io"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value.replace(/https?:\/\//, '').split('/')[0])}
                  className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm py-3 pl-10 pr-4 text-slate-200 placeholder-white/30 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors font-mono"
                />
                <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-white/30" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Target Enterprise Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm p-3 text-slate-300 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              >
                <option value="enterprise-saas">Enterprise SaaS Platforms</option>
                <option value="devops">DevSecOps & Platform Engineering</option>
                <option value="database">Cloud Infrastructure & Databases</option>
                <option value="cyber">Cybersecurity & Zero-Trust Architecture</option>
                <option value="fintech">B2B Fintech & Automated Ledgers</option>
                <option value="it-msp">Managed IT & Professional Tech Services</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-sm transition-colors flex items-center justify-center shadow-lg shadow-blue-600/10 cursor-pointer"
            >
              Analyze AI Engine Visibility <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </form>
      )}

      {auditState === 'scanning' && (
        <div className="py-8 flex flex-col items-center justify-center space-y-4 max-w-md mx-auto">
          {/* Circular progress loader */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="48"
                cy="48"
                r="40"
                stroke="#2563EB"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 40}
                strokeDashoffset={2 * Math.PI * 40 * (1 - progress / 100)}
                className="transition-all duration-300 ease-out"
              />
            </svg>
            <span className="text-lg font-mono font-bold text-[#F8F8F8]">{progress}%</span>
          </div>

          <div className="text-center">
            <h5 className="text-sm font-semibold text-slate-200">Simulating diagnostic run...</h5>
            <p className="text-xs text-white/40 mt-1.5 font-mono h-4">{currentStepText}</p>
          </div>
        </div>
      )}

      {auditState === 'completed' && (
        <div className="space-y-6">
          {/* Quick status bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white/[0.04] border border-white/10 rounded-sm gap-4">
            <div>
              <span className="text-[10px] font-mono text-white/40 uppercase">Target Analyzed Domain</span>
              <div className="text-base font-bold text-slate-100 font-display flex items-center gap-2">
                <span>{domain}</span>
                <span className="bg-red-500/15 border border-red-900/40 text-[10px] text-red-400 px-2 py-0.5 rounded font-mono uppercase font-semibold">
                  Action Recommended
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={resetAudit}
                className="text-xs text-slate-400 hover:text-slate-200 border border-white/10 hover:border-white/20 bg-white/5 px-3.5 py-2.5 rounded-sm transition-colors font-bold uppercase tracking-widest"
              >
                Scan Another
              </button>
              <a
                href="#book-session"
                onClick={() => {
                  const element = document.getElementById('final-booking');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs text-white bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-sm transition-colors flex items-center font-bold uppercase tracking-widest shadow-lg shadow-blue-600/10 cursor-pointer"
              >
                Get Full Audit <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Audit Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Share of voice Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5 space-y-3">
              <div className="flex items-center space-x-2 text-blue-400">
                <Gauge className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">AI Share of Voice</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-red-400 font-display">12%</span>
                <span className="text-xs text-white/40">Critical Threshold</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Your brand appears in less than 12% of comparison queries within your specific sector. Legacy PDF gates and poor API documentation integration prevent scrapers from mapping your software's capabilities.
              </p>
            </div>

            {/* Entity Authority Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5 space-y-3">
              <div className="flex items-center space-x-2 text-blue-400">
                <Award className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Entity Authority Score</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-amber-500 font-display">42/100</span>
                <span className="text-xs text-white/40">Weak Linkages</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Your domain lacks clear structured schema linkages. Large Language Models cannot resolve your company as an established 'Organization' entity with verified software products in Wikidata, DBpedia, or Google's Knowledge Graph.
              </p>
            </div>

            {/* Scraper Accessibility Card */}
            <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5 space-y-3">
              <div className="flex items-center space-x-2 text-blue-400">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Scraper Accessibility</span>
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-4xl font-extrabold text-red-400 font-display">Poor</span>
                <span className="text-xs text-white/40">Crawling Blocks</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed">
                Critical developer instructions and feature comparison details are locked inside client-side JS components that lack static server-side rendering, leading to LLM scrapers failing to digest your core benefits.
              </p>
            </div>

          </div>

          {/* Engine Breakdown List */}
          <div className="bg-white/[0.02] border border-white/5 rounded-sm p-5">
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Citation Mentions across Major AI Search Platforms</h4>
            <div className="space-y-3">
              {[
                { name: "Perplexity AI", status: "Partially Cited", desc: "Mentioned as alternative in page footer sources, but omitted from primary recommendation cards due to weak structured comparison matrices.", color: "text-amber-400 bg-amber-500/10 border-amber-900/30" },
                { name: "ChatGPT Search (GPT-4o)", status: "Not Mentioned", desc: "Excluded entirely from recommendation outputs. OpenAI scrapers cannot parse core product features owing to heavy client-side rendering bottlenecks.", color: "text-red-400 bg-red-500/10 border-red-900/30" },
                { name: "Google AI Overviews", status: "Suggested as Secondary", desc: "Briefly referenced in specific long-tail informational queries, but outranked by competitors on high-intent 'enterprise platform' keywords.", color: "text-blue-400 bg-blue-500/10 border-blue-900/30" },
                { name: "Gemini Pro / Flash", status: "Missing References", desc: "Completely omitted from standard entity comparisons due to lack of verified Wikidata references and lack of un-gated security documentation.", color: "text-red-400 bg-red-500/10 border-red-900/30" }
              ].map((engine, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-3 bg-[#0A0A0B]/60 border border-white/5 rounded-sm gap-3">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-200">{engine.name}</span>
                    <p className="text-[11px] text-white/45 leading-relaxed">{engine.desc}</p>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${engine.color} shrink-0 self-start md:self-center font-mono`}>
                    {engine.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* HybridMonks Playbook recommendations */}
          <div className="bg-white/[0.04] border border-white/10 rounded-sm p-5 space-y-4">
            <div className="flex items-center space-x-2 text-blue-400">
              <CheckCircle2 className="w-5 h-5" />
              <h4 className="text-sm font-bold uppercase tracking-widest font-mono">HybridMonks Rectification Strategy for {domain}</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="font-semibold text-slate-200 block">1. Un-gate Security & Integration Docs</span>
                <p className="text-white/50 leading-relaxed">
                  We will format and expose non-sensitive SOC2 checklists, API routes, and comparison tables as clean static markdown in an un-gated directory, allowing LLM scrapers to digest them fully.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-slate-200 block">2. Deploy Semantic Structured Schemas</span>
                <p className="text-white/50 leading-relaxed">
                  We will inject rich, modern JSON-LD entity structures and anchor external citations linking your domain directly to recognized authoritative wikidata indices to cement your category definition.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-slate-200 block">3. Launch Bottom-of-Funnel SEO Spurt</span>
                <p className="text-white/50 leading-relaxed">
                  Target and capture commercial comparison queries immediately to drive active buyers searching for alternatives into high-speed React conversion channels.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-semibold text-slate-200 block">4. Feed Positive Citation Echo Chambers</span>
                <p className="text-white/50 leading-relaxed">
                  Saturate high-authority journals, technical blogs, and third-party media sources with rich reviews and structural mentions to build a strong citation network that scrapers query.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-between items-center flex-col sm:flex-row gap-3">
              <span className="text-[11px] text-blue-300 font-semibold">Want us to implement this strategy? We work exclusively on B2B Technology Growth.</span>
              <a 
                href="#blueprint-modal"
                onClick={(e) => {
                  e.preventDefault();
                  const event = new CustomEvent('open-blueprint-modal');
                  window.dispatchEvent(event);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-sm transition-colors shadow-md shadow-blue-600/10"
              >
                Request Call
              </a>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
