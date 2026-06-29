"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Send, 
  ChevronRight, 
  PhoneCall, 
  Check, 
  Cpu, 
  FileText, 
  PieChart, 
  Briefcase, 
  Zap, 
  Layers, 
  MessageSquare,
  HelpCircle,
  Plus,
  ArrowRight,
  Shield,
  Search
} from 'lucide-react';

// Import custom components
import InteractiveDashboard from './components/InteractiveDashboard';
import ROIBlueprintModal from './components/ROIBlueprintModal';
import ReadinessAssessmentModal from './components/ReadinessAssessmentModal';
import SEOMetadataPanel from './components/SEOMetadataPanel';

// Interfaces for structured data
import { FAQItem, RelatedService, MetricCard, CaseStudy } from './types';

const TRUST_METRICS: MetricCard[] = [
  { id: '1', title: 'Program ROI', value: '+300%', description: 'Average audited ROI on pipeline' },
  { id: '2', title: 'Speed-to-Value', value: '45 Days', description: 'Average time to first target engagement' },
  { id: '3', title: 'Client Satisfaction', value: '74 NPS', description: 'World-class agency satisfaction score' },
  { id: '4', title: 'Enterprise Verticals', value: '50+', description: 'Industries scaled with active campaigns' }
];

const CORE_PILLARS = [
  { title: "B2B-only growth focus", description: "Specifically engineered for complex, multi-stakeholder buyer journeys." },
  { title: "Google + AI search visibility", description: "Ensure your brand is recommended in organic and LLM search results." },
  { title: "Revenue-first reporting", description: "Optimized for closed-won value and qualified pipeline, not clicks." },
  { title: "Full-funnel execution", description: "From initial IP targeting ads to active sales playbook enablement." }
];

const SERVICE_COMPONENTS = [
  {
    icon: TargetIcon,
    title: "ICP Identification & Multi-Tier Account Setup",
    description: "We help you define your high-value account parameters, build agreed-upon lists with Sales, and segment targets into actionable priority groups (Tier 1, Tier 2, and Tier 3)."
  },
  {
    icon: BroadcastIcon,
    title: "Multi-Channel IP-Targeted Ad Orchestration",
    description: "We serve hyper-focused, persona-specific ads specifically to the IPs and devices of decision-makers at your chosen target accounts across premium business networks."
  },
  {
    icon: LandingIcon,
    title: "Personalized Target Content Hubs",
    description: "We build dedicated, account-branded content hubs and relevant case study microsites designed to deliver tailored answers to key target committee stakeholders."
  },
  {
    icon: SyncIcon,
    title: "Sales-Marketing Playbook Alignment",
    description: "We align marketing campaigns directly with sales SDR/BDR cadences, providing your reps with specific email scripts and direct-mail guides synchronized to active account spikes."
  },
  {
    icon: SignalIcon,
    title: "Intent Signals & Live Visitor Alerts",
    description: "We hook up reverse-IP lookup systems to capture real-time visitor intent spikes, feeding direct alerts straight to your reps' Slack or CRM the moment a target account engages."
  },
  {
    icon: ChartIcon,
    title: "Revenue Attribution & Pipeline Analytics",
    description: "We connect your target campaigns directly to your CRM, giving you a full-funnel visual representation of how target account engagement contributes to pipeline and ROI."
  }
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit and intent map",
    description: "We review your current performance, competitors, buyer journey, and revenue opportunities to identify accounts actively in-market.",
    timeline: "2 weeks"
  },
  {
    step: "02",
    title: "Architecture and sprint plan",
    description: "We build the roadmap, prioritize account list tiers, sequence multi-channel playbooks, and outline content requirements.",
    timeline: "1 week"
  },
  {
    step: "03",
    title: "Build, launch, and measure",
    description: "We create personalized assets, deploy IP-targeted campaigns, integrate intent webhook alerts, and connect to tracking systems.",
    timeline: "Ongoing"
  },
  {
    step: "04",
    title: "Optimize for pipeline",
    description: "We continuously improve campaign impact and message relevance using live search data, AI visibility signals, conversion rates, and direct sales feedback.",
    timeline: "Monthly"
  }
];

