export interface ServiceComponent {
  id: string;
  title: string;
  description: string;
  icon: string;
  businessImpact: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  timeline: string;
  activities: string[];
}

export interface Differentiator {
  title: string;
  description: string;
  icon: string;
  metricLabel?: string;
  metricValue?: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  headline: string;
  shortCopy: string;
  metric: string;
  timeline: string;
  challenge: string;
  solution: string;
  resultDetails: string[];
  mockChartData: { month: string; organic: number; aiCitations: number }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  companyType: string;
  metric: string;
  timeline: string;
  avatarSeed: string;
}

export interface RelatedService {
  title: string;
  description: string;
  icon: string;
  primaryMetric: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface SimulatorEngine {
  name: string;
  icon: string;
  status: 'optimal' | 'moderate' | 'unoptimized';
  citationRate: string;
  color: string;
  syntheticResponse: string;
  suggestedAction: string;
}

export interface BlueprintSubmission {
  companyName: string;
  website: string;
  industry: string;
  mainCompetitor: string;
  primaryGoal: string;
}
