"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  ShieldAlert, 
  Award, 
  Sparkles, 
  HelpCircle,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

interface ReadinessAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    score: number;
    description: string;
  }[];
}

const ASSESSMENT_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How aligned are your Sales and Marketing teams today?",
    options: [
      { label: "Siloed Operations", score: 10, description: "Sales and Marketing operate independently. Minimal shared reporting or communication." },
      { label: "Informal Alignment", score: 15, description: "We share reports and key leads, but run campaigns and define targets separately." },
      { label: "SLA-Driven", score: 20, description: "Marketing passes MQLs to Sales under an agreed SLA, but lack joint target account plays." },
      { label: "Unified Revenue Team", score: 25, description: "Completely unified; shared account-level targets, joint planning, and weekly syncing." }
    ]
  },
  {
    id: 2,
    text: "How defined is your target enterprise list (ICP)?",
    options: [
      { label: "Broad Industry-Wide", score: 10, description: "We target generic verticals (e.g., 'healthcare' or 'tech') with wide parameters." },
      { label: "Structured Segments", score: 15, description: "We have target lists based on revenue or employee sizes, but no active company lists." },
      { label: "Unvalidated Target List", score: 20, description: "Marketing has compiled a specific company target list, but Sales hasn't validated it." },
      { label: "Validated Account Tiers", score: 25, description: "Mutually agreed, dynamic, tier-structured target lists divided by ACV and priority." }
    ]
  },
  {
    id: 3,
    text: "What is your typical Average Contract Value (ACV)?",
    options: [
      { label: "Under $15,000 / year", score: 5, description: "Transactional, fast-velocity self-serve models or small-business sales cycles." },
      { label: "$15,000 - $40,000 / year", score: 15, description: "Mid-market sales requiring 2-3 decision-makers and 2-4 month cycles." },
      { label: "$40,000 - $100,000 / year", score: 20, description: "Larger enterprise sales, involving procurement, security reviews, and multiple stakeholders." },
      { label: "Over $100,000 / year", score: 25, description: "High-stakes enterprise contracts. Multi-department buyers, 6-12 month sales cycles." }
    ]
  },
  {
    id: 4,
    text: "How do you track high-intent target accounts visiting your site?",
    options: [
      { label: "Basic Analytics Only", score: 10, description: "Standard pageviews and click events in Google Analytics. No IP identification." },
      { label: "Form Fills & Conversions", score: 15, description: "We only track when someone explicitly submits a form or requests a callback." },
      { label: "Reverse-IP Tool Sourced", score: 20, description: "We use a reverse-IP lookup tool to see which companies visit, but Sales receives no alert." },
      { label: "Intent Spikes & Alerts", score: 25, description: "We track multi-persona intent signals and push live Slack/CRM alerts directly to target SDRs." }
    ]
  },
  {
    id: 5,
    text: "What level of content personalization is built for key accounts?",
    options: [
      { label: "Generic / Broadcast", score: 10, description: "All traffic sees the same standard homepage, blog posts, and generic content." },
      { label: "Industry-Segmented", score: 15, description: "We show custom content for specific verticals (e.g., finance vs tech) at the campaign level." },
      { label: "Campaign Landing Hubs", score: 20, description: "We construct personalized campaign hubs for major events or specific account groups." },
      { label: "1-to-1 Account Personalization", score: 25, description: "We deploy custom, account-specific content, logo-branded portals, and dedicated assets." }
    ]
  }
];

