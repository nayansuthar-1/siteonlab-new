"use client";

import { useState } from "react";
import { FAQS } from "../data/copywriting";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Clear Answers on Sourcing Growth
          </h2>
          <p className="text-slate-400 text-sm font-sans">
            Have questions about our methodologies, technical capabilities, reporting cadence, or AI search integration? Explore our responses below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 rounded-xl overflow-hidden transition-all"
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer gap-4"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-sans font-bold text-sm sm:text-base text-slate-200 hover:text-white transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${isOpen ? "rotate-180 text-blue-400" : ""}`} />
                </button>

                {/* Accordion Content Body */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-slate-800/80 p-6 bg-slate-950/20" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
