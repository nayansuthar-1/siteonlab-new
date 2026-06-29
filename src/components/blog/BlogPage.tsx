"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  ArrowRight, 
  Mail, 
  Check, 
  Calendar, 
  Clock, 
  User, 
  X, 
  Menu, 
  Download, 
  Linkedin, 
  Twitter, 
  Globe, 
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Award,
  ChevronRight,
  BookOpen,
  Eye,
  Filter,
  CheckCircle,
  HelpCircle,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface Article {
  id: string;
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

// ==========================================
// EDITABLE PLACEHOLDER DATA (Commented)
// ==========================================
const CATEGORIES = [
  "All",
  "AI Visibility & GEO",
  "B2B Revenue Growth",
  "B2B SEO",
  "Demand Generation",
  "AI & Automation"
];

const FEATURED_ARTICLE: Article = {
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

const ARTICLES: Article[] = [
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

export default function App() {
  // Navigation active resource state
  const [activeNav, setActiveNav] = useState("Resources");
  
  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Pagination State
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Newsletter Subscription States
  const [heroEmail, setHeroEmail] = useState("");
  const [heroSubscribed, setHeroSubscribed] = useState(false);
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaSubscribed, setCtaSubscribed] = useState(false);
  
  // Modal States for CTAs (No Dead Ends)
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Form submission success states
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [assessmentSuccess, setAssessmentSuccess] = useState(false);

  // Article Drawer State
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Filter & Search Logic combined
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Is Featured Article visible with search/category
  const isFeaturedVisible = useMemo(() => {
    if (selectedCategory !== "All" && FEATURED_ARTICLE.category !== selectedCategory) {
      return false;
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        FEATURED_ARTICLE.title.toLowerCase().includes(query) ||
        FEATURED_ARTICLE.excerpt.toLowerCase().includes(query)
      );
    }
    return true;
  }, [selectedCategory, searchQuery]);

  // Paginated articles based on the filtered results
  const paginatedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  // Total pages
  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);

  // Reset pagination when filter/search changes
  useEffect(() => {
    setVisibleCount(6);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Handle Load More
  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, filteredArticles.length));
  };

  // Handle Hero Subscribe Submit
  const handleHeroSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroEmail.trim() && heroEmail.includes("@")) {
      setHeroSubscribed(true);
      setTimeout(() => {
        setHeroEmail("");
      }, 3000);
    }
  };

  // Handle CTA Block Subscribe Submit
  const handleCtaSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaEmail.trim() && ctaEmail.includes("@")) {
      setCtaSubscribed(true);
      setTimeout(() => {
        setCtaEmail("");
      }, 3000);
    }
  };

  // Handle Book Call Submit
  const handleBookCallSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  // Handle Assessment Submit
  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAssessmentSuccess(true);
  };

  return (
    <div id="hybridmonks-root" className="theme-blog min-h-screen bg-brand-bg text-slate-200 font-sans selection:bg-brand-accent selection:text-white">
      


      {/* 3. BLOG HERO SECTION (Compact) */}
      <section id="blog-hero" className="relative overflow-hidden pt-16 pb-16 border-b border-brand-border">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-mono font-semibold tracking-wider text-blue-300 uppercase">HybridMonks Insights</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-white leading-tight tracking-tight">
                Staying ahead of B2B search — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">so you don't have to.</span>
              </h1>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                Practical thinking on AI visibility, GEO, technical B2B SEO, demand generation, and what is actually driving pipeline and revenue growth for enterprise teams right now.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-slate-400 font-mono">Expert peer-reviewed articles</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs text-slate-400 font-mono">Updated weekly with verified B2B metrics</span>
                </div>
              </div>
            </div>

            {/* Right Subscription Column */}
            <div className="lg:col-span-5 bg-brand-card border border-brand-border p-8 rounded-2xl relative shadow-xl shadow-black/40">
              <div className="absolute top-0 right-0 p-3">
                <Sparkles className="w-5 h-5 text-brand-accent/20" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-2">Subscribe to the B2B playbook</h3>
              <p className="text-sm text-slate-400 mb-6">
                Join 14,000+ B2B executives who receive our high-impact playbooks detailing how to dominate AI engine responses and organic pipelines.
              </p>

              <AnimatePresence mode="wait">
                {!heroSubscribed ? (
                  <motion.form 
                    id="hero-subscribe-form"
                    key="form"
                    onSubmit={handleHeroSubscribe} 
                    className="space-y-3.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="h-4.5 w-4.5 text-slate-500" />
                      </div>
                      <input
                        type="email"
                        required
                        value={heroEmail}
                        onChange={(e) => setHeroEmail(e.target.value)}
                        placeholder="Enter your enterprise work email"
                        className="block w-full pl-11 pr-4 py-3 bg-brand-bg border border-brand-border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      id="btn-hero-subscribe"
                      className="w-full bg-brand-accent hover:bg-brand-accent/90 active:scale-[0.99] text-white font-semibold py-3 px-4 rounded-lg text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 cursor-pointer"
                    >
                      <span>Get Free Playbooks</span>
                      <ArrowRight className="w-4 h-4 text-blue-100" />
                    </button>
                    <p className="text-[11px] text-slate-500 text-center">
                      Join B2B leaders getting our latest insights. Strictly zero spam. Unsubscribe anytime.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    id="hero-subscribe-success"
                    key="success"
                    className="bg-blue-950/40 border border-blue-900/60 p-6 rounded-xl text-center space-y-3"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                  >
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white">Welcome onboard!</h4>
                      <p className="text-xs text-slate-300 mt-1">
                        You have successfully subscribed to HybridMonks B2B Insights. We've just dispatched your first playbook to your inbox.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEARCH + CATEGORY FILTER BAR */}
      <div id="filter-bar" className="sticky top-[125px] sm:top-[125px] z-30 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            
            {/* Category Filter Pills */}
            <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex items-center space-x-2 pb-1 lg:pb-0 min-w-max">
                <div className="flex items-center text-slate-400 mr-2 text-xs font-mono font-medium tracking-wide">
                  <Filter className="w-3.5 h-3.5 mr-1.5 text-brand-accent" />
                  <span>PILLARS:</span>
                </div>
                {CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      id={`filter-pill-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all cursor-pointer ${
                        isActive
                          ? "bg-brand-accent border-brand-accent text-white shadow-lg shadow-blue-600/15"
                          : "bg-brand-card border-brand-border text-slate-400 hover:text-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Search input */}
            <div className="relative w-full lg:max-w-xs shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-500" />
              </div>
              <input
                type="text"
                id="search-articles-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by keyword, topic..."
                className="block w-full pl-10 pr-9 py-2.5 bg-brand-card border border-brand-border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs transition-all"
              />
              {searchQuery && (
                <button 
                  id="btn-clear-search"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Blog Core Space */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Active Filters Summary */}
        {(selectedCategory !== "All" || searchQuery) && (
          <div id="filter-status-summary" className="flex items-center justify-between bg-[#1A1D23]/30 border border-brand-border rounded-xl p-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <span>Showing results for</span>
              {selectedCategory !== "All" && (
                <span className="font-semibold text-brand-accent bg-blue-950/30 border border-brand-accent/25 px-2.5 py-0.5 rounded-md text-xs">
                  {selectedCategory}
                </span>
              )}
              {searchQuery && (
                <span className="font-semibold text-brand-accent bg-blue-950/30 border border-brand-accent/25 px-2.5 py-0.5 rounded-md text-xs">
                  "{searchQuery}"
                </span>
              )}
              <span className="text-slate-500 font-mono">({filteredArticles.length} found)</span>
            </div>
            <button
              id="btn-reset-filters"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-semibold text-slate-400 hover:text-white underline underline-offset-4 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* 5. FEATURED ARTICLE SPOTLIGHT */}
        {isFeaturedVisible && (
          <div id="featured-article-spotlight" className="space-y-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Featured Spotlight</span>
            </div>

            <div 
              onClick={() => setSelectedArticle(FEATURED_ARTICLE)}
              className="group bg-brand-card border border-brand-border rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 cursor-pointer hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-0.5 relative"
            >
              {/* Image side */}
              <div className="lg:col-span-7 h-64 sm:h-96 lg:h-full relative overflow-hidden">
                <img 
                  src={FEATURED_ARTICLE.imageUrl} 
                  alt={FEATURED_ARTICLE.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-accent text-white font-mono font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded">
                    Flagship Pillar
                  </span>
                </div>
              </div>

              {/* Text details side */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-[#1E222B] to-brand-card">
                <div className="space-y-4">
                  <span className="text-xs font-semibold text-brand-accent font-mono tracking-wider uppercase block">
                    {FEATURED_ARTICLE.category}
                  </span>
                  
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug group-hover:text-brand-accent transition-colors">
                    {FEATURED_ARTICLE.title}
                  </h2>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {FEATURED_ARTICLE.excerpt}
                  </p>
                </div>

                {/* Bullet pointers to entice click */}
                <div className="border-t border-brand-border pt-4 space-y-2 hidden sm:block">
                  <span className="text-slate-400 text-[11px] font-mono tracking-wider uppercase block">Inside this playbook:</span>
                  <div className="space-y-1">
                    {FEATURED_ARTICLE.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author Metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center font-bold text-brand-accent text-sm">
                      {FEATURED_ARTICLE.author.initials}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">{FEATURED_ARTICLE.author.name}</span>
                      <span className="text-[10px] text-slate-400 block">{FEATURED_ARTICLE.author.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {FEATURED_ARTICLE.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {FEATURED_ARTICLE.readTime}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-sm font-semibold text-brand-accent flex items-center gap-1.5 group-hover:text-brand-accent/90 transition-colors">
                  <span>Read Flagship Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. ARTICLE GRID */}
        <section id="article-grid-section" className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Latest Publications</span>
            </div>
            
            <div className="text-xs font-mono text-slate-500">
              Showing {paginatedArticles.length} of {filteredArticles.length} articles
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div id="no-results-found" className="text-center py-20 bg-brand-card border border-brand-border rounded-2xl space-y-4">
              <HelpCircle className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-display font-bold text-white">No articles match your query</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                We couldn't find any blueprints for "{searchQuery}". Try clearing search or selecting "All" categories.
              </p>
              <button
                id="btn-clear-all-filters"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-brand-accent hover:bg-brand-accent/90 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all"
              >
                Reset Searches
              </button>
            </div>
          ) : (
            <div id="articles-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  id={`article-card-${article.id}`}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-brand-card border border-brand-border rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer hover:border-slate-600 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                >
                  <div className="space-y-4">
                    {/* Thumbnail Image */}
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-brand-bg/90 text-brand-accent font-mono font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-brand-border">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Meta row */}
                    <div className="px-5 pt-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Excerpt Details */}
                    <div className="px-5 space-y-2">
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-accent transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer metadata */}
                  <div className="px-5 pb-5 pt-4 mt-4 border-t border-brand-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-[10px] font-bold text-slate-300 uppercase">
                        {article.author.initials}
                      </div>
                      <div>
                        <span className="text-[11px] font-medium text-slate-200 block">{article.author.name}</span>
                        <span className="text-[9px] text-slate-500 block leading-none">{article.author.role}</span>
                      </div>
                    </div>

                    <div className="text-xs font-semibold text-brand-accent flex items-center gap-1 group-hover:text-brand-accent/90 transition-colors">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* 7. PAGINATION / LOAD MORE */}
        {filteredArticles.length > visibleCount && (
          <div id="pagination-panel" className="flex flex-col items-center justify-center gap-4 pt-6 border-t border-brand-border">
            <button
              id="btn-load-more"
              onClick={handleLoadMore}
              className="bg-brand-card hover:bg-[#242933] border border-brand-border text-slate-100 text-sm font-semibold py-3 px-8 rounded-xl transition-all cursor-pointer active:scale-98"
            >
              Load More Blueprints
            </button>
            
            {/* Standard Numbered alternative indicator */}
            <div className="flex items-center space-x-1.5 text-xs text-slate-400">
              <span className="font-mono">PAGES:</span>
              <button className="w-7 h-7 rounded bg-brand-accent/20 text-brand-accent border border-brand-accent/40 font-bold">1</button>
              <button onClick={handleLoadMore} className="w-7 h-7 rounded bg-brand-bg text-slate-400 border border-brand-border hover:border-slate-600 hover:text-white transition-colors">2</button>
              <button onClick={handleLoadMore} className="w-7 h-7 rounded bg-brand-bg text-slate-400 border border-brand-border hover:border-slate-600 hover:text-white transition-colors">
                <ChevronRight className="w-3.5 h-3.5 mx-auto" />
              </button>
            </div>
          </div>
        )}

      </main>

      {/* 8. NEWSLETTER / LEAD MAGNET CTA BAND */}
      <section id="lead-magnet-newsletter" className="bg-brand-card border-t border-b border-brand-border py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative">
          <div className="inline-flex p-3 rounded-2xl bg-brand-bg/40 border border-brand-border text-brand-accent">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Get the B2B AI visibility playbook.
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto">
              Join B2B marketing leaders receiving actionable blueprints for winning citations in ChatGPT, Gemini, and search engines — directly to your inbox.
            </p>
          </div>

          {/* Interactive Toggle for Resource download or direct subscription */}
          <div className="max-w-md mx-auto pt-4">
            <AnimatePresence mode="wait">
              {!ctaSubscribed ? (
                <motion.div
                  key="subscribe-form-cta"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <form onSubmit={handleCtaSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="email"
                      required
                      value={ctaEmail}
                      onChange={(e) => setCtaEmail(e.target.value)}
                      placeholder="Enter your work email address"
                      className="block w-full sm:flex-1 px-4 py-3 bg-brand-bg border border-brand-border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-sm transition-all"
                    />
                    <button
                      type="submit"
                      id="btn-cta-subscribe"
                      className="bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-3 px-6 rounded-lg text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <span>Join Playbook</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  
                  <div className="flex items-center justify-center gap-6 text-xs text-slate-400 pt-2">
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-accent" />
                      Download on subscription
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-brand-accent" />
                      100% No-fluff guaranteed
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      id="btn-trigger-gated-assessment"
                      onClick={() => {
                        setIsAssessmentOpen(true);
                        setAssessmentSuccess(false);
                      }}
                      className="text-xs font-mono font-bold text-brand-accent hover:text-brand-accent/90 uppercase tracking-widest inline-flex items-center gap-1.5"
                    >
                      <span>OR REQUEST FREE AI VISIBILITY ASSESSMENT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="subscribe-success-cta"
                  className="bg-brand-card border border-brand-border p-8 rounded-xl space-y-4"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                >
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-lg">Inbound Delivery Initiated!</h4>
                    <p className="text-sm text-slate-300 mt-1">
                      Check your email in 2 minutes. We've compiled the B2B AI Visibility checklist and sent it over.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>


      {/* ==========================================
          MODALS & INTERACTIVE OVERLAYS
         ========================================== */}

      {/* 1. BOOK A STRATEGY CALL MODAL */}
      <AnimatePresence>
        {isBookCallOpen && (
          <div id="modal-book-call-overlay" className="fixed inset-0 z-55 flex items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookCallOpen(false)}
            />
            
            <motion.div 
              className="bg-brand-card border border-brand-border w-full max-w-lg rounded-2xl overflow-hidden relative shadow-2xl shadow-black z-10 flex flex-col"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button 
                id="btn-close-book-call-modal"
                onClick={() => setIsBookCallOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-lg hover:bg-[#242933] text-slate-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {!bookingSuccess ? (
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest font-bold">DISCOVERY CALL</span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">Let's map your B2B pipeline potential.</h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Let's schedule a 25-minute strategy assessment. We'll crawl your domain to verify where you are losing mentions to competitors in ChatGPT & Perplexity.
                    </p>
                  </div>

                  <form onSubmit={handleBookCallSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Full Name</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Dr. Jordan West"
                          className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Work Email</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="jordan@company.com"
                          className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Company Name</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="Fintech Enterprise"
                          className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Company Website</label>
                        <input 
                          type="url" 
                          required 
                          placeholder="https://company.com"
                          className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Annual Revenue Tier</label>
                      <select className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent">
                        <option>$1M - $5M ARR</option>
                        <option>$5M - $20M ARR</option>
                        <option>$20M - $100M ARR</option>
                        <option>$100M+ ARR</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Key Growth Priorities (Optional)</label>
                      <textarea 
                        rows={2}
                        placeholder="e.g. Get recommended in ChatGPT for our security features"
                        className="w-full bg-brand-bg border border-brand-border rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="btn-confirm-booking"
                      className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-3 rounded-lg text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Secure Strategy Strategy Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-slate-500 text-center">
                      *We only advise clients who meet minimum revenue criteria. No obligation discovery.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="p-8 text-center space-y-5">
                  <div className="w-14 h-14 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto text-brand-accent">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-extrabold text-white">Strategy Request Scheduled</h3>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you. We have logged your request. Our research analyst will conduct a preliminary domain crawl, then contact you within 4 hours to coordinate dates.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsBookCallOpen(false)}
                    className="bg-brand-card border border-brand-border hover:bg-[#242933] text-white text-xs font-semibold px-6 py-2.5 rounded-lg cursor-pointer"
                  >
                    Return to Insights
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. FREE AI VISIBILITY ASSESSMENT MODAL */}
      <AnimatePresence>
        {isAssessmentOpen && (
          <div id="modal-assessment-overlay" className="fixed inset-0 z-55 flex items-center justify-center p-4">
            <motion.div 
              className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAssessmentOpen(false)}
            />
            
            <motion.div 
              className="bg-brand-card border border-brand-border w-full max-w-md rounded-2xl overflow-hidden relative shadow-2xl shadow-black z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button 
                id="btn-close-assessment-modal"
                onClick={() => setIsAssessmentOpen(false)}
                className="absolute top-4 right-4 p-1 rounded-lg hover:bg-[#242933] text-slate-400 hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {!assessmentSuccess ? (
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest font-bold">AI AUDIT GATE</span>
                    <h3 className="text-xl font-display font-extrabold text-white">Download the AI Visibility Checklist</h3>
                    <p className="text-xs text-slate-400">
                      Submit details below to immediately trigger the B2B Visibility playbook and receive a micro-report for your corporate domain.
                    </p>
                  </div>

                  <form onSubmit={handleAssessmentSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Company Website</label>
                      <input 
                        type="url" 
                        required 
                        placeholder="https://mycorp.com"
                        className="w-full bg-brand-bg border border-brand-border rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Sarah Jenkins"
                        className="w-full bg-brand-bg border border-brand-border rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Enterprise Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="sarah@mycorp.com"
                        className="w-full bg-brand-bg border border-brand-border rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                      />
                    </div>

                    <button
                      type="submit"
                      id="btn-confirm-assessment"
                      className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-3 rounded-lg text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download AI Assessment Playbook</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-8 text-center space-y-5">
                  <div className="w-14 h-14 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-extrabold text-white">Playbook Dispatch Completed</h3>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      We have sent your custom B2B playbook download instructions to your inbox. Additionally, we are queuing a crawler to generate your domain's visibility score.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsAssessmentOpen(false)}
                    className="bg-brand-card border border-brand-border hover:bg-[#242933] text-white text-xs font-semibold px-6 py-2.5 rounded-lg cursor-pointer"
                  >
                    Back to Articles
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. INTERACTIVE ARTICLE DETAIL SLIDE-OVER DRAWER (Prevents Dead-Ends) */}
      <AnimatePresence>
        {selectedArticle && (
          <div id="article-detail-drawer" className="fixed inset-0 z-55 flex justify-end">
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-brand-bg/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
            />

            {/* Slide-over panel */}
            <motion.div 
              className="bg-brand-card border-l border-brand-border w-full max-w-2xl relative shadow-2xl z-10 flex flex-col h-full"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-brand-border flex items-center justify-between bg-brand-bg">
                <div className="flex items-center gap-2">
                  <span className="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
                    {selectedArticle.category}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">INSIGHT DETAIL</span>
                </div>
                <button 
                  id="btn-close-article-drawer"
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-lg hover:bg-[#242933] text-slate-400 hover:text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
                
                {/* Hero graphic */}
                <div className="h-48 sm:h-64 rounded-xl overflow-hidden relative border border-brand-border">
                  <img 
                    src={selectedArticle.imageUrl} 
                    alt={selectedArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="text-white text-xs font-mono bg-brand-bg/80 px-2.5 py-1 rounded">
                      {selectedArticle.readTime}
                    </span>
                    <span className="text-white text-xs font-mono bg-brand-bg/80 px-2.5 py-1 rounded">
                      {selectedArticle.date}
                    </span>
                  </div>
                </div>

                {/* Main Heading block */}
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug">
                    {selectedArticle.title}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed italic border-l-2 border-brand-accent pl-4">
                    {selectedArticle.excerpt}
                  </p>
                </div>

                {/* Metrics Callout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-brand-bg border border-brand-border p-4 rounded-xl">
                  {selectedArticle.metrics.map((metric, i) => (
                    <div key={i} className="text-center sm:text-left space-y-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">PILLAR OUTCOME</span>
                      <span className="text-xs sm:text-sm font-semibold text-brand-accent block">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Key takeaways */}
                <div className="space-y-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-accent" />
                    <span>Key Strategic Takeaways</span>
                  </h4>
                  <ul className="space-y-3">
                    {selectedArticle.keyTakeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-3 bg-brand-bg p-3.5 rounded-lg border border-brand-border">
                        <span className="w-5 h-5 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{takeaway}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expanded editorial */}
                <div className="space-y-4 pt-2 border-t border-brand-border">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white">Executive Briefing & Analysis</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {selectedArticle.fullBody}
                  </p>
                </div>

                {/* In-drawer CTA to secure visibility check */}
                <div className="p-6 rounded-2xl bg-brand-bg border border-brand-border space-y-4">
                  <div className="space-y-1">
                    <h5 className="font-display font-extrabold text-white text-base">Is your company recommended for this topic?</h5>
                    <p className="text-xs text-slate-300">
                      We offer free, zero-commitment domain analysis mapping your company's actual citations versus key enterprise rivals.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => {
                        setIsAssessmentOpen(true);
                        setAssessmentSuccess(false);
                      }}
                      className="bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-2.5 px-4 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Get Free Audit</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsBookCallOpen(true);
                        setBookingSuccess(false);
                      }}
                      className="bg-brand-card border border-brand-border hover:bg-[#242933] text-slate-300 font-semibold py-2.5 px-4 rounded-lg text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Schedule 20m Discovery</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Drawer Footer / Author panel */}
              <div className="p-6 border-t border-brand-border bg-brand-bg flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center font-bold text-brand-accent text-base">
                  {selectedArticle.author.initials}
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">{selectedArticle.author.name}</span>
                  <span className="text-xs text-slate-400 block">{selectedArticle.author.role} at HybridMonks</span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
