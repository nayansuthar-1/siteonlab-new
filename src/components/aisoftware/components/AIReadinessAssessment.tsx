"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClipboardCheck, Sparkles, AlertCircle, Database, ShieldCheck, Target, ArrowRight, RotateCcw, CheckCircle2, ChevronRight, HelpCircle } from "lucide-react";

interface Question {
  id: number;
  text: string;
  category: "goal" | "data" | "security" | "team" | "metric";
  options: {
    label: string;
    points: number;
    description: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What is your primary goal for AI integration?",
    category: "goal",
    options: [
      { label: "Automating operational bottlenecks & reducing manual friction", points: 30, description: "Focusing on pipeline speed, task agents, and customer response optimization." },
      { label: "Launching new user-facing intelligent product features", points: 25, description: "Focusing on semantic features, fine-tuned recommendation models, or custom tools." },
      { label: "Building custom enterprise RAG & internal knowledge search", points: 20, description: "Focusing on unstructured PDF/document search, secure vectors, and employee leverage." },
      { label: "Testing early capabilities & conceptual R&D", points: 10, description: "Exploratory development, simple API checks, and initial sandbox prototyping." }
    ]
  },
  {
    id: 2,
    text: "What is the current state of your system's data?",
    category: "data",
    options: [
      { label: "High quality, structured, stored in secure modern warehouses", points: 30, description: "Data is clean, indexed, schemas are maintained, and it is ready to fine-tune." },
      { label: "Scattered across legacy databases; needs engineering work", points: 20, description: "Historical data exists but requires ETL pipelines, sanitization, and unification." },
      { label: "Unstructured text, customer logs, or sparse documentation", points: 15, description: "Lots of raw material but requires semantic chunking, vector ingestion, and parser tuning." },
      { label: "Barely any historical logs, or database events captured", points: 5, description: "Need to deploy instrumentation, telemetry loops, and event-tracking schemas first." }
    ]
  },
  {
    id: 3,
    text: "What is your primary security or compliance constraint?",
    category: "security",
    options: [
      { label: "Strict compliance needed (SOC2, HIPAA, GDPR, or financial audits)", points: 20, description: "All AI queries must be sandboxed, audit logged, and run on zero-data retention APIs." },
      { label: "Moderate, standard enterprise-grade privacy standards", points: 15, description: "Secure credential hosting, tenant isolation, and basic data masking are sufficient." },
      { label: "Standard secure cloud hosting without special certification", points: 10, description: "Focus is on rapid prototyping and user traction before formal compliance overhead." }
    ]
  },
  {
    id: 4,
    text: "What is your current engineering team capacity for AI?",
    category: "team",
    options: [
      { label: "Full-stack web engineers, but zero deep machine learning/AI expertise", points: 15, description: "Can integrate basic API templates but need support in agent states, RAG, and fine-tuning." },
      { label: "Have partial data engineers, but lack pipeline orchestration experience", points: 10, description: "Understand SQL and databases but have not worked with vectors, graph databases, or prompt chains." },
      { label: "Completely outsourced team, or no dedicated software developers", points: 5, description: "Need an agency that handles the entire pipeline, hosting, and technical execution from scratch." }
    ]
  },
  {
    id: 5,
    text: "How do you currently measure marketing and product performance?",
    category: "metric",
    options: [
      { label: "Dedicated multi-touch pipeline attribution and CRM syncing", points: 15, description: "Can connect software usage and customer touchpoints to actual closed revenue pipeline." },
      { label: "Basic CRM lead conversion tracking & closed-won indicators", points: 10, description: "Have standard funnels but struggle with connecting specific feature utility to growth." },
      { label: "Standard vanity metrics only (page views, clicks, app sessions)", points: 5, description: "Need assistance in deploying product telemetry to prove how technology feeds revenue." }
    ]
  }
];

interface AIReadinessAssessmentProps {
  onRequestBlueprint: () => void;
}

