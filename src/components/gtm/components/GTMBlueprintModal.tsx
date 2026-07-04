"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, CheckCircle2, ArrowRight, ArrowLeft, Mail, 
  Building2, Trophy, HelpCircle, Users, Sparkles, 
  AlertCircle, FileText, Calendar 
} from 'lucide-react';
import { submitLead } from '@/lib/submitLead';

interface GTMBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GTMBlueprintModal({ isOpen, onClose }: GTMBlueprintModalProps) {
  const [step, setStep] = useState<number>(1);
  const [companyName, setCompanyName] = useState<string>('');
  const [industry, setIndustry] = useState<string>('SaaS');
  const [dealSize, setDealSize] = useState<string>('$10k - $50k');
  const [bottleneck, setBottleneck] = useState<string>('No lead attribution/tracking');
  const [outboundStatus, setOutboundStatus] = useState<string>('Silos between marketing and sales');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitLead({
      source: "GTM Landing Page — GTM Blueprint",
      name: companyName,
      email,
      fields: {
        Company: companyName,
        Industry: industry,
        "Deal Size": dealSize,
        Bottleneck: bottleneck,
        "Outbound Status": outboundStatus,
      },
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Diagnostic calculations
  const getDiagnosticScore = () => {
    let score = 75;
    if (bottleneck === 'No lead attribution/tracking') score -= 15;
    if (bottleneck === 'Leads are low quality') score -= 10;
    if (bottleneck === 'Sales cycle is too long') score -= 8;
    if (outboundStatus === 'Silos between marketing and sales') score -= 12;
    if (outboundStatus === 'We have no outbound team') score -= 5;
    return Math.max(35, score);
  };

  const getStrategicBlocker = () => {
    switch (bottleneck) {
      case 'No lead attribution/tracking':
        return 'Revenue Blindspotting';
      case 'Leads are low quality':
        return 'ICP Misalignment';
      case 'Sales cycle is too long':
        return 'Friction-Heavy Pipeline';
      default:
        return 'Demand Generation Stall';
    }
  };

  const getRecommendations = () => {
    const common = [
      'Implement multi-touch UTM parameter tracking inside CRM pipelines.',
      'Establish daily marketing-sales feedback loops for target accounts.'
    ];
    if (bottleneck === 'Leads are low quality') {
      return [
        'Run ICP audit to filter out contacts outside firmographic thresholds.',
        'Refocus content on high-intent comparisons and technical buyer needs.',
        ...common
      ];
    }
    if (bottleneck === 'No lead attribution/tracking') {
      return [
        'Deploy custom Salesforce/HubSpot conversion mapping tags.',
        'Build a single-source-of-truth dashboard matching deal value to content visits.',
        ...common
      ];
    }
    return [
      'Accelerate buying committee touches with product-comparison battlecards.',
      'Deploy intent-data triggers to qualify outbound prospects before SDR outreach.',
      ...common
    ];
  };

  return (
    <div id="blueprint-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-2xl bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/40">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-blue-500/10 text-blue-400 rounded-md">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-display font-semibold text-white text-sm">HybridMonks Growth Blueprint Builder</span>
          </div>
          <button 
            id="close-blueprint-modal"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1 hover:bg-white/5 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form area */}
        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <div>
              {/* Progress Stepper */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center flex-1 last:flex-none">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                      step >= i 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                        : 'bg-slate-800 text-gray-400 border border-white/5'
                    }`}>
                      {i}
                    </div>
                    {i < 4 && (
                      <div className={`h-0.5 flex-1 mx-2 transition-all duration-300 ${
                        step > i ? 'bg-blue-600' : 'bg-slate-800'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Company Profile */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">Tell us about your company</h3>
                  <p className="text-xs text-gray-400 mb-6">We use this to calibrate GTM models for your specific segment.</p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="company-name" className="block text-xs font-medium text-gray-300 mb-1.5">Company Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        <input
                          id="company-name"
                          type="text"
                          required
                          placeholder="e.g. Acme Tech"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="select-industry" className="block text-xs font-medium text-gray-300 mb-1.5">Industry Segment</label>
                        <select
                          id="select-industry"
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="SaaS">B2B SaaS</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="FinTech">B2B FinTech</option>
                          <option value="IT & Managed Services">IT / MSP</option>
                          <option value="Enterprise Services">Professional Services</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="select-acv" className="block text-xs font-medium text-gray-300 mb-1.5">Average Deal Size (ACV)</label>
                        <select
                          id="select-acv"
                          value={dealSize}
                          onChange={(e) => setDealSize(e.target.value)}
                          className="w-full px-3 py-2 bg-slate-900 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          <option value="<$10k">Under $10k</option>
                          <option value="$10k - $50k">$10k - $50k</option>
                          <option value="$50k - $150k">$50k - $150k</option>
                          <option value="$150k+">$150,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: GTM Obstacles */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">Identify GTM & Revenue Obstacles</h3>
                  <p className="text-xs text-gray-400 mb-6">What is the biggest friction point in your current revenue model?</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">Primary Funnel Bottleneck</label>
                      {[
                        'No lead attribution/tracking',
                        'Leads are low quality',
                        'Sales cycle is too long',
                        'Not enough demo requests / inbound traffic',
                      ].map((item) => (
                        <label 
                          key={item} 
                          className={`flex items-center gap-3 p-3 bg-slate-900/50 border rounded-lg cursor-pointer mb-2 transition-all duration-200 ${
                            bottleneck === item 
                              ? 'border-blue-500 bg-blue-500/5 text-white' 
                              : 'border-white/5 text-gray-300 hover:border-white/10'
                          }`}
                        >
                          <input
                            type="radio"
                            name="bottleneck"
                            value={item}
                            checked={bottleneck === item}
                            onChange={() => setBottleneck(item)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            bottleneck === item ? 'border-blue-500' : 'border-gray-500'
                          }`}>
                            {bottleneck === item && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                          </div>
                          <span className="text-xs font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Outbound/Internal Alignment */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">Sales & Marketing Alignment</h3>
                  <p className="text-xs text-gray-400 mb-6">How coordinated are outbound SDRs and marketing inbound initiatives?</p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-2">Internal Alignment Status</label>
                      {[
                        'Silos between marketing and sales',
                        'We have no outbound team',
                        'Partially aligned, but feedback is delayed',
                        'Fully synchronized pipeline targets',
                      ].map((item) => (
                        <label 
                          key={item} 
                          className={`flex items-center gap-3 p-3 bg-slate-900/50 border rounded-lg cursor-pointer mb-2 transition-all duration-200 ${
                            outboundStatus === item 
                              ? 'border-blue-500 bg-blue-500/5 text-white' 
                              : 'border-white/5 text-gray-300 hover:border-white/10'
                          }`}
                        >
                          <input
                            type="radio"
                            name="outboundStatus"
                            value={item}
                            checked={outboundStatus === item}
                            onChange={() => setOutboundStatus(item)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            outboundStatus === item ? 'border-blue-500' : 'border-gray-500'
                          }`}>
                            {outboundStatus === item && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                          </div>
                          <span className="text-xs font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Live Diagnostic & Submit */}
              {step === 4 && (
                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">We have mapped your diagnostic results</h3>
                  <p className="text-xs text-gray-400 mb-4">Enter your details below to save your scoring and access the diagnostic report.</p>

                  <div className="bg-slate-900 border border-white/5 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                      <span className="text-xs font-medium text-gray-400">GTM ALIGNMENT SCORE</span>
                      <span className="font-mono text-blue-400 font-bold text-lg">{getDiagnosticScore()}/100</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                      <div>
                        <span className="text-gray-400 block">Critical Blocker:</span>
                        <span className="font-bold text-red-400">{getStrategicBlocker()}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 block">Company Segment:</span>
                        <span className="font-bold text-white">{companyName || 'B2B Enterprise'} ({industry})</span>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="submit-email" className="block text-xs font-medium text-gray-300 mb-1.5">Work Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                        <input
                          id="submit-email"
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] text-gray-400">
                      <AlertCircle className="w-3.5 h-3.5 text-blue-400" />
                      <span>We respect your privacy. HybridMonks will never sell your information.</span>
                    </div>

                    <button
                      id="submit-blueprint-request"
                      type="submit"
                      disabled={isSubmitting || !email}
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-600/20 transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Generating Custom Report...' : 'Request Growth Blueprint Report'}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Navigation Footer */}
              {step < 4 && (
                <div className="flex justify-between items-center mt-8 border-t border-white/5 pt-4">
                  <button
                    id="btn-blueprint-prev"
                    onClick={prevStep}
                    disabled={step === 1}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors duration-200"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Back
                  </button>
                  <button
                    id="btn-blueprint-next"
                    onClick={nextStep}
                    disabled={step === 1 && !companyName}
                    className="flex items-center gap-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Next Step
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Submission Success & Beautiful Custom Report view */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4 space-y-6"
            >
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-2 border border-blue-500/20">
                <CheckCircle2 className="w-8 h-8 animate-bounce" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-2">Custom Blueprint Requested!</h3>
                <p className="text-sm text-gray-400 max-w-md mx-auto">
                  Thank you! We have sent a comprehensive diagnostic report to <span className="text-blue-400 font-medium">{email}</span>. A HybridMonks strategist will review this within 12 hours.
                </p>
              </div>

              {/* Growth Diagnostic Report Container */}
              <div className="bg-slate-950/60 border border-white/5 rounded-xl p-5 text-left space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-blue-400" />
                    <span className="font-mono text-xs text-gray-400">DIAGNOSTIC BLUEPRINT</span>
                  </div>
                  <span className="text-[10px] bg-blue-500/15 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded font-mono font-medium uppercase">Active Diagnostic</span>
                </div>

                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">GTM Alignment Score</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">{getDiagnosticScore()}/100</span>
                    <span className="text-xs text-red-400 font-mono">({getStrategicBlocker()} identified)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">Actionable Custom Playbook Steps:</div>
                  <div className="space-y-1.5">
                    {getRecommendations().map((rec, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="btn-success-close"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg transition-colors duration-200"
                >
                  Return to Service Page
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
