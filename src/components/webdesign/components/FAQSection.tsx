"use client";

import { faqItems } from "../data";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-4xl relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Frequently asked questions about B2B website design & development.
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Everything you need to know about our approach, technical design specs, and engagement guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-sm border border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left font-sans font-semibold text-zinc-200 hover:text-white transition-colors cursor-pointer gap-4"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
                    <span className="text-sm sm:text-base">{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed space-y-2">
                        <p>{item.answer}</p>
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
