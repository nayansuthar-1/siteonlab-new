/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FAQItem, ServiceComponent, ProcessStep, WhyUsItem, CaseStudy, RelatedService } from './types';

export const serviceComponents: ServiceComponent[] = [
  {
    title: "Lead Scoring & Intent Mapping",
    description: "We identify high-intent buyers based on digital body language, website engagement, and content interactions, triggering instant alerts for your sales team.",
    iconName: "Target"
  },
  {
    title: "Multi-Channel Nurture Sequences",
    description: "We build highly personalized, role-based automated sequences across email and social touchpoints, moving prospects from cold awareness to booking meetings.",
    iconName: "MailOpen"
  },
  {
    title: "CRM & Marketing Stack Alignment",
    description: "We configure flawless bi-directional sync between your CRM and automation tools (e.g., Salesforce, HubSpot, Marketo), ensuring 100% database integrity.",
    iconName: "Layers"
  },
  {
    title: "Lead Lifecycle Automation",
    description: "We build structured workflows that track contact transitions from Lead to MQL, SQL, and Opportunity, plugging leaks in your conversion funnel.",
    iconName: "GitMerge"
  },
  {
    title: "Dynamic Content Personalization",
    description: "We inject firmographic data to dynamically customize web copy, emails, and resource recommendations based on industry, company size, and buyer persona.",
    iconName: "Cpu"
  },
  {
    title: "Revenue Attribution & Analytics",
    description: "We build closed-loop, multi-touch attribution reporting that connects marketing activities directly to pipeline metrics and closed-won contract value.",
    iconName: "BarChart3"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "Step 01",
    title: "Audit and intent map",
    description: "We review your current tool health, trace the existing buyer journey, perform deep competitor benchmarking, and map high-impact pipeline expansion opportunities.",
    timeline: "2 weeks",
    deliverables: [
      "Technical Tech Stack Health Report",
      "Lead Lifecycle & Data Flow Blueprint",
      "Buyer Intent Trigger Catalog"
    ]
  },
  {
    step: "Step 02",
    title: "Architecture and sprint plan",
    description: "We design the complete future-state automation architecture, establish updated lead scoring parameters, and sequence build-outs based on speed-to-value impact.",
    timeline: "1 week",
    deliverables: [
      "New Lead Scoring & Grading Matrix",
      "Multi-Touch Nurture Campaign Storyboard",
      "30-60-90 Day Implementation Roadmap"
    ]
  },
  {
    step: "Step 03",
    title: "Build, launch, and measure",
    description: "We handle the complete execution—configuring sync logic, drafting personalized nurture copies, designing triggers, and connecting live marketing channels to custom attribution systems.",
    timeline: "Ongoing",
    deliverables: [
      "Active Triggered Workflows & Scoring Engines",
      "Tested Multi-Channel Nurture Modules",
      "Real-Time Pipeline Attribution Dashboard"
    ]
  },
  {
    step: "Step 04",
    title: "Optimize for pipeline",
    description: "We continuously refine performance. Using real-world engagement metrics, sales feedback, and conversion data, we prune lagging emails, update scores, and optimize sales handoffs.",
    timeline: "Monthly",
    deliverables: [
      "A/B Campaign Performance Analysis",
      "Database Health & Segment Audit Report",
      "Sales-Marketing Feedback Loop Updates"
    ]
  }
];

export const whyUsItems: WhyUsItem[] = [
  {
    title: "Revenue-first strategy",
    description: "We optimize for business outcomes, opportunity value, and CAC efficiency, not isolated email open-rates or superficial vanity clicks.",
    iconName: "TrendingUp"
  },
  {
    title: "Measurement that is honest",
    description: "We connect individual automation touches directly to first-touch, assisted, and last-touch attribution models to track real return on ad spend.",
    iconName: "ShieldCheck"
  },
  {
    title: "Built for Lifecycle Personalization",
    description: "We structure dynamic assets and workflows so prospects receive precisely the right solution pitch at the exact moment their search intent peaks.",
    iconName: "UserCheck"
  },
  {
    title: "Compounding growth over time",
    description: "We construct evergreen digital assets and automated flows that continuously capture and advance leads, generating predictable pipeline month after month.",
    iconName: "Sparkles"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-01",
    industry: "SaaS · B2B",
    tag: "Enterprise SaaS",
    headline: "Rebuilt HubSpot pipeline to double demo velocity",
    shortCopy: "We audited and aligned their obsolete lead lifecycle, introducing triggered warm micro-nurtures for prospects who dropped off mid-trial.",
    metric: "+148% Pipeline Velocity",
    timeline: "6 months"
  },
  {
    id: "case-02",
    industry: "Cybersecurity · Tech",
    tag: "Threat Intel",
    headline: "Turned inactive trial accounts into qualified pipeline",
    shortCopy: "We built in-app usage-triggered email sequences and automated urgent notifications to sales reps when high-value accounts showed active buying signals.",
    metric: "312% MQL-to-SQL Conversion",
    timeline: "9 months"
  },
  {
    id: "case-03",
    industry: "Cloud Infrastructure",
    tag: "IT & MSP Services",
    headline: "Stopped pipeline leakage and slashed customer acquisition cost",
    shortCopy: "We engineered full bi-directional synchronization between Salesforce and Marketo, completely automating sales handoffs and key account targeting.",
    metric: "-45% reduction in CAC",
    timeline: "12 months"
  }
];

