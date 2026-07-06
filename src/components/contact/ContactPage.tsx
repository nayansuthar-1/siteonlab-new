"use client";

import { useState } from "react";
import ContactHero from "./ContactHero";
import MainContactBlock from "./MainContactBlock";
import TrustStrip from "./TrustStrip";

export default function ContactPage() {
  const [directBookOpen, setDirectBookOpen] = useState(false);

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
    </div>
  );
}
