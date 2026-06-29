import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Shared Gemini client (ported from the AI Studio server.ts).
let aiClient: GoogleGenAI | null = null;

function getAiClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY is not defined. AI blueprint generation will fall back to rich template results.");
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// API Route: Generate Custom B2B Technical SEO Blueprint using Gemini
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { domain, businessType, techStack, concerns } = body as {
      domain?: string;
      businessType?: string;
      techStack?: string;
      concerns?: string;
    };

    if (!domain) {
      return NextResponse.json({ error: "Domain name is required." }, { status: 400 });
    }

    const client = getAiClient();

    if (!client) {
      // Fallback response if GEMINI_API_KEY is not provided
      const fallbackMarkdown = `
# Bespoke Technical SEO Blueprint for **${domain}** (Local Simulation Mode)

> **Note**: No API key detected. HybridMonks is running in interactive demonstration mode. This is a baseline technical audit preview.

---

## 1. Crawl Budget & Indexation Blueprint
- **Core Challenge**: As a **${businessType || "B2B Technology"}** site running on **${techStack || "Modern JS Stack"}**, search crawlers are likely encountering rendering latency or indexation blocks on your high-intent pipeline pages.
- **Immediate Fixes**:
  - Configure Server-Side Rendering (SSR) or Dynamic Rendering to ensure full HTML payload delivery.
  - Trim redirect chains in key solutions and demo funnel sectors.
  - Implement dynamic XML sitemaps partitioned by high-intent topic clusters.

## 2. Speed & Core Web Vitals (INP / LCP)
- **LCP Optimization (Target < 2.5s)**: Optimize main hero assets, preconnect to essential font origins, and defer non-critical JS/CSS.
- **INP Mitigation (Target < 200ms)**: Break up long tasks (>50ms) in hydration, especially around interactive elements (forms and calculators).
- **CLS (Target < 0.1)**: Ensure explicit width/height on images and reserve aspect ratio boxes for dynamic components.

## 3. Structured Data & LLM Discovery Strategy
- **JSON-LD Schema**: Inject nested Product, SoftwareApplication, and FAQPage schemas to facilitate rich snippets and Google AI Overview citations.
- **AI Crawlers**: Optimize robots.txt to specifically guide LLM crawlers (e.g., GPTBot, ClaudeBot, Google-Extended) to key resource sectors while shielding secure application paths.

## 4. Priority Implementation Roadmap
1. **Critical (Sprint 1)**: Audit robots.txt, sitemaps, and fix critical 404s/redirect chains.
2. **High (Sprint 2)**: Resolve hydration-delay bottlenecks causing INP spikes.
3. **Medium (Sprint 3)**: Deploy nested schema markups across high-intent product comparison tables.
        `;
      return NextResponse.json({ blueprint: fallbackMarkdown.trim() });
    }

    const prompt = `
You are a world-class Technical SEO Director at HybridMonks, specializing in B2B SaaS, enterprise technology, and complex IT/MSP websites.
Generate an incredibly high-value, highly actionable, realistic, and detailed Technical SEO Growth Blueprint for a B2B company with the following details:
- Domain/Website: ${domain}
- Primary Business / Ideal Customer Profile: ${businessType || "Not specified, assume high-value B2B"}
- Technology Stack: ${techStack || "Not specified, assume a modern JS/headless framework or standard B2B setup"}
- Primary Areas of Concern / Goals: ${concerns || "Optimizing indexation and maximizing qualified B2B pipeline"}

Write the response in structured, beautifully formatted Markdown. Make it sound extremely professional, authoritatively technical (talking about crawling depth, rendering budgets, hydration delays, Core Web Vitals, JSON-LD structure, and LLM/AI visibility optimization).
Ensure the following sections are clearly defined with practical recommendations:
1. Executive Technical Summary & Site Health Score Estimate
2. B2B Indexation & Crawl Budget Optimization (Specific to their tech stack & business type)
3. Core Web Vitals Audit & Engineering Guidance (LCP, CLS, INP optimization details)
4. Semantic HTML & Schema Markup Roadmap (Specific schema recommendations like Product, Organization, FAQ, SoftwareApplication)
5. LLM & AI Search Engine Indexing Strategy (robots.txt guidance for GPTBot, Google-Extended, PerplexityBot, and structured indexing for citations in AI Overviews)
6. Priority Sprint Schedule (Phase 1: Sprints 1-2, Phase 2: Sprints 3-4)

Do not include any greeting or conversational filler. Start directly with the markdown header.
      `.trim();

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const blueprintText = response.text || "Failed to generate blueprint content. Please try again.";
    return NextResponse.json({ blueprint: blueprintText });
  } catch (error) {
    console.error("Error generating Technical SEO Blueprint:", error);
    const message = error instanceof Error ? error.message : "An error occurred during blueprint generation.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
