"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Menu, X, BarChart2 } from 'lucide-react';

interface HeaderProps {
  onRequestBlueprint: () => void;
  onOpenAssessment: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ onRequestBlueprint, onOpenAssessment, onScrollToSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Overview', id: 'overview' },
    { label: 'Our Process', id: 'process' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'FAQs', id: 'faq' },
  ];

  return (
    <header id="app-header" className="sticky top-0 z-40 w-full border-b border-dark-border bg-dark-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div 
          id="brand-logo"
          className="flex cursor-pointer items-center gap-2.5"
          onClick={() => onScrollToSection('hero')}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary shadow-lg shadow-brand-primary/20">
            <Target className="h-5 w-5 text-white animate-pulse" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            Hybrid<span className="text-brand-accent">Monks</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div id="desktop-ctas" className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenAssessment}
            className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent hover:text-brand-primary transition-colors duration-150 border border-brand-primary/20 bg-brand-primary/10 px-3.5 py-1.5 rounded-full cursor-pointer"
          >
            <BarChart2 className="h-3.5 w-3.5" />
            Growth Assessment
          </button>
          <button
            onClick={onRequestBlueprint}
            className="text-sm font-semibold text-white bg-brand-primary hover:bg-brand-primary/90 px-5 py-2.5 rounded-lg shadow-lg shadow-brand-primary/10 transition-all duration-150 cursor-pointer"
          >
            Request a Growth Blueprint
          </button>
        </div>

        {/* Mobile menu button */}
        <div id="mobile-menu-btn" className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu-dropdown" className="md:hidden border-b border-dark-border bg-dark-bg px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onScrollToSection(item.id);
                setIsOpen(false);
              }}
              className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-dark-border space-y-2.5">
            <button
              onClick={() => {
                onOpenAssessment();
                setIsOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-accent border border-brand-primary/20 bg-brand-primary/10 py-2.5 rounded-lg"
            >
              <BarChart2 className="h-4 w-4" />
              Growth Assessment
            </button>
            <button
              onClick={() => {
                onRequestBlueprint();
                setIsOpen(false);
              }}
              className="block w-full text-center text-sm font-semibold text-white bg-brand-primary py-3 rounded-lg"
            >
              Request a Growth Blueprint
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
