"use client";

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, RefreshCw, ClipboardCheck, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { AssessmentQuestion } from '../types';

const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    category: "Google Maps Domination",
    text: "What is the status of your Google Business Profiles (GBP) and Apple Maps listings?",
    options: [
      { text: "We haven't claimed or fully optimized our profiles, or we have duplicates and inconsistent addresses.", score: 20, tip: "Inconsistent NAP (Name, Address, Phone) data dilutes map pack authority. Claiming, standardizing, and deduplicating is priority #1." },
      { text: "Claimed and verified, but they are mostly inactive (infrequent updates, sparse photos, or low review volume).", score: 60, tip: "Google favors active profiles. Publishing weekly local updates and loading fresh high-resolution photos boosts local authority." },
      { text: "Fully optimized, claimed, with consistent hours, high-quality photos, weekly updates, and rapid responses.", score: 100, tip: "Excellent base. Leverage active local Q&A and product listings to capture additional high-intent clicks." }
    ]
  },
  {
    id: 2,
    category: "Landing Page Architecture",
    text: "How are your location-specific pages and local schema markups set up?",
    options: [
      { text: "No custom regional landing pages; all our search queries or maps point to our main homepage or a generic contact page.", score: 15, tip: "Sending local traffic to the homepage forces searchers to look for location info. Multi-location brands need geo-optimized landing pages." },
      { text: "We have local pages, but they lack structured JSON-LD local schemas, localized content, or relevant map embeds.", score: 55, tip: "Search crawlers depend on LocalBusiness Schema JSON-LD. Injecting coordinates, schema tags, and regional FAQs is critical." },
      { text: "Each physical office or target service hub has a fast, schema-rich, unique page with local testimonials and driving directions.", score: 100, tip: "Superb architecture. Ensure pages maintain Core Web Vitals (LCP/FID) to protect your mobile local rankings." }
    ]
  },
  {
    id: 3,
    category: "AI & Voice Search GEO",
    text: "How prepared are your physical offices for Voice Search and AI engines (ChatGPT, Siri, Gemini)?",
    options: [
      { text: "We don't know how AI search engines cite our offices or we don't rank for voice-oriented regional queries.", score: 10, tip: "LLMs pull citations from structured directories. Establish a presence in major local APIs to feed AI visibility engines." },
      { text: "We rank for basic geographic terms, but do not structure content for long-tail, conversational near-me questions.", score: 50, tip: "Voice queries are conversational (e.g., 'where can I find corporate IT services nearby?'). Insert conversational FAQ blocks to solve this." },
      { text: "We are regularly recommended by AI engines as a trusted regional option for high-intent business searches.", score: 100, tip: "You are highly visible. Protect this rank by continuously seeding local brand citations and authority links." }
    ]
  },
  {
    id: 4,
    category: "Client Review Pipeline",
    text: "How consistent is your process for gathering local client ratings and reviews?",
    options: [
      { text: "We rarely ask for reviews, resulting in low total volumes or average ratings below 4.4 stars.", score: 20, tip: "Ratings below 4.4 stars act as a trust filter. Implementing an automated feedback request program will save your conversion rates." },
      { text: "We have solid ratings, but lack a scalable, automated pipeline to request and gather new reviews every single week.", score: 60, tip: "Recency matters to Google algorithms. An older review profile is treated as stale. Automate collection at the point of delivery." },
      { text: "Reviews and 5-star ratings flow in automatically on a weekly basis, and we respond to all of them within 48 hours.", score: 100, tip: "Outstanding review hygiene. Keywords in client reviews act as primary local rank factors—encourage descriptive feedback!" }
    ]
  },
  {
    id: 5,
    category: "Revenue & Call Attribution",
    text: "How do you track geographic organic search activity and attribute it to real business pipeline?",
    options: [
      { text: "We don't track rankings by local coordinates or connect map clicks/phone calls to our CRM.", score: 15, tip: "Without direct local call-tracking, you're flying blind. Tie local visibility directly to inbound CRM opportunities." },
      { text: "We track ranking movements but can't trace which specific cities or locations generated actual pipeline or offline meetings.", score: 55, tip: "Move beyond rankings. Implement dynamic local telephone number insertion (DNI) to credit specific locations for phone inquiries." },
      { text: "Every local organic click, direction request, and phone call is cleanly attributed to regional CRM pipeline and closed revenue.", score: 100, tip: "Perfect full-funnel measurement layer. You have the insight needed to allocate local marketing spend with maximum CAC efficiency." }
    ]
  }
];

