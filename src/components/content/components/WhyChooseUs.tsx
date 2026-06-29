"use client";

import { DIFFERENTIATORS } from '../data';
import { Target, BarChart3, Cpu, Layers, HelpCircle, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="h-5 w-5 text-emerald-400" />;
      case 'BarChart3':
        return <BarChart3 className="h-5 w-5 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-blue-500" />;
      case 'Layers':
        return <Layers className="h-5 w-5 text-indigo-400" />;
      default:
        return <Target className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="why-choose-us-section" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-12 left-10 h-[300px] w-[300px] rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Content Heading Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 pb-12 border-b border-zinc-900">
          
          {/* Left Text */}
          <div className="lg:col-span-5 text-left">
            <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase font-bold block mb-2">WHY TEAMS PICK US</span>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A content marketing agency that connects publishing to revenue.
            </h2>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 text-left space-y-4">
            <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
              Most agencies hand you empty pageview traffic reports and call it done. HybridMonks builds a full measurement layer so you can see how <strong className="text-zinc-200">content marketing</strong> contributes across your entire buyer journey, from first touch to qualified opportunity.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-zinc-500">
              <span className="flex items-center space-x-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> <span>No keyword packing</span></span>
              <span className="flex items-center space-x-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> <span>Real CRM mapping</span></span>
              <span className="flex items-center space-x-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> <span>Actual SME interviewing</span></span>
            </div>
          </div>

        </div>

        {/* 4 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {DIFFERENTIATORS.map((diff) => (
            <div 
              key={diff.id}
              className="group relative rounded-xl border border-zinc-900 bg-[#0d0d0e]/60 p-6 md:p-8 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-200 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-all">
                    {getIcon(diff.iconName)}
                  </div>
                  <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
                    {diff.badge}
                  </span>
                </div>

                {/* Card Title & Content */}
                <div className="space-y-2">
                  <h3 className="font-sans text-base sm:text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>

              {/* Bottom tag line decorative */}
              <div className="mt-5 pt-4 border-t border-zinc-900/60 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <span>Core Pillar Focus:</span>
                <span className="text-zinc-400 group-hover:text-emerald-400 transition-colors">HybridMonks Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
