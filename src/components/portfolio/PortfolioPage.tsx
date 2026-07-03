"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react";

type Project = {
  name: string;
  category: string;
  href: string;
  image: string;
};

// Screenshots live in /public/portfolio, numbered 1–7 to match the links below.
const PROJECTS: Project[] = [
  { name: "Expo Galerie", category: "Art & Exhibition", href: "https://expogalerie-s.com", image: "/portfolio/1.png" },
  { name: "Hotel Wing Orbit", category: "Hospitality", href: "https://hotelwingorbit.in/", image: "/portfolio/2.png" },
  { name: "Stephanie Coudray", category: "Personal Brand", href: "https://www.stephaniecoudray.com/", image: "/portfolio/3.png" },
  { name: "Bhawna Foundation", category: "Non-Profit", href: "https://bhawnafoundation.com/", image: "/portfolio/4.png" },
  { name: "Skinfood Organics", category: "E-Commerce / Beauty", href: "https://skinfoodorganicsusa.com/", image: "/portfolio/5.png" },
  { name: "Slaxora Jewels", category: "E-Commerce / Jewelry", href: "https://slaxorajewels.com/", image: "/portfolio/6.png" },
  { name: "Flamingo Piccolo", category: "Lifestyle", href: "https://flamingo-piccolo-4nsz.squarespace.com/", image: "/portfolio/7.png" },
];

function hostname(href: string): string {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/40 transition-all duration-300 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/10"
    >
      {/* Screenshot */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
        <Image
          src={project.image}
          alt={`${project.name} website`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        {/* Gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent opacity-70" />

        {/* Hover CTA chip */}
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-brand-bg/70 text-brand-primary opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-primary">
          {project.category}
        </span>
        <h3 className="font-display text-xl font-bold text-white">{project.name}</h3>
        <span className="mt-auto pt-2 text-sm text-gray-500 transition-colors group-hover:text-gray-300">
          {hostname(project.href)}
        </span>
      </div>
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <div className="theme-home min-h-screen bg-brand-bg text-gray-100 font-sans selection:bg-brand-primary selection:text-black relative overflow-x-hidden">
      {/* Header */}
      <section className="relative border-b border-zinc-900 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-primary/5 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 px-3 py-1 text-brand-primary">
            <Sparkles className="h-4 w-4" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wide md:text-xs">Our Work</span>
          </div>

          <h1 className="mt-6 max-w-3xl font-display text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Websites we&apos;ve{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
              designed &amp; built.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
            A selection of brands we&apos;ve partnered with — from hospitality and e-commerce to
            non-profits and personal brands. Each site is engineered to convert.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-900 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl">
            Ready to build yours?
          </h2>
          <p className="max-w-xl text-base text-gray-400">
            Let&apos;s design a website that turns visitors into pipeline. Book a strategy call and
            get a custom growth plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-primary px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-brand-primary/30 md:text-sm"
          >
            Book a Strategy Call
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
