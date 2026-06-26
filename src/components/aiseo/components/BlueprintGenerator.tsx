"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  AlertTriangle, 
  TrendingUp, 
  Code2, 
  Calendar,
  Lock,
  RefreshCw,
  Clock,
  X
} from 'lucide-react';
import { BlueprintSubmission } from '../types';

interface BlueprintGeneratorProps {
  onClose?: () => void;
  initialGoal?: string;
}

export default function BlueprintGenerator({ onClose, initialGoal = "" }: BlueprintGeneratorProps) {
  const [formData, setFormData] = useState<BlueprintSubmission>({
    companyName: '',
    website: '',
    industry: 'B2B SaaS',
    mainCompetitor: '',
    primaryGoal: initialGoal || 'Increase Search Citations'
  });

  const [step, setStep] = useState<'form' | 'generating' | 'report'>('form');
  const [loadingStep, setLoadingStep] = useState(0);
  const loadingMessages = [
    "Analyzing crawl path optimization on domain nodes...",
    "Scanning ChatGPT, Gemini & Perplexity citation indexes...",
    "Evaluating Information Gain coefficients on core topics...",
    "Synthesizing customized semantic JSON-LD schemas...",
    "Generating 90-day pipeline acquisition roadmap..."
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const startGeneration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.website) return;
    
    setStep('generating');
    setLoadingStep(0);

    const interval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setStep('report');
          return prev;
        }
      });
    }, 900);
  };

  // Custom recommendations based on industry choice
  const getIndustryRecommendations = (ind: string) => {
    switch(ind) {
      case 'B2B SaaS':
        return {
          clusters: [
            "Category Comparison Matrices (e.g., 'yourbrand vs competitor' deep-dives)",
            "Problem-Aware Decision Guides (explaining the technical SOC-2 or API workflow)",
            "ROI Audit Checklists (actionable templates that capture buyer intent)"
          ],
          schema: "Product, SoftwareApplication, and Organization semantic graphs.",
          focus: "LLM citation in software comparison grids and conversational feature lists."
        };
      case 'Technology & IT/MSP':
        return {
          clusters: [
            "Service-Area Maps ('best managed cloud migration consultants in Chicago')",
            "Expert Resolution Frameworks (troubleshooting specific enterprise server lags)",
            "Vendor Security Evaluation templates (for IT directors pitching to procurement)"
          ],
          schema: "ProfessionalService, Service, and WebPage semantic graphs.",
          focus: "Local and regional semantic relevance for direct technical team outsourcing."
        };
      case 'Cybersecurity':
        return {
          clusters: [
            "Vulnerability Mitigation logs (explaining new CVE threats and patching workflows)",
            "Enterprise Compliance guides (SOC-2, HIPAA, ISO-27001 mapping grids)",
            "CISO Threat Assessment models (high information-gain architectural breakdowns)"
          ],
          schema: "SecurityService, TechArticle, and Organization semantic nodes.",
          focus: "Extreme trust verification signals, security assertions, and E-E-A-T citation proof."
        };
      default:
        return {
          clusters: [
            "Solution Comparison matrixes mapping buyer-intent requirements",
            "Expert Authority whitepapers resolving direct pain points",
            "Pricing and ROI calculator clusters to capture warm buying intent"
          ],
          schema: "Organization, Service, and FAQPage schemas.",
          focus: "Establishing topical authority to command conversational recommendations."
        };
    }
  };

  const recommendations = getIndustryRecommendations(formData.industry);

  return (
    <div className="w-full bg-slate-900 rounded-2xl border border-slate-800/80 overflow-hidden shadow-2xl relative" id="blueprint-generator-container">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
          aria-label="Close generator"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Decorative colored glow borders */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500"></div>

      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: FORM INPUT */}
          {step === 'form' && (
            <motion.div
              key="form-step"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-blue-500/10 rounded text-blue-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs font-semibold tracking-wider text-blue-400 uppercase">On-Demand GEO Audit</span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-2">
                Generate Your B2B AI SEO Growth Blueprint
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Receive an instant semantic diagnostic analysis of your website's visibility across conversational engines (ChatGPT, Gemini, Perplexity) and a personalized SEO roadmap.
              </p>

              <form onSubmit={startGeneration} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Company Name *</label>
                    <input 
                      type="text" 
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. SecureFlow AI"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Website URL *</label>
                    <input 
                      type="url" 
                      name="website"
                      required
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="e.g. https://secureflow.ai"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Primary Target Industry</label>
                    <select 
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                    >
                      <option value="B2B SaaS">B2B SaaS</option>
                      <option value="Technology & IT/MSP">Technology & IT/MSP</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Professional Services">Professional Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Top Market Competitor</label>
                    <input 
                      type="text" 
                      name="mainCompetitor"
                      value={formData.mainCompetitor}
                      onChange={handleInputChange}
                      placeholder="e.g. LegacyGuard Inc."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Your Primary Goal</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Increase Search Citations',
                      'Dominate Google AI Overviews',
                      'Fix CRM Pipeline'
                    ].map(goal => (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => setFormData(prev => ({ ...prev, primaryGoal: goal }))}
                        className={`py-2 px-3 text-xs font-medium rounded-lg border transition text-center ${
                          formData.primaryGoal === goal 
                            ? 'bg-blue-500/10 border-blue-500 text-blue-400' 
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>No marketing spam. Fully confidential GDPR compliance.</span>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    <span>Analyze Domain & Generate Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 2: LOADING GENERATION */}
          {step === 'generating' && (
            <motion.div
              key="generating-step"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-blue-500 animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-indigo-400 animate-pulse" />
                </div>
              </div>

              <span className="font-mono text-xs font-semibold tracking-wider text-blue-400 uppercase mb-2">Analyzing Domain Data Nodes</span>
              <h4 className="text-lg font-medium text-white mb-4">Building SiteOnLab Diagnostic Report</h4>
              
              <div className="w-full max-w-md bg-slate-950 rounded-lg p-3 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-slate-400">CURRENT OPERATION:</span>
                  <span className="text-[10px] font-mono text-blue-400 font-bold">{Math.round(((loadingStep + 1) / loadingMessages.length) * 100)}% Complete</span>
                </div>
                <p className="text-xs font-mono text-emerald-400 text-left truncate">
                  &gt; {loadingMessages[loadingStep]}
                </p>
                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((loadingStep + 1) / loadingMessages.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: FULL BLUEPRINT REPORT */}
          {step === 'report' && (
            <motion.div
              key="report-step"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* Report Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 font-bold uppercase tracking-wider">
                    SiteOnLab Advanced Diagnostic Report
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white mt-2">
                    {formData.companyName} Growth Blueprint
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Target Domain: <span className="text-blue-400 hover:underline">{formData.website}</span> · Industry Focus: {formData.industry}
                  </p>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center gap-3">
                  <div className="h-10 w-10 bg-indigo-500/10 rounded flex items-center justify-center text-indigo-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 block uppercase">Projected Pipeline Lift</span>
                    <span className="text-sm font-bold text-emerald-400">+240% in 120 Days</span>
                  </div>
                </div>
              </div>

              {/* Grid Metrics Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-rose-950/40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">AI Citation Share</span>
                    <AlertTriangle className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-2xl font-bold text-rose-400">22% <span className="text-xs text-slate-500 font-normal">Visibility</span></span>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                    Severely limited index. Brand is currently omitted in {formData.mainCompetitor ? `${formData.mainCompetitor}'s` : "competitor's"} conversational queries due to semantic graph gaps.
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-yellow-950/40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Topical Authority Gaps</span>
                    <Layers className="w-4 h-4 text-yellow-500" />
                  </div>
                  <span className="text-2xl font-bold text-yellow-400">14 Gaps <span className="text-xs text-slate-500 font-normal">Detected</span></span>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                    Traditional content catalogs suffer from low Information Gain. Lack of comparison clusters forces LLMs to crawl external sources instead.
                  </p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-rose-950/40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wide">Schema Compliance</span>
                    <Code2 className="w-4 h-4 text-rose-500" />
                  </div>
                  <span className="text-2xl font-bold text-rose-400">None <span className="text-xs text-slate-500 font-normal">Detected</span></span>
                  <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                    No structured JSON-LD or entity-relationship graphs declared. AI scrapers are forced to make raw semantic guesses of your page.
                  </p>
                </div>
              </div>

              {/* Strategy Focus Area */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">Priority Growth Strategy</span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Semantic Graph Ingestion & Information Gain Sprints</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  To achieve maximum citations in Gemini, ChatGPT, and Google Overviews, we recommend establishing a highly structured entity network that overrides generic competitor indices.
                </p>

                <div className="space-y-2">
                  <div className="bg-slate-900 p-2.5 rounded border border-slate-800 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-white block">Recommended Content Clusters (Customized for {formData.industry}):</span>
                      <ul className="text-[11px] text-slate-400 list-disc pl-4 mt-1 space-y-1">
                        {recommendations.clusters.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-900 p-2.5 rounded border border-slate-800 flex items-start gap-2.5">
                    <Code2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-white block">Recommended Semantic Markup Layer:</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Inject structured <span className="font-mono text-blue-300">{recommendations.schema}</span> declaring key employees, core partners, pricing structures, and product assertions to provide LLM scrappers with reliable data feeds.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Blueprint Calendar Roadmap */}
              <div className="border-t border-slate-800 pt-5">
                <div className="flex items-center gap-2 mb-3.5">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider">SiteOnLab Standard 90-Day Sprint Roadmap</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Weeks 1-3: Graph Foundation", desc: "Inject rich JSON-LD semantic models, complete deep intent gaps audit, and align hub-and-spoke cluster topics." },
                    { title: "Weeks 4-8: High-Gain Production", desc: "Draft and publish 6 high-EEAT practitioner articles covering competitive comparison tables and workflow solutions." },
                    { title: "Weeks 9-12: Co-Citation Push", desc: "Deploy digital PR campaigns and coordinate authoritative third-party brand inclusions to force LLM ingestion." }
                  ].map((phase, idx) => (
                    <div key={idx} className="bg-slate-950/50 p-3 rounded-lg border border-slate-850 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-indigo-400 font-bold">Sprint Phase 0{idx + 1}</span>
                        <h5 className="text-xs font-semibold text-white mt-1 mb-1.5">{phase.title}</h5>
                        <p className="text-[11px] text-slate-400 leading-relaxed">{phase.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Form Actions */}
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-5 rounded-xl border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-semibold text-white">Review this blueprint with a senior SiteOnLab strategist</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Book a complimentary 30-minute growth strategy review. We will map this exact roadmap to your HubSpot/Salesforce revenue pipeline.
                  </p>
                </div>

                <div className="flex gap-2 shrink-0 w-full sm:w-auto justify-end">
                  {onClose && (
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto text-xs font-mono bg-slate-950 hover:bg-slate-850 text-slate-300 hover:text-white py-2 px-4 rounded-lg border border-slate-800 transition"
                    >
                      Close Report
                    </button>
                  )}
                  <a
                    href="#contact-section"
                    onClick={() => {
                      if (onClose) onClose();
                      const el = document.getElementById('contact-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto text-center text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-slate-950 py-2.5 px-5 rounded-lg transition shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    Schedule Growth Review
                  </a>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
