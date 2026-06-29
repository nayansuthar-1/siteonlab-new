"use client";

import { Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { CYBERSECURITY_COPY } from "../data/copywriting";

export default function ProcessSection() {
  const { eyebrow, h2, introduction, steps } = CYBERSECURITY_COPY.process;

  return (
    <section className="bg-slate-950 py-20 lg:py-28 border-b border-slate-800" id="process">
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
          <p className="mt-6 text-base text-slate-400 leading-relaxed font-sans max-w-2xl">
            {introduction}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-4">
          {steps.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/10 p-6 hover:bg-slate-900/20 transition-all text-left"
            >
              <div>
                {/* Step number badge & Timeline indicator */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 font-mono">
                  <span className="text-2xl font-extrabold text-sky-400">
                    0{stepItem.step}
                  </span>
                  <div className="flex items-center gap-1.5 rounded-sm bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-slate-400 border border-slate-800 uppercase tracking-wider">
                    <Calendar className="h-3 w-3 text-sky-400" />
                    {stepItem.timeline}
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-sans tracking-tight">
                  {stepItem.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {stepItem.description}
                </p>

                {/* Deliverables Sublist */}
                <div className="mt-6 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-2">
                    {stepItem.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-sky-500 mt-0.5" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Arrow connector overlay for desktop */}
              {idx < 3 && (
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden lg:block text-slate-800">
                  <ChevronRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
