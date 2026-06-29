"use client";

import { Github, Linkedin, Twitter, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI Visibility & GEO", href: "#" },
    { name: "Advanced B2B SEO", href: "#" },
    { name: "High-Intent Demand Gen", href: "#" },
    { name: "Website CRO & Funnels", href: "#" },
    { name: "Account-Based Marketing", href: "#" },
  ];

  const industries = [
    { name: "SaaS & Enterprise Tech", href: "#" },
    { name: "Cybersecurity & IT/MSP", href: "#" },
    { name: "Professional Services", href: "#" },
    { name: "Advanced Manufacturing", href: "#" },
  ];

  const resources = [
    { name: "B2B Revenue Blog", href: "#" },
    { name: "AI Visibility Checker", href: "#" },
    { name: "Pipeline Leak Mapper", href: "#" },
    { name: "Growth Case Studies", href: "#" },
  ];

  const company = [
    { name: "About HybridMonks", href: "#" },
    { name: "Our Framework", href: "#" },
    { name: "Consulting Team", href: "#" },
    { name: "Careers (Hiring)", href: "#" },
  ];

  return (
    <footer 
      id="main-footer"
      className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-10 pb-8 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          
          {/* Tagline / Branding Column */}
          <div className="lg:col-span-2 space-y-3">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center font-display text-white font-bold text-sm">
                S
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-white">
                HybridMonks
              </span>
            </a>
            <p className="text-[11px] leading-relaxed text-slate-500 max-w-[200px]">
              The AI-powered B2B revenue growth and AI visibility agency.
            </p>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">
              Services
            </h4>
            <ul className="space-y-2 text-[10px] text-slate-600">
              {services.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-slate-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">
              Industries
            </h4>
            <ul className="space-y-2 text-[10px] text-slate-600">
              {industries.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-slate-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">
              Resources
            </h4>
            <ul className="space-y-2 text-[10px] text-slate-600">
              {resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-slate-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company / Social */}
          <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase mb-3 tracking-widest">
              Company
            </h4>
            <ul className="space-y-2 text-[10px] text-slate-600 mb-4">
              {company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-slate-400 transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex gap-2">
              <a href="#" className="w-5 h-5 bg-slate-800 hover:bg-slate-700 rounded flex items-center justify-center text-[10px] text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="w-5 h-5 bg-slate-800 hover:bg-slate-700 rounded flex items-center justify-center text-[10px] text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
                X
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Copyright bar */}
        <div className="pt-6 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600">
          <div>
            <p className="text-[9px] text-slate-700">© {currentYear} HybridMonks. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-4 text-[9px] text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
