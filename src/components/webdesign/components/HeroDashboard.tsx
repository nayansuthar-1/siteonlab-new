"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Layers, 
  Code2, 
  Cpu, 
  Compass, 
  Sparkles, 
  Gauge, 
  Check, 
  FileJson,
  Search,
  MousePointer2,
  Settings
} from "lucide-react";

type ActiveTab = "design" | "code" | "indexing";

export default function HeroDashboard() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("design");
  
  // Design system state variables for real-time visual tweaking
  const [borderRadius, setBorderRadius] = useState<number>(4);
  const [accentColor, setAccentColor] = useState<string>("#3b82f6"); // Default blue-500
  const [layoutGrid, setLayoutGrid] = useState<boolean>(true);

  const colors = [
    { hex: "#3b82f6", label: "Brand Blue" },
    { hex: "#10b981", label: "Success Mint" },
    { hex: "#a855f7", label: "Royal Purple" },
    { hex: "#f43f5e", label: "Vibrant Rose" },
  ];

  return (
    <div id="hero-studio-workspace" className="w-full h-full bg-zinc-950 p-4 sm:p-5 flex flex-col justify-between font-sans text-left">
      
      {/* Upper Meta Info & Control Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
              SiteOnLab Web Architect v1.4
            </span>
          </div>
          <span className="font-mono text-[9px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-white/5 uppercase">
            Active Workspace
          </span>
        </div>

        {/* Tab Selector */}
        <div className="grid grid-cols-3 gap-1 bg-zinc-900/80 p-0.5 rounded border border-white/5">
          <button
            onClick={() => setActiveTab("design")}
            className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded transition-all cursor-pointer ${
              activeTab === "design"
                ? "bg-zinc-950 border border-white/5 shadow-md text-white"
                : "hover:bg-zinc-800/40 text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Layers className="w-3.5 h-3.5" style={{ color: activeTab === "design" ? accentColor : "currentColor" }} />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
              1. Design
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded transition-all cursor-pointer ${
              activeTab === "code"
                ? "bg-zinc-950 border border-white/5 shadow-md text-white"
                : "hover:bg-zinc-800/40 text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" style={{ color: activeTab === "code" ? "#10b981" : "currentColor" }} />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
              2. Code
            </span>
          </button>

          <button
            onClick={() => setActiveTab("indexing")}
            className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded transition-all cursor-pointer ${
              activeTab === "indexing"
                ? "bg-zinc-950 border border-white/5 shadow-md text-white"
                : "hover:bg-zinc-800/40 text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" style={{ color: activeTab === "indexing" ? "#a855f7" : "currentColor" }} />
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
              3. Indexing
            </span>
          </button>
        </div>
      </div>

      {/* Main Interactive Work Area */}
      <div className="flex-grow my-4 min-h-[220px] relative rounded border border-white/5 bg-zinc-900/10 overflow-hidden flex flex-col justify-between p-3">
        
        <AnimatePresence mode="wait">
          
          {/* TAB 1: DESIGN WORKSPACE */}
          {activeTab === "design" && (
            <motion.div
              key="design"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col justify-between gap-3"
            >
              {/* Designer Canvas Mockup */}
              <div className="flex-grow relative border border-white/5 bg-zinc-950 rounded p-3 overflow-hidden">
                {/* Visual Blueprint Grid Lines */}
                {layoutGrid && (
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-[0.12]">
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-r border-b border-blue-500/50" />
                    <div className="border-b border-blue-500/50" />
                  </div>
                )}

                {/* Animated Simulated Designer Cursor */}
                <motion.div 
                  className="absolute pointer-events-none z-10 flex flex-col items-start"
                  animate={{
                    x: [30, 200, 120, 30],
                    y: [120, 20, 80, 120]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MousePointer2 className="w-4 h-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] fill-zinc-950" />
                  <span className="text-[8px] font-mono bg-blue-600 text-white px-1 py-0.5 rounded shadow-md mt-1 font-bold">
                    SiteOnLab Designer
                  </span>
                </motion.div>

                {/* Mini Visual Landing Page Layout */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-white">SAAS_TEMPLATE_MOCK</span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                  </div>

                  {/* Main Hero block schema */}
                  <div className="space-y-1.5">
                    <div className="h-2 w-1/3 rounded bg-zinc-800" />
                    <div className="h-4 w-5/6 rounded bg-zinc-700" />
                    <div className="h-2 w-2/3 rounded bg-zinc-800" />
                  </div>

                  {/* High Converting Component Demo: Interactive CTA block */}
                  <div className="pt-2 flex justify-start items-center gap-2">
                    <button
                      className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white transition-all shadow-md shrink-0 select-none"
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- `shadow` isn't a valid CSS property (no-op at runtime); kept verbatim from the AI Studio source.
                      style={{
                        borderRadius: `${borderRadius}px`,
                        backgroundColor: accentColor,
                        shadow: `0 4px 12px ${accentColor}20`
                      } as any}
                    >
                      Convert Prospect
                    </button>
                    <div className="h-2 w-16 rounded bg-zinc-800" />
                  </div>
                </div>

                {/* Dynamic Indicator labels overlay */}
                <div className="absolute bottom-2 right-2 flex gap-1.5">
                  <span className="text-[8px] font-mono bg-zinc-900 border border-white/5 px-1 rounded text-zinc-500">
                    Radius: {borderRadius}px
                  </span>
                  <span className="text-[8px] font-mono bg-zinc-900 border border-white/5 px-1 rounded text-zinc-500">
                    Spacing: Compact
                  </span>
                </div>
              </div>

              {/* Design Controls panel at the bottom of Tab */}
              <div className="grid grid-cols-2 gap-3 bg-zinc-950 p-2 rounded border border-white/5 text-[10px] font-mono">
                {/* Border Radius Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between text-zinc-500 font-bold">
                    <span>CORNER RADIUS</span>
                    <span className="text-white">{borderRadius}px</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="16"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(Number(e.target.value))}
                    className="w-full h-1 bg-zinc-900 rounded appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                {/* Color Palette Switcher */}
                <div className="space-y-1 text-right">
                  <span className="text-zinc-500 font-bold block mb-1">BRAND ACCENT COLOR</span>
                  <div className="flex justify-end gap-1.5">
                    {colors.map((c) => (
                      <button
                        key={c.hex}
                        onClick={() => setAccentColor(c.hex)}
                        className={`w-3.5 h-3.5 rounded-full border transition-transform cursor-pointer ${
                          accentColor === c.hex ? "scale-125 border-white" : "border-transparent hover:scale-110"
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: CLEAN CODE & SUB-SECOND PERFORMANCE */}
          {activeTab === "code" && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full grid grid-cols-1 sm:grid-cols-12 gap-3"
            >
              {/* Left Column: Code Editor View */}
              <div className="sm:col-span-7 flex flex-col justify-between border border-white/5 bg-zinc-950 rounded p-2.5 overflow-hidden font-mono text-[9px] text-zinc-400">
                <div className="flex items-center justify-between pb-1.5 border-b border-white/5 text-zinc-600 font-bold">
                  <span>Page.tsx — React Component</span>
                  <span className="text-[8px] text-emerald-500 uppercase">Compiled</span>
                </div>
                <div className="space-y-1 py-2 font-mono leading-relaxed">
                  <div>
                    <span className="text-blue-400">import</span> React <span className="text-blue-400">from</span> <span className="text-emerald-400">"react"</span>;
                  </div>
                  <div>
                    <span className="text-blue-400">export default function</span> <span className="text-purple-400">Hero</span>() &#123;
                  </div>
                  <div className="pl-3 text-zinc-500">
                    <span className="text-blue-400">return</span> (
                  </div>
                  <div className="pl-6">
                    &lt;<span className="text-purple-400">section</span> <span className="text-blue-300">className</span>=<span className="text-emerald-400">"grid max-w-7xl"</span>&gt;
                  </div>
                  <div className="pl-9 text-zinc-500">
                    &lt;<span className="text-purple-400">h1</span> <span className="text-blue-300">className</span>=<span className="text-emerald-400">"text-6xl font-black"</span>&gt;
                  </div>
                  <div className="pl-12 text-white font-bold">
                    SaaS Revenue Engine
                  </div>
                  <div className="pl-9 text-zinc-500">
                    &lt;/<span className="text-purple-400">h1</span>&gt;
                  </div>
                  <div className="pl-6 text-zinc-500">
                    &lt;/<span className="text-purple-400">section</span>&gt;
                  </div>
                  <div className="pl-3 text-zinc-500">
                    );
                  </div>
                  <div>&#125;</div>
                </div>
                <div className="pt-1 border-t border-white/5 flex justify-between items-center text-[8px] text-zinc-600">
                  <span>Lines: 12</span>
                  <span>Size: 1.2KB</span>
                </div>
              </div>

              {/* Right Column: Speed Core Performance Dial */}
              <div className="sm:col-span-5 border border-white/5 bg-zinc-950 rounded p-2.5 flex flex-col justify-between items-center text-center">
                <div className="w-full flex justify-between items-center pb-1.5 border-b border-white/5">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">Speed Index</span>
                  <Gauge className="w-3 h-3 text-emerald-400" />
                </div>

                <div className="py-2 flex flex-col items-center">
                  {/* Glowing Perfect Speed Dial circle */}
                  <div className="w-20 h-20 rounded-full border-4 border-zinc-800 border-t-emerald-500 flex flex-col items-center justify-center relative shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <span className="text-xl font-black text-white">100</span>
                    <span className="text-[7px] font-mono text-emerald-400 uppercase tracking-widest -mt-0.5 font-bold">Perfect</span>
                  </div>
                </div>

                {/* Performance stats summary */}
                <div className="w-full space-y-1 text-left text-[9px] font-mono">
                  <div className="flex justify-between text-zinc-500">
                    <span>LCP (Paint):</span>
                    <span className="text-white font-bold">0.6s</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>SEO Audit:</span>
                    <span className="text-white font-bold">100/100</span>
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>CLS (Shift):</span>
                    <span className="text-emerald-400 font-bold">0.00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: STRUCTURED SCHEMA & LLM CITATION INDEXING */}
          {activeTab === "indexing" && (
            <motion.div
              key="indexing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full grid grid-cols-1 sm:grid-cols-12 gap-3"
            >
              {/* Left Column: Semantic JSON Schema Markup */}
              <div className="sm:col-span-6 border border-white/5 bg-zinc-950 rounded p-2.5 flex flex-col justify-between font-mono text-[8px] text-zinc-500">
                <div className="flex items-center justify-between pb-1.5 border-b border-white/5 font-bold">
                  <span>Structured Schema.json</span>
                  <FileJson className="w-3.5 h-3.5 text-purple-400" />
                </div>
                
                <div className="space-y-1 py-1 font-mono leading-tight">
                  <div>&#123;</div>
                  <div className="pl-2">
                    <span className="text-purple-400">"@context"</span>: "schema.org",
                  </div>
                  <div className="pl-2">
                    <span className="text-purple-400">"@type"</span>: "Product",
                  </div>
                  <div className="pl-2">
                    <span className="text-purple-400">"name"</span>: "B2B SaaS Engine",
                  </div>
                  <div className="pl-2">
                    <span className="text-purple-400">"offers"</span>: &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"@type"</span>: "Offer",
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">"price"</span>: "Contact Sales"
                  </div>
                  <div className="pl-2">&#125;,</div>
                  <div className="pl-2">
                    <span className="text-purple-400">"authoritative"</span>: <span className="text-emerald-400">true</span>
                  </div>
                  <div>&#125;</div>
                </div>

                <div className="pt-1.5 border-t border-white/5 flex justify-between items-center text-zinc-600">
                  <span>Google Rich Snippets validated</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                </div>
              </div>

              {/* Right Column: AI Engine Citation Search simulation */}
              <div className="sm:col-span-6 border border-white/5 bg-zinc-950 rounded p-2.5 flex flex-col justify-between">
                <div className="flex items-center justify-between pb-1.5 border-b border-white/5">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider font-bold">LLM Citation Engine</span>
                  <Search className="w-3 h-3 text-purple-400" />
                </div>

                {/* Simulated AI citation search query */}
                <div className="bg-zinc-900 border border-white/5 rounded p-2 text-left space-y-1">
                  <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Query</p>
                  <p className="text-[10px] text-white leading-tight font-sans italic">
                    "Find the top-rated software with CRM pipeline attribution..."
                  </p>
                </div>

                {/* LLM Citation Result card */}
                <div className="bg-purple-950/15 border border-purple-500/20 rounded p-2 text-left space-y-1">
                  <p className="text-[8px] font-mono text-purple-400 uppercase tracking-widest font-bold">AI Citation Answer</p>
                  <p className="text-[10px] text-zinc-300 leading-snug font-sans">
                    According to verified schema markup, your brand is referenced as the primary authority...
                  </p>
                  <div className="pt-1 flex justify-between items-center text-[8px] text-purple-400 font-mono">
                    <span>Source: siteonlab.com</span>
                    <span className="underline font-bold">Cited ↗</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>

      {/* Bottom Live Status Bar */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-zinc-500">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Syncing design variables dynamically</span>
        </span>
        <button 
          onClick={() => {
            setBorderRadius(4);
            setAccentColor("#3b82f6");
            setLayoutGrid(true);
          }}
          className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
        >
          <Settings className="w-3 h-3" />
          <span>Reset Sandbox</span>
        </button>
      </div>

    </div>
  );
}