export default function AIReadinessAssessment({ onRequestBlueprint }: AIReadinessAssessmentProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (points: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = points;
    setAnswers(updatedAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  // Calculate scores
  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const maxPossibleScore = QUESTIONS.reduce((sum, q) => sum + Math.max(...q.options.map(o => o.points)), 0);
  const percentage = Math.round((totalScore / maxPossibleScore) * 100);

  let tier = "AI Prototyper";
  let tierColor = "text-amber-400 border-amber-900/30 bg-amber-950/20";
  let badgeColor = "bg-amber-500/10 text-amber-300 border-amber-500/30";
  let description = "Your organization is positioned perfectly for rapid AI prototyping and exploratory sandbox tests, but lacks the core pipeline structures and data compliance models required to support production-scale automated intelligence.";
  let recommendations = [
    "Deploy telemetry scripts to begin capturing detailed user events, clickstreams, and LLM input/output logs.",
    "Formulate a structured data sanitization process to turn unstructured internal documentation (PDFs, docs) into chunks optimized for RAG vectors.",
    "Set up a zero-data-retention sandbox environment using modern API routers to experiment without exposing sensitive company customer records."
  ];

  if (percentage >= 80) {
    tier = "Enterprise AI Pioneer";
    tierColor = "text-blue-400 border-blue-900/30 bg-blue-950/20";
    badgeColor = "bg-blue-500/10 text-blue-300 border-blue-500/30";
    description = "Exceptional readiness posture. Your data systems are clean, compliance frameworks are understood, and your team is ready to deploy production-grade multi-agent autonomous loops and custom model fine-tuning directly into your business pipeline.";
    recommendations = [
      "Prioritize custom model fine-tuning (e.g., fine-tuning LLaMA/Gemini models) on your domain-specific historical interaction data to reduce token latency and increase precision.",
      "Deploy self-correcting agent chains utilizing state-of-the-art frameworks to handle complex operations (e.g., auto-routing lead classification to revenue workflows).",
      "Connect a custom revenue measurement layer (HybridMonks standard) to attribute AI utilization statistics directly to customer retention and sales pipeline growth."
    ];
  } else if (percentage >= 50) {
    tier = "AI System Integrator";
    tierColor = "text-blue-400 border-blue-900/30 bg-blue-950/20";
    badgeColor = "bg-blue-500/10 text-blue-300 border-blue-500/30";
    description = "Strong foundation. You have established clear goals and historical data logs, but require structural architecture work to connect legacy databases safely to semantic indexing vector stores and agent routers.";
    recommendations = [
      "Build a robust semantic caching layer and centralized vector database indexing strategy (e.g., Pinecone/PGVector) to avoid redundant LLM billing and data duplication.",
      "Incorporate SOC2-compliant prompt filtering and sensitive entity masking (PII scrubbers) as standard middleware on your product's API requests.",
      "Execute targeted software sprints focused on automating your highest-friction operational bottleneck (e.g., customer onboarding data parsing) rather than wide generalized experiments."
    ];
  }

  return (
    <div className="w-full bg-[#080808] border border-white/10 rounded-sm p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative" id="ai-readiness-assessment-widget">
      {/* Background visual cues */}
      <div className="absolute right-6 top-6 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-sm border border-blue-500/20">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif font-semibold text-lg text-white tracking-tight">AI Software Readiness Assessment</h3>
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest">HYBRIDMONKS DIAGNOSTIC UTILITY</p>
          </div>
        </div>
        {!isCompleted && (
          <span className="text-[10px] font-mono text-blue-400 bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
            Question {currentStep + 1} of {QUESTIONS.length}
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key={`step-${currentStep}`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-none h-1 overflow-hidden">
              <div
                className="bg-blue-400 h-1 transition-all duration-300"
                style={{ width: `${((currentStep) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Heading */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest flex items-center gap-1 font-bold">
                <Sparkles className="w-3 h-3" /> CATEGORY: {QUESTIONS[currentStep].category.toUpperCase()}
              </span>
              <h4 className="font-serif font-medium text-lg text-white leading-tight">
                {QUESTIONS[currentStep].text}
              </h4>
            </div>

            {/* Multiple Choice Options */}
            <div className="grid grid-cols-1 gap-3 pt-2">
              {QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option.points)}
                  className="w-full text-left p-4 rounded-sm border border-white/10 bg-black/40 hover:bg-black/85 hover:border-blue-500/50 transition-all duration-200 group flex items-start gap-4 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
                  id={`q-${currentStep}-opt-${idx}`}
                >
                  <div className="w-5 h-5 rounded-none border border-white/10 group-hover:border-blue-500 flex items-center justify-center text-[10px] font-mono font-bold text-white/40 group-hover:text-blue-400 bg-black/60 mt-0.5 shrink-0 transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <div className="space-y-1">
                    <span className="block font-serif font-semibold text-white text-base group-hover:text-white transition-colors">
                      {option.label}
                    </span>
                    <span className="block text-xs text-white/60 font-sans leading-relaxed">
                      {option.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Back Button */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`text-[10px] font-mono uppercase tracking-widest flex items-center gap-1.5 px-3 py-1.5 rounded-none border transition-all duration-200 ${
                  currentStep === 0
                    ? "opacity-40 cursor-not-allowed border-white/10 text-white/20 bg-transparent"
                    : "border-white/10 text-white/60 hover:text-white hover:bg-white/5 bg-black/20 cursor-pointer"
                }`}
                id="assessment-back-btn"
              >
                ← Back
              </button>
              <div className="text-[10px] font-mono text-white/40 flex items-center gap-1 uppercase tracking-widest">
                <HelpCircle className="w-3.5 h-3.5" /> Secure local execution
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
            id="assessment-results-panel"
          >
            {/* Score Ring Display */}
            <div className="bg-black/30 border border-white/10 rounded-sm p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6 justify-between">
              <div className="space-y-3 text-center md:text-left">
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-mono uppercase tracking-widest font-bold ${badgeColor}`}>
                  {tier.toUpperCase()}
                </div>
                <h4 className="font-serif font-bold text-xl text-white tracking-tight">
                  Your AI Software Readiness is: <span className="text-white">{percentage}%</span>
                </h4>
                <p className="text-sm font-sans text-white/60 leading-relaxed max-w-xl">
                  {description}
                </p>
              </div>

              {/* Graphical score ring */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-white/5 fill-none"
                    strokeWidth="8"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="48"
                    className="stroke-blue-400 fill-none transition-all duration-1000"
                    strokeWidth="8"
                    strokeDasharray={301.6}
                    strokeDashoffset={301.6 - (301.6 * percentage) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tighter">
                    {totalScore}
                  </span>
                  <span className="text-[10px] text-white/40 font-mono">
                    / {maxPossibleScore} PTS
                  </span>
                </div>
              </div>
            </div>

            {/* Actionable Recommendations List */}
            <div className="space-y-3">
              <h5 className="font-serif font-semibold text-sm text-white flex items-center gap-1.5 uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-blue-400 animate-pulse" /> Immediate Roadmap Action Items:
              </h5>
              <div className="space-y-2">
                {recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-black/40 border border-white/10 p-4 rounded-sm hover:bg-black/60 transition-all duration-150"
                  >
                    <div className="w-6 h-6 rounded-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                      0{i + 1}
                    </div>
                    <p className="text-sm text-white/60 font-sans leading-relaxed">
                      {rec}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps Prompt */}
            <div className="bg-[#0c0c0c] border border-white/10 p-5 rounded-sm space-y-4">
              <div className="space-y-1">
                <h6 className="font-serif font-semibold text-sm text-white flex items-center gap-1">
                  How HybridMonks helps close these gaps:
                </h6>
                <p className="text-xs text-white/60 font-sans leading-relaxed">
                  We specialize in taking businesses from manual processes and legacy software pipelines directly into production-ready compliance-first AI integrations inside 90 days, while configuring full-funnel CRM attribution signals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onRequestBlueprint}
                  className="w-full sm:w-auto px-6 py-2.5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-white/90 rounded-none cursor-pointer transition-colors"
                  id="results-request-blueprint-btn"
                >
                  Request Growth Blueprint
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black rounded-none cursor-pointer transition-colors"
                  id="results-restart-btn"
                >
                  Re-take Diagnostic
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
