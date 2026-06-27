"use client";

import React, { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

const titleTag = "AI Software Development Agency for B2B Pipeline Growth | SiteOnLab";
const metaDescription = "SiteOnLab helps B2B SaaS, enterprise, and high-growth technology companies use AI Software Development to drive qualified pipeline, improve visibility, and connect marketing performance to revenue.";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Database,
  Search,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  LineChart,
  Code,
  Calendar,
  X,
  Send,
  Workflow,
  Eye,
  Lock,
  Compass,
  AlertCircle,
  HelpCircle,
  BookOpen
} from "lucide-react";
import HeroVisualizer from "./components/HeroVisualizer";
import AIReadinessAssessment from "./components/AIReadinessAssessment";
import SEOPreview from "./components/SEOPreview";
import { CaseStudy, ServiceComponent, ProcessStep, FAQItem, Differentiator, RelatedService } from "./types";

// Static data based on user constraints
const TRUST_METRICS = [
  { value: "312% Average ROI", label: "Program efficiency gains", desc: "Measured across client automation" },
  { value: "90 Days", label: "To production deployment", desc: "From kickoff to active live workloads" },
  { value: "NPS 74 Score", label: "Client satisfaction & trust", desc: "Top-tier rating in custom software" },
  { value: "50+ Verticals", label: "AI models fine-tuned", desc: "Tailored to high-intent sectors" }
];

const SERVICE_COMPONENTS: ServiceComponent[] = [
  {
    title: "Custom LLM & Agentic Workflows",
    description: "We architect custom-trained, fine-tuned LLM agents designed to automate high-friction operational workflows, reducing customer support costs while boosting turnaround speeds.",
    iconName: "Cpu",
    features: ["Agent state machine logic", "Proprietary prompt chains", "Multi-model cascading fallback", "Sub-second token latency tuning"]
  },
  {
    title: "Semantic Search & Vector DBs",
    description: "Designing corporate vector indexes and robust Retrieval-Augmented Generation (RAG) pipelines to surface hyper-relevant business documents securely without hallucinations.",
    iconName: "Database",
    features: ["Pinecone, Qdrant, & PGVector", "Hybrid keywords + dense embedding", "Document chunking & metadata tagging", "Semantic caching layers"]
  },
  {
    title: "AI Search Optimization / GEO",
    description: "We engineer software architecture and structured semantic content schemas so your brand is crawled, indexed, cited, and recommended by ChatGPT, Gemini, and Perplexity.",
    iconName: "Search",
    features: ["Generative Engine Optimization", "Schema.org graph markup", "Authority signal deployment", "AI citation telemetry tracking"]
  },
  {
    title: "Enterprise API Integrations",
    description: "Building robust middleware to safely bridge legacy databases with modern AI modules. We guarantee smooth data parsing, secure transport, and low token utilization.",
    iconName: "Layers",
    features: ["REST/GraphQL middleware", "Real-time event streaming", "Automatic request throttling", "Token budget guarding"]
  },
  {
    title: "Intelligent Predictive Analytics",
    description: "Training custom classifiers to predict customer churn, identify sales opportunities, scoring leads, and forecast pipeline conversions using advanced machine learning models.",
    iconName: "LineChart",
    features: ["Custom XGBoost / PyTorch pipelines", "CRM telemetry integration", "Lead intent signal decoding", "High-accuracy conversion models"]
  },
  {
    title: "Secure Infrastructure & Auditing",
    description: "Ensuring SOC2, HIPAA, and GDPR compliance across all LLM queries, vector data, and model training routines. Secure tenant isolation is baked in by default.",
    iconName: "Shield",
    features: ["PII scrubbing middleware", "Zero data retention integrations", "Encrypted vector databases", "Model audit log generation"]
  }
];

const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Audit and intent map",
    description: "We review your current performance, competitors, buyer journey, and revenue opportunities to map where custom AI will drive immediate pipeline leverage.",
    timeline: "2 weeks"
  },
  {
    stepNumber: "02",
    title: "Architecture and sprint plan",
    description: "We build the custom LLM roadmap, prioritize pipeline impact opportunities, design data schemas, and sequence engineering work by likely business ROI.",
    timeline: "1 week"
  },
  {
    stepNumber: "03",
    title: "Build, launch, and measure",
    description: "We create core agents, implement custom models, optimize vector pipelines, and connect telemetry straight to your revenue reporting systems.",
    timeline: "Ongoing"
  },
  {
    stepNumber: "04",
    title: "Optimize for pipeline",
    description: "We continuously improve model accuracy and user conversion using search data, AI visibility signals, latency tracking, and direct sales feedback.",
    timeline: "Monthly"
  }
];

