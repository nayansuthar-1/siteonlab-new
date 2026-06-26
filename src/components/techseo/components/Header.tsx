"use client";

import { Cpu } from "lucide-react";

interface HeaderProps {
  onRequestBlueprint: () => void;
}

export default function Header({ onRequestBlueprint }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white transition-transform group-hover:scale-105">
            S
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight text-white text-lg">
              SiteOnLab
            </span>
          </div>
        </a>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-gray-400">
          <a href="#overview" className="transition-colors hover:text-white">
            Services
          </a>
          <a href="#process" className="transition-colors hover:text-white">
            Our Process
          </a>
          <a href="#why-us" className="transition-colors hover:text-white">
            Why Us
          </a>
          <a href="#cases" className="transition-colors hover:text-white">
            Case Studies
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            FAQs
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onRequestBlueprint}
            className="px-4 py-1.5 border border-blue-500/50 rounded-full text-xs font-mono uppercase tracking-wider text-blue-400 hover:bg-blue-500/10 hover:border-blue-400/80 focus:outline-none transition-all duration-200"
          >
            Growth Blueprint
          </button>
        </div>

      </div>
    </header>
  );
}
