"use client";

import { relatedServices } from "../data";
import { motion } from "motion/react";
import { Sparkles, Library, AreaChart } from "lucide-react";

const icons = [Sparkles, Library, AreaChart];

export default function RelatedServices() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-16 text-left">
          <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Related Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Website design & development performs better alongside these services.
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400">
            Maximize your digital real estate value by amplifying site performance with these adjacent growth strategies.
          </p>
        </div>

        {/* 3 related service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group p-8 rounded-sm bg-zinc-900/40 border border-white/5 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded bg-zinc-950 border border-white/5 flex items-center justify-center mb-6 group-hover:border-blue-500/40 transition-colors">
                  <IconComponent className="w-4 h-4 text-blue-500" />
                </div>

                <h3 className="font-display text-lg font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
