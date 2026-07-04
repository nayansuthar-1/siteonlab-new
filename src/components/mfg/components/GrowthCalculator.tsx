"use client";

import React, { useState } from "react";
import { DollarSign, Percent, Users, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { submitLead } from "@/lib/submitLead";

export default function GrowthCalculator() {
  // Calculator States
  const [acv, setAcv] = useState<number>(150000); // Avg Contract Value
  const [traffic, setTraffic] = useState<number>(3000); // Monthly Traffic
  const [convRate, setConvRate] = useState<number>(0.5); // Web Conversion (0.5%)
  const [closeRate, setCloseRate] = useState<number>(15); // Sales Close Rate (15%)

  // Lead States
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [capabilities, setCapabilities] = useState<string>("CNC Machining");

  // Calculations
  const currentRfqs = Math.round(traffic * (convRate / 100));
  const currentContracts = Math.round(currentRfqs * (closeRate / 100));
  const currentAnnualRevenue = currentContracts * acv * 12;

  // Optimized metrics with HybridMonks (conservative estimates)
  // 1. Traffic increases by 50%
  // 2. Conversion rate lifts from e.g. 0.5% to 1.8%
  // 3. Close rate remains steady or improves slightly
  const solTraffic = Math.round(traffic * 1.5);
  const solConvRate = 1.8; // Targeted average conversion with custom RFQ portals
  const solRfqs = Math.round(solTraffic * (solConvRate / 100));
  const solContracts = Math.round(solRfqs * (closeRate / 100));
  const solAnnualRevenue = solContracts * acv * 12;

  const annualLift = solAnnualRevenue - currentAnnualRevenue;

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      submitLead({
        source: "Manufacturing Landing Page — Growth Calculator",
        email,
        fields: {
          Capabilities: capabilities,
          "Avg. Contract Value": `$${acv.toLocaleString()}`,
          "Monthly Traffic": String(traffic),
          "Projected Annual Lift": `$${annualLift.toLocaleString()}`,
        },
      });
      setSubmitted(true);
    }
  };

  return (
    <section id="estimator" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest">
            Interactive Tool
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industrial RFQ Pipeline & Growth Estimator
          </h2>
          <p className="text-slate-400 text-sm font-sans">
            Input your shop floor commercial metrics to calculate the massive revenue lift achievable by upgrading to a modern B2B growth system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Controls Panel (Col-span-5) */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800/50 p-8 rounded-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800 text-slate-400 font-mono text-xs">
                <Info className="w-4 h-4 text-blue-500" />
                <span>COMMERCIAL METRIC INPUTS</span>
              </div>

              {/* Slider 1: Average Contract Value */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Avg. Contract Value (ACV)</span>
                  <span className="text-blue-400 font-bold">${acv.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="10000" 
                  max="1000000" 
                  step="10000"
                  value={acv}
                  onChange={(e) => setAcv(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-950 cursor-pointer"
                />
              </div>

              {/* Slider 2: Monthly Web Traffic */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Monthly Website Traffic</span>
                  <span className="text-blue-400 font-bold">{traffic.toLocaleString()} visitors</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-950 cursor-pointer"
                />
              </div>

              {/* Slider 3: Conversion Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Website Conversion (RFQ Rate)</span>
                  <span className="text-blue-400 font-bold">{convRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="0.1" 
                  max="5.0" 
                  step="0.1"
                  value={convRate}
                  onChange={(e) => setConvRate(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-950 cursor-pointer"
                />
              </div>

              {/* Slider 4: Close Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Sales Close Rate (RFQ to Win)</span>
                  <span className="text-blue-400 font-bold">{closeRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="50" 
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-950 cursor-pointer"
                />
              </div>
            </div>

            <div className="pt-6 text-[10px] font-mono text-slate-500 border-t border-slate-800/80 mt-6">
              * Calculations use typical industry standards for AS9100 Precision machining and Contract OEM shops.
            </div>
          </div>

          {/* Results dashboard & Lead capture (Col-span-7) */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/50 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-950/20 blur-[60px] rounded-full"></div>

            <div className="space-y-8 relative z-10">
              
              {/* Financial Lift Counter */}
              <div className="p-6 rounded-xl bg-blue-950/20 border border-slate-700/50 text-center space-y-1">
                <span className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest block">POTENTIAL SOURCED PIPELINE LIFT</span>
                <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                  +${annualLift.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 font-sans">
                  Estimated annual revenue increase based on targeted SEO + High-Converting CAD RFQ flows.
                </p>
              </div>

              {/* Grid Comparison */}
              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-semibold">CURRENT BASELINE</span>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Monthly RFQs:</span>
                      <span className="text-white font-mono font-bold">{currentRfqs}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Annual Contracts:</span>
                      <span className="text-white font-mono font-bold">{currentContracts * 12}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Sourced Revenue:</span>
                      <span className="text-zinc-300 font-mono font-bold">${currentAnnualRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-semibold">âœ¨ HYBRIDMONKS ENGINE</span>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Optimized RFQs:</span>
                      <span className="text-white font-mono font-bold">{solRfqs} <span className="text-blue-400 text-[10px]">(+{solRfqs - currentRfqs})</span></span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Annual Contracts:</span>
                      <span className="text-white font-mono font-bold">{solContracts * 12} <span className="text-blue-400 text-[10px]">(+{(solContracts - currentContracts) * 12})</span></span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Optimized Revenue:</span>
                      <span className="text-blue-400 font-mono font-bold">${solAnnualRevenue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>              {/* Lead Capture Module */}
              <div className="pt-6 border-t border-slate-800/60">
                {submitted ? (
                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-center space-y-2">
                    <div className="text-blue-400 text-sm font-bold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                      <span>Blueprint Request Initiated</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      We have prepared your preliminary estimation report. A Senior B2B Architect will reach out to <strong>{email}</strong> to coordinate a walkthrough.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="text-xs text-slate-300 font-semibold font-sans">
                      Request a detailed PDF Growth Report and validation blueprint:
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <select 
                        id="calculator-capability-select"
                        value={capabilities} 
                        onChange={(e) => setCapabilities(e.target.value)}
                        className="p-3 bg-slate-950 text-xs text-slate-300 rounded border border-slate-800 focus:outline-none focus:border-blue-500 font-mono"
                      >
                        <option value="CNC Machining">CNC Machining / Mold</option>
                        <option value="OEM Assemblies">OEM Assemblies</option>
                        <option value="Contract Manufacturing">Contract Mfg</option>
                        <option value="Industrial Logistics">Industrial Logistics</option>
                      </select>

                      <input 
                        id="calculator-email-input"
                        type="email" 
                        required 
                        placeholder="Enter your executive email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 p-3 bg-slate-950 text-xs text-slate-300 rounded border border-slate-800 focus:outline-none focus:border-blue-500 font-mono text-white placeholder-slate-500"
                      />

                      <button
                        id="calculator-submit-btn"
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold font-sans px-5 py-3 rounded flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Calculate Lift</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
