import { ServiceItem, PainPointItem, FrameworkStep, IndustryTile, CaseStudyItem, FAQItem, BlogPostItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    title: "AI Search & Organic Growth",
    description: "Traditional SEO is dead. We build comprehensive SEO, GEO, and AEO strategies that secure high rankings in Google and ensure you are cited in ChatGPT, Claude, and Perplexity.",
    details: [
      "Generative Engine Optimization (GEO)",
      "High-Intent Semantic SEO & Keyword Mapping",
      "Brand Authority & Entity Optimization",
      "Thought-Leadership & B2B Content Creation"
    ],
    iconName: "Sparkles"
  },
  {
    id: 2,
    title: "Demand Generation & Paid Acquisition",
    description: "Capture in-market buyers at the lowest possible CAC. We manage and optimize high-intent search campaigns and targeted ABM social plays that convert directly into sales calls.",
    details: [
      "Google Search & Intent-Based PPC",
      "LinkedIn Account-Based Marketing (ABM)",
      "Retargeting & Custom Audience Nurturing",
      "Paid Search & Social Bid Management"
    ],
    iconName: "Target"
  },
  {
    id: 3,
    title: "Conversion & Digital Experience",
    description: "Traffic means nothing without conversions. We design and engineer ultra-fast, visually stunning, high-converting B2B websites and custom landing pages.",
    details: [
      "Interactive Conversion Rate Optimization (CRO)",
      "Next-Gen React & Headless Web Engineering",
      "Interactive Product Tours & Calculators",
      "Frictionless Form Flow & Lead Capture"
    ],
    iconName: "Layout"
  },
  {
    id: 4,
    title: "AI & Pipeline Automation",
    description: "Streamline your marketing operations. We integrate advanced AI agents, lead scoring systems, and modern marketing automation platforms to accelerate deals.",
    details: [
      "HubSpot & Salesforce Architecture",
      "AI-Powered Lead Enrichment & Routing",
      "Automated Nurture Sequence Design",
      "Conversational AI Assistance & Agents"
    ],
    iconName: "Cpu"
  },
  {
    id: 5,
    title: "B2B Growth Strategy & Positioning",
    description: "Align your team behind a clear Go-To-Market roadmap. We define your ICP, articulate your unique value proposition, and map your complete commercial engine.",
    details: [
      "Go-To-Market (GTM) Strategy",
      "ICP Definiton & Buying Committee Analysis",
      "Competitor AI-Visibility Auditing",
      "Positioning & Category Design"
    ],
    iconName: "TrendingUp"
  }
];

export const PAIN_POINTS: PainPointItem[] = [
  {
    id: 1,
    pain: "We're getting traffic — but it's not turning into pipeline.",
    solution: "We align every keyword and audience to buyer intent and pipeline stage."
  },
  {
    id: 2,
    pain: "Our last agency couldn't connect their work to revenue.",
    solution: "Every engagement is measured against pipeline, CAC, and closed revenue."
  },
  {
    id: 3,
    pain: "Competitors show up in AI search — we don't.",
    solution: "We build GEO and AEO strategies that get you cited where buyers research."
  },
  {
    id: 4,
    pain: "Marketing sends leads. Sales doesn't close them.",
    solution: "We build around your ICP and revenue targets, not arbitrary MQL counts."
  }
];

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    stepNumber: 1,
    title: "Revenue & AI-Visibility Assessment",
    description: "We audit your search footprint and run simulations across major LLMs (ChatGPT, Gemini, Perplexity) to find your leaks and visibility gaps before proposing tactics."
  },
  {
    stepNumber: 2,
    title: "Unified Growth Strategy Build",
    description: "We map a unified SEO, GEO, and high-intent Paid acquisition roadmap completely aligned with your company's revenue goals and ICP buying committee."
  },
  {
    stepNumber: 3,
    title: "High-Velocity specialists Execution",
    description: "Our dedicated developers, copywriters, and search specialists deploy campaigns. We leverage modern AI tools to build better assets, faster."
  },
  {
    stepNumber: 4,
    title: "Executive Reporting & Growth Loop",
    description: "We connect everything directly to your CRM. You receive live dashboards tracking real pipelines, SQLs, and CAC — enabling rapid strategy refinement."
  }
];

