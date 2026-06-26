/**
 * SITEONLAB - INDUSTRY LANDING PAGE TEMPLATE VARIABLES
 * 
 * To duplicate this page for another industry (e.g. IT Services/MSPs, Cybersecurity, Manufacturing, Professional Services):
 * 1. Copy this file and rename it (or create a new export object).
 * 2. Replace the bracketed variables and values below with your target industry details.
 * 3. The React app will automatically consume and render these values with pixel-perfect responsive styling.
 */

export interface StatItem {
  id: string;
  value: string;
  label: string;
  isEditablePlaceholder: boolean;
}

export interface PainCard {
  id: string;
  number: string;
  title: string;
  description: string;
  verdict: string;
}

export interface ConsequenceCard {
  id: string;
  title: string;
  subhead: string;
  description: string;
  impactLabel: string;
  impactCost: string; // Editable placeholder
}

export interface ComparisonRow {
  before: string;
  after: string;
}

export interface ServiceCard {
  id: string;
  iconName: "Search" | "FileText" | "Megaphone" | "Monitor" | "BarChart3";
  title: string;
  description: string;
  exampleLabel?: string;
  exampleValue?: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
  date: string;
  metricValue: string;
  metricLabel: string;
}

export interface IndustryTemplate {
  // --- CORE VARIABLES ---
  industry: string;             // [INDUSTRY] e.g. "B2B SaaS"
  buyer: string;                // [BUYER] e.g. "SaaS founders, CMOs, and VPs of Marketing/Growth"
  theirCustomer: string;        // [THEIR_CUSTOMER] e.g. "software buyers and decision-makers"
  dealLanguage: string;         // [DEAL_LANGUAGE] e.g. "ARR, qualified demos, and pipeline"
  highIntentExample: string;    // [HIGH_INTENT_EXAMPLE] e.g. "best subscription billing software for enterprise"

  // --- HERO SECTION ---
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;

  // --- STAT BAR SECTION (Section 4) ---
  stats: StatItem[];

  // --- PULL-QUOTE SECTION (Section 5) ---
  pullQuote: {
    text: string;
    attribution: string;
  };

  // --- SURFACE PAINS SECTION (Section 7) ---
  pains: PainCard[];

  // --- BUSINESS CONSEQUENCES SECTION (Section 8) ---
  consequences: ConsequenceCard[];

  // --- COMPARISON SECTION (Section 9) ---
  comparison: ComparisonRow[];

  // --- SERVICES SECTION (Section 10) ---
  services: ServiceCard[];

  // --- PROOF / TESTIMONIAL (Section 11) ---
  testimonial: TestimonialData;
}

