"use client";

import React, { useState, FormEvent } from "react";
import { X, Sparkles, Bot, BarChart2, Cpu, AlertTriangle, CheckCircle, TrendingUp, ChevronRight, ChevronLeft, Award, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    score: number;
    description?: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "What is your primary B2B industry category?",
    subtitle: "Knowing your niche helps us evaluate competitor density in LLM training corpuses.",
    options: [
      { label: "B2B SaaS / Cloud Technology", score: 25, description: "Highly saturated, intensive AI citation coverage." },
      { label: "IT Services / MSP / Cybersecurity", score: 20, description: "Service-oriented, heavy local and regional search dependence." },
      { label: "Professional Services / Consulting", score: 15, description: "Trust-centric, reputation-heavy, high advisory search value." },
      { label: "Manufacturing / Industrial Tech", score: 10, description: "Spec-oriented, long research cycles, high citation value." },
      { label: "Fintech / B2B Services", score: 20, description: "Compliance-heavy, high regulatory and commercial search." }
    ]
  },
  {
    id: 2,
    title: "How often is your brand cited in ChatGPT, Perplexity, or Claude search queries?",
    subtitle: "Ask yourself or check how often your brand is recommended for commercial-intent keywords in your category.",
    options: [
      { label: "Never or rarely cited", score: 10, description: "We are invisible in AI-generated answers or recommendations." },
      { label: "Occasionally mentioned, but not a top recommendation", score: 40, description: "We appear sporadically but competitors dominate the citations." },
      { label: "Consistently cited as a leading recommendation", score: 90, description: "We occupy prime real estate in most relevant category searches." },
      { label: "Unsure / We do not track AI citations", score: 20, description: "We lack monitoring infrastructure for Generative Engine Optimization (GEO)." }
    ]
  },
  {
    id: 3,
    title: "Where does the majority of your digital inbound pipeline originate today?",
    subtitle: "Your revenue engine's vulnerability to organic search algorithm updates.",
    options: [
      { label: "Traditional SEO / Organic Google Traffic", score: 70, description: "High volume but heavily exposed to AI Overviews eating CTR." },
      { label: "Paid Search & Paid Social Ads", score: 45, description: "Reliable, but customer acquisition cost (CAC) continues to escalate." },
      { label: "Referrals, Partnerships, & Dark Social", score: 80, description: "High quality, but highly difficult to scale predictably." },
      { label: "Outbound / Cold Outreach / Sales Development", score: 30, description: "Active outreach, but struggles with brand recognition." }
    ]
  },
  {
    id: 4,
    title: "How structured is your product/service content schema for LLM ingestion?",
    subtitle: "AI engines read formatted, semantic, structured data to map category leaders.",
    options: [
      { label: "Fully optimized structured data & schema markup", score: 85, description: "Our technical foundation is custom-engineered for AI crawlers." },
      { label: "Standard blog posts and basic web pages", score: 40, description: "Good human readability, but lacks AI-specific ingestion markup." },
      { label: "Mostly gated PDFs, interactive JS, or thin text", score: 15, description: "Major crawlers struggle to extract and cite our core features." },
      { label: "We do not know what schemas are in place", score: 10, description: "No conscious markup exists for AI visibility." }
    ]
  }
];