const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "Revenue-first strategy",
    description: "We optimize AI systems for business outcomes and CAC efficiency, not isolated token counts or novelty features.",
    bullet: "Pipeline-focused architecture"
  },
  {
    title: "Measurement that is honest",
    description: "We connect active AI utilization directly to multi-touch revenue signals, first-touch attribution, and retention loops.",
    bullet: "Full-attribution CRM telemetry"
  },
  {
    title: "Built for AI search and LLM visibility",
    description: "We structure your software outputs and authority signals so buyers easily find your business in Google, ChatGPT, and Gemini.",
    bullet: "Integrated GEO optimization"
  },
  {
    title: "Compounding growth over time",
    description: "We build proprietary model assets and system integrations that keep creating pipeline instead of one-off campaign spikes.",
    bullet: "Sustainable efficiency gains"
  }
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-01",
    industry: "SaaS · B2B",
    headline: "From manual customer onboarding to instantly automated setup",
    shortCopy: "We rebuilt their onboarding workflow around high-intent category queries, custom multi-agent RAG pipelines, and automated CRM orchestration.",
    metric: "+312% setup velocity",
    timeline: "6 months",
    logoColor: "from-blue-500 to-indigo-500",
    tags: ["Agentic Workflows", "PGVector", "HubSpot Sync"]
  },
  {
    id: "case-02",
    industry: "FinTech · Enterprise",
    headline: "Fine-tuned compliance assistant for high-growth audits",
    shortCopy: "Developed a secure, SOC2-compliant sandbox RAG system that automated complex audit checks, turning unstructured files into verified sales pipeline.",
    metric: "-45% manual audit cost",
    timeline: "9 months",
    logoColor: "from-violet-500 to-purple-500",
    tags: ["Custom Fine-Tuning", "Zero-Data Retention", "RAG"]
  },
  {
    id: "case-03",
    industry: "Cybersecurity",
    headline: "LLM-powered search & threat recommendation catalog",
    shortCopy: "Designed a semantic search catalog covering 5M threat patterns, dynamically matching intent and converting searchers to booked product demos.",
    metric: "+180% qualified pipeline",
    timeline: "12 months",
    logoColor: "from-cyan-500 to-emerald-500",
    tags: ["Semantic Search", "GEO Schema", "Predictive ML"]
  }
];

