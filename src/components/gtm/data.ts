import { 
  Metric, 
  ServiceComponent, 
  ProcessStep, 
  Differentiator, 
  CaseStudy, 
  RelatedService, 
  FAQItem 
} from './types';

export const METRICS_DATA: Metric[] = [
  {
    id: 'metric-1',
    value: '+312%',
    label: 'Average Pipeline Velocity',
    sublabel: 'Measured by qualified opportunity growth rate within 180 days.',
    accentColor: 'from-blue-400 to-indigo-500'
  },
  {
    id: 'metric-2',
    value: '42 Days',
    label: 'Average Time-to-Market',
    sublabel: 'From audit kickoff to full multi-channel GTM playbook launch.',
    accentColor: 'from-sky-400 to-blue-500'
  },
  {
    id: 'metric-3',
    value: 'NPS 78',
    label: 'Client Satisfaction Score',
    sublabel: 'Ranked in the top 1% of strategic consulting firms globally.',
    accentColor: 'from-indigo-400 to-violet-500'
  },
  {
    id: 'metric-4',
    value: '60+',
    label: 'B2B Niches Scaled',
    sublabel: 'SaaS, Cybersecurity, FinTech, DevTools, and Cloud Infrastructure.',
    accentColor: 'from-blue-500 to-sky-400'
  }
];

export const TRUST_PILLARS = [
  { title: "B2B-only growth focus", desc: "Every model and asset is engineered exclusively for high-ticket enterprise sales cycles." },
  { title: "Google + AI search visibility", desc: "Designed for citation-ready structures in ChatGPT, Gemini, and Google AI Overviews." },
  { title: "Revenue-first reporting", desc: "No vanity traffic reports. Every metric tracks directly to pipeline and ARR impact." },
  { title: "Full-funnel execution", desc: "We bridge the gap from first-touch demand capture to outbound sales enablement." }
];

export const SERVICES_DATA: ServiceComponent[] = [
  {
    id: 'service-1',
    title: 'ICP Validation & TAM Mapping',
    description: 'We audit your customer database, conduct depth interviews, and build precise Ideal Customer Profiles with actionable Total Addressable Market coordinates.',
    deliverables: ['Buying Committee Persona Matrix', 'Firmographic & Technographic Segment Maps', 'High-Intent Target Account List (TAL)'],
    iconName: 'Target'
  },
  {
    id: 'service-2',
    title: 'Multi-Channel GTM Orchestration',
    description: 'Unify your demand generation, paid digital, outbound sales, and search visibility into a single, cohesive engine that surrounds target accounts.',
    deliverables: ['Interconnected Campaign Playbooks', 'Cross-Channel Distribution Schedule', 'Ad Budget Allocation Models'],
    iconName: 'Network'
  },
  {
    id: 'service-3',
    title: 'Full-Funnel Sales Enablement',
    description: 'Equip your sales teams and SDRs with the exact materials, competitive intelligence, and high-intent sequences required to move deals quickly.',
    deliverables: ['SDR High-Intent Outreach Scripts', 'Product-Comparison Battlecards', 'Case Study Multi-format Assets'],
    iconName: 'ShieldAlert'
  },
  {
    id: 'service-4',
    title: 'Revenue Attribution & Measurement',
    description: 'Eliminate internal alignment arguments. We set up closed-loop tracking from first touch in marketing through to opportunity closed-won.',
    deliverables: ['Multi-Touch Attribution Dashboards', 'Salesforce/HubSpot CRM Sync Maps', 'Custom Revenue Pipeline Cockpit'],
    iconName: 'LineChart'
  },
  {
    id: 'service-5',
    title: 'Pricing & Packaging Strategy',
    description: 'Maximize contract values (ACV) and customer lifetime value (LTV) by restructuring plans, expansion triggers, and entry barriers.',
    deliverables: ['SaaS Tiered Packaging Matrix', 'Value-Based Pricing Playbook', 'Land-and-Expand Growth Framework'],
    iconName: 'Coins'
  },
  {
    id: 'service-6',
    title: 'Conversion Rate Optimization (CRO)',
    description: 'Remove friction from your digital storefront. We optimize your demo-request pipelines, trial signups, and pricing page flows for maximum yield.',
    deliverables: ['High-Converting Landing Page Frameworks', 'Demo Flow Redesign Blueprint', 'Friction Point Audit Reports'],
    iconName: 'Zap'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    id: 'step-1',
    stepNumber: 'Step 01',
    title: 'Audit and intent map',
    description: 'We review your current performance, competitors, buyer journey, and revenue opportunities. We map out leaks in your current acquisition funnel and analyze where competitors are winning.',
    timeline: '2 weeks',
    deliverables: ['GTM Leakage Diagnostics', 'Competitor Infiltration Report', 'Buyer-Intent Target Map']
  },
  {
    id: 'step-2',
    stepNumber: 'Step 02',
    title: 'Architecture and sprint plan',
    description: 'We build the strategic roadmap, prioritize immediate opportunities, and sequence tactical sprints by highest business impact and fastest speed-to-revenue.',
    timeline: '1 week',
    deliverables: ['90-Day GTM Architecture Blueprint', 'Prioritized Channel Matrix', 'Immediate Wins Action Log']
  },
  {
    id: 'step-3',
    stepNumber: 'Step 03',
    title: 'Build, launch, and measure',
    description: 'We build the campaigns, implement the landing pages, optimize high-intent search paths, write sales enablement assets, and connect the work to closed-loop reporting systems.',
    timeline: 'Ongoing',
    deliverables: ['Optimized Lead-Capture Pipelines', 'Custom Analytics & Attribution Dashboard', 'Sales Outreach Sequences']
  },
  {
    id: 'step-4',
    stepNumber: 'Step 04',
    title: 'Optimize for pipeline',
    description: 'We constantly refine performance using cold-hard search queries, AI search visibility signals, micro-conversion rates, and direct feedback from your sales team.',
    timeline: 'Monthly',
    deliverables: ['Iterative Funnel Optimization Logs', 'AI Search Citation Audits', 'CAC/LTV Ratio Optimization Matrix']
  }
];

