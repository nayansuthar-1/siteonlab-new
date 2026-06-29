"use client";

import { useState, useEffect, FormEvent } from "react";
import { X, Cpu, Send, CheckCircle, RefreshCw, AlertTriangle, Copy, Check, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  isAssessmentMode?: boolean;
}

export default function BlueprintModal({ isOpen, onClose, isAssessmentMode = false }: BlueprintModalProps) {
  const [domain, setDomain] = useState("");
  const [businessType, setBusinessType] = useState("B2B SaaS");
  const [techStack, setTechStack] = useState("Next.js / React");
  const [concerns, setConcerns] = useState("");
  const [currentScore, setCurrentScore] = useState("60"); // For assessment

  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [blueprint, setBlueprint] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const loadingMessages = [
    "Establishing handshake with HybridMonks virtual auditor...",
    "Crawling site schema configurations & robots.txt directives...",
    "Validating DNS response parameters and HTTP/2 handshakes...",
    "Querying Gemini API server-side for bespoke B2B recommendations...",
    "Drafting production-ready schema structures and INP fixes...",
    "Formatting technical sprint phases and final roadmap graph...",
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setLoadingStep(0);
      interval = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev < loadingMessages.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!domain) return;

    setIsLoading(true);
    setBlueprint(null);

    try {
      const response = await fetch("/api/blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          domain,
          businessType,
          techStack,
          concerns: isAssessmentMode 
            ? `Assessment score: ${currentScore}/100. Specific concerns: ${concerns}` 
            : concerns,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setBlueprint(data.blueprint);
      } else {
        setBlueprint(`### ⚠ Error Generating Blueprint\n\n${data.error || "An error occurred on the server."}`);
      }
    } catch (err: any) {
      setBlueprint(`### ⚠ Network Connection Error\n\nFailed to reach the blueprint generation server. Error: ${err.message || err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!blueprint) return;
    navigator.clipboard.writeText(blueprint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          
          {/* Backdrop Click */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          ></motion.div>

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl bg-[#080808] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#050505]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-600/10 border border-white/10 flex items-center justify-center text-blue-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base">
                    {isAssessmentMode ? "B2B Technical SEO Assessment" : "Request a Growth Blueprint"}
                  </h3>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest font-mono">
                    {isAssessmentMode ? "Diagnose indexation score & engineering health" : "Receive a customized crawl, speed, and schema report"}
                  </p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="h-8 w-8 rounded-full bg-[#050505] hover:bg-[#111] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Container */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              
              {/* STATE 1: LOADING */}
              {isLoading && (
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-6 max-w-lg mx-auto">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full border-4 border-blue-500/10 border-t-blue-500 animate-spin"></div>
                    <Sparkles className="h-6 w-6 text-blue-500 absolute inset-0 m-auto animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-white text-base uppercase tracking-wider">Generating Bespoke Technical Roadmap</h4>
                    <p className="text-xs text-gray-400 min-h-[48px] font-light">
                      {loadingMessages[loadingStep]}
                    </p>
                  </div>
                  <div className="w-full bg-[#050505] h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${((loadingStep + 1) / loadingMessages.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    Step {loadingStep + 1} of {loadingMessages.length} · Processing Server Payload
                  </span>
                </div>
              )}

              {/* STATE 2: INPUT FORM */}
              {!isLoading && !blueprint && (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                  
                  {isAssessmentMode && (
                    <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-lg flex items-start gap-3">
                      <AlertTriangle className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-slate-300 leading-relaxed font-light">
                        <strong>Self-Assessment Estimate</strong>: Score your current technical setup below. Gemini will combine your score with your stack details to provide a corrective engineering playbook.
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Domain Name */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Website Domain *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={domain}
                        onChange={(e) => setDomain(e.target.value)}
                        placeholder="e.g. enterprise-saas.com"
                        className="w-full bg-[#050505] border border-white/5 hover:border-white/20 focus:border-blue-500 text-xs rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Business/ICP */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Business Sector / Target Audience
                      </label>
                      <select 
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full bg-[#050505] border border-white/5 hover:border-white/20 focus:border-blue-500 text-xs rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                      >
                        <option value="B2B SaaS">B2B SaaS / Software</option>
                        <option value="Enterprise Tech / IT">Enterprise Tech / IT Infrastructure</option>
                        <option value="MSP / Professional Services">MSP / Corporate Services</option>
                        <option value="Fintech / Healthtech">Regulated B2B (Fintech / Healthcare)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Web Technology Stack
                      </label>
                      <select 
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                        className="w-full bg-[#050505] border border-white/5 hover:border-white/20 focus:border-blue-500 text-xs rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                      >
                        <option value="Next.js / React / Vercel">Next.js / React / Vercel (JS Headless)</option>
                        <option value="WordPress (Enterprise / Custom)">WordPress (Enterprise / Custom)</option>
                        <option value="Webflow / Hubspot CMS">Webflow / Hubspot CMS</option>
                        <option value="Gatsby / Nuxt / Astro">Static / SSG (Gatsby, Nuxt, Astro)</option>
                        <option value="Vanilla JS / HTML / CDN Stack">Vanilla JS / HTML / CDN Stack</option>
                      </select>
                    </div>

                    {/* Score (If Assessment Mode) */}
                    {isAssessmentMode ? (
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                          Current Performance Score (Estimate)
                        </label>
                        <select 
                          value={currentScore}
                          onChange={(e) => setCurrentScore(e.target.value)}
                          className="w-full bg-[#050505] border border-white/5 hover:border-white/20 focus:border-blue-500 text-xs rounded-lg px-4 py-3 text-white focus:outline-none transition-colors"
                        >
                          <option value="80+">80+ (Highly Optimized, minor crawl blocks)</option>
                          <option value="60-79">60-79 (Moderate rendering & speed problems)</option>
                          <option value="40-59">40-59 (Severe hydration or core indexing flags)</option>
                          <option value="Under 40">Under 40 (Legacy layout, slow response times)</option>
                        </select>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                          What is your primary SEO focus?
                        </label>
                        <input 
                          type="text" 
                          value={concerns}
                          onChange={(e) => setConcerns(e.target.value)}
                          placeholder="e.g. indexation lag, slow CWV, Core Update drop"
                          className="w-full bg-[#050505] border border-white/5 hover:border-white/20 focus:border-blue-500 text-xs rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors"
                        />
                      </div>
                    )}
                  </div>

                  {/* Concerns / Detailed input */}
                  {isAssessmentMode && (
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Describe any specific indexing or Core Web Vitals issues
                      </label>
                      <textarea 
                        rows={3}
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        placeholder="Describe script load issues, hreflang concerns, duplicate page drops, or LLM scraping limits..."
                        className="w-full bg-[#050505] border border-white/5 hover:border-white/20 focus:border-blue-500 text-xs rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  )}

                  {!isAssessmentMode && (
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Detailed Context / Custom Objectives
                      </label>
                      <textarea 
                        rows={3}
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        placeholder="E.g., We recently launched Next.js but our Google Search Console coverage shows 4,000 'disallowed by robots.txt' and INP is spiking..."
                        className="w-full bg-[#050505] border border-white/5 hover:border-white/20 focus:border-blue-500 text-xs rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  )}

                  {/* Form Submission Button */}
                  <div className="pt-4 text-center">
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-200"
                    >
                      Generate My Technical SEO Blueprint
                    </button>
                    <p className="text-[10px] text-gray-500 mt-3 italic font-light">
                      Powered by HybridMonks Audit Engine and Gemini 3.5. Audit output is private and secure under standard NDA guidelines.
                    </p>
                  </div>

                </form>
              )}

              {/* STATE 3: AUDIT RESULTS DISPLAY */}
              {!isLoading && blueprint && (
                <div className="space-y-6">
                  
                  {/* Action Bar */}
                  <div className="flex items-center justify-between p-4 bg-[#050505] rounded-lg border border-white/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-400" />
                      <span className="text-[10px] font-mono font-medium text-gray-200">
                        AUDIT ROADMAP FOR <span className="text-blue-500">{domain.toUpperCase()}</span> GENERATED
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 bg-[#080808] hover:bg-[#111] border border-white/10 text-xs font-mono text-gray-300 px-3 py-2 rounded-lg transition-all"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy Report</span>
                          </>
                        )}
                      </button>
                      
                      <button
                        onClick={() => {
                          setBlueprint(null);
                          setDomain("");
                          setConcerns("");
                        }}
                        className="flex items-center gap-1.5 bg-[#080808] hover:bg-[#111] border border-white/10 text-xs font-mono text-gray-300 px-3 py-2 rounded-lg transition-all"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                        <span>Reset Form</span>
                      </button>
                    </div>
                  </div>

                  {/* Rendered Markdown report */}
                  <div className="bg-[#050505] p-6 md:p-8 rounded-lg border border-white/5 overflow-x-auto max-h-[50vh] text-left">
                    <div className="markdown-body text-xs text-gray-300 font-light leading-relaxed">
                      {blueprint.split("\n").map((line, idx) => {
                        if (line.startsWith("# ")) {
                          return <h1 key={idx} className="text-white font-bold text-lg mb-2 mt-4">{line.replace("# ", "")}</h1>;
                        } else if (line.startsWith("## ")) {
                          return <h2 key={idx} className="text-white font-bold text-base mb-2 mt-3">{line.replace("## ", "")}</h2>;
                        } else if (line.startsWith("### ")) {
                          return <h3 key={idx} className="text-white font-semibold text-sm mb-1 mt-2">{line.replace("### ", "")}</h3>;
                        } else if (line.startsWith("- ")) {
                          return <li key={idx} className="ml-4 list-disc text-gray-300 mb-1">{line.replace("- ", "")}</li>;
                        } else if (line.startsWith("> ")) {
                          return <blockquote key={idx} className="border-l-2 border-blue-500 pl-3 italic text-gray-400 my-2">{line.replace("> ", "")}</blockquote>;
                        } else if (line.trim() === "---") {
                          return <hr key={idx} className="border-white/5 my-4" />;
                        } else if (line.trim() === "") {
                          return <div key={idx} className="h-2"></div>;
                        } else {
                          // Standard line with inline code backticks highlight
                          const parts = line.split("`");
                          if (parts.length > 1) {
                            return (
                              <p key={idx} className="mb-2">
                                {parts.map((part, pIdx) => {
                                  if (pIdx % 2 === 1) {
                                    return <code key={pIdx} className="bg-[#111] text-blue-400 px-1.5 py-0.5 rounded font-mono text-[11px]">{part}</code>;
                                  }
                                  return part;
                                })}
                              </p>
                            );
                          }
                          return <p key={idx} className="mb-2">{line}</p>;
                        }
                      })}
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <div className="text-[10px] text-gray-500 max-w-lg mx-auto uppercase tracking-wider font-mono">
                      Want an expert engineering walkthrough of these recommendations? Book a strategy audit directly with HybridMonks.
                    </div>
                    <button
                      onClick={onClose}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-500 hover:text-blue-400 hover:underline"
                    >
                      Return to service page
                    </button>
                  </div>

                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-4 bg-[#050505] border-t border-white/5 text-center text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              HYBRIDMONKS © 2026 · SECURITY AUDITS ENABLED · ISO 27001 SECURED CONNECTIVITY
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
