"use client";

import { Shield, Sparkles, TrendingUp, CheckCircle } from "lucide-react";

export default function TrustStrip() {
  // Stat blocks (marked as editable placeholders as requested)
  const stats = [
    {
      id: "stat-brands",
      /* EDITABLE PLACEHOLDER: "120+" */
      value: "120+ B2B Brands",
      /* EDITABLE PLACEHOLDER: "scaled in search & AI indexes" */
      label: "Scaled globally",
    },
    {
      id: "stat-pipeline",
      /* EDITABLE PLACEHOLDER: "$25M+" */
      value: "$25M+ Pipeline",
      /* EDITABLE PLACEHOLDER: "influenced through GEO/SEO" */
      label: "Attributed revenue",
    },
    {
      id: "stat-sla",
      /* EDITABLE PLACEHOLDER: "1 Business Day" */
      value: "1-Business Day",
      /* EDITABLE PLACEHOLDER: "guaranteed response SLA" */
      label: "Guaranteed reply SLA",
    },
  ];

  // Grayscale client logo representations (marked as editable placeholders as requested)
  const clientLogos = [
    { name: "SaaSify Core", category: "SAAS" },
    { name: "CyberArmor", category: "SEC" },
    { name: "ApexTech", category: "IT" },
    { name: "LogiChain", category: "MANU" },
    { name: "Veritas AI", category: "AI" },
  ];

  return (
    <section 
      id="trust-strip"
      className="py-10 border-t border-b border-slate-800 bg-slate-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* STATS AREA */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full lg:w-auto flex-grow max-w-4xl">
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className="flex items-center gap-3 bg-slate-900/40 border border-slate-800 p-3 rounded-xl hover:border-slate-700 transition-all"
              >
                <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500">
                  {stat.id === "stat-brands" && <Shield className="w-4 h-4" />}
                  {stat.id === "stat-pipeline" && <TrendingUp className="w-4 h-4" />}
                  {stat.id === "stat-sla" && <CheckCircle className="w-4 h-4" />}
                </div>
                <div>
                  <p className="text-sm font-display font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-500 uppercase tracking-wider font-sans font-semibold">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* LOGO STRIP AREA */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-end justify-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
              Featured in major search indexes
            </span>
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 sm:gap-6 opacity-60 hover:opacity-100 transition-opacity">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-slate-950/80 border border-slate-800 py-1.5 px-3 rounded text-slate-300 font-display font-bold text-xs tracking-tight"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{logo.name}</span>
                  <span className="text-[8px] opacity-40 font-mono font-normal ml-1">
                    {logo.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
