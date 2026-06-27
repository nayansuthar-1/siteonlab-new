"use client";

import { useState, useEffect } from 'react';
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
import BlueprintModal from './components/BlueprintModal';
import { 
  Sparkles, 
  Menu, 
  X, 
  Phone, 
  ChevronRight, 
  ExternalLink, 
  Mail, 
  Globe, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // SEO Fields Injection
  useEffect(() => {
    // 1. Title Tag
    document.title = "Content Marketing Agency for B2B Pipeline Growth | SiteOnLab";

    // 2. Meta Description
    let metaDescriptionElement = document.querySelector('meta[name="description"]');
    if (!metaDescriptionElement) {
      metaDescriptionElement = document.createElement('meta');
      metaDescriptionElement.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionElement);
    }
    metaDescriptionElement.setAttribute(
      'content', 
      "SiteOnLab helps B2B SaaS, tech, and services companies use Content Marketing to drive qualified pipeline, improve visibility, and connect marketing performance to revenue."
    );
  }, []);

  const openBlueprintModal = () => {
    setIsModalOpen(true);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="theme-content min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-blue-600/30 selection:text-white">
      
      {/* 1. Header Sticky Nav */}

      {/* Main Page Layout (Strictly in the requested Section Order) */}
      <main className="relative">
        
        {/* 1. Hero Section */}
        <HeroSection 
          onRequestBlueprint={openBlueprintModal} 
          onSeeCaseStudies={() => scrollToSection('case-studies-section')} 
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
        <CaseStudies onRequestBlueprint={openBlueprintModal} />

        {/* 7. Testimonial Section */}
        <Testimonial />

        {/* 8. Related Services Section */}
        <RelatedServices />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Final CTA Section */}
        <FinalCTA onRequestBlueprint={openBlueprintModal} />

      </main>

      {/* 11. B2B Corporate Footer */}

      {/* 12. Strategy & Blueprint Modal */}
      <BlueprintModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
