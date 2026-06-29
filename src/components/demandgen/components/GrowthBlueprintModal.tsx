"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, Loader2, Award, Zap, Compass, Sparkles } from 'lucide-react';

interface GrowthBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GrowthBlueprintModal({ isOpen, onClose }: GrowthBlueprintModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    website: '',
    companySize: '51-200',
    currentAdSpend: '$5k - $15k / mo',
    primaryBottleneck: 'Vanity metrics / low sales conversion',
  });

  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingTexts, setLoadingTexts] = useState([
    'Analyzing target market search volumes...',
    'Reviewing competitor paid-ad coverage...',
    'Mapping intent signals & account lists...',
    'Synthesizing bespoke ABM playbooks...',
    'Finalizing revenue attribution matrix...'
  ]);

  useEffect(() => {
    if (step === 4) {
      const timer = setInterval(() => {
        setLoadingStep((prev) => {
          if (prev < loadingTexts.length - 1) {
            return prev + 1;
          } else {
            clearInterval(timer);
            setStep(5);
            return prev;
          }
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      setStep(4); // trigger generation loading
      setLoadingStep(0);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const isFormValid = () => {
    if (step === 1) {
      return formData.fullName.trim() !== '' && formData.workEmail.trim() !== '';
    }
    if (step === 2) {
      return formData.companyName.trim() !== '' && formData.website.trim() !== '';
    }
    return true;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-dark-border bg-dark-card text-zinc-100 shadow-2xl shadow-brand-primary/5">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-dark-border px-6 py-4">
          <div>
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              Growth Blueprint Request
            </h3>
            <p className="text-xs text-zinc-400">Custom analysis for {formData.companyName || 'your B2B team'}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Bar (Visible in steps 1-3) */}
        {step <= 3 && (
          <div className="h-1 w-full bg-dark-bg">
            <div
              className="h-full bg-brand-primary transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Content Box */}
        <div className="px-6 py-6">
          
          {/* STEP 1: Contact Details */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-white">Let&apos;s start with who you are</h4>
                <p className="text-xs text-zinc-400">Where should we send your customized blueprint document?</p>
              </div>
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Sarah Jenkins"
                    className="w-full rounded-lg border border-dark-border bg-dark-bg/50 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-brand-primary focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">Work Email</label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="sarah@yourcompany.com"
                    className="w-full rounded-lg border border-dark-border bg-dark-bg/50 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-brand-primary focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Company Details */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-white">Tell us about your organization</h4>
                <p className="text-xs text-zinc-400">This helps us analyze your active competitors and tech stack.</p>
              </div>
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Acme Technologies"
                    className="w-full rounded-lg border border-dark-border bg-dark-bg/50 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-brand-primary focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1">Company Website</label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://acme.com"
                    className="w-full rounded-lg border border-dark-border bg-dark-bg/50 px-3 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-brand-primary focus:outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1">Employees</label>
                    <select
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-dark-border bg-dark-bg/50 px-3 py-2.5 text-sm text-white focus:border-brand-primary focus:outline-none"
                    >
                      <option value="1-10" className="bg-dark-card text-white">1 - 10</option>
                      <option value="11-50" className="bg-dark-card text-white">11 - 50</option>
                      <option value="51-200" className="bg-dark-card text-white">51 - 200</option>
                      <option value="201-1000" className="bg-dark-card text-white">201 - 1000</option>
                      <option value="1000+" className="bg-dark-card text-white">1000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 mb-1">Monthly Ad Spend</label>
                    <select
                      name="currentAdSpend"
                      value={formData.currentAdSpend}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-dark-border bg-dark-bg/50 px-3 py-2.5 text-sm text-white focus:border-brand-primary focus:outline-none"
                    >
                      <option value="Zero" className="bg-dark-card text-white">None / Outbound only</option>
                      <option value="<$5k" className="bg-dark-card text-white">&lt; $5,000 / mo</option>
                      <option value="$5k - $15k / mo" className="bg-dark-card text-white">$5k - $15k / mo</option>
                      <option value="$15k - $50k / mo" className="bg-dark-card text-white">$15k - $50k / mo</option>
                      <option value="$50k+" className="bg-dark-card text-white">$50k+ / mo</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Goals and Bottlenecks */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-white">Select your primary bottleneck</h4>
                <p className="text-xs text-zinc-400">Our senior team will customize the tactical focus based on your answer.</p>
              </div>
              <div className="space-y-2 pt-2">
                {[
                  'Vanity metrics / low sales conversion',
                  'High cost-per-acquisition (CAC)',
                  'Unpredictable pipeline from outbound',
                  'Inability to measure campaign attribution',
                  'We need full-funnel strategy + execution'
                ].map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-3 rounded-lg border p-3.5 text-sm cursor-pointer transition-all ${
                      formData.primaryBottleneck === option
                        ? 'border-brand-primary bg-brand-primary/10 text-white shadow-md shadow-brand-primary/5'
                        : 'border-dark-border bg-dark-bg/30 text-zinc-300 hover:bg-zinc-800/30'
                    }`}
                  >
                    <input
                      type="radio"
                      name="primaryBottleneck"
                      value={option}
                      checked={formData.primaryBottleneck === option}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                      formData.primaryBottleneck === option ? 'border-brand-primary' : 'border-zinc-600'
                    }`}>
                      {formData.primaryBottleneck === option && (
                        <div className="h-2 w-2 rounded-full bg-brand-primary"></div>
                      )}
                    </div>
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Live Generation Animation */}
          {step === 4 && (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-150">
              <Loader2 className="h-10 w-10 text-brand-primary animate-spin" />
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-white text-base">Formulating Your Growth Blueprint</h4>
                <p className="text-xs text-zinc-400 max-w-sm">HybridMonks Engine is computing your customized account acceleration playbooks.</p>
              </div>
              <div className="w-full max-w-xs bg-dark-bg rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-brand-primary h-full transition-all duration-500 rounded-full"
                  style={{ width: `${((loadingStep + 1) / loadingTexts.length) * 100}%` }}
                ></div>
              </div>
              <p className="font-mono text-xs text-brand-accent animate-pulse h-4">
                {loadingTexts[loadingStep]}
              </p>
            </div>
          )}

          {/* STEP 5: Success & Customized Miniature Blueprint Display */}
          {step === 5 && (
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-3 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15 text-brand-secondary">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm">Blueprint Generated Successfully!</h4>
                  <p className="text-xs text-brand-secondary/90">A comprehensive PDF has been dispatched to {formData.workEmail}.</p>
                </div>
              </div>

              {/* Customized content card */}
              <div className="rounded-xl border border-dark-border bg-dark-bg/60 p-4 space-y-3.5">
                <div className="flex items-center justify-between border-b border-dark-border pb-2.5">
                  <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold">Custom Strategic Direction</span>
                  <span className="rounded bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">{formData.companyName}</span>
                </div>

                <div className="space-y-2">
                  <h5 className="font-display font-bold text-white text-sm flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-brand-accent" />
                    Target Playbook: Intent-Led Demand Injection
                  </h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Based on your bottleneck ({formData.primaryBottleneck}) and ad spend context, we recommend prioritizing <strong className="text-white">Active Demand Capture</strong>. We have mapped out specific buyer searches and intent-trigger lists to get your brand noticed.
                  </p>
                </div>

                <div className="border-t border-dark-border pt-2.5 space-y-2">
                  <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block">Recommended 30-Day Checklist:</span>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-brand-secondary shrink-0 mt-0.5" />
                      <span>Configure de-anonymization code to list target accounts on your site.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-brand-secondary shrink-0 mt-0.5" />
                      <span>Exclude competitor IPs and employee domains from active paid bids.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-brand-secondary shrink-0 mt-0.5" />
                      <span>Implement immediate form booking for top-tier qualified prospects.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action buttons */}
              <div className="rounded-lg bg-brand-primary/10 border border-brand-primary/20 p-3.5 text-center">
                <p className="text-xs text-zinc-300 mb-2">
                  Want to review this strategy live with one of our principal architects?
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-primary hover:bg-brand-primary/95 py-2 text-xs font-bold text-white transition-all shadow-md cursor-pointer"
                >
                  Confirm Strategy Booking
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Footer Buttons */}
        {step <= 3 && (
          <div className="flex items-center justify-between border-t border-dark-border px-6 py-4 bg-dark-bg">
            <button
              onClick={handlePrev}
              disabled={step === 1}
              className={`text-xs font-semibold px-4 py-2 rounded-lg border border-dark-border text-zinc-400 hover:text-white transition-all ${
                step === 1 ? 'opacity-0 cursor-default' : 'hover:bg-zinc-900 cursor-pointer'
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!isFormValid()}
              className={`flex items-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primary/95 text-white shadow-lg transition-all ${
                isFormValid() ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              {step === 3 ? 'Generate My Blueprint' : 'Continue'}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
