"use client";

import { useState, FormEvent } from "react";
import { X, ArrowRight, ShieldCheck, Check, AlertCircle, FileText, Send, Sparkles } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

interface GrowthBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GrowthBlueprintModal({ isOpen, onClose }: GrowthBlueprintModalProps) {
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState("Enterprise Security SaaS");
  const [bottleneck, setBottleneck] = useState("Low high-intent organic search traffic");
  const [arr, setArr] = useState("$5M - $15M ARR");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitLead({
      source: "Cybersecurity Landing Page — Growth Blueprint",
      name,
      email,
      fields: {
        Company: company,
        Niche: niche,
        "Biggest Bottleneck": bottleneck,
        ARR: arr,
      },
    });
    setIsSubmitting(false);
    setStep(4); // Strategy Brief results screen
  };

  const getCustomizedStrategy = () => {
    let advice = "";
    let timeline = "90-Day Priority";
    
    if (niche === "Managed Detection & Response MDR") {
      advice = "Since MDR requires high human trust and high contracts, you should immediately ungated your pricing structure and replace complex whitepapers with self-guided interactive sandboxes. Focus 60% of your budget on GEO (Generative Engine Optimization) to ensure Perplexity recommends your security operations center (SOC).";
    } else if (niche === "Compliance & Risk Audit") {
      advice = "For Compliance platforms, SEO surrounding regulations (e.g., SOC 2 audit timelines, HIPAA checklist, ISO 27001 mapping) has maximum commercial intent. Build a dynamic comparison library comparing custom in-house spreadsheets to automated platforms.";
    } else {
      advice = "For enterprise SaaS, high paid ad spend is likely draining margins. We recommend a pivot to practitioner-first technical articles, targeting mid-funnel security architects, backed by schema-structured technical pages to rank #1 on high-intent terms.";
    }

    let actionPlan = "";
    if (bottleneck === "Low high-intent organic search traffic") {
      actionPlan = "Draft 5 SME-written comparison articles (e.g., '[Your brand] vs [Competitor]') targeting buyers currently evaluating alternatives. This bypasses generic informational search and targets ready-to-buy users.";
    } else if (bottleneck === "High CAC on paid advertising channels") {
      actionPlan = "Install account-exclusion telemetry in Google Ads. Restrict bids strictly to exact-match high-intent queries, and execute target-account LinkedIn ABM to only pay for clicks from pre-vetted target buyers.";
    } else {
      actionPlan = "Structure your site's entity graphs and secure citations on high-authority technical boards so LLM engines like ChatGPT and Gemini index your software as a premium recommended option.";
    }

    return { advice, actionPlan, timeline };
  };

  const strategyBrief = getCustomizedStrategy();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-sm border border-slate-800 bg-slate-900 p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm p-1.5 text-slate-400 hover:bg-slate-850 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-6 text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-bold font-mono text-slate-400 tracking-widest uppercase">
            HybridMonks Consultative Growth Blueprint
          </span>
        </div>

        {/* Step 1: Select Niche & Bottlenecks */}
        {step === 1 && (
          <div className="text-left">
            <h3 className="text-lg font-bold text-white font-sans">
              Step 1: Understand your Cybersecurity Sub-Niche
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-sans">
              Help us understand what your company builds so we can tailor our technical strategy.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                  What is your cybersecurity sub-niche?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Enterprise Security SaaS",
                    "Managed Detection & Response MDR",
                    "Compliance & Risk Audit",
                    "API & DevSecOps Security"
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setNiche(opt)}
                      type="button"
                      className={`p-3 rounded-sm border text-xs font-semibold text-left transition-all ${
                        niche === opt
                          ? "border-sky-500 bg-sky-500/5 text-sky-400"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                  What is your primary commercial bottleneck?
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "Low high-intent organic search traffic",
                    "High CAC on paid advertising channels",
                    "Invisible on AI search engines (Perplexity, ChatGPT)"
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setBottleneck(opt)}
                      type="button"
                      className={`p-3 rounded-sm border text-xs font-semibold text-left transition-all ${
                        bottleneck === opt
                          ? "border-sky-500 bg-sky-500/5 text-sky-400"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-sm bg-white hover:bg-slate-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all cursor-pointer"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: ARR and Target Size */}
        {step === 2 && (
          <div className="text-left">
            <h3 className="text-lg font-bold text-white font-sans">
              Step 2: Scale and Deal Structure
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-sans">
              We align our organic SEO & ABM playbooks to your company scale and ARR targets.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-2">
                  What is your current ARR scale?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Seed Stage (<$2M ARR)",
                    "$2M - $5M ARR",
                    "$5M - $15M ARR",
                    "Enterprise (>$15M ARR)"
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setArr(opt)}
                      type="button"
                      className={`p-3 rounded-sm border text-xs font-semibold text-left transition-all ${
                        arr === opt
                          ? "border-sky-500 bg-sky-500/5 text-sky-400"
                          : "border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={handleBack}
                className="rounded-sm border border-slate-800 bg-slate-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:border-slate-700 transition-all"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 rounded-sm bg-white hover:bg-slate-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all cursor-pointer"
              >
                Continue
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Contact & Submit */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="text-left">
            <h3 className="text-lg font-bold text-white font-sans">
              Step 3: Secure Your Custom Growth Strategy Brief
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-sans">
              Enter your contact details. Our algorithms will immediately structure an on-the-fly custom action plan for your team.
            </p>

            <div className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sarah Jenkins"
                    className="w-full rounded-sm border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1.5">
                    Company Name
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ironclad Security"
                    className="w-full rounded-sm border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block mb-1.5">
                  Business Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sjenkins@ironclad.com"
                  className="w-full rounded-sm border border-slate-800 bg-slate-950 p-3 text-sm text-slate-100 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-slate-950 border border-slate-800/80 p-3 rounded-sm">
                <AlertCircle className="h-4 w-4 shrink-0 text-sky-500" />
                <p className="font-sans leading-relaxed">
                  We treat data security with high priority. Your inputs are confidential and only used to generate your strategic blueprint.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="rounded-sm border border-slate-800 bg-slate-950 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-400 hover:border-slate-700 transition-all"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-1.5 rounded-sm bg-white hover:bg-slate-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Modeling Strategy..." : "Generate Strategy Brief"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Display Strategy Brief Result */}
        {step === 4 && (
          <div className="text-left">
            <div className="flex items-center gap-2 rounded-sm bg-sky-500/10 border border-sky-500/20 px-3 py-1.5 self-start w-fit mb-4">
              <Sparkles className="h-4 w-4 text-sky-400" />
              <span className="text-[9px] font-bold font-mono text-sky-400 uppercase tracking-wider">HybridMonks Generative Brief Generated Successfully</span>
            </div>

            <h3 className="text-xl font-bold text-white font-sans">
              B2B Cybersecurity Strategy Brief: <span className="text-sky-400">{company}</span>
            </h3>
            
            <div className="mt-6 border border-slate-800 bg-slate-950 rounded-sm p-5 space-y-6 font-sans">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block">
                  1. Domain Diagnostic & Alignment
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5">
                  Your profile matches a <strong className="text-white">{niche}</strong> firm operating at <strong className="text-white">{arr}</strong>. {strategyBrief.advice}
                </p>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 font-mono block">
                  2. Targeted Bottleneck Action Plan ({bottleneck})
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5">
                  To solve your bottleneck, we recommend: {strategyBrief.actionPlan}
                </p>
              </div>

              <div className="border-t border-slate-800 pt-4 flex justify-between items-center flex-wrap gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block">
                    Assigned Growth Architect
                  </span>
                  <span className="text-xs font-semibold text-white block mt-0.5 font-sans">
                    Hitesh Malviya (Lead Cybersecurity Consultant, HybridMonks)
                  </span>
                </div>
                <div className="rounded-sm bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 text-[10px] font-bold text-sky-400 font-mono uppercase tracking-wider">
                  Priority Action: 4-Week Discovery
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center gap-4 flex-wrap">
              <span className="text-xs text-slate-400 font-sans max-w-xs">
                A copy of this customized strategy has been dispatched to <strong className="text-white">{email}</strong>.
              </span>
              <button
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
                className="rounded-sm bg-white hover:bg-slate-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 transition-all shadow-md shadow-sky-500/10 cursor-pointer"
              >
                Conclude Consultation
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
