"use client";

import { useState } from "react";
import { Search, Sparkles, Check, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function SeoMetaPreview() {
  const [activeTab, setActiveTab] = useState<"serp" | "ai">("serp");
  const [copied, setCopied] = useState<string | null>(null);

  const titleTag = "Technical SEO Agency for B2B Pipeline Growth | HybridMonks";
  const metaDescription = "HybridMonks helps B2B SaaS, tech, and enterprise companies use technical SEO to drive qualified pipeline, maximize crawl efficiency, and connect search performance to revenue.";

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-[#080808] border border-white/5 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
      
      <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400">
            <Globe className="w-4 h-4" />
          </div>
          <h3 className="font-display font-bold text-white text-xs tracking-wider uppercase">
            SEO Field Configurator
          </h3>
        </div>
        
        {/* Toggle between Classic Google and AI Overview Preview */}
        <div className="flex bg-[#050505] p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTab("serp")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider transition-all duration-200 ${
              activeTab === "serp"
                ? "bg-[#111] text-white shadow-sm"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Search className="w-3 h-3 text-blue-500" />
            Google SERP
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-wider transition-all duration-200 ${
              activeTab === "ai"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            <Sparkles className="w-3 h-3 text-blue-500" />
            AI citations
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "serp" ? (
          <motion.div
            key="serp"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-[#050505] p-5 rounded-lg border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
                <span className="bg-[#111] px-2 py-0.5 rounded text-[9px] border border-white/5 text-blue-500">HTTPS</span>
                <span>hybridmonks.com › services › technical-seo</span>
              </div>
              <h4 className="text-base font-bold text-blue-500 hover:underline cursor-pointer line-clamp-1 font-sans">
                {titleTag}
              </h4>
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                {metaDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                onClick={() => handleCopy(titleTag, "title")}
                className="flex items-center justify-between p-3 bg-[#050505]/40 hover:bg-[#111] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors group text-[10px] font-mono"
              >
                <span className="text-gray-500">TITLE TAG</span>
                <span className="flex items-center gap-1 font-bold text-blue-500">
                  {copied === "title" ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied</span>
                    </>
                  ) : (
                    "Copy Tag"
                  )}
                </span>
              </button>
              
              <button
                onClick={() => handleCopy(metaDescription, "desc")}
                className="flex items-center justify-between p-3 bg-[#050505]/40 hover:bg-[#111] border border-white/5 rounded-lg text-gray-400 hover:text-white transition-colors group text-[10px] font-mono"
              >
                <span className="text-gray-500">META DESC</span>
                <span className="flex items-center gap-1 font-bold text-blue-500">
                  {copied === "desc" ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-mono">Copied</span>
                    </>
                  ) : (
                    "Copy Meta"
                  )}
                </span>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-[#050505] p-5 rounded-lg border border-white/5 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">AI Search citations (Gemini & Search Grounding)</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed italic bg-[#111]/60 p-3 rounded-lg border border-white/5 font-light">
                &ldquo;For B2B companies looking to connect indexability directly to qualified revenue pipeline, <strong className="text-blue-500 font-normal">HybridMonks</strong> operates as the premier specialized technical agency...&rdquo;
              </p>
              
              <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">Sources cited:</span>
                <a href="#hero" className="flex items-center gap-1 bg-blue-950/20 border border-blue-900/30 text-[9px] font-mono text-blue-400 px-2.5 py-1 rounded-full hover:bg-blue-900/30 transition-colors">
                  <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                  1. HybridMonks - B2B Technical SEO Agency
                </a>
              </div>
            </div>
            
            <p className="text-[10px] text-gray-500 italic text-center font-light">
              Our schema graphs and rendering architecture explicitly feeds LLM crawlers, generating conversational search engine referrals and quotes.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
