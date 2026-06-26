export interface TrustMetric {
  value: string;
  label: string;
}

export interface ServiceComponent {
  title: string;
  description: string;
  icon: string; // Lucide icon key name
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeline: string;
}

export interface DifferentiatorCard {
  title: string;
  description: string;
  icon: string; // Lucide icon key name
}

export interface CaseStudyCard {
  industry: string;
  headline: string;
  description: string;
  metric: string;
  timeline: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  companyType: string;
  proofLine: string; // e.g. "+312% organic growth · 9 months"
}

export interface RelatedServiceCard {
  title: string;
  description: string;
  icon: string; // Lucide icon key name
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  // SEO Metadata
  seoTitle: string;
  seoDescription: string;

  // 1. Hero
  serviceCategory: string;
  serviceName: string;
  outcome1: string;
  outcome2: string;
  outcome3: string;
  icp: string;
  serviceChannel: string;
  primaryBenefit: string;
  secondaryBenefit: string;
  conversionBenefit: string;
  primaryCtaText: string;
  secondaryCtaText: string;

  // 2. Trust Metrics
  trustMetrics: TrustMetric[];

  // 3. Service Overview
  overviewH2: string;
  overviewParagraph: string;
  serviceComponents: ServiceComponent[];

  // 4. Process Section
  processH2: string;
  processSteps: ProcessStep[];

  // 5. Why Choose Us Section
  whyChooseUsH2: string;
  whyChooseUsParagraph: string;
  differentiators: DifferentiatorCard[];

  // 6. Case Studies Section
  caseStudiesH2: string;
  caseStudies: CaseStudyCard[];

  // 7. Testimonial Section
  testimonial: TestimonialData;

  // 8. Related Services Section
  relatedServicesH2: string;
  relatedServices: RelatedServiceCard[];

  // 9. FAQ Section
  faqH2: string;
  faqs: FAQItem[];

  // 10. Final CTA Section
  finalCtaH2: string;
  finalCtaCopy: string;
  finalPrimaryCta: string;
  finalSecondaryCta: string; // Relevant Assessment name
}