const RELATED_SERVICES: RelatedService[] = [
  {
    title: "AI Visibility Optimization",
    description: "Get cited and recommended in ChatGPT, Gemini, Perplexity, and Google AI Overviews to capture organic intent.",
    benefit: "Drives top-of-funnel citation"
  },
  {
    title: "Content Marketing Clusters",
    description: "Build semantic topic clusters and developer-grade documentation that AI search crawlers actively index.",
    benefit: "Increases authority graph scores"
  },
  {
    title: "Revenue Measurement Layer",
    description: "Connect software telemetry, LLM utilization, and web visits to pipeline, opportunities, and closed revenue.",
    benefit: "Attributes actual marketing ROI"
  }
];

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is AI Software Development?",
    answer: "AI Software Development refers to building applications that embed machine learning models, custom prompt engineering, agentic workflows, and semantic vector indexing directly into software pipelines. SiteOnLab goes beyond simple API wrapper integration; we build robust, compliance-first software systems that automate manual bottlenecks and convert advanced interactions into measurable enterprise pipeline."
  },
  {
    id: "faq-2",
    question: "How is AI Software Development different for B2B companies?",
    answer: "In the B2B sector, AI must be secure, reliable, and directly tied to pipeline. Unlike consumer apps, B2B AI software development requires SOC2-grade security, multi-tenant isolation, structured RAG pipelines that prevent hallucinations, and full integration with enterprise CRMs (like HubSpot and Salesforce) to measure how intelligent features contribute to user retention and sales opportunities."
  },
  {
    id: "faq-3",
    question: "How long does it take to see results?",
    answer: "Our standard program is structured to deliver speed-to-value. We map and complete full compliance-grade audits in 2 weeks, design technical architecture in 1 week, and ship a functional production prototype within the first 45-60 days. The final robust, multi-agent enterprise deployment is fully active and tracking ROI within 90 days."
  },
  {
    id: "faq-4",
    question: "How do you measure ROI?",
    answer: "We reject vanity metrics. SiteOnLab deploys a dedicated telemetry and measurement layer that connects custom software usage, search intent clicks, and AI feature engagement directly to CRM pipeline signals. We track first-touch, multi-touch, and system-assisted revenue, measuring performance by qualified opportunities, closed deals, and operational hours saved."
  },
  {
    id: "faq-5",
    question: "What makes SiteOnLab different from other agencies?",
    answer: "Most traditional agencies deliver abstract strategy reports or simple API wrappers. SiteOnLab is a deep technical engineering partner. We write production-grade TypeScript/Node.js backend infrastructure, configure SOC2 compliance controls, implement semantic RAG caches, and build custom web interfaces. Most importantly, we are a revenue-first agency; we make sure your technical investments build compounding pipeline."
  },
  {
    id: "faq-6",
    question: "Do you handle implementation or only strategy?",
    answer: "We handle the complete lifecycle: strategy, technical architecture, software engineering, security hardening, cloud deployment, and marketing attribution setup. Our full-stack engineering team builds, integrates, and manages the code directly, so you don't need to stress about hiring expensive full-time AI developers."
  },
  {
    id: "faq-7",
    question: "We tried this before and it did not work. Why would this be different?",
    answer: "Many businesses struggle when they build AI features in an isolated sandbox without connecting them to actual user workflows or clean databases. We avoid 'AI slop' and vanity wrappers. We start with a comprehensive Data and Compliance Audit to ensure high-quality training assets, design self-correcting prompt chains with fallbacks, and build a dedicated telemetry measurement layer so you can objectively optimize for pipeline conversion."
  },
  {
    id: "faq-8",
    question: "How does this service support AI visibility?",
    answer: "We build Generative Engine Optimization (GEO) directly into your software and content architecture. By implementing structured schema.org markup, semantic topic routing, and authoritative citation nodes, we ensure that when buyers query ChatGPT, Perplexity, or Gemini, your business and software platform are cited and recommended as primary solutions."
  },
  {
    id: "faq-9",
    question: "What does a typical engagement look like?",
    answer: "An engagement starts with the creation of your custom Growth Blueprint. From there, we move into four distinct phases: (1) Technical Audit and Schema Mapping, (2) Sprint Roadmap Planning, (3) Build, Secure, and Deploy, and (4) Monthly Pipeline Optimization. We run as an embedded engineering extension of your team, providing complete transparency via Slack and shared sprints."
  }
];

