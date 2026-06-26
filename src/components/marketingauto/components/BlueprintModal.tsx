"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Check, 
  Cpu, 
  Target, 
  ChevronRight, 
  Download, 
  RefreshCw,
  Sparkles,
  BarChart,
  ShieldAlert,
  Zap,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BlueprintFormData } from '../types';

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlueprintModal({ isOpen, onClose }: BlueprintModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 'loading' | 'result'>(1);
  const [formData, setFormData] = useState<BlueprintFormData>({
    companyName: '',
    industry: 'B2B SaaS',
    icp: '',
    crm: 'HubSpot CRM',
    automationTool: 'HubSpot Marketing Hub',
    listSize: '1,000 - 10,000',
    painPoint: 'Leads go cold / low nurture engagement'
  });

  const [loadingStep, setLoadingStep] = useState(0);
  const loadingMessages = [
    "Analyzing tech stack bi-directional sync structures...",
    "Scanning B2B target buyer intent signals and triggers...",
    "Drafting behavioral lead scoring matrix structures...",
    "Assembling customized multi-channel nurture sequence blueprints..."
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !formData.companyName.trim()) {
      alert("Please enter your company name to personalize your blueprint.");
      return;
    }
    if (step === 2 && !formData.icp.trim()) {
      alert("Please define your target ideal customer profile (ICP).");
      return;
    }
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    setLoadingStep(0);

    // Simulate multi-stage API generation
    const interval = setInterval(() => {
      setLoadingStep(prev => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setStep('result');
          return prev;
        }
      });
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      industry: 'B2B SaaS',
      icp: '',
      crm: 'HubSpot CRM',
      automationTool: 'HubSpot Marketing Hub',
      listSize: '1,000 - 10,000',
      painPoint: 'Leads go cold / low nurture engagement'
    });
    setStep(1);
  };

  // Generate personalized blueprint answers
  const getCustomRecommendations = () => {
    const { companyName, industry, crm, automationTool, painPoint } = formData;
    
    let scoringRules = [
      { trigger: "Pricing Page Visited > 2x in 48 hours", points: "+20 points & Immediate Slack SDR Alert" },
      { trigger: "Form Filled: Demo Request", points: "+50 points & Fast MQL CRM sync" },
      { trigger: "Clicked Case Study Link in Nurture Email", points: "+15 points & Campaign stage shift" }
    ];

    let actionPlan = [];
    let title = "";

    if (painPoint.includes("Leads go cold")) {
      title = "Behavior-Based Cold Nurturing & Reactivation Blueprint";
      actionPlan = [
        `Deploy a 3-Stage 'Cold Prospect Reactivation' sequence targeting inactive accounts. Use behavioral triggers instead of fixed blast calendars.`,
        `Set up a dynamic 'pricing page visit' alarm. If a stale contact re-visits your pricing page, instantly assign +25 points and alert sales.`,
        `Clean database fields: Filter out bounce list contacts and segment by specific buyer persona before triggering next welcome sequence.`
      ];
    } else if (painPoint.includes("Sales ignores")) {
      title = "SDR Sales-Marketing Alignment & Lead Scoring Blueprint";
      actionPlan = [
        `Establish a clear service-level agreement (SLA) with your sales team defining a Marketing Qualified Lead (MQL) as exactly 75 points or higher.`,
        `Configure a direct CRM sync notification rule in ${crm}. When a contact crosses the scoring threshold, route details directly to correct SDR via dynamic round-robin.`,
        `Integrate immediate Slack alerts using automation webhooks. Provide sales with full prospect context: what pages they viewed, what documents they downloaded.`
      ];
    } else if (painPoint.includes("attribution")) {
      title = "Multi-Touch Campaign Pipeline Attribution Framework";
      actionPlan = [
        `Map UTM parameters bi-directionally from your landing pages directly into your ${automationTool} contact fields.`,
        `Set up a closed-loop first-touch, assisted, and last-touch opportunities pipeline campaign report inside your CRM.`,
        `Integrate your marketing channels with Segment or a central data warehouse to trace the offline sales conversion path back to first-touch campaigns.`
      ];
    } else {
      title = "Consolidated Tech Stack Integration & Funnel Alignment Strategy";
      actionPlan = [
        `Perform a complete API field check between ${automationTool} and ${crm} to eliminate duplicates and sync conflicts.`,
        `Consolidate redundant platforms. Migrate scattered bulk-email tools into one unified marketing operations suite to save on license fees.`,
        `Implement a central lead status framework (New -> Engaging -> MQL -> SQL -> Closed) with hard logic gates to track exact drop-off points.`
      ];
    }

    return { title, scoringRules, actionPlan };
  };

  const recommendation = getCustomRecommendations();

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="blueprint-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-display font-semibold tracking-wide text-zinc-200">
                  SiteOnLab B2B Growth Blueprint Generator
                </span>
              </div>
              <button 
                id="close-blueprint-modal"
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content area */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white font-display">Step 1: Your Business Profile</h3>
                    <p className="text-xs text-zinc-400">Tell us about your organization to contextualize the automation roadmap.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Company Name *</label>
                    <input 
                      id="input-company-name"
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Tech Solutions"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Industry Sector</label>
                      <select 
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="B2B SaaS">B2B SaaS</option>
                        <option value="Enterprise Cybersecurity">Enterprise Cybersecurity</option>
                        <option value="IT Services & MSP">IT Services & MSP</option>
                        <option value="Financial & Fintech">Financial & Fintech</option>
                        <option value="Professional Services">Professional Services</option>
                        <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Existing Lead Database Size</label>
                      <select 
                        name="listSize"
                        value={formData.listSize}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="Under 1,000">Under 1,000 contacts</option>
                        <option value="1,000 - 10,000">1,000 - 10,000 contacts</option>
                        <option value="10,000 - 50,000">10,000 - 50,000 contacts</option>
                        <option value="50,000+">50,000+ contacts</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      id="btn-blueprint-next-1"
                      onClick={handleNext}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white font-display">Step 2: Core Audience Focus</h3>
                    <p className="text-xs text-zinc-400">Define who you sell to, and what problems they are seeking to solve.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Who is your Ideal Customer Profile (ICP)? *</label>
                    <textarea 
                      id="input-icp"
                      name="icp"
                      value={formData.icp}
                      onChange={handleInputChange as any}
                      placeholder="e.g. VPs of IT Operations at US-based healthcare companies with 100-500 employees..."
                      rows={3}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">What is your biggest Marketing Stack friction point? *</label>
                    <select 
                      name="painPoint"
                      value={formData.painPoint}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                    >
                      <option value="Leads go cold / low nurture engagement">Leads go cold / low email conversion engagement</option>
                      <option value="Sales ignores leads / poor lead status feedback">Sales ignores leads / poor lead status handoffs</option>
                      <option value="Lack of proper revenue or UTM campaign attribution">Lack of multi-touch revenue or UTM attribution</option>
                      <option value="Tool overload / high stack costs / duplicate records">Duplicate contact records / redundant tool overhead cost</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      id="btn-blueprint-back-1"
                      onClick={handleBack}
                      className="border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-bold py-2 px-5 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      id="btn-blueprint-next-2"
                      onClick={handleNext}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center space-x-1 transition-colors cursor-pointer"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-white font-display">Step 3: Tech Stack Context</h3>
                    <p className="text-xs text-zinc-400">Specify your primary core database and messaging software environments.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Primary Sales CRM</label>
                      <select 
                        name="crm"
                        value={formData.crm}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="Salesforce">Salesforce CRM</option>
                        <option value="HubSpot CRM">HubSpot CRM</option>
                        <option value="Pipedrive">Pipedrive CRM</option>
                        <option value="Microsoft Dynamics">MS Dynamics 365</option>
                        <option value="No central CRM / sheets">No central CRM (Spreadsheets)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Automation Hub</label>
                      <select 
                        name="automationTool"
                        value={formData.automationTool}
                        onChange={handleInputChange}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                      >
                        <option value="HubSpot Marketing Hub">HubSpot Marketing Hub</option>
                        <option value="Marketo Engage">Marketo Engage (Adobe)</option>
                        <option value="Pardot / Account Engagement">Salesforce Pardot</option>
                        <option value="ActiveCampaign">ActiveCampaign Enterprise</option>
                        <option value="Apollo / Lemlist / Outreach">Apollo / Outreach platforms</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800/80 flex items-start space-x-3 mt-2">
                    <Zap className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0 animate-pulse" />
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">RevOps Recommendation Engaged</h4>
                      <p className="text-[10px] text-zinc-400 mt-0.5">
                        Our algorithm has matched your stack ({formData.automationTool} + {formData.crm}) with standard B2B intent-routing patterns for {formData.industry} to avoid duplicate lifecycle triggers.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      id="btn-blueprint-back-2"
                      type="button"
                      onClick={handleBack}
                      className="border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-bold py-2 px-5 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      id="btn-blueprint-submit"
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold py-2 px-6 rounded-xl text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-blue-600/10 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Assemble Growth Blueprint</span>
                    </button>
                  </div>
                </form>
              )}

              {step === 'loading' && (
                <div className="py-12 flex flex-col items-center justify-center space-y-4">
                  <RefreshCw className="w-10 h-10 text-blue-500 animate-spin" />
                  <div className="text-center space-y-1 max-w-sm">
                    <h4 className="text-sm font-semibold text-white">Generating Personalized Blueprint</h4>
                    <p className="text-xs text-blue-400 font-mono tracking-wide">{loadingMessages[loadingStep]}</p>
                    <div className="w-48 h-1 bg-zinc-950 rounded-full mx-auto overflow-hidden mt-3">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-1/2 h-full bg-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 'result' && (
                <div className="space-y-5">
                  {/* Result Header Badge */}
                  <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 flex items-start space-x-3">
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400 flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold">Custom Generated Strategy</span>
                      <h4 className="text-sm font-bold text-white mt-0.5 leading-snug">{recommendation.title}</h4>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        Prepared for <strong>{formData.companyName}</strong> ({formData.industry}) targeting <em>{formData.icp}</em>.
                      </p>
                    </div>
                  </div>

                  {/* 30-Day Nurture Action Plan */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center space-x-1.5">
                      <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      <span>Evergreen Implementation Action Plan</span>
                    </h4>
                    <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800/80 space-y-3">
                      {recommendation.actionPlan.map((action, i) => (
                        <div key={i} className="flex items-start space-x-2.5">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-300 font-bold flex items-center justify-center font-mono mt-0.5">
                            0{i + 1}
                          </span>
                          <p className="text-xs text-zinc-300 leading-relaxed">{action}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Progressive Lead Scoring Blueprint */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center space-x-1.5">
                      <Target className="w-3.5 h-3.5 text-blue-400" />
                      <span>B2B Behavioral Lead Scoring Architecture</span>
                    </h4>
                    <div className="bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden divide-y divide-zinc-800/50">
                      {recommendation.scoringRules.map((rule, i) => (
                        <div key={i} className="flex items-center justify-between p-3">
                          <span className="text-xs text-zinc-300 font-medium">{rule.trigger}</span>
                          <span className="text-[11px] font-mono font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">
                            {rule.points}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Funnel Conversion Forecast Chart */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest flex items-center space-x-1.5">
                      <BarChart className="w-3.5 h-3.5 text-blue-400" />
                      <span>Forecasted Pipeline Impact (90 Days)</span>
                    </h4>
                    <div className="bg-zinc-950 rounded-xl p-4 border border-zinc-800/80">
                      <div className="flex items-end justify-between h-20 max-w-sm mx-auto px-4 pb-2 border-b border-zinc-800">
                        {/* Bar 1 */}
                        <div className="flex flex-col items-center space-y-1.5 flex-1">
                          <span className="text-[9px] font-mono text-zinc-400 font-bold">12%</span>
                          <div className="w-8 bg-zinc-800 rounded-t h-6 transition-all duration-1000" />
                          <span className="text-[8px] font-mono text-zinc-500">Unoptimized</span>
                        </div>
                        {/* Connection arrow */}
                        <div className="text-zinc-600 mb-4 pb-1">→</div>
                        {/* Bar 2 */}
                        <div className="flex flex-col items-center space-y-1.5 flex-1">
                          <span className="text-[9px] font-mono text-blue-400 font-extrabold">28% (+133%)</span>
                          <div className="w-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t h-14 animate-pulse shadow-md shadow-blue-500/20" />
                          <span className="text-[8px] font-mono text-blue-400 font-bold">Lead-to-Opp</span>
                        </div>
                        {/* Connection arrow */}
                        <div className="text-zinc-600 mb-4 pb-1">→</div>
                        {/* Bar 3 */}
                        <div className="flex flex-col items-center space-y-1.5 flex-1">
                          <span className="text-[9px] font-mono text-zinc-400 font-extrabold">-45%</span>
                          <div className="w-8 bg-gradient-to-t from-zinc-700 to-zinc-600 rounded-t h-10 shadow-md shadow-zinc-700/20" />
                          <span className="text-[8px] font-mono text-zinc-400 font-bold">CAC Slashed</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-zinc-400 text-center mt-3">
                        Based on target metrics for the <strong>{formData.listSize}</strong> list tier implementing progressive sync logic.
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex justify-between">
                    <button
                      id="btn-blueprint-print"
                      onClick={() => window.print()}
                      className="border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 font-bold py-2 px-5 rounded-xl text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Print / Save PDF</span>
                    </button>
                    <button
                      id="btn-blueprint-restart"
                      onClick={handleReset}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-xl text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Create New Blueprint</span>
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
