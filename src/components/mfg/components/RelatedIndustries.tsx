"use client";

import { RELATED_INDUSTRIES } from "../data/copywriting";
import { ArrowRight, Link } from "lucide-react";

export default function RelatedIndustries() {
  return (
    <section id="other-industries" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest mb-3">
            Other Industries
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Explore how we help other B2B companies grow.
          </h2>
          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            SiteOnLab operates exclusively in the B2B sector. Discover how our specialized growth blueprints drive pipeline for software houses, technical advisors, and high-compliance brands.
          </p>
        </div>

        {/* Related Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RELATED_INDUSTRIES.map((ind, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-white tracking-tight font-sans">
                    {ind.name}
                  </h3>
                  <Link className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
                
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {ind.description}
                </p>
              </div>

              {/* Linking parameters */}
              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                <span>GO_TO_SECTOR</span>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] font-semibold">{ind.link}</span>
                  <ArrowRight className="w-3 h-3 text-blue-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
