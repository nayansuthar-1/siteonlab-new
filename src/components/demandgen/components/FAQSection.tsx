"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-dark-bg py-20 sm:py-24 relative overflow-hidden border-t border-dark-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-accent">
            FAQs
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions about Demand Generation.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Clear, straightforward answers to guide your strategic decisions.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-dark-border bg-dark-card overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full text-left flex items-center justify-between p-5 sm:p-6 text-sm sm:text-base font-bold text-white hover:bg-zinc-800/10 cursor-pointer transition-colors"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-4 w-4 text-brand-accent shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-accent' : ''
                  }`} />
                </button>

                {/* Body details with smooth expand simulation */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-dark-border animate-in fade-in slide-in-from-top-1 duration-150">
                    {item.answer}
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
