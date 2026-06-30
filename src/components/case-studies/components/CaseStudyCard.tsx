"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Cpu, Globe, Search, Sparkles } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
  key?: React.Key;
}

export default function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  // Select a contextual icon based on the service category
  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'AI Visibility/GEO':
        return <Cpu className="w-4 h-4 text-brand-orange" id={`icon-cpu-${caseStudy.id}`} />;
      case 'SEO':
        return <Search className="w-4 h-4 text-blue-400" id={`icon-search-${caseStudy.id}`} />;
      case 'Demand Generation':
        return <TrendingUp className="w-4 h-4 text-emerald-400" id={`icon-trend-${caseStudy.id}`} />;
      case 'Web & CRO':
        return <Globe className="w-4 h-4 text-violet-400" id={`icon-globe-${caseStudy.id}`} />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-400" id={`icon-sparkles-${caseStudy.id}`} />;
    }
  };

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      id={`case-study-card-${caseStudy.id}`}
      data-industry={caseStudy.industry}
      data-service={caseStudy.service}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-brand-card border border-slate-800/60 p-0 transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-card-hover hover:shadow-2xl hover:shadow-brand-accent-glow"
      style={{
        animationDelay: `${index * 50}ms`
      }}
    >
      {/* Decorative top gradient border on hover */}
      <div 
        id={`card-glow-${caseStudy.id}`}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-accent to-brand-orange opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
      />

      {/* 1. Image Thumbnail container with subtle zoom */}
      <div id={`image-container-${caseStudy.id}`} className="relative h-48 w-full overflow-hidden bg-slate-900">
        <img 
          src={caseStudy.imageUrl} 
          alt={`${caseStudy.clientName} outcome`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
          id={`img-thumb-${caseStudy.id}`}
        />
        <div id={`overlay-${caseStudy.id}`} className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-90" />
        
        {/* Floating Category Tags */}
        <div id={`tags-container-${caseStudy.id}`} className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-2">
          <span 
            id={`tag-industry-${caseStudy.id}`}
            className="rounded-full bg-slate-950/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-300 backdrop-blur-xs border border-slate-800"
          >
            {caseStudy.industry}
          </span>
          <span 
            id={`tag-service-${caseStudy.id}`}
            className="flex items-center gap-1 rounded-full bg-brand-accent-glow px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-xs border border-brand-accent/20"
          >
            {getServiceIcon(caseStudy.service)}
            <span>{caseStudy.service}</span>
          </span>
        </div>
      </div>

      {/* 2. Content Body */}
      <div id={`body-${caseStudy.id}`} className="flex flex-1 flex-col p-6">
        {/* Client Name & Logo indicator */}
        <div id={`client-header-${caseStudy.id}`} className="mb-2.5 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-400">
          <Star className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" id={`client-star-${caseStudy.id}`} />
          <span>{caseStudy.clientName}</span>
        </div>

        {/* Headline: Short outcome-focused transformation statement */}
        <h3 id={`title-${caseStudy.id}`} className="mb-4 font-display text-lg font-medium text-white leading-snug group-hover:text-blue-300 transition-colors duration-200">
          "{caseStudy.title}"
        </h3>

        {/* 3. ONE Big Metric + Label */}
        <div id={`metric-box-${caseStudy.id}`} className="my-auto rounded-lg bg-slate-900/60 border border-slate-800/40 p-4 mb-4">
          <div id={`metric-val-${caseStudy.id}`} className="font-display text-2xl font-bold text-white tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-200 bg-clip-text text-transparent">
              {caseStudy.metric}
            </span>
          </div>
          <p id={`metric-lbl-${caseStudy.id}`} className="mt-1 text-xs text-slate-400 leading-normal">
            {caseStudy.metricLabel}
          </p>
        </div>

        {/* Brief Summary */}
        <p id={`desc-${caseStudy.id}`} className="mb-5 text-xs text-slate-400 leading-relaxed">
          {caseStudy.summary}
        </p>

        {/* 4. Action Link */}
        <div id={`action-link-${caseStudy.id}`} className="mt-auto pt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400 transition-all duration-200 group-hover:text-blue-300">
          <span>Read Case Study</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" id={`arrow-icon-${caseStudy.id}`} />
        </div>
      </div>
    </Link>
  );
}
