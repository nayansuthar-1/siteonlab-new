export interface Metric {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  accentColor: string;
}

export interface ServiceComponent {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  timeline: string;
  deliverables: string[];
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  subIndustry: string;
  headline: string;
  shortCopy: string;
  metricValue: string;
  metricLabel: string;
  timeline: string;
  challenge: string;
  approach: string;
  results: string[];
}

export interface RelatedService {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
