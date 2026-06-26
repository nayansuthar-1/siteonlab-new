"use client";

import { BarChart3, Clock, Smile, Compass, Target, Brain, Award, ShieldCheck } from "lucide-react";
import { MetricItem } from "../types";

export default function Metrics() {
  const metrics: MetricItem[] = [
    {
      id: "metric-1",
      value: "300%",
      label: "Average Program ROI",
      subtext: "First-touch, assisted, and last-touch pipeline contribution.",
    },
    {
      id: "metric-2",
      value: "90 Days",
      label: "To Ranking Movement",
      subtext: "Engineering-backed speed-to-value framework.",
    },
    {
      id: "metric-3",
      value: "NPS 74",
      label: "Client Satisfaction",
      subtext: "Voted world-class support and transparent communications.",
    },
    {
      id: "metric-4",
      value: "50+",
      label: "B2B Verticals Ranked",
      subtext: "Deep vertical knowledge from SaaS to complex hardware.",
    },
  ];

  const backupStrengths = [
    {
      icon: Target,
      title: "B2B-Only Growth Focus",
      desc: "No consumer or e-commerce noise. 100% focused on enterprise buyers."
    },
    {
      icon: Brain,
      title: "Google + AI Search Visibility",
      desc: "Optimized for Gemini, ChatGPT, Perplexity, and classic search."
    },
    {
      icon: Award,
      title: "Revenue-First Reporting",
      desc: "We measure qualified pipeline and closed accounts, not clicks."
    },
    {
      icon: ShieldCheck,
      title: "Full-Funnel Execution",
      desc: "From initial indexing to site speed to demo-page conversions."
    }
  ];

  return (
    <section className="bg-[#050505]">
      
      {/* 2. TRUST METRICS STRIP */}
      <div className="w-full bg-[#0A0A0A] border-y border-white/5">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x divide-white/5">
          {metrics.map((metric) => (
            <div key={metric.id} className="flex flex-col justify-center items-center py-8 px-4 text-center">
              <span className="text-3xl font-bold text-white tracking-tight">{metric.value}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1.5 font-mono">{metric.label}</span>
              <span className="text-[9px] text-gray-600 mt-1 max-w-[180px] hidden sm:block">{metric.subtext}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Core Strengths */}
      <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-2">Our Operating Standards</span>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
            The SiteOnLab Baseline Technical Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {backupStrengths.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-blue-500/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <IconComp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-[11px] text-gray-500 mt-1 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