export const relatedServices: RelatedService[] = [
  {
    title: "AI Visibility Optimization",
    description: "Structure authority signals, schema markup, and high-intent key assets so your brand is highly cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    tag: "SEO & AI"
  },
  {
    title: "Content Marketing & Assets",
    description: "Draft B2B topic clusters, interactive calculators, and expert-led downloadable whitepapers to continuously feed your automated marketing sequences.",
    tag: "Demand Generation"
  },
  {
    title: "Revenue Measurement & Stack Setups",
    description: "Deploy advanced multi-touch pipeline attribution layers to attribute every single marketing touchpoint directly to closed-won revenue pipelines.",
    tag: "RevOps"
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What is marketing automation?",
    answer: "Marketing automation refers to the software technologies and strategic processes designed to automate repetitive marketing activities (such as lead scoring, nurture emails, lifecycle phase updates, and audience segmentation) across multiple digital channels, while providing highly personalized messaging based on user behaviors."
  },
  {
    question: "How is marketing automation different for B2B companies?",
    answer: "Unlike B2C automation which centers on transactional impulse-buys, B2B marketing automation focuses on managing long, highly complex sales cycles involving multiple stakeholders. It involves mapping intent signals, calculating progressive lead scores, nurturing diverse personas with educational content, and orchestrating flawless transitions to sales teams."
  },
  {
    question: "How long does it take to see results?",
    answer: "Our sprint setup launches initial high-impact quick-wins (such as fixing sync gaps, deploying drop-off nurtures, and building primary scoring rules) within the first 30 days. Full compounding ROI—seen as enhanced sales pipeline velocity and reduced acquisition costs—generally hits maturity within 3 to 6 months of active continuous optimization."
  },
  {
    question: "How do you measure ROI?",
    answer: "We reject vanity metrics like bulk open rates. We measure ROI by connecting automation triggers directly to down-funnel sales metrics: increase in Lead-to-Opportunity conversion rates, reduction in sales cycle length, increase in qualified pipeline value, and total cost of acquisition (CAC) efficiency."
  },
  {
    question: "What makes SiteOnLab different from other agencies?",
    answer: "Most agencies stop at 'email setup.' SiteOnLab is a revenue-focused RevOps and Growth agency. We align your tech stack directly to your commercial strategy. We build custom-engineered measurement layers, integrate robust behavioral triggers, and focus entirely on creating qualified, trackable sales opportunities."
  },
  {
    question: "Do you handle implementation or only strategy?",
    answer: "We handle 100% of the strategic planning AND technical execution. We act as your fractional RevOps engineering team, managing everything from writing high-converting copy and building workflow paths to configuring deep API integrations and debugging sync fields."
  },
  {
    question: "We tried this before and it did not work. Why would this be different?",
    answer: "Past automation failures are usually due to two factors: 'set-it-and-forget-it' campaigns, or disjointed tooling with broken CRM synchronizations. SiteOnLab treats marketing automation as a living revenue engine. We build full-funnel measurement, run monthly optimization cycles, and align all metrics directly with sales priorities."
  },
  {
    question: "How does this service support AI visibility?",
    answer: "A robust marketing automation stack feeds early behavioral data directly into your content engines. By tracing how prospects engage with various assets, we feed high-intent conversion topics back to your SEO teams, creating search assets that AI engines (such as Perplexity and Gemini) regularly cite to prospective buyers."
  },
  {
    question: "What does a typical engagement look like?",
    answer: "A standard engagement begins with our comprehensive 2-week technical and strategic audit. This yields a transparent sprint roadmap where we spend successive 2-week intervals building, deploying, testing, and optimizing targeted segments, leading to an evergreen self-sustaining sales acquisition channel."
  }
];
