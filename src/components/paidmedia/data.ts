/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ServiceComponent,
  ProcessStep,
  DifferentiatorCard,
  CaseStudy,
  RelatedService,
  FAQItem,
} from "./types";

export const SERVICE_EYEBROW = "Paid Media | Intent & Social Advertising";
export const SERVICE_NAME = "Paid Media";
export const SEO_TITLE = "Paid Media Agency for B2B Pipeline Growth | SiteOnLab";
export const SEO_META = "SiteOnLab helps B2B SaaS, technology, IT/MSP, and professional-services companies use Paid Media to drive qualified pipeline, improve visibility, and connect marketing performance to revenue.";

export const HERO_H1 = "The Paid Media agency that drives demos, sales inquiries, and qualified pipeline.";
export const HERO_SUBHEADING = "SiteOnLab helps B2B SaaS, technology, IT/MSP, and professional-services companies turn paid search and social channels into a measurable revenue channel. We help you target exact buyer personas, get cited in high-value intent categories, and convert visibility into qualified pipeline — measured by qualified pipeline, not vanity metrics.";

export const TRUST_METRICS = [
  {
    value: "340% average",
    label: "program ROAS",
    desc: "Optimized for pipeline",
  },
  {
    value: "30 Days",
    label: "to initial CAC reduction",
    desc: "Immediate spend waste cut",
  },
  {
    value: "94% client",
    label: "retention rate",
    desc: "Strong trust and partnership",
  },
  {
    value: "50+ B2B",
    label: "verticals scaled",
    desc: "SaaS, Cloud, MSP, Cybersecurity",
  },
];

export const SERVICE_OVERVIEW_H2 = "Paid Media built for compounding B2B revenue growth.";
export const SERVICE_OVERVIEW_PARA = "Most agencies just focus on high CTR and cheap clicks, ignoring lead quality and pipeline. Our Paid Media service builds a complete growth system that combines search intent capture, paid social audience mapping, conversion rate optimization, and closed-loop revenue reporting into one revenue channel designed to earn trust with buyers, Google, and AI search engines.";

