"use client";

import { serviceComponents } from "../data";
import { motion } from "motion/react";
import { Layers, Palette, Cpu, Search, Sparkles, Database, Check } from "lucide-react";

const icons = [Layers, Palette, Cpu, Search, Sparkles, Database];

export default function ServiceOverview() {
  return (
    <section id="services" className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Decorative blurry background accent */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-20 text-left">
          <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Website Design & Development Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Web systems engineered for compounding B2B revenue growth.
          </h2>
          <p className="font-sans text-base text-zinc-400 leading-relaxed">
            Most agencies just design pretty static screens or hand you bloated templates. Our website design and development service builds a complete conversion system that integrates <strong className="text-zinc-200">strategic journey mapping</strong>, <strong className="text-zinc-200">bespoke high-fidelity design</strong>, <strong className="text-zinc-200">performance-first engineering</strong>, and <strong className="text-zinc-200">full CRM pipeline integration</strong> into one primary channel engineered to win trust from modern buyers, Google, and LLM search systems.
          </p>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceComponents.map((comp, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative p-8 rounded-sm bg-zinc-900/40 border border-white/5 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon with glowing effect */}
                  <div className="w-12 h-12 rounded bg-zinc-950 border border-white/5 flex items-center justify-center mb-6 group-hover:border-blue-500/50 transition-colors duration-300 shadow-lg">
                    <IconComponent className="w-5 h-5 text-blue-500 group-hover:text-blue-400 group-hover:scale-105 transition-all" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white tracking-tight mb-3">
                    {comp.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-zinc-400 leading-relaxed mb-6">
                    {comp.description}
                  </p>
                </div>

                {/* Sub-features list */}
                <div className="border-t border-white/5 pt-4 mt-auto">
                  <ul className="space-y-2">
                    {comp.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-zinc-500">
                        <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
