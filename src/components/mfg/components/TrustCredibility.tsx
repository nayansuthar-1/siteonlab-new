"use client";

import { TRUST_METRICS } from "../data/copywriting";
import { TrendingUp, Percent, ShieldCheck, LineChart } from "lucide-react";

export default function TrustCredibility() {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <TrendingUp className="w-5 h-5 text-blue-500" />;
      case 1: return <LineChart className="w-5 h-5 text-blue-500" />;
      case 2: return <ShieldCheck className="w-5 h-5 text-blue-500" />;
      default: return <Percent className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section className="bg-[#0A0A0B] py-16 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold font-mono text-blue-500 uppercase tracking-widest mb-2">Metrics That Matter</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How We Measure B2B Commercial Performance
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            We reject vague marketing metrics. We align our strategies with hard operational outcomes, pipeline generation, and customer retention.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_METRICS.map((metric, i) => (
            <div 
              key={i} 
              className="bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 p-6 rounded-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  {getIcon(i)}
                </div>
                <span className="text-[10px] font-mono text-slate-500">VERIFIED METRIC</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-mono tracking-tight mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mb-1 font-sans">
                {metric.label}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
