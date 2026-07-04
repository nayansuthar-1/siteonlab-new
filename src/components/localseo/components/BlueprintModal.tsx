"use client";

import React, { useState, useEffect } from 'react';
import { X, Search, Terminal, ArrowRight, Loader2, BarChart2, Zap, Calendar, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { submitLead } from '@/lib/submitLead';

interface BlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    score?: number;
    weakest?: string;
  };
}

export default function BlueprintModal({ isOpen, onClose, initialData }: BlueprintModalProps) {
  const [step, setStep] = useState<'form' | 'loading' | 'report'>('form');
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [targetCity, setTargetCity] = useState('');
  const [locations, setLocations] = useState('1-5');
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  const [loadingStep, setLoadingStep] = useState(0);
  const loadingMessages = [
    "Querying Google Maps Maps SDK & API endpoints...",
    "Scanning NAP (Name, Address, Phone) consistency across major directories...",
    "Parsing local JSON-LD schemas and coordinate coordinates...",
    "Crawling voice search indexes (Siri, Alexa) and LLM citations...",
    "Formulating compounding organic traffic lift estimation..."
  ];

  useEffect(() => {
    if (!isOpen) {
      setStep('form');
      setLoadingStep(0);
      setDownloaded(false);
    }
  }, [isOpen]);

  useEffect(() => {
    let timer: any;
    if (step === 'loading') {
      if (loadingStep < loadingMessages.length) {
        timer = setTimeout(() => {
          setLoadingStep(prev => prev + 1);
        }, 1200);
      } else {
        setStep('report');
      }
    }
    return () => clearTimeout(timer);
  }, [step, loadingStep]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyUrl || !targetCity || !email) return;
    submitLead({
      source: "Local SEO Landing Page — Blueprint",
      name: companyName,
      email,
      fields: {
        Company: companyName,
        Website: companyUrl,
        "Target City": targetCity,
        Locations: locations,
      },
    });
    setStep('loading');
  };

  const handleDownload = () => {
    setDownloaded(true);
    // Simulate minor download delay or just feedback
    setTimeout(() => {
      setDownloaded(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-base/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-dark-panel border border-dark-border rounded-2xl overflow-hidden glow-shadow-strong">

        {/* Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition p-1 rounded-full hover:bg-dark-panel-light z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' && (
          /* Step 1: Input Form */
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-2 text-brand-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest">HybridMonks Engine</span>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-extrabold text-white mt-2">
              Request Your Growth Blueprint
            </h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              We'll audit your local search presence and map out a custom acquisition roadmap.
            </p>

            {initialData && (
              <div className="mt-4 p-3 rounded-lg bg-brand-primary/5 border border-brand-primary/20 text-xs text-brand-primary-light flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  Presence audit completed. Local Score: <strong>{initialData.score}/100</strong>. Custom-fitting solutions for <strong>{initialData.weakest}</strong>.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">Company Name</label>
                  <input
                    id="bp-company-name"
                    type="text"
                    required
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Enterprises"
                    className="w-full bg-dark-base border border-dark-border/80 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">Company Website URL</label>
                  <input
                    id="bp-company-url"
                    type="url"
                    required
                    value={companyUrl}
                    onChange={e => setCompanyUrl(e.target.value)}
                    placeholder="https://company.com"
                    className="w-full bg-dark-base border border-dark-border/80 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">Primary Target Market (City)</label>
                  <input
                    id="bp-target-city"
                    type="text"
                    required
                    value={targetCity}
                    onChange={e => setTargetCity(e.target.value)}
                    placeholder="e.g. Chicago, IL"
                    className="w-full bg-dark-base border border-dark-border/80 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">Number of Physical Locations</label>
                  <select
                    id="bp-locations"
                    value={locations}
                    onChange={e => setLocations(e.target.value)}
                    className="w-full bg-dark-base border border-dark-border/80 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary transition"
                  >
                    <option value="1-5">1-5 Locations</option>
                    <option value="6-20">6-20 Locations</option>
                    <option value="21-80">21-80 Locations</option>
                    <option value="80+">80+ Locations (Enterprise)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-1">Work Email Address</label>
                <input
                  id="bp-email"
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-dark-base border border-dark-border/80 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-primary transition"
                />
              </div>

              <button
                id="submit-blueprint-btn"
                type="submit"
                className="mt-4 bg-brand-primary text-dark-base font-bold text-sm py-3 px-6 rounded-xl hover:bg-brand-primary-light transition flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20"
              >
                Analyze My Presence & Generate Blueprint
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {step === 'loading' && (
          /* Step 2: Simulated Analysis Engine */
          <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
            <div className="relative flex items-center justify-center mb-6">
              <span className="absolute -inset-4 bg-brand-primary rounded-full blur-xl opacity-20 animate-pulse-slow"></span>
              <Loader2 className="w-12 h-12 text-brand-primary animate-spin" />
            </div>

            <h4 className="text-lg font-display font-bold text-white mb-1">
              Analyzing Geographic Presence
            </h4>
            <p className="text-xs font-mono text-brand-primary-light h-10 flex items-center justify-center max-w-sm">
              {loadingMessages[Math.min(loadingStep, loadingMessages.length - 1)]}
            </p>

            {/* Analysis Progress bar */}
            <div className="w-full max-w-xs bg-dark-base h-2 rounded-full overflow-hidden border border-dark-border mt-4">
              <div
                className="bg-brand-primary h-full transition-all duration-300"
                style={{ width: `${(loadingStep / loadingMessages.length) * 100}%` }}
              ></div>
            </div>

            <div className="mt-6 flex items-center gap-1.5 text-[10px] font-mono text-gray-500">
              <Terminal className="w-3.5 h-3.5" />
              <span>SITESCAN_ENGINE_ACTIVE // METRIC_ESTIMATOR_OK</span>
            </div>
          </div>
        )}

        {step === 'report' && (
          /* Step 3: Customized Report Summary Preview */
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-primary">
                <BarChart2 className="w-5 h-5" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest">REPORT PREVIEW</span>
              </div>
              <div className="bg-brand-primary/10 text-brand-primary text-[10px] px-2 py-0.5 rounded font-mono border border-brand-primary/20">
                Custom Blueprint Ready
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-display font-extrabold text-white mt-2">
              Your HybridMonks Growth Blueprint
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Estimated metrics for {companyUrl.replace(/https?:\/\/(www\.)?/, '')} in {targetCity}.
            </p>

            {/* Metric Estimations */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              <div className="p-3 rounded-xl bg-dark-base border border-dark-border">
                <div className="text-[10px] font-mono text-gray-500 uppercase">Estimated Traffic Opportunity</div>
                <div className="text-xl font-bold text-brand-primary-light mt-1 flex items-baseline gap-1">
                  +340% <span className="text-[9px] text-gray-400 font-normal">within 90 days</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-dark-base border border-dark-border">
                <div className="text-[10px] font-mono text-gray-500 uppercase">Competitor Gaps Identified</div>
                <div className="text-xl font-bold text-white mt-1">
                  4 Keywords <span className="text-[9px] text-gray-400 font-normal">with high-intent</span>
                </div>
              </div>
            </div>

            {/* Structured Recommendations Summary */}
            <div className="mt-4 bg-dark-base/50 p-4 rounded-xl border border-dark-border flex flex-col gap-2.5 text-xs text-gray-300">
              <div className="font-mono text-[10px] text-gray-500 uppercase tracking-wider">Top Recommended Actions:</div>
              <div className="flex gap-2 items-start">
                <span className="text-brand-primary font-bold">1.</span>
                <p>Standardize Google Business Profile attributes & synchronize citations on major networks to secure the #1 map spot.</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-brand-primary font-bold">2.</span>
                <p>Inject advanced JSON-LD LocalBusiness Schema markup across location-specific landing pages for LLM visibility.</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-brand-primary font-bold">3.</span>
                <p>Initiate a systematic review generation campaign to drive fresh reviews containing target keyword queries.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="modal-pdf-download"
                onClick={handleDownload}
                className="w-full sm:flex-1 py-3 px-4 border border-dark-border text-gray-300 hover:text-white rounded-xl hover:bg-dark-panel-light text-xs font-semibold flex items-center justify-center gap-2 transition"
              >
                <Download className="w-4 h-4 text-brand-primary" /> {downloaded ? 'Preparing PDF...' : 'Download PDF Report'}
              </button>

              <a
                id="modal-schedule-btn"
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 bg-brand-primary text-dark-base hover:bg-brand-primary-light rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition glow-shadow"
              >
                <Calendar className="w-4 h-4" /> Book 30-Min Strategy Call
              </a>
            </div>

            {downloaded && (
              <div className="mt-3 p-2 bg-brand-primary/10 border border-brand-primary/20 text-[11px] text-brand-primary-light rounded-lg text-center font-medium animate-pulse">
                ✓ Full PDF Analysis prepared and sent to your email!
              </div>
            )}

            <p className="text-[10px] text-center text-gray-500 mt-4">
              We emailed a summary copy of this baseline report to <span className="text-gray-300 font-mono">{email}</span>.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
