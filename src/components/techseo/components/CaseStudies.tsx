"use client";

import { ArrowRight, Sparkles, TrendingUp, Cpu, Monitor } from "lucide-react";
import { CaseStudy } from "../types";

interface CaseStudiesProps {
  onRequestBlueprint: () => void;
}

export default function CaseStudies({ onRequestBlueprint }: CaseStudiesProps) {
  const cases: CaseStudy[] = [
    {
      id: "case-1",
      industry: "SaaS · B2B",
      tag: "Crawl & Intent Engine",
      headline: "From invisible in search to owning buyer-intent keywords",
      shortCopy: "We rebuilt their SEO strategy around high-intent category, comparison, and problem-aware searches, eliminating severe rendering blocks.",
      metric: "+312% organic growth",
      metricLabel: "QUALIFIED PIPELINE CONTRIBUTIONS",
      timeline: "9 months",
    },
    {
      id: "case-2",
      industry: "Cybersecurity · Enterprise",
      tag: "Indexation Blueprint",
      headline: "Accelerating indexation on 45,000+ deep enterprise solution pages",
      shortCopy: "We resolved complex server-side React hydration loops and streamlined automated XML sitemap distributions to bypass indexation limits.",
      metric: "+140% crawl efficiency",
      metricLabel: "DAILY INDEXED PAGES REACHED",
      timeline: "6 months",
    },
    {
      id: "case-3",
      industry: "IT Services · Mid-Market",
      tag: "Core Web Vitals Refactor",
      headline: "Boosting Core Web Vitals to convert high-intent traffic",
      shortCopy: "We refactored heavy legacy javascript frameworks and optimized INP latency, converting raw visibility into registered sales demos.",
      metric: "-45% demo bounce rate",
      metricLabel: "PAGE EXPERIENCE BOUNCE MINIMIZED",
      timeline: "3 months",
    },
  ];

  return (
    <section id="cases" className="bg-[#050505] py-20 lg:py-24 relative overflow-hidden border-t border-white/10">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-3">
              Case Studies & Results
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Technical SEO results we can put a number on.
            </h2>
          </div>
          
          <button
            onClick={onRequestBlueprint}
            className="mt-6 md:mt-0 flex items-center gap-1.5 text-xs font-mono font-medium text-gray-400 hover:text-blue-400 group transition-colors"
          >
            <span>Request customized audit</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-blue-500" />
          </button>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((cs) => (
            <div 
              key={cs.id}
              className="bg-[#080808] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 hover:bg-[#111] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-8">
                
                {/* Meta details */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wide">
                    {cs.industry}
                  </span>
                  
                  {/* Timeline */}
                  <span className="text-[9px] font-mono text-gray-400 bg-[#050505] px-2.5 py-1 rounded-full border border-white/5">
                    {cs.timeline} duration
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-display font-bold text-white text-base sm:text-lg leading-snug group-hover:text-blue-400 transition-colors">
                  &ldquo;{cs.headline}&rdquo;
                </h3>

                {/* Short copy */}
                <p className="text-xs text-gray-400 mt-4 leading-relaxed font-light">
                  {cs.shortCopy}
                </p>

              </div>

              {/* Dynamic visual metric bar */}
              <div className="bg-[#050505] p-6 border-t border-white/5">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">
                  {cs.metricLabel}
                </span>
                <span className="text-xl font-display font-bold text-emerald-400 block mt-1">
                  {cs.metric}
                </span>
                
                {/* Visual indicator bar */}
                <div className="w-full bg-[#111] h-1.5 rounded-full mt-3 overflow-hidden border border-white/5">
                  <div className="bg-emerald-500 h-full w-[85%] rounded-full group-hover:bg-emerald-400 transition-all duration-500"></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
