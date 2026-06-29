"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import ChallengesSection from "./components/ChallengesSection";
import SolutionsSection from "./components/SolutionsSection";
import BuyerJourneySection from "./components/BuyerJourneySection";
import ProcessSection from "./components/ProcessSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ServicesSection from "./components/ServicesSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import TestimonialSection from "./components/TestimonialSection";
import RelatedIndustriesSection from "./components/RelatedIndustriesSection";
import FaqSection from "./components/FaqSection";
import GrowthBlueprintModal from "./components/GrowthBlueprintModal";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function CyberLandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const openBlueprintModal = () => setModalOpen(true);
  const closeBlueprintModal = () => setModalOpen(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="theme-cyber min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section */}
        <Hero onRequestBlueprint={openBlueprintModal} />

        {/* 2. Trust & Credibility Section */}
        <TrustSection />

        {/* 3. Industry Challenges Section */}
        <ChallengesSection />

        {/* 4. Solutions Section */}
        <SolutionsSection />

        {/* 5. Buyer Journey Section */}
        <BuyerJourneySection />

        {/* 6. Process Section */}
        <ProcessSection />

        {/* 7. Why Choose Section */}
        <WhyChooseSection />

        {/* 8. Services Section */}
        <ServicesSection />

        {/* 9. Case Studies Section */}
        <CaseStudiesSection />

        {/* 10. Testimonial Section */}
        <TestimonialSection />

        {/* 11. Related Industries Section */}
        <RelatedIndustriesSection />

        {/* 12. Faq Section */}
        <FaqSection />

        {/* 13. Final CTA conversion block */}
        <section className="bg-slate-950 py-20 lg:py-28 border-t border-slate-900 relative overflow-hidden" id="final-cta">
          {/* Background ambient circular glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mx-auto mb-8">
              <ShieldCheck className="h-6 w-6" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-sans leading-none">
              Let's build a predictable growth engine for your Cybersecurity company.
            </h2>

            <p className="mt-6 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-sans">
              Don't waste valuable acquisition budgets on generalist marketing agencies that don't know the difference between an API breakout and a SOC audit. Partner with senior growth practitioners who speak the language of CISOs and build sustainable, high-velocity pipelines.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={openBlueprintModal}
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-7 py-4 text-base font-bold text-slate-950 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10"
                id="btn-final-cta-primary"
              >
                Request a Growth Blueprint
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-7 py-4 text-base font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition-all"
              >
                {copiedLink ? "Link Copied!" : "Share Strategy Page"}
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Questionnaire Modal */}
      <GrowthBlueprintModal isOpen={modalOpen} onClose={closeBlueprintModal} />
    </div>
  );
}
