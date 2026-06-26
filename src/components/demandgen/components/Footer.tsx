"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-border">
          
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary shadow-md">
              <Target className="h-4.5 w-4.5 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              SiteOn<span className="text-brand-accent">Lab</span>
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            <a href="#overview" className="hover:text-white transition-colors">Overview</a>
            <a href="#process" className="hover:text-white transition-colors">Our Process</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Pick Us</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-zinc-500 font-mono">
          <div>
            &copy; {currentYear} SiteOnLab. All rights reserved. Registered trademark.
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 hover:text-zinc-400 cursor-pointer">
              <span>Primary Website</span>
              <ArrowUpRight className="h-3 w-3" />
            </div>
            <span>·</span>
            <span>Security & Privacy Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