const WHY_CHOOSE_US = [
  {
    title: "Revenue-first strategy",
    description: "We optimize for business outcomes, pipeline velocity, and CAC efficiency, not isolated channel vanity metrics like general impressions."
  },
  {
    title: "Measurement that is honest",
    description: "We connect target account touchpoints to first-touch, assisted, and last-touch pipeline signals, so your ROI is never a mystery."
  },
  {
    title: "Built for AI search and LLM visibility",
    description: "We structure brand footprints and authority signals so enterprise buyers find you in both Google and conversational AI search engines."
  },
  {
    title: "Compounding growth over time",
    description: "We build modular marketing assets and sales systems that keep creating enterprise pipeline instead of temporary campaign spikes."
  }
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    industry: "SaaS · B2B CyberSecurity",
    headline: "From invisible in search to winning 14 global enterprise logos",
    description: "We rebuilt their ABM target lists around active search intent, deploying tailored comparisons and security-focused landing hubs.",
    metric: "+312% pipeline growth",
    timeline: "9 months",
    contactsEngaged: 140,
    contractValue: "$1.2M Sourced"
  },
  {
    id: "case-2",
    industry: "Fintech · Enterprise SaaS",
    headline: "Scaling average deal size from $25k to $85k ACV",
    description: "Orchestrated highly precise LinkedIn ad targeting synced with SDR direct-mail plays for Fortune 500 finance departments.",
    metric: "+240% average deal size",
    timeline: "6 months",
    contactsEngaged: 85,
    contractValue: "$840k Sourced"
  },
  {
    id: "case-3",
    industry: "IT Services · Cloud Infrastructure",
    headline: "Unlocking 34 enterprise demo sessions with high-intent target accounts",
    description: "Deployed automated real-time reverse-IP alerts and dynamically customized landing pages for priority account visitors.",
    metric: "-42% customer acquisition cost",
    timeline: "12 months",
    contactsEngaged: 210,
    contractValue: "$1.6M Sourced"
  }
];

const RELATED_SERVICES: RelatedService[] = [
  {
    title: "AI Visibility Optimization",
    description: "Get cited and recommended inside ChatGPT, Gemini, Perplexity, and Google AI Overviews to capture buyers researching solutions.",
    linkText: "Explore AI GEO Services"
  },
  {
    title: "Content Marketing & Authority Clusters",
    description: "Build semantic topic clusters and deep expert-led content that earns trust with target decision-makers and Google search.",
    linkText: "Explore Content Services"
  },
  {
    title: "Revenue Measurement & Attribution",
    description: "Construct honest multi-touch attribution layers to connect organic search and target campaigns directly to Salesforce pipeline.",
    linkText: "Explore Measurement Services"
  }
];

const FAQS: FAQItem[] = [
  {
    question: "What is Account-Based Marketing (ABM)?",
    answer: "Account-Based Marketing is a highly strategic growth approach where Sales and Marketing coordinate to target a specific, pre-defined list of high-value accounts (or Ideal Customer Profiles) with personalized messages, instead of casting a broad, general net."
  },
  {
    question: "How is Account-Based Marketing different for B2B companies?",
    answer: "Unlike general consumer marketing, B2B sales involve complex committee buying with 5 to 12 distinct decision-makers (from engineers to CFOs). HybridMonks's B2B ABM maps out these individual roles, serving customized messaging to each stakeholder at a single target company to drive consensus."
  },
  {
    question: "How long does it take to see results?",
    answer: "While closed enterprise deals depend on your typical sales cycle, our programs drive visible account intent surges and first direct meetings within 45 to 60 days. We focus on mid-funnel progress indicators (engaged target accounts) during the first quarter."
  },
  {
    question: "How do you measure ROI?",
    answer: "We connect our campaigns to your CRM to track target list engagement. We measure success by the increase in target accounts won, average contract sizes, cost-of-acquisition efficiency, and marketing-assisted pipeline value, not just impressions."
  },
  {
    question: "What makes HybridMonks different from other agencies?",
    answer: "Most agencies run generic ad blasts and pass you lead lists of people who just downloaded a PDF. HybridMonks coordinates marketing, tech, and sales plays together. We track buyer intent spikes, build highly tailored content pages, and optimize specifically for closed-won revenue."
  },
  {
    question: "Do you handle implementation or only strategy?",
    answer: "We handle the complete execution. This includes building your target lists, designing and launching IP-targeted ads, writing personalized copy, building content hubs, and configuring real-time alert systems for your sales reps."
  },
  {
    question: "We tried this before and it did not work. Why would this be different?",
    answer: "Previous failures are usually due to siloing (running ads without sales reps following up), targeting generic lists instead of active search intent, or measuring success on clicks. We solve this by establishing mutual sales-marketing plans and automating immediate sales notifications."
  },
  {
    question: "How does this service support AI visibility?",
    answer: "B2B buyers increasingly research solutions using tools like ChatGPT and Gemini. We optimize and structure your brand footprint, citations, and authority signals so that your company is recommended when target accounts search those engines."
  },
  {
    question: "What does a typical engagement look like?",
    answer: "An engagement begins with an intensive 30-day strategy sprint to agree on target lists and build playbooks. We then enter ongoing monthly sprint phases, where we deploy personalized campaigns, feed intent signals to reps, and review ROI."
  }
];

