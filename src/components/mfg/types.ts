export interface Challenge {
  id: string;
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  outcome: string;
}

export interface JourneyStage {
  id: string;
  stageName: string;
  buyerMindset: string;
  challenge: string;
  siteOnLabSupport: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  timeline: string;
  deliverables: string[];
}

export interface Differentiator {
  title: string;
  description: string;
}

export interface ServiceCard {
  name: string;
  description: string;
  link: string;
}

export interface CaseStudy {
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
  timeline: string;
}

export interface Testimonial {
  quote: string;
  clientName: string;
  role: string;
  company: string;
  outcome: string;
  timeline: string;
}

export interface RelatedIndustry {
  name: string;
  description: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
