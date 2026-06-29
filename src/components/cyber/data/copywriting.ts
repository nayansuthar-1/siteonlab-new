import {
  ChallengeCard,
  SolutionCard,
  JourneyStage,
  ProcessStep,
  Differentiator,
  ServiceCard,
  CaseStudy,
  Testimonial,
  RelatedIndustry,
  FaqItem
} from "../types";

export const CYBERSECURITY_COPY = {
  seo: {
    titleTag: "B2B Cybersecurity Marketing & SEO Agency | SiteOnLab",
    metaDescription: "We build revenue-first growth engines for cybersecurity firms. Scale pipeline, dominate high-intent organic search, and establish AI visibility. Get a Growth Blueprint.",
    urlSlug: "/industries/cybersecurity",
    h1: "B2B Cybersecurity Marketing That Translates Technical Authority into Predictable Pipeline.",
    suggestedInternalLinks: [
      { page: "SEO Strategy", path: "/services/seo", purpose: "Anchor of organic acquisition for security tools" },
      { page: "Generative Engine Optimization (GEO)", path: "/services/geo", purpose: "Capture visibility in ChatGPT, Gemini, and Google AI Overviews" },
      { page: "B2B Web Development", path: "/services/web-design-development", purpose: "Build trusted, high-converting enterprise sites" },
      { page: "Revenue & Pipeline Analytics", path: "/services/revenue-analytics", purpose: "Connect marketing spend directly to Closed-Won ARR" }
    ],
    suggestedExternalLinks: [
      { resource: "Gartner Security & Risk Management Summit Insights", url: "https://www.gartner.com", purpose: "Citing shifting CISO purchase behaviors" },
      { resource: "SANS Institute Cyber Security Survey Reports", url: "https://www.sans.org", purpose: "Reference data on technical threat landscapes" }
    ],
    schemaRecommendations: {
      breadcrumb: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://siteonlab.com" },
          { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://siteonlab.com/industries" },
          { "@type": "ListItem", "position": 3, "name": "Cybersecurity B2B Marketing", "item": "https://siteonlab.com/industries/cybersecurity" }
        ]
      },
      organization: {
        "@context": "https://schema.org",
        "@type": "GovernmentService",
        "name": "SiteOnLab Growth Agency",
        "url": "https://siteonlab.com",
        "logo": "https://siteonlab.com/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/siteonlab",
          "https://twitter.com/siteonlab"
        ]
      },
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [] // Will map the 10 FAQs
      }
    }
  },

  hero: {
    eyebrow: "INDUSTRIES | CYBERSECURITY",
    h1: "B2B Cybersecurity Marketing That Translates Technical Authority into Predictable Pipeline.",
    supportingCopy: "CISOs, CTOs, and Security Directors don't buy from generic marketing pitches. They buy from trusted authorities who speak their language. We build high-intent SEO, AI search visibility (GEO), specialized ABM campaigns, and zero-friction digital platforms designed to engage the modern cybersecurity buying group and accelerate your pipeline velocity.",
    primaryCta: "Request a Growth Blueprint",
    secondaryCta: "See Case Studies",
    metrics: [
      { value: "$180M+", label: "Client Pipeline Generated", description: "Directly attributed sales pipeline across B2B security accounts" },
      { value: "+312%", label: "Average Organic Search Lift", description: "Increase in top-of-funnel non-branded keyword acquisition within 12 months" },
      { value: "100%", label: "SME-Backed Content", description: "Technical writers vetted for compliance, threat intel, and cloud security understanding" },
      { value: "4.8x", label: "Average Pipeline ROI", description: "Return on ad spend and SEO investment traced to closed-won revenue" }
    ]
  },

  challenges: {
    eyebrow: "INDUSTRY CHALLENGES",
    h2: "Why Growing a Modern Cybersecurity Company is Becoming More Competitive.",
    introduction: "The cybersecurity buyer is the most skeptical audience on the web. Decades of overhyped promises, 'magic bullet' claims, and generic threat-level warnings have made security decision-makers heavily insulated. They actively hide their buying signals, block trackers, and ignore generic marketing outreaches. Relying on basic lead-generation playbooks is no longer enough to build an enterprise pipeline.",
    cards: [
      {
        id: "ciso-skepticism",
        title: "The 'CISO Skepticism Barrier' & Technical Buying Committees",
        description: "Chief Information Security Officers (CISOs) and their technical architects reject standard marketing material. If your content lacks deep practitioner knowledge of vulnerabilities, protocols, frameworks, and deployment patterns, you lose trust instantly.",
        impact: "Marketing materials and blog posts written by generalist copywriters fall flat, leading to zero engagement and high bounce rates among senior technical evaluators."
      },
      {
        id: "long-buying-cycles",
        title: "Multi-Touch, Long Sales Cycles with Invisible Buying Groups",
        description: "Cybersecurity purchase processes involve extensive validation, including compliance reviews (SOC 2, ISO 27001), threat modeling, and vendor risk assessments. Sales cycles average 6 to 18 months, with a massive buying committee that stays invisible for 80% of the journey.",
        impact: "Traditional direct sales cycles are longer and more expensive, while teams struggle to maintain engagement across multi-stakeholder purchasing paths."
      },
      {
        id: "dark-social-self-education",
        title: "Dark Social and Self-Guided Vendor Selection",
        description: "Security experts research solutions in closed communities (Reddit's r/sysadmin, private Slack groups, local SANS networks, and peer recommendations). They select and evaluate products completely in the dark, without visiting your tracking-instrumented pages.",
        impact: "Standard attribution models fail, and buyers don't contact sales until they've already shortlisted 2-3 vendors, bypassing traditional outbound tactics."
      },
      {
        id: "high-cpc-paid-ads",
        title: "Sky-High CPCs and Budget Inefficiencies in Paid Search",
        description: "Paid terms like 'Endpoint Security SaaS' or 'MDR Solutions' can command over $80 per click. Competitors bid up keywords aggressively, and generalist agencies spend budgets on broad-match terms that drive unqualified leads.",
        impact: "SaaS companies deplete their paid budgets on low-intent clicks, failing to convert them to opportunities and resulting in unsustainable CAC."
      },
      {
        id: "ai-search-disruption",
        title: "AI Search Disruption (SGE, Gemini, Perplexity)",
        description: "Buyers are increasingly using large language models and search engines like Perplexity, Gemini, and ChatGPT to evaluate tech stacks. If your brand is not mentioned as a key entity in the training sets and index citations of these models, you are effectively invisible.",
        impact: "Organic search traffic drops as informational queries are answered directly within search interfaces, rendering legacy SEO approaches obsolete."
      },
      {
        id: "mql-sql-disconnect",
        title: "The Disconnect Between Leads (MQLs) and Pipeline Value",
        description: "Agencies often report success based on cheap content downloads and whitepaper sign-ups (MQLs). However, cybersecurity sales teams waste cycles chasing junior admins or students, while executive decision-makers go unreached.",
        impact: "Marketing reports high 'lead' volume while sales reports empty pipelines, creating internal tension and wasting commercial bandwidth."
      }
    ] as ChallengeCard[]
  },

  solutions: {
    eyebrow: "OUR SOLUTION",
    h2: "A Complete B2B Growth System Built Specifically for Cybersecurity.",
    introduction: "We reject generic B2B playbooks. Our cybersecurity growth framework is designed around technical accuracy, non-intrusive self-guided education, high-intent visibility, and full-funnel attribution that aligns marketing metrics to net-new ARR.",
    cards: [
      {
        id: "technical-seo",
        title: "SME-Backed Technical SEO",
        description: "We optimize your site architecture for high-velocity indexing and target high-commercial-intent keywords. Our technical content is co-written with real cybersecurity practitioners to pass CISO evaluation.",
        outcome: "Rank #1 for high-intent search terms that capture active in-market buyers, not just casual information seekers."
      },
      {
        id: "geo-optimization",
        title: "Generative Engine Optimization (GEO)",
        description: "We map out your industry's entity graph and structure your content to guarantee your brand appears as a recommended vendor when security practitioners query ChatGPT, Gemini, and Perplexity.",
        outcome: "Secure top placement and authoritative citations in AI-generated answers, maintaining visibility across the future of search."
      },
      {
        id: "trusted-websites",
        title: "High-Converting, Zero-Friction Websites",
        description: "We design websites that emphasize security posture and establish trust immediately. We replace high-barrier gated whitepapers with interactive product tours, self-guided sandboxes, and transparent pricing pages.",
        outcome: "Double your visitor-to-demo conversion rate by matching the buyer's preference for self-education and instant product validation."
      },
      {
        id: "subject-matter-content",
        title: "Technical Content & Thought Leadership",
        description: "We create in-depth threat briefs, architectural deep-dives, competitive comparison hubs, and compliance checklists. We target technical directors with data, not sales speak.",
        outcome: "Establish uncontested authority in Dark Social circles and earn premium backlinks from academic and technical platforms."
      },
      {
        id: "abm-paid-acquisition",
        title: "Account-Based Marketing (ABM) & Custom Search Ads",
        description: "We target specific accounts using custom copy matching their exact threat landscape. We execute laser-targeted campaigns across LinkedIn, Google Search, and industry networks with absolute precision.",
        outcome: "Eliminate ad waste by only paying for clicks from pre-vetted target accounts, driving higher SQL conversions at a lower cost."
      },
      {
        id: "revenue-analytics",
        title: "Full-Funnel Pipeline & Revenue Analytics",
        description: "We integrate your Salesforce, HubSpot, and marketing platforms to track buyer touchpoints from initial AI mention or organic click to final closed-won ARR, proving exact ROI.",
        outcome: "Gain absolute clarity on customer acquisition cost (CAC) and lifetime value (LTV), aligning your board and internal sales teams."
      },
      {
        id: "ai-agents-automation",
        title: "AI Agents & Automation for Sales Enablement",
        description: "We build custom AI agents to enrich inbound leads, automate technical qualification, draft contextual responses to security RFPs, and deliver personalized target-account research.",
        outcome: "Reduce sales response times from hours to seconds, qualifying high-value enterprise accounts instantly."
      }
    ] as SolutionCard[]
  },

  journey: {
    eyebrow: "BUYER JOURNEY",
    h2: "How Modern Cybersecurity Buyers Evaluate and Select Vendors.",
    introduction: "In B2B cybersecurity, purchasing is rarely linear. It's a highly deliberated team sport. SiteOnLab maps your growth initiatives against the distinct phases of the technical buying committee to ensure your product is the obvious choice.",
    stages: [
      {
        id: "awareness",
        stageName: "1. Active Problem Trigger (Awareness)",
        buyerMindset: "The security team notices an alert, faces an impending audit, or experiences an architectural bottleneck. They need an immediate understanding of how to address the vulnerability or compliance gap.",
        challenges: "They are bombarded by vague market noise and 'zero-day' panic-inducing newsletters.",
        marketingStrategy: "We publish educational threat analyses, API vulnerability walk-throughs, and open-source validation scripts. No product pitch; we provide immediate, high-value technical utility that earns trust."
      },
      {
        id: "research",
        stageName: "2. Silent Self-Guided Discovery (Research)",
        buyerMindset: "The technical committee researches architectural methodologies. They look for detailed comparisons, open-source alternatives, and discuss implementations on Reddit or private Discord groups.",
        challenges: "They refuse to book a sales demo just to see the user interface or check feature tables.",
        marketingStrategy: "We build comprehensive, ungated comparison hubs (e.g., 'EDR vs. MDR') and interactive product sandbox environments. We optimize for AI search queries so AI engines recommend your solution."
      },
      {
        id: "evaluation",
        stageName: "3. Proof-of-Concept & Validation (Evaluation)",
        buyerMindset: "A shortlist of 2-3 vendors is established. The team evaluates the product's performance impact, deployment complexity, api coverage, and documentation quality.",
        challenges: "Rigid security questionnaires, compliance checks, and integration anxieties.",
        marketingStrategy: "We optimize your documentation architecture, draft transparent security posture pages, and build interactive ROI and compliance-mapping calculators that simplify internal reviews."
      },
      {
        id: "decision",
        stageName: "4. Internal Buy-In & Procurement (Decision)",
        buyerMindset: "The CISO has selected the vendor but needs to justify the spend to the CIO, CFO, and CEO. They require a clear business case and assurance of seamless integration.",
        challenges: "Budget freezes, risk of legacy contract overlaps, and internal political friction.",
        marketingStrategy: "We provide high-impact case studies focused on operational efficiency, legacy tool consolidation, and resource savings. We design pitch kits that turn technical champions into expert internal sellers."
      }
    ] as JourneyStage[]
  },

  process: {
    eyebrow: "OUR PROCESS",
    h2: "From Technical Strategy to Predictable Enterprise Revenue.",
    introduction: "We align our efforts to your unique quarterly goals. Our four-stage execution roadmap ensures you receive actionable value from day one, transitioning from audit to sustained growth.",
    steps: [
      {
        step: 1,
        title: "Technical Discovery & Pipeline Audit",
        description: "We audit your existing search landscape, identify intent-based keyword gaps, trace your current attribution channels, and map your technical entity positioning within AI model indexes.",
        timeline: "Weeks 1 - 2",
        deliverables: [
          "Technical Keyword & Content Gap Analysis",
          "AI Search Visibility Index & Share-of-Voice Audit",
          "Conversion Friction & User Journey Diagnostic",
          "Attribution System & Lead Routing Audit"
        ]
      },
      {
        step: 2,
        title: "Growth Blueprint & Custom Architecture",
        description: "We build a detailed 12-month execution model outlining specific high-intent keyword targets, paid-ad placement strategies, custom schema mockups, and AI visibility tactics tailored to your ICP.",
        timeline: "Weeks 3 - 4",
        deliverables: [
          "SME Content Strategy & Calendar",
          "Custom Paid Acquisition (ABM) Playbook",
          "SEO Technical Infrastructure & Schema Map",
          "Website Conversion Rate Optimization (CRO) Plan"
        ]
      },
      {
        step: 3,
        title: "SME-Backed Content & Campaign Launch",
        description: "We execute. We produce deep technical articles with our cybersecurity subject matter experts, rebuild underperforming landing pages, structure schemas, and launch target-account campaigns.",
        timeline: "Month 2 and onward",
        deliverables: [
          "High-Authority, SME-Written Technical Content",
          "Optimized High-Velocity Search & ABM Campaigns",
          "High-Performance Custom Landing Pages",
          "Custom JSON-LD Schema Integrations"
        ]
      },
      {
        step: 4,
        title: "Sustained Revenue Optimization",
        description: "We run continuous A/B tests, expand your entity coverage, refine bids, monitor AI search rankings, and report directly on pipeline acceleration and Closed-Won revenue metrics.",
        timeline: "Continuous Monthly Cycle",
        deliverables: [
          "A/B Landing Page & Form Optimization",
          "Weekly Pipeline & Closed-Won Revenue Attribution",
          "AI Citations Tracking & GEO Tweaks",
          "Quarterly Business Strategy Alignment Reviews"
        ]
      }
    ] as ProcessStep[]
  },

  whyChoose: {
    eyebrow: "WHY SITEONLAB",
    h2: "A B2B Growth Agency That Actually Understands Security.",
    introduction: "Most marketing agencies struggle to explain the difference between a firewalled port and a container endpoint. We live and breathe enterprise B2B cybersecurity, translating complex threat protection frameworks into high-converting revenue pipelines.",
    differentiators: [
      {
        id: "sme-writers",
        title: "True Cybersecurity Domain Expertise",
        description: "Our content is overseen, validated, and co-written by cybersecurity professionals holding CISSP, CEH, and Security+ credentials. We never publish high-level fluff that alienates technical buyers.",
        metricLabel: "Practitioners Vetted",
        metricValue: "24/"
      },
      {
        id: "revenue-focus",
        title: "Revenue-First Performance Metrics",
        description: "We don't report on vanity metrics like impressions, clicks, or simple 'downloads'. We measure our success on pipeline velocity, sales opportunities generated, and cost per enterprise demo.",
        metricLabel: "Average CAC Reduction",
        metricValue: "42%"
      },
      {
        id: "ai-first-seo",
        title: "AI-First Visibility Leaders (GEO)",
        description: "We are pioneers in Generative Engine Optimization. We don't just optimize for standard search engines; we design your digital footprint so that enterprise LLM recommenders index and prioritize your software.",
        metricLabel: "AI Mentions Increase",
        metricValue: "3.5x"
      },
      {
        id: "senior-delivery",
        title: "Senior-Level Execution, No Junior Hand-Offs",
        description: "You work directly with agency partners, senior conversion strategists, and seasoned developers. Your account is never passed off to junior account executives or inexperienced coordinators.",
        metricLabel: "Client Retention Rate",
        metricValue: "94%"
      }
    ] as Differentiator[]
  },

  services: {
    eyebrow: "SERVICES",
    h2: "Growth Services Engineered for Cybersecurity Companies.",
    introduction: "Every channel is coordinated. We deploy custom SaaS-focused channels that reduce your customer acquisition cost while scaling qualified pipeline.",
    cards: [
      {
        id: "seo",
        name: "Enterprise Technical SEO",
        description: "Deep crawl-budget optimization, intent-centric keyword clusters, and secure server-side schemas built for enterprise cybersecurity search dominance.",
        linkText: "Learn more about SEO Strategy",
        url: "/services/seo"
      },
      {
        id: "geo",
        name: "AI & Generative Engine Optimization",
        description: "Structure your site entities and secure key citations to guarantee top-of-mind recommendations in Perplexity, Gemini, and ChatGPT enterprise searches.",
        linkText: "Explore AI Search Visibility",
        url: "/services/geo"
      },
      {
        id: "webdev",
        name: "Security-First Web Design",
        description: "Custom headless architectures, lightning-fast loads, SOC-2 compliant secure forms, and interactive, self-guided product walkthrough interfaces.",
        linkText: "See Web Development",
        url: "/services/web-design-development"
      },
      {
        id: "content",
        name: "SME-Backed Content Marketing",
        description: "Whitepapers, competitive matrices, interactive tools, and blog posts designed specifically to appeal to CISOs, systems engineers, and CIOs.",
        linkText: "Browse Content Strategy",
        url: "/services/content-marketing"
      },
      {
        id: "paid",
        name: "High-Intent Search & LinkedIn ABM",
        description: "Hyper-targeted paid marketing excluding unqualified accounts, focusing purely on buying groups at enterprise security organizations.",
        linkText: "View Paid Advertising",
        url: "/services/paid-advertising"
      },
      {
        id: "revenue-analytics",
        name: "Attribution & Revenue Analytics",
        description: "Full-funnel HubSpot & Salesforce telemetry, allowing your board to trace every single marketing dollar spent back to closed-won ARR.",
        linkText: "Discover Revenue Analytics",
        url: "/services/revenue-analytics"
      }
    ] as ServiceCard[]
  },

  caseStudies: {
    eyebrow: "SUCCESS STORIES",
    h2: "Measurable Revenue & Pipeline Growth from the Trenches.",
    cards: [
      {
        id: "cloud-siem",
        industry: "Enterprise SIEM & SOC SaaS",
        companyName: "VigilantOps Security",
        challenge: "Struggled with flatlining demo registrations and an unsustainable $240 CAC in Google Ads, with content failing to engage technical security directors.",
        solution: "Rebuilt their site into a zero-friction hub, built out comprehensive technical comparisons for their core SIEM terms, and implemented custom structural schema markup for their entity graph.",
        outcome: "Generated +312% in qualified enterprise demo bookings, reduced customer acquisition cost (CAC) by 55%, and unlocked $14.2M in net-new pipeline value.",
        timeline: "12 Months",
        metrics: [
          { label: "Pipeline Generated", value: "$14.2M" },
          { label: "CAC Reduction", value: "55%" },
          { label: "Demo Volume Lift", value: "+312%" }
        ]
      },
      {
        id: "mdr-provider",
        industry: "Managed Detection & Response (MDR)",
        companyName: "Cybershield Networks",
        challenge: "Invisible on AI search platforms (Perplexity, ChatGPT) where enterprise CIOs were researching next-generation SOC providers, and missed key referral triggers.",
        solution: "Executed a complete Generative Engine Optimization strategy, publishing deep threat briefs and comparative guides that satisfied citation structures for LLM indexing engines.",
        outcome: "Established clear entity dominance. Secured over 120 key citations across ChatGPT, Perplexity, and Google AI Overviews, resulting in an 180% increase in inbound pipeline.",
        timeline: "8 Months",
        metrics: [
          { label: "Inbound Pipeline", value: "+180%" },
          { label: "AI Citations Secured", value: "120+" },
          { label: "Sales Qualified Leads", value: "+94%" }
        ]
      },
      {
        id: "api-compliance",
        industry: "Cloud & API Security Platform",
        companyName: "ApexAPI Security",
        challenge: "A seed-stage SaaS company starting from zero web presence, needing to rapidly secure enterprise pilots before their Series A round under a strict timeline.",
        solution: "Built a lightning-fast custom web platform, deployed targeted LinkedIn Account-Based Marketing (ABM) funnels mapping exact compliance regulations (PCI-DSS, HIPAA), and published detailed architectural threat walk-throughs.",
        outcome: "Secured 14 enterprise pilot contracts within 6 months, contributing over $1.8M in ARR, and successfully closed an oversubscribed Series A funding round.",
        timeline: "6 Months",
        metrics: [
          { label: "Enterprise Pilots", value: "14" },
          { label: "Sourced ARR", value: "$1.8M" },
          { label: "Time-to-Market", value: "6 Mos" }
        ]
      }
    ] as CaseStudy[]
  },

  testimonial: {
    quote: "SiteOnLab is the first agency we've ever worked with that actually understands what a container breakout or a zero-trust architecture is. They speak our buyers' language with complete accuracy. Within 10 months, our non-branded search pipeline grew by 240%, and we now dominate AI-search recommendations across our enterprise product categories.",
    clientName: "Sarah Jenkins",
    role: "VP of Enterprise Marketing",
    company: "Ironclad Cloud Security",
    outcome: "+240% Organic Search Pipeline Growth",
    timeline: "10 Months of Partnership"
  } as Testimonial,

  relatedIndustries: [
    { id: "saas", name: "SaaS & Cloud Apps", description: "Scale user growth and optimize self-guided product discovery paths.", url: "/industries/saas" },
    { id: "tech", name: "Advanced Technology", description: "B2B growth strategies for complex, high-investment technology solutions.", url: "/industries/technology" },
    { id: "it-services", name: "IT Services", description: "Generate qualified contracts and escape the price-competition trap.", url: "/industries/it-services" },
    { id: "msp", name: "Managed Service Providers", description: "Dominate local search markets and build trusted recurring pipelines.", url: "/industries/msp" },
    { id: "manufacturing", name: "Manufacturing", description: "Digital transformation and lead acquisition for modern industrial brands.", url: "/industries/manufacturing" },
    { id: "healthcare", name: "Healthcare & Life Sciences", description: "Navigate complex HIPAA compliance and capture high-value buyer intent.", url: "/industries/healthcare" },
    { id: "professional-services", name: "Professional Services", description: "Establish authoritative thought-leadership to win high-value consulting contracts.", url: "/industries/professional-services" },
    { id: "logistics", name: "Logistics & Supply Chain", description: "Scale commercial transport acquisition and expand enterprise freight accounts.", url: "/industries/logistics" }
  ] as RelatedIndustry[],

  faqs: [
    {
      question: "Why is marketing for cybersecurity companies different from general B2B SaaS?",
      answer: "Cybersecurity marketing is fundamentally different because security buyers (CISOs, security engineers, CIOs) are the most skeptical audience online. They have high technical standards and have been desensitized by decades of fear-mongering and generic claims. Generalist agencies rely on content that lacks deep threat understanding, which immediately damages credibility. To succeed, cybersecurity marketing must align with absolute technical accuracy, offer frictionless, self-guided product exploration, and speak the precise technical language of practitioners."
    },
    {
      question: "Which channels perform best for cybersecurity lead generation?",
      answer: "High-intent search channels (Technical SEO & targeted Google Search) and precise LinkedIn Account-Based Marketing (ABM) perform best. Informational channels help build dark social brand awareness, but direct customer acquisition is driven by buyers looking for answers to specific architectural, threat-intel, or compliance problems. We focus on ranking your site for commercial terms and configuring targeted ABM parameters to present highly specific compliance or structural solutions directly to security decision-makers."
    },
    {
      question: "How long until we see measurable revenue results?",
      answer: "We typically show significant increases in non-branded organic reach, technical site health, and qualified paid conversions within 90 days. However, because enterprise cybersecurity sales cycles often range from 6 to 18 months, full bottom-line revenue impact (Closed-Won ARR) scales between months 6 and 12. We establish intermediate pipeline milestones (such as Sales Qualified Leads and Demo Opportunities) to track and optimize campaigns in real-time."
    },
    {
      question: "How do you measure marketing ROI for our board?",
      answer: "We do not report on surface metrics like impressions, traffic, or PDF downloads. We integrate directly with your CRM (Salesforce, HubSpot) to trace marketing initiatives directly to pipeline opportunities, pipeline velocity, cost-per-opportunity, and customer acquisition cost (CAC). Your board receives clear, auditable dashboards mapping every dollar spent directly to net-new ARR."
    },
    {
      question: "Do you work with our internal marketing and product teams?",
      answer: "Yes. We act as an extension of your internal team, working alongside your in-house marketing managers, content directors, and product teams. We handle technical execution, high-intent campaign management, and advanced technical SEO, while collaborating closely with your subject-matter experts to extract the deep practitioner insights required to make content succeed."
    },
    {
      question: "What size cybersecurity companies do you work with?",
      answer: "We primarily partner with mid-market, venture-backed (Series A through Growth Stage), and enterprise cybersecurity companies seeking to scale their marketing operations. Our typical partners already have product-market fit and are looking for a highly technical, dedicated B2B growth agency to build a predictable, repeatable pipeline engine."
    },
    {
      question: "Can you redesign or rebuild our cybersecurity website?",
      answer: "Yes, we design and build lightning-fast, highly secure, custom Web platforms. We focus on establishing trust and driving conversions. Our designs prioritize clear typography, interactive self-guided product tours, transparent SOC 2 / compliance indicators, and zero-friction forms that align with modern B2B buying preferences."
    },
    {
      question: "How does AI Search (Google AI Overviews, Perplexity) impact cybersecurity SEO?",
      answer: "AI search engines are heavily disrupting traditional informational search. Instead of clicking links, security professionals increasingly ask LLMs to compare tools directly. We use Generative Engine Optimization (GEO) to optimize your brand's digital footprint. We structure entity schema markups, gain key citations on authoritative practitioner networks, and design content so that AI engines index your tool as a recommended solution."
    },
    {
      question: "Which SiteOnLab service should we start with?",
      answer: "Most partnerships begin with our comprehensive B2B Growth Blueprint. Over 4 weeks, we audit your existing marketing, analyze your AI visibility, identify keyword opportunities, and deliver an actionable execution roadmap. This allows you to evaluate our technical depth and strategic accuracy with zero long-term commitment."
    },
    {
      question: "What happens during and after the onboarding phase?",
      answer: "During onboarding (Weeks 1-2), we hook up our advanced revenue tracking platforms, audit your organic performance, interview your product engineering team, and align search goals. Immediately after, we deliver your 12-month Growth Blueprint and begin technical SEO optimization and high-intent campaign creation, launching your first high-converting channels in Month 2."
    }
  ] as FaqItem[]
};