// Helper components for custom icons
function TargetIcon() {
  return <Briefcase className="w-6 h-6 text-indigo-400" />;
}
function BroadcastIcon() {
  return <Send className="w-6 h-6 text-indigo-400" />;
}
function LandingIcon() {
  return <Building2 className="w-6 h-6 text-indigo-400" />;
}
function SyncIcon() {
  return <Users className="w-6 h-6 text-indigo-400" />;
}
function SignalIcon() {
  return <Sparkles className="w-6 h-6 text-indigo-400" />;
}
function ChartIcon() {
  return <PieChart className="w-6 h-6 text-indigo-400" />;
}

export default function App() {
  // Modal states
  const [isROIModalOpen, setIsROIModalOpen] = useState(false);
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false);

  // FAQ state
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Scroll function
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenROIModal = () => setIsROIModalOpen(true);
  const handleOpenAssessmentModal = () => setIsAssessmentModalOpen(true);

  return (
    <div className="theme-abm min-h-screen bg-[#030712] text-gray-300 font-sans selection:bg-indigo-600 selection:text-white relative overflow-hidden">
      
      {/* Absolute background accent glows for dark theme premium look */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-indigo-950/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[800px] left-10 w-[450px] h-[450px] bg-emerald-950/5 rounded-full blur-[120px] pointer-events-none" />

      {/* SEO FIELDS HEADER DISPLAY */}

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-10 pb-20 md:py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
                Enterprise B2B Growth | Account-Based Marketing (ABM)
              </span>
            </div>

            <h1 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              The Account-Based Marketing agency that drives <span className="text-indigo-400">demos</span>, <span className="text-indigo-400">larger contract sizes</span>, and <span className="text-indigo-400">closed-won revenue</span>.
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              HybridMonks helps B2B SaaS, enterprise technology, and professional-services companies turn high-value target accounts into a measurable revenue channel. We help you rank for buyer-intent searches, get recommended by AI platforms, and land key enterprise logos — measured by qualified pipeline, not vanity metrics.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={handleOpenROIModal}
                className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-xl shadow-indigo-600/20 transition active:scale-95 cursor-pointer"
              >
                Request a Growth Blueprint
                <ChevronRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => scrollToId('case-studies')}
                className="px-6 py-3.5 bg-[#121826] hover:bg-[#1e2538] text-gray-300 hover:text-white font-semibold text-xs rounded-xl border border-gray-800 transition active:scale-95"
              >
                See Case Studies
              </button>
            </div>
          </div>

          {/* Right Column: Related Graphics (Our Premium Interactive Target Dashboard) */}
          <div className="lg:col-span-7">
            <InteractiveDashboard />
          </div>

        </div>
      </section>

      {/* 2. TRUST METRICS SECTION */}
      <section id="trust" className="py-12 bg-[#060a14] border-y border-gray-900/80 px-6">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Main numeric proof indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TRUST_METRICS.map((metric) => (
              <div key={metric.id} className="p-4 bg-[#080d19]/60 border border-gray-800/40 rounded-xl space-y-1">
                <span className="text-3xl md:text-4xl font-display font-black text-indigo-400 block font-mono">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-gray-200 block">
                  {metric.title}
                </span>
                <span className="text-[10px] text-gray-500 leading-relaxed block">
                  {metric.description}
                </span>
              </div>
            ))}
          </div>

          {/* Sub-bar demonstrating core focus metrics (when proof not available or to reinforce value) */}
          <div className="pt-4 border-t border-gray-900 flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center">
            <div>
              <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block mb-1">Our Core Focus</span>
              <h4 className="font-display font-bold text-sm text-white">How We Frame B2B Account Orchestration</h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-auto">
              {CORE_PILLARS.map((pillar, i) => (
                <div key={i} className="flex gap-2 items-start bg-[#0a0f1d] p-3 rounded-lg border border-gray-800/60 max-w-[240px]">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold text-gray-200 block">{pillar.title}</span>
                    <span className="text-[9.5px] text-gray-500 leading-tight block">{pillar.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SERVICE OVERVIEW SECTION */}
      <section id="overview" className="py-20 md:py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-14">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
              Account-Based Marketing (ABM) Services
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
              ABM built for compounding B2B revenue growth.
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Most agencies just blast generic cold emails. Our Account-Based Marketing builds a complete growth system that combines targeted ads, account-level landing pages, SDR plays, and full-funnel attribution into one coordinated revenue channel designed to earn trust with high-value enterprise buyers.
            </p>
          </div>

          {/* Service Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_COMPONENTS.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#080d19] border border-gray-800 hover:border-indigo-500/30 p-6 rounded-2xl transition duration-300 space-y-4 group hover:shadow-xl hover:shadow-indigo-500/5 hover:-y-1"
                >
                  <div className="w-11 h-11 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                    <Icon />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-sm text-white group-hover:text-indigo-400 transition">
                      {comp.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section id="process" className="py-20 md:py-24 bg-[#050912] border-y border-gray-900/80 px-6">
        <div className="max-w-7xl mx-auto space-y-14">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
              Our Process
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
              From target list to enterprise closed-won in 90 days.
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              We deploy systematic sprints that ensure your accounts receive highly tailored touchpoints, minimizing sales friction and accelerating your enterprise pipelines.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-[#080d19] border border-gray-800/80 p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[220px]"
              >
                {/* Visual Step Counter Background */}
                <span className="absolute -right-4 -bottom-6 font-display font-black text-7xl text-gray-800/10 select-none">
                  {step.step}
                </span>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/25">
                      Phase {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">{step.timeline}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed pr-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section id="why-choose-us" className="py-20 md:py-24 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-14">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
              Why Teams Pick Us
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
              An ABM agency that connects target account engagement to revenue.
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Most agencies hand you click reports and MQL counts, then call it done. HybridMonks builds a full target measurement and intent tracking layer, so you see exactly how accounts engage throughout the pipeline cycle.
            </p>
          </div>

          {/* Differentiator Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((diff, idx) => (
              <div 
                key={idx} 
                className="bg-[#080d19]/70 border border-gray-800 p-6 rounded-2xl flex items-start gap-4 hover:border-indigo-500/20 transition duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 font-mono font-bold text-xs">
                  0{idx + 1}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-display font-bold text-sm text-white">
                    {diff.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CASE STUDIES SECTION */}
      <section id="case-studies" className="py-20 md:py-24 bg-[#050912] border-y border-gray-900/80 px-6">
        <div className="max-w-7xl mx-auto space-y-14">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
                Case Studies & Results
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
                ABM results we can put a number on.
              </h2>
            </div>
            
            <button 
              onClick={handleOpenROIModal}
              className="text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 border-b border-indigo-500/30 pb-1"
            >
              Request custom case detail <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Case Studies Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study) => (
              <div 
                key={study.id} 
                className="bg-[#080d19] border border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between p-6 hover:border-indigo-500/25 transition duration-300"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-wider bg-indigo-950 text-indigo-400 border border-indigo-500/30 px-2.5 py-1 rounded">
                    {study.industry}
                  </span>
                  
                  <h3 className="font-display font-bold text-base text-white leading-snug">
                    {study.headline}
                  </h3>
                  
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-800/60 grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] text-gray-500 block uppercase font-mono">Performance Metric</span>
                    <span className="text-sm font-bold text-emerald-400 block font-mono">{study.metric}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-500 block uppercase font-mono">Pacing Pacing</span>
                    <span className="text-sm font-semibold text-gray-300 block font-mono">{study.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section id="testimonial" className="py-20 md:py-24 px-6 relative bg-gradient-to-b from-[#030712] to-[#050912]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <MessageSquare className="w-6 h-6" />
          </div>

          <blockquote className="font-display font-bold text-lg md:text-xl lg:text-2xl text-white leading-relaxed tracking-tight max-w-3xl mx-auto">
            “Their strategic ABM approach helped us turn target lists into a serious source of qualified opportunities, not just website traffic. HybridMonks aligned our sales and marketing teams completely.”
          </blockquote>

          <div className="space-y-1.5">
            <p className="font-sans font-bold text-sm text-gray-200">
              Vice President of Sales
            </p>
            <p className="text-xs text-gray-500">
              Enterprise Security SaaS Company
            </p>
          </div>

          <div className="inline-block px-4 py-1.5 bg-indigo-500/5 rounded-full border border-indigo-500/10 font-mono text-xs text-indigo-400">
            +312% pipeline growth · 9 months
          </div>

        </div>
      </section>

      {/* 8. RELATED SERVICES SECTION */}
      <section id="related-services" className="py-20 md:py-24 bg-[#050912] border-t border-gray-900/80 px-6">
        <div className="max-w-7xl mx-auto space-y-14">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
              Related Services
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight">
              ABM performs better alongside these services.
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
              Achieve maximum business impact by coupling targeted client campaigns with broader organic content hubs and robust data pipelines.
            </p>
          </div>

          {/* Related Services Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {RELATED_SERVICES.map((serv, idx) => (
              <div 
                key={idx} 
                className="bg-[#080d19] border border-gray-800 p-6 rounded-2xl flex flex-col justify-between min-h-[180px] hover:border-indigo-500/25 transition duration-300"
              >
                <div className="space-y-3">
                  <h4 className="font-display font-bold text-sm text-white">
                    {serv.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {serv.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-800/50">
                  <button 
                    onClick={handleOpenROIModal}
                    className="text-[11px] font-mono font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    {serv.linkText} <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="py-20 md:py-24 px-6 relative">
        <div className="max-w-4xl mx-auto space-y-14">
          
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
              FAQs
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight">
              Frequently asked questions about ABM.
            </h2>
            <p className="text-gray-400 text-xs max-w-lg mx-auto">
              Get answers to immediate operational questions about how HybridMonks configures, launches, and attributes B2B target account programs.
            </p>
          </div>

          {/* Interactive Accordion List */}
          <div className="divide-y divide-gray-800/80 border-y border-gray-800/80">
            {FAQS.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                    className="w-full text-left flex justify-between items-center py-2.5 text-white font-medium text-xs md:text-sm transition hover:text-indigo-400 group focus:outline-none"
                  >
                    <span className="font-display font-bold pr-4 leading-normal">{faq.question}</span>
                    <span className={`w-5 h-5 rounded-md border border-gray-800 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-indigo-400 transition-transform duration-200 ${isOpen ? 'rotate-180 border-indigo-500/20 text-indigo-400' : ''}`}>
                      <Plus className="w-3.5 h-3.5" />
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="pt-2 pb-3 pr-8 text-xs text-gray-400 leading-relaxed font-sans transition-all duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section id="final-cta" className="py-20 md:py-28 bg-[#060a14] border-t border-gray-900 px-6 relative">
        {/* Visual background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative">
          
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-400">
              Start Your Growth Campaign
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Let’s make Account-Based Marketing your most efficient growth channel.
            </h2>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
              Book a 30-minute strategy call. We’ll review your current account-targeting performance, identify opportunities your competitors are missing, and show you what it would take to turn Account-Based Marketing into qualified enterprise pipeline.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <button
              onClick={handleOpenROIModal}
              className="px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-xl shadow-indigo-600/20 transition active:scale-95 cursor-pointer"
            >
              Request a Growth Blueprint
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={handleOpenAssessmentModal}
              className="px-6 py-4 bg-[#121826] hover:bg-[#1e2538] text-indigo-400 hover:text-white font-bold text-xs rounded-xl border border-indigo-500/20 transition active:scale-95"
            >
              Take the ABM Assessment
            </button>
          </div>

        </div>
      </section>

      {/* CORPORATE FOOTER */}

      {/* FLOATING INSPECTOR WIDGETS */}
      <SEOMetadataPanel />

      {/* MODALS */}
      <ROIBlueprintModal 
        isOpen={isROIModalOpen} 
        onClose={() => setIsROIModalOpen(false)} 
      />

      <ReadinessAssessmentModal 
        isOpen={isAssessmentModalOpen} 
        onClose={() => setIsAssessmentModalOpen(false)} 
      />

    </div>
  );
}
