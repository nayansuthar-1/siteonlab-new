import { 
  ServiceComponent, 
  ProcessStep, 
  Differentiator, 
  CaseStudy, 
  Testimonial, 
  RelatedService, 
  FAQItem 
} from './types';

export const trustMetrics = [
  { id: 'metric-1', value: '300%', label: 'Average Program ROI', sub: 'Calculated across B2B clients' },
  { id: 'metric-2', value: '90 Days', label: 'To First Ranking movement', sub: 'Speed-to-value commitment' },
  { id: 'metric-3', value: 'NPS 74', label: 'Client Satisfaction Score', sub: 'Industry-leading retention' },
  { id: 'metric-4', value: '50+', label: 'B2B Verticals Ranked', sub: 'Broad industry expertise' }
];

export const serviceComponents: ServiceComponent[] = [
  {
    id: 'comp-1',
    title: 'Generative Engine Optimization (GEO)',
    description: 'We structure and format your content specifically for LLMs like ChatGPT, Claude, and Perplexity, ensuring your brand is recommended in conversational search queries.',
    icon: 'Sparkles',
    businessImpact: 'Drive direct citations and organic link inclusions in conversational AI responses.'
  },
  {
    id: 'comp-2',
    title: 'Search Intent Mapping & Cluster Strategy',
    description: "We map the entire B2B buyer's journey to target high-intent keywords, grouping them into authoritative topic clusters that demonstrate deep categorical coverage.",
    icon: 'Map',
    businessImpact: 'Build deep topical authority that ranks higher on Google and commands active buyer intent.'
  },
  {
    id: 'comp-3',
    title: 'AI Visibility Auditing & Schema Engineering',
    description: 'We build custom JSON-LD schema layers and implement advanced semantic markup designed specifically to give AI search crawlers structured, authoritative data.',
    icon: 'Code2',
    businessImpact: 'Increase search indexing speed and secure high-visibility positions in Google AI Overviews.'
  },
  {
    id: 'comp-4',
    title: 'Brand Sentiment & Co-Citation Building',
    description: 'We execute digital PR and strategic brand-mention campaigns to get your brand co-cited alongside industry keywords and top market competitors in LLM datasets.',
    icon: 'Share2',
    businessImpact: 'Position your company as the default organic recommendation for categorical search prompts.'
  },
  {
    id: 'comp-5',
    title: 'Expert B2B Content Production',
    description: 'We draft in-depth, original articles, product comparison pages, and solution guides packed with high "Information Gain" and actual practitioner expertise.',
    icon: 'FileText',
    businessImpact: 'Increase reader trust while satisfying Google\'s E-E-A-T guidelines and LLM training criteria.'
  },
  {
    id: 'comp-6',
    title: 'Revenue Visibility & Pipeline Attribution',
    description: 'We build comprehensive analytics integrations connecting organic search views and AI citations directly to your CRM pipeline, demos, and closed-won deals.',
    icon: 'BarChart3',
    businessImpact: 'Shift from vanity organic traffic metrics to true closed-loop revenue reporting.'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Audit and intent map',
    description: 'We review your current performance, competitors, buyer journey, and revenue opportunities to establish a rigorous visibility baseline.',
    timeline: '2 weeks',
    activities: ['Competitor gap analysis', 'LLM citation audit', 'Intent classification', 'Pipeline opportunity sizing']
  },
  {
    number: '02',
    title: 'Architecture and sprint plan',
    description: 'We build the customized organic roadmap, prioritize immediate ranking quick-wins, and sequence work by likely business impact.',
    timeline: '1 week',
    activities: ['Topic cluster mapping', 'Semantic schema layout', 'Content backlog prioritization', 'Technical site audit']
  },
  {
    number: '03',
    title: 'Build, launch, and measure',
    description: 'We write elite content, deploy advanced markup schema, and hook up custom revenue tracking to your CRM systems.',
    timeline: 'Ongoing',
    activities: ['High-EEAT content production', 'JSON-LD schema deployment', 'Brand citation insertions', 'Pipeline tracking setup']
  },
  {
    number: '04',
    title: 'Optimize for pipeline',
    description: 'We continuously improve rankings and conversational recommendation share using live search data, AI engine answers, and sales feedback.',
    timeline: 'Monthly',
    activities: ['Conversational citations tracking', 'Google Search Console tuning', 'CRO user journey testing', 'Sales feedback loops']
  }
];

