"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  ArrowRight,
  Calendar,
  Clock,
  X,
  BookOpen,
  Filter,
  HelpCircle,
  ImageIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/wp";

interface BlogPageProps {
  featuredArticle: Article | null;
  articles: Article[];
}

/** Card/hero image with a graceful placeholder when the post has none. */
function ArticleImage({
  article,
  sizes,
}: {
  article: Article;
  sizes: string;
}) {
  if (!article.imageUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-950/60 to-brand-card">
        <ImageIcon className="w-8 h-8 text-slate-600" />
      </div>
    );
  }
  return (
    <Image
      src={article.imageUrl}
      alt={article.title}
      fill
      sizes={sizes}
      className="object-cover group-hover:scale-105 transition-transform duration-500"
    />
  );
}

export default function BlogPage({ featuredArticle, articles }: BlogPageProps) {
  // Category pills derived from the fetched posts' WordPress categories
  const CATEGORIES = useMemo(() => {
    const categories = new Set<string>();
    if (featuredArticle) categories.add(featuredArticle.category);
    articles.forEach((article) => categories.add(article.category));
    return ["All", ...categories];
  }, [featuredArticle, articles]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const isFeaturedVisible = useMemo(() => {
    if (!featuredArticle) return false;
    if (selectedCategory !== "All" && featuredArticle.category !== selectedCategory)
      return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        featuredArticle.title.toLowerCase().includes(query) ||
        featuredArticle.excerpt.toLowerCase().includes(query)
      );
    }
    return true;
  }, [featuredArticle, selectedCategory, searchQuery]);

  const paginatedArticles = filteredArticles.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(9);
  }, [selectedCategory, searchQuery]);

  return (
    <div
      id="hybridmonks-root"
      className="theme-blog min-h-screen bg-brand-bg text-slate-200 font-sans selection:bg-brand-accent selection:text-white"
    >
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-14 border-b border-brand-border">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-900/50">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-mono font-semibold tracking-wider text-blue-300 uppercase">
              HybridMonks Insights
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
            The HybridMonks{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
              Blog
            </span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical thinking on AI visibility, GEO, technical B2B SEO, and what is
            actually driving pipeline and revenue growth for enterprise teams.
          </p>
        </div>
      </section>

      {/* SEARCH + CATEGORY FILTER BAR */}
      <div className="sticky top-20 z-30 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex items-center space-x-2 min-w-max">
                <div className="flex items-center text-slate-400 mr-2 text-xs font-mono font-medium tracking-wide">
                  <Filter className="w-3.5 h-3.5 mr-1.5 text-brand-accent" />
                  <span>TOPICS:</span>
                </div>
                {CATEGORIES.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
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

            <div className="relative w-full lg:max-w-xs shrink-0">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="block w-full pl-10 pr-9 py-2.5 bg-brand-card border border-brand-border rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-xs transition-all"
              />
              {searchQuery && (
                <button
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* FEATURED ARTICLE */}
        {isFeaturedVisible && featuredArticle && (
          <div className="space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Featured Article
            </span>

            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group bg-brand-card border border-brand-border rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 hover:border-slate-600/80 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-0.5"
            >
              <div className="relative h-64 sm:h-80 lg:h-full min-h-64 overflow-hidden">
                <ArticleImage
                  article={featuredArticle}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 sm:p-10 flex flex-col justify-center space-y-4">
                <span className="text-xs font-semibold text-brand-accent font-mono tracking-wider uppercase">
                  {featuredArticle.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-snug group-hover:text-brand-accent transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-brand-border">
                  <div className="w-9 h-9 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center font-bold text-brand-accent text-xs">
                    {featuredArticle.author.initials}
                  </div>
                  <span className="text-xs font-semibold text-white">
                    {featuredArticle.author.name}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400 ml-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ARTICLE GRID */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              Latest Articles
            </span>
            <span className="text-xs font-mono text-slate-500">
              Showing {paginatedArticles.length} of {filteredArticles.length}
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 bg-brand-card border border-brand-border rounded-2xl space-y-4">
              <HelpCircle className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-display font-bold text-white">
                No articles found
              </h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                Try a different search or select &quot;All&quot; topics.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="bg-brand-accent hover:bg-brand-accent/90 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group bg-brand-card border border-brand-border rounded-xl overflow-hidden flex flex-col h-full hover:border-slate-600 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden shrink-0">
                      <ArticleImage
                        article={article}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-brand-bg/90 text-brand-accent font-mono font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-brand-border">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1 space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-display font-bold text-white group-hover:text-brand-accent transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>

                      <div className="pt-3 mt-auto border-t border-brand-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-[10px] font-bold text-slate-300 uppercase">
                            {article.author.initials}
                          </div>
                          <span className="text-[11px] font-medium text-slate-200">
                            {article.author.name}
                          </span>
                        </div>

                        <span className="text-xs font-semibold text-brand-accent flex items-center gap-1">
                          <span>Read</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* LOAD MORE */}
        {filteredArticles.length > visibleCount && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setVisibleCount((prev) => prev + 9)}
              className="bg-brand-card hover:bg-[#242933] border border-brand-border text-slate-100 text-sm font-semibold py-3 px-8 rounded-xl transition-all cursor-pointer"
            >
              Load More Articles
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
