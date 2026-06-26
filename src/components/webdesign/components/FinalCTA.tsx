"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Calculator, CheckCircle2, ClipboardList, RefreshCw, Send, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const [activeTab, setActiveTab] = useState<"blueprint" | "assessment">("blueprint");
  
  // Blueprint Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    url: "",
    challenge: "conversion"
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Assessment Calculator State
  const [sessions, setSessions] = useState<number>(5000);
  const [currentConv, setCurrentConv] = useState<number>(0.5);
  const [acv, setAcv] = useState<number>(15000);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({ name: "", email: "", url: "", challenge: "conversion" });
    setFormSubmitted(false);
  };

  // Calculations
  const currentLeads = Math.round(sessions * (currentConv / 100));
  const currentPipeline = currentLeads * acv;

  // Assuming SiteOnLab conservative average improvement to 2.2% conversion rate
  const targetConv = 2.2;
  const targetLeads = Math.round(sessions * (targetConv / 100));
  const targetPipeline = targetLeads * acv;
  const pipelineUplift = targetPipeline - currentPipeline;

  return (
    <section id="cta" className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Context & Message */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded">
              Get Started
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let’s make website design and development your most efficient growth channel.
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
              Book a 30-minute strategy call. We’ll review your current website performance, identify opportunities your competitors are missing, and show you what it would take to turn your website design and development into a compounding, qualified sales pipeline.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest font-bold">What we’ll cover in your strategy call:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-400 font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Site speed & SEO bottlenecks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Buyer-intent journey gaps</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Interactive product opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>CRM attribution setups</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Widget */}
          <div className="lg:col-span-6">
            <div className="bg-zinc-900/60 border border-white/5 rounded-sm p-6 sm:p-8 backdrop-blur-md shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-sm" />
              
              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-950 border border-white/5 rounded-sm mb-8">
                <button
                  onClick={() => setActiveTab("blueprint")}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "blueprint"
                      ? "bg-blue-600 text-white shadow"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <ClipboardList className="w-3.5 h-3.5" />
                  Request Blueprint
                </button>
                <button
                  onClick={() => setActiveTab("assessment")}
                  className={`flex items-center justify-center gap-2 py-2 px-3 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "assessment"
                      ? "bg-blue-600 text-white shadow"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  ROI Assessment
                </button>
              </div>

              {/* Tab Contents with AnimatePresence */}
              <AnimatePresence mode="wait">
                {activeTab === "blueprint" ? (
                  <motion.div
                    key="blueprint-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {!formSubmitted ? (
                      <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Alex Mercer"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-blue-500 focus:outline-none text-zinc-100 font-sans text-sm transition-colors placeholder:text-zinc-600"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Work Email</label>
                          <input
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-blue-500 focus:outline-none text-zinc-100 font-sans text-sm transition-colors placeholder:text-zinc-600"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Website URL</label>
                          <input
                            type="url"
                            required
                            placeholder="https://company.com"
                            value={formData.url}
                            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                            className="w-full px-4 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-blue-500 focus:outline-none text-zinc-100 font-sans text-sm transition-colors placeholder:text-zinc-600"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Primary Web Challenge</label>
                          <select
                            value={formData.challenge}
                            onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                            className="w-full px-4 py-2.5 rounded bg-zinc-950 border border-zinc-800 focus:border-blue-500 focus:outline-none text-zinc-200 font-sans text-sm transition-colors cursor-pointer"
                          >
                            <option value="conversion">Low visitor-to-demo conversion rates</option>
                            <option value="performance">Slow loading times / Poor Web Vitals</option>
                            <option value="brand">Outdated design / Poor brand positioning</option>
                            <option value="crm">Lack of reliable HubSpot/Salesforce sync</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full group mt-6 px-6 py-4 bg-white text-black font-bold uppercase tracking-wider text-xs rounded shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-zinc-200 transition-all cursor-pointer active:scale-[0.98] disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <RefreshCw className="w-4 h-4 animate-spin" /> Preparing Audit...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              Request a Growth Blueprint
                              <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                          )}
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-8 space-y-4"
                      >
                        <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white">Blueprint Request Lodged!</h3>
                        <p className="font-sans text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                          Thanks, <span className="text-white font-semibold">{formData.name}</span>. Our growth architects are auditing <span className="text-white underline">{formData.url}</span>. You will receive an email checklist at <span className="text-white font-semibold">{formData.email}</span> within 24 hours.
                        </p>
                        <button
                          onClick={handleResetForm}
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors"
                        >
                          <RefreshCw className="w-3.5 h-3.5" /> Start another audit
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="assessment-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 text-left"
                  >
                    <div className="space-y-4">
                      {/* Input range slider 1: Sessions */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Monthly Web Sessions</label>
                          <span className="font-mono text-sm font-semibold text-white bg-zinc-950 px-2 py-0.5 rounded border border-white/5">
                            {sessions.toLocaleString()}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="1000"
                          max="100000"
                          step="1000"
                          value={sessions}
                          onChange={(e) => setSessions(Number(e.target.value))}
                          className="w-full h-1 bg-zinc-950 rounded appearance-none cursor-pointer accent-blue-500"
                        />
                      </div>

                      {/* Input range slider 2: Current Conv Rate */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Current Conversion Rate (%)</label>
                          <span className="font-mono text-sm font-semibold text-white bg-zinc-950 px-2 py-0.5 rounded border border-white/5">
                            {currentConv}%
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.1"
                          max="2.0"
                          step="0.1"
                          value={currentConv}
                          onChange={(e) => setCurrentConv(Number(e.target.value))}
                          className="w-full h-1 bg-zinc-950 rounded appearance-none cursor-pointer accent-blue-500"
                        />
                      </div>

                      {/* Input range slider 3: ACV */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Average Contract Value ($)</label>
                          <span className="font-mono text-sm font-semibold text-white bg-zinc-950 px-2 py-0.5 rounded border border-white/5">
                            ${acv.toLocaleString()}
                          </span>
                        </div>
                        <input
                          type="range"
                          min="2000"
                          max="100000"
                          step="2000"
                          value={acv}
                          onChange={(e) => setAcv(Number(e.target.value))}
                          className="w-full h-1 bg-zinc-950 rounded appearance-none cursor-pointer accent-blue-500"
                        />
                      </div>
                    </div>

                    {/* Outcome projection table */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                      <div className="p-3.5 rounded bg-zinc-950 border border-white/5 space-y-1">
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Current Pipeline</p>
                        <p className="text-base sm:text-lg font-bold text-zinc-300">${currentPipeline.toLocaleString()}</p>
                        <p className="text-[10px] font-mono text-zinc-500">{currentLeads} qualified leads</p>
                      </div>

                      <div className="p-3.5 rounded bg-blue-950/20 border border-blue-900/50 space-y-1 relative overflow-hidden">
                        <div className="absolute top-1 right-1">
                          <Sparkles className="w-3 h-3 text-blue-400 animate-pulse" />
                        </div>
                        <p className="text-[10px] font-mono text-blue-400 uppercase tracking-wider font-semibold">Projected Pipeline</p>
                        <p className="text-base sm:text-lg font-bold text-white">${targetPipeline.toLocaleString()}</p>
                        <p className="text-[10px] font-mono text-blue-400">{targetLeads} leads @ {targetConv}%</p>
                      </div>
                    </div>

                    {/* Massive potential increase bar */}
                    <div className="p-4 rounded bg-zinc-950 border border-white/5 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Potential Uplift</p>
                        <p className="text-xl font-extrabold text-green-400 font-display">+${pipelineUplift.toLocaleString()}</p>
                      </div>
                      <button
                        onClick={() => setActiveTab("blueprint")}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded transition-all cursor-pointer shadow-md shadow-blue-500/10 uppercase tracking-wider"
                      >
                        Capture This Uplift
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
