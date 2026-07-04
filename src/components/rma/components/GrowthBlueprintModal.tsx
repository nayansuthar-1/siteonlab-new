"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Send, 
  Sparkles, 
  CheckCircle, 
  ChevronRight, 
  ShieldAlert, 
  Clock, 
  Target, 
  PieChart, 
  ArrowRight,
  Calculator,
  Compass
} from "lucide-react";
import { submitLead } from "@/lib/submitLead";

interface GrowthBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: "blueprint" | "assessment";
}

export default function GrowthBlueprintModal({ isOpen, onClose, initialMode }: GrowthBlueprintModalProps) {
  const [mode, setMode] = useState<"blueprint" | "assessment">(initialMode);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  // Blueprint Form fields
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [challenge, setChallenge] = useState("attribution");
  const [crmType, setCrmType] = useState("hubspot");

  // Assessment Quiz fields
  const [quizStep, setQuizStep] = useState(1);
  const [q1, setQ1] = useState<string>(""); // CRM Sync Method
  const [q2, setQ2] = useState<string>(""); // Server Tagging Status
  const [q3, setQ3] = useState<string>(""); // LLM/AI referral tracking
  const [q4, setQ4] = useState<string>(""); // Attribution Model

  const handleBlueprintSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !website) return;
    setSubmitting(true);
    await submitLead({
      source: "Revenue Measurement Landing Page — Growth Blueprint",
      email,
      fields: {
        Company: companyName,
        Website: website,
        Challenge: challenge,
        CRM: crmType,
      },
    });
    setSubmitting(false);
    setFormSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    if (q1 === "direct-server" || q1 === "native-sync") score += 25;
    else if (q1 === "manual") score += 10;
    
    if (q2 === "server-gtm" || q2 === "edge") score += 25;
    else if (q2 === "hybrid") score += 15;
    
    if (q3 === "yes") score += 25;
    
    if (q4 === "multi-touch" || q4 === "w-shaped") score += 25;
    else if (q4 === "first-last") score += 10;

    return Math.max(15, score);
  };

  const getMaturityTier = (score: number) => {
    if (score >= 80) return { title: "Level 4: Revenue Optimized Sourcing", color: "text-emerald-400 border-emerald-900/30 bg-emerald-950/20", desc: "You are tracking pipeline and optimizing bids directly for revenue. Minor gaps exist around AI citation metrics." };
    if (score >= 50) return { title: "Level 3: Linear Structured Sync", color: "text-blue-400 border-blue-900/30 bg-blue-950/20", desc: "You have basic attribution in place but suffer from high browser cookie blocks (up to 40% loss)." };
    return { title: "Level 1-2: Legacy Event Sourcing", color: "text-amber-400 border-amber-900/30 bg-amber-950/20", desc: "Your metrics are siloed in Google Analytics pageviews. Marketing is guessing which channels drive actual closed pipeline." };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-[#020617]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="w-full max-w-xl bg-[#0f172a] border border-white/5 rounded-2xl shadow-2xl overflow-hidden relative"
        >
          {/* Top visual gradient accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600" />

          {/* Close button */}
          <button
            id="btn-close-modal"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white p-1.5 hover:bg-[#1e293b]/60 rounded-lg transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Toggles */}
          <div className="p-6 pb-0 border-b border-white/5">
            <div className="flex gap-2 mb-4">
              <button
                id="btn-modal-mode-blueprint"
                onClick={() => { setMode("blueprint"); setFormSubmitted(false); }}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  mode === "blueprint"
                    ? "bg-blue-600/10 border-blue-500/30 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                Growth Blueprint
              </button>
              <button
                id="btn-modal-mode-assessment"
                onClick={() => { setMode("assessment"); setFormSubmitted(false); setQuizStep(1); }}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  mode === "assessment"
                    ? "bg-blue-600/10 border-blue-500/30 text-blue-400"
                    : "border-transparent text-gray-400 hover:text-white"
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                Measurement Assessment
              </button>
            </div>
          </div>

          {/* MODAL CONTENT: BLUEPRINT FORM */}
          {mode === "blueprint" && (
            <div className="p-6">
              {!formSubmitted ? (
                <form onSubmit={handleBlueprintSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-bold text-white">Request your Revenue Growth Blueprint</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      We will review your current analytics setup, identify missing CRM conversion loops, and show you exactly where you are losing customer data.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label htmlFor="input-blueprint-website" className="block text-xs font-mono text-gray-400 mb-1">Company Website *</label>
                      <input
                        id="input-blueprint-website"
                        type="url"
                        required
                        placeholder="https://company.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full bg-[#020617] border border-white/5 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="input-blueprint-company" className="block text-xs font-mono text-gray-400 mb-1">Company Name</label>
                        <input
                          id="input-blueprint-company"
                          type="text"
                          placeholder="Acme Corp"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full bg-[#020617] border border-white/5 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="select-blueprint-crm" className="block text-xs font-mono text-gray-400 mb-1">Primary CRM</label>
                        <select
                          id="select-blueprint-crm"
                          value={crmType}
                          onChange={(e) => setCrmType(e.target.value)}
                          className="w-full bg-[#020617] border border-white/5 rounded-lg px-3 py-1.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500"
                        >
                          <option value="hubspot">HubSpot</option>
                          <option value="salesforce">Salesforce</option>
                          <option value="pipedrive">Pipedrive</option>
                          <option value="other">Custom / None</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="input-blueprint-email" className="block text-xs font-mono text-gray-400 mb-1">Work Email *</label>
                      <input
                        id="input-blueprint-email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#020617] border border-white/5 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="select-blueprint-challenge" className="block text-xs font-mono text-gray-400 mb-1">Biggest Measurement Challenge</label>
                      <select
                        id="select-blueprint-challenge"
                        value={challenge}
                        onChange={(e) => setChallenge(e.target.value)}
                        className="w-full bg-[#020617] border border-white/5 rounded-lg px-3 py-1.5 text-sm text-gray-200 focus:outline-none focus:border-blue-500"
                      >
                        <option value="attribution">Multi-touch attribution (Cannot track campaigns back to sales)</option>
                        <option value="cookieloss">Cookie loss (Safari/AdBlockers deleting event data)</option>
                        <option value="ad_sync">Syncing CRM pipeline data with LinkedIn/Google Ads</option>
                        <option value="dashboard">Consolidating disjointed reporting spreadsheets</option>
                        <option value="ai">Attributing visibility and visits from AI engines</option>
                      </select>
                    </div>
                  </div>

                  <button
                    id="btn-blueprint-submit"
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 font-semibold text-sm rounded-lg text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin" />
                        Analyzing Website Infrastructure...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Generate Custom Growth Blueprint
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-gray-500 text-center font-mono">
                    Privacy First. S/S Proxy secured. No obligation.
                  </p>
                </form>
              ) : (
                <div className="space-y-6 text-center py-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-display font-bold text-white">Blueprint Request Received!</h3>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto">
                      Our engineers are analyzing tagging records for <span className="text-blue-400 font-mono font-medium">{website}</span>.
                    </p>
                  </div>

                  {/* Mock Analysis Dashboard generation */}
                  <div className="bg-[#020617] border border-white/5 rounded-xl p-4 text-left font-mono text-[11px] space-y-2.5">
                    <div className="flex items-center justify-between text-gray-500">
                      <span>Analyzing Domain S/S Integrity:</span>
                      <span className="text-emerald-400 font-bold">100% COMPLETE</span>
                    </div>
                    <div className="space-y-1 text-gray-400">
                      <p className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Detected Ad Trackers: LinkedIn, Google, GA4</p>
                      <p className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Server-to-Server Conversions: <span className="text-amber-400">Not detected</span></p>
                      <p className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Estimated Safari/iOS Cookie Block rate: <span className="text-red-400">~38% data leakage</span></p>
                    </div>
                    <div className="border-t border-white/5 pt-2 text-[10px] text-gray-500">
                      A personalized technical review document will reach <span className="text-blue-300 font-semibold">{email}</span> in under 2 hours with actionable remediation steps.
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      id="btn-blueprint-schedule"
                      onClick={() => alert("Redirecting to HybridMonks Booking Calendar (Mock Event)")}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-all cursor-pointer"
                    >
                      Book 30-Min Walkthrough Call
                    </button>
                    <button
                      id="btn-blueprint-done"
                      onClick={onClose}
                      className="px-4 py-2 bg-[#1e293b] hover:bg-[#334155] border border-white/5 text-gray-300 text-xs rounded-lg transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MODAL CONTENT: ASSESSMENT QUIZ */}
          {mode === "assessment" && (
            <div className="p-6">
              {quizStep <= 4 ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>Maturity Assessment</span>
                    <span>Step {quizStep} of 4</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1 bg-[#020617] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${(quizStep / 4) * 100}%` }}
                    />
                  </div>

                  {/* Question 1 */}
                  {quizStep === 1 && (
                    <div className="space-y-3">
                      <h4 className="font-display font-medium text-white text-sm">How do you synchronize marketing campaign spend back to your CRM (HubSpot/Salesforce)?</h4>
                      <div className="space-y-2">
                        {[
                          { id: "direct-server", label: "Direct S/S Server Sync (Fully automated API attribution)" },
                          { id: "native-sync", label: "Native CRM script pixel sync (No custom server)" },
                          { id: "manual", label: "Manual monthly exports and sheet formulas" },
                          { id: "none", label: "We do not link ad spend back to CRM closed stages" }
                        ].map((opt) => (
                          <button
                            id={`btn-opt-q1-${opt.id}`}
                            key={opt.id}
                            onClick={() => { setQ1(opt.id); setQuizStep(2); }}
                            className={`w-full text-left p-3 text-xs rounded-xl border transition-all cursor-pointer ${
                              q1 === opt.id 
                                ? "bg-blue-950/30 border-blue-500 text-blue-300" 
                                : "bg-[#020617]/40 border-white/5 hover:border-white/10 text-gray-300 hover:text-white"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Question 2 */}
                  {quizStep === 2 && (
                    <div className="space-y-3">
                      <h4 className="font-display font-medium text-white text-sm">Are you using Server-Side Tagging or Conversions APIs to bypass browser cookie blocks?</h4>
                      <div className="space-y-2">
                        {[
                          { id: "server-gtm", label: "Yes, server-side GTM proxy on our own custom subdomain" },
                          { id: "edge", label: "Yes, using basic Conversions API (CAPI) direct server sync" },
                          { id: "hybrid", label: "Hybrid standard pixel with browser overrides" },
                          { id: "no", label: "No, relying entirely on standard browser JS tags (GA4, GTM)" }
                        ].map((opt) => (
                          <button
                            id={`btn-opt-q2-${opt.id}`}
                            key={opt.id}
                            onClick={() => { setQ2(opt.id); setQuizStep(3); }}
                            className={`w-full text-left p-3 text-xs rounded-xl border transition-all cursor-pointer ${
                              q2 === opt.id 
                                ? "bg-blue-950/30 border-blue-500 text-blue-300" 
                                : "bg-[#020617]/40 border-white/5 hover:border-white/10 text-gray-300 hover:text-white"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Question 3 */}
                  {quizStep === 3 && (
                    <div className="space-y-3">
                      <h4 className="font-display font-medium text-white text-sm">Do you track referral visits Sourced directly from B2B AI engines (ChatGPT, Gemini, Perplexity)?</h4>
                      <div className="space-y-2">
                        {[
                          { id: "yes", label: "Yes, custom referral monitors track and isolate LLM citations" },
                          { id: "no", label: "No, they just show up in our records as generic Direct traffic" }
                        ].map((opt) => (
                          <button
                            id={`btn-opt-q3-${opt.id}`}
                            key={opt.id}
                            onClick={() => { setQ3(opt.id); setQuizStep(4); }}
                            className={`w-full text-left p-3 text-xs rounded-xl border transition-all cursor-pointer ${
                              q3 === opt.id 
                                ? "bg-blue-950/30 border-blue-500 text-blue-300" 
                                : "bg-[#020617]/40 border-white/5 hover:border-white/10 text-gray-300 hover:text-white"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Question 4 */}
                  {quizStep === 4 && (
                    <div className="space-y-3">
                      <h4 className="font-display font-medium text-white text-sm">Which attribution model is currently active to evaluate campaign ROI?</h4>
                      <div className="space-y-2">
                        {[
                          { id: "multi-touch", label: "Multi-touch / Fractional attribution models (W-shaped/U-shaped)" },
                          { id: "first-last", label: "First-Touch or Last-Touch models only" },
                          { id: "blended", label: "Blended average platform metrics (LinkedIn Ads + Google Analytics)" },
                          { id: "none", label: "We do not currently align and assign channel weights" }
                        ].map((opt) => (
                          <button
                            id={`btn-opt-q4-${opt.id}`}
                            key={opt.id}
                            onClick={() => { setQ4(opt.id); setQuizStep(5); }}
                            className={`w-full text-left p-3 text-xs rounded-xl border transition-all cursor-pointer ${
                              q4 === opt.id 
                                ? "bg-blue-950/30 border-blue-500 text-blue-300" 
                                : "bg-[#020617]/40 border-white/5 hover:border-white/10 text-gray-300 hover:text-white"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center text-xs text-gray-500 font-mono mt-4">
                    <button
                      id="btn-quiz-back"
                      disabled={quizStep === 1}
                      onClick={() => setQuizStep((p) => Math.max(1, p - 1))}
                      className="px-2 py-1 bg-[#020617] hover:bg-[#1e293b] disabled:opacity-30 rounded text-gray-400 hover:text-white transition-all cursor-pointer"
                    >
                      ← Back
                    </button>
                    <span>HybridMonks Security Sandbox</span>
                  </div>
                </div>
              ) : (
                /* Assessment Completed view */
                <div className="space-y-5 py-2">
                  <div className="text-center space-y-1">
                    <div className="inline-block p-2 bg-blue-500/10 border border-blue-500/20 rounded-xl mb-2 text-blue-400">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-bold text-white">Your B2B Measurement Score</h3>
                    <p className="text-xs text-gray-400">Based on standard first-party validation models</p>
                  </div>

                  {/* Metric Circle/Value block */}
                  <div className="flex justify-around items-center bg-[#020617] p-4 border border-white/5 rounded-2xl">
                    <div className="text-center">
                      <p className="text-2xl font-display font-bold text-blue-400">{calculateScore()}/100</p>
                      <p className="text-[10px] text-gray-500 font-mono">Attribution Accuracy</p>
                    </div>
                    <div className="w-[1px] h-10 bg-white/5" />
                    <div className="max-w-[180px]">
                      <span className={`inline-block text-[9px] font-semibold px-2 py-0.5 rounded-full border ${getMaturityTier(calculateScore()).color}`}>
                        {getMaturityTier(calculateScore()).title}
                      </span>
                      <p className="text-[10px] text-gray-400 leading-tight mt-1">
                        {getMaturityTier(calculateScore()).desc}
                      </p>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">Strategic Recommendations</p>
                    <div className="space-y-2 text-xs">
                      {calculateScore() < 50 ? (
                        <>
                          <div className="flex gap-2 bg-[#1e293b] border border-white/5 p-2.5 rounded-xl">
                            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <p className="text-gray-300 leading-normal">
                              <strong>Deploy server-side proxies:</strong> Browser tracking pixel data is likely missing 30-40% of conversion milestones due to ad blocks.
                            </p>
                          </div>
                          <div className="flex gap-2 bg-[#1e293b] border border-white/5 p-2.5 rounded-xl">
                            <Target className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <p className="text-gray-300 leading-normal">
                              <strong>Establish CRM Pipeline Link:</strong> Move away from counting clicks. Bridge Salesforce or HubSpot deal stages into Google Tag Manager.
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex gap-2 bg-[#1e293b] border border-white/5 p-2.5 rounded-xl">
                            <Sparkles className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                            <p className="text-gray-300 leading-normal">
                              <strong>Track LLM referral citations:</strong> Ensure AI engine search mentions are classified with specialized analytics parsers instead of masked in direct channels.
                            </p>
                          </div>
                          <div className="flex gap-2 bg-[#1e293b] border border-white/5 p-2.5 rounded-xl">
                            <PieChart className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <p className="text-gray-300 leading-normal">
                              <strong>Fractional Multi-Touch:</strong> Shift from standard first-touch or last-touch models to a tailored U-shaped or W-shaped pipeline credit allocation.
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-white/5">
                    <button
                      id="btn-quiz-request-blueprint"
                      onClick={() => setMode("blueprint")}
                      className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-all cursor-pointer"
                    >
                      Request Free Blueprint To Resolve Gaps
                    </button>
                    <button
                      id="btn-quiz-close"
                      onClick={onClose}
                      className="px-4 py-2 bg-[#1e293b] hover:bg-[#334155] border border-white/5 text-gray-300 text-xs rounded-lg transition-all cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
