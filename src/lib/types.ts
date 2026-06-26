export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface PainPointItem {
  id: number;
  pain: string;
  solution: string;
}

export interface FrameworkStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface IndustryTile {
  id: string;
  title: string;
  iconName: string;
  description: string;
}

export interface CaseStudyItem {
  id: number;
  sector: string;
  title: string;
  metric: string;
  metricLabel: string;
  resultsDetail: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface BlogPostItem {
  id: number;
  category: string;
  title: string;
  readTime: string;
  date: string;
  summary: string;
}
