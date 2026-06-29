export interface ChallengeCard {
  id: string;
  title: string;
  description: string;
  impact: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  outcome: string;
}

export interface JourneyStage {
  id: string;
  stageName: string;
  buyerMindset: string;
  challenges: string;
  marketingStrategy: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  timeline: string;
  deliverables: string[];
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  metricLabel?: string;
  metricValue?: string;
}

export interface ServiceCard {
  id: string;
  name: string;
  description: string;
  linkText: string;
  url: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  companyName: string;
  challenge: string;
  solution: string;
  outcome: string;
  timeline: string;
  metrics: { label: string; value: string }[];
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
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
