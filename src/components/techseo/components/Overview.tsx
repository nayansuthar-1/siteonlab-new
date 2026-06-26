"use client";

import { useState } from "react";
import { Server, Zap, Brackets, Layers, Cpu, Globe, Database, ArrowUpRight } from "lucide-react";
import { ServiceComponent } from "../types";

export default function Overview() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const components: ServiceComponent[] = [
    {
      id: "comp-1",
      title: "Crawl Budget & Server Response Tuning",
      description: "We optimize server HTTP headers, eliminate deep redirect loops, and configure caching structures so crawlers index your most profitable pipeline pages first.",
      techTag: "HTTP/2 & Caching",
      outcome: "99% Crawl efficiency"
    },
    {
      id: "comp-2",
      title: "Core Web Vitals & INP Engineering",
      description: "We refactor bulky third-party scripts, optimize critical CSS paths, and minimize framework hydration delays to score straight green scores that maximize page conversions.",
      techTag: "NextJS / Hydration",
      outcome: "<150ms Interaction rate"
    },
    {
      id: "comp-3",
      title: "Structured Data & Nested Schema Graphs",
      description: "We deploy highly customized nested JSON-LD graphs for B2B Software, organization profiles, FAQ hubs, and comparison pages to unlock rich snippets and AI recommendations.",
      techTag: "JSON-LD & RDFa",
      outcome: "2.4x SERP CTR boost"
    },
    {
      id: "comp-4",
      title: "JS Rendering & Payload Optimization",
      description: "We verify server-side rendering (SSR) payloads, optimize bundle chunks, and debug dynamic routing conflicts to prevent indexation drop-offs in modern headless tech stacks.",
      techTag: "SSR & Hydration Audits",
      outcome: "100% Core indexation"
    },
    {
      id: "comp-5",
      title: "LLM & AI Search Engine Indexability (GEO)",
      description: "We format crawl directories and authority tags specifically for AI engines (GPTBot, PerplexityBot) to ensure your enterprise solutions are cited inside conversational search answers.",
      techTag: "AI Engine Optimization",
      outcome: "3x Citation growth"
    },
    {
      id: "comp-6",
      title: "International SEO & hreflang Mapping",
      description: "We map target global locations using advanced multi-locale hreflang graphs, optimizing CDN regional headers to prevent duplicate content flags across countries.",
      techTag: "Global Hreflang XML",
      outcome: "Multi-market authority"
    }
  ];

  return (
    <section id="overview" className="bg-[#050505] py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
      
      {/* Decorative Blur Backgrounds - kept extremely light */}
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-3">
            Technical SEO Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Technical SEO built for compounding B2B revenue growth.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed font-light">
            Most agencies just hand you automated scans with basic checklist steps. Our <strong className="text-white font-medium">Technical SEO service</strong> builds a complete growth engine that combines <span className="text-white font-medium">Crawl Budget Optimization</span>, <span className="text-white font-medium">Core Web Vitals tuning</span>, <span className="text-white font-medium">Semantic JSON-LD structure</span>, and <span className="text-white font-medium">LLM discovery strategy</span> into one high-performing revenue channel.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {components.map((comp, idx) => {
            const icons = [Server, Zap, Brackets, Layers, Cpu, Globe];
            const IconComp = icons[idx] || Server;
            const isHovered = hoveredCard === comp.id;

            return (
              <div
                key={comp.id}
                onMouseEnter={() => setHoveredCard(comp.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-[#080808] border border-white/5 hover:border-white/10 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between hover:bg-[#111] group relative"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-lg bg-blue-600/10 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 bg-[#050505] px-2.5 py-1 rounded-full border border-white/5">
                      {comp.techTag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-white text-base mt-5 leading-snug group-hover:text-blue-400 transition-colors">
                    {comp.title}
                  </h3>
                  
                  <p className="text-[13px] text-gray-400 mt-3 leading-relaxed font-light">
                    {comp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">OUTCOME:</span>
                  <span className="text-blue-400 flex items-center gap-1 font-semibold">
                    {comp.outcome}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
