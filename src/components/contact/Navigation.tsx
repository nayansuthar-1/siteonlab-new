"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavigationProps {
  onBookCall: () => void;
}

export default function Navigation({ onBookCall }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Framework", href: "#framework" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <nav
      id="main-nav"
      className={`sticky top-[45px] z-40 w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-md py-4 border-slate-800 shadow-lg shadow-black/25"
          : "bg-[#0a0f1e]/80 backdrop-blur-sm py-5 border-slate-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center font-display text-white font-bold text-sm transition-all group-hover:bg-blue-600">
                S
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white transition-colors">
                HybridMonks
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={onBookCall}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              Book a Strategy Call
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[115px] z-30 w-full bg-[#0a0f1e]/95 backdrop-blur-lg border-b border-slate-800 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookCall();
              }}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
