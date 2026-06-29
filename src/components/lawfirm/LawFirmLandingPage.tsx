"use client";

import React, { useState, useRef } from "react";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Challenges from "./components/Challenges";
import Solutions from "./components/Solutions";
import BuyerJourney from "./components/BuyerJourney";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Testimonial from "./components/Testimonial";
import RelatedIndustries from "./components/RelatedIndustries";
import FAQ from "./components/FAQ";
import BlueprintModal from "./components/BlueprintModal";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function LawFirmLandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedPractice, setPreselectedPractice] = useState<string | undefined>(undefined);

  // Scroll target for Hero CTA scrolling to Case Studies
  const caseStudiesRef = useRef<HTMLDivElement>(null);

  const scrollToCaseStudies = () => {
    if (caseStudiesRef.current) {
      caseStudiesRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback scroll
      const el = document.getElementById("case-studies-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenBlueprint = () => {
    setPreselectedPractice(undefined);
    setIsModalOpen(true);
  };

  const handleOpenBlueprintWithPractice = (practice: string) => {
    setPreselectedPractice(practice);
    setIsModalOpen(true);
  };

  return (
    <div className="theme-lawfirm min-h-screen bg-[#0A0A0B] text-white font-sans selection:bg-[#3b82f6] selection:text-white">

            <main className="animate-fadeIn">
          
          {/* 1. Hero Section */}
          <Hero
            onOpenBlueprint={handleOpenBlueprint}
            onScrollToCases={scrollToCaseStudies}
          />

          {/* 2. Trust & Credibility */}
          <TrustSection />

          {/* 3. Industry Challenges */}
          <Challenges />

          {/* 4. Solutions */}
          <Solutions />

          {/* 5. Industry Buying Journey */}
          <BuyerJourney />

          {/* 6. Our Process */}
          <Process />

          {/* 7. Why Choose Us */}
          <WhyChooseUs />

          {/* 8. Services */}
          <Services onOpenBlueprint={handleOpenBlueprint} />

          {/* 9. Case Studies */}
          <CaseStudies
            ref={caseStudiesRef}
            onOpenBlueprintWithPractice={handleOpenBlueprintWithPractice}
          />

          {/* 10. Testimonials */}
          <Testimonial />

          {/* 11. Related Industries */}
          <RelatedIndustries />

          {/* 12. Frequently Asked Questions */}
          <FAQ />

          {/* 13. Final Call to Action */}
          <section className="bg-[#0A0A0B] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 text-center border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
            
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
              <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
                TRANSFORM YOUR PIPELINE
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                Let's build a predictable growth engine for your Law Firm company.
              </h2>
              
              <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
                Stop losing high-value cases to generalist consumer agencies or outdated design templates. SiteOnLab engineers custom, state-bar-compliant growth architectures that align digital visibility with signed retainer agreements.
              </p>

              {/* Conversion Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4 max-w-md mx-auto">
                <button
                  onClick={handleOpenBlueprint}
                  className="group flex items-center justify-center space-x-2 bg-[#3b82f6] hover:bg-[#3b82f6]/95 text-white font-sans font-bold text-sm px-7 py-4 rounded-sm transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Request a Growth Blueprint</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={handleOpenBlueprint}
                  className="flex items-center justify-center space-x-2 bg-[#0A0A0B] hover:bg-white/5 border border-white/10 text-white/80 font-sans font-semibold text-sm px-7 py-4 rounded-sm transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Book a Strategy Call</span>
                </button>
              </div>

              {/* Minimalist Trust Seals under button */}
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 border-t border-white/10 text-white/40 text-xs font-mono">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500/80" />
                  <span>100% Secure Encrypted Form</span>
                </div>
                <div>•</div>
                <div>ABA Ethics Rule 7.1 Compliant</div>
                <div>•</div>
                <div>No Initial Obligation</div>
              </div>

            </div>
          </section>

        </main>

      {/* State-Bar-Compliant B2B Growth Blueprint Modal */}
      <BlueprintModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedPractice={preselectedPractice}
      />

    </div>
  );
}
