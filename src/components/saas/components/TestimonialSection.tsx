"use client";

import React from "react";
import { Quote, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { b2bSaaSData } from "../industryData";

export default function TestimonialSection() {
  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-slate-950 relative border-t border-slate-800">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px)] bg-[size:6rem] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-500 mb-2 block">
            — CUSTOMER TRACTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tighter leading-tight">
            Proof, not promises.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            See how high-growth B2B SaaS teams bypass vanity keyword agencies to capture high-intent pipelines.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          
          {/* LEFT: Metric Highlight Block (4 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 rounded-sm bg-slate-900 border border-slate-800 text-center relative overflow-hidden flex flex-col justify-center min-h-[300px]"
          >
            {/* Soft inner lighting */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"></div>

            <div className="relative z-10 space-y-4">
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-blue-500 flex items-center justify-center gap-1.5">
                <TrendingUp size={12} />
                Client Growth Metric (Editable)
              </span>
              
              <div className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tighter">
                {b2bSaaSData.testimonial.metricValue}
              </div>

              <div className="text-xs sm:text-sm text-slate-300 font-semibold tracking-tight">
                {b2bSaaSData.testimonial.metricLabel}
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
                <ShieldCheck size={12} className="text-emerald-500" />
                <span>Independently verified HubSpot ARR attribution</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Detailed Testimonial Card (7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-sm bg-slate-900 border border-slate-800 relative flex flex-col justify-between"
          >
            {/* Watermark double quote icon */}
            <Quote size={40} className="text-blue-500/10 absolute top-6 left-6" />

            <div className="relative z-10">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-8">
                "{b2bSaaSData.testimonial.quote}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800 relative z-10">
              <div className="flex items-center gap-3">
                {/* Simulated high-end business avatar initials with square/sharp format */}
                <div className="w-10 h-10 rounded-sm bg-blue-600/10 border border-blue-500/30 flex items-center justify-center font-display font-bold text-blue-500 text-xs">
                  {b2bSaaSData.testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                    {b2bSaaSData.testimonial.author}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {b2bSaaSData.testimonial.role} at <span className="text-blue-500 font-semibold">{b2bSaaSData.testimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Attribution details */}
              <div className="flex flex-col items-start sm:items-end text-[10px] text-slate-500 font-mono">
                <span>Verified Client Case Study</span>
                <span className="text-blue-500/60">{b2bSaaSData.testimonial.date} (Editable)</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Small client logos block underneath proof */}
        <div className="mt-20 pt-8 border-t border-slate-800 text-center">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
            Trusted by Growth & Venture-backed B2B Teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 hover:opacity-50 transition-opacity duration-300">
            {["CloudScale", "AeroVance", "CyberShield", "DevOpsHQ", "FinScribe"].map((logo) => (
              <span key={logo} className="font-display font-bold text-base sm:text-lg tracking-tighter text-slate-400">
                {logo}<span className="text-blue-500">.</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
