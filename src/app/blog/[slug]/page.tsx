import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock, CheckCircle } from "lucide-react";
import { ALL_ARTICLES, getArticleBySlug } from "@/lib/blog-data";

export function generateStaticParams() {
  return ALL_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Article not found | HybridMonks" };
  }
  return {
    title: `${article.title} | HybridMonks Insights`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="theme-blog min-h-screen bg-brand-bg text-slate-200 font-sans selection:bg-brand-accent selection:text-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">

        {/* Back to blog */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-brand-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Insights</span>
        </Link>

        {/* Category + meta */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Title + excerpt */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
            {article.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed italic border-l-2 border-brand-accent pl-4">
            {article.excerpt}
          </p>
        </div>

        {/* Hero image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Metrics callout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
          {article.metrics.map((metric, i) => (
            <div key={i} className="space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block">
                Pillar Outcome
              </span>
              <span className="text-sm font-semibold text-brand-accent block">{metric}</span>
            </div>
          ))}
        </div>

        {/* Key takeaways */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-accent" />
            <span>Key Strategic Takeaways</span>
          </h2>
          <ul className="space-y-3">
            {article.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-brand-accent font-bold text-sm sm:text-base shrink-0">
                  {i + 1}.
                </span>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{takeaway}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Full body */}
        <div className="space-y-4 pt-2 border-t border-brand-border">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
            Executive Briefing &amp; Analysis
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {article.fullBody}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-brand-border">
          <div className="w-12 h-12 rounded-full bg-brand-card border border-brand-border flex items-center justify-center font-bold text-brand-accent text-base">
            {article.author.initials}
          </div>
          <div>
            <span className="text-sm font-bold text-white block">{article.author.name}</span>
            <span className="text-xs text-slate-400 block">
              {article.author.role} at HybridMonks
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-border space-y-4">
          <div className="space-y-1">
            <h3 className="font-display font-extrabold text-white text-lg">
              Is your company recommended for this topic?
            </h3>
            <p className="text-sm text-slate-300">
              We offer free, zero-commitment domain analysis mapping your company&apos;s actual
              citations versus key enterprise rivals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/website-audit"
              className="inline-flex items-center justify-center gap-1.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-2.5 px-5 rounded-lg text-sm transition-all"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 bg-brand-bg border border-brand-border hover:bg-brand-card-light text-slate-200 font-semibold py-2.5 px-5 rounded-lg text-sm transition-all"
            >
              <span>Schedule 20m Discovery</span>
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