export const differentiators: Differentiator[] = [
  {
    title: 'Revenue-first strategy',
    description: 'We optimize for business outcomes and CAC efficiency, not isolated channel metrics. We want demo sheets filled, not just pageviews.',
    icon: 'Target',
    metricValue: '3x',
    metricLabel: 'Average pipeline lift'
  },
  {
    title: 'Measurement that is honest',
    description: 'We connect organic activity to first-touch, assisted, and last-touch revenue signals so you know exactly where your budget is paying off.',
    icon: 'Landmark',
    metricValue: '100%',
    metricLabel: 'CRM closed-loop alignment'
  },
  {
    title: 'Built for AI search and LLM visibility',
    description: 'We structure content and authority signals so buyers find you in ChatGPT, Gemini, Perplexity, and Google AI Overviews.',
    icon: 'Bot',
    metricValue: '100%',
    metricLabel: 'Conversational index ready'
  },
  {
    title: 'Compounding growth over time',
    description: 'We build high-value digital assets and authoritative backlink networks that keep creating pipeline instead of short paid spikes.',
    icon: 'TrendingUp',
    metricValue: '2.4x',
    metricLabel: 'YoY authority growth yield'
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'case-1',
    industry: 'SaaS · Cybersecurity',
    headline: 'From invisible in search to owning buyer-intent keywords',
    shortCopy: 'We rebuilt their SEO strategy around high-intent category, comparison, and problem-aware searches, optimizing for conversational LLM recommendations.',
    metric: '+312% LLM Citation Growth',
    timeline: '9 months',
    challenge: 'A growing enterprise cybersecurity startup was losing search share to massive legacy players and lacked visibility in ChatGPT and Claude buyer comparisons.',
    solution: 'Engineered comparative product topic clusters, updated structural JSON-LD, and acquired highly contextual technical citations in cybersecurity publications.',
    resultDetails: [
      'Became the No. 1 recommended cybersecurity tool on Perplexity B2B comparison prompts',
      'Captured top three positions for 45+ high-intent search keywords',
      '4.2x increase in qualified sales demos within three quarters'
    ],
    mockChartData: [
      { month: 'Month 1', organic: 100, aiCitations: 10 },
      { month: 'Month 2', organic: 120, aiCitations: 15 },
      { month: 'Month 3', organic: 160, aiCitations: 35 },
      { month: 'Month 4', organic: 210, aiCitations: 70 },
      { month: 'Month 5', organic: 280, aiCitations: 140 },
      { month: 'Month 6', organic: 330, aiCitations: 210 },
      { month: 'Month 7', organic: 370, aiCitations: 290 },
      { month: 'Month 8', organic: 400, aiCitations: 360 },
      { month: 'Month 9', organic: 412, aiCitations: 422 }
    ]
  },
  {
    id: 'case-2',
    industry: 'IT & Cloud Services',
    headline: 'Scaling qualified pipeline for high-growth enterprise consulting',
    shortCopy: 'Developed an expert-authored B2B content strategy targeting IT buyers and deployed advanced schema architecture.',
    metric: '+185% Qualified Pipeline',
    timeline: '6 months',
    challenge: 'High organic blog traffic was generating zero conversion value from low-intent keywords, failing to reach key decision-makers.',
    solution: 'Pruned 150+ low-performing pages, built interactive solution assessment tools, and created high-value problem-solving guides for technical buyers.',
    resultDetails: [
      'Generated 320+ sales-ready enterprise leads mapped directly to targeted landing pages',
      'Ranked for competitive cloud migration keywords',
      '45% reduction in CAC for organically-sourced enterprise contracts'
    ],
    mockChartData: [
      { month: 'Month 1', organic: 100, aiCitations: 20 },
      { month: 'Month 2', organic: 115, aiCitations: 32 },
      { month: 'Month 3', organic: 145, aiCitations: 60 },
      { month: 'Month 4', organic: 180, aiCitations: 105 },
      { month: 'Month 5', organic: 235, aiCitations: 190 },
      { month: 'Month 6', organic: 285, aiCitations: 280 }
    ]
  },
  {
    id: 'case-3',
    industry: 'AI & Machine Learning · Tech',
    headline: 'Establishing authority to dominate LLM search databases',
    shortCopy: 'We outpaced competitors by constructing an advanced brand-authority web and targeted expert co-citation campaigns.',
    metric: '-35% Demo CAC',
    timeline: '12 months',
    challenge: 'Target buyers were moving away from classic Google search, using Perplexity, Gemini, and ChatGPT to build vendor shortlists.',
    solution: 'Pioneered co-citation strategies inside academic whitepapers and niche software directories to ensure ingestion into LLM training corpora.',
    resultDetails: [
      'Achieved consistent placement in Gemini and ChatGPT comparison tables',
      '260% increase in direct brand name search volume',
      'Exceeded 12.2 million cumulative search impressions with Google AI Overviews integrations'
    ],
    mockChartData: [
      { month: 'Month 1', organic: 100, aiCitations: 15 },
      { month: 'Month 2', organic: 130, aiCitations: 25 },
      { month: 'Month 3', organic: 155, aiCitations: 40 },
      { month: 'Month 4', organic: 195, aiCitations: 75 },
      { month: 'Month 5', organic: 220, aiCitations: 110 },
      { month: 'Month 6', organic: 250, aiCitations: 165 },
      { month: 'Month 7', organic: 290, aiCitations: 210 },
      { month: 'Month 8', organic: 335, aiCitations: 275 },
      { month: 'Month 9', organic: 380, aiCitations: 340 },
      { month: 'Month 10', organic: 410, aiCitations: 410 },
      { month: 'Month 11', organic: 440, aiCitations: 485 },
      { month: 'Month 12', organic: 465, aiCitations: 535 }
    ]
  }
];

