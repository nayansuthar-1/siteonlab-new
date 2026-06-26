"use client";

import { useState } from 'react';
import { PROCESS_STEPS } from '../data';
import { Calendar, Layers, CheckSquare, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process-section" className="py-16 md:py-24 border-t border-b border-zinc-900 bg-zinc-950/20 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-emerald-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase font-bold">OUR ENGAGEMENT PIPELINE</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            From blank slate to compounding enterprise pipeline in 90 days.
          </h2>
          <p className="font-sans text-sm text-zinc-400 max-w-2xl mx-auto mt-3">
            Our publishing cycles run on a clear, high-impact sprint structure. No open-ended questions, just highly organized execution with deliverables you can see.
          </p>
        </div>

        {/* Process Timeline Selection Rails */}
        <div className="relative mb-12">
          {/* Horizontal Line connector */}
          <div className="absolute left-0 right-0 top-[22px] h-[2px] bg-zinc-900 hidden md:block" />
          <div 
            className="absolute left-0 top-[22px] h-[2px] bg-blue-500 transition-all duration-300 hidden md:block" 
            style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                id={`process-btn-${idx}`}
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className="group flex flex-col items-center md:items-start text-center md:text-left cursor-pointer focus:outline-none"
              >
                {/* Step indicator node */}
                <div 
                  className={`h-11 w-11 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                    activeStep === idx 
                      ? 'bg-blue-600 text-white border-4 border-[#050505] scale-110 shadow-lg shadow-blue-500/20' 
                      : 'bg-zinc-950 text-zinc-500 border-2 border-zinc-900 hover:border-zinc-800 hover:text-zinc-300'
                  }`}
                >
                  {step.stepNumber}
                </div>

                {/* Mini labels */}
                <div className="mt-3 px-1">
                  <span className={`font-mono text-[9px] tracking-widest uppercase font-bold block ${activeStep === idx ? 'text-blue-400' : 'text-zinc-650'}`}>
                    STAGE 0{idx+1}
                  </span>
                  <p className={`font-sans text-xs font-bold mt-0.5 transition-colors ${activeStep === idx ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                    {step.title.split(' & ')[0]}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Selected Step Display Card */}
        <div className="bg-[#0d0d0e]/80 border border-zinc-900 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              
              {/* Core description left */}
              <div className="md:col-span-7 text-left space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    PHASE {PROCESS_STEPS[activeStep].stepNumber}
                  </span>
                  <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Duration: {PROCESS_STEPS[activeStep].timeline}</span>
                  </div>
                </div>

                <h3 className="font-sans text-xl md:text-2xl font-black text-white">
                  {PROCESS_STEPS[activeStep].title}
                </h3>

                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  {PROCESS_STEPS[activeStep].description}
                </p>

                {/* Quick note */}
                <div className="flex items-center space-x-2 text-[11px] text-zinc-500 font-mono pt-2 border-t border-zinc-900">
                  <Sparkles className="h-3 w-3 text-blue-400" />
                  <span>Sprint targets updated weekly inside shared marketing board.</span>
                </div>
              </div>

              {/* Specific deliverables list right */}
              <div className="md:col-span-5 bg-[#0d0d0e]/90 border border-zinc-900 rounded-xl p-5 text-left space-y-3">
                <div className="flex items-center space-x-1.5 border-b border-zinc-900 pb-2">
                  <CheckSquare className="h-4 w-4 text-emerald-400" />
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-bold">STAGE DELIVERABLES</span>
                </div>

                <ul className="space-y-2.5">
                  {PROCESS_STEPS[activeStep].deliverables.map((del, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-zinc-300 font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
