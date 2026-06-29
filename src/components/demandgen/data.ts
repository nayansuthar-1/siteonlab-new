/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Metric,
  ServiceComponent,
  ProcessStep,
  Differentiator,
  CaseStudy,
  RelatedService,
  FAQItem,
  AssessmentQuestion
} from './types';

export const METRICS: Metric[] = [
  {
    value: "312%",
    label: "Average Program ROI",
    description: "Verified pipeline revenue growth against program budget within 12 months."
  },
  {
    value: "45 Days",
    label: "Speed-to-Pipeline",
    description: "Average timeline to capture first high-intent buyer opportunities."
  },
  {
    value: "NPS 78",
    label: "Client Satisfaction",
    description: "Industry-leading Net Promoter Score representing direct client feedback."
  },
  {
    value: "40+ Verticals",
    label: "B2B Verticals Scaled",
    description: "Extensive experience across high-growth SaaS, Tech, Cybersecurity, and MSPs."
  }
];

export const SERVICE_COMPONENTS: ServiceComponent[] = [
  {
    id: "abm",
    title: "Account-Based Marketing (ABM) Playbooks",
    description: "Target high-value, high-intent accounts with personalized, multi-channel campaigns that command attention and accelerate decision-making cycles.",
    bullets: [
      "Custom 1-to-1 and 1-to-few buyer experiences",
      "Dynamic web personalization for high-priority targets",
      "Sales-marketing alignment & unified outbound strategy"
    ]
  },
  {
    id: "paid-acq",
    title: "Paid Acquisition & High-Intent Retargeting",
    description: "Highly optimized search, social, and display campaigns engineered to reach active buyers on Google, LinkedIn, and programmatic channels.",
    bullets: [
      "Intent-based bid optimization and bidding templates",
      "Exclusion lists to eliminate non-buyer ad waste",
      "Hyper-specific retargeting sequences based on dwell time"
    ]
  },
  {
    id: "content-synd",
    title: "Content Syndication & Authority Building",
    description: "Establish industry leadership by distributing high-value technical assets, case studies, and video content directly to the buying committee.",
    bullets: [
      "Distribution targeting specific job functions and roles",
      "Subject-matter-expert video and podcast serialization",
      "Interactive tools, calculators, and value assessments"
    ]
  },
  {
    id: "attrib",
    title: "Pipeline Attribution & Multi-Touch Analytics",
    description: "Connect multi-channel marketing campaigns directly to CRM pipeline, letting you see exactly which channel drives opportunities and closed-won accounts.",
    bullets: [
      "Multi-touch pipeline attribution (first-touch, assisted, last-touch)",
      "Interactive HubSpot and Salesforce direct sync dashboards",
      "Client acquisition cost (CAC) and lifetime value (LTV) reporting"
    ]
  },
  {
    id: "cro",
    title: "Frictionless Conversion Rate Optimization (CRO)",
    description: "Audit and re-engineer high-impact friction points—such as demo request forms and sales qualification schedules—to capture intent instantly.",
    bullets: [
      "Form optimization and calendar integration",
      "Personalized landing pages with dynamic social proof",
      "A/B testing of high-converting B2B call-to-actions"
    ]
  },
  {
    id: "intent-data",
    title: "Intent Data Activation & Buyer Signal Tracking",
    description: "Leverage premium account intelligence from 6sense, Bombora, and clearbit to identify and capture accounts in active buying windows.",
    bullets: [
      "De-anonymization of target company website traffic",
      "Automated alerts for high-scoring outbound opportunities",
      "Dynamic ad triggering based on off-site research signals"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Audit & ICP Intent Mapping",
    description: "We audit your historical CRM pipeline data, analyze active competitors, and build a highly accurate Target Account List (TAL) mapped to high-intent buyer triggers.",
    timeline: "2 weeks",
    deliverable: "ICP Intent Matrix & Outbound Account Plan"
  },
  {
    step: "02",
    title: "Campaign Architecture & Sprint Roadmap",
    description: "We orchestrate multi-channel messaging pathways, define custom ad segments, configure pixel tracking, and outline a high-impact 90-day campaign roadmap.",
    timeline: "1 week",
    deliverable: "90-Day Go-to-Market Blueprint"
  },
  {
    step: "03",
    title: "Deploy, Instrument, & Accelerate",
    description: "We build custom creative visual assets, launch targeted LinkedIn & Google search campaigns, embed de-anonymization code, and activate pipeline tracking dashboards.",
    timeline: "Ongoing",
    deliverable: "Live Campaign Deployments & Daily Activity Feeds"
  },
  {
    step: "04",
    title: "Continuous Revenue Optimization",
    description: "We perform continuous copy updates, adjust segment bids based on CRM pipeline velocity, review sales team feedback, and re-allocate budget to the highest-margin channels.",
    timeline: "Monthly",
    deliverable: "Executive Pipeline & CAC Efficiency Report"
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "Revenue-First Strategy",
    description: "We optimize for qualified opportunities and business unit revenue, never hiding behind isolated vanity metrics like impressions, clicks, or generic downloads.",
    iconName: "TrendingUp"
  },
  {
    title: "Measurement That Is Honest",
    description: "We integrate directly with your Salesforce or HubSpot CRM to connect demand programs to real closed-won opportunities and Customer Acquisition Cost (CAC) efficiency.",
    iconName: "ShieldCheck"
  },
  {
    title: "Built For AI Search & LLM Visibility",
    description: "We structure your digital footprint and industry authority so that when buyers query ChatGPT, Gemini, or Perplexity, your brand is the primary recommendation.",
    iconName: "Sparkles"
  },
  {
    title: "Compounding Growth Systems",
    description: "We build repeatable client acquisition playbooks and high-authority assets that keep creating pipeline instead of short-lived campaign spikes.",
    iconName: "Infinity"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-cyber",
    industry: "Cybersecurity · Enterprise SaaS",
    headline: "Scaling enterprise pipeline by 245% while slashing CAC by 35%",
    challenge: "A leading security firm struggled with broad target audiences, paying premium CPCs for low-intent visitors, resulting in zero outbound-to-demo progression.",
    solution: "We deployed hyper-targeted LinkedIn ABM playbooks and search terms focusing specifically on 'Zero Trust compliance software' and active intent-triggered buyer segments.",
    metric: "+245%",
    metricLabel: "Qualified Pipeline Volume",
    timeline: "6 months"
  },
  {
    id: "case-it",
    industry: "IT Services & MSP",
    headline: "Unlocking $1.2M in qualified pipeline from a clean slate",
    challenge: "A mid-market enterprise IT solutions provider relied purely on word-of-mouth and manual networking, lacking a predictable digital inbound source.",
    solution: "We established high-value content syndication assets around cloud cost optimization and activated 6sense intent alerts to alert account managers.",
    metric: "$1.2M",
    metricLabel: "New Pipeline Generated",
    timeline: "4 months"
  },
  {
    id: "case-hr",
    industry: "HR Tech SaaS",
    headline: "Accelerating signup-to-demo conversion rates by 180%",
    challenge: "An HR automation platform had strong initial signups but experienced a massive drop-off before users scheduled a personalized sales evaluation.",
    solution: "We re-engineered their conversion funnel, simplified demo schedules with high-contrast social proof, and integrated clear qualification pathways.",
    metric: "+180%",
    metricLabel: "Demo Conversion Rate",
    timeline: "9 months"
  }
];

export const RELATED_SERVICES: RelatedService[] = [
  {
    title: "Paid Acquisition & Retargeting",
    description: "Capture and convert in-market buyers through high-performance Google Search and LinkedIn ads built for complex B2B buyer journeys.",
    benefit: "Drives immediate buyer intent capture"
  },
  {
    title: "Account-Based Marketing (ABM)",
    description: "Orchestrate highly personalized marketing campaigns and synchronized sales outreach across your highest-value target account accounts.",
    benefit: "Accelerates pipeline for key strategic accounts"
  },
  {
    title: "Revenue Measurement & Operations",
    description: "Set up end-to-end multi-touch attribution, CRM synchronizations, and pipeline telemetry dashboards to track return on marketing spend.",
    benefit: "Proves exact contribution to closed revenue"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Demand Generation?",
    answer: "Demand Generation is a highly strategic, data-driven methodology focused on building awareness, generating interest, and capturing qualified sales pipeline from your ideal accounts. Unlike traditional lead generation (which often gates low-intent ebooks just to capture emails), Demand Generation educates your buyers where they hang out, builds real intent, and ensures that when buyers speak to your sales team, they are qualified, highly motivated, and ready to buy."
  },
  {
    id: "faq-2",
    question: "How is Demand Generation different for B2B companies?",
    answer: "B2B buying involves complex committees (typically 6-12 decision makers) and long sales cycles. HybridMonks's B2B Demand Generation programs address the entire buying committee rather than isolated individuals. We combine account de-anonymization, high-level executive education, and targeted multi-channel distribution to nurture accounts collectively, resulting in higher close rates and larger average contract values (ACV)."
  },
  {
    id: "faq-3",
    question: "How long does it take to see results?",
    answer: "While we establish tracking, audience definitions, and intent monitoring in the first 30 days, we typically see qualified pipeline improvements within 45 to 60 days. By day 90, the compounding demand system is fully online, delivering a predictable stream of pipeline and CAC efficiencies."
  },
  {
    id: "faq-4",
    question: "How do you measure ROI?",
    answer: "We reject vanity metrics like clicks, impressions, and cheap PDF downloads. We measure ROI based on pipeline indicators: Marketing Qualified Accounts (MQAs), Cost Per Opportunity (CPO), Sales Velocity, and ultimately, Customer Acquisition Cost (CAC) compared to Customer Lifetime Value (LTV)."
  },
  {
    id: "faq-5",
    question: "What makes HybridMonks different from other agencies?",
    answer: "Most marketing agencies operate in silos—running search ads, posting on social, or doing SEO without any connection to sales outcomes. HybridMonks is a full-funnel pipeline partner. We merge intent data, high-intent paid campaigns, interactive experiences, and CRM data. Our goals are tied directly to your pipeline growth, making us a true revenue partner."
  },
  {
    id: "faq-6",
    question: "Do you handle implementation or only strategy?",
    answer: "We are a full-service execution partner. We handle everything from high-level campaign strategy, copy writing, and custom design, to paid media management, landing page building, CRM attribution setup, and custom reporting dashboard construction."
  },
  {
    id: "faq-7",
    question: "We tried this before and it did not work. Why would this be different?",
    answer: "B2B demand gen fails when campaigns are unaligned with sales goals and target the wrong traffic. We eliminate this by aligning on a verified Target Account List (TAL) with your sales team from Day 1. We also use premium third-party intent data to verify accounts are actively researching your category before serving high-cost ads, protecting your budget."
  },
  {
    id: "faq-8",
    question: "How does this service support AI visibility?",
    answer: "B2B buyers are increasingly using ChatGPT, Gemini, and Perplexity for vendor evaluations. We build structured technical citations, high-authority backlink structures, and content patterns designed specifically to be cited by LLM crawlers. This ensures that when buyers ask AI engines for recommendations in your category, HybridMonks's clients are listed as primary choices."
  },
  {
    id: "faq-9",
    question: "What does a typical engagement look like?",
    answer: "Our engagements are highly collaborative. We kick off with a deep 2-week audit and ICP intent mapping. Next, we deliver a 90-day campaign sprint plan. You receive weekly transparent campaign updates, bi-weekly performance reviews, direct Slack access, and a live reporting dashboard that mirrors your active pipeline."
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    text: "How is your marketing budget currently tracked and reported?",
    options: [
      {
        text: "We focus on vanity metrics (impressions, clicks, gated PDF downloads)",
        score: 1,
        feedback: "Your metrics are disconnected from revenue. This usually results in high sales resistance and low demo conversion."
      },
      {
        text: "We track Cost Per Lead (CPL) but struggle to connect it to CRM sales pipeline",
        score: 2,
        feedback: "Tracking leads is a start, but it can incentivize low-quality signups. Bridging to CRM is your next major milestone."
      },
      {
        text: "We have clean multi-touch attribution mapping directly to CRM opportunities",
        score: 4,
        feedback: "Excellent! You have high-fidelity data that is ready for advanced scaling and intent-data overlay."
      }
    ]
  },
  {
    id: 2,
    text: "Who are your active campaigns currently targeting?",
    options: [
      {
        text: "Broad demographic categories (e.g. 'all marketing professionals')",
        score: 1,
        feedback: "Broad targeting wastes up to 40% of ad spend. You need a strict target account list to capture active B2B intent."
      },
      {
        text: "A static Target Account List (TAL) provided by the sales team",
        score: 3,
        feedback: "Good alignment with sales, but a static list misses companies who are in-market right now that aren't on your radar."
      },
      {
        text: "A dynamic Target Account List powered by active intent signals (e.g. 6sense/Bombora)",
        score: 4,
        feedback: "Top tier! You are targeting accounts during their active research windows, optimizing your CAC."
      }
    ]
  },
  {
    id: 3,
    text: "What does your current retargeting framework look like?",
    options: [
      {
        text: "We do not have active retargeting campaigns running",
        score: 1,
        feedback: "You're leaving money on the table. Over 95% of first-time B2B site visitors leave without taking action."
      },
      {
        text: "Standard retargeting serving identical generic brand ads to all site visitors",
        score: 2,
        feedback: "Standard retargeting can suffer from high ad fatigue. Nurture visitors with progressive, pain-point-specific assets."
      },
      {
        text: "Sequence retargeting customized by dwell time and specific page intent",
        score: 4,
        feedback: "Incredible! Your retargeting is highly personalized and respects the buyer's stage in the journey."
      }
    ]
  },
  {
    id: 4,
    text: "How visible is your product in AI Search engines (ChatGPT, Gemini, Perplexity)?",
    options: [
      {
        text: "We have no strategy and don't know if we are mentioned by AI bots",
        score: 1,
        feedback: "AI search is the new front-page. If LLMs aren't citing you, you are losing out on modern tech-buyer queries."
      },
      {
        text: "We see some mentions but don't actively optimize content for LLM citation",
        score: 2,
        feedback: "You have natural authority. Structured schemas and citations can turn those occasional mentions into predictable traffic."
      },
      {
        text: "We actively monitor and optimize our citations and authority signals for AI LLMs",
        score: 4,
        feedback: "Outstanding. You are ahead of 90% of B2B companies in optimizing for generative engine optimization (GEO)."
      }
    ]
  },
  {
    id: 5,
    text: "What happens when an anonymous visitor requests a demo?",
    options: [
      {
        text: "They fill a massive 10-field form and wait 24-48 hours for a sales callback",
        score: 1,
        feedback: "This high-friction process kills conversions. Modern buyers expect instant qualification and booking."
      },
      {
        text: "They fill a short form and are redirected to a standard Calendly page",
        score: 3,
        feedback: "Good, but you should ensure they are qualified in real-time to avoid wasting your high-value sales reps' calendars."
      },
      {
        text: "We dynamically qualify and allow qualified accounts to book instantly, route-mapped by CRM owner",
        score: 4,
        feedback: "Flawless. This represents a modern, frictionless inbound sales engine."
      }
    ]
  }
];
