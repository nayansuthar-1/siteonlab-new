"use client";

import { SERVICES, INDUSTRY_NAME } from "../data/copywriting";
import { ArrowUpRight, Search, BrainCircuit, Monitor, FileText, Target, Shield, Percent, LineChart } from "lucide-react";

export default function IndustryServices() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Industrial SEO": return <Search className="w-5 h-5" />;
      case "AI Visibility Optimization (GEO)": return <BrainCircuit className="w-5 h-5" />;
      case "High-Converting Web Development": return <Monitor className="w-5 h-5" />;
      case "Industrial Content Marketing": return <FileText className="w-5 h-5" />;
      case "B2B Paid Advertising & ABM": return <Target className="w-5 h-5" />;
      case "Smart AI Lead Agents & Automation": return <Shield className="w-5 h-5" />;
      case "Conversion Rate Optimization (CRO)": return <Percent className="w-5 h-5" />;
      default: return <LineChart className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="bg-[#0A0A0B] py-24 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold font-mono text-blue-400 uppercase tracking-widest mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Growth services built for {INDUSTRY_NAME} companies.
          </h2>
          <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed font-sans">
            A cohesive suite of specialized B2B solutions engineered to generate measurable pipeline value, satisfy engineering audits, and increase search market share.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/40 border border-slate-800/50 hover:border-blue-500/30 p-6 rounded-xl flex flex-col justify-between transition-all group hover:-translate-y-1 duration-300"
            >
              <div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-blue-400 w-10 h-10 flex items-center justify-center mb-6">
                  {getIcon(srv.name)}
                </div>
                
                <h3 className="text-base font-bold text-white tracking-tight mb-2 font-sans group-hover:text-blue-400 transition-colors">
                  {srv.name}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {srv.description}
                </p>
              </div>

              {/* Internal Link Placeholder */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                <span>View Service Details</span>
                <div className="flex items-center gap-0.5 text-blue-400 font-semibold">
                  <span className="text-[10px]">{srv.link}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
