"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  Gauge,
  Smartphone,
  Monitor,
  ShieldCheck,
  Zap,
  X,
  ArrowRight,
  Loader2,
  Sparkles,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

type Strategy = "mobile" | "desktop";

type Metric = {
  id: string;
  label: string;
  displayValue: string;
  score: number | null;
};

type AuditResult = {
  url: string;
  strategy: Strategy;
  fetchedAt: string;
  scores: {
    performance: number | null;
    accessibility: number | null;
    bestPractices: number | null;
    seo: number | null;
  };
  metrics: Metric[];
  screenshot: string | null;
};

type Lead = { name: string; email: string; company: string };

const LOADING_MESSAGES = [
  "Crawling your homepage…",
  "Measuring load performance…",
  "Auditing Core Web Vitals…",
  "Checking accessibility & SEO signals…",
  "Scoring against best practices…",
  "Compiling your growth report…",
];

function scoreColor(score: number | null): string {
  if (score === null) return "#94a3b8";
  if (score >= 90) return "#0cce6b";
  if (score >= 50) return "#ffa400";
  return "#ff4e42";
}

function scoreLabel(score: number | null): string {
  if (score === null) return "N/A";
  if (score >= 90) return "Good";
  if (score >= 50) return "Needs work";
  return "Poor";
}

function ScoreGauge({ label, score }: { label: string; score: number | null }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const value = score ?? 0;
  const offset = circumference - (value / 100) * circumference;
  const color = scoreColor(score);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-32 w-32">
        <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="8" />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl font-black" style={{ color }}>
            {score ?? "—"}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color }}>
            {scoreLabel(score)}
          </span>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-200">{label}</span>
    </div>
  );
}