export const DIFFERENTIATORS_DATA: Differentiator[] = [
  {
    id: 'diff-1',
    title: 'Revenue-first strategy',
    description: 'We optimize for business outcomes, qualified opportunities, and CAC efficiency, not isolated channel traffic metrics or impressions.',
    iconName: 'TrendingUp'
  },
  {
    id: 'diff-2',
    title: 'Measurement that is honest',
    description: 'We connect marketing activity directly to first-touch, assisted, and last-touch revenue signals inside your actual CRM.',
    iconName: 'ClipboardCheck'
  },
  {
    id: 'diff-3',
    title: 'Built for AI search and LLM visibility',
    description: 'We structure authority signals and content patterns so enterprise buyers find your brand directly cited in ChatGPT, Gemini, and Perplexity.',
    iconName: 'Sparkles'
  },
  {
    id: 'diff-4',
    title: 'Compounding growth over time',
    description: 'We build persistent assets and systemic capabilities that keep generating pipeline instead of fleeting, one-off campaign spikes.',
    iconName: 'Workflow'
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'case-1',
    industry: 'Cybersecurity',
    subIndustry: 'B2B Enterprise',
    headline: 'From invisible in search to owning buyer-intent keywords',
    shortCopy: 'We rebuilt their SEO strategy around high-intent category, comparison, and problem-aware searches.',
    metricValue: '+312% organic growth',
    metricLabel: 'Qualified pipeline velocity',
    timeline: '9 months',
    challenge: 'A Series B cybersecurity startup had great tech but struggled with high outbound customer acquisition costs. They were entirely invisible in search engines for buyer-intent keywords like "enterprise data security solution".',
    approach: 'We audited their actual customer buying journeys, structured an intensive technical SEO overhaul, developed comparing hubs (us vs competitors), and created detailed, technical thought leadership targeting CTOs and CISOs.',
    results: [
      'Captured #1 ranking for 18 primary high-intent buyer keywords',
      'Generated over $2.4M in pipeline within the first 6 months',
      'Slashed outbound acquisition costs by 38% through warm search-to-demo loops'
    ]
  },
  {
    id: 'case-2',
    industry: 'SaaS',
    subIndustry: 'B2B Enterprise Tech',
    headline: 'Rebuilt enterprise outbound strategy to capture Fortune 500 opportunities',
    shortCopy: 'We realigned their marketing and outbound SDR motions around cold-intent accounts and high-value decision-maker personas.',
    metricValue: '+240% Pipeline Velocity',
    metricLabel: 'Inbound + Outbound closed-won conversion',
    timeline: '6 months',
    challenge: 'The sales team spent endless hours prospecting accounts that had zero intent. The pipeline was clogged with slow-moving deals and marketing-qualified leads that rarely translated to qualified pipeline.',
    approach: 'We implemented intent-data tooling, built high-value outreach sequences triggered by technographic events, and integrated matching LinkedIn programmatic campaigns and bespoke PDF comparison kits.',
    results: [
      'Completed 42 target account meetings with Fortune 500 decision-makers',
      'Accelerated average deal cycle time by 28 days',
      'Unified outbound SDR sequences with inbound search marketing campaigns'
    ]
  },
  {
    id: 'case-3',
    industry: 'B2B FinTech',
    subIndustry: 'Enterprise Payments',
    headline: 'Scaling ACV and optimizing pricing structures for high-intent deals',
    shortCopy: 'We designed tiered subscription packaging and self-service conversion flows to capture mid-market accounts.',
    metricValue: '+$3.2M Added ARR',
    metricLabel: 'Annual recurring revenue added directly',
    timeline: '12 months',
    challenge: 'The platform had a flat-fee structure that failed to capture value from high-usage customers, resulting in massive money left on the table during renewals and expansions.',
    approach: 'We conducted value-metric interviews with their top 20 clients, built a usage-based tier prototype, implemented a custom pipeline value model, and retrained the customer success team on expansion playbooks.',
    results: [
      'Average Contract Value (ACV) surged by 44% with zero customer churn',
      'Uncovered a major expansion stream representing over $1M in expansion pipeline',
      'Launched a self-serve mid-market funnel that converts in under 7 days'
    ]
  }
];

