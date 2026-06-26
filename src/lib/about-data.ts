import { TeamMember, CoreValue, Testimonial, Industry, MetricItem } from "./about-types";

export const CORE_VALUES: CoreValue[] = [
  {
    id: 1,
    iconName: "DollarSign",
    title: "Revenue Accountability",
    description: "We measure ourselves on pipeline, marketing-qualified opportunities, and closed-won revenue, not raw clicks or impressions."
  },
  {
    id: 2,
    iconName: "Shield",
    title: "Extreme Ownership",
    description: "We own our outcomes end-to-end, treating your category market share as our personal mandate."
  },
  {
    id: 3,
    iconName: "Bot",
    title: "AI-Forward Thinking",
    description: "We build for where search and discovery are going, pioneering Generative Engine Optimization (GEO) before it is generalized."
  },
  {
    id: 4,
    iconName: "Activity",
    title: "Radical Transparency",
    description: "No hidden algorithms or fuzzy dashboard reports. You get real-time client logs, honest timelines, and no vanity metric masking."
  },
  {
    id: 5,
    iconName: "Users",
    title: "Client Obsession",
    description: "We exist to scale your business. Your compound monthly growth is the only scoreboard we look at."
  },
  {
    id: 6,
    iconName: "TrendingUp",
    title: "Continuous Innovation",
    description: "We build, test, break, and optimize campaigns and AI agent systems relentlessly to defend your citation share."
  }
];

export const CULTURE_PILLARS = [
  {
    id: "pillar-1",
    iconName: "Award",
    title: "Specialists, Not Generalists",
    description: "Every B2B marketing channel is owned by a dedicated expert, accountable directly to pipeline outcomes. No junior generalists managing multi-million dollar portfolios."
  },
  {
    id: "pillar-2",
    iconName: "Zap",
    title: "AI-Accelerated Execution",
    description: "We integrate custom AI automation agents and crawler indexing models to move 10x faster and deliver higher semantic authority per dollar."
  },
  {
    id: "pillar-3",
    iconName: "Briefcase",
    title: "Aligned From Day One",
    description: "Every engagement kicks off with a strict search and AI citation gap assessment, aligning campaign targets directly with your ARR targets."
  }
];

