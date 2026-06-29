"use client";

import { CYBERSECURITY_COPY } from "../data/copywriting";

export default function WhyChooseSection() {
  const { eyebrow, h2, introduction, differentiators } = CYBERSECURITY_COPY.whyChoose;

  return (
    <section className="bg-slate-950 py-20 lg:py-28 border-b border-slate-800" id="why-choose">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Grid Header with left heading and right description */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 items-start border-b border-slate-800 pb-12">
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-sky-500"></span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-500">{eyebrow}</span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl font-display leading-[1.1]">
              {h2}
            </h2>
          </div>
          <div className="lg:col-span-6 text-left lg:pt-8">
            <p className="text-base text-slate-400 leading-relaxed font-sans">
              {introduction}
            </p>
          </div>
        </div>

        {/* Differentiators Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {differentiators.map((diff) => (
            <div
              key={diff.id}
              className="flex flex-col sm:flex-row gap-6 p-6 rounded-sm border border-slate-800 bg-slate-900/10 hover:border-slate-700 transition-all text-left"
            >
              {/* Metric Accent (if present) */}
              {diff.metricValue && (
                <div className="flex flex-col items-start justify-center h-20 w-32 shrink-0 rounded-sm bg-slate-950 border border-slate-800 p-4">
                  <div className="text-2xl font-bold text-sky-400 font-mono">
                    {diff.metricValue}
                  </div>
                  <div className="text-[9px] font-bold text-slate-500 font-mono uppercase tracking-widest mt-1">
                    {diff.metricLabel}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-base font-bold text-white font-sans tracking-tight">
                  {diff.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
