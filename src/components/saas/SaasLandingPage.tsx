"use client";

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ComparisonSection from "./components/ComparisonSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";
import InteractiveCTAs from "./components/InteractiveCTAs";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="theme-saas min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Background glow overlay */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-blue-950/15 via-transparent to-transparent pointer-events-none z-0"></div>

      {/* 1 & 2. STICKY ANNOUNCEMENT BAR & NAVIGATION */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow z-10">
        {/* 3 & 4 & 5. HERO + STAT BAR + PULL-QUOTE STRIP */}
        <div id="industries">
          <Hero />
        </div>

        {/* 6 & 7 & 8. THE REAL PROBLEM + SURFACE PAINS GRID + BUSINESS CONSEQUENCES */}
        <div id="framework">
          <ProblemSection />
        </div>

        {/* 9. SIDE-BY-SIDE BATTLE COMPARISON */}
        <ComparisonSection />

        {/* 10. WHAT WE DO (Tailored services tied to revenue) */}
        <ServicesSection />

        {/* 11. TESTIMONIAL & SOCIAL PROOF */}
        <TestimonialSection />

        {/* 12 & INTERACTIVE FEATURES. FINAL CTA + DIAGNOSTIC WIZARD */}
        <InteractiveCTAs />

        {/* 13. FREQUENTLY ASKED QUESTIONS */}
        <FAQSection />
      </main>

      {/* 14. SITEONLAB FOOTER */}
      <Footer />
    </div>
  );
}
