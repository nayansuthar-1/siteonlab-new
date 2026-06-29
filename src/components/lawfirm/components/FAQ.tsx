"use client";

import React, { useState } from "react";
import { faqs } from "../data/copy";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open the first one

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Answering critical legal growth questions.
          </h2>
          <p className="mt-4 text-white/60 text-base font-light leading-relaxed">
            Unpack strategic timelines, ethical frameworks, integration parameters, and technical workflows.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`border rounded-sm transition-all duration-300 ${
                  isOpen
                    ? "bg-white/10 border-[#3b82f6]/20"
                    : "bg-white/5 border-white/10 hover:border-white/15"
                }`}
              >
                {/* Trigger Question Header */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-sm sm:text-base text-white hover:text-[#3b82f6] transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-start space-x-3 pr-4">
                    <HelpCircle className="h-5 w-5 text-[#3b82f6]/80 mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-white/40 flex-shrink-0" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/10 animate-fadeIn">
                    <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed font-sans pl-8">
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
