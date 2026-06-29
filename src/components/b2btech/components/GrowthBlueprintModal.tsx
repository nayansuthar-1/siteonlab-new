"use client";

import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle2, Shield, Calendar, Sparkles, Building, BarChart, AlertTriangle } from 'lucide-react';

interface GrowthBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GrowthBlueprintModal({ isOpen, onClose }: GrowthBlueprintModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    subSector: '',
    revenueRange: '',
    biggestBottleneck: '',
    companyName: '',
    contactName: '',
    contactEmail: '',
    currentWebsite: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleNext = () => {
    setErrorMsg('');
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    setErrorMsg('');
    if (step > 1) setStep(step - 1);
  };

  const selectOption = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      handleNext();
    }, 250); // slight delay for visual transition satisfaction
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.contactEmail) {
      setErrorMsg('Please fill out all required contact fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  const getStepProgress = () => {
    return (step / 4) * 100;
  };

  // Generate a dynamic customized B2B tech growth advice snippet based on their input bottleneck!
  const getCustomizedAdvice = () => {
    switch (formData.biggestBottleneck) {
      case 'ai-search':
        return {
          title: "Generative Engine Optimization (GEO) Campaign",
          description: "Your tech category has a high density of informational LLM searches. We recommend immediately mapping your product schema into machine-readable JSON-LD entities and formatting your developer integration documentations to be ingested by OpenAI, Gemini, and Perplexity scrapers.",
          expectedGain: "+80% increase in brand mentions in Claude/ChatGPT comparative responses within 90 days."
        };
      case 'long-cycles':
        return {
          title: "Account-Based Retargeting & Sales Enablement System",
          description: "To accelerate mid-funnel deals, we suggest setting up IP-based LinkedIn segment filters targeting current active buyers. Serve un-gated security credentials, SOC 2 compliance sheets, and interactive pricing models directly to their core evaluators.",
          expectedGain: "35% acceleration in average sales cycle duration (saving up to 45-60 days of pipeline wait time)."
        };
      case 'crm-mismatch':
        return {
          title: "Revenue Attribution Framework & CRM Sync",
          description: "Stop relying on loose pixels. We recommend configuring custom offline conversion events between HubSpot/Salesforce and Google/LinkedIn Ad Networks. This feeds qualified closed-won data back to ad bidding engines to automatically self-optimize.",
          expectedGain: "Up to 40% savings in ad budget waste by training bidding models on closed contracts instead of clicks."
        };
      case 'low-conversion':
        return {
          title: "React Technical UX Overhaul & Interactive ROI Calculators",
          description: "Tech buyers bounce when value is buried behind jargon. We recommend building an instant-load interactive calculator where buyers can input their server workload, data size, or employee count to see exact subscription savings instantly.",
          expectedGain: "Average conversion jump from 1.2% to 2.8%+ within 60 days of deploying high-performance frontends."
        };
      default:
        return {
          title: "Bottom-of-Funnel Commercial Tech SEO Dominance",
          description: "Focus on commercial buyer terms ('enterprise software vs alternatives', 'HIPAA compliant databases') to capture active buyers already assessing options. Bypassing broad informational guides saves energy and secures fast-wins.",
          expectedGain: "Sustainable 3x boost in organic demo-form submissions over 120 days."
        };
    }
  };

  const customAdvice = getCustomizedAdvice();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#0A0A0B]/90 backdrop-blur-md transition-opacity duration-300 font-sans">
      <div className="relative bg-[#0F0F11] border border-white/10 rounded-sm w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/5">
          <div 
            className="h-full bg-blue-600 transition-all duration-300 ease-out" 
            style={{ width: `${isSubmitted ? 100 : getStepProgress()}%` }}
          />
        </div>

        {/* Modal Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Interactive Blueprint Diagnostic</span>
            <h3 className="text-lg font-bold text-[#F8F8F8] font-display">B2B Growth Engine Assessor</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white p-1.5 rounded hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex-grow">
          {!isSubmitted ? (
            <div>
              {/* Step 1: Sub-Sector */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Building className="w-5 h-5" />
                    <span className="text-xs font-mono font-medium">Step 1 of 4: Sub-Sector Selection</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 font-display">What is your B2B technology sub-sector?</h4>
                  <p className="text-sm text-slate-400">This helps us align keyword models, technical writer experience, and compliance standards specific to your domain.</p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { id: 'saas', name: 'Enterprise SaaS / Cloud Software' },
                      { id: 'infra', name: 'DevTools, Database & Infrastructure' },
                      { id: 'cyber', name: 'Cybersecurity & Compliance Tech' },
                      { id: 'fintech', name: 'B2B Fintech & Payments' },
                      { id: 'it-msp', name: 'IT Services / MSP' },
                      { id: 'ai-hardware', name: 'AI Software, IoT & Tech Hardware' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => selectOption('subSector', opt.name)}
                        className={`text-left p-4 rounded-sm border transition-all duration-200 cursor-pointer ${
                          formData.subSector === opt.name
                            ? 'bg-blue-600/20 border-blue-500 text-blue-200 shadow-lg shadow-blue-500/5'
                            : 'bg-[#0A0A0B]/60 border-white/10 text-white/70 hover:border-white/20 hover:bg-white/5'
                        }`}
                      >
                        <span className="block text-sm font-semibold">{opt.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Revenue Range */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <BarChart className="w-5 h-5" />
                    <span className="text-xs font-mono font-medium">Step 2 of 4: Enterprise Scale</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 font-display">What is your current scale (Annual Revenue)?</h4>
                  <p className="text-sm text-slate-400">We design strategies proportionate to your market positioning and resource constraints, avoiding bloated startup tactics.</p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { id: 'seed', name: 'Seed / Bootstrapped (<$1M)' },
                      { id: 'mid', name: 'Growth Scale ($1M - $5M ARR)' },
                      { id: 'enterprise', name: 'Mid-Market Enterprise ($5M - $20M ARR)' },
                      { id: 'corporate', name: 'Established Tech ($20M+ ARR)' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => selectOption('revenueRange', opt.name)}
                        className={`text-left p-4 rounded-sm border transition-all duration-200 cursor-pointer ${
                          formData.revenueRange === opt.name
                            ? 'bg-blue-600/20 border-blue-500 text-blue-200 shadow-lg shadow-blue-500/5'
                            : 'bg-[#0A0A0B]/60 border-white/10 text-white/70 hover:border-white/20 hover:bg-white/5'
                        }`}
                      >
                        <span className="block text-sm font-semibold">{opt.name}</span>
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handlePrev}
                    className="flex items-center text-xs text-slate-400 hover:text-slate-200 pt-3 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                </div>
              )}

              {/* Step 3: Growth Bottleneck */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="text-xs font-mono font-medium">Step 3 of 4: Friction Diagnostics</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 font-display">What is your primary growth bottleneck?</h4>
                  <p className="text-sm text-slate-400">Where is the revenue pipeline leaking? We build campaigns custom-designed to patch this specific issue first.</p>
                  
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {[
                      { id: 'ai-search', title: 'AI Search Disruption', desc: 'Buyers ask LLMs (ChatGPT, Perplexity) but our brand is not cited or recommended.' },
                      { id: 'long-cycles', title: 'Stalled Deals & Long Sales Cycles', desc: 'Leads take forever to evaluate, get bogged down with security audits or CTO consensus.' },
                      { id: 'crm-mismatch', title: 'Unreliable Revenue Attribution', desc: 'We capture forms and clicks, but cannot trace which marketing activities drive closed-won contracts.' },
                      { id: 'low-conversion', title: 'Low Website Conversion', desc: 'Website gets traffic but fails to guide enterprise buyers to book a live software demo.' },
                      { id: 'weak-seo', title: 'Competitors Outranking Us in SEO', desc: 'We lack search authority for bottom-of-funnel buyer keywords and comparisons.' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => selectOption('biggestBottleneck', opt.id)}
                        className={`text-left p-3 px-4 rounded-sm border transition-all duration-200 flex flex-col cursor-pointer ${
                          formData.biggestBottleneck === opt.id
                            ? 'bg-blue-600/20 border-blue-500 text-blue-200'
                            : 'bg-[#0A0A0B]/60 border-white/10 text-white/70 hover:border-white/20 hover:bg-white/5'
                        }`}
                      >
                        <span className="text-sm font-semibold">{opt.title}</span>
                        <span className="text-xs text-white/40 mt-0.5">{opt.desc}</span>
                      </button>
                    ))}
                  </div>

                  <button 
                    onClick={handlePrev}
                    className="flex items-center text-xs text-slate-400 hover:text-slate-200 pt-3 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                </div>
              )}

              {/* Step 4: Contact & Submission */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <Shield className="w-5 h-5" />
                    <span className="text-xs font-mono font-medium">Step 4 of 4: Contact Alignment</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-100 font-display">Where should we send your Growth Blueprint?</h4>
                  <p className="text-sm text-slate-400">We will finalize our analysis, compile the technical recommendations, and deliver a publication-ready PDF proposal to your executive inbox.</p>
                  
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Company Website</label>
                      <input
                        type="url"
                        required
                        placeholder="https://example.com"
                        value={formData.currentWebsite}
                        onChange={e => setFormData({ ...formData, currentWebsite: e.target.value })}
                        className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm p-2.5 text-slate-200 placeholder-white/20 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Your Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="E.g., Marcus Vance"
                          value={formData.contactName}
                          onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                          className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm p-2.5 text-slate-200 placeholder-white/20 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Company Name</label>
                        <input
                          type="text"
                          required
                          placeholder="E.g., AetherShield"
                          value={formData.companyName}
                          onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm p-2.5 text-slate-200 placeholder-white/20 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Business Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@aethershield.com"
                        value={formData.contactEmail}
                        onChange={e => setFormData({ ...formData, contactEmail: e.target.value })}
                        className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm p-2.5 text-slate-200 placeholder-white/20 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-red-400 text-xs font-mono pt-1">{errorMsg}</p>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <button 
                      type="button"
                      onClick={handlePrev}
                      className="flex items-center text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" /> Back
                    </button>

                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-widest py-3 px-6 rounded-sm transition-colors flex items-center shadow-lg shadow-blue-600/10 cursor-pointer"
                    >
                      Generate Custom Strategy <ChevronRight className="w-4 h-4 ml-1.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Submission Success & Recommendation Engine Preview */
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-center space-x-3 text-emerald-400">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-slate-100 font-display">Growth Assessor Analysis Completed!</h4>
                  <p className="text-xs text-white/40">We have locked in your diagnostic results for <span className="text-[#F8F8F8] font-semibold">{formData.companyName}</span>.</p>
                </div>
              </div>

              {/* Instant dynamic recommendation box */}
              <div className="bg-[#0A0A0B] border border-white/10 rounded-sm p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 bg-blue-600/10 border border-blue-500/20 px-2.5 py-1 rounded-full text-[10px] text-blue-400 font-mono uppercase font-semibold">
                    <Sparkles className="w-3 h-3" /> Priority Action Blueprint
                  </div>
                  <span className="text-xs text-white/40 font-mono">Target: {formData.subSector}</span>
                </div>
                
                <h5 className="text-base font-bold text-slate-100 font-display">{customAdvice.title}</h5>
                <p className="text-xs text-white/60 leading-relaxed">{customAdvice.description}</p>
                
                <div className="border-t border-white/10 pt-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white/40">Projected Pipeline Outcome:</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">{customAdvice.expectedGain}</span>
                </div>
              </div>

              {/* Call to action for scheduling booking */}
              <div className="bg-white/[0.04] border border-white/10 rounded-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs text-blue-400 font-bold block uppercase tracking-wider font-mono">Lock In Discovery Priority</span>
                  <span className="text-sm font-semibold text-slate-200 block">Schedule a 1-on-1 Growth Session</span>
                  <span className="text-xs text-white/40 block">We will present our complete SEO, AI visibility, and landing page audit live.</span>
                </div>
                <a
                  href="#book-session"
                  onClick={() => {
                    onClose();
                    const element = document.getElementById('final-booking');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest py-3 px-4 rounded-sm shrink-0 flex items-center justify-center transition-colors shadow-lg shadow-emerald-600/10 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 mr-1.5" /> Book Strategy Call
                </a>
              </div>

              <div className="flex justify-end pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                    setFormData({
                      subSector: '',
                      revenueRange: '',
                      biggestBottleneck: '',
                      companyName: '',
                      contactName: '',
                      contactEmail: '',
                      currentWebsite: ''
                    });
                  }}
                  className="text-xs text-white/40 hover:text-white/60 font-mono cursor-pointer"
                >
                  Restart Diagnostic Assessor
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
