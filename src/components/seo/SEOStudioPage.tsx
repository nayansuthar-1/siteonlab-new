"use client";

import React, { useState } from "react";
import { ServicePageData } from "./types";
import { presets } from "./data";
import StudioSidebar from "./components/StudioSidebar";
import ServicePagePreview from "./components/ServicePagePreview";
import LucideIcon from "./components/LucideIcon";

export default function App() {
  // Initialize with B2B SEO Agency Preset as requested by the user
  const [activeData, setActiveData] = useState<ServicePageData>(presets.seo);
  const [activePresetKey, setActivePresetKey] = useState<string>("seo");
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(true);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleSelectPreset = (key: string) => {
    if (presets[key]) {
      setActiveData(presets[key]);
      setActivePresetKey(key);
      showToast(`Loaded ${presets[key].serviceName} preset template successfully!`);
    }
  };

  const handleGenerateCustom = async (idea: string) => {
    setAiLoading(true);
    showToast("SiteOnLab AI Copilot: Initiating copywriting analysis...", "success");

    try {
      const response = await fetch("/api/generate-service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ customServiceIdea: idea })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to process copy generation");
      }

      setActiveData(result.data);
      setActivePresetKey("custom");
      showToast(`AI Copywriter: Successfully drafted full landing page for "${result.data.serviceName}"!`, "success");
    } catch (err: any) {
      console.error(err);
      showToast(err.message || "Unable to connect to Gemini API. Please make sure GEMINI_API_KEY is configured in Settings > Secrets.", "error");
    } finally {
      setAiLoading(false);
    }
  };

  const handleCtaClick = (ctaType: string) => {
    showToast(`Inbound conversion signal: "${ctaType}" action successfully captured inside marketing attribution workflow!`);
  };

  return (
    <div className="theme-seo flex h-screen w-screen overflow-hidden bg-gray-950 font-sans text-gray-200">
      
      {/* Studio Editor Sidebar */}
      {showSidebar && (
        <div className="w-full md:w-[420px] shrink-0 h-full border-r border-gray-900 flex flex-col z-20">
          <StudioSidebar
            data={activeData}
            onChange={setActiveData}
            onSelectPreset={handleSelectPreset}
            onGenerateCustom={handleGenerateCustom}
            aiLoading={aiLoading}
            activePreset={activePresetKey}
          />
        </div>
      )}

      {/* Primary Workspace View Area */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        
        {/* Floating View Controller Panel (Aesthetic overlay to toggle fullscreen presentation) */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center bg-gray-950/90 backdrop-blur-md border border-gray-800/80 rounded-xl px-3 py-2 shadow-2xl space-x-2">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="p-2 text-gray-400 hover:text-blue-400 rounded-lg hover:bg-gray-900 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
            title={showSidebar ? "Fullscreen Mode" : "Split Mode"}
          >
            <LucideIcon name={showSidebar ? "Eye" : "Settings"} size={16} />
            <span>{showSidebar ? "Presentation Only" : "Open Studio"}</span>
          </button>
        </div>

        {/* Live Interactive Preview Screen */}
        <div className="flex-1 overflow-y-auto">
          <ServicePagePreview
            data={activeData}
            onCtaClick={handleCtaClick}
          />
        </div>
      </div>

      {/* Floating Modern Toast Alerts */}
      {notification && (
        <div className="fixed top-6 right-6 z-50 max-w-sm p-4 rounded-xl shadow-2xl bg-gray-950 border flex items-start gap-3 border-gray-800 animate-slide-in">
          <div className={`mt-0.5 rounded-full p-1 ${notification.type === "success" ? "bg-blue-500/10 text-blue-400" : "bg-red-500/10 text-red-400"}`}>
            <LucideIcon name={notification.type === "success" ? "Sparkles" : "ShieldAlert"} size={16} />
          </div>
          <div className="flex-1">
            <h5 className="text-xs font-bold text-white uppercase tracking-wide">
              {notification.type === "success" ? "Workspace System Signal" : "Workspace System Failure"}
            </h5>
            <p className="text-xs text-gray-400 leading-relaxed mt-1">
              {notification.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
