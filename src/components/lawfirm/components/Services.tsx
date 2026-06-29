"use client";

import React from "react";
import { legalServices } from "../data/copy";
import { ArrowUpRight } from "lucide-react";

interface ServicesProps {
  onOpenBlueprint: () => void;
}

export default function Services({ onOpenBlueprint }: ServicesProps) {
  return (
    <section className="bg-[#0A0A0B] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.3em] bg-[#3b82f6]/5 border border-[#3b82f6]/20 px-3 py-1">
            Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-tight text-white leading-tight">
            Growth services built for <span className="italic font-serif text-[#3b82f6]">Law Firms</span>.
          </h2>
          <p className="mt-4 text-white/60 text-base sm:text-lg font-light leading-relaxed">
            SiteOnLab deploys tailored modules of our growth suite to fit your firm's specific practice profile, geographic footprint, and budget constraints.
          </p>
        </div>

        {/* 3-Column Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {legalServices.map((service, idx) => (
            <div
              key={idx}
              id={`service-card-${idx}`}
              className="bg-white/5 border border-white/10 hover:border-[#3b82f6]/30 rounded-sm p-6 transition-all duration-300 hover:bg-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Service Name */}
                <h3 className="text-lg font-sans font-semibold text-white transition-colors duration-200">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-3 text-white/70 text-xs sm:text-sm font-light leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Internal Link / Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/40">
                  PATH: {service.url}
                </span>
                <button
                  onClick={onOpenBlueprint}
                  className="flex items-center space-x-1 text-xs font-sans font-semibold text-[#3b82f6] hover:text-[#3b82f6]/80 transition-colors duration-200 cursor-pointer"
                >
                  <span>{service.linkText}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
