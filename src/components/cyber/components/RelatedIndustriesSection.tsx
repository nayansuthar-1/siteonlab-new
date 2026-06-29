"use client";

import { CYBERSECURITY_COPY } from "../data/copywriting";
import { ArrowUpRight } from "lucide-react";

export default function RelatedIndustriesSection() {
  const related = CYBERSECURITY_COPY.relatedIndustries;

  return (
    <section className="bg-slate-950 py-20 lg:py-28 border-b border-slate-800" id="related-industries">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-sky-500"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-500">OTHER INDUSTRIES</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl font-display leading-[1.1]">
            Explore How We Help Other B2B Companies Grow.
          </h2>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((ind) => (
            <div
              key={ind.id}
              className="group flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/10 p-5 hover:border-sky-500/30 hover:bg-slate-900/20 transition-all text-left"
            >
              <div>
                <h3 className="text-base font-bold text-white font-sans group-hover:text-sky-400 transition-colors">
                  {ind.name}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                  {ind.description}
                </p>
              </div>

              {/* internal linking trigger */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[9px] font-bold tracking-widest uppercase text-slate-500 font-mono">
                  HybridMonks B2B
                </span>
                <span className="inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-400 group-hover:text-sky-300 hover:underline font-mono">
                  View Page
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
