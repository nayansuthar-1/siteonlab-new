"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BarChart3, Clock, HeartHandshake, ShieldCheck } from "lucide-react";
import { MetricItem } from "../types";

export default function Metrics() {
  const metricsList: MetricItem[] = [
    {
      id: "roi",
      value: "320%",
      label: "Average Program ROI",
      description: "Directly attributed sales pipeline return from paid ad spend."
    },
    {
      id: "speed",
      value: "14 Days",
      label: "Time-to-First-Ad-Launch",
      description: "Fast onboarding with audit, campaign build, and tracking live."
    },
    {
      id: "nps",
      value: "NPS 78",
      label: "Client Satisfaction Score",
      description: "Top-tier relationship score based on pipeline outcomes."
    },
    {
      id: "verticals",
      value: "50+",
      label: "B2B Verticals Scaled",
      description: "Niche enterprise markets with highly customized target lists."
    }
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case "roi": return <BarChart3 className="w-5 h-5 text-blue-500" />;
      case "speed": return <Clock className="w-5 h-5 text-blue-400" />;
      case "nps": return <HeartHandshake className="w-5 h-5 text-slate-300" />;
      default: return <ShieldCheck className="w-5 h-5 text-blue-300" />;
    }
  };

  return (
    <section 
      className="relative py-16 bg-[#0A0A0B] border-b border-slate-900"
      id="trust-metrics-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metricsList.map((metric) => (
            <div 
              key={metric.id}
              className="relative p-6 rounded bg-[#111114] border border-slate-800/80 hover:border-blue-500/30 transition-all duration-300 group"
              id={`metric-card-${metric.id}`}
            >
              {/* Card top banner hover effect */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded bg-slate-950 border border-slate-800/60">
                  {getIcon(metric.id)}
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Verified Outcomes</span>
              </div>

              {/* Stat number */}
              <div className="text-3xl lg:text-4xl font-extrabold font-mono text-white tracking-tight">
                {metric.value}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-slate-200 mt-2">
                {metric.label}
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
