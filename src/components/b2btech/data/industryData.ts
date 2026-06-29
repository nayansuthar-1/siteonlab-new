export interface ChallengeCard {
  id: string;
  title: string;
  description: string;
  impact: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  outcome: string;
}

export interface JourneyStage {
  id: string;
  stage: string;
  buyerMindset: string;
  siteOnLabPlaybook: string;
  deliverables: string[];
}

export interface ProcessStep {
  stepNum: string;
  name: string;
  description: string;
  timeline: string;
  deliverables: string[];
}

export interface DifferentiatorCard {
  title: string;
  description: string;
  benefit: string;
}

export interface ServiceCard {
  name: string;
  description: string;
  slug: string;
  focus: string;
}

export interface CaseStudy {
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
  timeline: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedIndustry {
  name: string;
  description: string;
  slug: string;
}

export const SEO_DATA = {
  titleTag: "B2B Technology Marketing Agency | HybridMonks",
  metaDescription: "Drive qualified pipeline and revenue for your B2B Technology company. Expert B2B SEO, AI search visibility optimization (GEO), high-converting websites, and full-funnel digital marketing.",
  urlSlug: "/industries/b2b-technology",
  h1: "B2B Marketing for B2B Technology Companies That Drives Qualified Pipeline, Revenue, and Long-Term Growth",
  suggestedInternalLinks: [
    { name: "SEO Service Page", link: "/services/seo" },
    { name: "AI Visibility & GEO", link: "/services/ai-visibility-optimization" },
    { name: "Website Design & Development", link: "/services/website-design" },
    { name: "AI Automation", link: "/services/ai-automation" },
    { name: "Conversion Rate Optimization", link: "/services/cro" }
  ],
  suggestedExternalLinks: [
    { name: "Gartner 2026 Technology Buying Behavior", link: "https://www.gartner.com" },
    { name: "Google's Self-Directed B2B Buying Journey Report", link: "https://www.thinkwithgoogle.com" }
  ],
  schemaRecommendations: {
    faq: "https://schema.org/FAQPage",
    breadcrumb: "https://schema.org/BreadcrumbList",
    organization: "https://schema.org/Organization",
    service: "https://schema.org/Service"
  }
};

export const HERO_DATA = {
  eyebrow: "INDUSTRIES | B2B TECHNOLOGY",
  h1: "B2B Marketing for Technology Companies That Scalably Drives Qualified Pipeline and Revenue",
  supportingCopy: "In the high-stakes B2B technology landscape, standard lead generation is dead. Tech buyers are 80% through their decision process before ever talking to sales. HybridMonks designs and executes a modern growth engine—unifying high-authority SEO, AI Search Visibility (GEO/LLM), high-performing web platforms, and precision paid media—to position your technology firm as the obvious market choice. We bypass vanity metrics to deliver what your executive team actually measures: pipeline velocity and closed-won revenue.",
  primaryCta: "Request a Growth Blueprint",
  secondaryCta: "See Case Studies"
};

export const TRUST_METRICS = [
  {
    metric: "3.4x",
    label: "Average Pipeline Velocity Increase",
    subtext: "Accelerated sales cycle for enterprise SaaS clients"
  },
  {
    metric: "$142M+",
    label: "Attributed Closed-Won Revenue",
    subtext: "Tracked and validated through end-to-end CRM attribution"
  },
  {
    metric: "88%",
    label: "AI Search Share of Voice Gain",
    subtext: "Increased citations across Perplexity, ChatGPT & Gemini"
  },
  {
    metric: "220%",
    label: "Average Organic Traffic Growth",
    subtext: "High-intent, bottom-of-funnel keyword acquisition"
  }
];

export const CHALLENGES: ChallengeCard[] = [
  {
    id: "long-buying-cycles",
    title: "Excessively Long & Fragmented Buying Cycles",
    description: "Enterprise software acquisitions now involve 6 to 10 decision-makers, each requiring different proofs of value. Buyers navigate a complex web of independent research, security audits, and internal approvals, resulting in deals stalling in mid-funnel stages.",
    impact: "Sales cycles drag past 9 months, increasing customer acquisition costs (CAC) and making revenue forecasting highly unpredictable."
  },
  {
    id: "ai-disruption",
    title: "AI Search Disruption (GEO / LLM Search)",
    description: "Modern tech buyers no longer just type short queries into Google. They ask ChatGPT, Perplexity, Claude, and Gemini for direct software comparisons and architectures. Standard search strategies ignore how LLMs compile and cite sources, leading to a massive loss in organic share of voice.",
    impact: "Up to 45% of traffic from highly qualified buyers is lost to competitors who are optimized for AI engine visibility and citation models."
  },
  {
    id: "disconnected-revenue",
    title: "Marketing Disconnected from Closed-Won Revenue",
    description: "Traditional agencies celebrate high click-through rates, impressions, and 'Marketing Qualified Leads' (MQLs) from gated PDF downloads. However, these leads rarely convert to SQLs or closed-won revenue, creating constant friction between marketing and sales teams.",
    impact: "Wasted ad budget, inflated cost-per-acquisition, and a sales team forced to sift through low-intent leads instead of actual buyers."
  },
  {
    id: "increasing-competition",
    title: "Increasing Market Saturation & Low Digital Authority",
    description: "The barrier to entry for launching software has collapsed, flooding every category with VC-backed competitors shouting identical value propositions. Differentiation is lost in a sea of generic jargon, and legacy websites fail to command market leadership.",
    impact: "High customer churn, aggressive price pressure, and being treated as a commodity rather than an essential infrastructure partner."
  },
  {
    id: "low-conversion",
    title: "Low Website Conversion & Poor User Experience",
    description: "Most technology websites are over-engineered with confusing jargon, slow-loading animations, and complicated signup forms. Buyers cannot immediately understand what the product does, how it integrates, or how to get a personalized demo.",
    impact: "Bounce rates spike above 75%, and valuable high-intent organic and paid traffic is squandered on a platform that does not guide the user to convert."
  },
  {
    id: "weak-authority",
    title: "Weak Authority in the Dark Social Sandbox",
    description: "Tech buyers discuss vendor reviews, architectures, and performance in private Slack communities, Reddit, and peer networks. Because agencies cannot measure these non-linear touchpoints, they fail to create the high-authority, un-gated content that shapes these private discussions.",
    impact: "Your technology brand is excluded from consideration lists before the buyer even enters an active evaluation phase."
  }
];

export const SOLUTIONS: SolutionCard[] = [
  {
    id: "industry-seo",
    title: "High-Intent B2B Tech SEO",
    description: "We don't target vanity high-volume informational keywords. We map and dominate bottom-of-funnel search terms such as '[Your Category] software for enterprise' and '[Competitor] alternatives' to capture active buyers already in the market.",
    outcome: "Higher organic conversion rates, immediate qualified pipeline capture, and sustainably reduced cost-per-acquisition over time."
  },
  {
    id: "ai-visibility",
    title: "AI Visibility Optimization (GEO)",
    description: "We reverse-engineer how LLM scrapers consume your digital footprint. By building authoritative product definitions, structuring developer-friendly documentation, and generating high-relevance citations, we ensure your tech brand is recommended by ChatGPT, Gemini, and Perplexity.",
    outcome: "Top-of-mind brand citation in AI searches, leading directly to high-intent buyer inquiries."
  },
  {
    id: "high-converting-websites",
    title: "High-Converting Websites & Software Design",
    description: "We design and develop lightning-fast, secure, and accessible marketing websites using modern frameworks (React/Vite, Next.js). We optimize the UX to convey clear value propositions, highlight interactive feature walk-throughs, and streamline scheduling.",
    outcome: "Increased site-wide demo conversions, lower bounce rates, and immediate architectural authority in your sector."
  },
  {
    id: "content-marketing",
    title: "Authority Content Marketing",
    description: "We produce deep, original technical content, whitepapers, and developer guides written by B2B growth strategists who actually understand system architecture, integrations, and compliance. We write for CTOs, CMOs, and security officers, not beginner students.",
    outcome: "Earned natural backlinks, established industry-wide authority, and built a content asset that constantly nurtures buyers."
  },
  {
    id: "paid-advertising",
    title: "Precision Paid Media (LinkedIn, Google & Intent Data)",
    description: "We build razor-sharp account-based marketing (ABM) ad campaigns. Utilizing platform native data paired with intent tools, we target exact accounts in your buying sweet-spot, serving highly relevant ads that address specific department pain points.",
    outcome: "Zero ad waste on unqualified leads, lower cost per demo, and a steady stream of target accounts entering the pipeline."
  },
  {
    id: "conversion-optimization",
    title: "Conversion Rate Optimization (CRO)",
    description: "We run ongoing quantitative and qualitative testing (heatmap analyses, user session replays, speed optimization, and form friction analysis) to continuously iterate and squeeze the maximum pipeline value out of every single site visitor.",
    outcome: "Consistent month-over-month growth in demos and free-trial signups without requiring an increase in marketing spend."
  },
  {
    id: "marketing-automation",
    title: "CRM Integration & Marketing Automation",
    description: "We build clean integrations between your website, marketing tools, and CRM platforms (HubSpot, Salesforce). We set up multi-touch attribution models so you can trace every single pipeline dollar back to its exact organic or paid source.",
    outcome: "Complete transparency in revenue attribution, automated lead routing, and instant feedback loops to optimize campaign spend."
  },
  {
    id: "ai-automation-agents",
    title: "AI Agents & Custom Automation Systems",
    description: "We design and build bespoke AI agents and automation pipelines directly in your operations. This includes conversational demo assistants, automated lead enrichment, personalized outbound triggers, and smart FAQ engines that handle complex user questions.",
    outcome: "Dramatically reduced lead response times, automated high-touch onboarding, and scalable, personalized buyer interactions."
  }
];

export const BUYER_JOURNEY: JourneyStage[] = [
  {
    id: "awareness",
    stage: "1. Awareness & Latent Need",
    buyerMindset: "The buyer is struggling with an operational bottleneck (e.g., system latency, data silos, or rising security overhead). They don't yet know what class of software or service will solve it, and they start looking for analytical content and conceptual overviews.",
    siteOnLabPlaybook: "We publish high-authority industry research, architect-level educational guides, and host targeted LinkedIn thought leadership that frames the problem clearly and points to systemic solutions.",
    deliverables: ["Diagnostic guides", "Un-gated architectural frameworks", "LinkedIn problem-framing campaigns"]
  },
  {
    id: "research",
    stage: "2. Research & Category Search",
    buyerMindset: "The buyer has defined the problem and is actively mapping out the technology category. They are compiling initial lists of vendors, asking peers on Slack networks, and querying AI search engines for recommended architectures.",
    siteOnLabPlaybook: "We optimize your digital footprint for AI citation indexing (GEO), build highly targeted search engine optimization structures around category terms, and launch precise LinkedIn retargeting.",
    deliverables: ["Category SEO domination", "AI search (LLM) citation indexing", "Middle-of-funnel comparison content"]
  },
  {
    id: "evaluation",
    stage: "3. Direct Evaluation",
    buyerMindset: "The buyer has narrowed their list to 2-3 technology vendors. They are evaluating technical specifications, developer integrations, pricing calculators, security compliance (SOC2/GDPR), and reviewing third-party performance metrics.",
    siteOnLabPlaybook: "We build ultra-fast interactive website components—such as calculators, migration templates, and technical interactive demos. We implement full-funnel CRO to remove any sign-up friction.",
    deliverables: ["Interactive ROI & pricing models", "Integrations and security compliance hubs", "High-conversion demo landing pages"]
  },
  {
    id: "decision",
    stage: "4. Consensus & Decision",
    buyerMindset: "The core evaluation committee (incorporating CTO, CFO, CMO, and Procurement) is aligning on the final decision. They need a bulletproof business case, legal/procurement checklists, and reassurance of post-onboarding support.",
    siteOnLabPlaybook: "We supply sales enablement collateral, ROI calculators, custom case studies matching their exact sector, and automated retargeting ads highlighting implementation timelines and customer testimonials.",
    deliverables: ["Sales enablement assets", "Attributed ROI presentations", "Enterprise security/onboarding documentation"]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNum: "01",
    name: "Discovery & Revenue Audit",
    description: "We perform a deep-dive audit of your current digital presence, search authority, conversion funnel, paid advertising accounts, and CRM. We don't rely on assumptions; we extract pure historical data to identify the exact friction points costing you pipeline.",
    timeline: "Weeks 1 - 2",
    deliverables: ["Comprehensive CRM funnel leak report", "Competitor organic & paid gap analysis", "AI engine share of voice assessment"]
  },
  {
    stepNum: "02",
    name: "Growth Engine Strategy",
    description: "We map out a 12-month customized Growth Blueprint. This outlines the exact high-intent keyword targets, the AI search optimization strategy, a modern UX layout design for your website, and target accounts for precision ABM paid ads.",
    timeline: "Weeks 3 - 4",
    deliverables: ["12-month organic search roadmap", "GEO citation deployment plan", "Precision Account-Based Marketing (ABM) list"]
  },
  {
    stepNum: "03",
    name: "Execution & Systems Launch",
    description: "Our senior designers, developers, copywriters, and paid media experts begin full-scale deployment. We build optimized landing pages, publish authoritative technical content, launch highly audited paid campaigns, and configure end-to-end revenue tracking.",
    timeline: "Weeks 5 - 8",
    deliverables: ["Optimized high-speed technical landing pages", "First batch of high-authority technical content assets", "Attribution-configured paid media structures"]
  },
  {
    stepNum: "04",
    name: "Continuous Conversion & Scale",
    description: "Growth is never static. We analyze actual CRM conversions, monitor user mouse-tracking behaviors, run monthly A/B tests, and update SEO rankings to continuously expand your capture of high-intent traffic and scale your monthly pipeline.",
    timeline: "Ongoing Monthly",
    deliverables: ["Monthly conversion/pipeline optimization sprints", "AI citation adjustment reports", "CRM attribution and pipeline ROI updates"]
  }
];

export const WHY_CHOOSE_US: DifferentiatorCard[] = [
  {
    title: "Deep Technology Sector Expertise",
    description: "We speak the language of SaaS, APIs, databases, containers, compliance, and cloud computing. You don't have to spend your onboarding budget teaching our copywriters what 'SOC 2 certification' or 'multi-tenant architecture' means.",
    benefit: "Instant execution alignment, highly accurate technical copywriting, and immediate trust-building with your highly technical buyers."
  },
  {
    title: "Uncompromising Revenue-First Attribution",
    description: "We do not report on vanity metrics like impressions, clicks, or simple form submissions. We connect our work directly to your CRM (HubSpot/Salesforce) to report on actual pipeline created, SQL velocity, and closed-won contract value.",
    benefit: "Complete financial transparency, making it easy to justify marketing budgets directly to your board and CFO."
  },
  {
    title: "AI Search Engine (GEO) Readiness Pioneers",
    description: "We don't just rely on legacy search optimization patterns. We are pioneers in Generative Engine Optimization, ensuring your company's product, core entities, and technical documentation are perfectly formatted for modern AI tools.",
    benefit: "Secure early, high-authority market share in the rapidly expanding ChatGPT, Gemini, and Perplexity research ecosystem."
  },
  {
    title: "Senior-Level Execution Only",
    description: "We don't hand your account over to junior account managers. You work directly with veteran growth strategists, award-winning designers, and elite technical developers who have scaling experience across hundreds of SaaS and technology brands.",
    benefit: "Accelerated execution timelines, strategic advice at every stage, and zero typical agency overhead delays."
  }
];

export const SERVICES: ServiceCard[] = [
  {
    name: "B2B Technology SEO",
    description: "Dominate bottom-of-funnel, high-intent keywords that capture buyers looking for your specific solution.",
    slug: "/services/seo",
    focus: "Organic pipeline capture"
  },
  {
    name: "Generative Engine Optimization (GEO)",
    description: "Optimize your brand's data footprint to secure leading citations in ChatGPT, Gemini, and Perplexity searches.",
    slug: "/services/ai-visibility-optimization",
    focus: "AI search dominance"
  },
  {
    name: "High-Performance B2B Web Development",
    description: "Custom, lightning-fast React and Next.js sites built to maximize visitor-to-demo conversion rates.",
    slug: "/services/website-design",
    focus: "Conversion-optimized infrastructure"
  },
  {
    name: "ABM & Paid Media Management",
    description: "Laser-focused LinkedIn and Google Search campaigns targeting decision-makers at exact target accounts.",
    slug: "/services/paid-advertising",
    focus: "Zero-waste account acquisition"
  },
  {
    name: "Conversion Rate Optimization (CRO)",
    description: "Rigorous user testing, A/B experimenting, and interactive layout tuning to maximize conversion rates.",
    slug: "/services/cro",
    focus: "Squeezing extra value from existing traffic"
  },
  {
    name: "AI Agents & Custom Automation Systems",
    description: "Integrate custom intelligent agents, enrichment systems, and onboarding automation to streamline buyer paths.",
    slug: "/services/ai-automation",
    focus: "Scalable operational speed"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    industry: "B2B SaaS / DevSecOps",
    title: "Scaling Enterprise Security Pipeline for DevSecOps Platform",
    challenge: "A security posture management platform was struggling to attract technical security officers and CTOs due to heavy market noise and an outdated website that failed to demonstrate compliance readiness.",
    solution: "HybridMonks engineered a massive SEO restructurings targeted at developer compliance, created a secure resource hub, and optimized the product footprint for AI search citations on Perplexity and Gemini.",
    outcome: "Generated a 310% increase in high-intent organic demo requests, unlocked $4.2M in new enterprise sales pipeline, and secured 14 primary recommendations in AI security searches.",
    metrics: ["+310% Demo Requests", "$4.2M New Pipeline", "14x AI Search Citations"],
    timeline: "First 6 Months"
  },
  {
    industry: "B2B Cloud Infrastructure",
    title: "ABM Paid Media Strategy Unlocks 42 Enterprise Accounts",
    challenge: "An enterprise database optimization tool was wasting 60% of its paid budget on unqualified leads and individual developer accounts with zero purchasing power.",
    solution: "We deployed a laser-targeted LinkedIn and Google Search Account-Based Marketing (ABM) strategy combined with dynamic landing pages, focusing exclusively on Fortune 1000 VP of Infrastructure titles.",
    outcome: "Acquired 42 closed enterprise deals, reduced cost-per-acquisition (CAC) by 45%, and increased average deal size by 28% through specialized messaging.",
    metrics: ["42 Enterprise Deals", "-45% Reduction in CAC", "+28% Deal Value"],
    timeline: "9 Months"
  },
  {
    industry: "B2B Fintech / AI Solutions",
    title: "SEO and CRO Redesign Drives Predictable Monthly Growth",
    challenge: "A fast-growing AI-powered accounting software platform was receiving steady traffic but converting less than 1.1% of visitors due to a complex, confusing onboarding sign-up flow.",
    solution: "Our team executed a full website redesign using React/Vite, developed interactive ROI calculators, removed friction in form fields, and optimized high-intent search paths.",
    outcome: "Site-wide conversion rate jumped from 1.1% to 3.4% in 60 days, resulting in a 209% increase in monthly recurring revenue (MRR) pipeline.",
    metrics: ["3.4% Conversion Rate (up from 1.1%)", "+209% MRR Pipeline", "50% Lead Form Speed Increase"],
    timeline: "4 Months"
  }
];

export const TESTIMONIAL = {
  quote: "HybridMonks is the only agency we've worked with that actually speaks our language. They designed our website and optimized our organic search. Instead of sending us useless traffic graphs, they connected our marketing spend directly to our HubSpot dashboard, demonstrating a 3.4x pipeline velocity increase in our first year. Their AI Visibility optimizations are a total game-changer.",
  clientName: "Marcus Vance",
  role: "Chief Marketing Officer",
  company: "AetherShield Cybersecurity",
  outcome: "3.4x Pipeline Velocity & $3.8M Attributed Revenue",
  timeline: "12-Month Engagement"
};

export const RELATED_INDUSTRIES: RelatedIndustry[] = [
  { name: "SaaS", description: "Scale your monthly recurring revenue (MRR) through high-converting product-led and sales-led growth engines.", slug: "/industries/saas" },
  { name: "IT Services", description: "Attract enterprise CIOs looking for robust managed infrastructure and custom cloud architecture support.", slug: "/industries/it-services" },
  { name: "MSP", description: "Build authoritative local and regional visibility to capture recurring managed service contract inquiries.", slug: "/industries/msp" },
  { name: "Cybersecurity", description: "Establish elite compliance authority and technical depth to win security consensus among enterprise teams.", slug: "/industries/cybersecurity" },
  { name: "Healthcare Tech", description: "Navigate HIPAA-compliant marketing funnels that speak directly to healthcare administrators and hospital buyers.", slug: "/industries/healthcare" },
  { name: "Professional Services", description: "Position your consulting or implementation firm as the ultimate solution for complex digital transformations.", slug: "/industries/professional-services" },
  { name: "Logistics Software", description: "Generate demand among supply chain directors for tracking, automation, and efficiency management software.", slug: "/industries/logistics" },
  { name: "Engineering Services", description: "Showcase complex technical capabilities, past project builds, and advanced precision standards.", slug: "/industries/engineering" }
];

export const FAQS: FAQItem[] = [
  {
    question: "Why is B2B technology marketing different from other standard industries?",
    answer: "B2B technology marketing involves highly technical buyers, multi-stakeholder purchasing committees (comprising CTO, CFO, security, and department heads), extremely long evaluation timelines, and a critical need to prove integration capability and data security compliance (like SOC 2 and GDPR). Standard marketing tactics that rely on simple emotional triggers fail completely here; you must establish absolute technical credibility, provide un-gated proof-of-value, and address complex organizational integrations."
  },
  {
    question: "Which channels perform best for B2B technology companies?",
    answer: "A balanced marketing mix yields the best results. For active demand capture, bottom-of-funnel SEO (commercial-intent comparison terms) and Google Search Ads are highly effective. For demand generation and consensus building, targeted LinkedIn Paid Campaigns utilizing account lists (ABM) and technical thought-leadership content are unmatched. Lastly, optimizing your digital presence for emerging AI search engines (like Perplexity and ChatGPT) represents the fastest-growing modern acquisition channel."
  },
  {
    question: "How long does it take to see measurable results in pipeline?",
    answer: "While full SEO and organic search authority compounds over 6 to 12 months, we routinely launch precision ABM paid ads, conversion rate optimizations (CRO), and conversational demo capture systems that begin delivering qualified enterprise pipeline within the first 30 to 60 days. Our approach focuses on capturing existing market demand immediately while building long-term organic authority."
  },
  {
    question: "How do you measure and report on ROI?",
    answer: "We establish complete end-to-end attribution by integrating your marketing touchpoints directly with your CRM (HubSpot, Salesforce). We track custom contact properties and pipeline states, allowing us to attribute every dollar of closed-won revenue, every booked demo, and every qualified meeting directly back to the specific campaigns, keywords, and content assets that generated them."
  },
  {
    question: "Do you work with our internal marketing and product teams?",
    answer: "Yes. We operate as an extension of your internal team. We coordinate closely with your product managers to understand technical release cycles, sync with your sales reps to analyze lead quality, and collaborate with your internal designers or copywriters to ensure total brand and technical alignment."
  },
  {
    question: "What size of technology companies do you typically work with?",
    answer: "We work with high-growth, venture-backed B2B startups (Seed to Series C) seeking to establish predictable pipeline models, as well as established mid-market enterprise technology providers looking to modernize their acquisition systems, design high-performance websites, and expand their organic digital footprint."
  },
  {
    question: "Can you completely redesign and rebuild our technology website?",
    answer: "Absolutely. Website design and development is one of our primary core competencies. We design bespoke, fast, and accessible digital platforms using modern React/Vite, Next.js, and Tailwind CSS. We craft intuitive navigation paths, interactive product visualizers, integration pages, and security portals that convert visitors into active opportunities."
  },
  {
    question: "How does AI search (Google AI Overviews, ChatGPT, Perplexity) impact our tech company?",
    answer: "AI engines are fundamentally changing how technical research is conducted. Buyers ask LLMs for architecture recommendations, system integrations, and direct software comparisons. If your brand lacks semantic entity linkages, structured data, positive citations, and un-gated technical documentation, AI engines will simply recommend your competitors. Our Generative Engine Optimization (GEO) processes ensure your brand is cited and recommended."
  },
  {
    question: "Which of your services is the best place for us to start?",
    answer: "We recommend starting with our Discovery & Revenue Audit combined with our 12-month Growth Blueprint. This allows us to map out your current conversion leaks, locate your highest-intent keyword opportunities, audit your paid media accounts, and build a precise strategy before any implementation begins, ensuring zero wasted marketing budget."
  },
  {
    question: "What happens after onboarding is completed?",
    answer: "Once the Growth Blueprint is finalized, we enter agile execution sprints. Every month, we publish authoritative technical assets, optimize paid ad performance, conduct quantitative A/B conversion tests, adjust your AI citation footprint, and coordinate with your sales team to review pipeline status and adjust strategies based on closed-won data."
  }
];

export const FINAL_CTA = {
  h2: "Let's build a predictable, high-velocity growth engine for your B2B Technology company.",
  body: "Stop wasting budget on clicks, traffic spikes, and unengaged leads. Partner with HybridMonks to design an high-converting, AI-ready B2B growth system that captures enterprise buyers and drives closed-won revenue.",
  primaryCta: "Request a Growth Blueprint",
  secondaryCta: "Book a Strategy Call"
};
