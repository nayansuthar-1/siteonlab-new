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
    quote: "HybridMonks built a revenue system that revolutionized our inbound pipeline. Over 30% of our high-intent sales bookings now cite recommendations from ChatGPT & Perplexity, which we tracked back to HybridMonks's GEO schema optimizations. They completely bypass the standard digital marketing playbook.",
    author: "Marcus Vance",
    role: "VP of Marketing",
    company: "Securify Technologies",
    industry: "Cybersecurity SaaS",
    metrics: "+160% High-Intent pipeline in 5 months",
    isPlaceholder: true
  },
  {
    id: "test-2",
    quote: "We were skeptical about 'AI search visibility', but HybridMonks proved the concept in month one. Our technical consulting firm was buried on page 3 of standard search. Not only did they move us to page 1 on Google, but we are now the primary recommended MSP option when asking Perplexity for 'Enterprise DevOps partners'. Truly outstanding.",
    author: "Elena Rostova",
    role: "Director of Inbound Growth",
    company: "Apex Cloud Services",
    industry: "IT & Managed Services",
    metrics: "Ranked as #1 recommended option in major LLMs",
    isPlaceholder: true
  },
  {
    id: "test-3",
    quote: "Unlike agencies that hide behind traffic charts, HybridMonks focuses on SQLs. They synced directly with our Salesforce instance and automated our top-of-funnel citation loops. In an era where AI Overviews are stealing Google traffic, they ensured our industrial SaaS is cited at the top of every key buying query.",
    author: "David Vance",
    role: "Chief Revenue Officer",
    company: "Logix Industrial",
    industry: "Manufacturing & IIoT",
    metrics: "+210% pipeline growth from search and GEO",
    isPlaceholder: true
  }
];

// Team photos are intentionally omitted (avatarUrl left undefined) — each card
// renders an initials placeholder until real images are supplied.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Hitesh Solanki",
    role: "Co-Founder, Head of Client Acquisition",
    bio: "",
    initials: "HS",
    isPlaceholder: true
  },
  {
    id: "team-2",
    name: "Kartik Malviya",
    role: "Co-Founder, Head of Tech",
    bio: "",
    initials: "KM",
    isPlaceholder: true
  },
  {
    id: "team-3",
    name: "Kalpesh Kumar",
    role: "Head of Finance",
    bio: "",
    initials: "KK",
    isPlaceholder: true
  },
  {
    id: "team-4",
    name: "Bhavesh Malviya",
    role: "Sr. Graphics Designer",
    bio: "",
    initials: "BM",
    isPlaceholder: true
  },
  {
    id: "team-5",
    name: "Kabir",
    role: "Head of Operations",
    bio: "",
    initials: "K",
    isPlaceholder: true
  },
  {
    id: "team-6",
    name: "Manav Parihar",
    role: "Web Development Lead",
    bio: "",
    initials: "MP",
    isPlaceholder: true
  },
  {
    id: "team-7",
    name: "Ajaypal Singh",
    role: "SEO Lead",
    bio: "",
    initials: "AS",
    isPlaceholder: true
  },
  {
    id: "team-8",
    name: "Nayan Suthar",
    role: "Full Stack Developer",
    bio: "",
    initials: "NS",
    isPlaceholder: true
  },
  {
    id: "team-9",
    name: "Jayanti Suthar",
    role: "Full Stack Developer",
    bio: "",
    initials: "JS",
    isPlaceholder: true
  },
  {
    id: "team-10",
    name: "Swaroop Singh",
    role: "Sr. SEO Expert",
    bio: "",
    initials: "SS",
    isPlaceholder: true
  },
  {
    id: "team-11",
    name: "Atul Purohit",
    role: "Web Developer",
    bio: "",
    initials: "AP",
    isPlaceholder: true
  },
  {
    id: "team-12",
    name: "Kunal Gugarwal",
    role: "Web Developer",
    bio: "",
    initials: "KG",
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
