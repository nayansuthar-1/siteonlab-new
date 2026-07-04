"use client";

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Cpu, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  AlertCircle, 
  Search, 
  Building, 
  ChevronRight, 
  ChevronDown, 
  Calendar, 
  DollarSign, 
  Target, 
  LineChart, 
  Clock, 
  Layers, 
  Globe, 
  ShieldCheck, 
  MapPin, 
  CornerDownRight,
  ExternalLink
} from 'lucide-react';

import HeroGraphic from './components/HeroGraphic';
import GrowthBlueprintModal from './components/GrowthBlueprintModal';
import SeoAuditor from './components/SeoAuditor';
import { submitLead } from '@/lib/submitLead';

import {
  HERO_DATA,
  TRUST_METRICS,
  CHALLENGES,
  SOLUTIONS,
  BUYER_JOURNEY,
  PROCESS_STEPS,
  WHY_CHOOSE_US,
  SERVICES,
  CASE_STUDIES,
  TESTIMONIAL,
  RELATED_INDUSTRIES,
  FAQS,
  FINAL_CTA
} from './data/industryData';

export default function B2BTechLandingPage() {
  const [blueprintModalOpen, setBlueprintModalOpen] = useState(false);
  const [selectedCaseStudyIdx, setSelectedCaseStudyIdx] = useState(0);
  const [selectedJourneyIdx, setSelectedJourneyIdx] = useState(0);
  
  // FAQ state
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(0);

  // Scheduling State
  const [selectedDate, setSelectedDate] = useState('Monday, July 1');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:00 AM (EST)');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');


  // Listening to custom event from SeoAuditor triggers
  useEffect(() => {
    const handleOpenModal = () => setBlueprintModalOpen(true);
    window.addEventListener('open-blueprint-modal', handleOpenModal);
    return () => window.removeEventListener('open-blueprint-modal', handleOpenModal);
  }, []);

  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Filter FAQs based on search query
  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  const datesToBook = [
    { label: 'Monday, July 1', desc: 'July 1st' },
    { label: 'Tuesday, July 2', desc: 'July 2nd' },
    { label: 'Wednesday, July 3', desc: 'July 3rd' },
    { label: 'Thursday, July 4', desc: 'July 4th' }
  ];

  const timeSlots = [
    '9:00 AM (EST)',
    '10:30 AM (EST)',
    '1:00 PM (EST)',
    '2:30 PM (EST)',
    '4:00 PM (EST)'
  ];

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) {
      alert('Please fill in your name and email to book.');
      return;
    }
    submitLead({
      source: "B2B Tech Landing Page — Discovery Session Booking",
      name: bookingName,
      email: bookingEmail,
      fields: {
        "Preferred Date": selectedDate,
        "Preferred Time": selectedTimeSlot,
      },
    });
    setBookingConfirmed(true);
  };

  return (
    <div className="theme-b2btech min-h-screen bg-[#0A0A0B] text-[#F8F8F8] flex flex-col selection:bg-blue-600 selection:text-white antialiased">

      <main className="flex-grow">
        
        {/* SECTION 1: HERO SECTION */}
        <section id="hero" className="relative pt-10 pb-16 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Ambient background styling */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[160px]" />
            <div className="absolute top-2/3 right-10 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Copy Column (Left) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center space-x-2 bg-blue-600/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{HERO_DATA.eyebrow}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8F8F8] font-display leading-[1.1]">
                  B2B marketing for <span className="text-blue-500">technology</span> companies that drives pipeline.
                </h1>

                <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl">
                  {HERO_DATA.supportingCopy}
                </p>

                {/* Conversion Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-3">
                  <button
                    onClick={() => setBlueprintModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-sm transition-all shadow-lg shadow-blue-600/10 hover:scale-[1.01] flex items-center justify-center cursor-pointer"
                  >
                    {HERO_DATA.primaryCta} <ArrowUpRight className="w-4 h-4 ml-2" />
                  </button>
                  <button
                    onClick={() => handleSmoothScroll('cases')}
                    className="bg-[#0F0F11] hover:bg-white/5 text-white/80 border border-white/10 hover:border-white/20 font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-sm transition-all flex items-center justify-center cursor-pointer"
                  >
                    {HERO_DATA.secondaryCta}
                  </button>
                </div>

                {/* Micro bullet trust flags */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-mono text-white/40 uppercase tracking-wider">
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>No Vanity Leads (MQLs)</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Generative Engine (GEO) Ready</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Full CRM Salesforce/HubSpot Mapping</span>
                  </div>
                </div>

              </div>

              {/* Simple High-Fidelity Static Graphics Column (Right) - No moving parts */}
              <div className="lg:col-span-5 w-full">
                <HeroGraphic />
              </div>

            </div>
          </div>
        </section>


        {/* SECTION 2: TRUST & CREDIBILITY METRICS */}
        <section className="bg-transparent border-b border-white/10 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest block">Validated Growth</span>
              <h2 className="text-sm font-semibold text-white/40 mt-1 uppercase tracking-wider font-mono">Our core performance metrics in the technology sector</h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {TRUST_METRICS.map((item, index) => (
                <div 
                  key={index}
                  className="bg-[#0F0F11] border border-white/10 rounded-sm p-5 text-left hover:border-white/20 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-display">{item.metric}</div>
                  <div className="text-xs font-semibold text-[#F8F8F8] mt-1 leading-snug">{item.label}</div>
                  <div className="text-[10px] text-white/40 mt-1 leading-normal">{item.subtext}</div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* SECTION 3: INDUSTRY CHALLENGES */}
        <section id="challenges" className="py-16 sm:py-24 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-left max-w-3xl mb-12 lg:mb-16">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Industry Challenges</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mt-2">
                Why growing a modern B2B technology company is becoming more competitive.
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 leading-relaxed">
                The traditional marketing playbook has collapsed. Buyers no longer fill out high-friction gated forms to download basic whitepapers, and Google's transition to AI-generated answers has diluted traditional organic click volume. To scale, tech providers must build highly technical, high-intent authority systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CHALLENGES.map((challenge) => (
                <div 
                  key={challenge.id}
                  className="bg-[#0F0F11] border border-white/10 rounded-sm p-6 flex flex-col justify-between hover:border-white/20 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="bg-blue-600/10 border border-blue-500/20 p-2 rounded-sm inline-block text-blue-400">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-100 font-display">{challenge.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{challenge.description}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 text-[11px] text-white/40 leading-relaxed">
                    <span className="font-semibold text-red-400/80 block uppercase tracking-wider font-mono mb-1">Revenue Impact:</span>
                    {challenge.impact}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* SECTION 4: HOW HYBRIDMONKS SOLVES THESE CHALLENGES */}
        <section id="solutions" className="py-16 sm:py-24 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-left max-w-3xl mb-12 lg:mb-16">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Our Solution</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mt-2">
                A complete B2B growth system built for Technology companies.
              </h2>
              <p className="text-sm sm:text-base text-white/60 mt-3 leading-relaxed">
                We bypass high-level marketing advice. HybridMonks engineers a custom, integrated system that captures in-market buyer intent, leverages emerging AI search pathways, and establishes transparent CRM revenue attribution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {SOLUTIONS.map((sol) => (
                <div 
                  key={sol.id}
                  className="bg-[#0F0F11] border border-white/10 rounded-sm p-5 flex flex-col justify-between hover:border-white/20 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                    <h3 className="text-sm font-bold text-slate-200 font-display">{sol.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{sol.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] text-white/40 font-mono">
                    <span className="font-semibold text-emerald-400 uppercase tracking-widest block mb-0.5">Sustained Outcome</span>
                    {sol.outcome}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* INTERACTIVE COMPONENT: SEO & AI SEARCH VISIBILITY DIAGNOSTIC HUB */}
        <section id="diagnostic-tool" className="py-16 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SeoAuditor />
          </div>
        </section>


        {/* SECTION 5: INDUSTRY BUYING JOURNEY */}
        <section id="journey" className="py-16 sm:py-24 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Buyer Journey Mapping</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mt-2">
                How modern B2B Technology buyers choose vendors.
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
                Tech buying isn't linear. It's a complex consensus process across multiple departments. Click each stage to examine how we engineer content and campaigns to support buyers at every step.
              </p>
            </div>

            {/* Interactive Timeline Stepper */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Timeline selector tabs */}
              <div className="lg:col-span-4 flex flex-col space-y-2">
                {BUYER_JOURNEY.map((stage, idx) => (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedJourneyIdx(idx)}
                    className={`text-left p-4 rounded-sm border transition-all flex items-center justify-between cursor-pointer ${
                      selectedJourneyIdx === idx
                        ? 'bg-blue-600/10 border-blue-500 text-slate-100 font-semibold'
                        : 'bg-[#0F0F11]/50 border-white/10 text-white/60 hover:border-white/20 hover:bg-[#0F0F11]'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-display">{stage.stage}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedJourneyIdx === idx ? 'translate-x-1 text-blue-400' : 'text-slate-600'}`} />
                  </button>
                ))}
              </div>

              {/* Stage details box */}
              <div className="lg:col-span-8 bg-[#0F0F11] border border-white/10 p-6 sm:p-8 rounded-sm relative overflow-hidden min-h-[300px]">
                <div className="absolute top-0 right-0 p-4 font-mono text-[64px] font-bold text-white/[0.03] select-none">
                  0{selectedJourneyIdx + 1}
                </div>

                <div className="space-y-6 relative z-10">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-blue-400 font-bold tracking-widest">Active Phase</span>
                    <h3 className="text-lg font-bold text-slate-100 font-display mt-1">{BUYER_JOURNEY[selectedJourneyIdx].stage}</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-white/40 font-bold block">Buyer Mindset & Stumbling Blocks:</span>
                      <p className="text-xs text-[#F8F8F8]/80 mt-1 leading-relaxed">
                        {BUYER_JOURNEY[selectedJourneyIdx].buyerMindset}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-white/40 font-bold block">HybridMonks Campaign Playbook:</span>
                      <p className="text-xs text-blue-300 mt-1 leading-relaxed">
                        {BUYER_JOURNEY[selectedJourneyIdx].siteOnLabPlaybook}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase text-white/40 font-bold block">Key Deliverables Created:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {BUYER_JOURNEY[selectedJourneyIdx].deliverables.map((del, i) => (
                          <span key={i} className="bg-[#0A0A0B] border border-white/10 px-3 py-1 rounded-sm text-[10px] font-mono text-white/50">
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 6: OUR PROCESS */}
        <section id="process" className="py-16 sm:py-24 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-left max-w-3xl mb-12 lg:mb-16">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Our Process</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mt-2">
                From strategy to predictable enterprise revenue.
              </h2>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">
                We believe in rigorous execution frameworks. Our agile process ensures we locate funnel leaks immediately, deploy customized technical solutions, and optimize for continuous customer acquisition.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
              {PROCESS_STEPS.map((step, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0F0F11] border border-white/10 p-6 rounded-sm hover:border-white/20 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-extrabold text-blue-500/10 font-mono">{step.stepNum}</span>
                      <span className="bg-blue-600/10 border border-blue-500/20 text-[10px] text-blue-300 px-2.5 py-0.5 rounded-sm font-mono">
                        {step.timeline}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-200 font-display">{step.name}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{step.description}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase text-white/40 font-bold block mb-1.5">Action Milestones:</span>
                    <ul className="space-y-1 text-[10px] text-white/50">
                      {step.deliverables.map((del, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* SECTION 7: WHY CHOOSE HYBRIDMONKS */}
        <section className="py-16 sm:py-24 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-4 space-y-4 text-left">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Why Companies Partner With Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display">
                  A B2B growth agency that actually understands technology.
                </h2>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Most agencies only deliver clicks and generic blogs. We are built specifically to handle the structural nuances, long selling cycle, and compliance layers of the technology ecosystem.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setBlueprintModalOpen(true)}
                    className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 font-mono uppercase tracking-wider cursor-pointer"
                  >
                    View Our Tech Frameworks <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {WHY_CHOOSE_US.map((card, i) => (
                  <div key={i} className="bg-[#0F0F11] border border-white/10 p-5 rounded-sm space-y-2">
                    <h3 className="text-sm font-bold text-slate-200 font-display">{card.title}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{card.description}</p>
                    <div className="text-[10px] text-white/40 pt-2 border-t border-white/10 leading-relaxed">
                      <span className="font-semibold text-blue-400 uppercase tracking-widest block mb-0.5">Primary Benefit:</span>
                      {card.benefit}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 8: SERVICES FOR TECHNOLOGY */}
        <section id="services" className="py-16 sm:py-24 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-left max-w-3xl mb-12 lg:mb-16">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Our Growth Services</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mt-2">
                Growth solutions built for B2B Technology firms.
              </h2>
              <p className="text-sm text-white/60 mt-2 leading-relaxed">
                Bespoke marketing capabilities aligned with modern tech buying systems. We deploy specialist strategies that increase pipeline velocity, build sustainable organic authority, and optimize conversions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((serv, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0F0F11] border border-white/10 p-6 rounded-sm hover:border-blue-500/30 hover:bg-[#141416] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold block">{serv.focus}</span>
                    <h3 className="text-base font-bold text-slate-100 font-display group-hover:text-blue-300 transition-colors">{serv.name}</h3>
                    <p className="text-xs text-white/60 leading-relaxed">{serv.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40 uppercase tracking-wider">
                    <span>Internal Link Page:</span>
                    <a 
                      href="#blueprint-modal" 
                      onClick={(e) => {
                        e.preventDefault();
                        setBlueprintModalOpen(true);
                      }}
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                    >
                      {serv.slug} <CornerDownRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* SECTION 9: CASE STUDIES (Interactive Tabs) */}
        <section id="cases" className="py-16 sm:py-24 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Success Stories</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mt-2">
                Growth results from B2B technology companies.
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mt-2 leading-relaxed">
                We measure our value by the financial scale of our client pipeline. Browse our interactive tech case studies to examine exact problems, solutions, and audited contract outcomes.
              </p>
            </div>

            {/* Interactive Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {CASE_STUDIES.map((cs, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCaseStudyIdx(idx)}
                  className={`px-4 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider font-mono border transition-all cursor-pointer ${
                    selectedCaseStudyIdx === idx
                      ? 'bg-blue-600 border-blue-500 text-white shadow-md'
                      : 'bg-[#0F0F11] border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  {cs.industry}
                </button>
              ))}
            </div>

            {/* Active Case Study Details Layout */}
            <div className="bg-[#0F0F11] border border-white/10 rounded-sm p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Metrics and overview (Left Column) */}
                <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">Audited Client Story</span>
                    <h3 className="text-lg font-bold text-slate-100 font-display leading-tight">{CASE_STUDIES[selectedCaseStudyIdx].title}</h3>
                  </div>

                  {/* Highlight Metrics */}
                  <div className="space-y-3 bg-[#0A0A0B] p-5 rounded-sm border border-white/10">
                    <span className="text-[9px] font-mono text-white/40 uppercase font-semibold tracking-wider block">Closed Outcomes:</span>
                    <div className="space-y-2">
                      {CASE_STUDIES[selectedCaseStudyIdx].metrics.map((metric, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="text-xs font-bold text-slate-200 font-mono">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-white/40 font-mono flex items-center justify-between">
                    <span>Audit Period: {CASE_STUDIES[selectedCaseStudyIdx].timeline}</span>
                    <button 
                      onClick={() => setBlueprintModalOpen(true)}
                      className="text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
                    >
                      Request Case Brief
                    </button>
                  </div>
                </div>

                {/* Core narratives (Right Column) */}
                <div className="lg:col-span-8 space-y-5 text-left text-xs sm:text-sm leading-relaxed text-[#F8F8F8]/80">
                  <div className="space-y-1">
                    <span className="font-bold text-white/40 block font-mono uppercase text-[10px]">The Challenge:</span>
                    <p className="bg-[#0A0A0B]/60 p-4 rounded-sm border border-white/10 text-white/60 leading-relaxed text-xs">
                      {CASE_STUDIES[selectedCaseStudyIdx].challenge}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-blue-300 block font-mono uppercase text-[10px]">The HybridMonks Playbook:</span>
                    <p className="bg-blue-600/10 p-4 rounded-sm border border-blue-500/20 text-blue-200 leading-relaxed text-xs">
                      {CASE_STUDIES[selectedCaseStudyIdx].solution}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-bold text-emerald-400 block font-mono uppercase text-[10px]">Business Outcome:</span>
                    <p className="bg-emerald-950/10 p-4 rounded-sm border border-emerald-500/10 text-[#F8F8F8]/80 leading-relaxed text-xs">
                      {CASE_STUDIES[selectedCaseStudyIdx].outcome}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* SECTION 10: TESTIMONIALS */}
        <section className="py-16 sm:py-24 bg-transparent border-b border-white/10 relative overflow-hidden">
          {/* Subtle decoration line representing signal flow */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Executive Alignment</span>
            
            <div className="mt-8 space-y-6">
              <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-200 font-display italic leading-relaxed">
                "{TESTIMONIAL.quote}"
              </p>

              <div className="pt-4 flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-500/30 shadow-md">
                  <span className="text-sm font-bold text-blue-200 font-mono">MV</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-100 font-display">{TESTIMONIAL.clientName}</div>
                  <div className="text-xs text-white/40">{TESTIMONIAL.role}, <span className="text-blue-400">{TESTIMONIAL.company}</span></div>
                </div>
              </div>

              {/* Tag outcomes */}
              <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 bg-slate-900/60 border border-slate-900 rounded-full px-5 py-2 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                <span className="font-semibold text-emerald-400">Validated Outcome: {TESTIMONIAL.outcome}</span>
                <span className="hidden sm:inline text-slate-700">|</span>
                <span>Audit Scale: {TESTIMONIAL.timeline}</span>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 11: RELATED INDUSTRIES */}
        <section className="py-16 bg-transparent border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Other Industries We Support</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 font-display mt-2">
                Explore how we help other B2B companies grow.
              </h2>
              <p className="text-xs text-white/60 mt-2">
                HybridMonks works exclusively with B2B sectors. Select any corresponding industry category below to read specialized playbooks.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {RELATED_INDUSTRIES.map((ind, i) => (
                <div 
                  key={i}
                  className="bg-[#0F0F11] border border-white/10 p-4 rounded-sm flex flex-col justify-between hover:border-white/20 transition-all duration-200"
                >
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-200 block font-display">{ind.name}</span>
                    <p className="text-[10px] text-[#F8F8F8]/50 leading-normal">{ind.description}</p>
                  </div>

                  <a
                    href="#blueprint-modal"
                    onClick={(e) => {
                      e.preventDefault();
                      setBlueprintModalOpen(true);
                    }}
                    className="text-[9px] font-mono font-semibold text-blue-400 hover:text-blue-300 mt-3 self-start flex items-center"
                  >
                    View {ind.name} Blueprint <ChevronRight className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* SECTION 12: FREQUENTLY ASKED QUESTIONS (Searchable & Filterable Accordion) */}
        <section id="faq" className="py-16 sm:py-24 bg-transparent border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mt-2">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mt-2">
                Brief, executive answers regarding our growth processes, SEO tactics, and ROI integrations.
              </p>
            </div>

            {/* Interactive FAQ Search filter */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search FAQs for keywords (e.g., SEO, ROI, CRM, timeline)..."
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm py-3 pl-11 pr-4 text-[#F8F8F8] placeholder-white/30 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
              />
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-white/40" />
              {faqSearchQuery && (
                <button 
                  onClick={() => setFaqSearchQuery('')}
                  className="absolute right-4 top-3 text-xs text-white/40 hover:text-white font-mono uppercase"
                >
                  Clear
                </button>
              )}
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const actualIdx = FAQS.indexOf(faq);
                  const isExpanded = expandedFaqIdx === actualIdx;
                  return (
                    <div 
                      key={actualIdx}
                      className="bg-[#0F0F11] border border-white/10 rounded-sm overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => setExpandedFaqIdx(isExpanded ? null : actualIdx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-display hover:bg-[#141416] transition-colors cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-white/40 shrink-0 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-blue-400' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 pt-1 text-xs text-white/60 leading-relaxed border-t border-white/10">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 bg-[#0F0F11]/50 border border-white/10 rounded-sm">
                  <span className="text-xs text-white/40 font-mono">No matching FAQs found for "{faqSearchQuery}". Try terms like "SEO" or "ROI".</span>
                </div>
              )}
            </div>

          </div>
        </section>


        {/* SECTION 13: FINAL CTA & INTERACTIVE CALL SCHEDULER */}
        <section id="final-booking" className="py-16 sm:py-24 bg-transparent relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[140px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Closing pitch (Left Column) */}
              <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono">Get Started</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-100 font-display leading-tight">
                    {FINAL_CTA.h2}
                  </h2>
                  <p className="text-sm sm:text-base text-[#F8F8F8]/60 leading-relaxed">
                    {FINAL_CTA.body}
                  </p>
                </div>

                <div className="space-y-4 bg-[#0F0F11] border border-white/10 p-5 rounded-sm">
                  <div className="flex items-center space-x-2 text-blue-300">
                    <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-xs font-bold font-mono uppercase tracking-wider">HybridMonks Security Guarantee</span>
                  </div>
                  <p className="text-xs text-[#F8F8F8]/50 leading-relaxed">
                    We strictly sign Non-Disclosure Agreements (NDAs) before auditing any technical architecture, CRM configuration, or code repositories. Your IP and customer pipeline information remain fully isolated and secure.
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-2">
                  <button
                    onClick={() => setBlueprintModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-sm transition-all shadow-md shadow-blue-600/10 cursor-pointer"
                  >
                    {FINAL_CTA.primaryCta}
                  </button>
                  <a
                    href="#challenges"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSmoothScroll('challenges');
                    }}
                    className="text-xs font-bold text-white/40 hover:text-white font-mono uppercase tracking-wider"
                  >
                    Review Challenges
                  </a>
                </div>
              </div>

              {/* Interactive Calendar Scheduler Box (Right Column) */}
              <div className="lg:col-span-6">
                <div className="bg-[#0F0F11] border border-white/10 rounded-sm p-6 shadow-2xl flex flex-col justify-between h-full">
                  {!bookingConfirmed ? (
                    <form onSubmit={handleBookSession} className="space-y-5">
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div>
                          <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">15m Discovery Session</span>
                          <h3 className="text-base font-bold text-slate-100 font-display mt-0.5">Book Strategic Call</h3>
                        </div>
                        <span className="text-[10px] bg-[#0A0A0B] border border-white/10 px-2.5 py-1 rounded-sm text-emerald-400 font-semibold font-mono">
                          Slots Available
                        </span>
                      </div>

                      {/* Date Selectors */}
                      <div>
                        <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2 font-mono">Select a Date:</label>
                        <div className="grid grid-cols-2 gap-2">
                          {datesToBook.map((date) => (
                            <button
                              type="button"
                              key={date.label}
                              onClick={() => setSelectedDate(date.label)}
                              className={`text-center py-2 px-3 rounded-sm border text-xs transition-colors font-semibold cursor-pointer ${
                                selectedDate === date.label
                                  ? 'bg-blue-600 border-blue-500 text-white'
                                  : 'bg-[#0A0A0B] border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                              }`}
                            >
                              {date.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Time Slot Selectors */}
                      <div>
                        <label className="block text-[10px] font-bold text-white/40 uppercase tracking-wider mb-2 font-mono">Select a Time Slot:</label>
                        <div className="flex flex-wrap gap-1.5">
                          {timeSlots.map((slot) => (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setSelectedTimeSlot(slot)}
                              className={`py-1.5 px-3 rounded-sm border text-xs font-mono transition-colors cursor-pointer ${
                                selectedTimeSlot === slot
                                  ? 'bg-blue-600/20 border-blue-500 text-blue-200 font-semibold'
                                  : 'bg-[#0A0A0B] border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Info Inputs */}
                      <div className="space-y-3 pt-2">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <input
                              type="text"
                              required
                              placeholder="Your Full Name"
                              value={bookingName}
                              onChange={(e) => setBookingName(e.target.value)}
                              className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm p-2.5 text-white placeholder-white/30 text-xs focus:border-blue-500 outline-none"
                            />
                          </div>
                          <div>
                            <input
                              type="email"
                              required
                              placeholder="Business Email"
                              value={bookingEmail}
                              onChange={(e) => setBookingEmail(e.target.value)}
                              className="w-full bg-[#0A0A0B] border border-white/10 rounded-sm p-2.5 text-white placeholder-white/30 text-xs focus:border-blue-500 outline-none"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase py-3.5 rounded-sm transition-all shadow-lg shadow-emerald-600/10 tracking-wider font-mono flex items-center justify-center cursor-pointer"
                      >
                        Confirm Booking on {selectedDate.split(',')[1]} at {selectedTimeSlot.split(' ')[0]}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-10 space-y-4 my-auto">
                      <div className="w-12 h-12 bg-emerald-950/55 rounded-sm flex items-center justify-center border border-emerald-500/30 mx-auto">
                        <CheckCircle2 className="w-6 h-6 text-emerald-300" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-slate-100 font-display">Strategy Session Reserved!</h4>
                        <p className="text-xs text-[#F8F8F8]/60">
                          We have locked in your session on <span className="text-blue-400 font-semibold">{selectedDate}</span> at <span className="text-blue-400 font-semibold">{selectedTimeSlot}</span>.
                        </p>
                      </div>
                      <p className="text-xs text-white/40 max-w-sm mx-auto leading-relaxed">
                        An invite with secure Google Meet details and our customized B2B Technology Growth questionnaire has been sent to <span className="text-[#F8F8F8]/80 font-medium font-mono">{bookingEmail}</span>. We look forward to presenting your live audit.
                      </p>
                      <button
                        onClick={() => {
                          setBookingConfirmed(false);
                          setBookingName('');
                          setBookingEmail('');
                        }}
                        className="text-[10px] font-mono text-white/40 hover:text-white uppercase underline cursor-pointer"
                      >
                        Reschedule / Book Another Slot
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Diagnostic questionnaire modal window */}
      <GrowthBlueprintModal 
        isOpen={blueprintModalOpen} 
        onClose={() => setBlueprintModalOpen(false)} 
      />

    </div>
  );
}
