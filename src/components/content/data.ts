import { 
  TrustMetric, 
  ServiceComponent, 
  ProcessStep, 
  Differentiator, 
  CaseStudy, 
  Testimonial, 
  RelatedService, 
  FAQItem 
} from './types';

export const HERO_CONTENT = {
  eyebrow: "B2B Content Marketing | Enterprise growth & high-intent organic visibility",
  h1: {
    prefix: "The",
    highlight: "Content Marketing",
    suffix: "agency that drives pipeline, organic demand, and industry authority."
  },
  subheading: "HybridMonks helps B2B SaaS, technology, cybersecurity, and enterprise-services companies turn high-quality editorial content into a compounding revenue engine. We help you establish undeniable search authority, earn citations in AI search engines, and convert readers into qualified pipelines.",
  primaryCTA: "Request a Growth Blueprint",
  secondaryCTA: "See Case Studies"
};

export const TRUST_METRICS: TrustMetric[] = [
  {
    id: "metric-1",
    value: "324% average ROI",
    label: "Attributed Revenue",
    description: "Average program return-on-investment across B2B clients in the first 12 months.",
    icon: "TrendingUp"
  },
  {
    id: "metric-2",
    value: "14 days to first asset",
    label: "Rapid Speed-to-Value",
    description: "From strategy sign-off to your first premium, ready-to-publish content asset.",
    icon: "Zap"
  },
  {
    id: "metric-3",
    value: "NPS 76 score",
    label: "Client Satisfaction",
    description: "Exceptional relationship retention reflecting our strategic alignment with sales.",
    icon: "Heart"
  },
  {
    id: "metric-4",
    value: "120+ SaaS verticals ranked",
    label: "B2B Vertical Experience",
    description: "Deep domain content authority developed across highly complex tech sectors.",
    icon: "Award"
  }
];

