"use client";

import { TRUST_METRICS } from '../data';
import { TrendingUp, Zap, Heart, Award } from 'lucide-react';

export default function TrustMetrics() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="h-5 w-5 text-emerald-400" />;
      case 'Zap':
        return <Zap className="h-5 w-5 text-blue-400" />;
      case 'Heart':
        return <Heart className="h-5 w-5 text-rose-400" />;
      case 'Award':
        return <Award className="h-5 w-5 text-blue-500" />;
      default:
        return <TrendingUp className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="trust-metrics-section" className="py-12 border-t border-b border-zinc-900 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Label for architectural depth */}
        <div className="text-center mb-8">
          <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase font-semibold">SITEONLAB // PROVEN CAPABILITY</span>
          <h3 className="font-sans text-xs text-zinc-400 mt-1 uppercase font-semibold tracking-wider">Strategic Credibility & Attributed Proof</h3>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_METRICS.map((metric) => (
            <div 
              key={metric.id}
              className="group relative rounded-xl border border-zinc-900 bg-zinc-950/60 p-5 hover:border-zinc-800 hover:bg-zinc-900/40 transition-all duration-200 text-left"
            >
              {/* Card top row */}
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                  {getIcon(metric.icon)}
                </div>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">VERIFIED</span>
              </div>

              {/* Huge dynamic number value */}
              <div className="space-y-1">
                <p className="font-mono text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-emerald-400 transition-colors duration-150">
                  {metric.value}
                </p>
                <p className="font-sans text-xs font-bold text-zinc-300">
                  {metric.label}
                </p>
                <p className="font-sans text-[11px] text-zinc-500 leading-relaxed pt-1 border-t border-zinc-900/60 group-hover:border-zinc-800 transition-colors">
                  {metric.description}
                </p>
              </div>

              {/* Bottom decorative glowing beam line */}
              <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
