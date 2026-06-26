"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronRight, 
  CheckCircle2, 
  TrendingUp, 
  Briefcase, 
  DollarSign, 
  Settings, 
  Play, 
  Sparkles,
  FileText,
  Loader2
} from 'lucide-react';

interface ROIBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ROIBlueprintModal({ isOpen, onClose }: ROIBlueprintModalProps) {
  // Calculator States
  const [acv, setAcv] = useState<number>(60000); // Default $60k
  const [targetAccounts, setTargetAccounts] = useState<number>(150); // Default 150 accounts
  const [winRate, setWinRate] = useState<number>(4); // Default 4%

  // Lead States
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBlueprint, setGeneratedBlueprint] = useState<boolean>(false);

  // Calculations
  const totalAddressablePipeline = targetAccounts * acv;
  const projectedAccountsWon = Math.round((targetAccounts * (winRate / 100)) * 10) / 10;
  const projectedRevenue = Math.round(projectedAccountsWon * acv);
  const estimatedROAS = acv > 0 ? Math.round((projectedRevenue / (acv * 0.45)) * 10) / 10 : 0;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !workEmail.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedBlueprint(true);
    }, 2500);
  };

  const handleReset = () => {
    setGeneratedBlueprint(false);
    setCompanyName('');
    setWorkEmail('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0E0E11] border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-white/5 p-1.5 rounded-full border border-white/5"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Side: ROI Calculator Inputs */}
          <div className="w-full md:w-1/2 p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/5 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                ROI Calculator
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Model Your ABM Pipeline Potential
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Adjust sliders below based on your average deal size and sales metrics to model the impact of a tailored SiteOnLab ABM program.
            </p>

            <div className="space-y-6">
              {/* Slider 1: ACV */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="text-gray-300 font-medium flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5 text-blue-400" />
                    Average Deal Size (ACV)
                  </label>
                  <span className="font-mono text-blue-400 font-bold bg-blue-500/10 px-2.5 py-1 rounded">
                    ${acv.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min={15000} 
                  max={250000} 
                  step={5000}
                  value={acv} 
                  onChange={(e) => setAcv(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>$15k</span>
                  <span>$100k</span>
                  <span>$250k+</span>
                </div>
              </div>

              {/* Slider 2: Target Accounts */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="text-gray-300 font-medium flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                    Number of Target Accounts
                  </label>
                  <span className="font-mono text-blue-400 font-bold bg-blue-500/10 px-2.5 py-1 rounded">
                    {targetAccounts} accounts
                  </span>
                </div>
                <input 
                  type="range" 
                  min={20} 
                  max={500} 
                  step={10}
                  value={targetAccounts} 
                  onChange={(e) => setTargetAccounts(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>20 accounts</span>
                  <span>250</span>
                  <span>500 accounts</span>
                </div>
              </div>

              {/* Slider 3: Win Rate */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="text-gray-300 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    Target Account Close Rate
                  </label>
                  <span className="font-mono text-blue-400 font-bold bg-blue-500/10 px-2.5 py-1 rounded">
                    {winRate}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={15} 
                  step={0.5}
                  value={winRate} 
                  onChange={(e) => setWinRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                  <span>1% (Conservative)</span>
                  <span>7.5%</span>
                  <span>15% (Aggressive)</span>
                </div>
              </div>
            </div>

            {/* Program ROI outputs preview */}
            <div className="bg-[#0A0A0C] border border-white/5 p-4 rounded-xl mt-6">
              <span className="text-[10px] text-gray-500 font-mono block uppercase mb-3">Projected ABM Growth Output</span>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 block">Total Pipeline Value</span>
                  <span className="text-lg font-mono font-bold text-white">${totalAddressablePipeline.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block">Projected Revenue Win</span>
                  <span className="text-lg font-mono font-bold text-emerald-400">${projectedRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Lead capture / Generated blueprint view */}
          <div className="w-full md:w-1/2 p-6 md:p-8 bg-[#121216] flex flex-col justify-center overflow-y-auto">
            {!generatedBlueprint ? (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block uppercase mb-1">Growth Program Delivery</span>
                  <h4 className="font-display font-bold text-xl text-white">
                    Unlock Your Tailored Growth Blueprint
                  </h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Submit your enterprise domain info. Our system will analyze your parameters and generate a structured custom orchestration roadmap detailing Tier-1 playbook pacing, channel mix allocations, and immediate pipeline priorities.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-300 font-medium mb-1.5">Company / Target Domain</label>
                    <input 
                      type="text" 
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Cybersecurity"
                      className="w-full bg-[#0E0E11] border border-white/5 rounded-lg px-3.5 py-2.5 text-xs text-gray-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                      required
                      disabled={isGenerating}
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 font-medium mb-1.5">Work Email Address</label>
                    <input 
                      type="email" 
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-[#0E0E11] border border-white/5 rounded-lg px-3.5 py-2.5 text-xs text-gray-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                      required
                      disabled={isGenerating}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg transition active:scale-95 disabled:opacity-50"
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        Analyzing Target Parameters...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-blue-200" />
                        Generate My Growth Blueprint
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[10px] text-gray-500 text-center">
                  By clicking, you consent to receive direct revenue analysis and suggestions from SiteOnLab. No credit card required.
                </p>
              </div>
            ) : (
              // Structured Blueprint PDF Output Mock
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-2.5 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-display font-bold text-sm">Blueprint Successfully Compiled!</span>
                </div>

                <div className="bg-[#0A0A0C] border border-white/5 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-bold text-white font-display">SOL-ABM-{companyName.toUpperCase().replace(/\s+/g, '')}</span>
                    </div>
                    <span className="text-[9px] font-mono bg-blue-950 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded">
                      Enterprise Grade
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block font-mono">1. Account Intent Alignment</span>
                      <p className="text-gray-300 mt-0.5 leading-relaxed">
                        With <span className="text-blue-400 font-bold">{targetAccounts} accounts</span> in your ICP, we recommend a 3-tier structure: <span className="font-semibold text-white">Tier 1: 15 Core Accounts</span> (high ACV, customized landing hubs), <span className="font-semibold text-white">Tier 2: 45 Accounts</span> (mid ACV, industry specific), and <span className="font-semibold text-white">Tier 3: 90 Accounts</span> (IP ads).
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block font-mono">2. Projected Pipeline Outputs</span>
                      <p className="text-gray-300 mt-0.5 leading-relaxed">
                        Assuming your <span className="text-blue-400 font-semibold">${acv.toLocaleString()} ACV</span>, achieving a <span className="text-blue-400 font-semibold">{winRate}% win rate</span> will deliver <span className="text-emerald-400 font-bold">{projectedAccountsWon} net-new accounts won</span>, totaling <span className="text-emerald-400 font-bold">${projectedRevenue.toLocaleString()} in added annual revenue</span>.
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] text-gray-500 uppercase block font-mono">3. Immediate Orchestration Plays</span>
                      <ul className="list-disc pl-4 space-y-1 text-gray-300 mt-1">
                        <li>IP-based display advertising targeting the decision makers of those {targetAccounts} accounts.</li>
                        <li>Personalized dynamic content experiences tailored specifically to high-intent buyer personas.</li>
                        <li>Sales playbooks synced to real-time intent spikes and reverse-IP visits.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={handleReset}
                    className="flex-1 px-4 py-2.5 bg-[#0A0A0C] text-gray-300 hover:text-white rounded-lg text-xs font-semibold hover:bg-blue-950 border border-blue-500/20 transition"
                  >
                    Adjust Parameters
                  </button>
                  <button 
                    onClick={onClose}
                    className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shadow-md"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
