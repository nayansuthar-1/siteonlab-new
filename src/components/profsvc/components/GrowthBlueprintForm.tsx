"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { ShieldCheck, ArrowRight, Loader2, Calendar, FileText } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

export default function GrowthBlueprintForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subSegment: "Management Consulting",
    painPoint: "Referral Plateau & Pipeline Volatility",
    revenue: "$5M - $10M",
    customContext: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await submitLead({
      source: "Professional Services Landing Page — Growth Blueprint",
      name: formData.name,
      email: formData.email,
      fields: {
        Company: formData.company,
        "Sub-Segment": formData.subSegment,
        "Pain Point": formData.painPoint,
        Revenue: formData.revenue,
        Context: formData.customContext,
      },
    });
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div id="form-success-container" className="card-glass border border-sky-500/30 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden backdrop-blur-md">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-sky-500"></div>
        <div className="w-14 h-14 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-white font-display">Growth Blueprint Intake Confirmed</h3>
        <p className="text-slate-300 text-sm mt-3 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="text-sky-300 font-semibold">{formData.name}</span>. Our senior B2B growth architects are reviewing <span className="text-sky-300 font-semibold">{formData.company}</span>'s profile.
        </p>

        <div className="bg-slate-950/80 border border-white/5 rounded-xl p-4.5 text-left max-w-md mx-auto mt-6 text-xs text-slate-300 space-y-3 leading-normal">
          <div className="flex gap-2.5 items-start">
            <Calendar className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Strategic Audit Schedule</p>
              <p className="text-slate-400 mt-0.5">We are preparing your competitor SEO overlap, current LLM search visibility share, and website conversion flow assessment.</p>
            </div>
          </div>
          <div className="flex gap-2.5 items-start pt-3 border-t border-white/5">
            <FileText className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Custom Blueprint Delivery</p>
              <p className="text-slate-400 mt-0.5">Your complete custom B2B scaling plan will be sent directly to <span className="text-slate-200 font-mono font-medium">{formData.email}</span> within 48 business hours.</p>
            </div>
          </div>
        </div>

        <button 
          id="btn-form-reset"
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              subSegment: "Management Consulting",
              painPoint: "Referral Plateau & Pipeline Volatility",
              revenue: "$5M - $10M",
              customContext: ""
            });
          }}
          className="mt-8 text-xs text-slate-500 hover:text-sky-400 font-mono transition-colors border-b border-dashed border-slate-800 pb-0.5 hover:border-sky-500/50"
        >
          Submit Another Consultation Request
        </button>
      </div>
    );
  }

  return (
    <div id="growth-blueprint-form-card" className="card-glass border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-md relative overflow-hidden">
      <div className="mb-6 relative z-10">
        <span className="px-2.5 py-0.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold rounded-full uppercase tracking-wide">
          B2B Pipeline Intake
        </span>
        <h3 className="text-xl font-bold text-white font-display mt-2">Request a Complimentary Growth Blueprint</h3>
        <p className="text-slate-400 text-xs mt-1.5 leading-relaxed">
          No generic pitches. Get a deep-dive analysis of your firm's market share, high-intent keywords, and AI search visibility gaps, prepared by a senior B2B consultant.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Your Name</label>
            <input 
              id="input-form-name"
              type="text" 
              required
              placeholder="e.g. Dr. Thomas Vance"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:bg-slate-900/90 transition-all font-sans"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Corporate Email</label>
            <input 
              id="input-form-email"
              type="email" 
              required
              placeholder="e.g. tvance@strategyfirm.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:bg-slate-900/90 transition-all font-sans"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Firm Name</label>
            <input 
              id="input-form-company"
              type="text" 
              required
              placeholder="e.g. Vanguard Advisory Group"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:bg-slate-900/90 transition-all font-sans"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Sub-Sector</label>
            <select 
              id="select-form-segment"
              value={formData.subSegment}
              onChange={(e) => setFormData({...formData, subSegment: e.target.value})}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500 focus:bg-slate-900/90 transition-all font-sans [&>option]:bg-slate-950 [&>option]:text-white"
            >
              <option value="Management Consulting">Management Consulting</option>
              <option value="Corporate Law Firm">Corporate Law Firm</option>
              <option value="Accounting & Audit Networks">Accounting & Audit Networks</option>
              <option value="Executive Search & HR">Executive Search & HR</option>
              <option value="Engineering & Civil Advisory">Engineering & Civil Advisory</option>
              <option value="IT Advisory & Cybersecurity">IT Advisory & Cybersecurity</option>
              <option value="Specialized Boutique Agency">Specialized Boutique Agency</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Primary Pipeline Pain</label>
            <select 
              id="select-form-pain"
              value={formData.painPoint}
              onChange={(e) => setFormData({...formData, painPoint: e.target.value})}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500 focus:bg-slate-900/90 transition-all font-sans [&>option]:bg-slate-950 [&>option]:text-white"
            >
              <option value="Referral Plateau & Pipeline Volatility">Referral Plateau & Pipeline Volatility</option>
              <option value="AI Search Engines Overlooking Our Firm">AI Search Engines Overlooking Our Firm</option>
              <option value="Website Traffic Fails to Convert">Website Traffic Fails to Convert</option>
              <option value="High CPC & Weak LinkedIn Ad Conversions">High CPC & Weak LinkedIn Ad Conversions</option>
              <option value="Inability to Attribute Marketing to Retainers">Inability to Attribute Marketing to Retainers</option>
              <option value="Competitors Outranking Us on High-Intent Terms">Competitors Outranking Us on High-Intent Terms</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Annual Practice Revenue</label>
            <select 
              id="select-form-revenue"
              value={formData.revenue}
              onChange={(e) => setFormData({...formData, revenue: e.target.value})}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-sky-500 focus:bg-slate-900/90 transition-all font-sans [&>option]:bg-slate-950 [&>option]:text-white"
            >
              <option value="Under $5M">Under $5M</option>
              <option value="$5M - $10M">$5M - $10M</option>
              <option value="$10M - $25M">$10M - $25M</option>
              <option value="$25M - $100M">$25M - $100M</option>
              <option value="Over $100M">Over $100M</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">Context or Competitor Target (Optional)</label>
          <textarea 
            id="textarea-form-context"
            rows={2}
            placeholder="Tell us about a specific competitor you want us to analyze, or current goals..."
            value={formData.customContext}
            onChange={(e) => setFormData({...formData, customContext: e.target.value})}
            className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:bg-slate-900/90 transition-all font-sans"
          />
        </div>

        <button 
          id="btn-form-submit"
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-sky-500 hover:bg-sky-400 disabled:bg-sky-800 text-slate-950 font-bold text-sm rounded-lg py-3 flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Analyzing Systems & Audiences...</span>
            </>
          ) : (
            <>
              <span>Generate My Growth Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-white/5">
          <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
          <span>Strict client privacy. Data is secured under corporate NDA standards.</span>
        </div>
      </form>
    </div>
  );
}
