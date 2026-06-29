"use client";

import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import TrustCredibility from "./components/TrustCredibility";
import IndustryChallenges from "./components/IndustryChallenges";
import SiteOnLabSolutions from "./components/SiteOnLabSolutions";
import BuyingJourney from "./components/BuyingJourney";
import ProcessSteps from "./components/ProcessSteps";
import WhyChooseUs from "./components/WhyChooseUs";
import IndustryServices from "./components/IndustryServices";
import CaseStudiesSection from "./components/CaseStudiesSection";
import TestimonialSection from "./components/TestimonialSection";
import RelatedIndustries from "./components/RelatedIndustries";
import FAQsSection from "./components/FAQsSection";
import FinalCTA from "./components/FinalCTA";
import GrowthCalculator from "./components/GrowthCalculator";

import { ArrowRight, CheckCircle, X } from "lucide-react";

export default function ManufacturingLandingPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"blueprint" | "strategy">("blueprint");
  const [modalEmail, setModalEmail] = useState<string>("");
  const [modalPhone, setModalPhone] = useState<string>("");
  const [modalCompany, setModalCompany] = useState<string>("");
  const [modalSubmitted, setModalSubmitted] = useState<boolean>(false);

  // CTA triggers
  const triggerBlueprint = () => {
    setModalType("blueprint");
    setShowModal(true);
    setModalSubmitted(false);
  };

  const triggerStrategy = () => {
    setModalType("strategy");
    setShowModal(true);
    setModalSubmitted(false);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalEmail) {
      setModalSubmitted(true);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="theme-mfg min-h-screen bg-[#0A0A0B] text-slate-200 font-sans selection:bg-blue-600 selection:text-white">

      <main className="w-full">
        <HeroSection onRequestBlueprint={triggerBlueprint} onSeeCaseStudies={() => scrollToSection("case-studies")} />
        <TrustCredibility />
        <IndustryChallenges />
        <SiteOnLabSolutions />
        <BuyingJourney />
        <ProcessSteps />
        <GrowthCalculator />
        <WhyChooseUs />
        <IndustryServices />
        <CaseStudiesSection />
        <TestimonialSection />
        <RelatedIndustries />
        <FAQsSection />
        <FinalCTA onRequestBlueprint={triggerBlueprint} onBookStrategyCall={triggerStrategy} />
      </main>

      {/* Dynamic Engagement Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-[#0E0E10] border border-slate-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 h-8 w-8 right-4 text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalSubmitted ? (
              <div className="text-center space-y-4 py-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500 flex items-center justify-center mx-auto text-blue-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {modalType === "blueprint" ? "Blueprint Requested" : "Strategy Call Initiated"}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  We have cataloged your credentials. A Senior B2B Marketing Architect will review your manufacturing capacity profile and reach out within 4 business hours.
                </p>
                <div className="text-[10px] font-mono text-slate-500">
                  Target: {modalCompany || "Enterprise Shop"} • Sourcing Channel
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-xs font-bold py-2.5 rounded text-white tracking-wider font-mono uppercase cursor-pointer"
                >
                  Close Overlay
                </button>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">STRATEGIC SOURCING ENGAGEMENT</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {modalType === "blueprint" ? "Request Your Growth Blueprint" : "Book a B2B Strategy Session"}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans mt-1.5">
                    Align your technical shop capabilities with our revenue growth systems. Completely secure and subject to automatic NDAs.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Company Name</label>
                    <input
                      id="modal-company-input"
                      type="text"
                      required
                      placeholder="e.g. Apex Precision Machining"
                      value={modalCompany}
                      onChange={(e) => setModalCompany(e.target.value)}
                      className="w-full p-3 bg-slate-950/60 border border-slate-800 text-xs text-slate-200 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Executive Email Address</label>
                    <input
                      id="modal-email-input"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={modalEmail}
                      onChange={(e) => setModalEmail(e.target.value)}
                      className="w-full p-3 bg-slate-950/60 border border-slate-800 text-xs text-slate-200 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase block">Direct Phone Contact (Optional)</label>
                    <input
                      id="modal-phone-input"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={modalPhone}
                      onChange={(e) => setModalPhone(e.target.value)}
                      className="w-full p-3 bg-slate-950/60 border border-slate-800 text-xs text-slate-200 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <button
                  id="modal-submit-btn"
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-3.5 rounded flex items-center justify-center gap-1.5 shadow-lg shadow-blue-900/20 cursor-pointer"
                >
                  <span>Submit Strategic Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
