"use client";

import { testimonial } from "../data";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-8 max-w-5xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Quote icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded bg-zinc-900 border border-white/5 shadow-xl">
            <Quote className="w-6 h-6 text-blue-500 rotate-180" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-relaxed max-w-4xl mx-auto italic">
            {testimonial.quote}
          </blockquote>

          {/* Divider */}
          <div className="w-12 h-[3px] bg-blue-600/40 mx-auto rounded-full" />

          {/* Meta Info */}
          <div className="space-y-1">
            <h4 className="font-display text-lg font-bold text-white">
              {testimonial.author}
            </h4>
            <p className="font-sans text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
              {testimonial.title}
            </p>
          </div>

          {/* Metric and Timeline Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-zinc-900/80 border border-white/5 shadow-md">
            <span className="font-mono text-xs font-semibold text-green-400">
              {testimonial.metric}
            </span>
            <span className="text-zinc-700 font-sans text-xs">•</span>
            <span className="font-mono text-xs text-zinc-400">
              {testimonial.timeline}
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
