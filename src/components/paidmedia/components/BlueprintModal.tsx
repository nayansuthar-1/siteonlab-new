"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  X,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  FileText,
  Mail,
  Briefcase,
  TrendingUp,
} from "lucide-react";

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlueprintModal({ isOpen, onClose }: BlueprintModalProps) {
  const [step, setStep] = useState<"FORM" | "LOADING" | "RESULTS">("FORM");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("10k-25k");
  const [channel, setChannel] = useState("Google Ads");
  const [painPoint, setPainPoint] = useState("High CAC / Poor Lead Quality");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !companyName) return;

    setStep("LOADING");
    // Simulate real-time audience scan & budget waste calculation
    setTimeout(() => {
      setStep("RESULTS");
    }, 2400);
  };

  // Dynamically calculate estimated savings & pipeline lift based on selected budget
  const getCustomProjections = () => {
    let budgetVal = 15000;
    if (budget === "under-5k") budgetVal = 3500;
    else if (budget === "5k-10k") budgetVal = 8000;
    else if (budget === "10k-25k") budgetVal = 17500;
    else if (budget === "25k-50k") budgetVal = 37500;
    else budgetVal = 75000;

    const estimatedWaste = Math.round(budgetVal * 0.35); // 35% average budget waste
    const estimatedPipelineBoost = Math.round(budgetVal * 1.85); // 1.85x average ROI boost

    return {
      waste: estimatedWaste.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
      boost: estimatedPipelineBoost.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }),
      wastePercent: "35%",
    };
  };

  const projections = getCustomProjections();

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

          {/* Step 1: Input Form */}
          {step === "FORM" && (
            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-blue-400 font-mono font-bold flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Free Growth Diagnostic
                </span>
                <h3 className="text-xl font-display font-bold text-white tracking-tight uppercase">
                  Request Your Growth Blueprint
                </h3>
                <p className="text-xs text-zinc-400">
                  Provide your campaign specs. We will perform an immediate, simulated account audit to calculate budget leakage and pipeline opportunity.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. SecureCloud Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-none px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700 text-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Company Website</label>
                    <input
                      type="url"
                      required
                      placeholder="https://example.com"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-none px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700 text-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-none px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-700 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Monthly Ad Spend</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-none px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors text-zinc-300"
                    >
                      <option value="under-5k">Under $5,000 / mo</option>
                      <option value="5k-10k">$5,000 - $10,000 / mo</option>
                      <option value="10k-25k">$10,000 - $25,000 / mo</option>
                      <option value="25k-50k">$25,000 - $50,000 / mo</option>
                      <option value="over-50k">Over $50,000 / mo</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Primary Channel</label>
                    <select
                      value={channel}
                      onChange={(e) => setChannel(e.target.value)}
                      className="w-full bg-black border border-zinc-800 rounded-none px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors text-zinc-300"
                    >
                      <option value="Google Ads">Google Ads (Search)</option>
                      <option value="LinkedIn Ads">LinkedIn Ads (Social)</option>
                      <option value="Meta Ads">Meta Ads (Retargeting)</option>
                      <option value="Multi-platform">Multi-platform Campaign</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase">Primary Campaign Challenge</label>
                  <select
                    value={painPoint}
                    onChange={(e) => setPainPoint(e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-none px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-colors text-zinc-300"
                  >
                    <option value="High CAC / Poor Lead Quality">High CAC / Poor Lead Quality</option>
                    <option value="Low Lead Volume / Hard to Scale">Low Lead Volume / Hard to Scale</option>
                    <option value="Tracking / CRM Attribution Broken">Tracking / CRM Attribution Broken</option>
                    <option value="Stagnant ROAS / Wasted Spend">Stagnant ROAS / Wasted Spend</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-none text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Generate Growth Blueprint
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          )}

          {/* Step 2: Live Scanning Simulation */}
          {step === "LOADING" && (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
              <div className="space-y-1">
                <p className="text-sm font-mono tracking-wider uppercase text-white">Scanning search & social signals...</p>
                <div className="flex gap-1 text-[10px] font-mono text-zinc-500 justify-center">
                  <span className="animate-pulse">Analyzing CPC benchmarks •</span>
                  <span className="animate-pulse delay-75">Calculating {budget} leakage •</span>
                  <span className="animate-pulse delay-150">Estimating pipeline lift</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Diagnostic Results */}
          {step === "RESULTS" && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 bg-blue-600/10 text-blue-400 p-3 rounded-none border border-blue-500/20 text-xs font-mono">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span><strong>Instant Audit Generated:</strong> Found critical waste in {channel} targeting!</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Diagnostic Results For {companyName}</span>
                <h4 className="text-lg font-display font-semibold text-white tracking-tight uppercase">
                  Your Paid Media Savings & Pipeline Estimate
                </h4>
              </div>

              {/* Graphic metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black p-4 rounded-none border border-zinc-800 flex flex-col justify-between space-y-1">
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-mono uppercase tracking-wider">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    <span>Estimated Annual Waste</span>
                  </div>
                  <div className="text-2xl font-bold font-mono tracking-tight text-white">{projections.waste}</div>
                  <span className="text-[10px] text-zinc-500">(~35% leak on average setups)</span>
                </div>

                <div className="bg-black p-4 rounded-none border border-zinc-800 flex flex-col justify-between space-y-1">
                  <div className="flex items-center gap-1 text-xs text-blue-400 font-mono uppercase tracking-wider">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>Estimated Net Pipeline Lift</span>
                  </div>
                  <div className="text-2xl font-bold font-mono tracking-tight text-blue-400">{projections.boost}</div>
                  <span className="text-[10px] text-zinc-500">(Over 12-month program lifecycle)</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs bg-zinc-900/40 p-4 rounded-none border border-zinc-800/60">
                <h5 className="font-bold text-zinc-200 uppercase tracking-widest text-[10px] font-mono">Recommended Next Action Items:</h5>
                <ul className="space-y-1.5 text-zinc-400">
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold shrink-0">•</span>
                    <span>Eliminate bidding on raw high-volume keywords. Switch to tight, exact-intent cluster search architectures.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold shrink-0">•</span>
                    <span>Implement closed-loop CRM tracking signals to immediately suppress non-converting ad traffic.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-blue-500 font-bold shrink-0">•</span>
                    <span>Deploy targeted comparative testimonial landing pages with friction-reduced multi-step inquiry pathways.</span>
                  </li>
                </ul>
              </div>

              {/* Book meeting trigger */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    alert(`Thank you! A copy of this Growth Blueprint has been emailed to: ${email}. Our team will contact you shortly.`);
                    onClose();
                    setStep("FORM");
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-none text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5" />
                  E-mail My Copy & Schedule Call
                </button>
                <button
                  onClick={() => {
                    onClose();
                    setStep("FORM");
                  }}
                  className="px-4 py-3 rounded-none text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors border border-zinc-800 hover:bg-zinc-900 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
