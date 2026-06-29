"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  Info, 
  Sparkles, 
  FileText, 
  Sliders, 
  Layers, 
  CheckCircle2, 
  Cpu 
} from 'lucide-react';

export default function SEOMetadataPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-[#121216] hover:bg-[#1C1C24] text-gray-300 hover:text-white px-4 py-2.5 rounded-full border border-white/5 shadow-xl text-xs font-mono transition duration-300 active:scale-95 custom-glow"
      >
        <Search className="w-3.5 h-3.5 text-blue-400" />
        <span>{isOpen ? 'Close SEO Inspector' : 'Inspect Page SEO'}</span>
        <span className="bg-blue-500/15 text-blue-400 text-[9px] px-1.5 py-0.5 rounded-full font-bold">Live</span>
      </button>

      {/* Floating Panel Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="absolute bottom-14 left-0 w-80 md:w-96 bg-[#0E0E11] border border-white/5 rounded-2xl shadow-2xl p-5 space-y-4 text-xs z-50 custom-glow-blue"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span className="font-display font-bold text-sm text-white">SEO & Meta Fields Inspector</span>
              </div>
              <span className="text-[9px] font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/10">
                HybridMonks Schema
              </span>
            </div>

            {/* Fields */}
            <div className="space-y-3.5">
              {/* Title Tag */}
              <div className="space-y-1 bg-[#121216] border border-white/5 p-2.5 rounded-lg">
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>TITLE TAG</span>
                  <span className="text-emerald-400 font-bold">73 Chars · Optimal</span>
                </div>
                <p className="font-sans text-gray-200 font-semibold leading-relaxed text-[11px]">
                  Account-Based Marketing (ABM) Agency for B2B Pipeline Growth | HybridMonks
                </p>
              </div>

              {/* Meta Description */}
              <div className="space-y-1 bg-[#121216] border border-white/5 p-2.5 rounded-lg">
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>META DESCRIPTION</span>
                  <span className="text-emerald-400 font-bold">185 Chars · Highly Rich</span>
                </div>
                <p className="font-sans text-gray-400 text-[10.5px] leading-relaxed">
                  HybridMonks helps B2B SaaS, enterprise technology, and professional-services companies use Account-Based Marketing (ABM) to drive qualified pipeline, improve visibility, and connect marketing performance to revenue.
                </p>
              </div>

              {/* Main Heading H1 */}
              <div className="space-y-1 bg-[#121216] border border-white/5 p-2.5 rounded-lg">
                <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                  <span>H1 TARGET HEADING</span>
                  <span className="text-blue-400 font-bold">Validated</span>
                </div>
                <p className="font-sans text-gray-200 text-[10.5px] font-medium leading-relaxed">
                  The Account-Based Marketing (ABM) agency that drives enterprise demos, larger contract values, and closed-won revenue.
                </p>
              </div>

              {/* Search Grounding Insights */}
              <div className="space-y-1.5 bg-blue-500/5 border border-blue-500/10 p-3 rounded-lg">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold font-mono uppercase tracking-wider">AI Search Optimization Status</span>
                </div>
                <p className="text-[10.5px] text-gray-300 leading-relaxed font-sans">
                  Structured data & semantic schema markers are embedded to ensure your service is easily cited in LLM search layers (such as Gemini, ChatGPT, and Perplexity).
                </p>
              </div>

              {/* Speed Metrics Checklist */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-[#121216]/50 p-2 rounded text-center border border-white/5">
                  <span className="text-[8px] text-gray-500 block uppercase font-mono">LCP Speed</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">1.1s (Good)</span>
                </div>
                <div className="bg-[#121216]/50 p-2 rounded text-center border border-white/5">
                  <span className="text-[8px] text-gray-500 block uppercase font-mono">FID Latency</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">12ms (Good)</span>
                </div>
                <div className="bg-[#121216]/50 p-2 rounded text-center border border-white/5">
                  <span className="text-[8px] text-gray-500 block uppercase font-mono">CLS Shift</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">0.01 (Good)</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
