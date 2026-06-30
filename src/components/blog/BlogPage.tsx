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
  X,
  Download,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  Award,
  ChevronRight,
  BookOpen,
  Filter,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { FEATURED_ARTICLE, ARTICLES } from "@/lib/blog-data";

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


export default function App() {
  const router = useRouter();

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
      <div id="filter-bar" className="sticky top-20 z-30 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-5">
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
              onClick={() => router.push(`/blog/${FEATURED_ARTICLE.slug}`)}
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
                  onClick={() => router.push(`/blog/${article.slug}`)}
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


    </div>
  );
}
