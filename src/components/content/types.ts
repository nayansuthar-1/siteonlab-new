export interface TrustMetric {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface ServiceComponent {
  id: string;
  title: string;
  description: string;
  tag: string;
  features: string[];
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
  badge: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  clientType: string;
  headline: string;
  challenge: string;
  strategy: string;
  shortCopy: string;
  metric: string;
  metricLabel: string;
  timeline: string;
  stats: { label: string; value: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  companyType: string;
  companyName: string;
  proofLine: string;
  avatarSeed: string;
}

export interface RelatedService {
  id: string;
  title: string;
  description: string;
  synergy: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
