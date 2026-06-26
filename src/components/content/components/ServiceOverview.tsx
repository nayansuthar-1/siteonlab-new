"use client";

import { SERVICE_OVERVIEW } from '../data';
import { Check, Sparkles } from 'lucide-react';

export default function ServiceOverview() {
  return (
    <section id="service-overview-section" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-16 border-b border-zinc-900 pb-12">
          
          <div className="lg:col-span-5 text-left">
            <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase font-bold block mb-2">SERVICE OVERVIEW</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Content Marketing built for compounding B2B revenue growth.
            </h2>
          </div>
          
          <div className="lg:col-span-7 text-left text-zinc-400 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Most agencies just output high-level fluff articles with basic keyword stuffing. Our <strong className="text-blue-400">Content Marketing</strong> builds a complete growth system that combines <span className="text-zinc-200">commercial intent mapping</span>, <span className="text-zinc-200">structured topic clusters</span>, <span className="text-zinc-200">AI-search visibility modeling</span>, and <span className="text-zinc-200">down-funnel revenue attribution</span> into one unified marketing engine designed to earn trust with buyers, Google search algorithms, and modern LLM engines.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-mono">
              <Sparkles className="h-3.5 w-3.5 animate-spin" />
              <span>We focus exclusively on qualified opportunity pipeline, not empty vanity metrics.</span>
            </div>
          </div>

        </div>

        {/* Bento Grid of 6 components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_OVERVIEW.map((comp, idx) => (
            <div 
              key={comp.id}
              className="group relative rounded-xl border border-zinc-900 bg-[#0d0d0e]/60 p-6 flex flex-col justify-between hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-200 text-left"
            >
              {/* Top Row with Index & Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-zinc-650 font-bold">MODULE // 0{idx+1}</span>
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest">
                    {comp.tag}
                  </span>
                </div>

                {/* Component Title & Description */}
                <h3 className="font-sans text-base font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  {comp.title}
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed mt-2">
                  {comp.description}
                </p>
              </div>

              {/* Sub-Features Checklist */}
              <div className="mt-5 pt-4 border-t border-zinc-900/60 space-y-2">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block font-semibold">DELIVERABLE CHECKS</span>
                <ul className="space-y-1.5">
                  {comp.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2 text-[11px] text-zinc-400">
                      <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover dynamic background decoration */}
              <div className="absolute top-0 right-0 h-10 w-10 rounded-tr-xl bg-blue-500/5 blur-lg group-hover:bg-blue-500/10 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
