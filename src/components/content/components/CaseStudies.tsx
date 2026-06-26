"use client";

import { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { Sparkles, Calendar, ArrowRight, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudiesProps {
  onRequestBlueprint: () => void;
}

export default function CaseStudies({ onRequestBlueprint }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (
    <section id="case-studies-section" className="py-16 md:py-24 border-t border-b border-zinc-900 bg-zinc-950/30 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-blue-950/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-left">
          <div className="space-y-2">
            <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase font-bold block">CLIENT CASE STUDIES</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Content Marketing results we can put a number on.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl">
              Real pipeline contribution, organic visibility, and contract source values mapped straight from customer CRM dashboards.
            </p>
          </div>
          <button 
            id="see-all-cases-cta"
            onClick={onRequestBlueprint}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono font-bold text-blue-400 hover:text-blue-350 border-b border-blue-500/25 pb-1 transition-colors cursor-pointer"
          >
            <span>See Case Studies Walkthrough</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        {/* Dynamic Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Selector Panel (3 tabs) */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-3">
            {CASE_STUDIES.map((c, idx) => (
              <button
                id={`case-tab-${idx}`}
                key={c.id}
                onClick={() => setSelectedCase(idx)}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  selectedCase === idx
                    ? 'bg-[#0d0d0e] border-zinc-850 shadow-md shadow-blue-500/5'
                    : 'bg-zinc-950/60 border-zinc-900/65 opacity-60 hover:opacity-100 hover:border-zinc-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[9px] text-blue-400 uppercase tracking-widest font-bold">
                    {c.clientType}
                  </span>
                  <div className="flex items-center space-x-1 text-[9px] text-zinc-500 font-mono">
                    <Calendar className="h-2.5 w-2.5" />
                    <span>{c.timeline}</span>
                  </div>
                </div>
                <h4 className={`font-sans text-xs sm:text-sm font-bold transition-colors ${selectedCase === idx ? 'text-white' : 'text-zinc-400'}`}>
                  {c.industry.split(' · ')[0]} Case study
                </h4>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-500">Outcome:</span>
                  <span className="font-mono text-xs text-emerald-400 font-bold">{c.metric}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Detailed Display Card */}
          <div className="lg:col-span-8 bg-[#0d0d0e]/95 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between text-left shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCase}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top industry label */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span className="font-mono text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">{CASE_STUDIES[selectedCase].industry}</span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 font-bold">{CASE_STUDIES[selectedCase].timeline} Study</span>
                  </div>

                  {/* Large result headline */}
                  <h3 className="font-sans text-xl md:text-2xl font-black text-white leading-snug">
                    "{CASE_STUDIES[selectedCase].headline}"
                  </h3>

                  {/* Challenge & Strategy block */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                    <div className="bg-zinc-950/60 rounded-xl p-4 border border-zinc-900/60">
                      <span className="font-mono text-[9px] text-rose-400 uppercase tracking-widest font-bold">The Challenge</span>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-1.5">{CASE_STUDIES[selectedCase].challenge}</p>
                    </div>
                    <div className="bg-zinc-950/60 rounded-xl p-4 border border-zinc-900/60">
                      <span className="font-mono text-[9px] text-blue-400 uppercase tracking-widest font-bold">Our Solution Strategy</span>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-1.5">{CASE_STUDIES[selectedCase].strategy}</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Dashboard bottom */}
                <div className="pt-6 mt-6 border-t border-zinc-900 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Huge focal metric */}
                  <div className="space-y-0.5">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase block font-semibold">ATTRIBUTED CORE RESULT</span>
                    <div className="flex items-baseline space-x-1.5">
                      <span className="font-mono text-3xl md:text-4xl font-black text-emerald-400">{CASE_STUDIES[selectedCase].metric}</span>
                      <span className="font-sans text-xs text-zinc-300 font-bold">{CASE_STUDIES[selectedCase].metricLabel}</span>
                    </div>
                  </div>

                  {/* Secondary stats block */}
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    {CASE_STUDIES[selectedCase].stats.map((stat, sIdx) => (
                      <div key={sIdx} className="bg-zinc-950/40 px-3.5 py-1.5 rounded-lg border border-zinc-900 text-left">
                        <span className="text-[9px] text-zinc-500 font-mono block uppercase font-semibold">{stat.label}</span>
                        <span className="font-mono text-xs md:text-sm text-white font-extrabold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
