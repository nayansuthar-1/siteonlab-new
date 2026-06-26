"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Filter, 
  RotateCcw, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  LineChart, 
  AlertCircle 
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/Counter';
import CaseStudyCard from './components/CaseStudyCard';
import { AGGREGATE_METRICS, FEATURED_CASE_STUDY, GRID_CASE_STUDIES, CLIENT_LOGOS } from './data';
import { IndustryFilter, ServiceFilter } from './types';

export default function App() {
  // 1. Filter States
  const [activeIndustry, setActiveIndustry] = useState<IndustryFilter>('All');
  const [activeService, setActiveService] = useState<ServiceFilter>('All');

  // 2. Booking Modal States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    revenue: '',
    challenge: ''
  });

  // 3. AI Assessment Modal States
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [assessmentAnswers, setAssessmentAnswers] = useState({
    website: '',
    visibility: '',
    channel: '',
    pain: ''
  });
  const [assessmentResult, setAssessmentResult] = useState<any>(null);

  // Industry & Service filters list as specified in requirements
  const industries: IndustryFilter[] = [
    'All', 
    'B2B SaaS', 
    'IT Services & MSPs', 
    'Cybersecurity', 
    'Professional Services', 
    'Manufacturing'
  ];

  const services: ServiceFilter[] = [
    'All', 
    'AI Visibility/GEO', 
    'SEO', 
    'Demand Generation', 
    'Web & CRO'
  ];

  // 4. Client-side combined filtering
  const filteredCaseStudies = GRID_CASE_STUDIES.filter((cs) => {
    const matchesIndustry = activeIndustry === 'All' || cs.industry === activeIndustry;
    const matchesService = activeService === 'All' || cs.service === activeService;
    return matchesIndustry && matchesService;
  });

  // Reset all filters
  const resetFilters = () => {
    setActiveIndustry('All');
    setActiveService('All');
  };

  // Handle booking form changes
  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      // Simulate close after success message
      setIsBookingOpen(false);
      setBookingForm({
        name: '',
        email: '',
        company: '',
        website: '',
        revenue: '',
        challenge: ''
      });
      setBookingSuccess(false);
      setBookingStep(1);
    }, 4000);
  };

  // Calculate customized AI Score
  const generateAssessmentReport = () => {
    const score = Math.floor(Math.random() * (72 - 38 + 1)) + 38; // Give an authentic diagnostic score
    setAssessmentResult({
      score,
      citationIndex: 'Critically Low',
      leaks: ['Zero semantic markup schema', 'Missed citations on high-intent terms', 'Poor crawlability in generative crawlers'],
      recommendation: 'Deploy GEO (Generative Engine Optimization) structural code and index schemas in next 30 days.'
    });
    setAssessmentStep(3);
  };

  return (
    <div className="theme-case min-h-screen bg-brand-bg text-slate-300 flex flex-col font-sans select-none relative selection:bg-brand-accent selection:text-white">
      
      {/* Background Ambience Lines */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-brand-bg to-transparent pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Sticky Header (Includes Sticky Announcement Bar & Navigation) */}
      <Header />

      <main className="flex-1 relative z-10">

        {/* SECTION 3: COMPACT PAGE HERO */}
        <section id="page-hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center relative">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Elegant compact Eyebrow */}
            <div id="hero-eyebrow" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-bold tracking-widest uppercase text-blue-400">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>Case Studies & Proof Metrics</span>
            </div>

            {/* Main Headline */}
            <h1 id="hero-headline" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
              Real B2B results — <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-brand-orange bg-clip-text text-transparent">measured in pipeline</span>, not clicks.
            </h1>

            {/* Sub-headline */}
            <p id="hero-subheadline" className="text-slate-400 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
              See how we help SaaS, tech, IT/MSP, cybersecurity, and professional-services firms get found in Google and AI search, and turn that visibility into revenue.
            </p>

            {/* Hero Call to Action Buttons */}
            <div id="hero-ctas" className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button 
                onClick={() => setIsBookingOpen(true)}
                id="hero-btn-primary"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-accent hover:bg-blue-600 active:bg-blue-700 shadow-lg shadow-brand-accent-glow transition-all duration-200"
              >
                Book a Strategy Call
              </button>
              <button 
                onClick={() => setIsAssessmentOpen(true)}
                id="hero-btn-secondary"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                Free GEO Assessment
              </button>
            </div>

          </div>
        </section>


        {/* SECTION 4: RESULTS SUMMARY BAR (With animated counters) */}
        <section id="results-summary-bar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
          <div className="rounded-2xl bg-brand-card/75 border border-slate-800/80 p-6 md:p-8 backdrop-blur-md shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y divide-slate-800/60 lg:divide-y-0 lg:divide-x divide-slate-800/60">
              
              {AGGREGATE_METRICS.map((metric, idx) => (
                <div 
                  key={metric.id} 
                  id={`metric-item-${idx}`}
                  className={`flex flex-col space-y-1.5 ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}
                >
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest block">
                    {metric.label}
                  </span>
                  
                  {/* Embedded Custom Counting logic */}
                  <div className="flex items-baseline gap-1">
                    <Counter value={metric.value} />
                  </div>
                  
                  <p className="text-slate-400 text-xs font-light leading-snug">
                    {metric.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* SECTION 5: FILTER BAR (Two groups, fully interactive) */}
        <section id="filter-bar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
          <div className="border-t border-slate-900 pt-8 space-y-6">
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-brand-orange" id="filter-icon" />
                <h2 className="font-display font-medium text-lg text-white">
                  Filter Case Archive
                </h2>
              </div>
              
              {/* Reset Indicator if filters are active */}
              {(activeIndustry !== 'All' || activeService !== 'All') && (
                <button 
                  onClick={resetFilters}
                  id="btn-reset-filters"
                  className="self-start md:self-auto inline-flex items-center gap-1.5 text-xs text-brand-orange hover:text-white transition-colors duration-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Active Filters</span>
                </button>
              )}
            </div>

            {/* Combined Filtering Interface */}
            <div className="space-y-4">
              
              {/* Group 1: By Industry */}
              <div id="industry-filter-group" className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest w-24 flex-shrink-0">
                  By Industry:
                </span>
                
                {/* Horizontal scrollable pills on mobile */}
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                  {industries.map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setActiveIndustry(ind)}
                      id={`filter-ind-${ind.replace(/[^a-zA-Z0-9]/g, '')}`}
                      className={`flex-shrink-0 rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                        activeIndustry === ind
                          ? 'bg-brand-accent text-white border-brand-accent shadow-md shadow-brand-accent-glow'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Group 2: By Service */}
              <div id="service-filter-group" className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest w-24 flex-shrink-0">
                  By Service:
                </span>
                
                {/* Horizontal scrollable pills on mobile */}
                <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                  {services.map((ser) => (
                    <button
                      key={ser}
                      onClick={() => setActiveService(ser)}
                      id={`filter-ser-${ser.replace(/[^a-zA-Z0-9]/g, '')}`}
                      className={`flex-shrink-0 rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 border cursor-pointer ${
                        activeService === ser
                          ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-brand-orange-glow'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                      }`}
                    >
                      {ser}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 6: FEATURED CASE STUDY (Spotlight Card) */}
        <section id="featured-case-study" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
          <div className="relative group overflow-hidden rounded-2xl bg-brand-card border border-slate-800/80 hover:border-brand-accent/40 shadow-2xl transition-all duration-300">
            
            {/* Visual accent background blur */}
            <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-brand-accent/5 blur-[80px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
              
              {/* Column 1: Metadata & Copy (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* Tag Indicators */}
                <div id="featured-tags" className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-brand-orange uppercase">
                    ★ Featured Case Study
                  </span>
                  <span className="text-slate-500 text-xs">•</span>
                  <span className="text-xs text-slate-300">{FEATURED_CASE_STUDY.industry}</span>
                  <span className="text-slate-500 text-xs">•</span>
                  <span className="text-xs text-blue-400 font-semibold">{FEATURED_CASE_STUDY.service}</span>
                </div>

                {/* Outcome headline */}
                <h2 id="featured-title" className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  "{FEATURED_CASE_STUDY.title}"
                </h2>

                {/* Summary */}
                <p id="featured-summary" className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                  {FEATURED_CASE_STUDY.summary}
                </p>

                {/* Large Hero Metric Box */}
                <div id="featured-hero-metric" className="rounded-xl bg-slate-900 border border-slate-800/50 p-5 max-w-lg">
                  <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                    Primary Measured Outcome
                  </span>
                  <div className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    {FEATURED_CASE_STUDY.metric}
                  </div>
                  <p className="mt-1 text-xs text-slate-300 font-medium">
                    {FEATURED_CASE_STUDY.metricLabel}
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <button 
                    onClick={() => {
                      // Anchor link simulator or booking opening
                      setIsBookingOpen(true);
                    }}
                    id="featured-read-link"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-white transition-colors duration-200"
                  >
                    <span>Analyze the Strategy Outline</span>
                    <ArrowRight className="w-4 h-4 text-brand-orange" />
                  </button>
                </div>

              </div>

              {/* Column 2: Large Visual Placeholder (5 cols) */}
              <div className="lg:col-span-5 h-72 sm:h-96 lg:h-full relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-950">
                <img 
                  src={FEATURED_CASE_STUDY.imageUrl} 
                  alt="SiteOnLab B2B SEO Case Study" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  id="featured-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-85" />
                
                {/* Visual Label overlay */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block">
                    Enterprise Client Workspace
                  </span>
                  <span className="text-xs text-white font-semibold">
                    {FEATURED_CASE_STUDY.clientName}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 7: CASE STUDY GRID (The Core Archive) */}
        <section id="case-study-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          
          {/* Header indicating active count */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-900/60">
            <span className="text-xs text-slate-400">
              Showing <strong className="text-white font-semibold">{filteredCaseStudies.length}</strong> of {GRID_CASE_STUDIES.length} outcome stories
            </span>
            <span className="text-xs text-slate-500">
              Active: <span className="text-blue-400">{activeIndustry}</span> / <span className="text-brand-orange">{activeService}</span>
            </span>
          </div>

          {/* Conditional Grid Render */}
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map((caseStudy, index) => (
                <CaseStudyCard 
                  key={caseStudy.id} 
                  caseStudy={caseStudy} 
                  index={index}
                />
              ))}
            </div>
          ) : (
            // Custom Empty State for Combined Filters
            <div id="grid-empty-state" className="text-center py-20 rounded-2xl bg-slate-950 border border-slate-900/80 max-w-xl mx-auto px-6 space-y-4">
              <div className="inline-flex p-3 rounded-full bg-slate-900 text-brand-orange border border-slate-800">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display font-medium text-lg text-white">
                No matching outcome studies
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                We have not loaded active placeholders matching BOTH <strong className="text-slate-300">"{activeIndustry}"</strong> and <strong className="text-slate-300">"{activeService}"</strong> services yet. Try broadening your selection.
              </p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}

        </section>


        {/* SECTION 8: LOGO / TRUST STRIP */}
        <section id="trust-strip" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
          <div className="text-center space-y-6">
            <span className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              Trusted by B2B growth teams globally
            </span>
            
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-45 hover:opacity-75 transition-opacity duration-300">
              {CLIENT_LOGOS.map((logo, idx) => (
                <div 
                  key={idx} 
                  id={`brand-logo-${idx}`}
                  className="font-display font-bold text-sm tracking-widest text-slate-400 flex items-center gap-1.5"
                >
                  {/* Styled Mock SVG Brand Icon */}
                  <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-slate-700 to-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-300">
                    {logo.text[0]}
                  </div>
                  <span>{logo.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* SECTION 9: FINAL CTA (Full-width, accent glowing banner) */}
        <section id="final-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800/80 p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
            
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-slate-950 to-orange-950/20" />
            <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-brand-accent/5 blur-[80px]" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-brand-orange/5 blur-[80px]" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Want results like these?
              </h2>
              
              <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto">
                Book a 30-minute strategy call. We'll assess your search and AI presence, show you exactly where the pipeline leaks are, and map a realistic growth trajectory — before you commit to anything.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  id="final-cta-btn-primary"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-accent hover:bg-blue-600 shadow-xl shadow-brand-accent-glow transition-all duration-200 cursor-pointer"
                >
                  Book a Meeting
                </button>
                <button 
                  onClick={() => setIsAssessmentOpen(true)}
                  id="final-cta-btn-secondary"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer"
                >
                  Take the AI Visibility Assessment
                </button>
              </div>

              {/* Trust Indicators below buttons */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  100% Confidential
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <LineChart className="w-3.5 h-3.5 text-emerald-500" />
                  Direct CRM Integration
                </span>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* SECTION 10: FOOTER */}
      <Footer />


      {/* INTERACTIVE COMPONENT A: BOOKING FORM MODAL */}
      {isBookingOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div 
            id="booking-modal-content"
            className="bg-brand-card border border-slate-800 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl relative transition-all animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsBookingOpen(false)}
              id="booking-modal-close"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-slate-950 px-6 py-5 border-b border-slate-900">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-orange" />
                <h3 className="font-display font-semibold text-white text-base">
                  Schedule B2B Revenue Audit
                </h3>
              </div>
              <p className="text-slate-400 text-xs mt-1">
                Zero sales pressure. Just pure strategic analysis.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleBookingSubmit} className="p-6 space-y-4">
              
              {bookingSuccess ? (
                // Success State
                <div id="booking-success-message" className="text-center py-10 space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg">
                    Strategy Audit Requested!
                  </h4>
                  <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    Thank you! We have logged your request for <strong className="text-white">{bookingForm.company || 'your agency'}</strong>. We will review your domain within the next 4 hours and reach out with tailored calendar spots.
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono tracking-wide uppercase pt-2">
                    Review Queue: #3 in general queue
                  </p>
                </div>
              ) : (
                // Form Steps
                <>
                  {bookingStep === 1 ? (
                    <div className="space-y-4 animate-in slide-in-from-right-5 duration-200">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                            Full Name *
                          </label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={bookingForm.name}
                            onChange={handleBookingChange}
                            placeholder="Alex Mercer"
                            className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                            Work Email *
                          </label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={bookingForm.email}
                            onChange={handleBookingChange}
                            placeholder="alex@company.com"
                            className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                            Company Name *
                          </label>
                          <input 
                            type="text" 
                            name="company"
                            required
                            value={bookingForm.company}
                            onChange={handleBookingChange}
                            placeholder="Enterprise Corp"
                            className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                            Website URL *
                          </label>
                          <input 
                            type="url" 
                            name="website"
                            required
                            value={bookingForm.website}
                            onChange={handleBookingChange}
                            placeholder="https://company.com"
                            className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        <button 
                          type="button" 
                          onClick={() => {
                            if (bookingForm.name && bookingForm.email && bookingForm.company && bookingForm.website) {
                              setBookingStep(2);
                            } else {
                              alert("Please fill out all required fields.");
                            }
                          }}
                          className="w-full inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                        >
                          <span>Next: Strategic Details</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                    </div>
                  ) : (
                    <div className="space-y-4 animate-in slide-in-from-right-5 duration-200">
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                          Annual Contract Value / Revenue Segment *
                        </label>
                        <select 
                          name="revenue"
                          required
                          value={bookingForm.revenue}
                          onChange={handleBookingChange}
                          className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-accent transition-colors"
                        >
                          <option value="">Select Company Revenue Profile</option>
                          <option value="1M-5M">$1M - $5M ARR</option>
                          <option value="5M-20M">$5M - $20M ARR</option>
                          <option value="20M-100M">$20M - $100M ARR</option>
                          <option value="100M+">$100M+ Enterprise</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                          Primary Growth Barrier or Search Challenge *
                        </label>
                        <textarea 
                          name="challenge"
                          required
                          value={bookingForm.challenge}
                          onChange={handleBookingChange}
                          placeholder="E.g. We are completely invisible in ChatGPT & Perplexity. Search clicks don't convert to pipeline."
                          rows={3}
                          className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                        />
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button 
                          type="button" 
                          onClick={() => setBookingStep(1)}
                          className="w-1/3 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                        >
                          Back
                        </button>
                        <button 
                          type="submit" 
                          className="w-2/3 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-accent hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                          Book Revenue Strategy Call
                        </button>
                      </div>

                    </div>
                  )}
                </>
              )}

            </form>

            {/* Micro-copy disclaimer */}
            <div className="bg-slate-950/50 px-6 py-3 border-t border-slate-900 text-[10px] text-slate-500 text-center">
              * By booking, you confirm SiteOnLab is authorized to execute a public SEO crawler audit.
            </div>

          </div>
        </div>
      )}


      {/* INTERACTIVE COMPONENT B: AI VISIBILITY ASSESSMENT WIZARD */}
      {isAssessmentOpen && (
        <div id="assessment-modal-overlay" className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div 
            id="assessment-modal-content"
            className="bg-brand-card border border-slate-800 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl relative transition-all animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsAssessmentOpen(false)}
              id="assessment-modal-close"
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="bg-slate-950 px-6 py-5 border-b border-slate-900">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-brand-accent animate-pulse" />
                <h3 className="font-display font-semibold text-white text-base">
                  AI Visibility Engine Assessment
                </h3>
              </div>
              <p className="text-slate-400 text-xs mt-1">
                Estimate your recommendation share across generative engines.
              </p>
            </div>

            <div className="p-6 space-y-4">
              
              {assessmentStep === 1 && (
                <div className="space-y-4 animate-in slide-in-from-right-5 duration-200">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Target Domain URL
                    </label>
                    <input 
                      type="url" 
                      placeholder="https://yourbrand.com"
                      value={assessmentAnswers.website}
                      onChange={(e) => setAssessmentAnswers({ ...assessmentAnswers, website: e.target.value })}
                      className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Current estimated organic monthly traffic
                    </label>
                    <select 
                      value={assessmentAnswers.visibility}
                      onChange={(e) => setAssessmentAnswers({ ...assessmentAnswers, visibility: e.target.value })}
                      className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-brand-accent"
                    >
                      <option value="">Select Traffic Tier</option>
                      <option value="under-10k">Under 10,000 / mo</option>
                      <option value="10k-50k">10,000 - 50,000 / mo</option>
                      <option value="50k-200k">50,000 - 200,000 / mo</option>
                      <option value="200k+">200,000+ / mo</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => {
                      if (assessmentAnswers.website && assessmentAnswers.visibility) {
                        setAssessmentStep(2);
                      } else {
                        alert("Please specify both website and traffic tier to proceed.");
                      }
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-accent hover:bg-blue-600 transition-colors cursor-pointer"
                  >
                    <span>Analyze Citation Architecture</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {assessmentStep === 2 && (
                <div className="space-y-4 animate-in slide-in-from-right-5 duration-200">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      Which search/AI engine is your highest priority?
                    </label>
                    <select 
                      value={assessmentAnswers.channel}
                      onChange={(e) => setAssessmentAnswers({ ...assessmentAnswers, channel: e.target.value })}
                      className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none"
                    >
                      <option value="">Select Focus Engine</option>
                      <option value="perplexity">Perplexity AI Engine</option>
                      <option value="chatgpt">ChatGPT Search / OpenAI</option>
                      <option value="overviews">Google AI Overviews (SGE)</option>
                      <option value="all">Equally balanced citation index</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                      What is your primary revenue leaks concern?
                    </label>
                    <select 
                      value={assessmentAnswers.pain}
                      onChange={(e) => setAssessmentAnswers({ ...assessmentAnswers, pain: e.target.value })}
                      className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none"
                    >
                      <option value="">Select Primary Concern</option>
                      <option value="no-citations">We are active on Google but omitted in AI answers</option>
                      <option value="bad-leads">Traffic does not produce booked qualified sales calls</option>
                      <option value="outdated-seo">Current agency runs manual blog SEO with zero GEO markup</option>
                    </select>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setAssessmentStep(1)}
                      className="w-1/3 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      onClick={generateAssessmentReport}
                      className="w-2/3 inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-orange hover:bg-orange-600 transition-colors cursor-pointer"
                    >
                      Calculate AI Citation Score
                    </button>
                  </div>
                </div>
              )}

              {assessmentStep === 3 && assessmentResult && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  
                  {/* Results Display */}
                  <div className="text-center space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">
                      Diagnostic Citation Score
                    </span>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-red-500/30 bg-red-500/10 text-white font-display text-3xl font-bold">
                      {assessmentResult.score}%
                    </div>
                    <span className="block text-xs font-semibold text-red-400 uppercase tracking-wider">
                      Recommendation Citation Index: {assessmentResult.score < 50 ? 'Marginal / Warning' : 'Moderate'}
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2">
                    <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block">
                      Identified Pipeline Leaks
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {assessmentResult.leaks.map((leak: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-red-500 font-bold">•</span>
                          <span>{leak}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-blue-950/20 border border-brand-accent/20 p-4 space-y-1">
                    <span className="text-[9px] font-bold tracking-widest text-blue-400 uppercase block">
                      Strategic Prescription
                    </span>
                    <p className="text-xs text-slate-300">
                      {assessmentResult.recommendation}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={() => {
                        setIsAssessmentOpen(false);
                        setIsBookingOpen(true);
                      }}
                      className="w-full inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-accent hover:bg-blue-600 transition-colors"
                    >
                      <span>Review Audit with B2B Analyst</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

            </div>

            {/* Disclaimer */}
            <div className="bg-slate-950/50 px-6 py-3 border-t border-slate-900 text-[10px] text-slate-500 text-center">
              * Calculation represents simulated diagnostic indicators matching typical competitive categories.
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
