"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first question

  const faqs: FAQItem[] = [
    {
      question: "What is Paid Media?",
      answer: "Paid Media refers to external marketing efforts that involve paid ad placements. For B2B companies, this primarily encompasses Google Search Ads (targeting buyer-intent keywords), Paid Social campaigns (on platforms like LinkedIn or Meta targeting firmographic data), and programmatic display or retargeting networks. At SiteOnLab, we design Paid Media campaigns specifically to build brand authority and capture active demand."
    },
    {
      question: "How is Paid Media different for B2B companies?",
      answer: "Unlike B2C companies where purchasing is often an impulsive, single-session decision, B2B purchasing cycles are complex, long, and involve multiple decision-makers (the buying committee). Therefore, B2B Paid Media must avoid broad demographics. Instead, it must utilize strict Account-Based Marketing (ABM) matching, target precise buyer pain points, align ad copy with specific evaluation stages, and integrate directly with CRMs to qualify pipeline rather than superficial lead counts."
    },
    {
      question: "How long does it take to see results?",
      answer: "Ad traffic and clicks are instantaneous once campaigns go live. However, because B2B sales cycles typically range from 30 to 180 days, true sales pipeline outcomes require continuous tuning. We typically establish foundational performance baseline indicators inside the first 14 days, achieve qualified marketing leads (MQLs) inside 30 days, and deliver qualified sales opportunities (SQLs) within 60 to 90 days of launch."
    },
    {
      question: "How do you measure ROI?",
      answer: "We reject simple pixel-based conversion reporting that only measures clicks or raw form fills. Instead, we configure end-to-end multi-touch revenue attribution. By linking ad platform conversion tags with Salesforce, HubSpot, or other CRMs, we connect specific ad groups and search queries directly to open pipeline values, sales cycle velocity, and closed-won contract value. This ensures ad spend is optimized for enterprise ROI, not vanity metrics."
    },
    {
      question: "What makes SiteOnLab different from other agencies?",
      answer: "Most traditional agencies optimize campaigns for click volume, CTRs, and cost-per-lead (CPL) without knowing if those leads are qualified. SiteOnLab is built on a pipeline-first ethos. We co-own our clients' revenue targets. We optimize strictly for business outcomes and customer acquisition efficiency (CAC). Furthermore, we design bespoke, intent-symmetric landing pages for every campaign instead of using lazy homepage destinations."
    },
    {
      question: "Do you handle implementation or only strategy?",
      answer: "We handle the complete execution cycle. This includes the initial strategy, keyword mapping, audience architecture, direct-response ad copywriting, high-converting visual creative design, single-purpose landing page design and development, campaign build-out, technical attribution configuration, weekly bidding management, and continuous multi-variate A/B testing."
    },
    {
      question: "We tried this before and it did not work. Why would this be different?",
      answer: "When B2B paid media fails, it almost always boils down to three fatal issues: 1) Using broad-match keywords on Google Ads (wasting budget on non-intent terms), 2) Directing traffic to homepage or general pages with broad conversion forms, and 3) Optimizing bidding algorithms for raw lead volume rather than pipeline. SiteOnLab fixes this by mapping campaigns strictly to exact buyer-intent queries, using symmetric, single-purpose landing pages, and connecting CRM feedback loops directly into campaign bidding models."
    },
    {
      question: "How does this service support AI visibility?",
      answer: "Paid traffic provides direct, real-time insights into which keywords and pain points convert into revenue. We feed these high-yield ad signals directly into our search engine and AI visibility models. Additionally, we structure landing page content and brand authority signals using schema structures, ensuring your brand gets cited in Google AI Overviews and major generative models (ChatGPT, Gemini, Perplexity) when buyers ask research queries."
    },
    {
      question: "What does a typical engagement look like?",
      answer: "Our typical engagement operates in structured monthly sprints. It begins with a comprehensive 2-week performance audit, technical tracking review, and target ICP alignment. By week 3, we build your dedicated campaign blueprints, construct bespoke landing pages, and launch initial ad sets. From month 2 onward, we run bi-weekly creative and copy tests, conduct weekly bidding audits, sync weekly on CRM outcomes, and compile comprehensive ROI/attribution reports."
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section 
      className="relative py-24 bg-[#0A0A0B] border-b border-slate-900"
      id="faq-section"
    >
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16" id="faq-header">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
            FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
            Frequently asked questions about Paid Media services.
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base font-light max-w-2xl mx-auto">
            Everything you need to know about our pipeline-first paid search, account-based social, and technical CRM attribution processes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded border transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: isOpen ? "rgba(17, 17, 20, 0.9)" : "rgba(17, 17, 20, 0.4)",
                  borderColor: isOpen ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.04)"
                }}
                id={`faq-item-${idx}`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:text-blue-400 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-blue-500" : "text-slate-500 group-hover:text-blue-400"}`} />
                    <span className="font-bold text-sm sm:text-base text-slate-200 group-hover:text-white leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-transform duration-300 shrink-0" 
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {/* Collapsible Content */}
                <div 
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    visibility: isOpen ? "visible" : "hidden"
                  }}
                >
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed font-light border-t border-slate-900/50">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
