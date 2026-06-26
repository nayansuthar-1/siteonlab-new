"use client";

import React from "react";
import { XCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { b2bSaaSData } from "../industryData";

export default function ComparisonSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950 relative border-t border-slate-800">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-950/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-500 mb-2 block">
            — THE STRATEGIC FORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tighter leading-tight">
            What you've experienced vs. What SiteOnLab delivers
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-3 max-w-xl mx-auto">
            Our model is built around accountability and tangible results — designed specifically to break the traditional agency lock-in.
          </p>
        </div>

        {/* Comparison Desktop Grid & Mobile Stack */}
        <div className="space-y-6 max-w-5xl mx-auto">
          
          {/* Header row - Desktop only */}
          <div className="hidden md:grid grid-cols-2 gap-8 px-6 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2">
            <div className="flex items-center gap-2 pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500/80"></span>
              TRADITIONAL AGENCIES
            </div>
            <div className="flex items-center gap-2 pl-2 text-blue-500">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              SITEONLAB SYSTEM
            </div>
          </div>

          {/* Dynamic Comparison Rows */}
          {b2bSaaSData.comparison.map((row, index) => (
            <motion.div
              key={`comp-row-${index}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-5 md:p-6 rounded-sm bg-slate-900 border border-slate-800 hover:border-slate-700/80 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Subtle connector dot-line for desktop */}
              <div className="hidden md:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 items-center justify-center pointer-events-none">
                <div className="w-[1px] h-full bg-slate-800"></div>
                <div className="absolute w-6 h-6 rounded-sm bg-slate-950 border border-slate-800 flex items-center justify-center">
                  <ChevronRight size={10} className="text-slate-600" />
                </div>
              </div>

              {/* LEFT: Traditional (Negative) */}
              <div className="flex gap-4 items-start pr-0 md:pr-8">
                <XCircle className="text-red-500/60 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <span className="md:hidden text-[9px] font-bold text-red-500 uppercase tracking-widest block mb-1">
                    Traditional Agency
                  </span>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {row.before}
                  </p>
                </div>
              </div>

              {/* RIGHT: SiteOnLab (Positive - Glowing effect) */}
              <div className="flex gap-4 items-start pl-0 md:pl-8 mt-4 md:mt-0 relative">
                {/* Visual glow backdrop for SiteOnLab column rows */}
                <div className="absolute inset-0 bg-blue-500/2 rounded-sm pointer-events-none"></div>
                
                <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5 relative z-10" size={18} />
                <div className="relative z-10">
                  <span className="md:hidden text-[9px] font-bold text-blue-500 uppercase tracking-widest block mb-1">
                    SiteOnLab Difference
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {row.after}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Short Pilot Callout underneath table */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-sm bg-blue-950/20 border border-blue-500/10 max-w-2xl mx-auto">
            <span className="px-2 py-0.5 rounded-sm bg-blue-500/10 border border-blue-500/20 text-[9px] font-semibold uppercase tracking-widest text-blue-400 font-bold">
              Low Risk Proof Pilot
            </span>
            <p className="text-xs sm:text-sm text-slate-300">
              We prove our performance in a <span className="text-blue-400 font-semibold">90-day pilot program</span> before you commit to any long-term service agreements. 
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
