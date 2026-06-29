"use client";

import React, { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Shield, Settings, FileSpreadsheet, Lock } from "lucide-react";

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPractice?: string;
}

export default function BlueprintModal({ isOpen, onClose, preselectedPractice }: BlueprintModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [firmName, setFirmName] = useState("");
  const [practice, setPractice] = useState("Commercial Litigation");
  const [partnerCount, setPartnerCount] = useState("2-10 Partners");
  const [bottleneck, setBottleneck] = useState("AI Search Visibility (ChatGPT/Gemini)");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  // Update selected practice area if triggered with a preselected one
  useEffect(() => {
    if (preselectedPractice) {
      setPractice(preselectedPractice);
    }
  }, [preselectedPractice]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firmName || !contactName || !contactEmail) return;
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFirmName("");
    setContactName("");
    setContactEmail("");
    setFormSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0B]/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0A0A0B] border border-white/10 rounded-sm shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-sm bg-[#0A0A0B] border border-white/10 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {!formSubmitted ? (
          /* INPUT FORM WIZARD */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center space-x-2 text-[#3b82f6] font-mono text-xs tracking-wider uppercase mb-1">
                <Shield className="h-4 w-4" />
                <span>State-Bar Compliant Assessment</span>
              </div>
              <h3 className="text-2xl font-serif font-light text-white">
                Request Your B2B Legal Growth Blueprint
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1 leading-relaxed font-light">
                Provide basic structural inputs about your firm. Our B2B legal strategists will compile an authoritative jurisdictional blueprint mapping organic keywords, LLM gaps, and closed-loop Clio CRM workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              
              {/* Firm Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                  Firm Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Vance & Sterling LLP"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]/50"
                />
              </div>

              {/* Practice Area */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                  Core Practice Area
                </label>
                <select
                  value={practice}
                  onChange={(e) => setPractice(e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]/50 appearance-none"
                >
                  <option value="Commercial Litigation">Commercial Litigation</option>
                  <option value="Intellectual Property & Commercial Disputes">Intellectual Property & IP Litigation</option>
                  <option value="Employment Law & Labor Relations">Labor & Employment Defense</option>
                  <option value="Mergers, Acquisitions, & Complex Corporate Tax">M&A / Corporate Tax Advisory</option>
                  <option value="Regulatory Compliance">Regulatory & Compliance Advisory</option>
                </select>
              </div>

              {/* Partner Size */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                  Partner Size
                </label>
                <select
                  value={partnerCount}
                  onChange={(e) => setPartnerCount(e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]/50 appearance-none"
                >
                  <option value="Solo Partner">Solo Practice</option>
                  <option value="2-10 Partners">2-10 Partners (Boutique)</option>
                  <option value="10-50 Partners">10-50 Partners (Regional)</option>
                  <option value="50+ Partners">50+ Partners (National)</option>
                </select>
              </div>

              {/* Main Marketing Bottleneck */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                  Main Pipeline Bottleneck
                </label>
                <select
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]/50 appearance-none"
                >
                  <option value="AI Search Visibility (ChatGPT/Gemini)">AI Search Visibility (ChatGPT/Gemini)</option>
                  <option value="Local SEO / Competitor Squeeze">Local SEO / Competitor Squeeze</option>
                  <option value="Saturated Google Ads CPC">Saturated Google Ads CPC</option>
                  <option value="Friction-Heavy Intake / Low Conversion">Friction-Heavy Intake / Low Conversion</option>
                  <option value="Lack of Clio / Revenue Attribution">Lack of Clio / Revenue Attribution</option>
                </select>
              </div>

              {/* Your Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                  Managing Contact Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Marcus Vance, Esq."
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]/50"
                />
              </div>

              {/* Your Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-wider block">
                  Secure Professional Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g., vance@sterlinglaw.com"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#3b82f6]/50"
                />
              </div>

            </div>

            {/* Compliance Footer & Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-start space-x-2 text-white/40 text-[10px] sm:text-xs leading-relaxed max-w-[400px]">
                <Lock className="h-4 w-4 text-[#3b82f6]/60 mt-0.5 flex-shrink-0" />
                <span>
                  All submitted metrics are protected by secure, non-disclosure parameters. SiteOnLab does not share data and adheres strictly to attorney advertising ethics (ABA Model Rule 7.1).
                </span>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 px-5 py-3 rounded-sm bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-sans font-bold text-sm transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Compile Blueprint</span>
                <Send className="h-4 w-4" />
              </button>
            </div>

          </form>
        ) : (
          /* DYNAMIC STRATEGY BLUEPRINT ENGINE OUTPUT */
          <div className="space-y-6">
            
            {/* Success Header */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-serif font-light text-white">
                B2B Legal Growth Blueprint Generated
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mt-1">
                Custom compiled strategy map for <span className="text-white font-semibold">{firmName}</span>
              </p>
            </div>

            {/* Strategy Roadmap Cards */}
            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 text-left">
              
              {/* Box 1: AI Search Engine (GEO) Priority */}
              <div className="bg-[#0A0A0B] border border-white/10 p-4 rounded-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/30 p-1 rounded-sm text-[#3b82f6]">
                    <Settings className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wide">
                    1. AI CITATION ENGINE GAPS (GEO)
                  </span>
                </div>
                <p className="text-white/80 text-xs leading-relaxed font-light">
                  Based on your bottleneck <span className="text-[#3b82f6] font-semibold">"{bottleneck}"</span>, conversational LLMs are currently failing to cite {firmName} because your semantic schema tags are un-indexed. 
                </p>
                <div className="bg-white/5 p-2.5 rounded-sm border border-white/10 text-[11px] text-white/60 leading-normal font-light">
                  <span className="font-bold text-white block mb-1">IMMEDIATE FIX:</span>
                  Structure and inject JSON-LD "LegalService" and "FAQPage" schema directly into your {practice} landing paths. Restructure partner biography credentials to include explicit entities recognized by Google AI Overview crawlers.
                </div>
              </div>

              {/* Box 2: Jurisdictional SEO and Budget Allocation */}
              <div className="bg-[#0A0A0B] border border-white/10 p-4 rounded-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#3b82f6]/10 border border-[#3b82f6]/30 p-1 rounded-sm text-[#3b82f6]">
                    <FileSpreadsheet className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#3b82f6] uppercase tracking-wide">
                    2. BUDGET ALLOCATION FOR {practice.toUpperCase()}
                  </span>
                </div>
                <p className="text-white/80 text-xs leading-relaxed font-light">
                  With your team category <span className="text-[#3b82f6] font-semibold">{partnerCount}</span>, competitor firms are over-bidding on local Google Ads. 
                </p>
                <div className="bg-white/5 p-2.5 rounded-sm border border-white/10 text-[11px] text-white/60 leading-normal font-light">
                  <span className="font-bold text-white block mb-1">STRATEGIC REALIGNMENT:</span>
                  Shift <span className="text-emerald-400 font-semibold">35% of ad spend</span> away from high-CPC generic legal search terms, and reallocate to LinkedIn custom-audience matched list tracking. Place targeted legal briefings in front of enterprise decision-makers experiencing active sector disruptions.
                </div>
              </div>

              {/* Box 3: Secure Clio CRM / Closed-Loop Attribution */}
              <div className="bg-[#0A0A0B] border border-white/10 p-4 rounded-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-1 rounded-sm text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wide">
                    3. CLIO INTEGRATION & ATTACHED PIPELINE
                  </span>
                </div>
                <p className="text-white/80 text-xs leading-relaxed font-light">
                  Establish a secure, encrypted webhook that maps website consultation form submissions and initial AI client intakes directly to your Clio or Filevine dashboard, allowing partners to instantly check conflicts and compute true campaign ROI.
                </p>
              </div>

            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span className="text-[10px] font-mono text-white/40 text-left">
                CONFIRMATION KEY: SOL-B2B-LEGAL-{Math.floor(Math.random() * 900000 + 100000)}
              </span>
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2.5 rounded-sm border border-white/10 text-white/70 hover:text-white hover:bg-white/5 font-sans font-semibold text-xs transition-colors duration-200 cursor-pointer"
                >
                  Generate New Map
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-sm bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white font-sans font-bold text-xs transition-colors duration-200 cursor-pointer"
                >
                  Confirm & Close
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
