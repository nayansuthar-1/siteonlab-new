"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { CYBERSECURITY_COPY } from "../data/copywriting";

export default function FaqSection() {
  const faqs = CYBERSECURITY_COPY.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-slate-950 py-20 lg:py-28 border-b border-slate-800" id="faqs">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-sky-500"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-sky-500">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl font-display leading-[1.1]">
            Clear Answers for Skeptical Buying Committees.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            We believe in complete transparency. Below are detailed, objective answers to the questions security founders and CMOs ask us most.
          </p>
        </div>

        {/* FAQs Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-sm border border-slate-800 bg-slate-900/10 overflow-hidden hover:border-slate-700 transition-colors"
              >
                {/* Trigger Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-white hover:text-sky-400 transition-colors"
                  id={`faq-trigger-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-sky-500/80 shrink-0" />
                    <span className="font-semibold text-sm sm:text-base font-sans tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-sky-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-500 shrink-0" />
                  )}
                </button>

                {/* Answer Content Panel */}
                {isOpen && (
                  <div className="px-5 pb-5 border-t border-slate-800 pt-4 bg-slate-950/40">
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans text-left">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
