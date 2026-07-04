"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, CheckCircle2, ChevronRight, HelpCircle, AlertCircle, 
  BarChart2, Zap, Trophy, ShieldAlert, ArrowRight, ArrowLeft, Mail, Info 
} from 'lucide-react';
import { submitLead } from '@/lib/submitLead';

interface RevenueAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
    explanation: string;
  }[];
}

export default function RevenueAssessmentModal({ isOpen, onClose }: RevenueAssessmentModalProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  if (!isOpen) return null;

  const QUESTIONS: Question[] = [
    {
      id: 1,
      text: 'How synchronized are your sales and marketing teams?',
      options: [
        { text: 'Completely Siloed — Marketing focuses on MQLs; sales complains about lead quality.', score: 10, explanation: 'Disconnected targets lead to wasted spend and customer journey friction.' },
        { text: 'Partially Coordinated — We meet monthly to discuss leads, but work in separate pipelines.', score: 20, explanation: 'Monthly alignment is better but misses immediate optimization opportunities.' },
        { text: 'Fully Integrated — We share pipeline revenue targets and run daily feedback loops.', score: 30, explanation: 'Optimal alignment ensures target accounts receive high-quality messaging.' }
      ]
    },
    {
      id: 2,
      text: 'What is your primary marketing and lead attribution model?',
      options: [
        { text: 'None — We look at overall traffic and signups but do not track source-to-close.', score: 10, explanation: 'Acquiring high-ticket accounts without tracking leaves growth to luck.' },
        { text: 'Last Touch / Single Source — We rely on basic Google Analytics or CRM source fields.', score: 20, explanation: 'Single-touch models fail to capture multi-stakeholder B2B journeys.' },
        { text: 'Closed-Loop Multi-Touch — We track first touch, assisted steps, and closed-won pipeline in CRM.', score: 30, explanation: 'Excellent setup. Allows high-fidelity CAC/LTV allocation.' }
      ]
    },
    {
      id: 3,
      text: 'How clearly defined and verified is your Ideal Customer Profile (ICP)?',
      options: [
        { text: 'Broad Boundaries — Anyone in tech or software who is willing to take a sales call.', score: 10, explanation: 'Vague ICPs waste SDR productivity and dilute marketing relevance.' },
        { text: 'General Parameters — Basic industry classifications and employee counts.', score: 20, explanation: 'A decent start, but misses technographic fit or actual intent triggers.' },
        { text: 'Hyper-Targeted — Mapped with exact firmographic, technographic, and buying committee personas.', score: 30, explanation: 'Perfect focus ensures GTM outbounds land with active buyers.' }
      ]
    },
    {
      id: 4,
      text: 'Where do you capture early buying intent?',
      options: [
        { text: 'We do not capture intent — We wait for someone to submit a form on our homepage.', score: 10, explanation: '95% of active buyers are in research mode elsewhere and never reach your home.' },
        { text: 'Standard Content paths — Standard blogs, newsletters, and isolated ad-clicks.', score: 20, explanation: 'Catches some intent, but lacks prioritization of high-value prospects.' },
        { text: 'Active Intent Signals — We map dark social, community intent, and competitive comparisons.', score: 30, explanation: 'Elite demand capture. Lets you prioritize outbounds on active searchers.' }
      ]
    },
    {
      id: 5,
      text: 'Is your authority and content structured for AI search engines (ChatGPT, Gemini, Perplexity)?',
      options: [
        { text: 'No — We have no specific strategy or structured schema for LLM citations.', score: 10, explanation: 'Missing out on the fastest-growing search medium for modern buyers.' },
        { text: 'Basic Search SEO — Standard blogging that hopes for index visibility.', score: 20, explanation: 'Provides organic traffic but fails to ensure LLM citation accuracy.' },
        { text: 'Yes — Content is structured, marked up, and authority profiles are optimized for AI engines.', score: 30, explanation: 'Future-proofed strategy. Ensures buyers find your brand in AI tools.' }
      ]
    }
  ];

  const handleOptionSelect = (score: number) => {
    const updatedAnswers = [...answers, score];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const updatedAnswers = [...answers];
      updatedAnswers.pop();
      setAnswers(updatedAnswers);
    }
  };

  const totalPossibleScore = QUESTIONS.length * 30;
  const currentTotalScore = answers.reduce((a, b) => a + b, 0);
  const scorePercentage = Math.round((currentTotalScore / totalPossibleScore) * 100);

  const getMaturityLevel = (score: number) => {
    if (score >= 85) return { title: 'Level 4: Compound Revenue Engine', desc: 'Your GTM systems are integrated and ready for aggressive scaling.', color: 'text-blue-400' };
    if (score >= 60) return { title: 'Level 3: Fragmented Outbound', desc: 'You have solid structures but suffer from channel silos or attribution gaps.', color: 'text-cyan-400' };
    if (score >= 40) return { title: 'Level 2: Traditional Legacy Funnel', desc: 'Relying heavily on manual prospecting and vanity traffic reports.', color: 'text-amber-400' };
    return { title: 'Level 1: Chaos Stage', desc: 'No measurement framework, siloed teams, and generic customer target definitions.', color: 'text-red-400' };
  };

  const maturity = getMaturityLevel(scorePercentage);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submitLead({
      source: "GTM Landing Page — Revenue Assessment",
      email,
      fields: {
        "Assessment Score": `${scorePercentage}%`,
        "Maturity Level": maturity.title,
      },
    });
    setSubmitting(false);
    setCompleted(true);
  };

  return (
    <div id="revenue-assessment-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-xl bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/40">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-indigo-500/10 text-indigo-400 rounded-md">
              <BarChart2 className="w-4 h-4" />
            </span>
            <span className="font-display font-semibold text-white text-sm">Revenue Strategy & GTM Assessment</span>
          </div>
          <button 
            id="close-assessment-modal"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-white/5 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8">
          {!showResults ? (
            /* Question flow */
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
                  <span>{Math.round(((currentQuestionIndex) / QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="bg-indigo-500 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question text */}
              <div className="mb-6">
                <h3 className="font-display text-base md:text-lg font-bold text-white leading-snug">
                  {QUESTIONS[currentQuestionIndex].text}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {QUESTIONS[currentQuestionIndex].options.map((opt, idx) => (
                  <button
                    id={`btn-opt-${idx}`}
                    key={idx}
                    onClick={() => handleOptionSelect(opt.score)}
                    className="w-full text-left p-4 bg-slate-900 hover:bg-slate-800/80 border border-white/5 hover:border-indigo-500/40 rounded-xl transition-all duration-200 group flex items-start gap-3.5"
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-800 flex-shrink-0 flex items-center justify-center font-mono text-xs text-gray-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-400">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div>
                      <span className="block text-xs md:text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                        {opt.text}
                      </span>
                      <span className="block text-[10px] text-gray-400 mt-1">
                        {opt.explanation}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              {currentQuestionIndex > 0 && (
                <button
                  id="btn-assessment-prev"
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200 mt-6"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Previous Question
                </button>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              {!completed ? (
                <div>
                  <div className="text-center space-y-2 mb-6">
                    <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-1 rounded font-mono">ASSESSMENT SUMMARY</span>
                    <h3 className="font-display text-xl font-extrabold text-white">Your Diagnostic Report</h3>
                  </div>

                  <div className="bg-slate-900 border border-white/5 rounded-xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-xs text-gray-400">GTM MATURITY SCORE</span>
                      <span className="text-xl font-mono font-bold text-indigo-400">{scorePercentage}%</span>
                    </div>

                    <div>
                      <span className="text-[10px] text-gray-500 font-mono block uppercase">Classification</span>
                      <span className={`text-base font-bold block ${maturity.color}`}>{maturity.title}</span>
                      <span className="text-xs text-gray-400 block mt-0.5">{maturity.desc}</span>
                    </div>

                    <div className="p-3 bg-slate-950 rounded-lg flex gap-2.5 items-start">
                      <Info className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <p className="text-[11px] text-gray-300 leading-relaxed">
                        Based on your inputs, your GTM and Revenue channels have considerable pipeline leaks. Traditional strategies fail to capture modern dark-social intent, and attribution limits optimization.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
                    <div>
                      <label htmlFor="assessment-email" className="block text-xs font-medium text-gray-300 mb-1.5">Receive Actionable Recommendations PDF</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        <input
                          id="assessment-email"
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                      </div>
                    </div>

                    <button
                      id="submit-assessment-request"
                      type="submit"
                      disabled={submitting || !email}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-indigo-500/20 transition-all duration-200 disabled:opacity-50"
                    >
                      {submitting ? 'Saving Assessment...' : 'Generate custom recommendations PDF'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              ) : (
                /* Success view */
                <div className="text-center py-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-500/15 text-indigo-400 rounded-full flex items-center justify-center mx-auto border border-indigo-500/20">
                    <CheckCircle2 className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Full Report Sent!</h3>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto mt-1">
                      We have compiled your answers into a personalized 14-page GTM and Revenue Strategy Checklist. Check your inbox: <span className="text-indigo-400 font-medium">{email}</span>.
                    </p>
                  </div>

                  {/* Recommendations log list */}
                  <div className="bg-slate-950 border border-white/5 rounded-xl p-4 text-left space-y-2.5 max-h-48 overflow-y-auto">
                    <span className="text-[10px] font-mono text-gray-500 block uppercase border-b border-white/5 pb-1">Priority Tasks Sent:</span>
                    <div className="flex items-start gap-2 text-xs text-gray-300">
                      <Zap className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>Audit organic compare tables for structured LLM parsing parameters.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-300">
                      <Zap className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>Configure HubSpot custom contact pipeline lifecycle mappings.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-gray-300">
                      <Zap className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>Structure technical content clusters around buying-committee objections.</span>
                    </div>
                  </div>

                  <button
                    id="btn-assessment-finished-close"
                    onClick={onClose}
                    className="mt-4 px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-all duration-200"
                  >
                    Close Assessment
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
