"use client";

import { ShieldAlert, TrendingUp, Cpu, BarChart2 } from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: TrendingUp,
      title: "Revenue-first strategy",
      desc: "We optimize for business outcomes, qualified pipeline generation, and customer acquisition cost (CAC) efficiency, rather than isolated channel metrics or basic traffic volume.",
    },
    {
      icon: BarChart2,
      title: "Measurement that is honest",
      desc: "We build custom multi-touch attribution layers, connecting individual technical updates directly to first-touch, assisted, and last-touch CRM revenue signals.",
    },
    {
      icon: Cpu,
      title: "Built for AI search and LLM visibility",
      desc: "We optimize and structure content directories, indexing directives, and authority profiles so enterprise buyers find you in standard Google indexes as well as Conversational LLM engines.",
    },
    {
      icon: ShieldAlert,
      title: "Compounding growth over time",
      desc: "We build robust technical web systems that continuously generate pipeline and organic momentum, rather than brief and temporary spikes from one-off campaign runs.",
    },
  ];

  return (
    <section id="why-us" className="bg-[#050505] py-20 lg:py-24 relative overflow-hidden border-b border-white/10">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-3">
            Why Teams Pick Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            A Technical SEO agency that connects technical site health to revenue.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed font-light">
            Most agencies hand you automated audits or raw page speed scores and call it done. <strong className="text-white font-medium">HybridMonks</strong> builds a comprehensive measurement and execution layer so you can see exactly how technical SEO performance contributes across your buyers&rsquo; journey.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div 
                key={idx}
                className="bg-[#080808] border border-white/5 hover:border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-[#111] group relative"
              >
                <div className="flex gap-5">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-600/10 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
