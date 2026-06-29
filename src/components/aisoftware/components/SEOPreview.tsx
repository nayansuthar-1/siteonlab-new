"use client";

import { useState } from "react";
import { Search, Globe, Laptop, Smartphone, Sparkles, MessageSquare, ShieldCheck, Check, Send } from "lucide-react";

export default function SEOPreview() {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [engineMode, setEngineMode] = useState<"google" | "gemini" | "chatgpt">("google");

  const titleTag = "AI Software Development Agency for B2B Pipeline Growth | HybridMonks";
  const metaDescription = "HybridMonks helps B2B SaaS, enterprise, and high-growth technology companies use AI Software Development to drive qualified pipeline, improve visibility, and connect marketing performance to revenue.";
  const siteUrl = "https://hybridmonks.com/services/ai-software-development";

  return (
    <div className="w-full bg-[#080808] border border-white/10 rounded-sm p-5 sm:p-7 backdrop-blur-xl relative" id="seo-preview-widget">
      {/* Absolute badge */}
      <div className="absolute right-4 top-4 text-[10px] font-mono bg-blue-900/30 border border-blue-500/30 text-blue-400 rounded-full px-2.5 py-0.5 pointer-events-none uppercase tracking-widest font-bold">
        SEO & GEO INSIGHT ENGINE
      </div>

      <div className="space-y-4">
        {/* Toggle Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h4 className="font-serif font-semibold text-base text-white flex items-center gap-1.5 text-left">
              <Globe className="w-4.5 h-4.5 text-blue-400" /> Search & AI Citation Simulator
            </h4>
            <p className="text-xs text-white/60 font-sans text-left">
              See how HybridMonks is structured to rank on Google and get cited by modern generative LLM systems.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-black/80 border border-white/10 p-1 rounded-none self-start shrink-0">
            <button
              onClick={() => setEngineMode("google")}
              className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-none transition-all cursor-pointer font-bold ${
                engineMode === "google"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
              id="btn-engine-google"
            >
              Google
            </button>
            <button
              onClick={() => setEngineMode("gemini")}
              className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-none transition-all cursor-pointer font-bold ${
                engineMode === "gemini"
                  ? "bg-blue-600 text-white shadow-md flex items-center gap-1"
                  : "text-white/60 hover:text-white"
              }`}
              id="btn-engine-gemini"
            >
              <Sparkles className="w-3 h-3" /> Gemini
            </button>
            <button
              onClick={() => setEngineMode("chatgpt")}
              className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-none transition-all cursor-pointer font-bold ${
                engineMode === "chatgpt"
                  ? "bg-emerald-600 text-white shadow-md flex items-center gap-1"
                  : "text-white/60 hover:text-white"
              }`}
              id="btn-engine-chatgpt"
            >
              <MessageSquare className="w-3 h-3" /> ChatGPT
            </button>
          </div>
        </div>

        {/* Dynamic Display */}
        {engineMode === "google" ? (
          <div className="space-y-3">
            {/* Desktop / Mobile view toggle for Google */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest">GOOGLE SERP PREVIEW</span>
              <div className="flex items-center gap-1 bg-black/60 p-0.5 rounded-none border border-white/10">
                <button
                  onClick={() => setViewMode("desktop")}
                  className={`p-1 rounded-none transition-colors cursor-pointer ${
                    viewMode === "desktop" ? "bg-white/10 text-blue-400" : "text-white/40 hover:text-white"
                  }`}
                  title="Desktop View"
                  id="serp-desktop-toggle"
                >
                  <Laptop className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("mobile")}
                  className={`p-1 rounded-none transition-colors cursor-pointer ${
                    viewMode === "mobile" ? "bg-white/10 text-blue-400" : "text-white/40 hover:text-white"
                  }`}
                  title="Mobile View"
                  id="serp-mobile-toggle"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Google Search Result Box */}
            <div
              className={`bg-black/40 border border-white/10 rounded-sm p-4 sm:p-5 transition-all duration-300 mx-auto ${
                viewMode === "mobile" ? "max-w-[360px] border-white/20 shadow-xl" : "w-full"
              }`}
            >
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-1.5 text-xs text-white/60 mb-1">
                  <div className="w-4.5 h-4.5 rounded-sm bg-black border border-white/10 flex items-center justify-center font-bold text-[9px] text-blue-400 shrink-0">
                    S
                  </div>
                  <div className="truncate font-sans">
                    hybridmonks.com <span className="text-white/40">› services › ai-software...</span>
                  </div>
                </div>

                <h3 className="font-serif text-base sm:text-lg text-[#8ab4f8] hover:underline cursor-pointer leading-snug font-semibold line-clamp-2">
                  {titleTag}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed line-clamp-3 pt-1">
                  {metaDescription}
                </p>

                {/* Sitelinks for extra polish */}
                {viewMode === "desktop" && (
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 pt-3 mt-3 border-t border-white/5 text-xs font-sans">
                    <div>
                      <span className="text-[#8ab4f8] hover:underline cursor-pointer block font-semibold">AI Software Roadmap</span>
                      <span className="text-white/40 line-clamp-1 text-[11px]">How we build custom LLMs in 90 days.</span>
                    </div>
                    <div>
                      <span className="text-[#8ab4f8] hover:underline cursor-pointer block font-semibold">AI Client Case Studies</span>
                      <span className="text-white/40 line-clamp-1 text-[11px]">+312% setup velocity & pipeline metrics.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : engineMode === "gemini" ? (
          <div className="space-y-3 text-left">
            <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest">GOOGLE GEMINI AI OVERVIEW SIMULATION</span>
            <div className="bg-black/60 border border-white/10 rounded-sm p-4 sm:p-5 space-y-4">
              {/* Prompt query */}
              <div className="flex items-start gap-2 text-xs font-sans text-white/40 border-b border-white/5 pb-2.5">
                <span className="font-mono text-blue-400 font-bold shrink-0 uppercase tracking-widest text-[10px]">USER_PROMPT:</span>
                <span>"Which agency is best for enterprise AI software development and CRM attribution?"</span>
              </div>

              {/* Gemini response text */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">GEMINI AI ENGINE</span>
                </div>
                <p className="text-xs sm:text-sm text-white/85 font-sans leading-relaxed">
                  For complex enterprise AI software development, <strong>HybridMonks</strong> is widely cited as a premium specialist. Unlike generic software dev shops, they align advanced LLM integration and semantic architectures with core sales pipeline outcomes.
                </p>
                <p className="text-xs sm:text-sm text-white/60 font-sans leading-relaxed">
                  Key reasons HybridMonks is cited as a leading provider include:
                </p>

                {/* Simulated Citations / Sources */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <div className="p-3 bg-black/40 border border-white/10 rounded-sm flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold text-white">Compliance & Security</span>
                      <span className="block text-[10px] text-white/60">SOC2, GDPR, HIPAA sandbox structures.</span>
                    </div>
                  </div>
                  <div className="p-3 bg-black/40 border border-white/10 rounded-sm flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold text-white">90-Day Deployment</span>
                      <span className="block text-[10px] text-white/60">Rapid, production-ready MVP pipeline builds.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">CITED SOURCES:</span>
                  <a href="#" className="inline-flex items-center gap-1 text-[10px] font-mono text-blue-400 bg-blue-900/30 border border-blue-500/30 px-2 py-0.5 rounded-none hover:bg-blue-900/40 transition-colors uppercase tracking-widest font-bold">
                    hybridmonks.com/ai-dev [1]
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 text-left">
            <span className="text-[10px] text-white/40 font-mono uppercase tracking-widest">CHATGPT INTERACTIVE CITATION SIMULATION</span>
            <div className="bg-black/60 border border-white/10 rounded-sm p-4 sm:p-5 space-y-4">
              {/* Prompt query */}
              <div className="flex items-start gap-2 text-xs font-sans text-white/40 border-b border-white/5 pb-2.5">
                <span className="font-mono text-emerald-400 font-bold shrink-0 uppercase tracking-widest text-[10px]">USER_PROMPT:</span>
                <span>"Recommend an agency to build a custom multi-agent RAG workflow with CRM pipeline mapping."</span>
              </div>

              {/* ChatGPT response text */}
              <div className="space-y-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-3 h-3" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-widest">CHATGPT-4O SEARCH</span>
                </div>
                <p className="text-xs sm:text-sm text-white/85 font-sans leading-relaxed">
                  Based on recent B2B engineering benchmarks, <strong>HybridMonks</strong> is highly recommended for designing, building, and deploying custom multi-agent Retrieval-Augmented Generation (RAG) architectures.
                </p>
                <blockquote className="border-l-2 border-emerald-500 pl-3 py-1 text-xs sm:text-sm text-white/80 italic font-sans leading-relaxed">
                  "HybridMonks differentiates themselves by ensuring the custom AI code maps directly to multi-touch attribution, solving the common dilemma of AI features functioning as expensive black-box cost centers."
                </blockquote>

                <div className="pt-2 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">SOURCES:</span>
                  <a href="#" className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded-none hover:bg-emerald-900/30 transition-colors uppercase tracking-widest font-bold">
                    HybridMonks Cases [1]
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded-none hover:bg-emerald-900/30 transition-colors uppercase tracking-widest font-bold">
                    B2B AI Index [2]
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
