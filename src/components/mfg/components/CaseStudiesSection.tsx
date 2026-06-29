"use client";

import { CASE_STUDIES } from "../data/copywriting";
import { Award, Timer, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Growth results from B2B manufacturing companies.
          </h2>
          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            We let our results speak for themselves. Read how we transformed the digital pipeline, SEO footprint, and quoting speeds of AS9100 aerospace shops and materials OEMs.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 p-8 rounded-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all relative overflow-hidden"
            >
              {/* Highlight background light */}
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

              {/* Left detail parameters (Col-span-7) */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold">{study.industry}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Sourcing Growth Case Study</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider block font-medium mb-1">THE COMMERCIAL CHALLENGE</span>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block font-medium mb-1">THE DEPLOYED SOLUTION</span>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded border border-slate-800">
                    <Timer className="w-3.5 h-3.5 text-blue-400" />
                    <span>TIMELINE: {study.timeline}</span>
                  </div>
                  <button 
                    id={`case-study-cta-${idx}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                  >
                    <span>Read Full Case Study PDF</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right core outcomes dashboard (Col-span-4) */}
              <div className="lg:col-span-4 bg-slate-950 border border-slate-800 p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 border-b border-slate-800/80 pb-3">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span>VERIFIED COMMERCIAL OUTCOMES</span>
                </div>

                <ul className="space-y-4">
                  {study.metrics.map((metric, mIdx) => (
                    <li key={mIdx} className="space-y-1">
                      <div className="flex items-center gap-1.5 text-lg font-bold text-white font-mono tracking-tight">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{metric}</span>
                      </div>
                      <p className="text-[10px] text-slate-500 font-sans leading-none pl-5">
                        {mIdx === 0 ? "Qualified inbound opportunities" : mIdx === 1 ? "Pipeline value sourced" : "Enterprise contracts closed"}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
