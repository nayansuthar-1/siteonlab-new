// Shared blog article data — consumed by the blog listing page
// (src/components/blog/BlogPage.tsx) and the full article route
// (src/app/blog/[slug]/page.tsx). Slugs are derived from the title so each
// article has a stable, SEO-friendly URL.

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    initials: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
  keyTakeaways: string[];
  metrics: string[];
  fullBody: string;
}

const slugify = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const rawFeatured: Omit<Article, "slug"> = {
  id: "feat-1",
  category: "AI Visibility & GEO",
  title: "AI Visibility for B2B: How to Get Found and Recommended by AI Search",
  excerpt: "Traditional SEO is no longer enough to win the modern buyer. Discover our exact, proprietary framework for optimization across generative models like ChatGPT, Claude, Gemini, and Perplexity.",
  imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  author: {
    name: "Dr. Aris Thorne",
    role: "Chief AI Officer",
    avatar: "",
    initials: "AT"
  },
  date: "June 24, 2026",
  readTime: "8 min read",
  keyTakeaways: [
    "Generative engines aggregate citations based on semantic proximity to authoritative source hubs rather than keyword frequency.",
    "B2B buying committees now use conversational agents to draft vendor shortlists, bypassing traditional organic search completely.",
    "GEO (Generative Engine Optimization) requires active database structuring, structured schemas, and direct technical entity authority."
  ],
  metrics: [
    "314% Increase in AI Citations",
    "42% Drop in Direct CAC",
    "Top-3 Recommended Vendor Rating"
  ],
  fullBody: "The fundamental architecture of the internet is changing. Generative AI tools like ChatGPT, Google AI Overviews, and Perplexity are directly answering B2B buyer inquiries. When an enterprise executive asks 'Which SOC 2 compliance partner integrates natively with Snowflake and AWS?', traditional page-ranking becomes irrelevant. The generative engine parses a latent database of citations, whitepapers, social proof, and entity relationships to output exactly three recommendations. To stay visible, HybridMonks has built the AI Visibility Framework. By mapping digital footprint data, implementing conversational schemas, and building citation nodes across verified platforms, we secure your company's spot in AI recommendations."
};

