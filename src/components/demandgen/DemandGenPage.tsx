"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import TrustMetrics from './components/TrustMetrics';
import ServiceOverview from './components/ServiceOverview';
import ProcessSection from './components/ProcessSection';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudies from './components/CaseStudies';
import Testimonial from './components/Testimonial';
import RelatedServices from './components/RelatedServices';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import SEOPreview from './components/SEOPreview';
import GrowthBlueprintModal from './components/GrowthBlueprintModal';
import AssessmentTool from './components/AssessmentTool';

export default function App() {
  const [isBlueprintModalOpen, setIsBlueprintModalOpen] = useState(false);

  // Smooth scroll handler
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenAssessment = () => {
    handleScrollToSection('assessment-section');
  };

  return (
    <div id="app-root" className="theme-demandgen min-h-screen bg-dark-bg font-sans text-zinc-100 selection:bg-brand-primary/30 selection:text-zinc-200">

      <main id="app-main">
        {/* 1. Hero Section */}
        <HeroSection
          onRequestBlueprint={() => setIsBlueprintModalOpen(true)}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Trust Metrics Section */}
        <TrustMetrics />

        {/* 3. Service Overview Section */}
        <ServiceOverview />

        {/* 4. Process Section */}
        <ProcessSection />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* Embedded Interactive Assessment Tool Section */}
        <section id="assessment-section" className="bg-dark-bg py-16 border-t border-dark-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-primary">
                Interactive Diagnostic
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                How does your current Demand Gen stack up?
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Take our 3-minute structural benchmark to compute your efficiency score and get an instant customized optimization roadmap.
              </p>
            </div>

            {/* The Assessment tool widget */}
            <AssessmentTool 
              onOpenBlueprintModal={() => setIsBlueprintModalOpen(true)}
            />
          </div>
        </section>

        {/* 6. Case Studies Section */}
        <CaseStudies />

        {/* 7. Testimonial Section */}
        <Testimonial />

        {/* 8. Related Services Section */}
        <RelatedServices onScrollToSection={handleScrollToSection} />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Final CTA Section */}
        <FinalCTA
          onRequestBlueprint={() => setIsBlueprintModalOpen(true)}
          onOpenAssessment={handleOpenAssessment}
        />
      </main>

      {/* Persistent Floating SEO & AI Metadata Preview Inspector */}
      <SEOPreview />

      {/* Interactive Blueprint Request Form Modal */}
      <GrowthBlueprintModal
        isOpen={isBlueprintModalOpen}
        onClose={() => setIsBlueprintModalOpen(false)}
      />

    </div>
  );
}
