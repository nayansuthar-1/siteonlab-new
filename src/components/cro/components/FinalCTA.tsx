"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Send, CheckCircle, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { submitLead } from '@/lib/submitLead';

export default function FinalCTA() {
  const [formMode, setFormMode] = useState<'idle' | 'blueprint' | 'assessment'>('idle');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('11-50');
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Assessment answers state
  const [answers, setAnswers] = useState<number[]>([0, 0, 0]);

  const assessmentQuestions = [
    {
      q: "Do you have active A/B testing on your top landing pages?",
      options: ["No, we just make manual edits.", "We occasionally test, but no set schedule.", "Yes, we run continuous experiments."]
    },
    {
      q: "How do you track conversion data in your company?",
      options: ["We just look at Google Analytics goals.", "We track form clicks but not sales status.", "Fully integrated with Salesforce/HubSpot pipeline."]
    },
    {
      q: "What is your average monthly website traffic?",
      options: ["Under 10,000 unique users.", "10,000 to 50,000 unique users.", "Over 50,000 unique users."]
    }
  ];

  const handleSubmitBlueprint = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !email) return;
    submitLead({
      source: "CRO Landing Page — Blueprint",
      email,
      fields: {
        Website: websiteUrl,
        "Company Size": companySize,
      },
    });
    setHasSubmitted(true);
  };

  const handleAssessmentAnswer = (optionIdx: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = optionIdx;
    setAnswers(updatedAnswers);

    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setHasSubmitted(true);
    }
  };

  const handleResetForm = () => {
    setFormMode('idle');
    setWebsiteUrl('');
    setEmail('');
    setHasSubmitted(false);
    setCurrentQuestion(0);
    setAnswers([0, 0, 0]);
  };

  // Compute assessment score
  const score = answers.reduce((sum, val) => sum + (val + 1) * 3, 0);
  let healthGrade = 'B-';
  let healthAdvice = 'Your conversion pathways have healthy traffic, but you are likely losing 30-40% of potential leads to form fatigue. Implement progressive profiling to recover leaks.';
  
  if (score <= 12) {
    healthGrade = 'C+';
    healthAdvice = 'Critical optimization leaks detected. Your landing page doesn\'t align with enterprise buyer intent, and missing CRM integration makes calculating ROI impossible. Prioritize a structural overhaul.';
  } else if (score > 18) {
    healthGrade = 'A';
    healthAdvice = 'Strong setup! You have solid baseline tracking. Your next level is implementing hyper-personalized, account-specific landing experiences and enterprise value calculators.';
  }

  return (
    <section id="final-cta" className="py-24 max-w-5xl mx-auto px-6 relative text-left">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="bg-[#0D0D0D] border border-white/10 rounded-xl p-8 md:p-12 text-center relative z-10 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6]/5 rounded-full blur-2xl" />

        <AnimatePresence mode="wait">
          {formMode === 'idle' ? (
            <motion.div
              key="cta-idle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] uppercase tracking-[0.2em]">
                  Secure Your Growth Strategy
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-slate-100 tracking-tight leading-tight">
                  Let’s make web conversion your most efficient growth channel.
                </h2>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed">
                  Book a 30-minute strategy call. We’ll review your current landing pages and conversion performance, identify opportunities your competitors are missing, and show you what it would take to turn web traffic into qualified pipeline.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setFormMode('blueprint')}
                  className="w-full sm:w-auto bg-[#3b82f6] hover:bg-[#F97316] text-black font-semibold px-6 py-3.5 rounded-md transition-all shadow-lg shadow-[#3b82f6]/10 flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Sparkles size={16} />
                  Request a Growth Blueprint
                </button>
                <button
                  onClick={() => setFormMode('assessment')}
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  Take the Conversion Health Assessment
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="pt-4 flex justify-center items-center gap-6 text-slate-500 text-xs font-mono">
                <span className="flex items-center gap-1"><ShieldCheck size={14} className="text-[#3b82f6]" /> 100% Secure</span>
                <span>·</span>
                <span>Zero Obligations</span>
              </div>
            </motion.div>
          ) : formMode === 'blueprint' ? (
            <motion.div
              key="cta-blueprint"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-md mx-auto text-left"
            >
              {!hasSubmitted ? (
                <div className="space-y-6">
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-display font-medium text-slate-100">
                      Request Your Growth Blueprint
                    </h3>
                    <p className="text-xs text-slate-400">
                      Submit your domain and our CRO specialists will manually review your funnel leaks and map out 3 major testing opportunities.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitBlueprint} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Your Website URL</label>
                      <input
                        type="url"
                        placeholder="https://yourcompany.com"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        required
                        className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#3b82f6]/60 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Business Email Address</label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-[#3b82f6]/60 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-400">Company Size</label>
                      <select
                        value={companySize}
                        onChange={(e) => setCompanySize(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded-md px-4 py-3 text-[#F5F5F5] focus:outline-none focus:border-[#3b82f6]/60 text-sm"
                      >
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="200+">200+ employees</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#3b82f6] hover:bg-[#F97316] text-black font-semibold py-3 rounded-md transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2 text-sm"
                    >
                      <Send size={14} />
                      Generate Blueprint Now
                    </button>
                  </form>

                  <div className="text-center">
                    <button onClick={handleResetForm} className="text-xs text-slate-500 hover:text-slate-400 underline cursor-pointer">
                      Go Back
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 py-6 text-center">
                  <div className="w-16 h-16 bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] rounded-xl flex items-center justify-center mx-auto shadow-lg shadow-[#3b82f6]/10">
                    <CheckCircle size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-medium text-slate-100">
                      Blueprint Generation Triggered!
                    </h3>
                    <p className="text-xs text-slate-300">
                      We've queued <strong>{websiteUrl}</strong> for analysis. Your dedicated conversion blueprint report will be dispatched to <strong>{email}</strong> within 1 business day.
                    </p>
                  </div>
                  <button
                    onClick={handleResetForm}
                    className="border border-white/20 bg-transparent text-white hover:bg-white/5 px-4 py-2 rounded-md text-xs font-medium transition-all cursor-pointer"
                  >
                    Close & Finish
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="cta-assessment"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-lg mx-auto text-left"
            >
              {!hasSubmitted ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/5 pb-3">
                    <h3 className="text-base font-display font-medium text-slate-100 flex items-center gap-1.5">
                      <AlertCircle size={16} className="text-[#3b82f6]" />
                      CRO Audit Assessment
                    </h3>
                    <span className="text-xs font-mono text-slate-500">
                      Question {currentQuestion + 1} of {assessmentQuestions.length}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-sm sm:text-base font-medium text-slate-200">
                      {assessmentQuestions[currentQuestion].q}
                    </h4>

                    <div className="space-y-2.5">
                      {assessmentQuestions[currentQuestion].options.map((opt, oIdx) => (
                        <button
                          key={oIdx}
                          onClick={() => handleAssessmentAnswer(oIdx)}
                          className="w-full text-left p-4 rounded-md border border-white/10 hover:border-[#3b82f6]/30 bg-black hover:bg-white/[0.01] text-xs sm:text-sm text-slate-300 hover:text-slate-100 transition-all cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button onClick={handleResetForm} className="text-xs text-slate-500 hover:text-slate-400 underline cursor-pointer block mx-auto text-center mt-2">
                    Cancel Assessment
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6] rounded-xl flex items-center justify-center mx-auto font-display font-bold text-2xl shadow-lg shadow-[#3b82f6]/10">
                      {healthGrade}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium text-slate-100">
                        Conversion Health Score: {score}/27
                      </h3>
                      <p className="text-xs text-slate-500 font-mono">
                        HybridMonks Analysis Grade: {healthGrade === 'A' ? 'High Yield' : 'Significant Leaks'}
                      </p>
                    </div>
                  </div>

                  <div className="bg-black border border-white/10 p-4 rounded-md space-y-2">
                    <span className="text-xs font-mono text-[#3b82f6]">Diagnosis Recommendation:</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {healthAdvice}
                    </p>
                  </div>

                  <div className="flex gap-3 justify-center pt-2">
                    <button
                      onClick={() => {
                        setHasSubmitted(false);
                        setFormMode('blueprint');
                      }}
                      className="bg-[#3b82f6] hover:bg-[#F97316] text-black font-semibold px-4 py-2.5 rounded-md text-xs transition-all cursor-pointer"
                    >
                      Fix Leaks - Claim Free Blueprint
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="border border-white/20 bg-transparent text-white hover:bg-white/5 px-4 py-2.5 rounded-md text-xs transition-all cursor-pointer"
                    >
                      Reset Assessment
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
