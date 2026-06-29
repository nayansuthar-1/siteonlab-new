import { TrustMetric, ServiceComponent, ProcessStep, Differentiator, CaseStudy, RelatedService, FAQItem } from './types';

export const HERO_CONTENT = {
  eyebrowCategory: "Revenue Operations",
  eyebrowName: "Revenue Measurement & Analytics",
  title: "The Revenue Measurement & Analytics agency that drives CRM pipeline, multi-touch attribution, and marketing ROI.",
  subheading: "HybridMonks helps B2B SaaS, technology, enterprise software, and IT/MSP companies turn chaotic marketing data into a measurable revenue channel. We help you map complete buyer journeys, track multi-touch attribution, and optimize marketing spend for closed revenue — measured by qualified pipeline, not vanity metrics.",
  primaryCTA: "Request a Growth Blueprint",
  secondaryCTA: "See Case Studies",
  metaTitle: "Revenue Measurement & Analytics Agency for B2B Pipeline Growth | HybridMonks",
  metaDescription: "HybridMonks helps B2B SaaS, tech, and service companies use Revenue Measurement and Analytics to drive qualified pipeline, improve tracking accuracy, and connect marketing performance directly to CRM revenue."
};

export const TRUST_METRICS: TrustMetric[] = [
  {
    id: "metric-1",
    value: "4.2x Average Attribution",
    label: "Increased visibility into pipeline sources"
  },
  {
    id: "metric-2",
    value: "14 Days to First Insight",
    label: "Rapid deployment of multi-touch CRM sync"
  },
  {
    id: "metric-3",
    value: "NPS 78 Client Rating",
    label: "Industry-leading partner satisfaction"
  },
  {
    id: "metric-4",
    value: "$450M+ Pipeline Tracked",
    label: "Attributed and optimized since inception"
  }
];

export const SERVICE_COMPONENTS: ServiceComponent[] = [
  {
    id: "comp-1",
    title: "Multi-Touch Attribution setup & design",
    description: "Map exact touchpoints from first search or social touchpoint, through high-intent comparison articles, to CRM opportunity creation and ultimate close."
  },
  {
    id: "comp-2",
    title: "CRM & marketing automation alignment",
    description: "Deep-sync Salesforce or HubSpot pipelines with Google Ads, LinkedIn Ads, and organic funnels to let platforms optimize bids for pipeline value, not clicks."
  },
  {
    id: "comp-3",
    title: "AI Search & LLM visibility tracking",
    description: "Discover which buyer-intent questions highlight your product in ChatGPT, Gemini, and Perplexity, measuring the downstream pipeline sourced from AI citation."
  },
  {
    id: "comp-4",
    title: "Account-level customer journey path mapping",
    description: "Track complex enterprise accounts rather than isolated cookie sessions. Unify multi-member buying committees into cohesive, visual accounts."
  },
  {
    id: "comp-5",
    title: "Single source of truth analytics dashboards",
    description: "Deploy clean, centralized visual reporting layers using Looker Studio, PowerBI, or cloud-hosted warehouses like BigQuery to replace disconnected spreadsheets."
  },
  {
    id: "comp-6",
    title: "Behavioral lead scoring & intent model validation",
    description: "Develop server-side trigger models using client-side actions and firmographic filters to alert your sales team the moment high-intent prospects spike in engagement."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: "Step 01",
    title: "Audit and intent map",
    description: "We review your current analytics setups, detect data leaks, map client journeys, and identify where pipeline attribution is currently broken.",
    timeline: "2 weeks"
  },
  {
    id: "step-2",
    stepNumber: "Step 02",
    title: "Architecture and sprint plan",
    description: "We design your target tracking schema, define key conversion event actions, and outline a custom integration roadmap prioritizing early impact.",
    timeline: "1 week"
  },
  {
    id: "step-3",
    stepNumber: "Step 03",
    title: "Build, launch, and measure",
    description: "We build pixel trackers, set up API server proxies, align CRM properties, launch real-time dashboards, and verify the integrity of the tracking pipelines.",
    timeline: "Ongoing"
  },
  {
    id: "step-4",
    stepNumber: "Step 04",
    title: "Optimize for pipeline",
    description: "We utilize attribution signals, conversion path analyses, and sales-closed reports to continuously adjust ad budgets and focus marketing on what converts.",
    timeline: "Monthly"
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "diff-1",
    title: "Revenue-first strategy",
    description: "We optimize for closed opportunities and CAC efficiency. We completely ignore useless metrics like generic impression counts or raw pixel fires."
  },
  {
    id: "diff-2",
    title: "Measurement that is honest",
    description: "Get full clarity. We map first-touch, assisted, and last-touch signals so you can see what actually initiates conversations versus what closes them."
  },
  {
    id: "diff-3",
    title: "Built for AI search & LLM visibility",
    description: "We track structured schema, search query citation indexes, and dynamic LLM mention rates to quantify how ChatGPT, Gemini, and Perplexity impact pipeline."
  },
  {
    id: "diff-4",
    title: "Compounding growth over time",
    description: "We establish direct first-party data capture pipelines that protect your data history from browser cookie blocks, building a long-term strategic asset."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    industry: "SaaS · B2B Enterprise",
    headline: "From data blindness to 100% visible multi-touch pipeline attribution",
    shortCopy: "We aligned their Salesforce CRM with Google Tag Manager and GA4, allowing them to optimize ad spending for actual pipeline velocity.",
    metric: "+142% demo-to-close rate",
    timeline: "6 months"
  },
  {
    id: "case-2",
    industry: "Cybersecurity · Mid-Market",
    headline: "Uncovering hidden pipeline to cut ad CAC in half",
    shortCopy: "We implemented first-party analytics servers and server-to-server Conversions API, recovering 43% of lost web events.",
    metric: "-48% Customer Acquisition Cost",
    timeline: "9 months"
  },
  {
    id: "case-3",
    industry: "IT Services / MSP",
    headline: "Attributing enterprise contracts to organic AI visibility answers",
    shortCopy: "By building a custom LLM-source tracker, we proved that AI search engines like ChatGPT was driving high-value RFP opportunities.",
    metric: "+280% pipeline influence",
    timeline: "12 months"
  }
];

