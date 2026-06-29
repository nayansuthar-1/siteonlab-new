/**
 * Types and interfaces for the HybridMonks B2B Website Design & Development Service Page
 */

export interface Metric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ServiceComponent {
  id: string;
  title: string;
  description: string;
  features: string[];
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
  description: string;
  metric: string;
  timeline: string;
  tag: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  companyType: string;
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
