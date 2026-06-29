"use client";

import { CYBERSECURITY_COPY } from "../data/copywriting";
import { ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";

export default function CaseStudiesSection() {
  const { eyebrow, h2, cards } = CYBERSECURITY_COPY.caseStudies;

  return (
    <section className="bg-slate-950 py-20 lg:py-28 border-b border-slate-800" id="case-studies">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-sky-500"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-500">{eyebrow}</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl font-display leading-[1.1]">
            {h2}
          </h2>
        </div>

        {/* Case Studies Container */}
        <div className="mt-16 space-y-16">
          {cards.map((study) => (
            <div
              key={study.id}
              className="rounded-sm border border-slate-800 bg-slate-900/10 p-6 md:p-10 hover:border-slate-700 transition-colors text-left"
            >
              {/* Card Header with Category and Duration */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 font-mono">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-sans mt-1">
                    {study.companyName}
                  </h3>
                </div>
                <div className="rounded-sm bg-slate-950 border border-slate-800 px-4 py-1.5 text-[10px] font-bold text-slate-400 font-mono uppercase tracking-wider">
                  Partnership: {study.timeline}
                </div>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                
                {/* Challenge & Solution details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-rose-400 font-mono">
                      The Challenge
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-sky-400 font-mono">
                      Our Growth Blueprint Implementation
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-white font-mono">
                      Business Outcome
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-sky-100/90 leading-relaxed font-sans font-medium">
                      {study.outcome}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid Panel (5 columns) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="rounded-sm bg-slate-950 border border-slate-800 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono mb-4 flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5 text-sky-400" />
                      Attributed Growth Metrics
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                      {study.metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3.5 rounded-sm bg-slate-900/30 border border-slate-800"
                        >
                          <span className="text-xs font-semibold text-slate-400 font-sans">
                            {metric.label}
                          </span>
                          <span className="text-xl font-bold text-white font-mono">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