export const TESTIMONIAL = {
  quote: "HybridMonks's Revenue Measurement framework completely revolutionized how we allocate budget. We stopped arguing about vanity click reports and started investing solely in the campaigns driving actual SQLs. Our ROI is clearer than ever.",
  author: "Sarah Jenkins",
  title: "VP of Growth Marketing, CloudScale Technologies",
  metric: "142% Close-Rate Increase",
  timeline: "6 months"
};

export const RELATED_SERVICES: RelatedService[] = [
  {
    id: "rel-1",
    title: "AI Visibility Optimization",
    description: "Ensure your brand is recommended and cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews."
  },
  {
    id: "rel-2",
    title: "Content Marketing & Authority Clusters",
    description: "Build topic hubs and authoritative search content that naturally attracts and converts buyer-intent traffic."
  },
  {
    id: "rel-3",
    title: "Account-Based Marketing (ABM) Tracking",
    description: "Identify and track buying committee engagement metrics across target accounts throughout the sales pipeline."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is Revenue Measurement and Analytics?",
    answer: "It is the process of collecting, clean-mapping, and analyzing customer behavioral data across all touchpoints, then aligning that data with CRM systems. This lets B2B marketers trace direct pipeline dollar values and Closed-Won revenue back to specific marketing campaigns, instead of relying on vanity metrics like clicks, pageviews, or lead count."
  },
  {
    id: "faq-2",
    question: "How is Revenue Measurement different for B2B companies?",
    answer: "B2B sales cycles are long, involve buying committees of 5-12 people, and span multiple months and devices. Simple consumer-based analytics tools look at single-session clicks. B2B analytics requires account-level mapping, unifying multiple team members' touchpoints, and synchronizing data with complex CRMs like Salesforce or HubSpot over long horizons."
  },
  {
    id: "faq-3",
    question: "How long does it take to see results?",
    answer: "Our typical setup takes 14 days to deploy our baseline multi-touch attribution engine and connect your primary CRM. From there, you will immediately start capturing high-fidelity customer-journey data. Within 30 to 60 days, you will have actionable statistical path patterns showing exactly which assets and campaigns initiate high-intent deals."
  },
  {
    id: "faq-4",
    question: "How do you measure ROI?",
    answer: "We connect directly to your CRM pipeline values. By measuring 'Assisted Pipeline' and 'Attributed Revenue' against your campaign spend, we calculate your true Customer Acquisition Cost (CAC) and campaign ROI. Our clients typically see a massive improvement in spend efficiency, yielding an average program ROI of over 300% within the first year."
  },
  {
    id: "faq-5",
    question: "What makes HybridMonks different from other agencies?",
    answer: "We are an engineering-first revenue marketing agency, not a visual design studio or generic content farm. We write custom tracking scripts, configure server-side Google Tag Manager containers, and connect data warehouses to your systems. We measure our success entirely on your pipeline growth and attribution accuracy, not rankings or traffic spikes."
  },
  {
    id: "faq-6",
    question: "Do you handle implementation or only strategy?",
    answer: "We handle the entire end-to-end technical implementation. Our team writes the code, designs the Google Tag Manager servers, maps your custom properties inside your CRM, integrates third-party tools, and builds the visual Looker Studio dashboards so your teams only need to look at the ready-to-action results."
  },
  {
    id: "faq-7",
    question: "We tried this before and it did not work. Why would this be different?",
    answer: "Most failures happen because agencies rely on basic third-party browser cookies, which are heavily blocked by AdBlockers, Safari, and Brave, leading to up to 40% data loss. HybridMonks implements first-party server-side tracking and direct server-to-server CRM syncing. This bypasses browser restrictions, giving you 99% data completeness and absolute confidence in your reports."
  },
  {
    id: "faq-8",
    question: "How does this service support AI visibility?",
    answer: "As buyers shift to AI engines (ChatGPT, Gemini, etc.) for product research, traditional keyword rank tracking fails. We implement custom referrer tracking and citation monitoring to observe when high-value accounts visit your site directly from an AI conversation, and attribute that generated pipeline back to your AI visibility initiatives."
  },
  {
    id: "faq-9",
    question: "What does a typical engagement look like?",
    answer: "An engagement begins with our intensive 2-week data audit, followed by a detailed roadmap sprint. Then, we transition into hands-on implementation, setting up tracking, server proxies, and custom attribution models. Monthly, we review conversion paths, identify optimizations, and work directly with your growth team to redirect budgets toward winning channels."
  }
];
