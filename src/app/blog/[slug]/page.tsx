import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { getAllSlugs, getArticleBySlug, type ArticleSection } from "@/lib/wp";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return { title: "Article not found | HybridMonks" };
  }
  return {
    title: `${article.title} | HybridMonks Insights`,
    description: article.excerpt,
  };
}

// Shared typography for HTML coming out of WordPress.
const proseClasses =
  "text-slate-300 text-base leading-relaxed space-y-4 [&_a]:text-brand-accent [&_a]:underline [&_h2]:text-white [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-2xl [&_h3]:text-white [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-xl [&_strong]:text-white [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_img]:rounded-xl [&_blockquote]:border-l-2 [&_blockquote]:border-brand-accent [&_blockquote]:pl-4 [&_blockquote]:italic";

function SectionBlock({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-white pt-2">
          {section.text}
        </h2>
      );

    case "paragraph":
      return (
        <>
          {section.text
            .split(/\n{2,}/)
            .filter((p) => p.trim())
            .map((paragraph, i) => (
              <p
                key={i}
                className="text-slate-300 text-base leading-relaxed whitespace-pre-line"
              >
                {paragraph}
              </p>
            ))}
        </>
      );

    case "html":
      return (
        <div className={proseClasses} dangerouslySetInnerHTML={{ __html: section.html }} />
      );

    case "image":
      return (
        <figure className="space-y-2">
          <img
            src={section.url}
            alt={section.caption ?? ""}
            referrerPolicy="no-referrer"
            className="w-full rounded-2xl border border-brand-border"
          />
          {section.caption && (
            <figcaption className="text-xs text-slate-500 text-center">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "takeaways":
      return (
        <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-3">
          <h3 className="font-display font-bold text-white">
            {section.title || "Key Takeaways"}
          </h3>
          <ul className="space-y-2">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-brand-accent font-bold shrink-0">{i + 1}.</span>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      );

    case "metrics":
      return (
        <div className="space-y-3">
          {section.title && (
            <h3 className="font-display font-bold text-white">{section.title}</h3>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-brand-card border border-brand-border"
              >
                <span className="text-sm font-semibold text-brand-accent">{item}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-brand-accent pl-5 py-1 space-y-2">
          <p className="text-slate-200 text-lg italic leading-relaxed whitespace-pre-line">
            {section.text}
          </p>
          {section.cite && <cite className="text-sm text-slate-500 not-italic">— {section.cite}</cite>}
        </blockquote>
      );

    default:
      return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

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

        {/* Header: meta, title, excerpt, byline */}
        <header className="space-y-5">
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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight tracking-tight">
            {article.title}
          </h1>

          {article.excerpt && (
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              {article.excerpt}
            </p>
          )}

          <div className="flex items-center gap-3 border-t border-brand-border pt-5">
            <div className="w-10 h-10 rounded-full bg-brand-card border border-brand-border flex items-center justify-center font-bold text-brand-accent text-sm">
              {article.author.initials}
            </div>
            <div>
              <span className="text-sm font-bold text-white block">{article.author.name}</span>
              {article.author.role && (
                <span className="text-xs text-slate-400 block">{article.author.role}</span>
              )}
            </div>
          </div>
        </header>

        {/* Hero image (only when set) */}
        {article.imageUrl && (
          <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-brand-border">
            <img
              src={article.imageUrl}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Body: composed sections in authored order */}
        <div className="space-y-6">
          {article.sections.map((section, i) => (
            <SectionBlock key={i} section={section} />
          ))}
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
