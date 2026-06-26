"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ChevronRight, 
  TrendingUp, 
  RefreshCw, 
  BarChart3, 
  HelpCircle,
  Clock,
  Sparkles,
  Layers,
  PhoneCall
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

interface Question {
  id: string;
  dimension: string;
  questionText: string;
  options: {
    text: string;
    score: number;
    desc: string;
  }[];
}

export default function AssessmentModal({ isOpen, onClose, onOpenConsultation }: AssessmentModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: "scoring",
      dimension: "Lead Scoring Strategy",
      questionText: "How are you currently qualifying prospects before handing them to sales?",
      options: [
        { text: "No Lead Scoring", score: 2, desc: "Reps manually sort through incoming form fills with zero intent sorting." },
        { text: "Static Demographic Scoring", score: 6, desc: "Basic points added for company size or title, but no behavior monitoring." },
        { text: "Dynamic Behavioral & Firmographic Grading", score: 10, desc: "We track progressive actions (pricing views, downloads) combined with ICP fit." }
      ]
    },
    {
      id: "sync",
      dimension: "CRM & Tool Alignment",
      questionText: "How seamlessly does your CRM communicate with your marketing hub?",
      options: [
        { text: "Siloed Platforms / Disconnected Sheets", score: 2, desc: "Contacts are manually uploaded via CSV. High duplications and manual lag." },
        { text: "One-Way / Delayed Manual Sync", score: 5, desc: "Marketing pushes leads to CRM, but sales status and opportunities do not sync back." },
        { text: "Bi-Directional Real-Time Sync", score: 10, desc: "Real-time bi-directional field updates ensure a singular, flawless database truth." }
      ]
    },
    {
      id: "nurture",
      dimension: "Nurturing & Personalization",
      questionText: "What is your primary approach to nurturing inactive or cold pipeline leads?",
      options: [
        { text: "One-Time Static Batch Blasts", score: 3, desc: "We blast our entire database with generic company newsletters monthly." },
        { text: "Fixed Calendar Drip Sequences", score: 6, desc: "Leads get a sequence of 3 static emails, regardless of what links they click." },
        { text: "Behavioral-Triggered Persona Paths", score: 10, desc: "Dynamic triggers deliver tailored case-studies matching specific lifecycle intent." }
      ]
    },
    {
      id: "attribution",
      dimension: "Attribution & Reporting",
      questionText: "How do you demonstrate marketing's direct impact on closed-won revenue?",
      options: [
        { text: "Vanity Metrics Only", score: 2, desc: "We report on superficial clicks, open rates, and general website impressions." },
        { text: "First-Touch Conversion Tracking", score: 5, desc: "We trace where a form-fill originally came from, but ignore mid-funnel interactions." },
        { text: "Full Closed-Loop Multi-Touch Attribution", score: 10, desc: "Every touchpoint is tracked and mapped directly to pipeline opportunity value." }
      ]
    },
    {
      id: "handoff",
      dimension: "Sales Handoff triggers",
      questionText: "What happens when a prospect shows deep, active research behavior?",
      options: [
        { text: "Manual Rep Inspection Required", score: 2, desc: "Sales reps must hunt through CRM logs manually to see what contacts are doing." },
        { text: "Automated Daily/Weekly Digest Emails", score: 5, desc: "Reps get a periodic summary report of high-activity leads, causing response lags." },
        { text: "Instant Slack Alerts + Automated Salesforce Tasks", score: 10, desc: "Automated alerts trigger the moment scoring thresholds are crossed." }
      ]
    }
  ];

  const handleOptionSelect = (idx: number) => {
    setSelectedOptionIndex(idx);
  };

  const handleNext = () => {
    if (selectedOptionIndex === null) return;

    const currentQuestion = questions[currentQuestionIndex];
    const chosenOption = currentQuestion.options[selectedOptionIndex];

    // Record score
    setScores(prev => ({
      ...prev,
      [currentQuestion.id]: chosenOption.score
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setScores({});
    setIsCompleted(false);
  };

  // Calculate overall performance tier
  const totalScore = Object.keys(scores).reduce((acc, key) => acc + (scores[key] || 0), 0);
  const getAssessmentOutcome = () => {
    if (totalScore <= 20) {
      return {
        tier: "Disconnected Baseline",
        desc: "Your marketing automation is currently acting as a digital mailbox rather than a pipeline machine. Broken integrations, missing scoring, and static blasts are letting prospective buyers slip through your funnel undetected.",
        badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
        focus: "Central Tech Integration & Core Life Cycle Setup"
      };
    } else if (totalScore <= 38) {
      return {
        tier: "Tactical Static Pipeline",
        desc: "You have solid foundational elements built (possibly some standard drips and central CRM syncing), but lack behavioral activation. Your growth is restricted by fixed calendar steps rather than highly personalized dynamic triggers.",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        focus: "Lead Scoring Engines & Multi-Channel Triggers"
      };
    } else {
      return {
        tier: "Optimized Revenue Engine",
        desc: "Outstanding! You are demonstrating advanced RevOps practices. Your stack runs automated bi-directional syncing, custom persona nurtures, and instant alert routing. Your main opportunity is continuous creative optimization and scaling database density.",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        focus: "Advanced Predictive Intent & Account-Based Personalization"
      };
    }
  };

  const outcome = getAssessmentOutcome();

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="assessment-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-display font-semibold tracking-wide text-zinc-200">
                  Marketing Automation Maturity Check
                </span>
              </div>
              <button 
                id="close-assessment-modal"
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {!isCompleted ? (
                <div className="space-y-4">
                  {/* Progress Indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-blue-500 uppercase font-semibold">
                      Dimension {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {questions[currentQuestionIndex].dimension}
                    </span>
                  </div>

                  {/* Horizontal progress bar */}
                  <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-300" 
                      style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    />
                  </div>

                  {/* Question */}
                  <div className="py-2">
                    <h3 className="text-sm md:text-base font-semibold text-white leading-relaxed font-display">
                      {questions[currentQuestionIndex].questionText}
                    </h3>
                  </div>

                  {/* Options */}
                  <div className="space-y-2.5">
                    {questions[currentQuestionIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        id={`opt-${questions[currentQuestionIndex].id}-${idx}`}
                        onClick={() => handleOptionSelect(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                          selectedOptionIndex === idx 
                            ? 'bg-blue-600/10 border-blue-500 text-white shadow-lg shadow-blue-500/5' 
                            : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold">{option.text}</span>
                          <span className="text-[10px] font-mono text-zinc-500">Tier {idx + 1}</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-normal">{option.desc}</p>
                      </button>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-4 flex justify-end">
                    <button
                      id="btn-assessment-next"
                      onClick={handleNext}
                      disabled={selectedOptionIndex === null}
                      className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>{currentQuestionIndex === questions.length - 1 ? "Calculate Score" : "Next Dimension"}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                // Results Screen
                <div className="space-y-5">
                  {/* Score Display Ring */}
                  <div className="flex flex-col items-center justify-center text-center p-4 bg-zinc-950 rounded-xl border border-zinc-800/80">
                    <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase font-bold mb-1">Your Automation Maturity Score</span>
                    
                    <div className="relative flex items-center justify-center my-2">
                      {/* SVG Circle indicator */}
                      <svg className="w-20 h-20 transform -rotate-90">
                        <circle cx="40" cy="40" r="34" stroke="currentColor" className="text-zinc-800" strokeWidth="6" fill="transparent" />
                        <circle cx="40" cy="40" r="34" stroke="currentColor" className="text-blue-500" strokeWidth="6" fill="transparent"
                          strokeDasharray={2 * Math.PI * 34}
                          strokeDashoffset={2 * Math.PI * 34 * (1 - totalScore / 50)} 
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-xl font-mono font-extrabold text-white leading-none">{totalScore}</span>
                        <span className="text-[9px] text-zinc-500 block">/ 50</span>
                      </div>
                    </div>

                    <span className={`text-xs px-2.5 py-0.5 rounded-full border ${outcome.badgeColor} mt-2 font-semibold`}>
                      {outcome.tier}
                    </span>
                  </div>

                  {/* Result copy */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Diagnostic Verdict</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed bg-zinc-900 border border-zinc-800/50 p-3 rounded-lg">
                      {outcome.desc}
                    </p>
                  </div>

                  {/* Recommended Priority focus */}
                  <div className="bg-blue-600/5 border border-blue-500/10 rounded-xl p-3 flex items-start space-x-3">
                    <Layers className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Recommended Immediate Focus Area:</h4>
                      <p className="text-[11px] text-blue-300 font-medium mt-0.5">{outcome.focus}</p>
                    </div>
                  </div>

                  {/* 5-dimension breakdown list */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">Dimension Breakdown</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {questions.map((q, i) => {
                        const dimScore = scores[q.id] || 0;
                        return (
                          <div key={i} className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/60 flex items-center justify-between">
                            <span className="text-[11px] text-zinc-400 truncate max-w-[120px]">{q.dimension}</span>
                            <span className={`text-[10px] font-mono font-bold ${
                              dimScore >= 8 ? 'text-green-400' : dimScore >= 5 ? 'text-orange-400' : 'text-red-400'
                            }`}>
                              {dimScore}/10
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex justify-between space-x-3">
                    <button
                      id="btn-assessment-restart"
                      onClick={handleRestart}
                      className="border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Retake Check</span>
                    </button>
                    <button
                      id="btn-assessment-consult"
                      onClick={() => {
                        onClose();
                        onOpenConsultation();
                      }}
                      className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-blue-500/10 cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Review with our Architect</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
