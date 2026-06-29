"use client";

import React from "react";
import { Search, FileText, Megaphone, Monitor, BarChart3, HelpCircle, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { b2bSaaSData } from "../industryData";

export default function ServicesSection() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Search":
        return <Search className="text-blue-400" size={22} />;
      case "FileText":
        return <FileText className="text-blue-400" size={22} />;
      case "Megaphone":
        return <Megaphone className="text-blue-400" size={22} />;
      case "Monitor":
        return <Monitor className="text-blue-400" size={22} />;
      case "BarChart3":
        return <BarChart3 className="text-blue-400" size={22} />;
      default:
        return <HelpCircle className="text-blue-400" size={22} />;
    }
  };

  const handleScrollToCall = () => {
    const el = document.getElementById("book-a-call");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-950 relative border-t border-slate-800">
      {/* Visual neon light leak */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-blue-500 mb-2.5 block">
            — CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tighter leading-tight mb-5">
            Every service tied to revenue impact — not clicks counted.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Traditional agencies measure output (blog posts and keyword volumes). We measure outcomes (cited visibility inside generative answers, qualified demos, and attributed ARR).
          </p>
        </div>

        {/* Services Grid (SaaS specific) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {b2bSaaSData.services.map((svc, index) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 sm:p-8 rounded-sm bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden card-glow"
            >
              {/* Subtle glass overlay background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-transparent pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-sm bg-blue-950/40 border border-blue-500/20 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {getIconComponent(svc.iconName)}
                  </div>
                  <button 
                    onClick={handleScrollToCall}
                    className="p-1.5 rounded-sm hover:bg-white/5 text-slate-500 hover:text-white transition-colors cursor-pointer"
                    aria-label="Inquire about service"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {svc.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                  {svc.description}
                </p>
              </div>

              {/* High-Intent Context Graphic / Target Metric */}
              {svc.exampleLabel && svc.exampleValue && (
                <div className="pt-5 border-t border-slate-800 mt-auto bg-slate-950/40 -mx-8 -mb-8 px-6 sm:px-8 pb-8">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 block mb-2">
                    {svc.exampleLabel}
                  </span>
                  <div className="rounded-sm bg-slate-950 border border-slate-800 px-3 py-2.5 font-mono text-[11px] text-blue-400 leading-tight flex items-start gap-1.5 relative overflow-hidden">
                    {svc.iconName === "Search" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1"></span>
                    )}
                    <span className="break-all">{svc.exampleValue}</span>
                    {/* Tiny watermarked badge */}
                    <span className="absolute right-1 bottom-1 text-[8px] font-mono text-slate-600/40 select-none">HYBRIDMONKS</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Callout box inside the services grid as a 6th slot filler */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 sm:p-8 rounded-sm bg-slate-900 border border-blue-500/20 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient background light */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            
            <div>
              <span className="px-2 py-0.5 rounded-sm bg-blue-400/10 border border-blue-400/20 text-[9px] font-mono font-bold uppercase text-blue-400 tracking-widest inline-block mb-4">
                Active Architecture
              </span>
              <h3 className="text-lg font-display font-bold text-white mb-3">
                Need a Custom SaaS Growth Matrix?
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                We integrate with your existing CRM structures (HubSpot, Salesforce) and tracking setups to provide seamless multi-touch pipeline attribution reports.
              </p>
            </div>

            <button
              onClick={handleScrollToCall}
              className="w-full py-3 px-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-blue-500 transition-all duration-200 shadow-md shadow-blue-500/10 text-center cursor-pointer"
            >
              Request Integration Audit
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