export default function WebsiteAuditPage() {
  const [url, setUrl] = useState("");
  const [strategy, setStrategy] = useState<Strategy>("mobile");
  const [showForm, setShowForm] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [lead, setLead] = useState<Lead>({ name: "", email: "", company: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loadingMsg, setLoadingMsg] = useState(0);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Rotate the loading messages while an audit runs.
  useEffect(() => {
    if (!loading) return;
    const t = setInterval(() => setLoadingMsg((i) => (i + 1) % LOADING_MESSAGES.length), 2200);
    return () => clearInterval(t);
  }, [loading]);

  const isValidUrl = url.trim().length > 3 && url.includes(".");

  const runAudit = async (targetStrategy: Strategy) => {
    setLoading(true);
    setError(null);
    setResult(null);
    setLoadingMsg(0);
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, strategy: targetStrategy }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong while running your audit.");
      }
      setResult(data.result as AuditResult);
      setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong while running your audit.");
    } finally {
      setLoading(false);
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidUrl) return;
    setShowForm(true);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setLeadCaptured(true);
    runAudit(strategy);
  };

  const switchStrategy = (next: Strategy) => {
    if (next === strategy) return;
    setStrategy(next);
    if (leadCaptured) runAudit(next);
  };

  return (
    <div className="theme-home min-h-screen bg-brand-bg font-sans text-gray-100 selection:bg-brand-primary selection:text-black">
      {/* HERO / SEARCH */}
      <section className="relative overflow-hidden border-b border-zinc-900 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1 text-brand-primary">
            <Gauge className="h-4 w-4" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wide md:text-xs">
              HybridMonks Website Audit
            </span>
          </div>

          <h1 className="font-display text-3xl font-black leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
            See exactly where your website is{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              losing pipeline.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base md:text-lg">
            Run a free instant audit of your site&apos;s performance, accessibility, SEO health, and
            best practices — and get a clear, prioritized report you can act on today.
          </p>

          <form onSubmit={handleHeroSubmit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="yourcompany.com"
                className="w-full rounded-xl border border-zinc-800 bg-brand-card py-3.5 pl-11 pr-4 text-sm text-gray-100 placeholder:text-gray-500 focus:border-brand-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={!isValidUrl || loading}
              className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-brand-primary/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            >
              Run Free Audit
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-gray-500">
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-brand-primary" /> Instant results</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-brand-primary" /> No software to install</span>
            <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-brand-primary" /> Actionable report</span>
          </div>
        </div>
      </section>

      {/* LOADING / ERROR / RESULTS */}
      <section ref={resultsRef} className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {loading && (
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-zinc-800 bg-brand-card py-20">
              <Loader2 className="h-10 w-10 animate-spin text-brand-primary" />
              <p className="font-display text-lg font-bold text-white">Auditing {url}</p>
              <p className="text-sm text-gray-400">{LOADING_MESSAGES[loadingMsg]}</p>
              <p className="mt-2 text-xs font-mono text-gray-600">This usually takes 15–30 seconds.</p>
            </div>
          )}

          {error && !loading && (
            <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-red-500/30 bg-red-500/5 p-8 text-center">
              <AlertCircle className="h-8 w-8 text-red-400" />
              <p className="text-sm text-gray-300">{error}</p>
              <button
                onClick={() => (leadCaptured ? runAudit(strategy) : setShowForm(true))}
                className="rounded-lg bg-brand-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-cyan-400"
              >
                Try again
              </button>
            </div>
          )}

          {result && !loading && (
            <div className="space-y-10">
              {/* Header + device toggle */}
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-brand-primary">Audit report</p>
                  <h2 className="mt-1 break-all font-display text-2xl font-black text-white">{result.url}</h2>
                </div>
                <div className="flex rounded-lg border border-zinc-800 bg-brand-card p-1">
                  {(["mobile", "desktop"] as Strategy[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => switchStrategy(s)}
                      className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold capitalize transition-colors ${
                        strategy === s ? "bg-brand-primary text-black" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {s === "mobile" ? <Smartphone className="h-3.5 w-3.5" /> : <Monitor className="h-3.5 w-3.5" />}
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff4e42" }} /> 0–49</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ffa400" }} /> 50–89</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: "#0cce6b" }} /> 90–100</span>
              </div>

              {/* Score gauges */}
              <div className="grid grid-cols-2 gap-8 rounded-2xl border border-zinc-800 bg-brand-card p-8 md:grid-cols-4">
                <ScoreGauge label="Performance" score={result.scores.performance} />
                <ScoreGauge label="Accessibility" score={result.scores.accessibility} />
                <ScoreGauge label="Best Practices" score={result.scores.bestPractices} />
                <ScoreGauge label="SEO" score={result.scores.seo} />
              </div>

              {/* Metrics + screenshot */}
              <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
                <div className="rounded-2xl border border-zinc-800 bg-brand-card p-6 sm:p-8">
                  <h3 className="mb-1 font-display text-lg font-bold text-white">Core metrics</h3>
                  <p className="mb-6 text-xs text-gray-500">Lab data measuring real-world load experience.</p>
                  <div className="divide-y divide-zinc-800/70">
                    {result.metrics.map((m) => (
                      <div key={m.id} className="flex items-center justify-between py-3.5">
                        <span className="flex items-center gap-2.5 text-sm text-gray-300">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: scoreColor(m.score) }} />
                          {m.label}
                        </span>
                        <span className="font-display text-sm font-bold" style={{ color: scoreColor(m.score) }}>
                          {m.displayValue}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {result.screenshot && (
                  <div className="flex flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-brand-card p-6">
                    <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Captured view</p>
                    {/* eslint-disable-next-line @next/next/no-img-element -- base64 capture from the audit engine */}
                    <img
                      src={result.screenshot}
                      alt="Captured rendering of the audited page"
                      className="max-h-96 w-auto rounded-lg border border-zinc-800"
                    />
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="relative overflow-hidden rounded-2xl border border-brand-primary/20 bg-brand-card p-8 text-center sm:p-12">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
                <div className="relative">
                  <CheckCircle className="mx-auto mb-4 h-8 w-8 text-brand-primary" />
                  <h3 className="font-display text-2xl font-black text-white sm:text-3xl">
                    Want us to fix what this audit found?
                  </h3>
                  <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
                    Book a strategy call and we&apos;ll turn these scores into a prioritized roadmap that
                    drives real pipeline — not just a better number.
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-brand-primary/30 md:text-sm"
                  >
                    Book a Strategy Call <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LEAD CAPTURE FORM (gate before audit) */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-zinc-800 bg-brand-card p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary">
                <Gauge className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Where should we send your report?</h3>
              <p className="mt-1 text-xs text-gray-400">
                We&apos;ll run your audit instantly and email a copy of the full breakdown.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  value={lead.name}
                  onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-zinc-800 bg-brand-bg p-2.5 text-sm text-gray-100 placeholder:text-gray-500 focus:border-brand-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                  Work email
                </label>
                <input
                  type="email"
                  required
                  value={lead.email}
                  onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full rounded-lg border border-zinc-800 bg-brand-bg p-2.5 text-sm text-gray-100 placeholder:text-gray-500 focus:border-brand-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="mb-1 block text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                  Company
                </label>
                <input
                  type="text"
                  required
                  value={lead.company}
                  onChange={(e) => setLead({ ...lead, company: e.target.value })}
                  placeholder="Acme Inc."
                  className="w-full rounded-lg border border-zinc-800 bg-brand-bg p-2.5 text-sm text-gray-100 placeholder:text-gray-500 focus:border-brand-primary focus:outline-none"
                />
              </div>

              <div className="rounded-lg border border-zinc-800 bg-brand-bg px-3 py-2 text-xs text-gray-400">
                Auditing: <span className="font-semibold text-brand-primary">{url}</span>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-cyan-400 md:text-sm"
              >
                Run My Free Audit
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-[10px] text-gray-600">
                We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
