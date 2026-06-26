"use client";

import { motion } from "motion/react";

export default function ContactHero() {
  return (
    <section className="relative pt-8 pb-4 overflow-hidden bg-[#0a0f1e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] mb-2 block"
        >
          Contact
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-white mb-2 leading-tight"
        >
          Let's talk about your pipeline.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          Tell us where you want to grow. We'll assess your search and AI presence, 
          pinpoint where the leaks are, and show you a realistic growth path.
        </motion.p>
      </div>
    </section>
  );
}
