import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Star, ShieldCheck, LineChart } from "lucide-react";
import { ALL_CASE_STUDIES, getCaseStudyBySlug } from "@/components/case-studies/data";

export function generateStaticParams() {
  return ALL_CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) {
    return { title: "Case study not found | HybridMonks" };
  }
  return {
    title: `${caseStudy.clientName} — ${caseStudy.title} | HybridMonks Case Studies`,
    description: caseStudy.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="theme-case min-h-screen bg-brand-bg text-slate-300 font-sans selection:bg-brand-accent selection:text-white">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">

        {/* Back to case studies */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Case Studies</span>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-slate-300">
            <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
            {caseStudy.clientName}
          </span>
          <span className="text-slate-500 text-xs">•</span>
          <span className="text-xs text-slate-300">{caseStudy.industry}</span>
          <span className="text-slate-500 text-xs">•</span>
          <span className="text-xs text-blue-400 font-semibold">{caseStudy.service}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          &ldquo;{caseStudy.title}&rdquo;
        </h1>

        {/* Hero image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800/60 relative bg-slate-950">
          <img
            src={caseStudy.imageUrl}
            alt={`${caseStudy.clientName} outcome`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Headline metric */}
        <div className="rounded-xl bg-brand-card border border-slate-800/50 p-6 max-w-lg">
          <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
            Primary Measured Outcome
          </span>
          <div className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            {caseStudy.metric}
          </div>
          <p className="mt-1 text-sm text-slate-300 font-medium">{caseStudy.metricLabel}</p>
        </div>

        {/* Summary */}
        <div className="space-y-4 pt-2 border-t border-slate-900">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-white">
            The Engagement
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {caseStudy.summary}
          </p>
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800/80 p-6 sm:p-10 text-center space-y-5">
          <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-brand-accent/5 blur-[80px]" />
          <div className="relative z-10 space-y-5">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Want results like these?
            </h2>
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-2xl mx-auto">
              Book a 30-minute strategy call. We&apos;ll assess your search and AI presence, show you
              exactly where the pipeline leaks are, and map a realistic growth trajectory.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white bg-brand-accent hover:bg-blue-600 transition-all duration-200"
              >
                Book a Meeting <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/website-audit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                Take the AI Visibility Assessment
              </Link>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                100% Confidential
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <LineChart className="w-3.5 h-3.5 text-emerald-500" />
                Direct CRM Integration
              </span>
            </div>
          </div>
        </div>

      </article>
    </div>
  );
}
