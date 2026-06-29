"use client";

import { AlertTriangle, TrendingDown } from "lucide-react";
import { CYBERSECURITY_COPY } from "../data/copywriting";

export default function ChallengesSection() {
  const { eyebrow, h2, introduction, cards } = CYBERSECURITY_COPY.challenges;

  return (
    <section className="bg-slate-950 py-20 lg:py-28 border-b border-slate-800" id="challenges">
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

        {/* Challenges Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative flex flex-col justify-between rounded-sm border border-slate-800 bg-slate-900/10 p-6 hover:border-rose-500/30 hover:bg-slate-900/20 transition-all duration-300 text-left"
            >
              <div>
                {/* Header Icon Indicator */}
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-rose-500/5 border border-rose-500/20 text-rose-400 group-hover:bg-rose-500/10 transition-all mb-6">
                  <AlertTriangle className="h-5 w-5" />
                </div>

                <h3 className="text-base font-bold text-white font-sans tracking-tight leading-snug">
                  <span className="text-rose-400 font-mono mr-2 text-xs uppercase tracking-wider">0{index + 1}.</span>
                  {card.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              {/* Dynamic Impact Display Block */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <div className="flex items-start gap-2 text-xs text-rose-300 bg-rose-500/5 rounded-sm p-3 border border-rose-500/10">
                  <TrendingDown className="h-4 w-4 shrink-0 mt-0.5 text-rose-400" />
                  <div>
                    <span className="font-semibold uppercase tracking-wider font-mono text-[9px] text-rose-400 block mb-1">
                      Critical Revenue Bottleneck:
                    </span>
                    <span className="font-sans leading-relaxed text-slate-300">{card.impact}</span>
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