export const INDUSTRIES_DATA: IndustryTile[] = [
  {
    id: "saas",
    title: "B2B SaaS",
    iconName: "Layers",
    description: "Accelerate demo requests, self-serve trials, and scale annual contract value (ACV) through structured intent SEO and GEO shortlist dominance."
  },
  {
    id: "it-msp",
    title: "IT Services & MSPs",
    iconName: "Shield",
    description: "Stand out in crowded local and national markets. Capture enterprise decision-makers searching for outsourced IT, cloud solutions, and co-managed services."
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    iconName: "Lock",
    description: "Establish absolute authority. Win the complex trust battle and make the enterprise security shortlist by ranking for ultra-specific compliance and threat vectors."
  },
  {
    id: "professional-services",
    title: "Professional Services",
    iconName: "Briefcase",
    description: "For consulting, advisory, and complex services. Turn partner-level expertise into scalable inbound demand by positioning your team as trusted industry authorities."
  },
  {
    id: "software-dev",
    title: "Software Development",
    iconName: "Code",
    description: "Position your engineering firm to attract high-value product builds, enterprise modernization contracts, and dedicated offshore development teams."
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    iconName: "Factory",
    description: "Capture procurement officials and engineers during key specification phases by ranking technical specs, CAD drawings, and specialized capabilities."
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 1,
    sector: "B2B SaaS",
    title: "From search invisibility to high-intent pipeline leader",
    metric: "+240%",
    metricLabel: "Increase in SQLs",
    resultsDetail: "By restructuring their semantic SEO and deploying a targeted Generative Engine (GEO) program, we secured their brand placement in 85% of ChatGPT & Perplexity market comparisons."
  },
  {
    id: 2,
    sector: "Cybersecurity",
    title: "Capturing enterprise shortlists for complex cyber solutions",
    metric: "$8.4M",
    metricLabel: "Qualified Pipeline Created",
    resultsDetail: "We built intent-focused PPC campaigns paired with custom LinkedIn ABM, helping a growth-stage threat detection startup secure contracts with 14 Fortune 500 prospects."
  },
  {
    id: 3,
    sector: "IT Services & MSPs",
    title: "Dominating national enterprise IT search & authority",
    metric: "180%",
    metricLabel: "Revenue Growth From Search",
    resultsDetail: "Consolidated a disjointed content library into high-authority hubs, helping this MSP capture premium co-managed contracts with higher average deal values."
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 1,
    question: "What makes HybridMonks different from an SEO or PPC agency?",
    answer: "HybridMonks is built from the ground up for B2B revenue and AI visibility. Traditional agencies focus on vanity metrics like impressions and traffic, whereas we align our campaigns with qualified pipeline, customer acquisition cost (CAC), and closed revenue. Furthermore, we are pioneers in GEO (Generative Engine Optimization), ensuring your brand is recommended by AI tools like ChatGPT, Perplexity, and Gemini, alongside Google organic search."
  },
  {
    id: 2,
    question: "What is GEO and why does it matter for B2B?",
    answer: "GEO, or Generative Engine Optimization, is the process of optimizing your digital presence so that AI search engines (like ChatGPT, Claude, Gemini, and Perplexity) cite and recommend your brand when buyers perform queries. Modern B2B buyers do extensive research in conversational AI before ever contacting sales. If AI doesn't recommend you during their research, you are invisible at the exact moment their shortlist is built."
  },
  {
    id: 3,
    question: "How long until I see results?",
    answer: "While high-impact demand generation and PPC campaigns can start generating qualified inquiries within 30 to 45 days, organic search and GEO strategies typically require 90 to 120 days to compound. Our methodology incorporates quick-win campaigns alongside long-term compounding strategies to maintain a healthy pipeline trajectory."
  },
  {
    id: 4,
    question: "Do you work with companies burned by past agencies?",
    answer: "Yes, over 70% of our current clients came to us after being disappointed by generalist agencies that delivered traffic but no revenue. We rebuild trust by starting with a comprehensive audit, establishing transparent, revenue-tied KPIs, and providing executive-level reporting so you see exactly how every dollar spent translates to pipeline."
  },
  {
    id: 5,
    question: "How do you measure and report ROI?",
    answer: "We integrate directly with your CRM (Salesforce, HubSpot, etc.) and marketing automation platforms to trace every lead back to its organic search query or ad click. We measure our success on pipeline value generated, Sales Qualified Leads (SQLs), and overall customer acquisition cost (CAC), rather than generic clicks or impressions."
  },
  {
    id: 6,
    question: "What industries do you specialize in?",
    answer: "We specialize exclusively in high-value B2B sectors. This includes SaaS & technology, cybersecurity, IT services/MSPs, professional services/consulting, software development, and specialized manufacturing/industrial markets. Our team understands complex B2B buying cycles, committee-based decision making, and technical product positioning."
  }
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 1,
    category: "Generative Engine Optimization",
    title: "The B2B Guide to GEO: How to Get Cited in ChatGPT & Perplexity",
    readTime: "7 min read",
    date: "June 20, 2026",
    summary: "Discover the critical shift from traditional search engine optimization to generative engine visibility, and how B2B leaders are winning the AI shortlist."
  },
  {
    id: 2,
    category: "Demand Generation",
    title: "Stop Chasing MQLs: Designing a B2B Revenue Engine That Actually Closes",
    readTime: "5 min read",
    date: "June 14, 2026",
    summary: "Learn how to align marketing campaigns with pipeline value rather than arbitrary lead scores, transforming marketing from a cost center to a revenue driver."
  },
  {
    id: 3,
    category: "Account-Based Marketing",
    title: "Synthesizing SEO with ABM: A Blueprint for SaaS Enterprise Pipeline",
    readTime: "8 min read",
    date: "May 28, 2026",
    summary: "A step-by-step guide on using high-intent organic search intent data to power and personalize your LinkedIn and email Account-Based Marketing plays."
  }
];
