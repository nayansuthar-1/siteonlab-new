"use client";

import { useState } from "react";
import { ArrowUpRight, HelpCircle, LayoutGrid, Layers, RefreshCw, Terminal, PhoneCall, CheckCircle } from "lucide-react";
import HeroSection from "./components/HeroSection";
import TrustMetrics from "./components/TrustMetrics";
import ServiceOverview from "./components/ServiceOverview";
import ProcessSection from "./components/ProcessSection";
import WhyChooseUs from "./components/WhyChooseUs";
import CaseStudies from "./components/CaseStudies";
import Testimonial from "./components/Testimonial";
import RelatedServices from "./components/RelatedServices";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";

export default function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="theme-webdesign min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Sleek Dark Agency Header Nav */}

      {/* Assembly of Ordered Template Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection 
          onPrimaryClick={() => scrollToSection("cta")} 
          onSecondaryClick={() => scrollToSection("case-studies")} 
        />

        {/* 2. Trust Metrics Section */}
        <TrustMetrics />

        {/* 3. Service Overview Section */}
        <ServiceOverview />

        {/* 4. Process Section */}
        <ProcessSection />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Case Studies Section */}
        <CaseStudies onCtaClick={() => scrollToSection("cta")} />

        {/* 7. Testimonial Section */}
        <Testimonial />

        {/* 8. Related Services Section */}
        <RelatedServices />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Final CTA Section with Assessment/Form tab widget */}
        <FinalCTA />
      </main>

      {/* Structured Dark Footer representing HybridMonks */}

    </div>
  );
}
