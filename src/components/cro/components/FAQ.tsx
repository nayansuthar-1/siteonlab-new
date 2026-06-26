"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Conversion Rate Optimization (CRO)?",
      answer: "Conversion Rate Optimization is the scientific process of increasing the percentage of website visitors who take a desired action—such as submitting a demo request, signing up for a free trial, or completing a contact form. It combines user psychology, data-driven analysis, conversion copywriting, and technical web design to eliminate buyer friction on your site."
    },
    {
      question: "How is Conversion Rate Optimization different for B2B companies?",
      answer: "Unlike B2C or e-commerce CRO, which optimizes for quick, transactional purchases, B2B CRO focuses on long sales cycles, high contract values, and multiple stakeholders. We optimize for 'qualified pipeline velocity' rather than sheer volume, ensuring that progressive forms capture critical enterprise data without discouraging busy decision-makers."
    },
    {
      question: "How long does it take to see results?",
      answer: "Our initial diagnostic audit and intent mapping takes 2 weeks. We typically launch your first high-impact A/B test by day 14. Depending on your monthly traffic volume, tests achieve statistical confidence (95%+) within 2 to 6 weeks, providing clear, mathematical proof of conversion lift and ROI."
    },
    {
      question: "How do you measure ROI?",
      answer: "We reject vanity metrics like click-through rates. SiteOnLab connects A/B testing platforms directly to your CRM (HubSpot, Salesforce). We measure program ROI using qualified sales opportunities generated, pipeline dollar value added, and improvement in your Customer Acquisition Cost (CAC)."
    },
    {
      question: "What makes SiteOnLab different from other agencies?",
      answer: "Most agencies give you static recommendations and leave the coding and copywriting to you, or suggest superficial changes like button colors. SiteOnLab is a full-service, revenue-first partner: we formulate the hypotheses, write the enterprise copy, design the wireframes, code the testing scripts, and analyze the pipeline revenue data ourselves."
    },
    {
      question: "Do you handle implementation or only strategy?",
      answer: "We handle 100% of the strategy, copywriting, interface design, and front-end code required for your A/B experiments. Our client-side testing scripts deploy cleanly with zero page flicker, meaning your internal development team doesn't have to write a single line of code to support our tests."
    },
    {
      question: "We tried this before and it did not work. Why would this be different?",
      answer: "Previous failures usually happen because agencies test low-impact elements (like button color) or fail to target buyer intent. We rebuild your optimization strategy around high-intent category and problem-aware searches. We combine qualitative user recording signals with quantitative CRM data to design experiments that address real enterprise buyer friction."
    },
    {
      question: "How does this service support AI visibility?",
      answer: "By structuring on-page copy to answer real user questions and implementing high-intent Schema metadata, we ensure your conversion paths are extremely legible to LLMs. This helps your optimized pages get cited directly as trusted sources inside Google's AI Overviews, Perplexity, and ChatGPT."
    },
    {
      question: "What does a typical engagement look like?",
      answer: "We operate in agile monthly sprints. Each month, we review live performance data, present our next batch of test wireframes and copywriting variations, deploy 2-3 new A/B experiments, and report on CRM pipeline lift. You have full transparency via a shared live experiment dashboard."
    }
  ];

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-6 border-t border-white/10 text-left">
      <div className="text-center mb-16 space-y-3">
        <div className="inline-block px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20 text-[10px] uppercase tracking-[0.2em]">
          FAQs
        </div>
        <h2 className="text-3xl sm:text-4xl font-display font-medium text-slate-100 tracking-tight">
          Frequently asked questions about Conversion Rate Optimization.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((f, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              id={`faq-item-${idx}`}
              className="bg-[#0D0D0D] border border-white/10 rounded-xl overflow-hidden transition-all hover:bg-white/[0.01]"
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
              >
                <span className="text-sm sm:text-base font-display font-medium text-slate-200 pr-4">
                  {f.question}
                </span>
                <span className="shrink-0 p-1 bg-black border border-white/10 rounded-lg text-[#3b82f6]">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5">
                      {f.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