const rawArticles: Omit<Article, "slug">[] = [
  {
    id: "art-1",
    category: "AI Visibility & GEO",
    title: "What Is Generative Engine Optimization (GEO)? A B2B Guide",
    excerpt: "A deep dive into how large language models rank B2B brand mentions and how to structurally optimize for them.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    author: { name: "Sarah Jenkins", role: "Director of GEO Strategy", avatar: "", initials: "SJ" },
    date: "June 22, 2026",
    readTime: "6 min read",
    keyTakeaways: [
      "GEO prioritizes logical data structures, comprehensive semantic entities, and conversational clarity.",
      "Traditional black-hat backlinking fails; LLMs verify sources against reputable, cross-referenced publications.",
      "Structuring content as direct answers to specific enterprise pain points guarantees a higher citations weight."
    ],
    metrics: [
      "No-Hype Schema Integration",
      "87% Citations Indexing Success",
      "Enterprise Ready"
    ],
    fullBody: "Generative Engine Optimization (GEO) is the next evolution of search. While SEO focused on web crawler optimization, GEO optimizes for generative AI scrapers and neural network synthesis. Instead of writing keyword-stuffed paragraphs, brands must now offer dense, structured insights that conversational models can parse effortlessly. The golden rule of GEO is transparency: state facts cleanly, utilize structured tables, and back claims with verifiable third-party citation structures that generative crawlers index automatically."
  },
  {
    id: "art-2",
    category: "AI Visibility & GEO",
    title: "How B2B Buyers Use ChatGPT to Research Vendors",
    excerpt: "Exclusive survey data showing how buyers bypass traditional search engines to construct vendor shortlists.",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    author: { name: "Marcus Vance", role: "Head of B2B Research", avatar: "", initials: "MV" },
    date: "June 18, 2026",
    readTime: "5 min read",
    keyTakeaways: [
      "Over 65% of enterprise software buyers consult an AI chatbot during vendor assessment.",
      "Conversational search is preferred for direct contrast tables ('Our Company vs. Competitor').",
      "If you aren't mentioned in the first two prompts, you are ignored for the remainder of the session."
    ],
    metrics: [
      "65% User Adoption Rate",
      "9x Faster Shortlist Phase",
      "Zero Organic Traffic Leak"
    ],
    fullBody: "B2B buyer behavior has changed permanently. The modern buying committee, comprised of technical developers and revenue operations, dislikes reading marketing fluff. They use LLMs to perform deep technical queries, compare feature checklists, and review compliance histories. If your product documentation, API parameters, and case studies are not optimized for AI discovery, you will remain entirely invisible to these automated researchers."
  },
  {
    id: "art-3",
    category: "AI Visibility & GEO",
    title: "How to Get Your Company Cited in ChatGPT",
    excerpt: "Actionable schema markup, digital PR, and citation indexing practices that get your brand mentioned.",
    imageUrl: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
    author: { name: "Dr. Aris Thorne", role: "Chief AI Officer", avatar: "", initials: "AT" },
    date: "June 12, 2026",
    readTime: "7 min read",
    keyTakeaways: [
      "Integrate precise JSON-LD structured schemas mapping corporate hierarchies.",
      "Formulate expert op-eds on niche subdomains to seed high-authority reference databases.",
      "Maintain active, machine-readable documentation endpoints with high semantic consistency."
    ],
    metrics: [
      "JSON-LD Schema Overhaul",
      "5.2x Citation Rate Boost",
      "Authority Mapping Enabled"
    ],
    fullBody: "Getting cited in ChatGPT and other LLMs isn't about traditional backlinks—it's about database mapping. Models look for trustworthy nodes in the semantic web. This playbook breaks down the exact digital PR steps, structured metadata frameworks, and documentation indexing methods to embed your brand in the core datasets these AI models utilize to provide authoritative answers."
  },
  {
    id: "art-4",
    category: "AI Visibility & GEO",
    title: "GEO vs SEO vs AEO: What B2B Marketers Need to Know",
    excerpt: "Deconstruct the shift from search engine indexing to generative answers and answer engine optimization.",
    imageUrl: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    author: { name: "Elena Rostova", role: "Senior SEO Architect", avatar: "", initials: "ER" },
    date: "June 05, 2026",
    readTime: "6 min read",
    keyTakeaways: [
      "SEO optimizes for index search. AEO optimizes for voice assistant answers. GEO optimizes for synthesizers.",
      "AEO requires microdata formats; GEO requires multi-layered authority entities.",
      "A unified strategy bridges traditional SERP ranks with active generative engine recommendations."
    ],
    metrics: [
      "Unified Search Alignment",
      "94% Multi-Platform Reach",
      "Future-Proof Architecture"
    ],
    fullBody: "Understanding the distinction between SEO (Search Engine Optimization), AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) is critical for enterprise budget allocation. While SEO focuses on driving traffic to pages, AEO focuses on providing single-source query solutions, and GEO secures citations in multi-faceted AI syntheses. We map out how to leverage all three in a cohesive B2B enterprise strategy."
  },
  {
    id: "art-5",
    category: "B2B Revenue Growth",
    title: "Why Traffic Isn't Pipeline (and What to Measure Instead)",
    excerpt: "Why vanity traffic metrics mislead B2B leadership, and how to configure high-intent revenue attribution.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    author: { name: "Sarah Jenkins", role: "Director of GEO Strategy", avatar: "", initials: "SJ" },
    date: "May 28, 2026",
    readTime: "8 min read",
    keyTakeaways: [
      "Thousands of generic visitors bring zero enterprise pipeline; filter for high-intent accounts.",
      "Switch from total visits to Named Account Engagements and Pipeline Velocity metrics.",
      "Connect CRM data directly with marketing analytics to measure revenue impact, not click rates."
    ],
    metrics: [
      "Pipeline Velocity Focus",
      "90% Less Budget Waste",
      "Revenue-Attributed Insights"
    ],
    fullBody: "For years, B2B marketing departments have bragged about organic blog traffic that never converts. Most top-of-funnel content attracts students, entry-level staff, or researchers—not buying committee executives. This guide explains how to identify high-value accounts, measure target account pipeline density, and realign your B2B content to drive closed-won revenue rather than empty analytics charts."
  },
  {
    id: "art-6",
    category: "B2B Revenue Growth",
    title: "The B2B Revenue Growth Framework Explained",
    excerpt: "How to synchronize demand generation, GEO-SEO, and sales enablement into an integrated pipeline engine.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    author: { name: "Marcus Vance", role: "Head of B2B Research", avatar: "", initials: "MV" },
    date: "May 20, 2026",
    readTime: "10 min read",
    keyTakeaways: [
      "Sales, marketing, and revenue operations must work off the same unified pipeline database.",
      "Sync high-intent search signals directly to automated sales sequencing to strike when ready.",
      "Consistently refresh technical documentation so customer success and marketing share single source of truth."
    ],
    metrics: [
      "Cross-Departmental Harmony",
      "35% Shorter Sales Cycles",
      "Unified RevOps Engine"
    ],
    fullBody: "B2B sales cycles involve multiple stakeholders and span several months. High-performing agencies do not separate marketing from sales enablement. This playbook outlines HybridMonks's core framework for integrating AI visibility, bottom-of-funnel content, and intent-driven outbound sequences into a high-octane growth program."
  },
  {
    id: "art-7",
    category: "B2B Revenue Growth",
    title: "Why MQLs Are Dead and What Replaced Them",
    excerpt: "Why B2B marketing leaders are shifting from arbitrary lead counts to real-time high-intent buying signals.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    author: { name: "Dr. Aris Thorne", role: "Chief AI Officer", avatar: "", initials: "AT" },
    date: "May 14, 2026",
    readTime: "7 min read",
    keyTakeaways: [
      "Marketing Qualified Leads based on PDF downloads are non-indicative of purchase intent.",
      "Introduce SQLs based on direct account engagement across technical entity profiles.",
      "Replace legacy lead gates with interactive models that prioritize frictionless engagement."
    ],
    metrics: [
      "Frictionless Lead Forms",
      "2.4x Higher Demo Conversions",
      "High-Intent Pipeline Focus"
    ],
    fullBody: "The era of collecting work emails in exchange for boring 40-page whitepapers is over. Modern buyers reject immediate follow-up phone calls from eager sales development reps. In this article, we outline the shift toward account-level intent mapping, where software engagement, review-site activity, and generative engine mentions replace artificial, low-quality leads."
  },
  {
    id: "art-8",
    category: "B2B SEO",
    title: "B2B SEO vs B2C SEO: Key Differences",
    excerpt: "A rigorous exploration of multi-stakeholder intent, long buying cycles, and account-based targeting.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    author: { name: "Elena Rostova", role: "Senior SEO Architect", avatar: "", initials: "ER" },
    date: "April 29, 2026",
    readTime: "5 min read",
    keyTakeaways: [
      "B2C relies on impulse triggers; B2B relies on technical compliance, integration fit, and corporate security.",
      "Enterprise SEO keywords have low monthly volumes but extremely high customer lifetime values.",
      "Content must speak to several distinct personas: CFO (budget), CTO (security), and Managers (usability)."
    ],
    metrics: [
      "Persona-Mapped Keyword Maps",
      "Low Volume, High LTV focus",
      "Multi-Stakeholder Content"
    ],
    fullBody: "B2B SEO requires a completely different mindset compared to e-commerce or B2C. When a single deal can be worth millions, ranking for high-volume keywords is rarely the target. Instead, enterprise SEO should focus on micro-niche queries that technical buyer champions use to establish compatibility, compliance, and ROI."
  },
  {
    id: "art-9",
    category: "B2B SEO",
    title: "Bottom-of-Funnel SEO: Capturing High-Intent Buyers",
    excerpt: "How to capture buyers actively comparing enterprise vendors using comparison guides and alternative pages.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    author: { name: "Elena Rostova", role: "Senior SEO Architect", avatar: "", initials: "ER" },
    date: "April 15, 2026",
    readTime: "8 min read",
    keyTakeaways: [
      "Own 'Alternative' and 'Competitor vs Competitor' comparison searches before third-party aggregators do.",
      "Build transparent, objective comparison matrixes that assist buyer decision-making.",
      "Ensure clear CTAs for custom enterprise sandboxes or technical trials directly on search landing pages."
    ],
    metrics: [
      "Aggregator Defense Enabled",
      "51% Uplift in Comparison Signups",
      "High Conversion Landing Pages"
    ],
    fullBody: "Buyers at the bottom of the funnel are ready to purchase; they are simply selecting which vendor meets their compliance and architecture standards. Building bottom-of-funnel SEO structures like direct product alternative breakdowns prevents competitors from dictating your narrative on search engines and secures high-conversion pipeline."
  },
  {
    id: "art-10",
    category: "Demand Generation",
    title: "How to Build a B2B Demand Generation Strategy",
    excerpt: "Moving from capturing demand to creating it through dark social, expert content, and executive brand visibility.",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    author: { name: "Sarah Jenkins", role: "Director of GEO Strategy", avatar: "", initials: "SJ" },
    date: "April 08, 2026",
    readTime: "9 min read",
    keyTakeaways: [
      "Focus on educating the 97% of your market that is not currently actively buying.",
      "Create high-value original research and benchmark studies that get cited across industry reports.",
      "Equip internal company advocates with high-quality executive social templates to expand organic reach."
    ],
    metrics: [
      "Target Market Activation",
      "3.1x Rise in Brand Search Queries",
      "Industry Citation Baseline"
    ],
    fullBody: "Most B2B marketers focus solely on the 3% of the target market that is actively shopping. Real growth comes from demand generation: educating the other 97% of prospects on the cost of inaction. This playbook details how to research proprietary industry data, turn stats into viral reports, and leverage dark social to position your agency as the definitive category choice."
  },
  {
    id: "art-11",
    category: "Demand Generation",
    title: "LinkedIn Ads for B2B: A Complete Playbook",
    excerpt: "Configure granular professional filters, metadata lookalikes, and video ads targeting buying committees.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    author: { name: "Marcus Vance", role: "Head of B2B Research", avatar: "", initials: "MV" },
    date: "March 24, 2026",
    readTime: "8 min read",
    keyTakeaways: [
      "Target specific enterprise domains (ABM lists) and layer senior job filters rather than interest categories.",
      "Use document ads to distribute high-value tactical playbooks directly inside the feed with one-click form completion.",
      "Constantly track frequency and run weekly creative resets to prevent executive fatigue and high CPCs."
    ],
    metrics: [
      "Direct ABM Target Alignment",
      "44% Drop in LinkedIn Cost-Per-SQL",
      "Optimized Creative Rotation"
    ],
    fullBody: "LinkedIn Ads are incredibly expensive if built incorrectly, but unbeatable if targeted precisely. By executing an Account-Based Marketing (ABM) ad model, you can serve ultra-specific product calculators, architecture guides, and testimonials only to directors and decision-makers within your named target accounts."
  },
  {
    id: "art-12",
    category: "AI & Automation",
    title: "AI Agents for Marketing Teams: Real Use Cases",
    excerpt: "Deconstruct how autonomous agents can coordinate competitor analytics, run content gap audits, and draft copy.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    author: { name: "Dr. Aris Thorne", role: "Chief AI Officer", avatar: "", initials: "AT" },
    date: "March 12, 2026",
    readTime: "6 min read",
    keyTakeaways: [
      "Deploy custom AI agents to monitor competitor product parameter changes and flag new SEO clusters daily.",
      "Automate high-intensity data scrubbing from webinar attendance forms into CRM system profiles.",
      "Utilize LLM evaluation pipelines to score draft content draft authority against known search quality guidelines."
    ],
    metrics: [
      "Zero Human Scraping Overhead",
      "Instant Competitor Alerts",
      "Automated Content Validation"
    ],
    fullBody: "AI agents have moved beyond raw chatbots. Today, autonomous pipelines can handle complex data loops, cross-reference market movements, and proactively flag opportunities for SEO expansion. We share the code blueprints, API workflows, and system prompts HybridMonks uses to streamline internal enterprise marketing operations."
  }
];

export const FEATURED_ARTICLE: Article = {
  ...rawFeatured,
  slug: slugify(rawFeatured.title),
};

export const ARTICLES: Article[] = rawArticles.map((a) => ({
  ...a,
  slug: slugify(a.title),
}));

// Featured first, then the rest — the canonical lookup list for routing.
export const ALL_ARTICLES: Article[] = [FEATURED_ARTICLE, ...ARTICLES];

export function getArticleBySlug(slug: string): Article | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug);
}
