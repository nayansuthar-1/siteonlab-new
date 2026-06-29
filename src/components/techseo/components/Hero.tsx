"use client";

import { useState, useEffect } from "react";
import { Terminal, Shield, Play, RefreshCw, Cpu, Activity, AlertTriangle, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onRequestBlueprint: () => void;
  onSeeCaseStudies: () => void;
}

export default function Hero({ onRequestBlueprint, onSeeCaseStudies }: HeroProps) {
  const [crawlActive, setCrawlActive] = useState(false);
  const [crawlProgress, setCrawlProgress] = useState(0);
  const [pagesCrawled, setPagesCrawled] = useState(0);
  const [indexRate, setIndexRate] = useState(98.4);
  const [errorsFound, setErrorsFound] = useState(0);
  const [activeUrl, setActiveUrl] = useState("/");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([
    "System: Standing by. Ready to crawl server node...",
  ]);

  const urlsToSimulate = [
    "/solutions/enterprise-cloud",
    "/industries.b2b-saas",
    "/demo/schedule-request",
    "/resources/technical-seo-checklist",
    "/blog/dynamic-rendering-guide",
    "/products/performance-monitoring",
    "/solutions/security-compliance",
    "/legal/privacy-policy",
    "/solutions/database-infrastructure",
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (crawlActive) {
      interval = setInterval(() => {
        setCrawlProgress((prev) => {
          if (prev >= 100) {
            setCrawlActive(false);
            setConsoleLogs((logs) => [
              ...logs,
              "✔ Crawl Complete. 412 pages analyzed.",
              "✔ Robots.txt parsed. 12 disallow rules validated.",
              "✔ XML Sitemap validated. Indexability Rate: 98.4%",
              "✔ Report Generated. Ready for Pipeline Blueprint.",
            ]);
            return 100;
          }
          
          const newProgress = prev + Math.floor(Math.random() * 15) + 5;
          const currentUrl = urlsToSimulate[Math.floor(Math.random() * urlsToSimulate.length)];
          setActiveUrl(currentUrl);
          
          // Increment pages
          setPagesCrawled((p) => p + Math.floor(Math.random() * 25) + 5);
          
          // Occasional error simulation
          if (Math.random() > 0.8) {
            setErrorsFound((e) => e + 1);
            setConsoleLogs((logs) => [
              ...logs,
              `⚠ WARNING: Slow Response (LCP > 3.1s) detected on ${currentUrl}`,
              `⚠ ALERT: Redirect chain found at ${currentUrl} -> /outdated-slug`,
            ]);
          } else {
            setConsoleLogs((logs) => [
              ...logs,
              `GET ${currentUrl} - Status 200 - Rendered in ${Math.floor(Math.random() * 200) + 40}ms`,
            ]);
          }
          
          return newProgress > 100 ? 100 : newProgress;
        });
      }, 700);
    }
    return () => clearInterval(interval);
  }, [crawlActive]);

  const handleStartCrawl = () => {
    setCrawlActive(true);
    setCrawlProgress(0);
    setPagesCrawled(0);
    setErrorsFound(0);
    setConsoleLogs([
      "Initializing HybridMonks Crawler v2.8...",
      "Connecting to target DNS endpoints...",
      "User-Agent: HybridMonksBot/1.0 (+https://hybridmonks.com/bot)",
      "Parsing main index XML Sitemap...",
    ]);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#050505] py-20 lg:py-28 bg-grid-pattern border-b border-white/10">
      
      {/* Visual Ambient Glows - Made subtle for elegant theme */}
      <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/20 px-3 py-1 text-xs text-blue-400 font-mono tracking-wider uppercase">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              Technical SEO | Search Infrastructure
            </div>

            {/* H1 */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              The Technical SEO agency that drives <span className="text-blue-500 font-serif italic">Crawl Health</span>, <span className="text-blue-500 font-serif italic">Rankability</span>, and <span className="text-blue-500 font-serif italic">Revenue</span>.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
              HybridMonks helps B2B SaaS and IT/MSP companies turn their site architecture into a measurable revenue channel. We help you rank for buyer-intent searches, get cited by AI engines, and convert visibility into qualified pipeline.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onRequestBlueprint}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-200"
              >
                Request a Growth Blueprint
              </button>
              
              <button
                onClick={onSeeCaseStudies}
                className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-bold text-xs uppercase tracking-widest rounded transition-all duration-200"
              >
                See Case Studies
              </button>
            </div>

            {/* Micro Badges of Standard Tech Stack Audited */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block mb-2.5">
                Engineered for Enterprise Tech Stacks:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-400">
                <span className="bg-[#111] border border-white/5 px-2.5 py-1 rounded">Next.js / React</span>
                <span className="bg-[#111] border border-white/5 px-2.5 py-1 rounded">Headless CMS</span>
                <span className="bg-[#111] border border-white/5 px-2.5 py-1 rounded">WordPress Enterprise</span>
                <span className="bg-[#111] border border-white/5 px-2.5 py-1 rounded">Webflow / Custom</span>
              </div>
            </div>

          </div>

          {/* RIGHT GRAPHICS */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 rounded-3xl blur-2xl"></div>
            
            {/* The Interactive Health Audit Panel */}
            <div className="relative border border-white/10 bg-[#080808]/90 rounded-2xl p-5 shadow-2xl backdrop-blur-md">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500/70"></span>
                  <span className="text-[10px] font-mono text-gray-400 ml-1">HybridMonks Crawler Engine</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono uppercase tracking-wider">
                  <Activity className="h-3 w-3 text-blue-500 animate-pulse" />
                  <span>Crawl Health Monitor</span>
                </div>
              </div>

              {/* Crawl Stats Widgets */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-[#111] p-3 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">CRAWLED PAGES</span>
                  <span className="text-base font-bold font-mono text-blue-400 block mt-1">
                    {pagesCrawled.toLocaleString()}
                  </span>
                </div>
                
                <div className="bg-[#111] p-3 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">INDEXABILITY</span>
                  <span className="text-base font-bold font-mono text-emerald-400 block mt-1">
                    {indexRate}%
                  </span>
                </div>

                <div className="bg-[#111] p-3 rounded-xl border border-white/5">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">ERRORS FOUND</span>
                  <span className="text-base font-bold font-mono text-rose-400 block mt-1">
                    {errorsFound}
                  </span>
                </div>
              </div>

              {/* Interactive Simulator Screen / URL Ticker */}
              <div className="bg-[#050505] rounded-xl border border-white/5 p-4 h-44 overflow-y-auto font-mono text-[10px] text-gray-400 space-y-1.5">
                {consoleLogs.map((log, index) => {
                  let colorClass = "text-gray-500";
                  if (log.includes("⚠ WARNING")) colorClass = "text-yellow-500/90";
                  else if (log.includes("⚠ ALERT")) colorClass = "text-rose-500/90";
                  else if (log.includes("✔")) colorClass = "text-emerald-500/90";
                  else if (log.includes("GET")) colorClass = "text-blue-500/90";
                  return (
                    <div key={index} className={`${colorClass} leading-relaxed`}>
                      {log}
                    </div>
                  );
                })}
              </div>

              {/* Crawl Status and Button Trigger */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1">
                    <span>CRAWL RUNTIME: <span className="text-gray-300 font-semibold">{activeUrl}</span></span>
                    <span>{crawlProgress}%</span>
                  </div>
                  <div className="w-full bg-[#050505] h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className="bg-blue-600 h-full rounded-full transition-all duration-300"
                      style={{ width: `${crawlProgress}%` }}
                    ></div>
                  </div>
                </div>

                <button
                  onClick={handleStartCrawl}
                  disabled={crawlActive}
                  className="flex items-center gap-1.5 bg-[#050505] hover:bg-[#111] border border-white/10 disabled:opacity-50 text-[10px] font-mono text-gray-300 px-3 py-2 rounded-lg transition-all"
                >
                  <RefreshCw className={`h-3 w-3 ${crawlActive ? "animate-spin text-blue-500" : "text-gray-400"}`} />
                  {crawlActive ? "Crawling" : "Simulate"}
                </button>
              </div>

            </div>

            {/* Floating Technical Tags decoration */}
            <div className="absolute -bottom-6 -left-6 bg-[#080808] border border-white/5 p-3 rounded-xl shadow-lg flex items-center gap-2 font-mono text-[10px] text-gray-400 z-20 backdrop-blur-sm">
              <Cpu className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
              <span>INP &lt; 150ms</span>
            </div>

            <div className="absolute -top-6 -right-3 bg-[#080808] border border-white/5 p-3 rounded-xl shadow-lg flex items-center gap-2 font-mono text-[10px] text-gray-400 z-20 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5 text-blue-500" />
              <span>LLM Citation Schema</span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
