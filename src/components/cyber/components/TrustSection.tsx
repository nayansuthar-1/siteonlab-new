"use client";

import { Shield, Sparkles, Target, Award } from "lucide-react";

export default function TrustSection() {
  const values = [
    {
      icon: <Target className="h-5 w-5 text-sky-400" />,
      title: "Revenue-First Marketing",
      description: "We completely reject vanity metrics like clicks and impressions. Our team optimizes campaigns for Sales Opportunities (SQLs) and closed-won annual recurring revenue (ARR)."
    },
    {
      icon: <Sparkles className="h-5 w-5 text-sky-400" />,
      title: "Google + AI Visibility",
      description: "We are industry pioneers in GEO (Generative Engine Optimization). We ensure your brand is cited and recommended as a top-tier vendor in Perplexity, Gemini, and ChatGPT."
    },
    {
      icon: <Shield className="h-5 w-5 text-sky-400" />,
      title: "Full-Funnel Execution",
      description: "We don't just send traffic to a generic landing page. We design and optimize the entire user journey: from search terms, content, custom app platforms, to HubSpot/Salesforce syncs."
    },
    {
      icon: <Award className="h-5 w-5 text-sky-400" />,
      title: "Cybersecurity Specialists",
      description: "Our strategists and technical content creators possess actual security backgrounds, enabling us to connect with security architects, CISOs, and senior technical evaluators."
    }
  ];

  return (
    <section className="bg-slate-950 py-12 border-b border-slate-800" id="trust">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 rounded-sm bg-slate-900/20 border border-slate-800 hover:border-slate-700 transition-all text-left"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-sky-500/10 border border-sky-500/20 text-sky-400">
                {val.icon}
              </div>
              <div>
                <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  {val.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