export const SERVICE_OVERVIEW: ServiceComponent[] = [
  {
    id: "comp-1",
    title: "Keyword Research & Search Intent Mapping",
    tag: "Strategy",
    description: "We don't search for broad search volumes. We map your specific B2B buyer journey to high-intent search terms (commercial, informational, comparison) that indicate a readiness to buy, eliminating wasted spend.",
    features: [
      "Commercial Intent Scoring",
      "Competitor Keyword Gap Analysis",
      "Comparison ('vs') & Alternative keyword mapping",
      "Buyer Persona alignment"
    ]
  },
  {
    id: "comp-2",
    title: "Content Strategy & Topic Clusters",
    tag: "Architecture",
    description: "Establish undeniable search authority through interconnected networks of depth. We design comprehensive 'Topic Clusters' that cover high-authority pillars and supportive deep-dives to satisfy search engines.",
    features: [
      "Core Pillar Page Planning",
      "Semantic Link Mapping",
      "Internal Linking Blueprints",
      "Search Authority modeling"
    ]
  },
  {
    id: "comp-3",
    title: "AI Search Optimization & GEO",
    tag: "Innovation",
    description: "Content built for the next generation of search. We structure and write content specifically to be extracted, cited, and recommended inside LLM engines including ChatGPT, Gemini, Perplexity, and Google AI Overviews.",
    features: [
      "Generative Engine Optimization (GEO)",
      "Structured schema injection",
      "Direct question-answer optimization",
      "LLM source indexing alignment"
    ]
  },
  {
    id: "comp-4",
    title: "Revenue & Pipeline Attribution",
    tag: "Analytics",
    description: "Say goodbye to vanity metrics like raw traffic and impressions. We connect your content performance directly to CRM systems, tracking first-touch, multi-touch, and last-touch pipeline contribution.",
    features: [
      "HubSpot & Salesforce integrations",
      "Self-reported attribution tools",
      "Qualified lead tracing",
      "Multi-touch campaign attribution"
    ]
  },
  {
    id: "comp-5",
    title: "Expert B2B Content Production",
    tag: "Craft",
    description: "Deep, original research written by subject matter experts. No fluff or generic AI-drafted articles. We interview your team and write authoritative guides, research reports, and case studies that earn actual buyer trust.",
    features: [
      "Subject Matter Expert interviews",
      "Proprietary original research reports",
      "Slick visual graphic designs",
      "Advanced editorial review workflows"
    ]
  },
  {
    id: "comp-6",
    title: "Technical SEO & Hub Optimization",
    tag: "Performance",
    description: "A fast, crawlable, and beautifully structured content hub. We optimize your CMS structure, page speeds, metadata tags, and URL setups to make indexing instant and reading frictionless.",
    features: [
      "Core Web Vitals acceleration",
      "Mobile-responsive readability audit",
      "Custom blog layout designs",
      "Automated XML sitemap engines"
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Audit & Buyer Intent Mapping",
    description: "We review your current traffic, existing assets, competitor strategies, and customer interviews to build an intent map that targets actual buyers rather than window shoppers.",
    timeline: "2 weeks",
    deliverables: [
      "Competitor content gap analysis",
      "High-intent buyer keyword model",
      "Technical SEO indexability report",
      "Content strategy brief"
    ]
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Architecture & Sprint Roadmap",
    description: "We structure the topic clusters, prioritize content campaigns by direct business impact, and layout a concrete publishing calendar that sequences heavy authority builders first.",
    timeline: "1 week",
    deliverables: [
      "Structured topic cluster matrix",
      "90-day publishing calendar",
      "SME interview schedule",
      "KPI & pipeline goal mapping"
    ]
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Build, Launch & Pipeline Measurement",
    description: "We conduct SME interviews, write premium content, create high-impact graphics, configure schemas for AI engine discovery, and implement pipeline measurement tools.",
    timeline: "Ongoing",
    deliverables: [
      "Weekly publication-ready premium assets",
      "Custom illustrations & graphic models",
      "SEO schemas & formatting optimization",
      "Attribution dashboard deployment"
    ]
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Optimize for Down-Funnel Pipeline",
    description: "We refine published assets based on Google Search Console data, ranking metrics, AI search citation checks, and pipeline feedback from your sales representatives.",
    timeline: "Monthly",
    deliverables: [
      "Historical optimization updates",
      "AI search visibility tracking",
      "Attributed demo/opportunity report",
      "Next-quarter expansion plan"
    ]
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    id: "diff-1",
    title: "Revenue-First Strategy",
    description: "We optimize for qualified opportunities, sales pipeline, and customer acquisition cost (CAC) efficiency — never for isolated pageviews or empty traffic spikes.",
    iconName: "Target",
    badge: "Business Outcomes"
  },
  {
    id: "diff-2",
    title: "Measurement That Is Honest",
    description: "We implement advanced tracking that links content touches to CRM pipeline data, detailing exactly how content contributes to self-reported and multi-touch revenue.",
    iconName: "BarChart3",
    badge: "Clear Attribution"
  },
  {
    id: "diff-3",
    title: "Built for AI & LLM Discovery",
    description: "We write and structure articles so they act as reliable source nodes for LLM search agents like Gemini and Perplexity, turning AI responses into active referral channels.",
    iconName: "Cpu",
    badge: "Future-Proof"
  },
  {
    id: "diff-4",
    title: "Compounding Authority Systems",
    description: "Rather than running ephemeral ad campaigns that stop working the second you stop paying, we build digital assets that accumulate organic search equity and drive pipeline forever.",
    iconName: "Layers",
    badge: "Asset Wealth"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    industry: "B2B SaaS · Compliance Technology",
    clientType: "Enterprise Compliance SaaS",
    headline: "From invisible in organic search to owning buyer-intent keywords",
    challenge: "The client was struggling to compete with high-budget legacy players and had zero organic pipeline for their high-value compliance platform.",
    strategy: "We built 3 core topic clusters addressing enterprise compliance standards and comparison pages against legacy tools.",
    shortCopy: "We rebuilt their SEO strategy around high-intent category, comparison, and problem-aware searches.",
    metric: "+312%",
    metricLabel: "Organic Pipeline Growth",
    timeline: "9 months",
    stats: [
      { label: "High-intent Keywords Ranked", value: "84" },
      { label: "Sourced Demos / Mo", value: "+46" },
      { label: "Cost Per Acquisition (CAC)", value: "-34%" }
    ]
  },
  {
    id: "case-2",
    industry: "Cybersecurity · Incident Response",
    clientType: "Managed Detection & Response",
    headline: "Citing the expert: Driving Perplexity and AI search recommendations",
    challenge: "Traditional keywords were oversaturated, and prospects were increasingly asking AI assistants for cybersecurity vendor recommendations.",
    strategy: "We engineered structured research reports on specific zero-day threats and configured semantic code structures for AI visibility.",
    shortCopy: "Optimized original research papers that got directly cited as primary references in ChatGPT and Gemini search answers.",
    metric: "420k+",
    metricLabel: "AI Citation Impressions",
    timeline: "6 months",
    stats: [
      { label: "AI Search Referrals / Mo", value: "1.2k" },
      { label: "Enterprise SQLs", value: "38" },
      { label: "First-page Clusters", value: "11" }
    ]
  },
  {
    id: "case-3",
    industry: "IT / Managed Services · Enterprise",
    clientType: "Multi-regional IT Consulting",
    headline: "Attributing content directly to $2.1M in closed enterprise pipeline",
    challenge: "Marketing was treated as a cost center because they couldn't prove whether their whitepapers or blogs were driving actual deals.",
    strategy: "We integrated HubSpot CRM with an updated multi-touch attribution protocol and built content hubs mapping to decision-maker paint points.",
    shortCopy: "A complete attribution layer and high-quality thought leadership that drove direct sales bookings.",
    metric: "$2.1M",
    metricLabel: "CRM Sourced Pipeline",
    timeline: "12 months",
    stats: [
      { label: "Attributed Closed Deals", value: "$1.4M" },
      { label: "Decision Maker Views", value: "15k" },
      { label: "Sales Enablement Uses", value: "240+" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "HybridMonks's strategic approach helped us turn content and search into a serious source of qualified enterprise opportunities, not just empty website traffic. Their writer interviews with our engineers captured our voice perfectly.",
    author: "Sarah Jenkins",
    role: "VP of Marketing",
    companyType: "B2B SaaS Security Platform",
    companyName: "VigilantAI",
    proofLine: "+312% organic growth · 9 months",
    avatarSeed: "sarah"
  },
  {
    id: "test-2",
    quote: "Before HybridMonks, we had no idea if our content was driving deals. Their revenue-first attribution model showed us exactly which cluster drove our biggest $100k contract. We finally have clarity on content ROI.",
    author: "Marcus Chen",
    role: "Co-Founder",
    companyType: "Enterprise Cloud Middleware",
    companyName: "StackFlow",
    proofLine: "$2.1M pipeline sourced · 12 months",
    avatarSeed: "marcus"
  }
];

export const RELATED_SERVICES: RelatedService[] = [
  {
    id: "rel-1",
    title: "AI Visibility Optimization (GEO)",
    description: "Get systematically cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews using tailored schema structures.",
    synergy: "Pairs perfectly to ensure the authority content you publish is highly readable and indexed by AI agents.",
    iconName: "Cpu"
  },
  {
    id: "rel-2",
    title: "Technical SEO & Hub Design",
    description: "Build an ultra-fast, mobile-optimized, and beautiful resource hub designed for maximum reading and scanning comfort.",
    synergy: "Accelerates your search rankings by ensuring crawl times are fast and Core Web Vitals are green.",
    iconName: "Gauge"
  },
  {
    id: "rel-3",
    title: "Revenue & Funnel Attribution",
    description: "Connect marketing metrics straight to Salesforce or HubSpot CRM to trace closed-won revenue back to content reads.",
    synergy: "Gives your leadership absolute transparency into organic performance, making marketing a proven profit driver.",
    iconName: "LineChart"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is B2B Content Marketing?",
    answer: "B2B Content Marketing is the strategic creation, distribution, and optimization of deep, authoritative editorial assets (like guides, case studies, topic clusters, and research reports) specifically designed to address the challenges, questions, and pain points of business decision-makers. Unlike B2C content, which is often transactional or emotional, B2B content focuses on establishing high trust, addressing complex purchasing criteria, and educating multiple stakeholders in a buying committee."
  },
  {
    id: "faq-2",
    question: "How is content marketing different for B2B companies?",
    answer: "For B2B, the buyer's journey is longer, involves multiple decision-makers, and has high contract values. Therefore, writing generic or high-level 'fluff' does not work. B2B content must be incredibly rigorous, written with deep domain expertise, and mapped to specific search intents. We focus heavily on commercial search intent (such as buyer guides, comparison reviews, and problem-solving articles) rather than general informational topics, ensuring we reach prospects who are actively in a buying cycle."
  },
  {
    id: "faq-3",
    question: "How long does it take to see results?",
    answer: "While SEO and content marketing are compounding, long-term plays, we build our sprints for rapid speed-to-value. We target low-hanging keyword opportunities, high-intent product comparison pages, and quick technical fixes in the first 30-45 days. Typically, clients see noticeable ranking improvements and early attributed pipeline in 90 days, with full campaign compounding starting between months 6 and 9."
  },
  {
    id: "faq-4",
    question: "How do you measure content marketing ROI?",
    answer: "We connect our analytics layer directly to your sales CRM (HubSpot, Salesforce, etc.). This lets us trace exactly which blog posts or topic clusters a lead read before booking a demo, allowing us to report on 'Content Sourced Pipeline', 'Multi-touch Assisted Pipeline', and 'First-Touch Customer Acquisition Cost' instead of just impressions or clicks."
  },
  {
    id: "faq-5",
    question: "What makes HybridMonks different from other content agencies?",
    answer: "Most content agencies are either 'writing factories' that spit out low-quality AI-assisted drafts with no strategic search relevance, or generic SEO agencies that focus purely on raw traffic volume. HybridMonks is revenue-first. We plan your content around commercial intent, interview your internal subject matter experts to ensure extreme depth, and package schemas so LLM AI search engines recommend you. Finally, we attribute every asset to sales pipeline so you know your exact ROI."
  },
  {
    id: "faq-6",
    question: "Do you handle implementation or only strategy?",
    answer: "We handle the entire end-to-end lifecycle: comprehensive strategy, topic cluster mapping, expert interviews, high-fidelity writing and editing, technical schema injection, uploading to your CMS (WordPress, Webflow, custom), and establishing the CRM attribution reporting layer. You get a fully managed growth engine requiring minimal effort from your in-house team."
  },
  {
    id: "faq-7",
    question: "We tried content marketing before and it didn't work. Why would this be different?",
    answer: "Most failed content marketing initiatives suffer from three fatal flaws: 1) Writing high-level content that doesn't demonstrate actual domain expertise, failing to convert visitors. 2) Targeting keywords with high search volume but zero buying intent. 3) Treating content as a detached creative project instead of a measurable sales-enablement engine. We solve all three by conducting subject expert interviews, building commercial intent clusters, and hardwiring sales pipeline attribution."
  },
  {
    id: "faq-8",
    question: "How does this service support AI visibility?",
    answer: "AI search engines like ChatGPT Search, Perplexity, and Gemini rely on structured semantic relevance, expert citation, and authoritative contextual blocks to deliver answers. We structure our content utilizing clean microdata schemas, explicit direct answers, and data-rich tables. This formatting makes your content highly retrievable by LLM web-crawlers, resulting in your brand being actively cited and recommended in AI search summaries."
  },
  {
    id: "faq-9",
    question: "What does a typical engagement look like?",
    answer: "A standard engagement begins with a deep 2-week onboarding, technical audit, and buyer intent mapping. In Week 3, we agree on a 90-day sprint calendar. By Week 4, we commence SME interviews and begin publishing 2-3 highly-researched, publication-ready assets per week, supported by weekly rank checks and monthly CRM pipeline reviews."
  }
];
