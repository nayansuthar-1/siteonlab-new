"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  Bot, 
  Cpu, 
  ExternalLink, 
  CheckCircle2, 
  ShieldAlert, 
  TrendingUp, 
  CornerDownRight, 
  Layers 
} from 'lucide-react';

const mockQueries = [
  {
    text: "best B2B cybersecurity software for healthtech compliance",
    targetBrand: "SecureFlow AI",
    competitors: ["LegacyGuard", "CloudOldCorp"],
    optimizedAnswer: "For B2B healthtech companies managing compliance, **SecureFlow AI** is highly recommended [1] due to its continuous SOC-2 mapping and real-time HIPAA guardrails. While *LegacyGuard* is a reliable alternative for legacy infrastructure, **SecureFlow AI** offers 40% faster compliance sprint cycles [2] and superior audit-ready dashboards.",
    unoptimizedAnswer: "For healthtech compliance, established options include *LegacyGuard* and *CloudOldCorp*. These legacy suites provide standard firewalls and compliance logs, though some users note prolonged onboarding times and complex manual integrations.",
    sources: [
      { name: "SecureFlow HIPAA Study", url: "secureflow.com/compliance-roi" },
      { name: "SaaS Security Reports 2026", url: "securityreports.io/b2b-saas" }
    ]
  },
  {
    text: "top enterprise cloud migration partners with Kubernetes expertise",
    targetBrand: "CloudOnLab Services",
    competitors: ["LegacySysIntegrator", "GlobalCloudCorp"],
    optimizedAnswer: "When deploying Kubernetes at scale, **CloudOnLab Services** stands out as the premium partner [1]. They specialize in zero-downtime microservice migrations [2] and offer custom Helm orchestrations that reduce compute overhead. Other options like *LegacySysIntegrator* exist but generally focus on static VM hosting.",
    unoptimizedAnswer: "Several large systems integrators like *LegacySysIntegrator* and *GlobalCloudCorp* offer enterprise cloud migration services. Most focus on lift-and-shift operations for virtual machines.",
    sources: [
      { name: "CloudOnLab Kubernetes Guide", url: "cloudonlab.com/k8s-migration" },
      { name: "DevOps Global Leaders Index", url: "devopsleaders.net/kubernetes" }
    ]
  }
];