export default function ReadinessAssessmentModal({ isOpen, onClose }: ReadinessAssessmentModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const currentQuestion = ASSESSMENT_QUESTIONS[currentStep];

  const handleOptionSelect = (score: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = score;
    setAnswers(updatedAnswers);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  // Score Calculations
  const totalScore = answers.reduce((sum, s) => sum + s, 0);

  const getReadinessLevel = (score: number) => {
    if (score >= 90) return {
      title: "Highly Optimized (ABM Ready)",
      color: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
      icon: Award,
      desc: "Your organization is primed for highly effective, high-velocity ABM program orchestration! You have the alignment, the high deal value, and the core understanding to make ABM your primary growth lever.",
      rec: "Partner with SiteOnLab to design and deploy complex 1-to-1 campaigns for your top 20 accounts, while setting up automated 1-to-many plays to capture surge signals from Tier-2 lists."
    };
    if (score >= 65) return {
      title: "Strong Foundations (Transition Ready)",
      color: "text-blue-400 border-blue-500/20 bg-blue-500/10",
      icon: Sparkles,
      desc: "You have strong prerequisites like high ACVs or solid sales alignment. However, you need to tighten target account validation and automate IP tracking to fully unlock high-yield ABM compounding.",
      rec: "Work with SiteOnLab on a targeted 90-day pilot program focusing on Sales validation. We'll set up reverse-IP intent signals and launch multi-channel LinkedIn campaigns on a highly focused Tier-1 target list."
    };
    return {
      title: "Developing Infrastructure (Strategy Phase)",
      color: "text-amber-400 border-amber-500/20 bg-amber-500/10",
      icon: ShieldAlert,
      desc: "Your contract values or teams are still leaning transactional. Running 1-to-1 account programs will be cost-inefficient right now until deal sizes grow or marketing-sales silos are bridged.",
      rec: "Before launching ad spends, schedule a SiteOnLab ICP Strategy sprint. We will help you audit historical deal sizes, build a robust target account model, and implement basic reverse-IP tracking tools."
    };
  };

  const result = getReadinessLevel(totalScore);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0E0E11] border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-white/5 p-1.5 rounded-full border border-white/5"
          >
            <X className="w-5 h-5" />
          </button>

          {!showResult ? (
            // Quiz Questions Panel
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
                    Diagnostic Quiz · Step {currentStep + 1} of {totalQuestions}
                  </span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="bg-blue-500 h-full transition-all duration-300" 
                    style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <h3 className="font-display font-bold text-lg md:text-xl text-white leading-snug">
                {currentQuestion.text}
              </h3>

              {/* Options list */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = answers[currentStep] === option.score;
                  return (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(option.score)}
                      className={`w-full text-left p-4 rounded-xl border transition duration-200 group flex justify-between items-center ${
                        isSelected 
                        ? 'bg-blue-500/10 border-blue-500 text-white' 
                        : 'bg-[#121216] border-white/5 text-gray-300 hover:border-white/10 hover:bg-white/5'
                      }`}
                    >
                      <div className="pr-4 space-y-1">
                        <span className="font-semibold text-xs text-gray-100 block">{option.label}</span>
                        <p className="text-[10.5px] text-gray-400 leading-normal">{option.description}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition ${
                        isSelected ? 'bg-blue-500 border-blue-500' : 'border-white/10 group-hover:border-white/25'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Footer */}
              <div className="flex justify-between items-center pt-2 border-t border-white/5">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="px-3 py-1.5 text-xs text-gray-400 hover:text-white flex items-center gap-1 disabled:opacity-30 disabled:hover:text-gray-400 transition"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <span className="text-[10px] text-gray-500 font-mono">
                  SiteOnLab Strategic Diagnostics
                </span>
              </div>
            </div>
          ) : (
            // Quiz Results Panel
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Your ABM Diagnostic Report</h3>
                <p className="text-xs text-gray-400 max-w-md mx-auto">
                  Based on your structured metrics, we computed your organization's Account-Based Readiness index.
                </p>
              </div>

              {/* Diagnostic Score Box */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#121216] border border-white/5 rounded-xl p-5 items-center">
                <div className="text-center md:border-r border-white/5 pb-3 md:pb-0">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Readiness Index</span>
                  <div className="flex items-baseline justify-center gap-1 mt-1">
                    <span className="text-4xl font-mono font-black text-blue-400">{totalScore}</span>
                    <span className="text-xs text-gray-400">/100</span>
                  </div>
                </div>

                <div className="md:col-span-2 text-left md:pl-3 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase font-mono block">Status Category</span>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full border text-xs font-bold font-display ${result.color}`}>
                    {result.title}
                  </span>
                  <p className="text-[11px] text-gray-300 leading-relaxed mt-1.5">
                    {result.desc}
                  </p>
                </div>
              </div>

              {/* Custom Recommendations Block */}
              <div className="bg-[#121216] border border-blue-500/10 rounded-xl p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-blue-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold font-display uppercase tracking-wider">SiteOnLab Core Action Roadmap</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed font-sans">
                  {result.rec}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 justify-end pt-2 border-t border-white/5">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg text-xs font-semibold transition"
                >
                  Restart Assessment
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-lg transition active:scale-95"
                >
                  Close Report
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
