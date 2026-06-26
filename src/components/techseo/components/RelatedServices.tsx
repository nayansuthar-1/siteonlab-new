"use client";

import { Sparkles, FileText, BarChart3, ArrowRight } from "lucide-react";
import { RelatedService } from "../types";

interface RelatedServicesProps {
  onRequestBlueprint: () => void;
}

export default function RelatedServices({ onRequestBlueprint }: RelatedServicesProps) {
  const services: RelatedService[] = [
    {
      id: "related-1",
      title: "AI Visibility Optimization (GEO)",
      description: "Ensure your enterprise products are properly formatted, contextualized, and cited across ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    },
    {
      id: "related-2",
      title: "Content Marketing & Authority Clusters",
      description: "Build deep topic clusters and professional industry resources that align with your buyer intent, establishing undisputed topical authority.",
    },
    {
      id: "related-3",
      title: "Revenue Measurement & Attribution",
      description: "Deploy robust client-side tracking scripts and server-to-server endpoints connecting organic search activity to pipeline opportunities and closed sales.",
    },
  ];

  return (
    <section className="bg-[#050505] py-20 lg:py-24 relative overflow-hidden border-t border-white/10">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono text-blue-500 uppercase tracking-widest block mb-3">
            Related Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Technical SEO performs better alongside these services.
          </h2>
          <p className="mt-4 text-sm text-gray-400 font-light">
            A comprehensive technical foundation works best when combined with structured authority assets and rigorous enterprise pipeline monitoring.
          </p>
        </div>

        {/* Related Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((srv, idx) => {
            const icons = [Sparkles, FileText, BarChart3];
            const Icon = icons[idx] || Sparkles;
            
            return (
              <div 
                key={srv.id}
                className="bg-[#080808] border border-white/5 p-6 sm:p-8 rounded-xl transition-all duration-300 hover:bg-[#111] hover:border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-10 w-10 rounded-lg bg-blue-600/10 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all mb-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  
                  <h3 className="font-display font-bold text-white text-base leading-snug group-hover:text-blue-400 transition-colors">
                    {srv.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed font-light">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button
                    onClick={onRequestBlueprint}
                    className="flex items-center gap-1.5 text-xs font-mono font-medium text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <span>Connect Services</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform text-blue-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
