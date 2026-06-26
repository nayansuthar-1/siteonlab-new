"use client";

import { RELATED_SERVICES } from '../data';
import { Cpu, Gauge, LineChart, Link2 } from 'lucide-react';

export default function RelatedServices() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="h-5 w-5 text-blue-400" />;
      case 'Gauge':
        return <Gauge className="h-5 w-5 text-emerald-400" />;
      case 'LineChart':
        return <LineChart className="h-5 w-5 text-blue-500" />;
      default:
        return <Link2 className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="related-services-section" className="py-16 md:py-24 border-t border-b border-zinc-900 bg-zinc-950/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-[9px] tracking-widest text-blue-400 uppercase font-bold">ECOSYSTEM EXPANSION</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
            Content Marketing performs better alongside these services.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto mt-3">
            Accelerate your growth compounding curve. Integrate auxiliary pipeline channels to solidify search footprints and visibility.
          </p>
        </div>

        {/* 3 Cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RELATED_SERVICES.map((serv) => (
            <div 
              key={serv.id}
              className="group relative rounded-xl border border-zinc-900 bg-[#0d0d0e]/60 p-6 flex flex-col justify-between hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-200 text-left"
            >
              <div className="space-y-4">
                {/* Header Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                    {getIcon(serv.iconName)}
                  </div>
                  <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest font-bold">CROSS SERVICE</span>
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="font-sans text-base font-extrabold text-white group-hover:text-blue-400 transition-colors">
                    {serv.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    {serv.description}
                  </p>
                </div>
              </div>

              {/* Ecosystem synergy box bottom */}
              <div className="mt-6 pt-4 border-t border-zinc-900/80 text-left">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">SITEONLAB SYNERGY</span>
                <p className="font-sans text-[11px] text-blue-350 leading-normal mt-1 italic font-medium">
                  "{serv.synergy}"
                </p>
              </div>

              {/* Subtle top decoration */}
              <div className="absolute top-0 right-0 h-8 w-8 rounded-tr-xl bg-blue-500/5 blur-md pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
