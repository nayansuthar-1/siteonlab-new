export interface KeywordRankData {
  keyword: string;
  searchVolume: string;
  competitors: string[];
  clientRankBefore: number;
  clientRankAfter: number;
  monthlyValue: string;
  city: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  tag: string;
  headline: string;
  challenge: string;
  solution: string;
  metric: string;
  metricLabel: string;
  timeline: string;
  companyName: string;
  logoColor: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceComponent {
  title: string;
  description: string;
  icon: string;
  benefit: string;
  metric: string;
}

export interface AssessmentQuestion {
  id: number;
  text: string;
  category: string;
  options: {
    text: string;
    score: number;
    tip: string;
  }[];
}
