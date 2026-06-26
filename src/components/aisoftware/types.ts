export interface CaseStudy {
  id: string;
  industry: string;
  headline: string;
  shortCopy: string;
  metric: string;
  timeline: string;
  logoColor: string;
  tags: string[];
}

export interface ServiceComponent {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  timeline: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Differentiator {
  title: string;
  description: string;
  bullet: string;
}

export interface RelatedService {
  title: string;
  description: string;
  benefit: string;
}
