import { NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// JSON Schema for ServicePageData (ported verbatim from the AI Studio server.ts).
const servicePageSchema = {
  type: Type.OBJECT,
  properties: {
    seoTitle: { type: Type.STRING, description: "Title Tag strictly following: [Service Name] Agency for B2B Pipeline Growth | SiteOnLab" },
    seoDescription: { type: Type.STRING, description: "Meta Description strictly following: SiteOnLab helps [ICP] use [service name] to drive qualified pipeline, improve visibility, and connect marketing performance to revenue." },
    serviceCategory: { type: Type.STRING, description: "Short category name (e.g. Paid Ads, ABM, Conversion Optimization, Fractional CMO)" },
    serviceName: { type: Type.STRING, description: "Specific name of the service (e.g. Paid Acquisition)" },
    outcome1: { type: Type.STRING, description: "Short business outcome 1 (e.g. enterprise contract wins, demo request volume)" },
    outcome2: { type: Type.STRING, description: "Short business outcome 2" },
    outcome3: { type: Type.STRING, description: "Short business outcome 3" },
    icp: { type: Type.STRING, description: "Detailed description of Ideal Customer Profile, e.g. B2B SaaS, IT/MSP, cybersecurity, and tech-enabled enterprise firms" },
    serviceChannel: { type: Type.STRING, description: "Core service or channel, e.g. programmatic ads and search retargeting" },
    primaryBenefit: { type: Type.STRING, description: "Task-focused benefit, e.g. target high-intent buying decision-makers" },
    secondaryBenefit: { type: Type.STRING, description: "Optimization benefit, e.g. optimize media spend across programmatic networks" },
    conversionBenefit: { type: Type.STRING, description: "Conversion outcome, e.g. turn cold digital impressions into qualified pipeline" },
    primaryCtaText: { type: Type.STRING, description: "Main CTA copy (e.g. Request a Growth Blueprint)" },
    secondaryCtaText: { type: Type.STRING, description: "Secondary CTA copy (e.g. See Case Studies)" },

    trustMetrics: {
      type: Type.ARRAY,
      description: "Exactly 4 metrics representing proof of success or focus",
      items: {
        type: Type.OBJECT,
        properties: {
          value: { type: Type.STRING, description: "e.g. +300% ROI, 90 Days, NPS 74, 50+" },
          label: { type: Type.STRING, description: "Brief description of the metric, e.g. Average organic growth" }
        },
        required: ["value", "label"]
      }
    },

    overviewH2: { type: Type.STRING, description: "Section 3 H2 following: [Service Name] built for compounding B2B revenue growth." },
    overviewParagraph: { type: Type.STRING, description: "Section 3 Paragraph criticizing generic agencies (e.g., 'Most agencies just run standard ads without segmenting cohorts...') and introducing SiteOnLab's strategic approach combining 4 high-value components." },
    serviceComponents: {
      type: Type.ARRAY,
      description: "Exactly 5 to 6 core service components",
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Component title" },
          description: { type: Type.STRING, description: "1-2 sentence explanation of this component and its pipeline value" },
          icon: { type: Type.STRING, description: "Lucide icon name matching exactly: Search, Layers, Sparkles, TrendingUp, FileText, Cpu, Target, Users, BookOpen, BarChart3, Database, ShieldCheck, Award, MessageSquare, Handshake, ShieldAlert" }
        },
        required: ["title", "description", "icon"]
      }
    },

    processH2: { type: Type.STRING, description: "Section 4 H2 following: From [starting point] to [desired result] in [timeframe]." },
    processSteps: {
      type: Type.ARRAY,
      description: "Exactly 4 chronological process steps (01 to 04)",
      items: {
        type: Type.OBJECT,
        properties: {
          number: { type: Type.STRING, description: "01, 02, 03, 04" },
          title: { type: Type.STRING, description: "Step title, e.g. Audit and intent map, Architecture and sprint plan, Build, launch, and measure, Optimize for pipeline" },
          description: { type: Type.STRING, description: "Short description of what happens during this phase" },
          timeline: { type: Type.STRING, description: "Expected timeline, e.g. 2 weeks, 1 week, Ongoing, Monthly" }
        },
        required: ["number", "title", "description", "timeline"]
      }
    },

    whyChooseUsH2: { type: Type.STRING, description: "Section 5 H2 following: A [service name] agency that connects [channel/service performance] to revenue." },
    whyChooseUsParagraph: { type: Type.STRING, description: "Paragraph criticizing vanity metrics reports and introducing SiteOnLab's CRM measurement layers." },
    differentiators: {
      type: Type.ARRAY,
      description: "Exactly 4 differentiator cards",
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Differentiator name (e.g. Revenue-first strategy)" },
          description: { type: Type.STRING, description: "Value explanation" },
          icon: { type: Type.STRING, description: "Lucide icon name, e.g. Target, ShieldCheck, Brain, TrendingUp" }
        },
        required: ["title", "description", "icon"]
      }
    },

    caseStudiesH2: { type: Type.STRING, description: "Section 6 H2 following: [Service name] results we can put a number on." },
    caseStudies: {
      type: Type.ARRAY,
      description: "Exactly 3 result-focused B2B case studies",
      items: {
        type: Type.OBJECT,
        properties: {
          industry: { type: Type.STRING, description: "e.g. SaaS · B2B, Cybersecurity, Cloud Infrastructure" },
          headline: { type: Type.STRING, description: "High-impact, result-focused headline" },
          description: { type: Type.STRING, description: "One-sentence explaining the challenge and the resulting triumph" },
          metric: { type: Type.STRING, description: "e.g. +312% organic growth, +245% demo pipeline, -42% CAC" },
          timeline: { type: Type.STRING, description: "e.g. 9 months, 6 months, 12 months" }
        },
        required: ["industry", "headline", "description", "metric", "timeline"]
      }
    },

    testimonial: {
      type: Type.OBJECT,
      description: "Human validation quote representing an actual customer experience",
      properties: {
        quote: { type: Type.STRING, description: "Quote text focused on pipeline impact" },
        author: { type: Type.STRING, description: "Author name" },
        title: { type: Type.STRING, description: "Title, e.g. Director of Marketing" },
        companyType: { type: Type.STRING, description: "e.g. B2B Enterprise SaaS Company" },
        proofLine: { type: Type.STRING, description: "Metric and timeline, e.g. +312% organic growth · 9 months" }
      },
      required: ["quote", "author", "title", "companyType", "proofLine"]
    },

    relatedServicesH2: { type: Type.STRING, description: "Section 8 H2 following: [Service name] performs better alongside these services." },
    relatedServices: {
      type: Type.ARRAY,
      description: "Exactly 3 cross-sell opportunities with descriptions",
      items: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING, description: "Service title" },
          description: { type: Type.STRING, description: "How this complements the current service" },
          icon: { type: Type.STRING, description: "Lucide icon name" }
        },
        required: ["title", "description", "icon"]
      }
    },

    faqH2: { type: Type.STRING, description: "Section 9 H2 following: Frequently asked questions about [service name]." },
    faqs: {
      type: Type.ARRAY,
      description: "Exactly 9 items. MUST use these EXACT questions in sequence: 1. What is [service name]? 2. How is [service name] different for B2B companies? 3. How long does it take to see results? 4. How do you measure ROI? 5. What makes SiteOnLab different from other agencies? 6. Do you handle implementation or only strategy? 7. We tried this before and it did not work. Why would this be different? 8. How does this service support AI visibility? 9. What does a typical engagement look like? Answers must be highly specific, professional, and commercial-focused.",
      items: {
        type: Type.OBJECT,
        properties: {
          question: { type: Type.STRING },
          answer: { type: Type.STRING }
        },
        required: ["question", "answer"]
      }
    },

    finalCtaH2: { type: Type.STRING, description: "Section 10 H2 following: Let’s make [service/channel] your most efficient growth channel." },
    finalCtaCopy: { type: Type.STRING, description: "Book a 30-minute strategy call copy. Pitch a review of current performance, missed competitor opportunities, and what it takes to turn into pipeline." },
    finalPrimaryCta: { type: Type.STRING, description: "e.g. Request a Growth Blueprint" },
    finalSecondaryCta: { type: Type.STRING, description: "Relevant custom assessment name, e.g. Take the Paid Media Readiness Assessment" }
  },
  required: [
    "seoTitle",
    "seoDescription",
    "serviceCategory",
    "serviceName",
    "outcome1",
    "outcome2",
    "outcome3",
    "icp",
    "serviceChannel",
    "primaryBenefit",
    "secondaryBenefit",
    "conversionBenefit",
    "primaryCtaText",
    "secondaryCtaText",
    "trustMetrics",
    "overviewH2",
    "overviewParagraph",
    "serviceComponents",
    "processH2",
    "processSteps",
    "whyChooseUsH2",
    "whyChooseUsParagraph",
    "differentiators",
    "caseStudiesH2",
    "caseStudies",
    "testimonial",
    "relatedServicesH2",
    "relatedServices",
    "faqH2",
    "faqs",
    "finalCtaH2",
    "finalCtaCopy",
    "finalPrimaryCta",
    "finalSecondaryCta"
  ]
};