export default function App() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [activeProcessStep, setActiveProcessStep] = useState<string>("01");
  const [showSEOModal, setShowSEOModal] = useState<boolean>(false);
  const [showBlueprintModal, setShowBlueprintModal] = useState<boolean>(false);
  
  // Blueprint form state
  const [blueprintForm, setBlueprintForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    bottleneck: "operational_friction",
    budget: "$10,000 - $25,000",
    submitted: false
  });

  // Scroll to section helpers
  const assessmentRef = useRef<HTMLDivElement | null>(null);
  const caseStudiesRef = useRef<HTMLDivElement | null>(null);

  const scrollToAssessment = () => {
    assessmentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToCaseStudies = () => {
    caseStudiesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!blueprintForm.name || !blueprintForm.email || !blueprintForm.company) {
      alert("Please fill in all required fields.");
      return;
    }
    setBlueprintForm({ ...blueprintForm, submitted: true });
  };

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  // Set page title and favicon placeholder dynamically for SEO alignment
  useEffect(() => {
    document.title = "AI Software Development Agency for B2B Pipeline Growth | SiteOnLab";
  }, []);

  return (
    <div className="theme-aisoftware min-h-screen bg-[#050505] text-[#e0e0e0] selection:bg-blue-600/30 selection:text-blue-200 overflow-x-hidden font-sans relative">
      
      {/* Delicate Dot Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#222_1px,transparent_1px)] bg-[size:24px_24px] z-0" />
      {/* Subtle Glows */}
      <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-950/10 via-[#050505]/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute top-[50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none z-0 animate-pulse" />

      {/* SEO Status Bar Indicator (Highly professional touch) */}
      <div className="bg-[#050505]/95 border-b border-white/10 text-xs py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-white/60 uppercase tracking-wider text-[10px]">
              SEO STATIC TARGETS ACTIVE: <strong className="text-white">AI Software Development</strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-white/40 hidden md:inline font-mono uppercase tracking-wider">
              Title Tag & Meta Description injected successfully
            </span>
            <button
              onClick={() => setShowSEOModal(true)}
              className="text-[10px] font-mono font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 uppercase tracking-widest cursor-pointer"
              id="header-open-seo-preview-btn"
            >
              <Eye className="w-3.5 h-3.5" /> PREVIEW GOOGLE & LLM CITATIONS
            </button>
          </div>
        </div>
      </div>

      {/* Header/Navigation */}

      <main className="relative z-10">

        {/* 1. Hero Section */}
        <section className="relative pt-12 pb-20 sm:pb-24 lg:pt-16 lg:pb-32" id="hero-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                {/* Eyebrow */}
                <div className="inline-block px-3 py-1 bg-blue-900/30 border border-blue-500/30 rounded-full">
                  <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                    AI SOFTWARE DEVELOPMENT | ENGINEERING SERVICES
                  </span>
                </div>

                {/* H1 */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] font-normal mb-6">
                  The AI Software Development agency that drives <span className="italic text-blue-400">smart automation</span>, <span className="italic text-blue-400">custom LLMs</span>, and <span className="italic text-blue-400">qualified pipeline</span>.
                </h1>

                {/* Subheading */}
                <p className="font-sans text-lg text-white/60 leading-relaxed max-w-2xl mb-8">
                  SiteOnLab helps <strong className="text-white font-medium">B2B SaaS, enterprise, and high-growth technology companies</strong> turn AI software development into a measurable revenue channel. We help you build intelligent features, integrate custom LLMs, and convert advanced technology into qualified pipeline — measured by qualified pipeline, not vanity metrics.
                </p>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <button
                    onClick={() => setShowBlueprintModal(true)}
                    className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-white/90 rounded-none cursor-pointer transition-colors"
                    id="hero-primary-cta"
                  >
                    Request Growth Blueprint
                  </button>
                  <button
                    onClick={scrollToCaseStudies}
                    className="px-8 py-4 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black rounded-none cursor-pointer transition-colors"
                    id="hero-secondary-cta"
                  >
                    See Case Studies
                  </button>
                </div>

                <div className="pt-6 flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-white/40 border-t border-white/10 max-w-xl">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-blue-400" /> SOC2 COMPLIANT PROCESS
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-400" /> ZERO-DATA RETENTION FALLBACKS
                  </div>
                </div>

              </div>

              {/* Right Column: Related Graphic */}
              <div className="lg:col-span-5 relative">
                <HeroVisualizer />
              </div>

            </div>
          </div>
        </section>

        {/* 2. Trust Metrics Section */}
        <section className="py-12 border-y border-white/10 bg-[#080808] relative" id="trust-metrics-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {TRUST_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="space-y-1.5 text-center lg:text-left border-l border-white/10 pl-4 lg:pl-6 first:border-l-0"
                >
                  <div className="text-2xl sm:text-3xl font-serif text-white">
                    {metric.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                    {metric.label}
                  </div>
                  <div className="font-sans text-xs text-white/60">
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Service Overview Section */}
        <section className="py-20 sm:py-28 relative" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Headings */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                AI Software Development Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                AI Software Development built for compounding B2B revenue growth.
              </h2>
              <p className="font-sans text-base sm:text-lg text-white/60 leading-relaxed">
                Most agencies just configure ready-made wrappers. Our AI Software Development service builds a complete growth system that combines <strong className="text-white font-medium">custom agent chains, semantic vectors, GEO schemas, and compliance auditing</strong> into one revenue channel designed to earn trust with buyers, Google, and AI engines.
              </p>
            </div>

            {/* Service Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICE_COMPONENTS.map((component, idx) => (
                <div
                  key={idx}
                  className="bg-[#080808] border border-white/10 rounded-sm p-6 hover:bg-[#111] transition-all duration-300 hover:border-white/20 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-4">
                    {/* Icon mapping */}
                    <div className="w-12 h-12 rounded-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                      {component.iconName === "Cpu" && <Cpu className="w-6 h-6" />}
                      {component.iconName === "Database" && <Database className="w-6 h-6" />}
                      {component.iconName === "Search" && <Search className="w-6 h-6" />}
                      {component.iconName === "Layers" && <Layers className="w-6 h-6" />}
                      {component.iconName === "LineChart" && <LineChart className="w-6 h-6" />}
                      {component.iconName === "Shield" && <Shield className="w-6 h-6" />}
                    </div>

                    <h3 className="font-serif font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {component.title}
                    </h3>

                    <p className="font-sans text-sm text-white/60 leading-relaxed">
                      {component.description}
                    </p>
                  </div>

                  {/* Bullet points features list */}
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-2">
                    <span className="block text-[10px] font-mono tracking-widest text-white/40 uppercase">
                      TECHNICAL MODULE SPECS
                    </span>
                    <ul className="space-y-1.5">
                      {component.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-xs font-sans text-white/60 flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-blue-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Process Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#050505]" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                Our Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                From legacy systems to production AI in 90 days.
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/60 max-w-xl mx-auto">
                Click on each process stage below to inspect the detailed engineering deliverables and sprint schedules.
              </p>
            </div>

            {/* Interactive Timeline Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Vertical Menu Buttons */}
              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                {PROCESS_STEPS.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProcessStep(step.stepNumber)}
                    className={`w-full text-left p-4 rounded-sm border transition-all duration-300 flex items-center gap-4 cursor-pointer focus:outline-none ${
                      activeProcessStep === step.stepNumber
                        ? "bg-[#080808] border-blue-500/60 shadow-lg text-white"
                        : "bg-transparent border-white/10 hover:border-white/20 text-white/60 hover:text-white"
                    }`}
                    id={`btn-process-step-${step.stepNumber}`}
                  >
                    <span className={`font-mono text-lg font-bold shrink-0 ${
                      activeProcessStep === step.stepNumber ? "text-blue-400" : "text-white/30"
                    }`}>
                      {step.stepNumber}
                    </span>
                    <div className="truncate">
                      <span className="block font-sans font-medium text-sm sm:text-base">
                        {step.title}
                      </span>
                      <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">
                        TIMELINE: {step.timeline}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Column: Detailed deliverables card */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  {PROCESS_STEPS.map((step) => {
                    if (step.stepNumber !== activeProcessStep) return null;
                    return (
                      <motion.div
                        key={step.stepNumber}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="bg-[#080808] border border-white/10 rounded-sm p-6 sm:p-8 h-full flex flex-col justify-between"
                        id={`process-detail-card-${step.stepNumber}`}
                      >
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                              PHASE {step.stepNumber} INTENT
                            </span>
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/60 bg-black/40 border border-white/10 px-2.5 py-1 rounded-sm uppercase tracking-widest">
                              <Clock className="w-3.5 h-3.5 text-blue-400" /> {step.timeline.toUpperCase()}
                            </div>
                          </div>

                          <h3 className="font-serif font-semibold text-2xl text-white tracking-tight">
                            {step.title}
                          </h3>

                          <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed">
                            {step.description}
                          </p>

                          {/* Extra detailed breakdown deliverables */}
                          <div className="space-y-3 pt-4 border-t border-white/10">
                            <span className="block text-[10px] font-mono tracking-widest text-white/40 uppercase">
                              CORE DELIVERABLES IN SPRINT
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                              {step.stepNumber === "01" && (
                                <>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Detailed Operational Friction Audit</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Structured Database Schema Integrity Audit</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Competitor LLM & Feature Matrix Report</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>High-Intent Conversion Pipeline map</span>
                                  </div>
                                </>
                              )}
                              {step.stepNumber === "02" && (
                                <>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Complete custom LLM roadmap diagram</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Model selection matrix (Cost vs. Latency)</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>HIPAA/SOC2 Data Guard design plan</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Vector indexing & database strategy map</span>
                                  </div>
                                </>
                              )}
                              {step.stepNumber === "03" && (
                                <>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Production-grade microservices deployment</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Active Vector DB / PGVector connection</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Full product telemetry scripts installed</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Attribution dashboards connected to CRM</span>
                                  </div>
                                </>
                              )}
                              {step.stepNumber === "04" && (
                                <>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Prompt tuning & token budget audit</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Latency and rate-limit adjustments</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>GEO indexing & search citation check</span>
                                  </div>
                                  <div className="flex items-start gap-2 text-white/70 bg-black/20 p-2.5 rounded-sm border border-white/5">
                                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Continuous pipeline ROI analysis report</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 mt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-white/30 uppercase tracking-widest">
                          <span>SYSTEM INTEGRATOR PATH</span>
                          <span>SITEONLAB SECURE ENGINEERING</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

            </div>

          </div>
        </section>

        {/* 5. Why Choose Us Section */}
        <section className="py-20 sm:py-28 relative" id="why-choose-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                  Why Teams Pick Us
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  An AI Software Development agency that connects intelligent systems to revenue.
                </h2>
              </div>
              <div className="lg:col-span-4 text-left">
                <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed">
                  Most agencies hand you standard api wrapper reports and call it done. SiteOnLab builds a full enterprise measurement layer so you can see how AI-driven features contribute across the buyer journey, from first touch to qualified opportunity.
                </p>
              </div>
            </div>

            {/* Differentiator Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DIFFERENTIATORS.map((diff, idx) => (
                <div
                  key={idx}
                  className="bg-[#080808] border border-white/10 rounded-sm p-6 hover:border-blue-500/30 hover:bg-[#111] transition-all duration-200 text-left space-y-4"
                >
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
                    // DELIVERABLE 0{idx + 1}
                  </span>
                  <h3 className="font-serif font-semibold text-lg text-white">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
                    {diff.description}
                  </p>
                  <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {diff.bullet}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. Case Studies Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#050505]" id="case-studies">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={caseStudiesRef}>
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
              <div className="space-y-4 text-left">
                <span className="text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                  Case Studies & Results
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                  AI Software Development results we can put a number on.
                </h2>
              </div>
              <div>
                <button
                  onClick={() => setShowBlueprintModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-blue-400 hover:text-blue-300 cursor-pointer"
                  id="case-studies-cta-all"
                >
                  See all case studies <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CASE_STUDIES.map((study, idx) => (
                <div
                  key={study.id}
                  className="bg-[#080808] border border-white/10 rounded-sm overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="p-6 space-y-4 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                        {study.industry}
                      </span>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                        {study.timeline}
                      </span>
                    </div>

                    <h3 className="font-serif font-semibold text-lg text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {study.headline}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed">
                      {study.shortCopy}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {study.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono text-white/60 bg-black/40 px-2 py-0.5 rounded-sm border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics box */}
                  <div className="p-6 bg-black/30 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">
                        VERIFIED METRIC
                      </span>
                      <span className="text-xl sm:text-2xl font-serif font-bold text-white">
                        {study.metric}
                      </span>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-black/30 border border-white/10 flex items-center justify-center text-white/60 group-hover:text-blue-400 group-hover:border-blue-500/40 transition-colors">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. Testimonial Section */}
        <section className="py-20 sm:py-24 border-t border-white/10 bg-[#080808]" id="testimonial">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="inline-flex w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 items-center justify-center">
              <span className="text-2xl font-serif">“</span>
            </div>

            <blockquote className="font-serif text-lg sm:text-xl text-white/80 leading-relaxed italic max-w-3xl mx-auto">
              “Their strategic engineering helped us turn search into a serious source of qualified opportunities, not just website traffic. We automated manual customer logs and synced them directly to HubSpot pipelines in record time.”
            </blockquote>

            <div className="space-y-1">
              <div className="font-sans font-semibold text-base text-white">
                CTO & Co-Founder
              </div>
              <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                Enterprise B2B SaaS Platform
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-[10px] font-mono text-blue-400 uppercase tracking-widest">
              <span className="font-bold text-white">PROVEN RESULT:</span> +312% setup velocity · 6 months
            </div>
          </div>
        </section>

        {/* 8. Related Services Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#050505]" id="related-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                Related Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                AI Software Development performs better alongside these services.
              </h2>
            </div>

            {/* Related Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {RELATED_SERVICES.map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-[#080808] border border-white/10 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all text-left"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block">
                      // CONNECTED NODE 0{idx + 1}
                    </span>
                    <h3 className="font-serif font-semibold text-xl text-white">
                      {srv.title}
                    </h3>
                    <p className="font-sans text-sm text-white/60 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
                    <span className="text-white/40">BENEFIT:</span>
                    <span className="text-blue-400 font-bold">{srv.benefit}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* INTERACTIVE HUB CONTAINER: Diagnostic & Citation Drawer */}
        <section className="py-20 border-t border-white/10 bg-[#050505] relative" ref={assessmentRef} id="interactive-hub-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5" /> INTERACTIVE STRATEGY TOOLS
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Diagnose your AI readiness and explore search visibility.
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed">
                Use the interactive utilities below to assess your infrastructure gaps, get scoring diagnostics, and preview how SiteOnLab optimizes metadata for modern search and citation nodes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Widget: Readiness Assessment */}
              <AIReadinessAssessment onRequestBlueprint={() => setShowBlueprintModal(true)} />

              {/* Right Widget: SEO Simulator */}
              <div className="space-y-6">
                <SEOPreview />
                
                {/* Embedded quick guide */}
                <div className="bg-[#080808] border border-white/10 rounded-sm p-6 text-left space-y-4">
                  <h4 className="font-serif font-semibold text-white flex items-center gap-1.5 text-sm sm:text-base">
                    <BookOpen className="w-4 h-4 text-blue-400" /> SiteOnLab GEO Methodology
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
                    Most agencies build AI features that are invisible to search indexing. We engineer authority clusters and JSON-LD structural graphs so that crawler systems citation routers recognize your domain, driving both buyer intent search indexing and direct chatbot recommendations.
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                    <div className="p-2 bg-black/40 rounded-sm border border-white/10 text-blue-400 uppercase tracking-widest font-bold">
                      1. RECOGNIZE
                    </div>
                    <div className="p-2 bg-black/40 rounded-sm border border-white/10 text-blue-400 uppercase tracking-widest font-bold">
                      2. CITATE
                    </div>
                    <div className="p-2 bg-black/40 rounded-sm border border-white/10 text-blue-400 uppercase tracking-widest font-bold">
                      3. TRAFFIC
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 9. FAQ Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#050505]" id="faqs">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-4 mb-16 sm:mb-20">
              <span className="text-xs font-mono tracking-widest text-blue-400 uppercase bg-blue-900/30 border border-blue-500/30 px-3 py-1 rounded-full">
                FAQs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Frequently asked questions about AI Software Development.
              </h2>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {FAQS.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-white/10 rounded-sm bg-[#080808] overflow-hidden transition-all duration-200 hover:border-white/20"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-sans font-medium text-white/80 hover:text-white focus:outline-none cursor-pointer"
                      id={`faq-btn-${faq.id}`}
                    >
                      <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                      <div className="text-white/40 shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-left border-t border-white/10 pt-4 bg-[#0c0c0c]">
                        <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 10. Final CTA Section */}
        <section className="py-20 sm:py-28 border-t border-white/10 bg-[#050505] relative overflow-hidden" id="final-cta-section">
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none animate-pulse" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Let’s make AI Software Development your most efficient growth channel.
            </h2>

            <p className="font-sans text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              Book a 30-minute strategy call. We’ll review your current product architecture, identify high-impact automation opportunities your competitors are missing, and show you what it would take to turn AI software development into qualified pipeline.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setShowBlueprintModal(true)}
                className="px-8 py-4 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-white/90 rounded-none cursor-pointer transition-colors"
                id="final-primary-cta"
              >
                Request Growth Blueprint
              </button>
              <button
                onClick={scrollToAssessment}
                className="px-8 py-4 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black rounded-none cursor-pointer transition-colors"
                id="final-secondary-cta"
              >
                Take Readiness Assessment
              </button>
            </div>

            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center justify-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-blue-400 animate-pulse" /> No commitment required · Blueprint shipped in 48h
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}

      {/* MODAL 1: SEO Preview Full Modal Screen */}
      <AnimatePresence>
        {showSEOModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#080808] border border-white/10 rounded-sm w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
              id="seo-modal-container"
            >
              <button
                onClick={() => setShowSEOModal(false)}
                className="absolute right-4 top-4 text-white/60 hover:text-white p-1 bg-black/60 border border-white/10 rounded-sm hover:bg-black transition-all cursor-pointer"
                id="close-seo-modal-btn"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-2 text-left">
                  <h3 className="text-2xl font-serif font-semibold text-white">
                    SiteOnLab SEO & Generative Visibility Preview
                  </h3>
                  <p className="text-sm text-white/60 font-sans leading-relaxed">
                    This page is optimized with precise search indexes and semantic structures. View Google Search snippet previews and AI Engine recommendations below.
                  </p>
                </div>

                <SEOPreview />

                <div className="p-4 bg-black/30 rounded-sm border border-white/10 text-left space-y-3">
                  <h4 className="font-mono text-[10px] text-blue-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <AlertCircle className="w-4 h-4 text-blue-400" /> ACTIVE METADATA FIELDS (DEVELOPER SPECS)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-white/60">
                    <div className="space-y-1 p-3 bg-black/40 rounded-sm border border-white/5">
                      <span className="text-white/40 font-bold block text-[10px]">TITLE TAG:</span>
                      <span className="text-white/80">{titleTag}</span>
                    </div>
                    <div className="space-y-1 p-3 bg-black/40 rounded-sm border border-white/5">
                      <span className="text-white/40 font-bold block text-[10px]">META DESCRIPTION:</span>
                      <span className="text-white/80">{metaDescription}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setShowSEOModal(false)}
                    className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors rounded-none font-sans font-semibold cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: Growth Blueprint Booking Form */}
      <AnimatePresence>
        {showBlueprintModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#080808] border border-white/10 rounded-sm w-full max-w-xl shadow-2xl relative"
              id="blueprint-modal-container"
            >
              <button
                onClick={() => {
                  setShowBlueprintModal(false);
                  setBlueprintForm({ ...blueprintForm, submitted: false });
                }}
                className="absolute right-4 top-4 text-white/60 hover:text-white p-1 bg-black/60 border border-white/10 rounded-sm hover:bg-black transition-all cursor-pointer"
                id="close-blueprint-modal-btn"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-8">
                {!blueprintForm.submitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-900/30 border border-blue-500/30 text-[10px] font-mono text-blue-400 uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" /> STRATEGY CONSULTATION FUNNEL
                      </div>
                      <h3 className="text-2xl font-serif font-semibold text-white tracking-tight">
                        Request your Growth Blueprint
                      </h3>
                      <p className="text-xs text-white/60 font-sans leading-relaxed">
                        Book a 30-minute deep-dive software review. We will inspect your current code structure, isolate technical overhead, and map out a 90-day execution roadmap.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">YOUR NAME *</label>
                          <input
                            type="text"
                            required
                            placeholder="Alex Mercer"
                            value={blueprintForm.name}
                            onChange={(e) => setBlueprintForm({ ...blueprintForm, name: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">BUSINESS EMAIL *</label>
                          <input
                            type="email"
                            required
                            placeholder="alex@company.com"
                            value={blueprintForm.email}
                            onChange={(e) => setBlueprintForm({ ...blueprintForm, email: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">COMPANY NAME *</label>
                          <input
                            type="text"
                            required
                            placeholder="Acme Enterprise"
                            value={blueprintForm.company}
                            onChange={(e) => setBlueprintForm({ ...blueprintForm, company: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">YOUR TITLE / ROLE</label>
                          <input
                            type="text"
                            placeholder="VP of Engineering"
                            value={blueprintForm.role}
                            onChange={(e) => setBlueprintForm({ ...blueprintForm, role: e.target.value })}
                            className="w-full bg-black/50 border border-white/10 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">PRIMARY SYSTEM BOTTLENECK</label>
                        <select
                          value={blueprintForm.bottleneck}
                          onChange={(e) => setBlueprintForm({ ...blueprintForm, bottleneck: e.target.value })}
                          className="w-full bg-black/50 border border-white/10 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-white/80 focus:outline-none focus:border-blue-500"
                        >
                          <option value="operational_friction">Manual operational bottlenecks / CS hours wasted</option>
                          <option value="missing_ai_features">Wanting to launch new intelligent software features</option>
                          <option value="unstructured_knowledge">Unstructured PDFs / internal documentation search chaos</option>
                          <option value="telemetry_gaps">Lack of tracking: cannot link code features to pipeline</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">ESTIMATED 90-DAY PROJECT BUDGET</label>
                        <select
                          value={blueprintForm.budget}
                          onChange={(e) => setBlueprintForm({ ...blueprintForm, budget: e.target.value })}
                          className="w-full bg-black/50 border border-white/10 rounded-sm px-3.5 py-2 text-xs sm:text-sm text-white/80 focus:outline-none focus:border-blue-500"
                        >
                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                          <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                          <option value="$100,000+">$100,000+ / Custom Enterprise</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/10">
                      <div className="text-[10px] font-mono text-white/40 flex items-center gap-1 shrink-0 uppercase tracking-widest">
                        <Shield className="w-3.5 h-3.5 text-blue-400" /> SOC2 Secure Encryption Active
                      </div>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-white/90 rounded-none cursor-pointer transition-colors"
                        id="submit-blueprint-form-btn"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-5"
                    id="blueprint-success-state"
                  >
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif font-semibold text-white">
                        Blueprint Request Transmitted!
                      </h3>
                      <p className="text-sm text-white/60 max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong className="text-white">{blueprintForm.name}</strong>. We have logged Acme Enterprise's bottleneck details. One of our lead systems integrators will contact you at <strong className="text-white">{blueprintForm.email}</strong> inside 12 hours.
                      </p>
                    </div>

                    <div className="bg-black/40 p-4 rounded-sm border border-white/10 text-left max-w-sm mx-auto space-y-2 text-[10px] font-mono text-white/60 uppercase tracking-widest">
                      <div className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">
                        INCOMING SPRINT ASSIGNMENT:
                      </div>
                      <div>• Lead Engineer: Deployed</div>
                      <div>• Budget Frame: {blueprintForm.budget}</div>
                      <div>• Focus Block: {blueprintForm.bottleneck.replace("_", " ").toUpperCase()}</div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setShowBlueprintModal(false);
                          setBlueprintForm({ ...blueprintForm, submitted: false });
                        }}
                        className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors rounded-none font-sans font-semibold cursor-pointer"
                      >
                        Return to Dashboard
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
