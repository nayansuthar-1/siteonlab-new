"use client";

import React from "react";
import { AlertCircle, ShieldAlert, TrendingDown, DollarSign, Clock, Users } from "lucide-react";
import { motion } from "motion/react";
import { b2bSaaSData } from "../industryData";

export default function ProblemSection() {
  // Map icons to the 3 business consequence cards based on theme
  const getConsequenceIcon = (index: number) => {
    switch (index) {
      case 0:
        return <DollarSign className="text-red-400" size={24} />;
      case 1:
        return <Clock className="text-orange-400" size={24} />;
      case 2:
        return <ShieldAlert className="text-amber-400" size={24} />;
      default:
        return <AlertCircle className="text-blue-400" size={24} />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-950 relative border-t border-slate-800">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        
        {/* ==========================================
            SECTION 6: THE REAL PROBLEM (Framing)
           ========================================== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-red-500 mb-3 block">
            — THE CONFRONTATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tighter leading-tight mb-6">
            The agency you hired to fix your marketing became your marketing problem.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            You are not bad at marketing. You've been sold the wrong version of it — an outdated playbook that values high-volume clicks over pipeline velocity. Let's name what is actually happening.
          </p>
        </div>

        {/* ==========================================
            SECTION 7: SURFACE-LEVEL PAINS (Grid of 6)
           ========================================== */}
        <div className="mb-28">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-blue-500 uppercase block mb-1">
                Boardroom Diagnostics
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tighter">
                What you say out loud in leadership meetings
              </h3>
            </div>
            <div className="text-[10px] sm:text-xs tracking-wider uppercase text-slate-500">
              * SaaS pain matrix (editable)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {b2bSaaSData.pains.map((pain, index) => (
              <motion.div
                key={pain.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 sm:p-8 rounded-sm bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group card-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-bold text-2xl text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-300">
                      {pain.number}
                    </span>
                    <AlertCircle size={16} className="text-slate-600 group-hover:text-red-500/80 transition-colors duration-300" />
                  </div>
                  <h4 className="text-base sm:text-lg font-display font-semibold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                    "{pain.title}"
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {pain.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <span className="text-[10px] font-semibold text-slate-500 block mb-1 uppercase tracking-widest">
                    THE DIAGNOSIS
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-red-400/90 group-hover:text-red-400 transition-colors duration-300">
                    {pain.verdict}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==========================================
            SECTION 8: BUSINESS CONSEQUENCES
           ========================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-red-500 uppercase block mb-2">
              The Real Cost of a Broken Pipeline
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tighter">
              Business Consequences
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Behind every vanity metric is a silent tax draining your growth-stage SaaS budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {b2bSaaSData.consequences.map((consq, index) => (
              <motion.div
                key={consq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-6 sm:p-8 rounded-sm bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual top border indicator for danger/consequence levels */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-500/40 to-orange-500/40"></div>

                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="p-2 bg-slate-950 border border-slate-800 text-slate-400">
                      {getConsequenceIcon(index)}
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-red-400 uppercase block tracking-widest">
                        {consq.subhead}
                      </span>
                      <h4 className="text-lg font-display font-bold text-white tracking-tight">
                        {consq.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                    {consq.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800 mt-auto">
                  <span className="text-[10px] font-semibold text-slate-500 block uppercase tracking-wider mb-1">
                    {consq.impactLabel}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-display font-bold text-red-400 tracking-tight">
                      {consq.impactCost}
                    </span>
                    <span className="text-[9px] text-red-500/70 font-mono font-medium">(Editable)</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
