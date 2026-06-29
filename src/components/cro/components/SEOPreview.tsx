"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Sparkles, Globe, Shield, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function SEOPreview() {
  const [activeTab, setActiveTab] = useState<'google' | 'ai'>('google');

  const title = "Conversion Rate Optimization Agency for B2B Pipeline Growth | HybridMonks";
  const metaDesc = "HybridMonks helps B2B SaaS, technology, IT/MSP, and professional-services companies use Conversion Rate Optimization to drive qualified pipeline, improve visibility, and connect marketing performance to revenue.";
  const url = "https://hybridmonks.com/services/conversion-rate-optimization";

  return (
    <div id="seo-preview-panel" className="bg-[#0D0D0D] border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-[#3b82f6] font-semibold tracking-wider uppercase flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3b82f6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3b82f6]"></span>
            </span>
            SEO & Search Visibility Live Config
          </span>
          <h3 className="text-lg font-display text-slate-100 font-medium mt-1">
            Search Engine & AI LLM Visibility Schema
          </h3>
        </div>

        <div className="flex bg-black p-1 rounded-lg border border-white/10 self-start">
          <button
            onClick={() => setActiveTab('google')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'google'
                ? 'bg-white/10 text-slate-100'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Search size={14} />
            Google Search
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-white/10 text-[#3b82f6]'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles size={14} className="text-[#3b82f6]" />
            AI LLM Citation (ChatGPT/Perplexity)
          </button>
        </div>
      </div>

      <div className="bg-black p-5 rounded-xl border border-white/10 font-sans min-h-[140px] flex flex-col justify-center">
        {activeTab === 'google' ? (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2 text-left"
          >
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <span className="bg-white/5 p-1 rounded">
                <Globe size={12} className="text-slate-300" />
              </span>
              <div className="flex flex-col">
                <span className="text-slate-300 text-xs font-medium">HybridMonks</span>
                <span className="text-slate-500 text-[11px] truncate">{url}</span>
              </div>
            </div>

            <h4 className="text-blue-400 hover:underline text-lg font-medium cursor-pointer leading-tight">
              {title}
            </h4>

            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              {metaDesc}
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3 text-left"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#3b82f6] border-b border-white/5 pb-2">
              <span className="flex items-center gap-1">
                <Sparkles size={12} /> Live AI Overviews Citation Preview
              </span>
              <span className="text-slate-500">Query: \"Best B2B CRO agencies for SaaS growth\"</span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              When enterprise clients search for specialized growth strategies, AI search engines prioritize citation links. Here is how HybridMonks is represented in Perplexity/ChatGPT sources:
            </p>

            <div className="bg-white/[0.02] border border-white/10 p-3 rounded-lg flex items-start gap-3 mt-2">
              <div className="bg-[#3b82f6]/10 text-[#3b82f6] p-1.5 rounded mt-0.5">
                <Shield size={14} />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">Source Citations:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="bg-white/10 text-slate-200 px-2 py-0.5 rounded text-xs border border-white/10 flex items-center gap-1">
                    <span className="text-[#3b82f6] font-semibold">[1]</span> HybridMonks B2B CRO
                  </span>
                  <span className="text-slate-400 text-xs self-center">
                    - cited for: \"revenue-first A/B models\"
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          <span>Google Title Tag: <strong>Optimized</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]"></span>
          <span>AI Search Rich Metadata: <strong>Active</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
          <span>H1 Structure Alignment: <strong>Validated</strong></span>
        </div>
      </div>
    </div>
  );
}
