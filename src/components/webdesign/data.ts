import { Metric, ServiceComponent, ProcessStep, Differentiator, CaseStudy, Testimonial, RelatedService, FAQItem } from "./types";

export const metrics: Metric[] = [
  {
    id: "metric-1",
    value: "4.8x",
    label: "Conversion Rate Improvement",
    description: "Average uplift in qualified demo bookings post-launch"
  },
  {
    id: "metric-2",
    value: "30 Days",
    label: "Kickoff to Design Approval",
    description: "Streamlined design sprints with continuous collaboration"
  },
  {
    id: "metric-3",
    value: "99.9%",
    label: "Uptime & PageSpeed Score >90",
    description: "Built for speed, reliability, and modern Core Web Vitals"
  },
  {
    id: "metric-4",
    value: "120+",
    label: "B2B Websites Launched",
    description: "Proven record across highly technical and niche SaaS markets"
  }
];

export const serviceComponents: ServiceComponent[] = [
  {
    id: "comp-1",
    title: "Buyer-Intent UX & Journey Mapping",
    description: "We map user flows specifically for self-educating B2B buyers, prioritizing easy navigation to high-intent product demos and contact pages.",
    features: ["ICP persona alignment", "Intent-based funnel mapping", "Frictionless checkout/demo paths"]
  },
  {
    id: "comp-2",
    title: "Bespoke Visual Identity & UI Design",
    description: "Our custom high-fidelity interfaces are tailored to enterprise buyers, reflecting brand authority with flawless spacing and typography.",
    features: ["Interactive responsive design", "Custom design systems", "Rich visual brand assets"]
  },
  {
    id: "comp-3",
    title: "Performance-First Web Development",
    description: "We build websites with clean, search-engine-crawlable architectures optimized for sub-second load times and flawless mobile experiences.",
    features: ["Semantic React & Tailwind CSS", "Sub-second bundle delivery", "Responsive desktop-first code"]
  },
  {
    id: "comp-4",
    title: "AI & Search Engine Visibility",
    description: "We structure metadata, schema markup, and content architectures to ensure your business gets cited by AI search engines and ranks on Google.",
    features: ["JSON-LD Schema implementation", "LLM-friendly content structure", "Semantic keyword integration"]
  },
  {
    id: "comp-5",
    title: "Interactive Product Tours & Tools",
    description: "We create interactive calculators, sandbox environments, and guided tours that increase dwell time and prove your product's value instantly.",
    features: ["Interactive ROI calculators", "Embeddable application tours", "Dynamic product comparison grids"]
  },
  {
    id: "comp-6",
    title: "Full-Funnel CRM & Pipeline Integration",
    description: "We connect your site to Salesforce, HubSpot, and Marketo, ensuring seamless lead routing, attribution tracking, and database synchronization.",
    features: ["Form capture API connectors", "Cookie-less UTM tracking", "Multi-touch attribution sync"]
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "Audit and intent map",
    description: "We review your current performance, competitors, buyer journey, and revenue opportunities.",
    timeline: "2 weeks"
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "Architecture and sprint plan",
    description: "We build the roadmap, prioritize opportunities, and sequence work by likely business impact.",
    timeline: "1 week"
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "Build, launch, and measure",
    description: "We create, implement, optimize, and connect the work to reporting systems.",
    timeline: "5 weeks"
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "Optimize for pipeline",
    description: "We improve performance using search data, AI visibility signals, conversion data, and sales feedback.",
    timeline: "Monthly"
  }
];

export const differentiators: Differentiator[] = [
  {
    id: "diff-1",
    title: "Revenue-first strategy",
    description: "We optimize for business outcomes and CAC efficiency, not isolated channel metrics."
  },
  {
    id: "diff-2",
    title: "Measurement that is honest",
    description: "We connect activity to first-touch, assisted, and last-touch revenue signals."
  },
  {
    id: "diff-3",
    title: "Built for AI search and LLM visibility",
    description: "We structure content and authority signals so buyers find you in Google and AI engines."
  },
  {
    id: "diff-4",
    title: "Compounding growth over time",
    description: "We build assets and systems that keep creating pipeline instead of one-off campaign spikes."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    industry: "SaaS · B2B Enterprise",
    headline: "From invisible in search to owning buyer-intent keywords",
    description: "We rebuilt their web application architecture and SEO around high-intent category, comparison, and problem-aware searches.",
    metric: "+312% organic growth",
    timeline: "9 months",
    tag: "SaaS"
  },
  {
    id: "case-2",
    industry: "Cybersecurity · Enterprise",
    headline: "Interactive sandbox demo accelerates enterprise sales cycles",
    description: "Designed a secure web portal featuring modular interactive sandboxes for real-time security assessment proof-of-concepts.",
    metric: "+145% Conversions",
    timeline: "3 months",
    tag: "Cybersecurity"
  },
  {
    id: "case-3",
    industry: "IT Services & MSP",
    headline: "Next-gen headless architecture unlocks multi-region acquisition",
    description: "Built a blistering-fast server-side-rendered network platform across 15+ sub-brands with standardized design systems.",
    metric: "-42% bounce rate",
    timeline: "6 months",
    tag: "IT Services"
  }
];

