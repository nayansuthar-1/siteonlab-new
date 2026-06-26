"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  FileText, 
  BarChart, 
  TrendingUp, 
  Lock 
} from 'lucide-react';

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlueprintModal({ isOpen, onClose }: BlueprintModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    icp: 'B2B SaaS',
    trafficRange: '5k - 20k',
    blocker: 'traffic_not_converting',
    email: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate real-time growth scorecard calculation
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1500);
  };

  const getCustomRecommendations = (blocker: string) => {
    switch(blocker) {
      case 'traffic_not_converting':
        return [
          { title: "Commercial Competitor Compares", desc: "Build comparison 'vs' and 'alternative' articles targeting ready-to-buy decision makers." },
          { title: "Interactive Value Calculators", desc: "Embed custom widgets to let prospects simulate their ROI instantly on page." },
          { title: "Lead Magnet Alignment", desc: "Swap generic ebooks for hyper-relevant SOP checklists specific to each blog category." }
        ];
      case 'no_organic_traffic':
        return [
          { title: "Topic Cluster Blueprint", desc: "Launch 3 comprehensive clusters focusing on your core product capabilities with at least 8 child nodes each." },
          { title: "Core Web Vitals Revamp", desc: "Accelerate server response time and simplify asset payloads to lift search indexing rates by 40%." },
          { title: "Internal Link Restructure", desc: "Funnel link juice from high-authority homepage to critical commercial pillar hubs." }
        ];
      case 'not_cited_in_ai':
        return [
          { title: "GEO Direct-Answer Formatting", desc: "Restructure article headings to include clear 60-word conversational summaries that AI LLM scrapers can quote directly." },
          { title: "Semantic Schema Markup", desc: "Implement rich JSON-LD Article and FAQ schemas to facilitate indexing by LLM engines." },
          { title: "Proprietary Original Surveys", desc: "Generate original data that Perplexity and Gemini actively cite as primary information sources." }
        ];
      default:
        return [
          { title: "Attribution Dashboard", desc: "Configure multi-touch models inside HubSpot CRM to map content consumption directly to closed-won deals." }
        ];
    }
  };

  const recommendations = getCustomRecommendations(formData.blocker);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-[#0d0d0e] p-6 md:p-8 shadow-2xl text-zinc-100 z-10 overflow-hidden"
          >
            {/* Ambient glows inside modal */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-zinc-800 pb-4 mb-6 z-10">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Sparkles className="h-4.5 w-4.5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-white">SiteOnLab Growth Blueprint</h3>
                  <p className="font-sans text-xs text-zinc-400">Custom Content Strategy Blueprint & Scorecard</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="rounded-full p-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Step 1: Input Form */}
            {step === 1 ? (
              <form onSubmit={handleSubmit} className="relative space-y-4 z-10">
                <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-3 text-zinc-300 text-xs leading-relaxed flex items-start space-x-2">
                  <FileText className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Instant Analysis:</strong> Fill out the profile below. Our custom strategy engine will generate your preliminary B2B content performance scorecard and action plan on the next screen.
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Company Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. StackFlow"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Company Website</label>
                    <input 
                      type="url" 
                      required
                      placeholder="e.g. https://stackflow.io"
                      value={formData.website}
                      onChange={(e) => setFormData({...formData, website: e.target.value})}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Target ICP / Industry</label>
                    <select 
                      value={formData.icp}
                      onChange={(e) => setFormData({...formData, icp: e.target.value})}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="B2B SaaS">B2B SaaS</option>
                      <option value="Cybersecurity">Cybersecurity / DevSecOps</option>
                      <option value="IT Consulting & MSP">IT Consulting & MSP</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Fintech">Fintech / Enterprise Finance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Estimated Monthly Blog Traffic</label>
                    <select 
                      value={formData.trafficRange}
                      onChange={(e) => setFormData({...formData, trafficRange: e.target.value})}
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="0 - 5k">Under 5,000 visitors / mo</option>
                      <option value="5k - 20k">5,000 - 20,000 visitors / mo</option>
                      <option value="20k - 100k">20,000 - 100,000 visitors / mo</option>
                      <option value="100k+">Over 100,000 visitors / mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Primary Growth Blocker</label>
                  <select 
                    value={formData.blocker}
                    onChange={(e) => setFormData({...formData, blocker: e.target.value})}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="traffic_not_converting">We have decent traffic, but it is not converting into pipeline / demos</option>
                    <option value="no_organic_traffic">Our organic traffic is low and we struggle to rank for high-intent keywords</option>
                    <option value="not_cited_in_ai">We want to rank and get recommended inside ChatGPT, Gemini, and Perplexity</option>
                    <option value="cannot_prove_roi">We publish content, but we have no way to prove sales pipeline/ROI contribution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">Your Business Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="e.g. sarah@stackflow.io"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3.5 py-2 text-sm text-white placeholder-zinc-700 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-zinc-800">
                  <div className="flex items-center space-x-1.5 text-xs text-zinc-500">
                    <Lock className="h-3.5 w-3.5 text-blue-500/70" />
                    <span>Your data is strictly confidential.</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-sans text-xs font-bold py-2.5 px-5 rounded-lg shadow-lg shadow-blue-500/10 active:scale-95 transition-all duration-150 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-3 w-3 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Analyzing Core Channels...</span>
                      </>
                    ) : (
                      <>
                        <span>Generate My Blueprint</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              // Step 2: Instant Custom Analysis Output
              <motion.div 
                key="step-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative space-y-5 z-10"
              >
                {/* Success Banner */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-start space-x-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-emerald-400">Blueprint Successfully Seeded!</h4>
                    <p className="font-sans text-xs text-zinc-300 mt-1">
                      Our B2B Growth Architects have received your data and are preparing your full PDF Strategy Blueprint. We've sent a calendar invite to <strong>{formData.email}</strong> for your 1-on-1 walkthrough.
                    </p>
                  </div>
                </div>

                {/* Scorecard Visualization */}
                <div className="border border-zinc-800 rounded-xl p-4 bg-zinc-950/80">
                  <span className="font-mono text-[9px] text-blue-400 uppercase tracking-widest font-bold block mb-2">PRELIMINARY CHANNELS SCORECARD // {formData.website.replace('https://', '')}</span>
                  
                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800/60">
                      <span className="font-sans text-[9px] text-zinc-500 block uppercase font-semibold">Crawl Health</span>
                      <span className="font-mono text-lg font-bold text-amber-400">62 / 100</span>
                      <span className="text-[8px] text-zinc-400 block mt-0.5">Slow Indexing</span>
                    </div>
                    <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800/60">
                      <span className="font-sans text-[9px] text-zinc-500 block uppercase font-semibold">AI Cite Readiness</span>
                      <span className="font-mono text-lg font-bold text-rose-500">28 / 100</span>
                      <span className="text-[8px] text-zinc-400 block mt-0.5">Missing Schemas</span>
                    </div>
                    <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800/60">
                      <span className="font-sans text-[9px] text-zinc-500 block uppercase font-semibold">Intent Alignment</span>
                      <span className="font-mono text-lg font-bold text-amber-500">45 / 100</span>
                      <span className="text-[8px] text-zinc-400 block mt-0.5">Top-Funnel Heavy</span>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="space-y-3">
                    <span className="font-sans text-xs font-bold text-zinc-200 block border-b border-zinc-850 pb-1.5">Your Recommended Growth Checklist:</span>
                    
                    <div className="space-y-2">
                      {recommendations.map((rec, i) => (
                        <div key={i} className="flex items-start space-x-2.5">
                          <span className="font-mono text-xs text-blue-400 font-bold shrink-0 mt-0.5">[0{i+1}]</span>
                          <div>
                            <h5 className="font-sans text-xs font-bold text-zinc-200">{rec.title}</h5>
                            <p className="font-sans text-[11px] text-zinc-400 leading-normal mt-0.5">{rec.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-850 flex justify-end space-x-2">
                  <button
                    onClick={onClose}
                    className="bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-300 font-sans text-xs font-bold py-2 px-4 rounded-lg cursor-pointer"
                  >
                    Close & Walkthrough
                  </button>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center space-x-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-sans text-xs font-bold py-2 px-4 rounded-lg shadow-lg active:scale-95 transition-all duration-150"
                  >
                    <span>Instant Calendar Booking</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
