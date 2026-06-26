"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '../data';
import { ArrowRight, Check, RotateCcw, AlertTriangle, ShieldCheck, Zap, Award, Target, BookOpen } from 'lucide-react';

interface AssessmentToolProps {
  onClose?: () => void;
  onOpenBlueprintModal: () => void;
}

export default function AssessmentTool({ onClose, onOpenBlueprintModal }: AssessmentToolProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(-1); // -1 is Welcome screen
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;

  const handleStart = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleNext = () => {
    if (currentQuestionIdx < totalQuestions - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(prev => prev - 1);
    }
  };

  // Score Calculations
  const calculateScore = () => {
    let score = 0;
    ASSESSMENT_QUESTIONS.forEach(q => {
      const selectedOptIdx = selectedAnswers[q.id];
      if (selectedOptIdx !== undefined) {
        score += q.options[selectedOptIdx].score;
      }
    });
    return score;
  };

  const maxPossibleScore = totalQuestions * 4;
  const rawScore = calculateScore();
  const percentageScore = Math.round((rawScore / maxPossibleScore) * 100);

  // Score classification
  const getGrade = () => {
    if (percentageScore < 45) {
      return {
        title: 'Fragmented Pipeline',
        subtitle: 'Low Efficiency & High CAC Waste',
        color: 'text-rose-400',
        borderColor: 'border-rose-950/40',
        bgColor: 'bg-rose-950/10',
        icon: AlertTriangle,
        desc: 'Your demand generation activities operate in silos. You likely rely heavily on vanity metrics or outbound volume, which results in ad-spend waste and friction-filled customer acquisition cycles.'
      };
    } else if (percentageScore < 80) {
      return {
        title: 'Emerging Growth Engine',
        subtitle: 'Moderate Efficiency with Gaps',
        color: 'text-amber-400',
        borderColor: 'border-amber-950/40',
        bgColor: 'bg-amber-950/10',
        icon: Zap,
        desc: 'You have solid foundation blocks in place (such as CRM tracking or basic retargeting), but lack dynamic intent integrations, progressive nurturing, and direct multi-touch attribution. Significant pipeline lift can be unlocked.'
      };
    } else {
      return {
        title: 'Advanced Revenue Engine',
        subtitle: 'High-Velocity & High Efficiency',
        color: 'text-emerald-400',
        borderColor: 'border-emerald-950/40',
        bgColor: 'bg-emerald-950/10',
        icon: ShieldCheck,
        desc: 'Congratulations! You are utilizing high-fidelity intent signals, frictionless bookings, and clean attribution reporting. Your focus should be scaling budgets and optimizing micro-conversion points.'
      };
    }
  };

  const grade = getGrade();

  return (
    <div id="assessment-wrapper" className="w-full rounded-2xl border border-dark-border bg-dark-card backdrop-blur-md p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-black/40">
      {/* Background glow */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-primary/10 blur-3xl"></div>

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white"
        >
          Close
        </button>
      )}

      {/* WELCOME SCREEN */}
      {currentQuestionIdx === -1 && !showResults && (
        <div className="text-center py-6 space-y-6 animate-in fade-in duration-150">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 border border-brand-primary/20 text-brand-accent shadow-lg shadow-brand-primary/5">
            <Target className="h-7 w-7" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-2xl font-bold text-white">B2B Demand Generation Assessment</h3>
            <p className="text-sm text-zinc-400 max-w-lg mx-auto">
              Evaluate your marketing structure against modern, high-efficiency growth systems. Get immediate scoring, tailored diagnostic feedback, and a 3-step action roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-md mx-auto pt-2 text-left">
            {[
              { icon: BookOpen, title: "5 Questions", desc: "Under 3 minutes" },
              { icon: Zap, title: "Instant Score", desc: "Out of 100 points" },
              { icon: Award, title: "Diagnostic Feedback", desc: "Personalized checklist" }
            ].map((feat, i) => (
              <div key={i} className="rounded-xl border border-dark-border bg-dark-bg/60 p-3 flex flex-col justify-between">
                <feat.icon className="h-4 w-4 text-brand-accent mb-1.5" />
                <div>
                  <h5 className="text-xs font-bold text-white">{feat.title}</h5>
                  <p className="text-[10px] text-zinc-400">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleStart}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-primary hover:bg-brand-primary/90 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/10 cursor-pointer transition-all duration-150"
          >
            Start Diagnostic Assessment
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* QUESTION CARDS */}
      {currentQuestionIdx >= 0 && !showResults && (
        <div className="space-y-6 animate-in fade-in duration-150">
          {/* Header & Progress Indicator */}
          <div className="flex items-center justify-between border-b border-dark-border pb-3">
            <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 font-bold">
              Step {currentQuestionIdx + 1} of {totalQuestions}
            </span>
            <div className="w-24 bg-dark-bg h-1.5 rounded-full overflow-hidden border border-dark-border">
              <div
                className="bg-brand-primary h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIdx + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-1">
            <h4 className="font-display font-bold text-white text-base sm:text-lg leading-snug">
              {ASSESSMENT_QUESTIONS[currentQuestionIdx].text}
            </h4>
          </div>

          {/* Options List */}
          <div className="space-y-2.5">
            {ASSESSMENT_QUESTIONS[currentQuestionIdx].options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[ASSESSMENT_QUESTIONS[currentQuestionIdx].id] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(ASSESSMENT_QUESTIONS[currentQuestionIdx].id, optIdx)}
                  className={`w-full text-left flex items-start gap-3.5 rounded-xl border p-4 text-sm transition-all duration-150 ${
                    isSelected
                      ? 'border-brand-primary bg-brand-primary/10 text-white shadow-md shadow-brand-primary/5'
                      : 'border-dark-border bg-dark-bg/30 text-zinc-300 hover:bg-zinc-800/30'
                  }`}
                >
                  <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    isSelected ? 'border-brand-primary bg-brand-primary text-white' : 'border-zinc-700 bg-dark-bg'
                  }`}>
                    {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                  </div>
                  <span className="leading-relaxed">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {/* Immediate Diagnostic Feedback Panel */}
          {selectedAnswers[ASSESSMENT_QUESTIONS[currentQuestionIdx].id] !== undefined && (
            <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/10 p-3.5 animate-in slide-in-from-bottom-2 duration-150">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brand-accent font-bold block mb-1">Immediate Insights:</span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {ASSESSMENT_QUESTIONS[currentQuestionIdx].options[selectedAnswers[ASSESSMENT_QUESTIONS[currentQuestionIdx].id]!].feedback}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between border-t border-dark-border pt-4">
            <button
              onClick={handlePrev}
              className="text-xs font-semibold px-4 py-2 rounded-lg border border-dark-border text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={selectedAnswers[ASSESSMENT_QUESTIONS[currentQuestionIdx].id] === undefined}
              className={`flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-lg bg-brand-primary text-white transition-all ${
                selectedAnswers[ASSESSMENT_QUESTIONS[currentQuestionIdx].id] !== undefined
                  ? 'hover:bg-brand-primary/90 cursor-pointer shadow-md'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              {currentQuestionIdx === totalQuestions - 1 ? 'Show Results' : 'Next Question'}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* RESULTS SCREEN */}
      {showResults && (
        <div className="space-y-6 animate-in zoom-in-95 duration-200">
          
          {/* Diagnostic score circle & category */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-b border-dark-border pb-5">
            {/* Score Ring */}
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-4 border-dark-border bg-dark-bg">
              {/* Radial Score Overlay */}
              <svg className="absolute inset-0 -rotate-90 h-full w-full">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  strokeWidth="6"
                  stroke={rawScore < 8 ? '#f43f5e' : rawScore < 16 ? '#f59e0b' : '#10b981'}
                  fill="transparent"
                  strokeDasharray={`${2 * Math.PI * 56}`}
                  strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentageScore / 100)}`}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="text-center">
                <span className="font-display text-3xl font-extrabold text-white">{percentageScore}%</span>
                <span className="block text-[10px] font-mono uppercase text-zinc-500 font-bold">Efficiency</span>
              </div>
            </div>

            {/* Score Category Description */}
            <div className="space-y-1 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold bg-dark-bg border border-dark-border">
                <grade.icon className={`h-3.5 w-3.5 ${grade.color}`} />
                <span className={grade.color}>{grade.title}</span>
              </span>
              <h4 className="font-display font-bold text-white text-lg">{grade.subtitle}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
                {grade.desc}
              </p>
            </div>
          </div>

          {/* Key Tailored Action Plan */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <Award className="h-4 w-4 text-brand-accent" />
              Tailored 3-Step Action Roadmap
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {percentageScore < 45 ? (
                <>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-rose-400">01. Eliminate Waste</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Immediately implement exclusion IP filters on your LinkedIn and Google Ads campaigns to prevent wasted clicks from jobseekers, competitors, and unrelated domains.</p>
                  </div>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-rose-400">02. Map Search Intent</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Transition spend from broad awareness phrases to tight high-intent 'category search' keywords and problem-solving structures.</p>
                  </div>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-rose-400">03. Audit Friction</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Shorten your demo booking request forms down to 4-5 fields and embed real-time calendar routing for instant qualifying.</p>
                  </div>
                </>
              ) : percentageScore < 80 ? (
                <>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-amber-400">01. Integrate Intent Signals</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Overlay 6sense or Bombora account intent signals on top of your target list to trigger ad deliveries exactly when buyers are researching.</p>
                  </div>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-amber-400">02. Progressive Retargeting</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Instead of repeating identical brand ads, build a progressive 3-stage sequence that delivers educational assets and comparative guides.</p>
                  </div>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-amber-400">03. Clean CRM Bridges</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Map search and social parameters to hidden HubSpot/Salesforce form properties to accurately prove multi-touch pipeline attribution.</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-emerald-400">01. AI Engine citations</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Deploy structured schema and specific domain authority mentions to optimize citations in ChatGPT Search, Gemini, and Perplexity.</p>
                  </div>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-emerald-400">02. ACV Optimization</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Target highly customized 'Tier 1' executive experiences utilizing dynamic on-site personalization and dedicated outbound ABM.</p>
                  </div>
                  <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-1.5">
                    <span className="font-mono text-xs font-extrabold text-emerald-400">03. Speed Optimization</span>
                    <p className="text-xs text-zinc-300 leading-relaxed">Automate alert pathways that notify account representatives instantly via Slack as soon as a target account hits 3+ high-intent touches.</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
            <button
              onClick={onOpenBlueprintModal}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-primary hover:bg-brand-primary/90 py-3 text-xs font-bold text-white transition-all cursor-pointer shadow-lg shadow-brand-primary/10"
            >
              Get Custom Growth Blueprint Report
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={handleStart}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg border border-dark-border bg-dark-bg px-4 py-3 text-xs font-semibold text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Retake Assessment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
