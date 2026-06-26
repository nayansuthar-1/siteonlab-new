"use client";

import { useState } from "react";
import { presets } from "./data";
import ServicePagePreview from "./components/ServicePagePreview";
import LucideIcon from "./components/LucideIcon";

export default function SEOStudioPage() {
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const handleCtaClick = (ctaType: string) => {
    showToast(`Inbound conversion signal: "${ctaType}" action successfully captured inside marketing attribution workflow!`);
  };

  return (
    <div className="theme-seo min-h-screen bg-gray-950 font-sans text-gray-200">

      {/* Live SEO service page (B2B SEO preset) — full width, no studio sidebar */}
      <ServicePagePreview
        data={presets.seo}
        onCtaClick={handleCtaClick}
      />

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