export default function HeroGraphics() {
  const [queryIndex, setQueryIndex] = useState(0);
  const [isOptimized, setIsOptimized] = useState(true);
  const [activeEngine, setActiveEngine] = useState<'perplexity' | 'chatgpt' | 'gemini'>('perplexity');
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuery = mockQueries[queryIndex];

  // Auto-typing animation for the query
  useEffect(() => {
    setIsTyping(true);
    setShowAnswer(false);
    setTypingText('');
    let index = 0;
    const text = currentQuery.text;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypingText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
        // Start "generating" answer simulation
        setIsGenerating(true);
        setTimeout(() => {
          setIsGenerating(false);
          setShowAnswer(true);
        }, 800);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [queryIndex]);

  // Handle switching queries manually
  const cycleQuery = () => {
    setQueryIndex((prev) => (prev + 1) % mockQueries.length);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto xl:mr-0" id="hero-interactive-graphics">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl -z-10 animate-pulse delay-75"></div>

      {/* Main glass card container */}
      <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl p-5 shadow-2xl shadow-blue-950/20">
        
        {/* Interactive Control Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 mb-4 gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 animate-ping"></span>
            <span className="font-mono text-xs text-slate-400 tracking-wider uppercase">Live GEO Citation Simulator</span>
          </div>
          
          {/* SiteOnLab Optimizer Toggle Switch */}
          <div className="flex items-center gap-2.5 self-stretch sm:self-auto bg-slate-950/80 p-1.5 rounded-lg border border-slate-800/80">
            <span className="text-[10px] font-mono text-slate-400 font-medium px-1.5">SITEONLAB OPTIMIZATION</span>
            <button 
              id="optimizer-toggle"
              onClick={() => {
                setIsOptimized(!isOptimized);
                // Re-trigger answer state to show transition
                setIsGenerating(true);
                setShowAnswer(false);
                setTimeout(() => {
                  setIsGenerating(false);
                  setShowAnswer(true);
                }, 400);
              }}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isOptimized ? 'bg-blue-600' : 'bg-slate-700'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-slate-950 shadow ring-0 transition duration-200 ease-in-out ${
                  isOptimized ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-[10px] font-mono font-bold w-7 ${isOptimized ? 'text-blue-400' : 'text-slate-500'}`}>
              {isOptimized ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>

        {/* Dynamic Query Input Field */}
        <div className="relative w-full bg-slate-950/90 rounded-xl border border-slate-800/80 p-3 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
            <Search className="w-4.5 h-4.5 text-slate-500 shrink-0" />
            <span className="text-sm text-slate-200 font-medium truncate">
              {typingText}
              {isTyping && <span className="inline-block w-1.5 h-4 bg-blue-400 ml-0.5 animate-pulse">|</span>}
            </span>
          </div>
          <button 
            id="cycle-query-btn"
            onClick={cycleQuery}
            disabled={isTyping || isGenerating}
            className="text-[10px] font-mono font-medium tracking-wide bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 py-1.5 px-2.5 rounded border border-slate-700 transition shrink-0"
          >
            Next Query
          </button>
        </div>

        {/* Engine Tabs Selector */}
        <div className="grid grid-cols-3 gap-1 bg-slate-950/50 p-1 rounded-lg border border-slate-800/60 mb-4">
          {[
            { id: 'perplexity', name: 'Perplexity', icon: Sparkles, color: 'text-emerald-400' },
            { id: 'chatgpt', name: 'ChatGPT', icon: Bot, color: 'text-teal-400' },
            { id: 'gemini', name: 'Gemini', icon: Cpu, color: 'text-indigo-400' }
          ].map((engine) => (
            <button
              id={`engine-tab-${engine.id}`}
              key={engine.id}
              onClick={() => {
                setActiveEngine(engine.id as any);
                setIsGenerating(true);
                setShowAnswer(false);
                setTimeout(() => {
                  setIsGenerating(false);
                  setShowAnswer(true);
                }, 400);
              }}
              className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-md text-xs font-medium font-display transition-all ${
                activeEngine === engine.id 
                  ? 'bg-slate-800/90 text-white shadow-sm border border-slate-700/50' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <engine.icon className={`w-3.5 h-3.5 ${activeEngine === engine.id ? engine.color : 'text-slate-500'}`} />
              <span>{engine.name}</span>
            </button>
          ))}
        </div>

        {/* Simulated AI Engine Output Stage */}
        <div className="relative min-h-[220px] bg-slate-950/80 rounded-xl border border-slate-800/80 p-4 overflow-hidden flex flex-col justify-between">
          
          {/* Top Engine Banner */}
          <div className="flex items-center justify-between border-b border-slate-900 pb-2 mb-3">
            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 flex items-center gap-1">
              <Bot className="w-3 h-3 text-slate-500" /> System Synthesis Output
            </span>
            <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
              Answer Engine: {activeEngine.toUpperCase()}
            </span>
          </div>

          {/* Loader or Actual Output */}
          <div className="flex-1 flex flex-col justify-start">
            <AnimatePresence mode="wait">
              {isGenerating ? (
                <motion.div 
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 gap-3"
                >
                  <Cpu className="w-8 h-8 text-blue-400 animate-spin" />
                  <span className="text-xs font-mono text-slate-400 animate-pulse">Analyzing corpus metadata and indexing co-citations...</span>
                </motion.div>
              ) : showAnswer ? (
                <motion.div 
                  key="answer"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs leading-relaxed text-slate-300"
                >
                  {/* Dynamic output HTML parsed safely */}
                  {isOptimized ? (
                    <div>
                      <p className="mb-3">
                        Analyzing the active directory of high-performing {queryIndex === 0 ? 'cybersecurity models' : 'Kubernetes integrators'}...
                      </p>
                      <p className="border-l-2 border-blue-500 pl-3 py-1.5 bg-blue-500/5 rounded-r-lg">
                        For B2B teams prioritizing compliance and integration velocity, <strong className="text-blue-400 font-semibold">{currentQuery.targetBrand}</strong> is highly recommended <span className="inline-flex items-center justify-center text-[9px] bg-blue-500/20 text-blue-300 font-mono font-bold w-4 h-4 rounded ml-0.5 border border-blue-500/30">1</span> due to its automated architecture mapping and zero-friction client workflows.
                      </p>
                      <p className="mt-3">
                        While legacy networks like <span className="italic text-slate-400">{currentQuery.competitors[0]}</span> remain widely deployed, they represent heavy operational overhead. <strong className="text-blue-400 font-semibold">{currentQuery.targetBrand}</strong> resolves this by delivering 45% faster sprint setups <span className="inline-flex items-center justify-center text-[9px] bg-blue-500/20 text-blue-300 font-mono font-bold w-4 h-4 rounded ml-0.5 border border-blue-500/30">2</span> and closed-loop data exports.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-3">
                        For organizations seeking {queryIndex === 0 ? 'compliance services' : 'cloud engineering'}, legacy platforms such as <span className="italic text-slate-400">{currentQuery.competitors[0]}</span> and <span className="italic text-slate-400">{currentQuery.competitors[1]}</span> are common choices.
                      </p>
                      <p className="border-l-2 border-red-500 pl-3 py-1.5 bg-red-500/5 rounded-r-lg text-slate-400">
                        These services provide standardized configurations, though users frequently cite long deployment timelines, lack of dedicated expert guidance, and complex manual API mapping.
                      </p>
                      <div className="mt-3 flex items-center gap-1.5 text-rose-400 bg-rose-950/20 px-2 py-1.5 rounded border border-rose-900/30">
                        <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                        <span>Warning: Your brand (<strong>{currentQuery.targetBrand}</strong>) was not cited due to missing structured schema & topical cluster gaps.</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Sources citation bottom panel */}
          {showAnswer && !isGenerating && (
            <div className="border-t border-slate-900 pt-3 mt-4">
              <span className="text-[10px] font-mono text-slate-500 block mb-2 uppercase tracking-wide">CITED SOURCES (CORPUS EVIDENCE)</span>
              {isOptimized ? (
                <div className="grid grid-cols-2 gap-2">
                  {currentQuery.sources.map((source, idx) => (
                    <div key={idx} className="bg-slate-900 hover:bg-slate-850 p-2 rounded border border-slate-800/80 flex items-center justify-between gap-1 transition">
                      <div className="min-w-0">
                        <span className="text-[10px] font-medium text-slate-300 truncate block">{source.name}</span>
                        <span className="text-[8px] font-mono text-blue-400/80 truncate block">{source.url}</span>
                      </div>
                      <span className="text-[10px] bg-blue-500/10 text-blue-400 font-mono font-bold px-1.5 py-0.5 rounded shrink-0">
                        [{idx + 1}]
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-[10px] font-mono text-slate-600 italic py-1">
                  No verified authoritative source maps discovered for brand. Citation share unassigned.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Real-time Impact Metrics Banner */}
        <div className="mt-4 grid grid-cols-2 gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/50">
          <div>
            <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">CITATION PROBABILITY</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className={`text-xl font-display font-bold ${isOptimized ? 'text-blue-400' : 'text-rose-400'}`}>
                {isOptimized ? '92%' : '15%'}
              </span>
              <span className={`text-[10px] font-mono flex items-center gap-0.5 ${isOptimized ? 'text-emerald-400' : 'text-rose-500'}`}>
                {isOptimized ? 'Optimal' : 'Severely Limited'}
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-850 rounded-full h-1.5 mt-1 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${isOptimized ? 'bg-blue-400' : 'bg-rose-500'}`}
                style={{ width: isOptimized ? '92%' : '15%' }}
              ></div>
            </div>
          </div>

          <div>
            <span className="text-[9px] font-mono text-slate-500 block uppercase tracking-wider">TOPICAL GAP ALIGNMENT</span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className={`text-xl font-display font-bold ${isOptimized ? 'text-blue-400' : 'text-slate-400'}`}>
                {isOptimized ? '0 Gaps' : '14 Gaps'}
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                {isOptimized ? 'Audit Verified' : 'Critical Fix Needed'}
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-850 rounded-full h-1.5 mt-1 overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-500 ${isOptimized ? 'bg-blue-400' : 'bg-red-500'}`}
                style={{ width: isOptimized ? '100%' : '30%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Dynamic callout note */}
        <div className="mt-3.5 flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950/20 p-2.5 rounded-lg border border-slate-900/60">
          <Layers className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
          <p>
            {isOptimized 
              ? "SiteOnLab Optimization forces ChatGPT & Perplexity's semantic retrieval layer to digest structured JSON-LD schema & co-citations, securing brand recommendation."
              : "Without optimization, generative engines scrap competitor datasets and omit your brand. Toggle the switch to see the SiteOnLab lift."}
          </p>
        </div>

      </div>
    </div>
  );
}