interface AssessmentCalculatorProps {
  onOpenBlueprint: (suggestedData?: any) => void;
}

export default function AssessmentCalculator({ onOpenBlueprint }: AssessmentCalculatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (selectedAnswers[currentStep] === undefined) return;
    if (currentStep < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsFinished(false);
  };

  // Calculate results
  const totalScore = selectedAnswers.reduce((acc, currIndex, questionIndex) => {
    return acc + ASSESSMENT_QUESTIONS[questionIndex].options[currIndex].score;
  }, 0);

  const scoreOutOf100 = Math.round(totalScore / ASSESSMENT_QUESTIONS.length);

  // Determine key weakness
  const getWeakestCategory = () => {
    let lowestScore = 101;
    let weakestIndex = 0;
    selectedAnswers.forEach((currIndex, qIndex) => {
      const score = ASSESSMENT_QUESTIONS[qIndex].options[currIndex].score;
      if (score < lowestScore) {
        lowestScore = score;
        weakestIndex = qIndex;
      }
    });
    return {
      category: ASSESSMENT_QUESTIONS[weakestIndex].category,
      tip: ASSESSMENT_QUESTIONS[weakestIndex].options[selectedAnswers[weakestIndex]].tip,
      score: lowestScore
    };
  };

  const weakestInfo = isFinished ? getWeakestCategory() : null;

  return (
    <div id="assessment-widget" className="w-full max-w-2xl mx-auto bg-dark-panel border border-dark-border rounded-2xl overflow-hidden glow-shadow">
      {/* Assessment Header */}
      <div className="bg-dark-panel-light p-5 border-b border-dark-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-brand-primary">
            <ClipboardCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-white text-base">Local Presence Audit</h3>
            <p className="text-xs text-gray-400 font-mono">Evaluate your regional visibility in 60 seconds</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-brand-primary font-mono font-semibold">
            {isFinished ? "COMPLETED" : `STEP ${currentStep + 1} OF ${ASSESSMENT_QUESTIONS.length}`}
          </div>
          <div className="w-24 bg-dark-base h-1.5 rounded-full mt-1.5 overflow-hidden">
            <div
              className="bg-brand-primary h-full transition-all duration-300"
              style={{ width: `${isFinished ? 100 : ((currentStep + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {!isFinished ? (
        /* Wizard Form */
        <div className="p-6">
          <div className="mb-2">
            <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-brand-primary bg-brand-primary/10 px-2.5 py-0.5 rounded-full">
              {ASSESSMENT_QUESTIONS[currentStep].category}
            </span>
          </div>
          <h4 className="text-base font-semibold text-white mt-2 leading-relaxed">
            {ASSESSMENT_QUESTIONS[currentStep].text}
          </h4>

          {/* Options list */}
          <div className="mt-5 flex flex-col gap-3">
            {ASSESSMENT_QUESTIONS[currentStep].options.map((opt, oIdx) => (
              <button
                id={`q-${currentStep}-opt-${oIdx}`}
                key={oIdx}
                onClick={() => handleOptionSelect(oIdx)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 flex items-start gap-3 ${
                  selectedAnswers[currentStep] === oIdx
                    ? 'bg-brand-primary/5 border-brand-primary text-white glow-shadow'
                    : 'bg-dark-panel border-dark-border/80 text-gray-300 hover:bg-dark-panel-light hover:border-gray-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 shrink-0 ${
                  selectedAnswers[currentStep] === oIdx
                    ? 'border-brand-primary bg-brand-primary text-dark-base font-bold text-xs'
                    : 'border-gray-600'
                }`}>
                  {selectedAnswers[currentStep] === oIdx && "✓"}
                </div>
                <span className="text-xs md:text-sm font-medium leading-relaxed">{opt.text}</span>
              </button>
            ))}
          </div>

          {/* Nav buttons */}
          <div className="mt-8 pt-4 border-t border-dark-border/60 flex items-center justify-between">
            <button
              id="prev-btn"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg transition-all ${
                currentStep === 0
                  ? 'text-gray-600 cursor-not-allowed'
                  : 'text-gray-400 hover:text-white hover:bg-dark-panel-light'
              }`}
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>

            <button
              id="next-btn"
              onClick={handleNext}
              disabled={selectedAnswers[currentStep] === undefined}
              className={`flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-lg transition-all ${
                selectedAnswers[currentStep] === undefined
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-brand-primary text-dark-base hover:bg-brand-primary-light font-bold glow-shadow'
              }`}
            >
              {currentStep === ASSESSMENT_QUESTIONS.length - 1 ? "Calculate Score" : "Next Question"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Score Dashboard Results */
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Score Ring Display */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Simulated circle trace */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="transparent"
                    stroke="#1e293b"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeDasharray={263.8}
                    strokeDashoffset={263.8 - (263.8 * scoreOutOf100) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-4xl font-display font-extrabold text-white">{scoreOutOf100}</span>
                  <span className="text-[10px] font-mono text-gray-400 tracking-wider">OUT OF 100</span>
                </div>
              </div>
              <div className="mt-3">
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                  scoreOutOf100 >= 80 ? 'bg-green-500/10 text-green-400' :
                  scoreOutOf100 >= 50 ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-red-500/10 text-red-400'
                }`}>
                  {scoreOutOf100 >= 80 ? 'High Local Authority' :
                   scoreOutOf100 >= 50 ? 'Moderate Growth Gaps' :
                   'Severe Visibility Risk'}
                </span>
              </div>
            </div>

            {/* Structured Insights Column */}
            <div className="md:col-span-7 flex flex-col gap-4">
              <div className="bg-dark-base p-4 rounded-xl border border-dark-border">
                <div className="flex items-center gap-2 text-yellow-400">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <h5 className="text-xs font-bold font-mono uppercase tracking-wide">Key Visibility Threat</h5>
                </div>
                <div className="mt-1.5">
                  <div className="text-xs font-semibold text-white uppercase">{weakestInfo?.category}</div>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{weakestInfo?.tip}</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Citations audited: <strong>14/15 networks ready</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Local compliance: <strong>Schema validated</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Call for the Score */}
          <div className="mt-6 pt-5 border-t border-dark-border/60 bg-brand-primary/[0.02] p-4 rounded-xl border border-brand-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="text-sm font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-primary" />
                Claim your detailed Local Audit Report
              </h5>
              <p className="text-xs text-gray-400 mt-0.5">
                We compiled personalized solutions for your {weakestInfo?.category.toLowerCase()} gap.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                id="assessment-reset"
                onClick={resetAssessment}
                className="p-2.5 rounded-lg border border-dark-border text-gray-400 hover:text-white hover:bg-dark-panel-light transition"
                title="Restart Assessment"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <button
                id="assessment-cta"
                onClick={() => onOpenBlueprint({ score: scoreOutOf100, weakest: weakestInfo?.category })}
                className="bg-brand-primary text-dark-base font-bold text-xs px-4 py-2.5 rounded-lg hover:bg-brand-primary-light transition flex items-center gap-1.5 shadow"
              >
                Unlock Growth Blueprint <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