export const b2bSaaSData: IndustryTemplate = {
  // ==========================================
  // 1. CORE VARIABLES (Swappable for other sectors)
  // ==========================================
  industry: "B2B SaaS",
  buyer: "SaaS founders, CMOs, and VPs of Marketing/Growth",
  theirCustomer: "software buyers and decision-makers",
  dealLanguage: "ARR, qualified demos, and pipeline",
  highIntentExample: "best subscription billing software for enterprise",

  // ==========================================
  // 2. HERO SECTION CONTENT
  // ==========================================
  heroEyebrow: "— B2B SaaS Marketing",
  heroHeadline: "Your B2B SaaS company is growing. Your pipeline isn't keeping up.",
  heroSubheadline: "Most B2B SaaS firms are invisible where buyers now research — Google, ChatGPT, and Perplexity — and stuck with an agency that reports traffic and rankings instead of ARR, qualified demos, and pipeline.",

  // ==========================================
  // 3. STAT BAR SECTION (Placeholders marked editable)
  // ==========================================
  stats: [
    {
      id: "stat-1",
      value: "94%",
      label: "of B2B buyers use generative AI (ChatGPT, Perplexity, Gemini) during research — before they ever request a demo or speak to sales.",
      isEditablePlaceholder: true
    },
    {
      id: "stat-2",
      value: "$0.00",
      label: "is the amount of ARR that most B2B SaaS firms can attribute to traditional agencies. They report search rankings and clicks, not pipeline.",
      isEditablePlaceholder: true
    }
  ],

  // ==========================================
  // 4. PULL-QUOTE STRIP (Placeholder marked editable)
  // ==========================================
  pullQuote: {
    text: "We were spending five figures a month on SEO and PPC, and we literally couldn't tell you if a single dollar of ARR was coming from it.",
    attribution: "VP of Marketing, Growth-Stage SaaS"
  },

  // ==========================================
  // 5. SURFACE-LEVEL PAINS (SaaS-specific, structured grid)
  // ==========================================
  pains: [
    {
      id: "pain-1",
      number: "01",
      title: "We're spending money but can't see the return.",
      description: "You write large monthly checks for 'optimized content' and PPC campaigns, yet you can't trace a single closed-won enterprise subscription back to their activity.",
      verdict: "You have a cost centre, not a growth engine."
    },
    {
      id: "pain-2",
      number: "02",
      title: "Our website looks like every other SaaS site.",
      description: "Interchangeable hero shots, generic features grids, and identical color palettes. If you swapped your logo with a competitor's, no one would notice.",
      verdict: "Your brand isn't a differentiator. It's a liability."
    },
    {
      id: "pain-3",
      number: "03",
      title: "Page-one rankings. Zero new demos.",
      description: "Your agency celebrates ranking #1 for informational keywords that attract college students writing papers, while your core qualified demo rate remains completely flat.",
      verdict: "Visibility without conversion is an expensive vanity metric."
    },
    {
      id: "pain-4",
      number: "04",
      title: "Competitors get recommended by AI — we don't.",
      description: "When buyers ask ChatGPT or Perplexity for solutions, your competitors get detailed feature breakdowns and direct citations. Your platform isn't even in the reply.",
      verdict: "You're being out-marketed, not out-built."
    },
    {
      id: "pain-5",
      number: "05",
      title: "Our agency knows tactics, not how buyers research today.",
      description: "They are still executing the 2018 playbook: high-volume keyword stuffing and un-targeted link builds, completely blind to the rise of AI search and zero-click Google queries.",
      verdict: "Specialization became stagnation."
    },
    {
      id: "pain-6",
      number: "06",
      title: "We get leads — but not the right kind.",
      description: "Your inbox fills with single-user signups and students using free tiers, while your SDRs waste precious hours weeding through trash to find a single qualified enterprise buyer.",
      verdict: "Bad leads cost more than no leads."
    }
  ],

  // ==========================================
  // 6. BUSINESS CONSEQUENCES (Real cost of broken pipeline)
  // ==========================================
  consequences: [
    {
      id: "consq-1",
      title: "Revenue you never see",
      subhead: "The Invisible Pipeline Problem",
      description: "High-intent enterprise software buyers search AI engines and Google for your solution. Since you are not citable or visible, they buy from competitors. You never even get a chance to pitch.",
      impactLabel: "Estimated Annual ARR Loss:",
      impactCost: "$450,000+"
    },
    {
      id: "consq-2",
      title: "Team time burned on bad-fit leads",
      subhead: "The Wrong-Leads Tax",
      description: "Your AEs and SDRs waste 15+ hours weekly chasing unqualified signups or small-business users instead of focusing on key target accounts. High-value talent is burned out on low-tier volume.",
      impactLabel: "Wasted Sales Productivity Cost:",
      impactCost: "$120,000/yr"
    },
    {
      id: "consq-3",
      title: "The silent authority gap",
      subhead: "The Pre-evaluation Filter",
      description: "Modern buyers, board members, and potential partners research you online and ask AI models for your reputation. When AI search can't find solid sources about your scale or security, you lose authority.",
      impactLabel: "Brand Equity Depreciation:",
      impactCost: "Immeasurable"
    }
  ],

  // ==========================================
  // 7. THE COMPARISON (5 exact rows of pain vs. gain)
  // ==========================================
  comparison: [
    {
      before: "Agency reports vanity metrics like 'organic impressions' and rankings while ignoring actual pipeline.",
      after: "100% transparent attribution tracking from the initial search click down to ARR and booked demos."
    },
    {
      before: "Recycled copy-paste templates and AI-spun fluff content that damages your SaaS brand's authority.",
      after: "Deep, industry-native practice/category content built by expert tech writers that converts and acts as AI citations."
    },
    {
      before: "Long-term, high-ticket lock-in contracts (9-12 months) before you ever see a single qualified demo.",
      after: "A low-risk, short-term proof pilot designed to demonstrate actual traction and pipeline velocity first."
    },
    {
      before: "High-volume, un-targeted lead generation campaigns that flood your database with junk free-trial signups.",
      after: "Laser-focused ICP targeting on LinkedIn and Google that captures high-intent decision-makers."
    },
    {
      before: "Junior account managers with zero SaaS experience executing tasks on an assembly line.",
      after: "Direct access to senior marketing strategists and growth specialists who understand SaaS unit economics."
    }
  ],

  // ==========================================
  // 8. SERVICES (Revenue-tied pillars for SaaS)
  // ==========================================
  services: [
    {
      id: "service-1",
      iconName: "Search",
      title: "AI Search & GEO",
      description: "Generative Engine Optimization. We engineer your brand's data footprint so that ChatGPT, Perplexity, Gemini, and Google AI Overviews actively recommend your platform.",
      exampleLabel: "High-Intent Target Search:",
      exampleValue: "\"best billing software for SaaS enterprise with custom pricing models\""
    },
    {
      id: "service-2",
      iconName: "FileText",
      title: "SEO & High-Intent Content",
      description: "We don't write fluff. We build high-conviction product-led content, comparative articles, and industry whitepapers designed to satisfy human buyers and feed AI crawlers.",
      exampleLabel: "Strategic Outcome:",
      exampleValue: "Own the high-intent keywords where software buyers actively compare tools."
    },
    {
      id: "service-3",
      iconName: "Megaphone",
      title: "ICP Paid Media & PPC",
      description: "Surgical Google Search and LinkedIn Campaign architectures targeting specific companies, job titles, and high-buying-intent triggers, optimized to avoid budget waste.",
      exampleLabel: "Strategic Outcome:",
      exampleValue: "Deliver high-value marketing qualified accounts straight to your sales team."
    },
    {
      id: "service-4",
      iconName: "Monitor",
      title: "High-Converting Web & CRO",
      description: "Your SaaS website must convert. We design and structure ultra-fast, high-trust landing pages that clearly differentiate your product and simplify the demo booking process.",
      exampleLabel: "Strategic Outcome:",
      exampleValue: "Turn passive website visitors into scheduled sales pipelines."
    },
    {
      id: "service-5",
      iconName: "BarChart3",
      title: "Revenue Analytics & Attribution",
      description: "We set up clear attribution pipelines (HubSpot, Salesforce, GA4) to trace ARR back to search campaigns. No guessing. Full transparency on ROI.",
      exampleLabel: "Strategic Outcome:",
      exampleValue: "See exactly which campaigns, assets, and AI channels drove your pipeline."
    }
  ],

  // ==========================================
  // 9. PROOF / TESTIMONIAL (Placeholder marked editable)
  // ==========================================
  testimonial: {
    quote: "SiteOnLab completely transformed how we capture demand. They didn't just build backlinks; they systematically aligned our content with the way enterprise software buyers now research. Within 5 months, our SaaS platform was the #1 recommended solution in ChatGPT and Perplexity searches for our core category, resulting in a 47% increase in demo bookings and over $1.2M in new pipeline.",
    author: "Elena Rostova",
    role: "VP of Growth & Marketing",
    company: "CloudCore Analytics",
    date: "May 2026",
    metricValue: "+47%",
    metricLabel: "Inbound Qualified Demos"
  }
};
