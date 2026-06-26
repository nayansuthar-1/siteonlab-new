"use client";

import React, { useState, useEffect } from "react";
import { ServicePageData } from "../types";
import LucideIcon from "./LucideIcon";

interface StudioSidebarProps {
  data: ServicePageData;
  onChange: (updatedData: ServicePageData) => void;
  onSelectPreset: (presetKey: string) => void;
  onGenerateCustom: (idea: string) => Promise<void>;
  aiLoading: boolean;
  activePreset: string;
}

const B2B_TIPS = [
  "SiteOnLab Copy Tip: Optimize copy for buyer intent, not high generic search volume.",
  "SiteOnLab Copy Tip: Focus on CAC efficiency and qualified pipeline over vanity metrics.",
  "SiteOnLab Copy Tip: AI answer engines look for authoritative entities and Q&A formats.",
  "SiteOnLab Copy Tip: Write for the whole buying committee (security, legal, and CFO).",
  "SiteOnLab Copy Tip: Frame client wins as a direct pipeline outcome (+X% qualified demos)."
];

export default function StudioSidebar({
  data,
  onChange,
  onSelectPreset,
  onGenerateCustom,
  aiLoading,
  activePreset
}: StudioSidebarProps) {
  const [activeTab, setActiveTab] = useState<string>("ai");
  const [customIdea, setCustomIdea] = useState<string>("");
  const [tipIndex, setTipIndex] = useState(0);
  const [successMsg, setSuccessMsg] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Cycling copywriting tips when AI is generating
  useEffect(() => {
    let interval: any;
    if (aiLoading) {
      interval = setInterval(() => {
        setTipIndex((prev) => (prev + 1) % B2B_TIPS.length);
      }, 3500);
    } else {
      setTipIndex(0);
    }
    return () => clearInterval(interval);
  }, [aiLoading]);

  const handleFieldChange = (field: keyof ServicePageData, value: any) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  const handleNestedFieldChange = (parentField: keyof ServicePageData, index: number, nestedField: string, value: any) => {
    const list = Array.isArray(data[parentField]) ? [...(data[parentField] as any[])] : [];
    if (list[index]) {
      list[index] = {
        ...list[index],
        [nestedField]: value
      };
    }
    onChange({
      ...data,
      [parentField]: list
    });
  };

  const handleTestimonialChange = (nestedField: string, value: any) => {
    onChange({
      ...data,
      testimonial: {
        ...data.testimonial,
        [nestedField]: value
      }
    });
  };

  const triggerCustomGen = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customIdea.trim()) return;
    await onGenerateCustom(customIdea);
    setCustomIdea("");
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const generateMarkdownExport = () => {
    return `# Service Landing Page Copy: ${data.serviceName}
## SEO Metadata
- **Title Tag:** ${data.seoTitle}
- **Meta Description:** ${data.seoDescription}

---

## 1. Hero Section
- **Category:** ${data.serviceCategory}
- **Service Name:** ${data.serviceName}
- **H1:** The ${data.serviceName} agency that drives ${data.outcome1}, ${data.outcome2}, and ${data.outcome3}.
- **Subheading:** SiteOnLab helps ${data.icp} turn ${data.serviceChannel} into a measurable revenue channel. We help you ${data.primaryBenefit}, ${data.secondaryBenefit}, and ${data.conversionBenefit} — measured by qualified pipeline, not vanity metrics.
- **Primary CTA:** ${data.primaryCtaText}
- **Secondary CTA:** ${data.secondaryCtaText}

## 2. Trust Metrics
${data.trustMetrics?.map((m) => `- **${m.value}:** ${m.label}`).join("\n")}

## 3. Service Overview
- **H2:** ${data.overviewH2}
- **Paragraph:** ${data.overviewParagraph}

### Service Components
${data.serviceComponents?.map((c) => `### ${c.title}\n*Icon: ${c.icon}*\n${c.description}`).join("\n\n")}

## 4. Process Section
- **H2:** ${data.processH2}
${data.processSteps?.map((s) => `### Step ${s.number}: ${s.title} (${s.timeline})\n${s.description}`).join("\n")}

## 5. Why Choose Us Section
- **H2:** ${data.whyChooseUsH2}
- **Paragraph:** ${data.whyChooseUsParagraph}
${data.differentiators?.map((d) => `### ${d.title}\n*Icon: ${d.icon}*\n${d.description}`).join("\n\n")}

## 6. Case Studies Section
- **H2:** ${data.caseStudiesH2}
${data.caseStudies?.map((cs) => `### [${cs.industry}] - ${cs.headline} (${cs.timeline})\n- **Challenge & Result:** ${cs.description}\n- **Metric:** ${cs.metric}`).join("\n\n")}

## 7. Testimonial Section
> "${data.testimonial?.quote}"
> 
> — **${data.testimonial?.author}**, ${data.testimonial?.title} at ${data.testimonial?.companyType}
> *(Proof: ${data.testimonial?.proofLine})*

## 8. Related Services Section
- **H2:** ${data.relatedServicesH2}
${data.relatedServices?.map((r) => `### ${r.title}\n${r.description}`).join("\n\n")}

## 9. FAQ Section
- **H2:** ${data.faqH2}
${data.faqs?.map((f) => `### Q: ${f.question}\n**A:** ${f.answer}`).join("\n\n")}

## 10. Final CTA Section
- **H2:** ${data.finalCtaH2}
- **Paragraph:** ${data.finalCtaCopy}
- **Primary CTA:** ${data.finalPrimaryCta}
- **Secondary CTA:** ${data.finalSecondaryCta}
`;
  };

  const tabs = [
    { id: "ai", label: "AI Copilot", icon: "Sparkles" },
    { id: "hero", label: "Hero & SEO", icon: "Layers" },
    { id: "overview", label: "Overview", icon: "Grid" },
    { id: "process", label: "Process", icon: "TrendingUp" },
    { id: "cases", label: "Cases & Trust", icon: "Award" },
    { id: "faq", label: "FAQs & Related", icon: "MessageSquare" },
    { id: "export", label: "Export", icon: "FileText" }
  ];

  return (
    <div className="flex flex-col h-full bg-gray-950 border-r border-gray-900/80 text-gray-300 overflow-hidden font-sans">
      {/* Header */}
      <div className="p-4 border-b border-gray-900/60 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LucideIcon name="Settings" className="text-blue-400" size={18} />
          <span className="font-display font-bold text-sm tracking-wide uppercase text-white">
            Page Studio
          </span>
        </div>
        <div className="text-xs font-mono px-2 py-0.5 rounded-md bg-gray-900 text-gray-500 border border-gray-800/40">
          v4.0
        </div>
      </div>

      {/* Preset Fast Select */}
      <div className="p-4 border-b border-gray-900/40 bg-gray-900/10">
        <div className="text-[11px] font-mono uppercase tracking-widest text-gray-500 mb-2">Preset Templates</div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => onSelectPreset("seo")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
              activePreset === "seo"
                ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                : "bg-gray-900 border-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            B2B SEO & AI
          </button>
          <button
            onClick={() => onSelectPreset("abm")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
              activePreset === "abm"
                ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                : "bg-gray-900 border-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            B2B ABM & Ads
          </button>
          <button
            onClick={() => onSelectPreset("content")}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
              activePreset === "content"
                ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
                : "bg-gray-900 border-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            B2B Content
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-gray-900/50 bg-gray-950/80 px-2 py-1 overflow-x-auto scrollbar-none shrink-0 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 text-xs font-medium rounded-lg flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer ${
              activeTab === tab.id
                ? "bg-gray-900 text-blue-400 font-semibold"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <LucideIcon name={tab.icon} size={14} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Form Fields / Panel Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* TAB 1: AI COPILOT GENERATOR */}
        {activeTab === "ai" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/5 to-zinc-500/5 border border-blue-500/10">
              <h3 className="font-display font-bold text-white text-base mb-2 flex items-center gap-2">
                <LucideIcon name="Sparkles" className="text-blue-400" size={18} />
                B2B AI Copywriter
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Describe any custom B2B service or consulting category below. Gemini will instantly write structured, high-converting copy across all 10 landing page sections following SiteOnLab's honest, pipeline-first voice.
              </p>
            </div>

            <form onSubmit={triggerCustomGen} className="space-y-3">
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                Describe Your B2B Service
              </label>
              <textarea
                value={customIdea}
                onChange={(e) => setCustomIdea(e.target.value)}
                disabled={aiLoading}
                placeholder="e.g. Conversion Rate Optimization (CRO) for Series A SaaS, or Fractional RevOps & Hubspot Implementation..."
                className="w-full h-24 p-3 rounded-xl bg-gray-900 border border-gray-800 text-sm text-gray-100 placeholder-gray-600 focus:outline-hidden focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none"
              />
              <button
                type="submit"
                disabled={aiLoading || !customIdea.trim()}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-gray-900 disabled:text-gray-600 text-white font-semibold text-sm transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/10"
              >
                {aiLoading ? (
                  <>
                    <LucideIcon name="RefreshCw" className="animate-spin text-white" size={16} />
                    Analyzing & Copywriting...
                  </>
                ) : (
                  <>
                    <LucideIcon name="Sparkles" className="text-white" size={16} />
                    Generate Landing Page Copy
                  </>
                )}
              </button>
            </form>

            {aiLoading && (
              <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800/60 text-center animate-pulse">
                <div className="text-xs text-blue-400 font-mono italic">
                  {B2B_TIPS[tipIndex]}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: HERO & SEO */}
        {activeTab === "hero" && (
          <div className="space-y-4">
            <div className="p-3 rounded-xl bg-gray-900/40 border border-gray-800/50">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                <LucideIcon name="Search" size={13} />
                SEO Target Audit Fields
              </h4>
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block text-gray-500 mb-1">Title Tag</label>
                  <input
                    type="text"
                    value={data.seoTitle}
                    onChange={(e) => handleFieldChange("seoTitle", e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                  />
                  <span className="text-[10px] text-gray-600 mt-0.5 block">{data.seoTitle?.length || 0} / 60 characters standard</span>
                </div>
                <div>
                  <label className="block text-gray-500 mb-1">Meta Description</label>
                  <textarea
                    value={data.seoDescription}
                    onChange={(e) => handleFieldChange("seoDescription", e.target.value)}
                    className="w-full h-16 p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden resize-none"
                  />
                  <span className="text-[10px] text-gray-600 mt-0.5 block">{data.seoDescription?.length || 0} / 160 characters standard</span>
                </div>
              </div>
            </div>

            <hr className="border-gray-900" />

            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Hero Copy Elements</h4>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Service Category (Eyebrow)</label>
                <input
                  type="text"
                  value={data.serviceCategory}
                  onChange={(e) => handleFieldChange("serviceCategory", e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Service Name</label>
                <input
                  type="text"
                  value={data.serviceName}
                  onChange={(e) => handleFieldChange("serviceName", e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">Outcome 1</label>
                  <input
                    type="text"
                    value={data.outcome1}
                    onChange={(e) => handleFieldChange("outcome1", e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">Outcome 2</label>
                  <input
                    type="text"
                    value={data.outcome2}
                    onChange={(e) => handleFieldChange("outcome2", e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">Outcome 3</label>
                  <input
                    type="text"
                    value={data.outcome3}
                    onChange={(e) => handleFieldChange("outcome3", e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Target ICP Description</label>
                <input
                  type="text"
                  value={data.icp}
                  onChange={(e) => handleFieldChange("icp", e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Service Channel</label>
                <input
                  type="text"
                  value={data.serviceChannel}
                  onChange={(e) => handleFieldChange("serviceChannel", e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Primary Benefit Action</label>
                <input
                  type="text"
                  value={data.primaryBenefit}
                  onChange={(e) => handleFieldChange("primaryBenefit", e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Secondary Benefit Action</label>
                <input
                  type="text"
                  value={data.secondaryBenefit}
                  onChange={(e) => handleFieldChange("secondaryBenefit", e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">Conversion Benefit Action</label>
                <input
                  type="text"
                  value={data.conversionBenefit}
                  onChange={(e) => handleFieldChange("conversionBenefit", e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Primary CTA Button</label>
                  <input
                    type="text"
                    value={data.primaryCtaText}
                    onChange={(e) => handleFieldChange("primaryCtaText", e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Secondary CTA Button</label>
                  <input
                    type="text"
                    value={data.secondaryCtaText}
                    onChange={(e) => handleFieldChange("secondaryCtaText", e.target.value)}
                    className="w-full p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Overview Section Copy</h4>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Overview H2</label>
              <input
                type="text"
                value={data.overviewH2}
                onChange={(e) => handleFieldChange("overviewH2", e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Overview Strategic Paragraph</label>
              <textarea
                value={data.overviewParagraph}
                onChange={(e) => handleFieldChange("overviewParagraph", e.target.value)}
                className="w-full h-24 p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden resize-none"
              />
            </div>

            <hr className="border-gray-900" />

            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">5-6 Service Components</h4>
            <div className="space-y-4">
              {data.serviceComponents?.map((component, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-900/60 border border-gray-800/40 space-y-2">
                  <div className="text-[10px] font-mono text-gray-500">Component #{idx + 1}</div>
                  <div>
                    <label className="block text-[11px] text-gray-500 mb-1">Title</label>
                    <input
                      type="text"
                      value={component.title}
                      onChange={(e) => handleNestedFieldChange("serviceComponents", idx, "title", e.target.value)}
                      className="w-full p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-500 mb-1">Description</label>
                    <textarea
                      value={component.description}
                      onChange={(e) => handleNestedFieldChange("serviceComponents", idx, "description", e.target.value)}
                      className="w-full h-16 p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-500 mb-1">Lucide Icon Key</label>
                    <input
                      type="text"
                      value={component.icon}
                      onChange={(e) => handleNestedFieldChange("serviceComponents", idx, "icon", e.target.value)}
                      className="w-full p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PROCESS */}
        {activeTab === "process" && (
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Process Section Copy</h4>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Process H2</label>
              <input
                type="text"
                value={data.processH2}
                onChange={(e) => handleFieldChange("processH2", e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
              />
            </div>

            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block"> Chronological Steps (01 to 04)</span>
              {data.processSteps?.map((step, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-900/60 border border-gray-800/40 space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                    <span>Step #{step.number}</span>
                    <span className="text-blue-400 font-semibold">{step.timeline}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <label className="block text-[10px] text-gray-500 mb-1">Title</label>
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) => handleNestedFieldChange("processSteps", idx, "title", e.target.value)}
                        className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-500 mb-1">Timeline</label>
                      <input
                        type="text"
                        value={step.timeline}
                        onChange={(e) => handleNestedFieldChange("processSteps", idx, "timeline", e.target.value)}
                        className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Description</label>
                    <textarea
                      value={step.description}
                      onChange={(e) => handleNestedFieldChange("processSteps", idx, "description", e.target.value)}
                      className="w-full h-12 p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-900" />

            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Why Choose Us Copy</h4>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Why Choose Us H2</label>
              <input
                type="text"
                value={data.whyChooseUsH2}
                onChange={(e) => handleFieldChange("whyChooseUsH2", e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Why Choose Us Strategic Paragraph</label>
              <textarea
                value={data.whyChooseUsParagraph}
                onChange={(e) => handleFieldChange("whyChooseUsParagraph", e.target.value)}
                className="w-full h-20 p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden resize-none"
              />
            </div>

            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold block">4 Differentiator Cards</span>
            <div className="space-y-4">
              {data.differentiators?.map((diff, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-900/60 border border-gray-800/40 space-y-2">
                  <div className="text-[10px] font-mono text-gray-500">Differentiator #{idx + 1}</div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Title</label>
                    <input
                      type="text"
                      value={diff.title}
                      onChange={(e) => handleNestedFieldChange("differentiators", idx, "title", e.target.value)}
                      className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Description</label>
                    <textarea
                      value={diff.description}
                      onChange={(e) => handleNestedFieldChange("differentiators", idx, "description", e.target.value)}
                      className="w-full h-12 p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Icon Key</label>
                    <input
                      type="text"
                      value={diff.icon}
                      onChange={(e) => handleNestedFieldChange("differentiators", idx, "icon", e.target.value)}
                      className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:ring-1 focus:ring-blue-500 focus:outline-hidden font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CASES & TRUST */}
        {activeTab === "cases" && (
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">4 Trust Metrics</h4>
            <div className="grid grid-cols-2 gap-3">
              {data.trustMetrics?.map((metric, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-gray-900 border border-gray-800/80 space-y-2">
                  <span className="text-[10px] font-mono text-gray-500">Metric #{idx + 1}</span>
                  <input
                    type="text"
                    value={metric.value}
                    placeholder="Value (e.g. 300%)"
                    onChange={(e) => handleNestedFieldChange("trustMetrics", idx, "value", e.target.value)}
                    className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-blue-400 font-bold focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                  />
                  <input
                    type="text"
                    value={metric.label}
                    placeholder="Description label"
                    onChange={(e) => handleNestedFieldChange("trustMetrics", idx, "label", e.target.value)}
                    className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>
              ))}
            </div>

            <hr className="border-gray-900" />

            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Case Studies Copy</h4>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Case Studies H2</label>
              <input
                type="text"
                value={data.caseStudiesH2}
                onChange={(e) => handleFieldChange("caseStudiesH2", e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200"
              />
            </div>

            <div className="space-y-4">
              {data.caseStudies?.map((cs, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-900/60 border border-gray-800/40 space-y-2">
                  <div className="text-[10px] font-mono text-gray-500">Case Study Card #{idx + 1}</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-gray-500 mb-1">Industry</label>
                      <input
                        type="text"
                        value={cs.industry}
                        onChange={(e) => handleNestedFieldChange("caseStudies", idx, "industry", e.target.value)}
                        className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-500 mb-1">Timeline</label>
                      <input
                        type="text"
                        value={cs.timeline}
                        onChange={(e) => handleNestedFieldChange("caseStudies", idx, "timeline", e.target.value)}
                        className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Result Headline</label>
                    <input
                      type="text"
                      value={cs.headline}
                      onChange={(e) => handleNestedFieldChange("caseStudies", idx, "headline", e.target.value)}
                      className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Challenge & Achievement Copy</label>
                    <textarea
                      value={cs.description}
                      onChange={(e) => handleNestedFieldChange("caseStudies", idx, "description", e.target.value)}
                      className="w-full h-14 p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Bold Performance Metric</label>
                    <input
                      type="text"
                      value={cs.metric}
                      onChange={(e) => handleNestedFieldChange("caseStudies", idx, "metric", e.target.value)}
                      className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-blue-400 font-bold focus:outline-hidden"
                    />
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-900" />

            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Testimonial Data</h4>
            <div className="p-3 rounded-lg bg-gray-900/40 border border-gray-800/40 space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Client Quote</label>
                <textarea
                  value={data.testimonial?.quote}
                  onChange={(e) => handleTestimonialChange("quote", e.target.value)}
                  className="w-full h-20 p-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-200 resize-none focus:outline-hidden"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">Author Name</label>
                  <input
                    type="text"
                    value={data.testimonial?.author}
                    onChange={(e) => handleTestimonialChange("author", e.target.value)}
                    className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">Author Title</label>
                  <input
                    type="text"
                    value={data.testimonial?.title}
                    onChange={(e) => handleTestimonialChange("title", e.target.value)}
                    className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">Company Type</label>
                  <input
                    type="text"
                    value={data.testimonial?.companyType}
                    onChange={(e) => handleTestimonialChange("companyType", e.target.value)}
                    className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-gray-500 mb-1">Key Proof Line</label>
                  <input
                    type="text"
                    value={data.testimonial?.proofLine}
                    onChange={(e) => handleTestimonialChange("proofLine", e.target.value)}
                    className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-blue-400 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: FAQs & RELATED */}
        {activeTab === "faq" && (
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Related Services Copy</h4>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Related Services H2</label>
              <input
                type="text"
                value={data.relatedServicesH2}
                onChange={(e) => handleFieldChange("relatedServicesH2", e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200"
              />
            </div>

            <div className="space-y-4">
              {data.relatedServices?.map((rel, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-900/60 border border-gray-800/40 space-y-2">
                  <div className="text-[10px] font-mono text-gray-500">Service Option #{idx + 1}</div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Complementary Title</label>
                    <input
                      type="text"
                      value={rel.title}
                      onChange={(e) => handleNestedFieldChange("relatedServices", idx, "title", e.target.value)}
                      className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Complementary Description</label>
                    <textarea
                      value={rel.description}
                      onChange={(e) => handleNestedFieldChange("relatedServices", idx, "description", e.target.value)}
                      className="w-full h-12 p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Icon Key</label>
                    <input
                      type="text"
                      value={rel.icon}
                      onChange={(e) => handleNestedFieldChange("relatedServices", idx, "icon", e.target.value)}
                      className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-200 focus:outline-hidden font-mono"
                    />
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-900" />

            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">9-Step FAQ Accordion Editor</h4>
            <div>
              <label className="block text-xs text-gray-500 mb-1">FAQ H2</label>
              <input
                type="text"
                value={data.faqH2}
                onChange={(e) => handleFieldChange("faqH2", e.target.value)}
                className="w-full p-2.5 rounded-lg bg-gray-900 border border-gray-800 text-sm text-gray-200"
              />
            </div>

            <div className="space-y-4">
              {data.faqs?.map((faq, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-gray-900/60 border border-gray-800/40 space-y-2">
                  <div className="text-[10px] font-mono text-gray-500">Question #{idx + 1}</div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Question</label>
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => handleNestedFieldChange("faqs", idx, "question", e.target.value)}
                      className="w-full p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-100 focus:outline-hidden font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-500 mb-1">Detailed Objection-Handling Answer</label>
                    <textarea
                      value={faq.answer}
                      onChange={(e) => handleNestedFieldChange("faqs", idx, "answer", e.target.value)}
                      className="w-full h-24 p-1.5 rounded-md bg-gray-900 border border-gray-800 text-xs text-gray-400 focus:outline-hidden resize-none leading-relaxed"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: EXPORT */}
        {activeTab === "export" && (
          <div className="space-y-6">
            <div className="p-3 rounded-xl bg-gray-900/50 border border-gray-800/50 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                <LucideIcon name="ShieldCheck" size={14} />
                Copywriting Delivery File
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                SiteOnLab is built to supply copy structured for lightning-fast implementation. Copy any structured export formats below to paste directly into Notion, HubSpot, or Webflow.
              </p>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs font-semibold text-gray-400">1. Raw JSON Dataset</h5>
              <button
                onClick={() => copyToClipboard(JSON.stringify(data, null, 2), "json")}
                className="w-full py-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 text-xs text-gray-300 font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <LucideIcon name={copiedKey === "json" ? "Check" : "Copy"} className={copiedKey === "json" ? "text-blue-400" : ""} size={14} />
                {copiedKey === "json" ? "Copied Raw JSON!" : "Copy Raw JSON Data"}
              </button>

              <h5 className="text-xs font-semibold text-gray-400 pt-2">2. Beautiful Markdown Delivery File</h5>
              <button
                onClick={() => copyToClipboard(generateMarkdownExport(), "md")}
                className="w-full py-2.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 text-xs text-gray-300 font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <LucideIcon name={copiedKey === "md" ? "Check" : "Copy"} className={copiedKey === "md" ? "text-blue-400" : ""} size={14} />
                {copiedKey === "md" ? "Copied Markdown Document!" : "Copy Markdown Document"}
              </button>
            </div>

            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 block font-semibold">CRM Readiness Indicator</span>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                All copy blocks adhere perfectly to dynamic CRM tagging properties, guaranteeing that variables mapping works out of the box when setting up sales tracking integrations.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
