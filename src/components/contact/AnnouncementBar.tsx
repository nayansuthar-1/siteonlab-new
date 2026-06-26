"use client";

import { Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  onBookMeeting: () => void;
}

export default function AnnouncementBar({ onBookMeeting }: AnnouncementBarProps) {
  return (
    <div 
      id="announcement-bar"
      className="sticky top-0 z-50 w-full bg-blue-600 border-b border-blue-500/30 py-2.5 px-6 flex items-center justify-center text-center"
    >
      <p className="text-[11px] font-semibold text-white uppercase tracking-widest flex flex-col sm:flex-row items-center justify-center gap-2">
        <span className="flex items-center gap-1.5 justify-center">
          <Sparkles className="w-3 h-3 text-white/80 animate-pulse" />
          Now helping B2B teams get found in Google — and cited in ChatGPT, Perplexity & AI Overviews.
        </span>
        <button 
          onClick={onBookMeeting}
          className="sm:ml-4 bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded text-[10px] backdrop-blur-sm transition-all font-semibold uppercase tracking-wider cursor-pointer"
        >
          Book a Meeting
        </button>
      </p>
    </div>
  );
}