export const SERVICE_COMPONENTS: ServiceComponent[] = [
  {
    id: "comp-1",
    title: "Intent-Driven Google Search Ads",
    description: "Capture buyers actively searching for your solution. We design hyper-targeted B2B campaigns focusing on high-intent category keywords, comparison keywords, and alternative searches, while eliminating negative keyword waste.",
    bulletPoints: [
      "In-depth buyer intent keyword mapping",
      "Negative keyword lists to block junk traffic",
      "Dynamic ad copy tuned to pain points",
      "Value-based bidding optimizations"
    ]
  },
  {
    id: "comp-2",
    title: "Account-Based Paid Social (LinkedIn)",
    description: "Target your exact Ideal Customer Profile (ICP). We use native account targeting, job functions, seniority, and firmographics to reach decision-makers, buying committees, and key influencers in high-value target companies.",
    bulletPoints: [
      "Target list uploads & lookalike models",
      "Buying committee and seniority filters",
      "Thought-leadership & conversational ad copy",
      "Direct document & lead generation forms"
    ]
  },
  {
    id: "comp-3",
    title: "Multi-Platform Intent Retargeting",
    description: "Re-engage prospects with contextually relevant campaigns. We run coordinated retargeting across Google Display, LinkedIn, and Meta to answer objections, build trust, and showcase client testimonials to buyers.",
    bulletPoints: [
      "Segment-specific ad sequencing",
      "Objection-handling content assets",
      "Comparison matrixes & case studies",
      "Frequency capping to prevent fatigue"
    ]
  },
  {
    id: "comp-4",
    title: "High-Converting Landing Pages",
    description: "Paid traffic requires high-converting destinations. We build custom, lightweight landing pages optimized for B2B buyer journeys, focused strictly on booking high-quality demos and sales meetings.",
    bulletPoints: [
      "Friction-free, smart multi-step forms",
      "Mobile-responsive, lightning-fast loads",
      "Social proof & trust badging placement",
      "Continuous A/B testing on call-to-actions"
    ]
  },
  {
    id: "comp-5",
    title: "AI-Powered Search & Bidding Strategy",
    description: "Leverage advanced machine learning for efficient scaling. We structure ad accounts to supply high-quality data signals to bidding algorithms, aligning them to pipeline goals rather than raw click volume.",
    bulletPoints: [
      "Conversion tracking value overrides",
      "Broad Match + Smart Bidding combinations",
      "Responsive search ad pattern testing",
      "Dynamic search ad guardrails"
    ]
  },
  {
    id: "comp-6",
    title: "Closed-Loop Revenue Reporting",
    description: "Bridge the gap between ad spend and actual sales. We configure integrations with your CRM (HubSpot, Salesforce, Pipedrive) to optimize campaigns based on Sales Qualified Leads (SQL) and deals, not just marketing leads.",
    bulletPoints: [
      "First-touch and multi-touch attribution",
      "CRM pipeline event-trigger feeds",
      "Cost-per-pipeline-dollar metrics",
      "Transparent dashboard showing won revenue"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Audit and intent map",
    description: "We review your current performance, competitors, buyer journey, and revenue opportunities.",
    timeline: "2 weeks",
  },
  {
    step: "02",
    title: "Architecture and sprint plan",
    description: "We build the roadmap, prioritize opportunities, and sequence work by likely business impact.",
    timeline: "1 week",
  },
  {
    step: "03",
    title: "Build, launch, and measure",
    description: "We create, implement, optimize, and connect the work to reporting systems.",
    timeline: "Ongoing",
  },
  {
    step: "04",
    title: "Optimize for pipeline",
    description: "We improve performance using search data, AI visibility signals, conversion data, and sales feedback.",
    timeline: "Monthly",
  },
];

export const WHY_CHOOSE_US_PARA = "Most agencies hand you a vanity report with impressions and clicks, then call it done. SiteOnLab builds a full measurement layer so you can see how Paid Media contributes across the buyer journey, from first touch to qualified opportunity.";

export const DIFFERENTIATORS: DifferentiatorCard[] = [
  {
    id: "diff-1",
    title: "Revenue-first strategy",
    description: "We optimize for business outcomes and CAC efficiency, not isolated channel metrics.",
    benefit: "Focus on Pipeline",
  },
  {
    id: "diff-2",
    title: "Measurement that is honest",
    description: "We connect activity to first-touch, assisted, and last-touch revenue signals.",
    benefit: "CRM Closed-Loop",
  },
  {
    id: "diff-3",
    title: "Built for AI search and LLM visibility",
    description: "We structure content and authority signals so buyers find you in Google and AI engines.",
    benefit: "AI-Ready Ads",
  },
  {
    id: "diff-4",
    title: "Compounding growth over time",
    description: "We build assets and systems that keep creating pipeline instead of one-off campaign spikes.",
    benefit: "Scalable Systems",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    industry: "SaaS · Cybersecurity",
    subCategory: "Enterprise Target Ads",
    headline: "From invisible in paid search to owning buyer-intent keywords",
    shortCopy: "We rebuilt their Paid Media strategy around high-intent category, comparison, and problem-aware searches, driving Enterprise accounts into the funnel.",
    metric: "+312% pipeline growth",
    metricLabel: "Qualified Pipeline value",
    timeline: "9 months",
    tags: ["Google Search Ads", "LinkedIn ABM", "HubSpot Sync"]
  },
  {
    id: "case-2",
    industry: "IT Services & Cloud Tech",
    subCategory: "CAC Reduction Program",
    headline: "Slashing cost-per-acquisition by 46% while scaling budget",
    shortCopy: "By cutting non-converting keywords and optimizing custom landing pages, we drastically reduced acquisition costs and doubled overall meeting velocity.",
    metric: "-46% CAC Reduction",
    metricLabel: "Cost Per Sales-Qualified Lead",
    timeline: "3 months",
    tags: ["Custom Landing Pages", "Google Smart Bidding", "A/B Testing"]
  },
  {
    id: "case-3",
    industry: "Fintech & B2B Software",
    subCategory: "Full-Funnel Campaign",
    headline: "Accelerating demo pipeline with hyper-targeted audience sequences",
    shortCopy: "We created structured retargeting segments on LinkedIn and Facebook to deliver tailored testimonials and comparison sheets to interested buyers.",
    metric: "+185% Demo Meetings",
    metricLabel: "Booked sales conversations",
    timeline: "6 months",
    tags: ["LinkedIn Retargeting", "Social Proof Ads", "Salesforce Attribution"]
  }
];

export const TESTIMONIAL = {
  quote: "“SiteOnLab’s strategic approach helped us turn paid ads into a serious, predictable source of qualified sales opportunities, not just website clicks. We finally have 100% confidence in our marketing ROI.”",
  author: "Sarah Jenkins",
  title: "VP of Marketing, SecureGuard Enterprise",
  metric: "+312% pipeline growth",
  timeline: "9 months"
};

export const RELATED_SERVICES: RelatedService[] = [
  {
    id: "rel-1",
    title: "AI Visibility Optimization",
    description: "Get cited and recommended inside ChatGPT, Gemini, Perplexity, and Google AI Overviews to capture early-stage research queries.",
    primaryMetric: "AI Citation Index"
  },
  {
    id: "rel-2",
    title: "Content Marketing & Assets",
    description: "Build topic clusters, authoritative comparison guides, and landing page content assets that convert Paid Media traffic.",
    primaryMetric: "2.4x Avg. CRO Lift"
  },
  {
    id: "rel-3",
    title: "Revenue Measurement Layer",
    description: "Connect both paid and organic marketing activity directly to opportunities, sales pipeline, and closed-won revenue data.",
    primaryMetric: "100% ROI Attribution"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Paid Media?",
    answer: "B2B Paid Media involves utilizing paid advertising channels—primarily Google Search, LinkedIn Ads, and intent-driven display networks—to target, attract, and convert ideal client buyers. Rather than waiting for organic results, Paid Media puts your brand, offer, or landing page in front of decision-makers instantly."
  },
  {
    id: "faq-2",
    question: "How is Paid Media different for B2B companies?",
    answer: "In B2B, buying cycles are long, ticket sizes are high, and decisions are made by committees rather than single individuals. Therefore, generic B2C ad tactics fail. We optimize B2B Paid Media for Account-Based Marketing (targeting precise firmographics, job titles, and company lists), buyer intent search terms, and sales pipeline outcomes—not simple direct-sales clicks."
  },
  {
    id: "faq-3",
    question: "How long does it take to see results?",
    answer: "Because Paid Media starts serving ads immediately upon launch, you will see high-intent traffic and initial leads in the first 24-48 hours. However, optimizing campaigns to drive consistent Sales-Qualified Leads (SQLs) at a lower Customer Acquisition Cost (CAC) generally takes 30 to 60 days of continuous search intent mapping, negative-keyword tuning, and creative testing."
  },
  {
    id: "faq-4",
    question: "How do you measure ROI?",
    answer: "We connect your CRM (such as HubSpot or Salesforce) directly to the ad platforms. This allows us to track every single prospect from their initial ad click to demo request, pipeline creation, and final closed-won deal. We define ROI based on Pipeline Value Generated and Closed Revenue from your ad budget, rather than simple cost-per-click (CPC) or cost-per-lead (CPL)."
  },
  {
    id: "faq-5",
    question: "What makes SiteOnLab different from other agencies?",
    answer: "Most agencies run campaigns in a silo, report on click CTR, and hand you a list of unvetted lead forms. SiteOnLab is a pipeline-first agency. We build dedicated custom landing pages for your campaigns, verify attribution with closed-loop CRM synchronization, and design ads to target deep buyer intent to ensure high sales rep acceptance rate."
  },
  {
    id: "faq-6",
    question: "Do you handle implementation or only strategy?",
    answer: "We are a full-service partner. We handle everything from the initial strategy and keyword research to writing all ad copy, building custom fast-loading landing pages, configuring CRM tracking tags, designing LinkedIn creatives, setting up smart bid bidding parameters, and running ongoing daily campaign optimizations."
  },
  {
    id: "faq-7",
    question: "We tried this before and it did not work. Why would this be different?",
    answer: "Previous failures are usually caused by three factors: targeting too broad of a keyword scope, lacking structured LinkedIn audience parameters, or sending traffic to generic homepages with high friction forms. SiteOnLab succeeds because we implement laser-focused negative keyword rules, build custom landing pages for each ad group, and enforce closed-loop pipeline filtering so you don't pay for junk clicks."
  },
  {
    id: "faq-8",
    question: "How does this service support AI visibility?",
    answer: "Google and Bing increasingly rely on AI search answers (like Google AI Overviews and Copilot). By positioning your brand on prominent high-intent search ads, bidding on search query clusters that trigger AI answers, and optimizing landing page architectures for semantic indexing, we ensure your brand remains highly visible where AI search tools pull their source citations."
  },
  {
    id: "faq-9",
    question: "What does a typical engagement look like?",
    answer: "It begins with a 2-week in-depth audit and campaign design, where we map out your target accounts and keywords. We then build landing pages and tracking configurations over 1 week. Once launched, we run weekly check-ins, monthly optimization deep-dives, and offer direct access to real-time custom dashboards showing budget spent and pipeline created."
  }
];
