"use client";

import { processSteps } from "../data";
import { motion } from "motion/react";
import { Calendar, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-20 text-left">
          <span className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] rounded">
            Our Development Lifecycle
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            From fragmented brand positioning to a high-performing conversion engine in 8 weeks.
          </h2>
          <p className="font-sans text-base text-zinc-400">
            A reliable, transparent, sprint-based approach designed to match enterprise alignment needs and strict target timelines.
          </p>
        </div>

        {/* Process Roadmap / Timeline Layout */}
        <div className="relative border-l border-white/5 ml-4 md:ml-12 space-y-16 py-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-zinc-950 border-2 border-white/5 group-hover:border-blue-500 flex items-center justify-center transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 group-hover:bg-blue-400 transition-colors duration-300" />
              </div>

              {/* Step info card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-3">
                  <span className="font-mono text-6xl font-black text-zinc-800/80 group-hover:text-blue-500/20 transition-colors block leading-none">
                    {step.stepNumber}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-xs font-mono text-blue-300 mt-2">
                    <Calendar className="w-3 h-3" />
                    <span>{step.timeline}</span>
                  </div>
                </div>

                <div className="lg:col-span-9 space-y-3">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  
                  {index === 2 && (
                    <div className="flex flex-wrap gap-4 pt-2">
                      <span className="inline-flex items-center gap-1 text-xs text-zinc-500 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500" /> UX Architecture Completed
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-zinc-500 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500" /> Custom UI Sprints approved
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-zinc-500 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-500" /> Multi-device testing passed
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
