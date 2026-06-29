"use client";

import { ArrowUpRight } from "lucide-react";
import { CYBERSECURITY_COPY } from "../data/copywriting";

export default function ServicesSection() {
  const { eyebrow, h2, introduction, cards } = CYBERSECURITY_COPY.services;

  return (
    <section className="bg-slate-950 py-20 lg:py-28 border-b border-slate-800" id="services">
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

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/10 p-6 hover:border-sky-500/20 hover:bg-slate-900/20 transition-all text-left"
            >
              <div>
                <h3 className="text-base font-bold text-white font-sans group-hover:text-sky-400 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Styled internal-linking guide as CTA */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-sky-400 group-hover:text-sky-300 hover:underline font-mono">
                  {service.linkText}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