export const testimonial: Testimonial = {
  quote: "“Their strategic approach helped us turn our website into a serious source of qualified opportunities, not just website traffic.”",
  author: "Founder, B2B SaaS Company",
  title: "CloudShield Security",
  companyType: "B2B SaaS Security Platform",
  metric: "+312% organic growth",
  timeline: "9 months"
};

export const relatedServices: RelatedService[] = [
  {
    id: "rel-1",
    title: "AI Visibility Optimization",
    description: "Get cited in ChatGPT, Gemini, Perplexity, and Google AI Overviews."
  },
  {
    id: "rel-2",
    title: "Content Marketing",
    description: "Build topic clusters and authority content that attracts qualified buyers."
  },
  {
    id: "rel-3",
    title: "Revenue Measurement",
    description: "Connect organic search activity to opportunities, pipeline, and closed revenue."
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is B2B Website Design & Development?",
    answer: "B2B Website Design & Development is the specialized practice of crafting digital platforms specifically for business-to-business audiences. Unlike standard sites, B2B sites are engineered to educate professional buyers, showcase complex enterprise integrations, and guide users toward qualified pipeline inquiries."
  },
  {
    id: "faq-2",
    question: "How is website design different for B2B companies?",
    answer: "B2B websites deal with longer sales cycles, multiple stakeholders, and complex products. The design must emphasize deep educational material, highly credible trust metrics, clear positioning, and robust interactive call-to-actions, integrated seamlessly with backend marketing attribution."
  },
  {
    id: "faq-3",
    question: "How long does it take to see results?",
    answer: "Our standard end-to-end B2B website project goes from kickoff to launch in about 8 weeks. Initial page-speed and brand authority improvements are felt immediately upon go-live, while measurable conversion rate and inbound pipeline increases are typically seen within 30 to 90 days."
  },
  {
    id: "faq-4",
    question: "How do you measure ROI?",
    answer: "We connect website engagement to pipeline analytics. Success is measured by qualified demo bookings, pipeline value generated, cost-per-acquisition (CAC) reduction, self-guided demo completions, and positive customer feedback from live sales conversations."
  },
  {
    id: "faq-5",
    question: "What makes HybridMonks different from other agencies?",
    answer: "Most web design agencies focus solely on pretty graphics. HybridMonks treats your website as a software product and a revenue-generation tool. We combine stunning aesthetic craft with sub-second page performance, LLM-crawling optimization, and direct pipeline attribution integrations."
  },
  {
    id: "faq-6",
    question: "Do you handle implementation or only strategy?",
    answer: "We deliver full-funnel execution. This includes initial conversion rate strategy, deep user experience mapping, pixel-perfect UI designs, bespoke frontend engineering (React, Tailwind CSS, etc.), CRM setup, and continuous post-launch performance monitoring."
  },
  {
    id: "faq-7",
    question: "We tried this before and it did not work. Why would this be different?",
    answer: "Most custom websites fail because they are designed in a silo with generic messaging and bloated templates. We align the design specifically with your ICP's search intent, streamline conversion paths for actual buyers, optimize for AI engine crawling, and integrate analytics early to ensure continuous optimization."
  },
  {
    id: "faq-8",
    question: "How does this service support AI visibility?",
    answer: "We construct your platform with semantically pristine schemas, structured JSON-LD configurations, and high-quality crawlable hierarchies. This allows LLM bots (like OpenAI, Gemini, and Perplexity) to index and cite your products directly in AI-generated answers."
  },
  {
    id: "faq-9",
    question: "What does a typical engagement look like?",
    answer: "It starts with an audit and intent map (2 weeks), followed by high-fidelity sprint wireframes and visual design (1 week of strategy, 3 weeks of execution), full custom development and pipeline integration (3 weeks), and final pre-launch speed/SEO optimization before going live."
  }
];
