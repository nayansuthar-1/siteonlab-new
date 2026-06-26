export interface BlueprintRequest {
  domain: string;
  businessType: string;
  techStack: string;
  concerns: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export interface ServiceComponent {
  id: string;
  title: string;
  description: string;
  techTag: string;
  outcome: string;
}

export interface ProcessStep {
  id: string;
  stepNum: string;
  title: string;
  description: string;
  timeline: string;
}

export interface DifferentiatorCard {
  id: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  tag: string;
  headline: string;
  shortCopy: string;
  metric: string;
  metricLabel: string;
  timeline: string;
}

export interface Testimonial {
  quote: string;
  client: string;
  title: string;
  companyType: string;
  proofLine: string;
}

export interface RelatedService {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