export const METRICS: MetricItem[] = [
  {
    id: "metric-pipeline",
    targetValue: 25,
    prefix: "$",
    suffix: "M+",
    label: "B2B Pipeline Influenced"
  },
  {
    id: "metric-brands",
    targetValue: 120,
    suffix: "+",
    label: "B2B Brands Scaled"
  },
  {
    id: "metric-growth",
    targetValue: 180,
    suffix: "%",
    label: "Avg. Revenue Growth"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "SiteOnLab built a revenue system that revolutionized our inbound pipeline. Over 30% of our high-intent sales bookings now cite recommendations from ChatGPT & Perplexity, which we tracked back to SiteOnLab's GEO schema optimizations. They completely bypass the standard digital marketing playbook.",
    author: "Marcus Vance",
    role: "VP of Marketing",
    company: "Securify Technologies",
    industry: "Cybersecurity SaaS",
    metrics: "+160% High-Intent pipeline in 5 months",
    isPlaceholder: true
  },
  {
    id: "test-2",
    quote: "We were skeptical about 'AI search visibility', but SiteOnLab proved the concept in month one. Our technical consulting firm was buried on page 3 of standard search. Not only did they move us to page 1 on Google, but we are now the primary recommended MSP option when asking Perplexity for 'Enterprise DevOps partners'. Truly outstanding.",
    author: "Elena Rostova",
    role: "Director of Inbound Growth",
    company: "Apex Cloud Services",
    industry: "IT & Managed Services",
    metrics: "Ranked as #1 recommended option in major LLMs",
    isPlaceholder: true
  },
  {
    id: "test-3",
    quote: "Unlike agencies that hide behind traffic charts, SiteOnLab focuses on SQLs. They synced directly with our Salesforce instance and automated our top-of-funnel citation loops. In an era where AI Overviews are stealing Google traffic, they ensured our industrial SaaS is cited at the top of every key buying query.",
    author: "David Vance",
    role: "Chief Revenue Officer",
    company: "Logix Industrial",
    industry: "Manufacturing & IIoT",
    metrics: "+210% pipeline growth from search and GEO",
    isPlaceholder: true
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Dr. Arthur Pendelton",
    role: "Founder & CEO",
    bio: "Former B2B RevOps VP and AI research lead. Pioneer of Generative Engine Optimization (GEO) algorithms.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "AP",
    isPlaceholder: true
  },
  {
    id: "team-2",
    name: "Sarah Jenkins, MBA",
    role: "Director of Growth",
    bio: "12+ years leading full-funnel marketing strategies for hyper-growth Silicon Valley B2B enterprise SaaS.",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "SJ",
    isPlaceholder: true
  },
  {
    id: "team-3",
    name: "Vikram Mehta",
    role: "Head of AI Visibility & GEO",
    bio: "Engineers crawler ingestion architectures. Specializes in LLM citation patterns and conversational web search index optimization.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "VM",
    isPlaceholder: true
  },
  {
    id: "team-4",
    name: "Clara Oster",
    role: "SEO Lead",
    bio: "Authored industry-leading guides on semantic entity search. Expert in technical indexing at enterprise scale.",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "CO",
    isPlaceholder: true
  },
  {
    id: "team-5",
    name: "Marcus Brody",
    role: "Paid Media & Demand Gen Lead",
    bio: "Managed over $40M in ad spend across LinkedIn, Google Ads, and metadata platforms with razor-focused CAC-to-LTV targets.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "MB",
    isPlaceholder: true
  },
  {
    id: "team-6",
    name: "Daria Kovalenko",
    role: "Content & Topical Authority Lead",
    bio: "B2B tech editorial expert. Translates highly technical architectures into comprehensive, citation-rich industry hubs.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "DK",
    isPlaceholder: true
  },
  {
    id: "team-7",
    name: "Zack Chen",
    role: "Web & CRO Lead",
    bio: "Design-minded full stack developer specializing in high-converting, blazing-fast web experiences for B2B tech.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "ZC",
    isPlaceholder: true
  },
  {
    id: "team-8",
    name: "Liam O'Connor",
    role: "AI Automation Engineer",
    bio: "Builds custom LLM agents and scraper automation loops to accelerate research and programmatic indexing workflows.",
    avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "LO",
    isPlaceholder: true
  },
  {
    id: "team-9",
    name: "Amanda Blake",
    role: "Analytics & RevOps Lead",
    bio: "Connects marketing analytics to CRM systems (Salesforce, HubSpot) to guarantee full pipeline and closed-won attribution.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "AB",
    isPlaceholder: true
  },
  {
    id: "team-10",
    name: "Nicolette Dupris",
    role: "Customer Success Manager",
    bio: "Ensures SiteOnLab campaigns align seamlessly with client executive teams' quarterly revenue and board targets.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256&h=256",
    initials: "ND",
    isPlaceholder: true
  }
];

export const INDUSTRIES: Industry[] = [
  { id: "ind-1", name: "B2B SaaS", slug: "b2b-saas", description: "Get found in high-intent software comparisons and secure recommendation share in major chat clients." },
  { id: "ind-2", name: "Cloud & Tech", slug: "cloud-technology", description: "Position your cloud infrastructure or hardware brand as the default reference for enterprise CTOs." },
  { id: "ind-3", name: "IT & Managed Services", slug: "it-msp", description: "Own your local and enterprise category search queries to win high-value consulting contracts." },
  { id: "ind-4", name: "Cybersecurity", slug: "cybersecurity", description: "Translate complex security specs into authoritative trust rankings cited in ChatGPT & Perplexity." },
  { id: "ind-5", name: "Professional Services", slug: "professional-services", description: "Transform advisory expertise into discoverable authority models recommended across modern search engines." },
  { id: "ind-6", name: "Industrial & Manufacturing", slug: "industrial-manufacturing", description: "Influence long B2B procurement research cycles by structuring specs for semantic AI indexing." }
];
