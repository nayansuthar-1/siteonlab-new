export interface TrustMetric {
  id: string;
  value: string;
  label: string;
}

export interface ServiceComponent {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  timeline: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  headline: string;
  shortCopy: string;
  metric: string;
  timeline: string;
}

export interface RelatedService {
  id: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
