"use client";

import { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background lights */}
      <div className="absolute top-1/2 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase font-bold">OBJECTIONS & DETAILS</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Frequently asked questions about Content Marketing.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2">
            Clear, transparent answers on B2B target intent, contract measurements, and SEO indexing.
          </p>
        </div>

        {/* FAQs Accordion Column */}
        <div className="space-y-3.5 text-left">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={faq.id}
                className="rounded-xl border border-zinc-900 bg-[#0d0d0e]/60 overflow-hidden hover:border-zinc-800 transition-colors"
              >
                {/* Accordion Trigger Button */}
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className={`h-4.5 w-4.5 shrink-0 ${isOpen ? 'text-blue-400' : 'text-zinc-600'}`} />
                    <span className={`font-sans text-xs sm:text-sm font-bold leading-snug transition-colors ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-blue-400 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                {/* Animated Collapsible Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4 sm:p-5 pt-0 border-t border-zinc-900/60 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
