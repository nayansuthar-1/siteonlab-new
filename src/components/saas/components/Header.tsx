"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Framework", href: "#framework", isActive: false },
    { label: "Services", href: "#services", isActive: false },
    { label: "FAQ", href: "#faq", isActive: false },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* 1. STICKY ANNOUNCEMENT BAR */}
      <div 
        id="announcement-bar"
        className="w-full bg-blue-600 text-white text-[10px] sm:text-xs py-2 px-6 flex justify-between items-center font-semibold tracking-wider uppercase sticky top-0 z-50 transition-all duration-300 border-b border-blue-500/20"
      >
        <span>
          NOW HELPING B2B TEAMS GET CITED IN CHATGPT, PERPLEXITY & AI OVERVIEWS
        </span>
        <a 
          href="#ai-visibility-assessment"
          onClick={(e) => handleNavClick(e, "#ai-visibility-assessment")}
          className="bg-white/20 px-2 py-0.5 rounded-sm hover:bg-white/30 transition-colors uppercase text-[9px] sm:text-[10px] tracking-wider"
        >
          Get Free Audit
        </a>
      </div>

      {/* 2. STICKY NAVIGATION BAR */}
      <header 
        id="main-navigation"
        className={`w-full sticky top-[30px] z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-950/95 backdrop-blur border-b border-slate-800/50 py-3 shadow-lg" 
            : "bg-slate-950/80 backdrop-blur border-b border-slate-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-display font-bold text-white text-xl tracking-tighter">
              SiteOn<span className="text-blue-500">Lab</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-[10px] sm:text-xs uppercase tracking-widest font-medium">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-colors hover:text-white ${
                  item.isActive ? "text-blue-500 font-bold" : "text-slate-400"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#ai-visibility-assessment"
              onClick={(e) => handleNavClick(e, "#ai-visibility-assessment")}
              className="border border-blue-500 text-blue-500 px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-200"
            >
              Get Free Audit
            </a>
          </div>

          {/* Mobile hamburger menu trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-sm hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-800/50 bg-slate-950 px-6 py-4 space-y-3 overflow-hidden shadow-xl"
            >
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block py-2 text-xs uppercase tracking-widest font-medium transition-colors ${
                    item.isActive 
                      ? "text-blue-500 font-bold border-l-2 border-blue-500 pl-2" 
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-800/50">
                <a
                  href="#ai-visibility-assessment"
                  onClick={(e) => handleNavClick(e, "#ai-visibility-assessment")}
                  className="w-full flex items-center justify-center py-2 px-4 rounded-sm border border-blue-500 text-blue-500 text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-colors"
                >
                  Get Free Audit
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
