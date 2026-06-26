"use client";

import { metrics } from "../data";
import { motion } from "motion/react";

export default function TrustMetrics() {
  return (
    <section className="py-10 bg-zinc-900/50 border-y border-white/5 relative">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-center">
          {metrics.map((metric, index) => (
            <div key={metric.id} className="flex flex-col md:flex-row items-center w-full justify-between">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col text-center md:text-left space-y-1 w-full"
              >
                <span className="text-3xl font-black text-white tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                  {metric.label}
                </span>
                <span className="text-[11px] text-zinc-500 max-w-xs font-sans">
                  {metric.description}
                </span>
              </motion.div>
              
              {/* Vertical Divider for Desktop */}
              {index < metrics.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-white/10 mx-6 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
