"use client";

import React from 'react';
import { MapPin, Star, ShieldCheck, Target, Navigation, CheckCircle2 } from 'lucide-react';

export default function ServiceIntentGraphic() {
  return (
    <div id="service-intent-graphic" className="w-full bg-dark-panel border border-dark-border rounded-2xl overflow-hidden glow-shadow">
      {/* Visual Header */}
      <div className="bg-dark-panel-light px-4 py-3 border-b border-dark-border flex items-center justify-between text-xs font-mono text-gray-400">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-brand-primary" />
          <span>GEOGRAPHIC SEARCH INTENT MAP</span>
        </div>
        <div className="text-[10px] bg-brand-primary/10 text-brand-primary-light px-2.5 py-0.5 rounded border border-brand-primary/20 font-semibold uppercase">
          Static Baseline
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6">
        {/* Mock Google Business Profile Rank Position */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-brand-primary/10 to-transparent border border-brand-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-brand-primary text-dark-base text-[9px] px-2.5 py-0.5 rounded-bl-lg font-mono font-bold uppercase tracking-wider">
            Rank #1
          </div>

          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-dark-base font-bold text-xs shrink-0 shadow-md shadow-brand-primary/20">
              1
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                LabCorp Enterprise Solutions
                <CheckCircle2 className="w-4 h-4 text-brand-primary-light" />
              </h4>

              <div className="flex items-center gap-1.5 mt-1">
                <span className="text-brand-primary-light font-bold text-xs">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />
                  ))}
                </div>
                <span className="text-gray-500 text-[10px]">(142 verified client reviews)</span>
              </div>

              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Primary B2B Category: <span className="text-gray-300">Managed IT & Cybersecurity Services</span>
              </p>
            </div>
          </div>
        </div>

        {/* Localized Citation Strength Breakdown */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-dark-base p-3.5 rounded-xl border border-dark-border">
            <div className="text-[10px] font-mono text-gray-500 uppercase">Map Pack Presence</div>
            <div className="text-base font-bold text-white mt-1">Local 3-Pack Solid</div>
            <div className="text-[10px] text-brand-primary-light font-mono mt-1">98% Coverage Area</div>
          </div>

          <div className="bg-dark-base p-3.5 rounded-xl border border-dark-border">
            <div className="text-[10px] font-mono text-gray-500 uppercase">NAP Integrity</div>
            <div className="text-base font-bold text-white mt-1">100% Consistent</div>
            <div className="text-[10px] text-brand-primary-light font-mono mt-1">Verified on 15+ networks</div>
          </div>
        </div>

        {/* Vector Representation of Regional Service Coordinates */}
        <div className="p-4 bg-dark-base/40 border border-dark-border rounded-xl">
          <div className="text-[10px] font-mono text-gray-500 uppercase mb-3">Service Coverage Ring</div>

          <div className="relative h-24 flex items-center justify-center bg-dark-base rounded-lg overflow-hidden border border-dark-border/40">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>

            {/* Nested concentric circles */}
            <div className="absolute w-20 h-20 rounded-full border border-brand-primary/10"></div>
            <div className="absolute w-14 h-14 rounded-full border border-brand-primary/20"></div>

            {/* Static Nodes representing geographic expansion */}
            <div className="absolute left-1/4 top-1/3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
              <span className="text-[8px] font-mono text-gray-500">Regional Node B</span>
            </div>

            <div className="absolute right-1/4 bottom-1/3 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
              <span className="text-[8px] font-mono text-gray-500">Regional Node C</span>
            </div>

            {/* Target Central Pin */}
            <div className="absolute flex flex-col items-center">
              <div className="relative">
                <span className="absolute -inset-1.5 bg-brand-primary rounded-full blur-sm opacity-45"></span>
                <div className="relative w-7 h-7 rounded-full bg-dark-panel border border-brand-primary flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                </div>
              </div>
              <span className="text-[9px] font-mono text-brand-primary-light mt-1 font-semibold">HQ Node #1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Compliance Badge */}
      <div className="bg-dark-panel-light p-3 border-t border-dark-border flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-mono">
        <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
        <span>STRUCTURED SCHEMA & MAP API CONNECTED</span>
      </div>
    </div>
  );
}