export default function AssessmentModal({ isOpen, onClose, onOpenBooking }: AssessmentModalProps) {
  const [step, setStep] = useState(0); // 0 = Intro, 1-4 = Questions, 5 = Results
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [answers, setAnswers] = useState<Record<number, { label: string; score: number }>>({});
  const [error, setError] = useState("");

  const handleStart = (e: FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) {
      setError("Company name is required.");
      return;
    }
    if (!websiteUrl.trim() || !websiteUrl.includes(".")) {
      setError("Please enter a valid company website.");
      return;
    }
    setError("");
    setStep(1);
  };

  const handleAnswerSelect = (qId: number, option: { label: string; score: number }) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: option
    }));

    // Automatically proceed with a slight delay
    setTimeout(() => {
      if (step < QUESTIONS.length) {
        setStep(prev => prev + 1);
      } else {
        setStep(5); // Show results
      }
    }, 300);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  // Calculate scores
  const totalPossible = QUESTIONS.reduce((max: number, q) => max + Math.max(...q.options.map(o => o.score)), 0);
  const userScoreRaw = Object.keys(answers).reduce((sum: number, key) => {
    const qId = Number(key);
    return sum + (answers[qId]?.score || 0);
  }, 0);
  const normalizedScore = Math.min(100, Math.round((userScoreRaw / totalPossible) * 100));

  const getAssessmentOutcome = (score: number) => {
    if (score < 40) {
      return {
        level: "High Risk / Invisible",
        color: "text-rose-400 border-rose-500/30 bg-rose-500/5",
        icon: AlertTriangle,
        description: "Your brand is nearly invisible to generative AI engines. Competitors are capturing 90%+ of the conversational search share-of-voice in your category. Immediate SEO & GEO intervention is required to avoid complete brand erosion.",
        playbook: [
          "Deploy custom Generative Engine Optimization (GEO) structured schemas immediately.",
          "Audit key competitors to see why Perplexity/ChatGPT are citing them.",
          "Build authoritative product semantic clusters to seed commercial search queries."
        ]
      };
    } else if (score < 75) {
      return {
        level: "Moderate Visibility / Vulnerable",
        color: "text-amber-400 border-amber-500/30 bg-amber-500/5",
        icon: TrendingUp,
        description: "You have a solid foundation and appear in search indices, but you are not designated as the definitive authority. AI search recommends you only as a secondary option, exposing your pipeline to aggressive competitors.",
        playbook: [
          "Establish secondary citation partnerships and authority backlinks.",
          "Inject structured JSON-LD schemas targeting multi-agent crawlers.",
          "Optimize website speed and accessibility to improve real-time LLM query indexing."
        ]
      };
    } else {
      return {
        level: "Market Leader / Optimized",
        color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
        icon: Award,
        description: "Excellent foundation. Your brand is cited reliably by major LLMs. However, AI model updates occur weekly, meaning continuous validation is required to defend your category-leading visibility share.",
        playbook: [
          "Scale programmatic long-tail topical clusters for newly trained models.",
          "Implement real-time API visibility tracking to prevent sudden drops.",
          "Leverage conversion-rate optimization (CRO) to convert high-value traffic into pipeline."
        ]
      };
    }
  };

  const outcome = getAssessmentOutcome(normalizedScore);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
        {/* Backdrop */}
        <div className="absolute inset-0" onClick={onClose}></div>

        <motion.div
          id="assessment-modal-container"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-brand-bg-light border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-orange/20 to-brand-accent/20 px-6 py-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-brand-orange animate-bounce" />
              <span className="text-sm font-semibold tracking-wider uppercase text-brand-orange">AI Search & GEO Diagnostic v2.4</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-brand-text-secondary hover:text-white hover:bg-slate-800 transition-all-300"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8">
            {/* STEP 0: INTRO AND INFO */}
            {step === 0 && (
              <form onSubmit={handleStart} className="space-y-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex p-3 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange mb-1">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Evaluate Your Brand's AI Visibility</h3>
                  <p className="text-sm text-brand-text-secondary max-w-md mx-auto">
                    AI Search Engines (ChatGPT, Perplexity, Google AI Overviews) are actively shaping your prospects' shortlists. Assess your exposure and discover how to gain primary citation share.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="assess-company" className="block text-xs font-medium text-brand-text-secondary uppercase tracking-wider mb-2">Company Name</label>
                      <input
                        id="assess-company"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Acme SaaS"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="assess-website" className="block text-xs font-medium text-brand-text-secondary uppercase tracking-wider mb-2">Website URL</label>
                      <input
                        id="assess-website"
                        type="text"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="e.g. acme.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all-300"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-xs text-brand-orange flex items-center gap-1.5 justify-center">
                      <AlertTriangle className="w-4 h-4 shrink-0" /> {error}
                    </p>
                  )}
                </div>

                <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-4 flex gap-3 text-xs text-brand-text-secondary">
                  <Cpu className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Assessment Metric:</strong> We weigh answers against known weights for Google's Gemini crawl agent, OpenAI's GPT crawler, and Perplexity's citation API indexes. This assessment takes ~60 seconds to finish.</span>
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-medium rounded-xl transition-all-300 shadow-lg hover:shadow-brand-orange/20 cursor-pointer flex items-center gap-2 text-sm"
                  >
                    Start AI Diagnostic
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* QUESTIONS STEPS (1-4) */}
            {step >= 1 && step <= QUESTIONS.length && (
              <div className="space-y-6">
                {/* Progress */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-brand-text-muted font-mono">Category Diagnosis</span>
                    <span className="text-xs text-brand-text-muted font-mono">{step} of {QUESTIONS.length}</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-brand-orange h-full transition-all duration-300"
                      style={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                    {QUESTIONS[step - 1].title}
                  </h3>
                  <p className="text-xs text-brand-text-secondary">
                    {QUESTIONS[step - 1].subtitle}
                  </p>
                </div>

                <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                  {QUESTIONS[step - 1].options.map((opt) => {
                    const isSelected = answers[step]?.label === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => handleAnswerSelect(step, opt)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all-300 flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? "bg-brand-orange/10 border-brand-orange text-white"
                            : "bg-slate-900 border-slate-800 text-brand-text-secondary hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        <span className="text-sm font-semibold">{opt.label}</span>
                        {opt.description && (
                          <span className={`text-xs mt-1 block ${isSelected ? "text-brand-orange" : "text-brand-text-muted"}`}>
                            {opt.description}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-4 border-t border-slate-800/60">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-4 py-2 bg-slate-900 border border-slate-800 hover:border-slate-700 text-brand-text-secondary hover:text-white text-xs font-medium rounded-xl transition-all-300 cursor-pointer flex items-center gap-1.5"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <span className="text-xs text-brand-text-muted self-center">Your data is safe and kept strictly confidential.</span>
                </div>
              </div>
            )}

            {/* RESULTS STEP (5) */}
            {step === 5 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2">Your AI Visibility Assessment Result</h3>
                  <p className="text-xs text-brand-text-secondary">
                    Bespoke diagnostic report generated for <strong className="text-white">{companyName}</strong> ({websiteUrl})
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-slate-900/60 border border-slate-800/60 rounded-2xl p-5">
                  <div className="text-center md:border-r border-slate-800 py-2">
                    <span className="text-xs text-brand-text-muted uppercase tracking-wider block mb-1">AI Visibility Score</span>
                    <div className="inline-flex relative items-center justify-center">
                      <span className="text-4xl md:text-5xl font-black text-brand-orange">{normalizedScore}</span>
                      <span className="text-base text-brand-text-muted font-bold self-end mb-1">/100</span>
                    </div>
                  </div>

                  <div className="md:col-span-2 text-center md:text-left md:pl-5 space-y-1.5 py-2">
                    <span className="text-xs text-brand-text-muted uppercase tracking-wider block">Diagnosis Category</span>
                    <div className="inline-flex items-center gap-1.5">
                      <outcome.icon className="w-5 h-5 text-brand-orange shrink-0" />
                      <span className={`text-lg font-bold ${outcome.color.split(" ")[0]}`}>{outcome.level}</span>
                    </div>
                    <p className="text-xs text-brand-text-secondary leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-4 h-4 text-brand-accent" /> Custom Action Playbook for {companyName}:
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {outcome.playbook.map((stepStr, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-slate-900 border border-slate-850 rounded-xl text-xs text-brand-text-secondary">
                        <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span><strong>Play {idx + 1}:</strong> {stepStr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <div className="text-center sm:text-left">
                    <h5 className="text-sm font-semibold text-white">Let's build a roadmap to audit and fix this.</h5>
                    <p className="text-xs text-brand-text-secondary">Schedule a priority consultation to review these gaps in-depth.</p>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={onClose}
                      className="px-4 py-2 bg-slate-900 border border-slate-800 text-xs font-medium text-brand-text-secondary hover:text-white rounded-xl hover:border-slate-700 transition-all-300 w-1/2 sm:w-auto"
                    >
                      Close Report
                    </button>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenBooking();
                      }}
                      className="px-5 py-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-medium rounded-xl transition-all-300 cursor-pointer shadow-lg shadow-brand-accent/20 w-1/2 sm:w-auto flex items-center justify-center gap-1.5"
                    >
                      Book Free Gap Review
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
