/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface ServiceComponent {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeline: string;
  deliverable: string;
}

export interface Differentiator {
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  headline: string;
  challenge: string;
  solution: string;
  metric: string;
  metricLabel: string;
  timeline: string;
}

export interface RelatedService {
  title: string;
  description: string;
  benefit: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AssessmentQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}
