export interface TargetAccount {
  id: string;
  name: string;
  domain: string;
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3';
  industry: string;
  engagementScore: number;
  status: 'Intent Sourced' | 'Ad Targeting' | 'Custom Landing Page' | 'Sales Outreach' | 'Demo Booked';
  contactsCount: number;
  intentLevel: 'Low' | 'Medium' | 'High' | 'Surging';
  recentActivity: string;
}

export interface MetricCard {
  id: string;
  title: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  headline: string;
  description: string;
  metric: string;
  timeline: string;
  contactsEngaged: number;
  contractValue: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedService {
  title: string;
  description: string;
  linkText: string;
}
