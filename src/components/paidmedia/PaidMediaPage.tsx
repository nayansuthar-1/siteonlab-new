"use client";

import { useState } from "react";

import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import CaseStudies from "./components/CaseStudies";
import Testimonial from "./components/Testimonial";
import RelatedServices from "./components/RelatedServices";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import InteractiveDialog from "./components/InteractiveDialog";

export default function PaidMediaPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"blueprint" | "assessment">("blueprint");

  const triggerBlueprint = () => {
    setDialogType("blueprint");
    setIsDialogOpen(true);
  };

  const triggerAssessment = () => {
    setDialogType("assessment");
    setIsDialogOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="theme-paidmedia min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-sky-500/30 selection:text-zinc-100" id="main-app-container">

      {/* FULL PAGE BODY SECTIONS */}
      <main id="app-content-sections">
        {/* Section 1: Hero */}
        <Hero
          onRequestBlueprint={triggerBlueprint}
          onSeeCaseStudies={() => scrollToSection("case-studies-section")}
        />

        {/* Section 2: Trust Metrics */}
        <Metrics />

        {/* Section 3: Service Overview */}
        <Services />

        {/* Section 4: Process */}
        <Process />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 6: Case Studies */}
        <CaseStudies onRequestBlueprint={triggerBlueprint} />

        {/* Section 7: Testimonial */}
        <Testimonial />

        {/* Section 8: Related Services */}
        <RelatedServices />

        {/* Section 9: FAQ */}
        <FAQ />

        {/* Section 10: Final CTA */}
        <FinalCTA
          onRequestBlueprint={triggerBlueprint}
          onTakeAssessment={triggerAssessment}
        />
      </main>

      {/* MODAL DIALOG CONTROLLER */}
      <InteractiveDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        type={dialogType}
      />

    </div>
  );
}
