"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FileCode, Terminal } from "lucide-react";
import ContactHero from "./ContactHero";
import MainContactBlock from "./MainContactBlock";
import TrustStrip from "./TrustStrip";
import ExportModal from "./ExportModal";

export default function ContactPage() {
  const [directBookOpen, setDirectBookOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const triggerDirectBooking = () => {
    setDirectBookOpen(true);
  };

  return (
    <div className="theme-contact bg-brand-dark min-h-screen text-brand-text flex flex-col relative font-sans select-none antialiased">
      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* 3. Compact Contact Hero */}
        <ContactHero />

        {/* 4. Core Main Contact Block (Two-column: Form / Direct Cards + Modals) */}
        <MainContactBlock
          onDirectBook={triggerDirectBooking}
          directBookTrigger={directBookOpen}
          onDirectBookClose={() => setDirectBookOpen(false)}
        />

        {/* 5. Thin Trust Strip */}
        <TrustStrip />
      </main>

      {/* DELIVERABLE EXPORT PANEL FLOATING ACTOR */}
      <div className="fixed bottom-6 right-6 z-30">
        <motion.button
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- `shadow` isn't a valid motion prop (no-op at runtime); kept verbatim from the AI Studio source.
          whileHover={{ scale: 1.05, shadow: "0 0 25px rgba(6,182,212,0.6)" } as any}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExportOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-brand-accent to-brand-cyan text-white text-xs font-bold py-3 px-5 rounded-full shadow-[0_8px_30px_rgba(59,130,246,0.4)] border border-cyan-400/20 cursor-pointer"
        >
          <FileCode className="w-4 h-4 animate-bounce" />
          <span>Get Standalone HTML File</span>
        </motion.button>
      </div>

      {/* Interactive Export Center Overlay Modal */}
      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} />
    </div>
  );
}
