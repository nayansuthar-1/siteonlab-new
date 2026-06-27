"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import SeoMetaPreview from "./components/SeoMetaPreview";
import Overview from "./components/Overview";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import RelatedServices from "./components/RelatedServices";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import BlueprintModal from "./components/BlueprintModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssessmentMode, setIsAssessmentMode] = useState(false);

  const handleRequestBlueprint = () => {
    setIsAssessmentMode(false);
    setIsModalOpen(true);
  };

  const handleTakeAssessment = () => {
    setIsAssessmentMode(true);
    setIsModalOpen(true);
  };

  const scrollToCaseStudies = () => {
    const el = document.getElementById("cases");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="theme-techseo min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      
      {/* 2. Hero Section */}
      <Hero 
        onRequestBlueprint={handleRequestBlueprint} 
        onSeeCaseStudies={scrollToCaseStudies} 
      />

      {/* 3. Trust Metrics Section */}
      <Metrics />

      {/* Embedded SEO Snippet Preview & Interactive Configurator (Fits beautifully right under metrics!) */}
      <section className="bg-slate-950 py-12 relative overflow-hidden border-b border-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
                Prerendered Metadata Audit
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Honoring search guidelines & citations natively.
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                We design and pre-deploy standard <strong className="text-white font-medium">Meta Titles and Descriptions</strong> that accurately represent your brand authority, engineered to capture classic SERP rankings and conversational AI citations.
              </p>
            </div>

            <div className="lg:col-span-7">
              <SeoMetaPreview />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Service Overview Section */}
      <Overview />

      {/* 5. Process Section */}
      <Process />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Case Studies Section */}
      <CaseStudies onRequestBlueprint={handleRequestBlueprint} />

      {/* 8. Testimonial Section */}
      <Testimonials />

      {/* 9. Related Services Section */}
      <RelatedServices onRequestBlueprint={handleRequestBlueprint} />

      {/* 10. FAQ Section */}
      <Faq />

      {/* 11. Final CTA Section */}
      <FinalCta 
        onRequestBlueprint={handleRequestBlueprint} 
        onTakeAssessment={handleTakeAssessment} 
      />

      {/* Interactive Blueprint & Assessment Generation Modal */}
      <BlueprintModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        isAssessmentMode={isAssessmentMode}
      />

    </div>
  );
}