export const RELATED_SERVICES_DATA: RelatedService[] = [
  {
    id: 'rel-1',
    title: 'AI Visibility Optimization',
    description: 'Get cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews so your brand shows up exactly when enterprise buyers are doing pre-purchase research.',
    benefits: ['Algorithm-friendly structural styling', 'High-authority digital footprint', 'AI citation tracking dashboards'],
    iconName: 'Sparkles'
  },
  {
    id: 'rel-2',
    title: 'Content Marketing',
    description: 'Build topic clusters and authoritative, technical content that attracts, educates, and converts qualified buyers without resorting to spammy sales tactics.',
    benefits: ['Buyer-intent topic matching', 'Expert-led content production', 'Deep-dive comparison matrix pages'],
    iconName: 'FileText'
  },
  {
    id: 'rel-3',
    title: 'Revenue Measurement',
    description: 'Connect organic search, outbound sequences, and ads directly to opportunities, pipeline value, and closed ARR inside your standard CRM.',
    benefits: ['CRM single-source-of-truth mapping', 'Clean first/multi-touch attribution', 'Qualified lead quality score models'],
    iconName: 'LineChart'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is GTM & Revenue Strategy?',
    answer: 'A Go-To-Market (GTM) & Revenue Strategy is a comprehensive blueprint that aligns your product value, target customer profile (ICP), channels, and pricing to drive predictable customer acquisition and revenue growth. Unlike simple marketing plans, it coordinates marketing, sales, product, and customer success teams into a unified execution engine.'
  },
  {
    id: 'faq-2',
    question: 'How is GTM & Revenue Strategy different for B2B companies?',
    answer: 'In B2B, purchasing decisions involve multi-person buying committees, longer sales cycles, and complex integration requirements. A B2B-specific GTM strategy optimizes for high Annual Contract Value (ACV) and focuses heavily on high-intent target accounts, value-metric packaging, and content that educates technical stakeholders, rather than relying on impulsive consumer marketing tactics.'
  },
  {
    id: 'faq-3',
    question: 'How long does it take to see results?',
    answer: 'While long-term compounding growth manifests between 6 to 12 months, we focus on identifying and deploying "low-hanging fruit" opportunities within the first 30 days. Most clients see significant increases in sales-qualified opportunities (SQOs) and deal progression velocity within 90 days.'
  },
  {
    id: 'faq-4',
    question: 'How do you measure ROI?',
    answer: 'We measure success using hard business outcomes: Qualified Pipeline Added, Customer Acquisition Cost (CAC) Efficiency, Customer Lifetime Value (LTV) ratios, and Deal Velocity. We completely avoid reporting vanity metrics like impressions, clicks, or unqualified trial signups without financial value.'
  },
  {
    id: 'faq-5',
    question: 'What makes HybridMonks different from other agencies?',
    answer: 'Most traditional agencies focus on a single silo (e.g., just running ads or just doing blog writing) and measure success on vanity metrics. HybridMonks is a full-funnel revenue partner. We bridge the critical gap between marketing activity and CRM sales data, ensuring every strategy directly supports your sales team and generates measurable pipeline.'
  },
  {
    id: 'faq-6',
    question: 'Do you handle implementation or only strategy?',
    answer: 'We handle both. We believe strategy without execution is useless, and execution without strategy is expensive noise. We map the high-level GTM architecture and then jump in to write the scripts, build landing pages, implement analytics tracking, and optimize your pipelines alongside your internal team.'
  },
  {
    id: 'faq-7',
    question: 'We tried this before and it did not work. Why would this be different?',
    answer: 'Previous attempts usually fail due to three things: channel isolation (e.g., running cold ads with no landing-page correlation), poor sales alignment (marketing and sales teams not sharing feedback loops), or looking at the wrong metrics. HybridMonks builds integrated systems with closed-loop tracking, ensuring sales feedback dynamically optimizes marketing targeting daily.'
  },
  {
    id: 'faq-8',
    question: 'How does this service support AI visibility?',
    answer: 'Enterprise buyers increasingly use LLMs like ChatGPT, Claude, Perplexity, and Gemini to research software and vendors. We structure your digital footprint and author authority indicators so that these LLMs cite your brand as the leading option when buyers ask comparative research queries.'
  },
  {
    id: 'faq-9',
    question: 'What does a typical engagement look like?',
    answer: 'We begin with an intensive 2-week Audit and Intent Mapping sprint, followed by 1 week of Architecture. We then launch collaborative agile campaigns and sprint execution in continuous monthly cycles, reviewing actual CRM pipeline data alongside your sales leadership to constantly optimize for enterprise revenue.'
  }
];
