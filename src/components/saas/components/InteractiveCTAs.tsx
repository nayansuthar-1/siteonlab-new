"use client";

import React, { useState } from "react";
import { Check, Sparkles, BarChart, FileSearch, ArrowRight, Globe, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { b2bSaaSData } from "../industryData";

export default function InteractiveCTAs() {
  // --- ASSESSMENT STATE ---
  const [assessmentStep, setAssessmentStep] = useState<"intro" | 1 | 2 | 3 | 4 | "calculating" | "results">("intro");
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [companyUrl, setCompanyUrl] = useState("");

  const questions = [
    {
      id: 1,
      text: `Is your platform actively recommended in ChatGPT or Perplexity when users ask for leading solutions in your category?`,
      options: [
        { label: "Yes, we are actively recommended and cited", score: 25 },
        { label: "Only occasionally or inconsistently", score: 15 },
        { label: "No, we are never cited or mentioned", score: 0 },
        { label: "I have no idea", score: 5 },
      ]
    },
    {
      id: 2,
      text: "Does your company publish original, product-led content addressing high-intent buyer comparison queries?",
      options: [
        { label: "Yes, we publish in-depth comparative content weekly", score: 25 },
        { label: "We do generic keyword SEO but no product comparison", score: 12 },
        { label: "We don't have an active SEO content engine", score: 0 },
      ]
    },
    {
      id: 3,
      text: `Can you accurately trace ARR and booked enterprise sales meetings back to specific organic search assets?`,
      options: [
        { label: "Yes, our attribution loop is fully connected in CRM", score: 25 },
        { label: "Vaguely — we trace traffic but not direct pipeline ARR", score: 10 },
        { label: "No, it's a complete attribution black box", score: 0 },
      ]
    },
    {
      id: 4,
      text: "Are your top competitors actively recommended or cited in Google AI Overviews for your primary product keywords?",
      options: [
        { label: "Yes, they dominate most AI search layouts", score: 25 },
        { label: "Occasionally", score: 15 },
        { label: "No, neither we nor our competitors are cited", score: 5 },
        { label: "We do not monitor AI search placements", score: 0 },
      ]
    }
  ];

  // Calculate assessment score
  const getScoreAndVerdict = () => {
    let total = 0;
    questions.forEach((q) => {
      const savedAns = answers[q.id];
      const opt = q.options.find((o) => o.label === savedAns);
      if (opt) total += opt.score;
    });

    let verdict = "";
    let colorClass = "";
    let recommendations: string[] = [];

    if (total >= 80) {
      verdict = "Excellent Foundation — Optimize for Zero-Click Conversions";
      colorClass = "text-emerald-400";
      recommendations = [
        "Structured schema enhancements to feed ChatGPT and Perplexity crawlers directly.",
        "Implement high-conviction product-led comparative pages comparing your platform to secondary competitors.",
        "Refine attribution mappings inside HubSpot/Salesforce to verify your true client acquisition channels."
      ];
    } else if (total >= 50) {
      verdict = "Moderate Footprint — Significant Blind Spots in AI Citations";
      colorClass = "text-yellow-400";
      recommendations = [
        "Audit competitor data footprints to identify why Perplexity cites them over your platform.",
        "Shift focus from high-volume informational keywords to practice/category-led content addressing high-intent queries.",
        "Deploy a targeted Generative Engine Optimization (GEO) project to build citable web references."
      ];
    } else {
      verdict = "Critical Exposure — Invisible in AI and Modern Search Engine Placements";
      colorClass = "text-red-400";
      recommendations = [
        "Stop spending money on low-conviction generic SEO copy. Build a high-authority citable resource node.",
        "Immediately implement a pilot campaign targeting AI search engine indexing and GEO structures.",
        "Schedule an urgent B2B Visibility Audit to review your high-buying-intent coverage deficits."
      ];
    }

    return { total, verdict, colorClass, recommendations };
  };

  const handleAssessmentAnswer = (qId: number, optionLabel: string) => {
    setAnswers({ ...answers, [qId]: optionLabel });
    if (qId < questions.length) {
      setAssessmentStep((qId + 1) as any);
    } else {
      setAssessmentStep("calculating");
      setTimeout(() => {
        setAssessmentStep("results");
      }, 1500);
    }
  };

  const resetAssessment = () => {
    setAnswers({});
    setCompanyUrl("");
    setAssessmentStep("intro");
  };

  const handleScrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-950 text-slate-100">
      
      {/* ==========================================
          SECTION 12: FINAL CTA BANNER (Accent Glow)
         ========================================== */}
      <section className="py-24 sm:py-32 px-6 relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto rounded-sm bg-slate-900 border border-slate-800 p-8 sm:p-12 md:p-16 text-center relative z-10 shadow-2xl">
          {/* Subtle star graphic background */}
          <div className="absolute top-6 left-6 text-blue-500/15 font-sans text-[10px] uppercase tracking-widest font-mono">
            SiteOnLab Engine Active
          </div>

          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 px-3 py-1.5 rounded-sm inline-block mb-6">
            — PIPELINE ACCELERATOR
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tighter leading-tight mb-6 max-w-3xl mx-auto">
            Stop funding a black box. <br className="hidden sm:inline" />
            Start measuring {b2bSaaSData.dealLanguage}.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Get a free <span className="text-blue-500 font-semibold">Visibility Blind-Spot Audit</span> — we'll show you exactly where your firm is invisible in search and generative AI engines, what your top competitor is doing that you're not, and the three highest-impact moves to make in the next 90 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button
              onClick={() => handleScrollToId("ai-visibility-assessment")}
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-blue-500 transition-all duration-200 shadow-md shadow-blue-500/10 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Take Free Assessment
            </button>
            <button
              onClick={() => handleScrollToId("faq")}
              className="w-full sm:w-auto border border-slate-800 text-slate-300 px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-slate-900 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore FAQ's
            </button>
          </div>
        </div>
      </section>

      {/* ==========================================
          INTERACTIVE: AI VISIBILITY ASSESSMENT
         ========================================== */}
      <section id="ai-visibility-assessment" className="py-20 sm:py-28 bg-slate-950 relative border-t border-slate-800 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] sm:text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 block">
              Diagnostic Suite
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tighter">
              AI Visibility Assessment
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Assess your B2B SaaS indexation, citation health, and attribution readiness. Receive a customized scoresheet and tactical roadmap instantly.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-sm p-6 sm:p-10 relative overflow-hidden shadow-xl min-h-[420px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              
              {/* Step: Intro */}
              {assessmentStep === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 flex-grow flex flex-col justify-center"
                >
                  <div className="text-center space-y-4 max-w-lg mx-auto">
                    <div className="mx-auto w-12 h-12 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
                      <BarChart size={22} />
                    </div>
                    <h4 className="text-lg font-display font-bold text-white">Ready to measure your AI Search footprint?</h4>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Take 60 seconds to answer 4 structural questions about your B2B demand gen architecture. We will calculate your authority index.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto w-full space-y-3 pt-4">
                    <div className="flex gap-2.5">
                      <div className="relative flex-grow">
                        <Globe size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input
                          type="url"
                          placeholder="yourcompany.com"
                          value={companyUrl}
                          onChange={(e) => setCompanyUrl(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-sm py-3.5 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50"
                          required
                        />
                      </div>
                      <button
                        onClick={() => {
                          if (!companyUrl) {
                            setCompanyUrl("yourcompany.com");
                          }
                          setAssessmentStep(1);
                        }}
                        className="px-5 py-3 rounded-sm bg-blue-600 hover:bg-blue-500 text-white font-bold text-[10px] uppercase tracking-widest transition-colors cursor-pointer flex items-center gap-1.5 flex-shrink-0"
                      >
                        Start
                        <ChevronRight size={14} />
                      </button>
                    </div>
                    <p className="text-[9px] text-slate-600 text-center">
                      * Strictly secure. Your platform URL is evaluated through localized search matrices.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step: Questions (1-4) */}
              {typeof assessmentStep === "number" && (
                <motion.div
                  key={`step-${assessmentStep}`}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="flex-grow flex flex-col justify-between"
                >
                  <div>
                    {/* Progress indicator */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-6">
                      <span className="font-semibold uppercase tracking-widest text-blue-500">Question {assessmentStep} of 4</span>
                      <span>{Math.round((assessmentStep / 4) * 100)}% Complete</span>
                    </div>
                    <div className="w-full h-1 bg-slate-950 rounded-sm overflow-hidden mb-6">
                      <div 
                        className="h-full bg-blue-500 transition-all duration-300" 
                        style={{ width: `${(assessmentStep / 4) * 100}%` }}
                      ></div>
                    </div>

                    <h4 className="text-base sm:text-lg font-display font-bold text-white mb-6 leading-snug">
                      {questions[assessmentStep - 1].text}
                    </h4>

                    <div className="grid grid-cols-1 gap-3">
                      {questions[assessmentStep - 1].options.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => handleAssessmentAnswer(assessmentStep, opt.label)}
                          className="w-full text-left p-4 rounded-sm bg-slate-950 border border-slate-800 hover:border-blue-500/40 hover:bg-blue-950/10 transition-all duration-200 text-xs sm:text-sm text-slate-300 hover:text-white flex items-center justify-between group cursor-pointer"
                        >
                          <span>{opt.label}</span>
                          <div className="w-4 h-4 rounded-sm border border-slate-700 group-hover:border-blue-500 flex items-center justify-center flex-shrink-0 ml-3">
                            <div className="w-2 h-2 rounded-sm bg-transparent group-hover:bg-blue-500 transition-colors"></div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 mt-6 flex justify-between text-[10px] text-slate-500">
                    <span>Evaluating: {companyUrl}</span>
                    <button onClick={resetAssessment} className="hover:text-white transition-colors cursor-pointer uppercase tracking-wider">
                      Cancel Audit
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step: Calculating */}
              {assessmentStep === "calculating" && (
                <motion.div
                  key="calculating"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 flex-grow flex flex-col items-center justify-center"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-sm border border-slate-800 border-t-blue-500 animate-spin"></div>
                    <FileSearch className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500" size={18} />
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-xs font-bold text-white tracking-wider uppercase">Compiling Visibility Scorecard...</h4>
                    <div className="text-[10px] text-slate-500 font-mono space-y-1">
                      <p className="animate-pulse">Checking LLM citations for {companyUrl}...</p>
                      <p className="delay-100 animate-pulse">Scanning high-intent keyword matches...</p>
                      <p className="delay-200 animate-pulse">Validating attribution index schema...</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step: Results */}
              {assessmentStep === "results" && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Score Wheel */}
                    <div className="md:col-span-4 text-center md:border-r md:border-slate-800 md:pr-6">
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-500 block mb-2">Your AI Authority Index</span>
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-sm bg-blue-950/25 border-2 border-slate-800 border-t-blue-500 relative mb-3">
                        <span className="font-display font-extrabold text-2xl text-white">
                          {getScoreAndVerdict().total}<span className="text-xs text-slate-500">/100</span>
                        </span>
                      </div>
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${getScoreAndVerdict().colorClass} px-2 py-1 rounded-sm bg-white/5 inline-block`}>
                        {getScoreAndVerdict().total >= 80 ? "Optimized" : getScoreAndVerdict().total >= 50 ? "Moderate Risks" : "Critical Deficit"}
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="md:col-span-8 space-y-3">
                      <span className="text-[10px] font-semibold text-blue-500 uppercase block tracking-widest">Analysis Result</span>
                      <h4 className="text-lg font-display font-bold text-white leading-tight">
                        {getScoreAndVerdict().verdict}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400">
                        Based on answers for <span className="text-blue-500 font-semibold">{companyUrl}</span>, you are missing out on an estimated <span className="text-red-400 font-semibold">{getScoreAndVerdict().total >= 80 ? "10%" : getScoreAndVerdict().total >= 50 ? "40%" : "85%"}</span> of modern generative search and intent queries.
                      </p>
                    </div>

                  </div>

                  {/* Recommendations */}
                  <div className="pt-6 border-t border-slate-800 space-y-4">
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest block">Immediate Action Roadmap (3 Key Moves)</span>
                    <ul className="space-y-3">
                      {getScoreAndVerdict().recommendations.map((rec, i) => (
                        <li key={`rec-${i}`} className="flex gap-3 text-xs sm:text-sm text-slate-300 items-start">
                          <span className="flex-shrink-0 w-5 h-5 rounded-sm bg-blue-950/60 border border-blue-500/20 text-blue-500 flex items-center justify-center font-mono text-[10px] font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Final Action Bar */}
                  <div className="pt-6 border-t border-slate-800 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 text-center sm:text-left">
                      Want to audit your primary competitor's citations? Let's trace it.
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto">
                      <button
                        onClick={resetAssessment}
                        className="flex-grow sm:flex-grow-0 px-4 py-2.5 rounded-sm border border-slate-850 hover:border-slate-800 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                      >
                        Retake Quiz
                      </button>
                      <button
                        onClick={() => handleScrollToId("faq")}
                        className="flex-grow sm:flex-grow-0 px-5 py-2.5 rounded-sm bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1"
                      >
                        Explore FAQ's
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </section>

    </div>
  );
}
