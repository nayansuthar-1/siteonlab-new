"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Generative Engine Optimization (GEO) and why does it matter?",
    answer: "GEO is the process of optimizing your brand's digital footprint so that AI search engines (like ChatGPT, Perplexity, Gemini, and Google AI Overviews) recognize your company's authority and cite your platform as the primary recommended solution when prospective enterprise buyers search for solutions."
  },
  {
    question: "How is HybridMonks different from a traditional SEO agency?",
    answer: "Traditional agencies focus on vanity metrics like clicks and impressions for general informational keywords. HybridMonks focuses exclusively on bottom-of-funnel revenue metrics. We deploy industry-native content optimized for both human decision-makers and AI crawlers, and build precise attribution setups to tie organic search directly to pipeline and ARR."
  },
  {
    question: "How does the 90-day proof pilot program work?",
    answer: "Our 90-day pilot is a zero-risk program designed to prove our value before any long-term commitments. We run a comprehensive AI citation audit, construct high-intent content frameworks, resolve search indexation gaps, and set up closed-loop tracking so you can see exactly which inquiries turn into real sales pipelines."
  },
  {
    question: "What CRMs and analytical software do you support for tracking?",
    answer: "We establish native, multi-touch attribution integrations with leading systems including HubSpot, Salesforce, Google Analytics 4 (GA4), and other marketing automation tools. This lets us trace a customer's journey from their very first generative search query down to closed-won deals."
  },
  {
    question: "Does this replace our internal marketing or content team?",
    answer: "Not at all. We function as a specialized force-multiplier. We collaborate directly with your existing CMO, product marketers, or growth teams to handle the complex technical architectures of AI citation, high-intent search capture, and revenue attribution, elevating your overall marketing ROI."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-950 relative border-t border-slate-800 scroll-mt-20">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-500 mb-2 block">
            — ANSWERS & CLARITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tighter leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-3 max-w-xl mx-auto">
            Everything you need to know about Generative Engine Optimization, tracking bottom-line results, and our accountability model.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-sm border border-slate-800 bg-slate-900 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-blue-400 transition-colors duration-200 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <span className="text-xs sm:text-sm font-semibold pr-4 leading-snug">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400">
                    {isOpen ? (
                      <Minus size={12} className="text-blue-500" />
                    ) : (
                      <Plus size={12} className="text-slate-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-950">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Card */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3.5 px-6 py-4 rounded-sm bg-blue-950/20 border border-blue-500/10 max-w-2xl mx-auto">
            <span className="w-8 h-8 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 flex-shrink-0">
              <HelpCircle size={16} />
            </span>
            <div className="text-left">
              <p className="text-xs sm:text-sm text-slate-300 font-medium">
                Still have unanswered questions or want a custom citation trace?
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500">
                Take our 60-second AI Visibility Assessment above to audit your current search authority index.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