// API Endpoint: Generate Custom B2B Service Copy via Gemini
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const { customServiceIdea } = body as { customServiceIdea?: unknown };

  if (!customServiceIdea || typeof customServiceIdea !== "string" || customServiceIdea.trim() === "") {
    return NextResponse.json(
      { error: "customServiceIdea is required and must be a non-empty string" },
      { status: 400 }
    );
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key is missing. Please configure GEMINI_API_KEY inside Settings > Secrets." },
      { status: 503 }
    );
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  try {
    const prompt = `You are an elite B2B enterprise copywriter and marketing strategist at SiteOnLab, a revenue-first growth agency.
Generate a complete, high-converting service landing page data package for this service: "${customServiceIdea}".

The copy must follow the SiteOnLab voice: authoritative, highly professional, direct, zero-fluff, and laser-focused on qualified CRM pipeline and commercial metrics instead of vanity traffic.

Structure your response to strictly match the provided JSON schema. Ensure:
1. Every component, metric, case study, and answer is explicitly tailored to this specific service: "${customServiceIdea}".
2. All 9 FAQs must use the exact required questions in order, substituting the bracketed placeholders with specific terms from "${customServiceIdea}".
3. Case studies should mention plausible B2B tech industries and actual realistic pipeline achievements (e.g. $+X pipeline, +X% qualified demos).
4. Do not include any markdown format blocks outside the JSON itself.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: servicePageSchema,
        temperature: 1.0,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text returned from Gemini API");
    }

    const parsedData = JSON.parse(text);
    return NextResponse.json({ success: true, data: parsedData });
  } catch (error) {
    console.error("Gemini copy generation error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to generate B2B copy. " + message },
      { status: 500 }
    );
  }
}