export const testimonial: Testimonial = {
  quote: "Their strategic approach helped us turn search into a serious source of qualified opportunities, not just website traffic. We went from being completely invisible on generative AI search engines to becoming the default recommended vendor on Perplexity and ChatGPT.",
  author: "Sarah Jenkins",
  title: "VP of Marketing",
  companyType: "B2B Cybersecurity SaaS",
  metric: "+312% organic growth",
  timeline: "9 months",
  avatarSeed: "marketing-sarah"
};

export const relatedServices: RelatedService[] = [
  {
    title: 'AI Visibility Optimization',
    description: 'Get cited and positively recommended in ChatGPT, Gemini, Perplexity, and Google AI Overviews.',
    icon: 'Bot',
    primaryMetric: 'LLM Citations Tracking'
  },
  {
    title: 'Content Marketing Strategy',
    description: 'Build topic clusters and authoritative, original expert content that attracts qualified B2B buyers.',
    icon: 'Newspaper',
    primaryMetric: 'Topical Authority Clusters'
  },
  {
    title: 'Revenue Measurement',
    description: 'Connect organic search activity to sales opportunities, pipeline value, and closed revenue.',
    icon: 'BarChart3',
    primaryMetric: 'CRM attribution setup'
  }
];

export const faqItems: FAQItem[] = [
  {
    category: 'General',
    question: 'What is AI SEO / GEO?',
    answer: 'Generative Engine Optimization (GEO) or AI SEO is the technical and strategic practice of optimizing your B2B website and brand mentions so that generative AI search platforms (like ChatGPT, Gemini, Perplexity, and Google AI Overviews) understand, synthesize, and cite your brand as the top recommended choice for relevant prompts.'
  },
  {
    category: 'Strategy',
    question: 'How is AI SEO / GEO different for B2B companies?',
    answer: 'B2B buying journeys are long and involve complex queries like "How does vendor X compare to vendor Y for healthcare SOC-2?" or "Best enterprise cloud consulting partners with Kubernetes expertise." Traditional SEO targets short keywords; AI SEO optimizes for semantic clusters, expert "Information Gain" content, and structured schemas that these AI models require to form conversational shortlists.'
  },
  {
    category: 'Timeline',
    question: 'How long does it take to see results?',
    answer: 'While traditional search engine rankings can take 6 to 12 months of compounding effort, our tailored GEO sprints specifically target immediate schema architecture and structured co-citation mentions. Most of our B2B partners observe initial conversational engine recommendation shifts and intent-keyword movement within the first 90 days.'
  },
  {
    category: 'ROI',
    question: 'How do you measure ROI?',
    answer: 'We reject vanity rankings and organic traffic graphs that yield zero pipeline. Instead, we link organic clicks and conversational citations to direct closed-loop CRM leads inside HubSpot, Salesforce, or custom structures. We evaluate success based on qualified pipeline, acquisition efficiency (reduced CAC), and total influenced demo volume.'
  },
  {
    category: 'Differentiation',
    question: 'What makes SiteOnLab different from other agencies?',
    answer: 'Most standard agencies write cookie-cutter AI-generated blogs that search engines drop and AI models ignore due to lack of unique insight ("low Information Gain"). SiteOnLab combines master-level B2B technical schema engineering, native digital PR co-citations, and expert-authored practitioner articles to build bulletproof topical authority.'
  },
  {
    category: 'Services',
    question: 'Do you handle implementation or only strategy?',
    answer: 'We are a full-scale, full-execution growth partner. We handle everything from the initial technical and semantic schema audits to the actual expert writing, backlink engineering, digital PR brand citations, and CRM reporting integrations.'
  },
  {
    category: 'Guarantee',
    question: 'We tried this before and it did not work. Why would this be different?',
    answer: 'Standard SEO agencies target high-volume, low-intent terms to inflate traffic numbers. We prioritize high-intent buyer queries (pricing, reviews, comparison matrixes, integrations) and optimize them for LLM crawling. If your content doesn\'t offer true E-E-A-T and schema structure, Google and LLMs won\'t trust or recommend you. Our system builds that exact structural trust.'
  },
  {
    category: 'AI Tech',
    question: 'How does this service support AI visibility?',
    answer: 'Our specialized workflow monitors citation frequency across ChatGPT, Perplexity, Claude, and Google AI Overviews. We optimize content layout (using bullets, structured lists, and explicit definitions) and secure authoritative external brand mentions so LLM scrapers recognize your product as the dominant industry option.'
  },
  {
    category: 'Engagement',
    question: 'What does a typical engagement look like?',
    answer: 'We start with a comprehensive 2-week Technical SEO and LLM Visibility Audit. From there, we layout a 90-day roadmap. Each month, we produce a target cluster of high-EEAT content, implement programmatic schema updates, secure categorical co-citations, and review closed-loop CRM analytics reports during monthly strategic alignment syncs.'
  }
];
