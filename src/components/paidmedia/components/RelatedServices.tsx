"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, FileText, Database, ArrowUpRight } from "lucide-react";
import { RelatedService } from "../types";

export default function RelatedServices() {
  const services: RelatedService[] = [
    {
      title: "AI & Search Engine Visibility",
      description: "Get cited inside ChatGPT, Gemini, Perplexity, and Google AI Overviews while maintaining pristine organic search keyword coverage to catch buyers who ignore paid links."
    },
    {
      title: "Content Marketing & Assets",
      description: "Build high-conversion topic clusters, custom diagnostic assessments, whitepapers, and interactive tools that serve as high-yield download magnets for your paid social campaigns."
    },
    {
      title: "Revenue Measurement & CRM",
      description: "Synchronize raw ad click data with active HubSpot and Salesforce setups to attribute SQL pipelines and track precise lifetime-value returns from ad campaigns."
    }
  ];

  const getServiceIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Sparkles className="w-5 h-5 text-blue-500" />;
      case 1: return <FileText className="w-5 h-5 text-blue-500" />;
      default: return <Database className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section 
      className="relative py-24 bg-[#0A0A0B] border-b border-slate-900"
      id="related-services-section"
    >
      <div className="absolute top-1/2 left-1/0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[95px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16" id="related-services-header">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase">
            Related Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-3">
            Paid Media performs better alongside these services.
          </h2>
          <p className="text-slate-400 mt-4 leading-relaxed text-sm sm:text-base font-light">
            We don&apos;t run paid advertising in a silo. True B2B revenue optimization combines search visibility, structured authority content, and rigorous CRM data tracking into one cohesive pipeline generator.
          </p>
        </div>

        {/* 3 Related Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="related-services-grid">
          {services.map((svc, index) => (
            <div 
              key={index}
              className="p-6 rounded bg-[#111114] border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group"
              id={`related-service-${index}`}
            >
              <div>
                {/* Icon wrapper & link arrow */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800">
                    {getServiceIcon(index)}
                  </div>
                  <div className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-3">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {svc.description}
                </p>
              </div>

              {/* Technical footprint footer */}
              <div className="border-t border-slate-900 mt-6 pt-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Integrated Suite Synergies
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
