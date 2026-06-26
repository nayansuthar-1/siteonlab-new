"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  X,
  Award,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    score: number;
    feedback: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "How do you currently measure the success of your Paid Media campaigns?",
    options: [
      {
        label: "Vanity stats (Clicks, Impressions, CTR, Traffic)",
        score: 1,
        feedback: "You might be paying for clicks that do not convert into business.",
      },
      {
        label: "Lead volume (Total lead forms completed, CPL)",
        score: 2,
        feedback: "Vulnerable to high-volume spam leads and low sales rep acceptance.",
      },
      {
        label: "Closed-loop pipeline (SQLs, CRM deals, CAC, won revenue)",
        score: 4,
        feedback: "Excellent! You are aligned with best-in-class pipeline measurement.",
      },
    ],
  },
  {
    id: 2,
    text: "Where is your paid ad traffic directed?",
    options: [
      {
        label: "Our corporate homepage or standard services page",
        score: 1,
        feedback: "Homepages generally dilute search intent, causing 30-50% conversion leaks.",
      },
      {
        label: "Standard landing pages with minimal optimization or A/B testing",
        score: 2,
        feedback: "Missing out on simple multi-step form and social proof CTR boosters.",
      },
      {
        label: "Bespoke, continuous-tested custom landing pages for each ad cluster",
        score: 4,
        feedback: "Great structure! Highly tailored experiences yield maximum conversions.",
      },
    ],
  },
  {
    id: 3,
    text: "What is your main point of friction with LinkedIn & Google Ads?",
    options: [
      {
        label: "Wasted budget on wrong keywords or unqualified profiles",
        score: 1,
        feedback: "Indicates missing negative keyword rules and lack of firmographic filters.",
      },
      {
        label: "Leads book but rarely progress to demos or SQL opportunities",
        score: 2,
        feedback: "Indicates target intent mismatch. Buyers are not in active buying cycles.",
      },
      {
        label: "Tracking data doesn't match our CRM or sales team reporting",
        score: 3,
        feedback: "Signifies broken attribution and missing offline-conversion feed links.",
      },
    ],
  },
  {
    id: 4,
    text: "Do you actively update your bidding strategies using CRM sales signals?",
    options: [
      {
        label: "No, we use standard Google/LinkedIn platform lead pixels",
        score: 1,
        feedback: "The bidding algorithm is optimizing for form submits rather than deals.",
      },
      {
        label: "Sometimes, we review CRM data manually and adjust bids weekly",
        score: 2,
        feedback: "Slow response time prevents platform algorithms from learning effectively.",
      },
      {
        label: "Yes, automated CRM signals feedback loop directly into ad algorithms",
        score: 4,
        feedback: "Superb. Your system automatically trains platform AI on high-revenue deals.",
      },
    ],
  },
];

export default function AssessmentModal({ isOpen, onClose }: AssessmentModalProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;

  const handleOptionSelect = (score: number) => {
    const nextAnswers = [...answers, score];
    setAnswers(nextAnswers);

    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIdx(0);
    setShowResults(false);
  };

  // Score Assessment
  const totalScore = answers.reduce((a, b) => a + b, 0);
  const getRatingInfo = () => {
    if (totalScore <= 5) {
      return {
        title: "Leaky Funnel Stage",
        color: "text-red-400 border-red-500/20 bg-red-950/20",
        icon: <AlertTriangle className="h-8 w-8 text-red-400" />,
        desc: "Your campaign structure is highly vulnerable to wasted spend and unaligned metrics. Standard homepage routing and vanity click optimization are leading to budget leakage.",
        actions: [
          "Stop driving search ad traffic to your home page immediately.",
          "Build negative keyword lists and lock down firmographic social targeting.",
          "Establish basic lead tracking before scaling ad budgets.",
        ],
      };
    } else if (totalScore <= 9) {
      return {
        title: "Siloed Leads Stage",
        color: "text-amber-400 border-amber-500/20 bg-amber-950/20",
        icon: <HelpCircle className="h-8 w-8 text-amber-400" />,
        desc: "You are generating basic leads, but there is a disconnect between marketing lead forms and actual sales meetings. Attribution layers remain isolated from won contracts.",
        actions: [
          "Deploy custom multi-step landing pages to increase lead-to-opportunity ratios.",
          "Implement CRM fields mapping directly to Google Ads custom conversions.",
          "A/B test ad creatives based on pain point objection-handling copy.",
        ],
      };
    } else {
      return {
        title: "Pipeline Ready to Scale",
        color: "text-blue-400 border-blue-500/20 bg-blue-950/20",
        icon: <TrendingUp className="h-8 w-8 text-blue-400" />,
        desc: "Excellent foundation. Your metrics are aligned to revenue and your structure leverages dedicated conversion pages. You are ready to scale with advanced value-based algorithms.",
        actions: [
          "Enable automated HubSpot or Salesforce opportunity feedback feeds to Google Smart Bidding.",
          "Expand targets using targeted lookalike accounts and expansion strategies.",
          "Scale comparison and alternative search campaign keywords systematically.",
        ],
      };
    }
  };

  const rating = getRatingInfo();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-xl rounded-none bg-[#0D0D0D] border border-zinc-800 p-6 shadow-2xl text-white transition-all overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-1.5 bg-zinc-900 rounded-none border border-zinc-800"
          >
            <X className="h-4 w-4" />
          </button>

          {!showResults ? (
            <div className="space-y-5">
              {/* Header progress */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-blue-400 font-mono font-bold">
                  <span>Paid Media Funnel Quiz</span>
                  <span>Question {currentQuestionIdx + 1} of {QUESTIONS.length}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1 bg-zinc-900 rounded-none overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${((currentQuestionIdx + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <h3 className="text-base font-display font-bold text-white leading-snug">
                {QUESTIONS[currentQuestionIdx].text}
              </h3>

              {/* Options */}
              <div className="space-y-3 pt-1">
                {QUESTIONS[currentQuestionIdx].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleOptionSelect(opt.score)}
                    className="w-full text-left bg-black hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700/80 rounded-none p-4 text-xs transition-all duration-200 flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-zinc-300 group-hover:text-white font-medium pr-4">
                      {opt.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-zinc-500 group-hover:text-blue-400 shrink-0 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center p-3 bg-black rounded-none border border-zinc-800">
                  {rating.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block">Assessment Rating</span>
                  <h3 className="text-xl font-display font-extrabold text-white tracking-tight uppercase">
                    {rating.title}
                  </h3>
                </div>
              </div>

              {/* Description card */}
              <div className={`p-4 rounded-none border ${rating.color} text-xs leading-relaxed space-y-2`}>
                <p className="font-bold text-zinc-200 uppercase tracking-widest text-[10px] font-mono">Funnel Maturity Evaluation:</p>
                <p className="text-zinc-400">{rating.desc}</p>
              </div>

              {/* Action items */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 flex items-center gap-1">
                  <Lightbulb className="h-3.5 w-3.5 text-yellow-500" />
                  Your Customized Growth Actions
                </span>
                <div className="space-y-2">
                  {rating.actions.map((act, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-black p-3 rounded-none border border-zinc-900 text-xs">
                      <CheckCircle className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-zinc-300">{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer navigation */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    alert("Consultation request received! Our Growth Architects will contact you shortly with optimization solutions.");
                    onClose();
                    resetQuiz();
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-none text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Request SiteOnLab Consultation
                </button>
                <button
                  onClick={resetQuiz}
                  className="px-4 py-3 rounded-none text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border border-zinc-800 hover:bg-zinc-900 cursor-pointer"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
