"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FaqItem } from "../types";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs: FaqItem[] = [
    {
      id: "faq-1",
      question: "What is technical SEO?",
      answer: "Technical SEO refers to the process of optimizing your website infrastructure to assist search engines (like Google) in crawling, parsing, rendering, and indexing your pages. It covers areas like Core Web Vitals (performance and speed), server caching, SSL security, XML sitemaps, robots.txt, canonicalization, JSON-LD structured schema graphs, and rendering architectures (like server-side rendering).",
    },
    {
      id: "faq-2",
      question: "How is technical SEO different for B2B companies?",
      answer: "B2B websites usually feature highly complex products, deeply nested resource categories, comparison tables, multi-locale subdomains, and distinct conversion funnels (e.g., demo bookings rather than simple checkouts). For B2B, technical SEO focuses on maximizing the 'crawl budget' around high-intent product or solution paths, ensuring complex client-side JS components don't block indexation, and explicitly connecting search signals to pipeline CRM opportunities.",
    },
    {
      id: "faq-3",
      question: "How long does it take to see results?",
      answer: "While traditional content SEO can take 6-12 months, technical fixes can trigger improvements in crawl rates and indexing in as little as 2-4 weeks. Dramatic improvements in rankings, page speed metrics, and organic demo bookings usually materialize within 90 days as Google and LLM engines re-crawl and recognize the updated structural and velocity authority.",
    },
    {
      id: "faq-4",
      question: "How do you measure ROI?",
      answer: "Unlike traditional agencies that report on vanity metrics like impressions or simple keyword clicks, SiteOnLab connects performance directly to your marketing pipeline. We integrate custom multi-attribution scripts with your CRM (HubSpot, Salesforce) to track first-touch, assisted, and last-touch closed-won pipeline revenue driven by technically-optimized pages.",
    },
    {
      id: "faq-5",
      question: "What makes SiteOnLab different from other agencies?",
      answer: "Most agencies run a generic audit template from a third-party tool, hand you a list of 100 errors, and expect your developers to fix them. SiteOnLab operates as an engineering-led team: we understand modern JS frameworks, we write high-quality schema code, and we can directly implement the updates in your codebase. Additionally, we are one of the few agencies natively structuring sites for AI Search citation engines.",
    },
    {
      id: "faq-6",
      question: "Do you handle implementation or only strategy?",
      answer: "We handle both! We have a dedicated team of SEO-focused frontend engineers who can directly implement site performance enhancements, Schema adjustments, and hreflang structures in your repository (such as Next.js, Webflow, Webpress, etc.) with strict QA. Alternatively, if you have an internal dev team, we provide production-ready tickets, code snippets, and live dev coordination.",
    },
    {
      id: "faq-7",
      question: "We tried this before and it did not work. Why would this be different?",
      answer: "Most past SEO failures result from agencies treating technical SEO as a one-time setup step or focusing purely on vanity blog content. If your underlying site has hydration delays, deep crawling bottlenecks, or incorrect canonical directives, even the best content won't rank. SiteOnLab begins by fixing the infrastructure, ensuring your high-intent pipeline pages can actually be indexed and delivered at sub-second speeds.",
    },
    {
      id: "faq-8",
      question: "How does this service support AI visibility?",
      answer: "Conversational engines like Gemini, Perplexity, and ChatGPT crawl and ingest data differently than traditional Google scrapers. They look for clean semantic tags, structured data models (graphs), and specific API/robot.txt directives. We explicitly format your solution descriptions and compare-pages to feed these LLM crawlers, generating conversational citations and referral authority.",
    },
    {
      id: "faq-9",
      question: "What does a typical engagement look like?",
      answer: "A standard engagement begins with our 2-week Audit & Intent Mapping phase to identify speed and crawl blocks. Next, we build a customized 90-day sprint plan outlining specific code changes. We sequence these based on potential business impact, implement them in Sprints, and link them to CRM tracking to monitor incoming pipeline.",
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-[#050505] py-20 lg:py-24 relative overflow-hidden border-t border-white/10">
      
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-3">
            FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently asked questions about technical SEO.
          </h2>
          <p className="mt-3 text-sm text-gray-400 font-light">
            Everything you need to know about optimizing your B2B technical search health, crawl velocity, and revenue pipelines.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-[#080808] border border-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left font-display text-sm font-bold text-gray-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`h-4 w-4 ${isOpen ? "text-blue-500" : "text-gray-500"} flex-shrink-0`} />
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""}`} />
                </button>
                
                {/* Expandable Panel */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-96 border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-xs text-gray-400 leading-relaxed bg-[#050505] font-light">
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
