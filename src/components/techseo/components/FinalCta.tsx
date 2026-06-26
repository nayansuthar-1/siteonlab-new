"use client";

import { Calendar, Compass, Shield, ArrowRight } from "lucide-react";

interface FinalCtaProps {
  onRequestBlueprint: () => void;
  onTakeAssessment: () => void;
}

export default function FinalCta({ onRequestBlueprint, onTakeAssessment }: FinalCtaProps) {
  return (
    <section className="bg-[#050505] py-24 lg:py-28 relative overflow-hidden bg-grid-pattern border-t border-white/10">
      
      {/* Subtle blue accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/20 px-3 py-1 text-xs text-blue-400 font-mono tracking-wider uppercase mb-6">
          <Calendar className="h-3.5 w-3.5 text-blue-500" />
          <span>Complimentary Strategic Consultation</span>
        </div>

        {/* H2 */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Let&rsquo;s make <span className="text-blue-500 font-serif italic">Technical SEO</span> your most efficient growth channel.
        </h2>

        {/* Copy */}
        <p className="mt-6 text-sm sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          Book a 30-minute strategy call. We&rsquo;ll review your current technical SEO performance, identify high-intent indexing opportunities your competitors are missing, and show you exactly what it would take to turn technical site health into qualified pipeline.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          
          <button
            onClick={onRequestBlueprint}
            className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-200"
          >
            Request a Growth Blueprint
          </button>
          
          <button
            onClick={onTakeAssessment}
            className="w-full sm:w-auto px-6 py-3.5 border border-white/20 hover:border-white/40 text-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <span>Take the Technical SEO Assessment</span>
            <ArrowRight className="h-4 w-4 text-blue-500" />
          </button>

        </div>

        {/* Footer Guarantee Credentials */}
        <div className="mt-12 flex flex-wrap gap-8 justify-center text-gray-500 text-[10px] font-mono uppercase tracking-widest pt-8 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <Compass className="h-4 w-4 text-blue-500" />
            <span>NO FLUFF GUARANTEE</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-emerald-500" />
            <span>NDA SECURED ASSESSMENTS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
