"use client";

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Globe, 
  Search, 
  Users, 
  X, 
  Zap, 
  Award, 
  DollarSign, 
  MessageSquare,
  Building,
  Mail,
  User
} from 'lucide-react';

// Define structures for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

// Define structure for Assessment Questions
interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    points: number;
  }[];
}

export default function LandingPage() {
  // UI states
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [assessmentOpen, setAssessmentOpen] = useState(false);
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentScores, setAssessmentScores] = useState<number[]>([]);
  const [assessmentFinished, setAssessmentFinished] = useState(false);
  
  // Lead Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    source: 'Landing Page'
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scroll helper
  const scrollToForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const element = document.getElementById('strategy-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close modal if open
    setAssessmentOpen(false);
  };

  // Toggle FAQ Accordion
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Assessment Quiz definition
  const questions: Question[] = [
    {
      id: 1,
      text: "How often does your brand currently appear when prompting ChatGPT, Perplexity, or Gemini about solutions in your vertical?",
      options: [
        { text: "Never / We are completely invisible in answers or citations", points: 1 },
        { text: "Occasionally cited as an option, but competitors dominate the output", points: 2 },
        { text: "Regularly recommended with direct source citations and hyperlinks", points: 3 }
      ]
    },
    {
      id: 2,
      text: "How do you optimize your B2B organic search strategy for search engines and AI engines (GEO)?",
      options: [
        { text: "Basic high-volume generic keywords without optimizing for AI crawlers", points: 1 },
        { text: "Publishing educational content, but lack programmatic structure or structured schema", points: 2 },
        { text: "Comprehensive topical SEO optimized for semantic extraction and LLM citations", points: 3 }
      ]
    },
    {
      id: 3,
      text: "Are your paid Google and LinkedIn campaigns directly mapped to CFO-visible pipeline?",
      options: [
        { text: "Mainly optimized for clicks, traffic, or soft MQL downloads", points: 1 },
        { text: "Tied to sales-qualified leads (SQLs), but attribution is manual or loose", points: 2 },
        { text: "Fully integrated multi-touch pipelines with closed-loop CRM reporting", points: 3 }
      ]
    },
    {
      id: 4,
      text: "What is your approach to converting high-intent traffic on your primary sales pages?",
      options: [
        { text: "We rarely update landing page designs or test interactive elements", points: 1 },
        { text: "Standard forms with occasional copy updates or basic tracking", points: 2 },
        { text: "Systematic, quarterly conversion sprints focusing on high-intent pipeline", points: 3 }
      ]
    }
  ];

  const startAssessment = () => {
    setAssessmentStep(0);
    setAssessmentScores([]);
    setAssessmentFinished(false);
    setAssessmentOpen(true);
  };

  const handleOptionSelect = (points: number) => {
    const updatedScores = [...assessmentScores, points];
    setAssessmentScores(updatedScores);
    
    if (assessmentStep < questions.length - 1) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      setAssessmentFinished(true);
    }
  };

  const getAssessmentResult = () => {
    const total = assessmentScores.reduce((a, b) => a + b, 0);
    if (total <= 6) {
      return {
        tier: "Level 1 — AI Invisible",
        description: "Your brand is locked out of AI-powered buyer research loops. Search engines and AI models (Gemini, ChatGPT) do not have the technical schema or topical authoritative content required to index, cite, or recommend your solution.",
        action: "Urgent 5-pillar foundational audit needed."
      };
    } else if (total <= 9) {
      return {
        tier: "Level 2 — Basic Search Baseline",
        description: "You have standard organic search presence, but you are largely bypassed by LLMs when users ask for category recommendations. Clicks and traffic are not effectively converting to pipeline.",
        action: "Requires GEO (Generative Engine Optimization) integration & CRO sprint."
      };
    } else {
      return {
        tier: "Level 3 — Enterprise Visibility Pioneer",
        description: "Your organization has excellent high-intent organic foundations. However, you need systemic automated nurture and multi-channel attribution to scale predictable pipeline and defend your authority.",
        action: "The perfect candidate to accelerate with the B2B Revenue Growth Engine™."
      };
    }
  };

  // Form handling
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required.";
    
    if (!formData.email.trim()) {
      errors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid work email.";
    }
    
    if (!formData.company.trim()) errors.company = "Company name is required.";
    if (!formData.website.trim()) errors.website = "Website URL is required.";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API pipeline submit
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
    }, 1200);
  };

  // FAQ items array
  const faqItems: FAQItem[] = [
    {
      question: "What exactly does 'measurable movement' mean?",
      answer: "We define precise tracked queries, target keywords, and active pipelines in your contract before we kick off. This includes specific Generative Engine Visibility targets (GEO) and search engine authority growth, tracked via our proprietary AI Visibility Scorecards."
    },
    {
      question: "Is ad spend included in the monthly fee?",
      answer: "No, advertising spend is billed directly by the platforms (Google Ads, LinkedIn Ads) to your credit card. SiteOnLab manages the entire strategy, targeting parameters, copywriting, landing page design, and creative optimization within your $2,000/month flat fee."
    },
    {
      question: "How is this different from a standard SEO agency?",
      answer: "Traditional SEO agencies focus purely on traffic and keyword counts. We view SEO as only one of five pillars. The B2B Revenue Growth Engine™ integrates SEO with AI visibility (GEO/AEO), high-intent paid acquisition, conversion rate optimization, and pipeline attribution to drive metrics your CFO cares about."
    },
    {
      question: "What size company is this solution designed for?",
      answer: "This program is purpose-built for growth-stage B2B SaaS, IT/MSP, cybersecurity, software, and professional services firms with 10 to 500 employees that need a highly scientific pipeline growth model but aren't ready to hire a massive internal growth department."
    },
    {
      question: "Can we add ABM, website redesigns, or custom AI agents?",
      answer: "Absolutely. Once the foundation of the B2B Revenue Growth Engine™ is operational and proving positive ROI, we offer specialized add-on capabilities including full Account-Based Marketing (ABM) playbooks, headless web architecture, and custom internal AI sales agents."
    }
  ];

  return (
    <div className="theme-package min-h-screen bg-[#0B1120] text-slate-100 font-sans antialiased relative overflow-x-hidden selection:bg-[#6366F1] selection:text-white">
      
      {/* Background radial glow accents for premium Bold Typography SaaS styling */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-950/15 blur-[120px] pointer-events-none"></div>

      <main>
        {/* 2. HERO SECTION */}
        <section id="hero" className="relative pt-16 pb-24 md:pt-24 md:pb-32 px-6 sm:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Eyebrow */}
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-8">
              B2B Revenue Growth & AI Visibility
            </div>
            
            {/* H1 Heading */}
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6 max-w-4xl mx-auto">
              Become the company <span className="text-slate-400">buyers find on Google</span> — and the one AI recommends.
            </h1>
            
            {/* Subhead */}
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              The B2B Revenue Growth Engine™ is one complete system that gets you found, captures demand, converts it, and proves it as pipeline. See measurable movement in <span className="text-white font-semibold">90 days</span> — or month four is on us.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button 
                onClick={() => scrollToForm()}
                className="w-full sm:w-auto bg-white text-[#0B1120] hover:bg-slate-100 font-bold px-8 py-4 rounded-lg transition-colors text-base flex items-center justify-center gap-2 cursor-pointer group"
                id="hero-primary-cta"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={startAssessment}
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-colors text-base flex items-center justify-center gap-2 cursor-pointer"
                id="hero-secondary-cta"
              >
                Take the AI Visibility Assessment
                <BarChart3 className="w-4 h-4 text-[#6366F1]" />
              </button>
            </div>

            {/* Trust Strip */}
            <div className="border-t border-b border-white/5 py-6 max-w-5xl mx-auto">
              <p className="text-xs tracking-widest text-slate-500 font-bold uppercase mb-3">
                Engineered specifically for:
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-medium text-slate-400">
                <span>B2B SaaS</span>
                <span className="text-slate-700">•</span>
                <span>IT/MSP</span>
                <span className="text-slate-700">•</span>
                <span>Cybersecurity</span>
                <span className="text-slate-700">•</span>
                <span>Software</span>
                <span className="text-slate-700">•</span>
                <span>Professional Services</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. PROBLEM SECTION */}
        <section id="problems" className="py-24 bg-[#111827]/30 border-y border-white/5 px-6 sm:px-8 lg:px-10 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest text-red-400 uppercase">
                The Friction points
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 leading-[1.1]">
                Traffic isn't pipeline. And if AI doesn't cite you, you're invisible.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-[#1E293B]/40 border border-white/5 hover:border-white/10 p-8 rounded-xl relative overflow-hidden group transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500/40"></div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  You pay for traffic that never becomes pipeline.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Traffic numbers and page views make for pretty charts. But if those visitors don't have matching intent or targeted needs, you are spending thousands of dollars feeding a leaky funnel.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1E293B]/40 border border-white/5 hover:border-white/10 p-8 rounded-xl relative overflow-hidden group transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500/40"></div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Your agencies report clicks your CFO doesn't care about.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Traditional agencies hide behind meaningless vanity metrics like ranking numbers and impression shares. Meanwhile, marketing budget leaves your bank account without any verifiable correlation to closed-won revenue.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1E293B]/40 border border-white/5 hover:border-white/10 p-8 rounded-xl relative overflow-hidden group transition-all duration-300">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500/40"></div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Buyers shortlist vendors inside AI tools — and you are absent.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Modern buyers aren't scrolling past page one of Google anymore. They prompt ChatGPT, Perplexity, or Gemini to do the comparison. If AI engines aren't actively referencing your brand, your sales cycle has lost before it even begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE OFFER — "The B2B Revenue Growth Engine™" */}
        <section id="offer" className="py-24 px-6 sm:px-8 lg:px-10 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest text-[#6366F1] uppercase">
                The Unified Solution
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mt-3 leading-[1.1]">
                The B2B Revenue Growth Engine™
              </h2>
              <p className="text-lg text-slate-400 mt-4 font-medium">
                One system. Five pillars. One outcome: predictable pipeline.
              </p>
            </div>

            {/* 5 Pillars Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              
              {/* Pillar 1 */}
              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 shadow-2xl p-8 rounded-3xl transition-all duration-300 flex flex-col h-full relative group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded bg-[#6366F1] flex items-center justify-center text-[10px] font-bold text-white">01</span>
                  <div className="text-xs font-mono font-bold text-[#6366F1] tracking-widest">PILLAR 01 / INTEGRATED AI</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  AI Visibility (GEO + AEO)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  Get cited & recommended in ChatGPT, Perplexity, Gemini, and Google AI Overviews. We optimize your technical indexability and structure semantic data tags so conversational AI chooses you.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-semibold uppercase">Deliverable:</p>
                  <p className="text-sm text-slate-300 font-medium">Monthly AI Visibility Scorecard vs 3 competitors</p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 shadow-2xl p-8 rounded-3xl transition-all duration-300 flex flex-col h-full relative group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded bg-[#6366F1] flex items-center justify-center text-[10px] font-bold text-white">02</span>
                  <div className="text-xs font-mono font-bold text-[#6366F1] tracking-widest">PILLAR 02 / SEARCH POWER</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Organic Growth (SEO + Content)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  Technical + topical SEO audit with high-converting buyer keyword targets. We handle research, writing, and formatting for 4 premium AI-readable and human-optimized authority articles per month.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-semibold uppercase">Deliverable:</p>
                  <p className="text-sm text-slate-300 font-medium">Compounding high-intent organic pipeline</p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 shadow-2xl p-8 rounded-3xl transition-all duration-300 flex flex-col h-full relative group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded bg-[#6366F1] flex items-center justify-center text-[10px] font-bold text-white">03</span>
                  <div className="text-xs font-mono font-bold text-[#6366F1] tracking-widest">PILLAR 03 / ACCOUNT ACQUISITION</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Demand Generation
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  Managed multi-channel paid strategy on LinkedIn and Google Ads designed around high-converting buyer accounts. Coupled with a customized executive/founder LinkedIn visibility platform.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-semibold uppercase">Deliverable:</p>
                  <p className="text-sm text-slate-300 font-medium">High-intent leads from target accounts</p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 shadow-2xl p-8 rounded-3xl transition-all duration-300 flex flex-col h-full lg:col-start-1 lg:col-span-1 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded bg-[#6366F1] flex items-center justify-center text-[10px] font-bold text-white">04</span>
                  <div className="text-xs font-mono font-bold text-[#6366F1] tracking-widest">PILLAR 04 / CONVERSION OPTIMIZATION</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Conversion (CRO + Web)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  Quarterly CRO sprint mapping visitor behaviors on your highest-intent pages. We optimize call-to-actions, hero copy, site layout, friction points, and form fields to maximize conversion capture.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-semibold uppercase">Deliverable:</p>
                  <p className="text-sm text-slate-300 font-medium">More pipeline from the same traffic volume</p>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 shadow-2xl p-8 rounded-3xl transition-all duration-300 flex flex-col h-full lg:col-span-2 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-6 rounded bg-[#6366F1] flex items-center justify-center text-[10px] font-bold text-white">05</span>
                  <div className="text-xs font-mono font-bold text-[#6366F1] tracking-widest">PILLAR 05 / CLOSED-LOOP SYSTEMS</div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Automation & Reporting
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  AI-powered client nurture sequences, calendar scheduling automation, and custom routing configurations that speed up lead handoffs. Backed by a direct pipeline-linked dashboard to trace closed deals back to individual channels.
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-semibold uppercase">Deliverable:</p>
                  <p className="text-sm text-slate-300 font-medium">Faster MQL→SQL cycles and transparent data your CFO trusts</p>
                </div>
              </div>

            </div>

            {/* Platform billing note */}
            <div className="text-center">
              <p className="text-sm text-slate-500 font-medium italic">
                * Ad spend is billed separately by the respective advertising platforms. SiteOnLab manages the complete targeting, strategy, and creative execution.
              </p>
            </div>
          </div>
        </section>

        {/* 5. PRICING SECTION */}
        <section id="pricing" className="py-24 bg-[#111827]/10 border-t border-white/5 px-6 sm:px-8 lg:px-10 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest text-[#6366F1] uppercase">
                Predictable Investment
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 leading-[1.1]">
                Flat-rate pricing. Enterprise outcomes.
              </h2>
            </div>

            {/* Centered Pricing Card */}
            <div className="max-w-2xl mx-auto relative group">
              {/* Outer neon border highlight */}
              <div className="absolute -inset-px rounded-3xl bg-[#6366F1] opacity-20 blur-sm group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-[#111827] border border-white/10 p-8 sm:p-12 rounded-3xl text-center shadow-2xl">
                
                {/* Popularity ribbon tag */}
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#6366F1] text-white font-sans text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-lg">
                  THE COMPLETE ENGINE
                </span>

                <h3 className="font-display text-2xl font-bold text-white mb-2 mt-2">
                  The B2B Revenue Growth Engine™
                </h3>
                <p className="text-sm text-slate-400 max-w-md mx-auto mb-8">
                  Get a comprehensive senior growth team and all 5 pillars of the visibility and pipeline system in a single predictable package.
                </p>

                {/* Pricing Number */}
                <div className="mb-4">
                  <span className="font-display text-5xl sm:text-6xl font-bold text-white">$2,000</span>
                  <span className="text-slate-500 text-lg font-medium">/month</span>
                </div>
                
                {/* Contract Terms */}
                <div className="text-sm text-slate-400 bg-[#0B1120] inline-block px-4 py-1.5 rounded-full border border-white/5 mb-8 font-medium">
                  3-month minimum, then month-to-month.
                </div>

                {/* Checklist divider line */}
                <div className="h-px bg-white/5 mb-8"></div>

                {/* Offer bullet checklist */}
                <div className="text-left space-y-4 max-w-md mx-auto mb-10">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-white">GEO + AEO Visibility:</span> Monthly competitor scorecards and LLM citation optimization.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-white">SEO + Authority Content:</span> Technical audits and 4 optimized authority assets monthly.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-white">Full Demand Gen Suite:</span> Paid search, paid social, and founder content framework.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-white">Conversion Optimization:</span> Continuous quarterly landing page & conversion funnel updates.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-white">CRM & Reporting Dashboard:</span> Integration with your pipeline tracking metrics.
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => scrollToForm()}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-base py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all cursor-pointer"
                  id="pricing-cta"
                >
                  Book a Strategy Call
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. THE 90-DAY ARC (Timeline) */}
        <section id="timeline" className="py-24 border-t border-white/5 px-6 sm:px-8 lg:px-10 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-xs font-bold tracking-widest text-[#6366F1] uppercase">
                The Roadmap
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 leading-[1.1]">
                The 90-Day Arc: How We Build It
              </h2>
              <p className="text-slate-400 text-sm mt-3">
                A highly disciplined, sequential methodology built for predictable momentum.
              </p>
            </div>

            {/* Horizontal timeline on large screens, stacked on small screens */}
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Central connection line (Desktop only) */}
              <div className="hidden md:block absolute top-[2.25rem] left-[15%] right-[15%] h-0.5 bg-white/5 pointer-events-none"></div>

              {/* Month 1 */}
              <div className="relative flex flex-col bg-[#111827]/40 border border-white/5 hover:border-white/10 p-8 rounded-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded bg-[#6366F1] flex items-center justify-center font-display font-bold text-white z-10 shrink-0">
                    01
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#6366F1]">Month 1</h3>
                    <h4 className="text-base font-bold text-white">Foundation</h4>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Complete deep-dive strategy audits, refine the Ideal Customer Profile (ICP), run initial AI-visibility audits, configure technical SEO parameters, and map entire conversion tracking layouts.
                </p>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-bold uppercase">Milestone:</p>
                  <p className="text-sm font-medium text-slate-300">Baseline scorecard + active engine roadmap live</p>
                </div>
              </div>

              {/* Month 2 */}
              <div className="relative flex flex-col bg-[#111827]/40 border border-white/5 hover:border-white/10 p-8 rounded-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded bg-[#6366F1] flex items-center justify-center font-display font-bold text-white z-10 shrink-0">
                    02
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#6366F1]">Month 2</h3>
                    <h4 className="text-base font-bold text-white">Momentum</h4>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Deploy optimized authority content articles, initiate live GEO optimizations, build out targeted ad frameworks on Google and LinkedIn, and execute the primary Conversion Rate Optimization sprint.
                </p>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-bold uppercase">Milestone:</p>
                  <p className="text-sm font-medium text-slate-300">First major keyword ranking & AI-visibility improvements</p>
                </div>
              </div>

              {/* Month 3 */}
              <div className="relative flex flex-col bg-[#111827]/40 border border-white/5 hover:border-white/10 p-8 rounded-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded bg-[#6366F1] flex items-center justify-center font-display font-bold text-white z-10 shrink-0">
                    03
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold tracking-wider text-[#6366F1]">Month 3</h3>
                    <h4 className="text-base font-bold text-white">Proof</h4>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A/B test and optimize high-intent landing page variations, scale automated client nurture flows, configure CRM pipelines, and integrate closed-loop ROI dashboard tracking models.
                </p>

                <div className="mt-auto pt-4 border-t border-white/5">
                  <p className="text-xs text-slate-500 font-bold uppercase">Milestone:</p>
                  <p className="text-sm font-medium text-slate-300">Live CFO-ready pipeline dashboard + detailed ROI review</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 7. GUARANTEE SECTION */}
        <section id="guarantee" className="py-16 px-6 sm:px-8 lg:px-10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="relative border border-white/10 bg-[#111827] rounded-3xl p-8 sm:p-12 overflow-hidden shadow-xl">
              {/* Background gradient graphic inside card */}
              <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[100%] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] border border-[#6366F1]/20 shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white mb-3">
                    The 90-Day Promise
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    Within 90 days you'll see measurable improvement in AI visibility and search rankings, active demand campaigns, and a pipeline-attribution dashboard — or you don't pay for the next month. We carry the risk, because we engineered the system to work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY IT CONVERTS / DIFFERENTIATORS */}
        <section id="why-us" className="py-24 bg-[#111827]/30 border-y border-white/5 px-6 sm:px-8 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest text-[#6366F1] uppercase">
                Our Differentiators
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 leading-[1.1]">
                Why this works when generic agencies don't
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
              
              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 p-6 rounded-xl flex flex-col h-full transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] mb-4 border border-[#6366F1]/20">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">Single Accountable Partner</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  No more coordinating between five separate specialized vendors. You work with a single dedicated partner coordinating organic SEO, paid social, conversion, and visibility.
                </p>
              </div>

              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 p-6 rounded-xl flex flex-col h-full transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] mb-4 border border-[#6366F1]/20">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">Pioneering AI Competency</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We treat Generative Engine Optimization (GEO) as a critical, fundamental core strategy, not an afterthought or bullet-point add-on.
                </p>
              </div>

              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 p-6 rounded-xl flex flex-col h-full transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] mb-4 border border-[#6366F1]/20">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">100% Dedicated B2B Focus</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We don't manage local retail, e-commerce stores, or consumer brands. Our playbooks are engineered specifically for high-ticket B2B sales cycles.
                </p>
              </div>

              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 p-6 rounded-xl flex flex-col h-full transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] mb-4 border border-[#6366F1]/20">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">Pipeline-Linked Metrics</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Every tactic is mapped directly to pipeline tracking metrics. We refuse to justify fees using vanity traffic metrics alone.
                </p>
              </div>

              <div className="bg-[#111827] border border-white/10 hover:border-[#6366F1]/50 p-6 rounded-xl flex flex-col h-full transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] mb-4 border border-[#6366F1]/20">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">Operational Automation</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We use optimized AI tooling workflows to remain incredibly efficient and pass those operational cost-savings directly on to you.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 9. FAQ SECTION */}
        <section id="faq" className="py-24 px-6 sm:px-8 lg:px-10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest text-[#6366F1] uppercase">
                FAQ
              </span>
              <h2 className="font-display text-3xl font-bold text-white mt-3 leading-[1.1]">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion list */}
            <div className="space-y-4">
              {faqItems.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-white/5 bg-[#111827]/40 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-6 text-left font-display font-semibold text-white hover:bg-white/5 transition-colors focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-[#6366F1]' : ''}`} />
                    </button>
                    
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-96 opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-6 text-slate-300 text-sm leading-relaxed bg-white/5">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA / LEAD FORM SECTION */}
        <section id="strategy-form-section" className="py-24 bg-[#111827]/30 border-t border-white/5 px-6 sm:px-8 lg:px-10 relative">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-[#6366F1] uppercase">
                Take Action
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mt-3 leading-[1.1]">
                Ready to build a revenue engine that scales?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
                Book a 30-minute strategy call, or take the free AI Visibility Assessment to see where you stand.
              </p>
            </div>

            {/* Main Interactive Form Area */}
            <div className="bg-[#111827] border border-white/10 p-8 sm:p-10 rounded-3xl shadow-xl max-w-2xl mx-auto relative">
              
              {formSuccess ? (
                /* Success State with beautiful visual animation */
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Strategy Call Request Received
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed mb-6">
                    Thank you. We have received your inquiry. One of our B2B pipeline strategists will review your website and reach out to you within 4 hours to coordinate scheduling.
                  </p>
                  <p className="text-xs text-slate-500 font-mono">
                    Reference ID: SOL-{Math.floor(Math.random() * 900000 + 100000)}
                  </p>
                </div>
              ) : (
                /* Standard Contact Form */
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe" 
                          className="w-full bg-[#0B1120] border border-white/10 focus:border-[#6366F1]/80 focus:ring-2 focus:ring-[#6366F1]/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>
                      {formErrors.name && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2">
                        Work Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@company.com" 
                          className="w-full bg-[#0B1120] border border-white/10 focus:border-[#6366F1]/80 focus:ring-2 focus:ring-[#6366F1]/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                          type="text" 
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme, Inc." 
                          className="w-full bg-[#0B1120] border border-white/10 focus:border-[#6366F1]/80 focus:ring-2 focus:ring-[#6366F1]/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>
                      {formErrors.company && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2">
                        Company Website
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input 
                          type="text" 
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://company.com" 
                          className="w-full bg-[#0B1120] border border-white/10 focus:border-[#6366F1]/80 focus:ring-2 focus:ring-[#6366F1]/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all"
                        />
                      </div>
                      {formErrors.website && (
                        <p className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.website}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold tracking-wider text-slate-300 uppercase mb-2">
                      Brief Message (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                      <textarea 
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your pipeline bottlenecks or current agency challenges." 
                        className="w-full bg-[#0B1120] border border-white/10 focus:border-[#6366F1]/80 focus:ring-2 focus:ring-[#6366F1]/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium py-4 rounded-xl shadow-lg shadow-blue-500/15 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Book a Strategy Call"}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    By submitting, you agree to receive follow-up scheduling communications. We never share or sell your corporate information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="border-t border-white/5 bg-[#0B1120] py-12 px-6 sm:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-tight text-white block mb-1">
              SiteOn<span className="text-[#6366F1]">Lab</span>
            </span>
            <p className="text-xs text-slate-400">
              B2B Revenue Growth & AI Visibility Agency.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-xs font-medium text-slate-400">
            <a href="#problems" className="hover:text-white transition-colors">Problems</a>
            <a href="#offer" className="hover:text-white transition-colors">The Engine</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="text-xs text-slate-500 text-center md:text-right">
            <p>© {new Date().getFullYear()} SiteOnLab. All rights reserved.</p>
            <p className="mt-1 text-[10px] text-slate-600">The B2B Revenue Growth Engine™ is a protected service mark of SiteOnLab.</p>
          </div>
        </div>
      </footer>

      {/* ASSESSMENT QUIZ MODAL CONTAINER */}
      {assessmentOpen && (
        <div className="fixed inset-0 bg-[#0B1120]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111827] border border-white/10 rounded-3xl w-full max-w-xl shadow-2xl relative overflow-hidden">
            
            {/* Header / Close */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/5">
              <span className="font-display text-sm font-bold text-white tracking-tight uppercase flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#6366F1]" /> AI Visibility Assessment
              </span>
              <button 
                onClick={() => setAssessmentOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content area */}
            <div className="p-6">
              {!assessmentFinished ? (
                <div>
                  {/* Progress Indicator */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-slate-400 font-mono">Question {assessmentStep + 1} of {questions.length}</span>
                    <div className="w-24 bg-[#0B1120] h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#6366F1] h-1.5 transition-all duration-300" 
                        style={{ width: `${((assessmentStep + 1) / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-6">
                    {questions[assessmentStep].text}
                  </h3>

                  {/* Options List */}
                  <div className="space-y-3">
                    {questions[assessmentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(option.points)}
                        className="w-full text-left p-4 rounded-xl border border-white/5 bg-[#0B1120]/40 hover:border-[#6366F1]/50 hover:bg-[#111827]/80 text-sm text-slate-300 font-medium transition-all focus:outline-none cursor-pointer flex justify-between items-center group"
                      >
                        <span>{option.text}</span>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-[#6366F1] group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Assessment Finished / Results view */
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 border border-[#6366F1]/25 flex items-center justify-center text-[#6366F1] mx-auto mb-4">
                    <Award className="w-6 h-6" />
                  </div>
                  
                  <span className="text-xs font-bold text-[#6366F1] uppercase tracking-widest font-mono">Company Assessment Score</span>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-3 mt-1">
                    {getAssessmentResult().tier}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 bg-[#0B1120]/60 p-4 rounded-2xl border border-white/5 text-left">
                    {getAssessmentResult().description}
                  </p>

                  <div className="bg-[#6366F1]/10 border border-[#6366F1]/20 p-4 rounded-xl mb-6">
                    <p className="text-xs font-bold text-[#6366F1] uppercase mb-1">Recommended Direct Action:</p>
                    <p className="text-sm font-semibold text-white">{getAssessmentResult().action}</p>
                  </div>

                  {/* Submit Result CTA */}
                  <button
                    onClick={() => {
                      setFormData(prev => ({ 
                        ...prev, 
                        message: `Completed AI Visibility Assessment. Tier Result: ${getAssessmentResult().tier}` 
                      }));
                      scrollToForm();
                    }}
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium py-3.5 rounded-xl shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    Lock in AI Visibility Audit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
