/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceComponent {
  id: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeline: string;
}

export interface DifferentiatorCard {
  id: string;
  title: string;
  description: string;
  benefit: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  subCategory: string;
  headline: string;
  shortCopy: string;
  metric: string;
  metricLabel: string;
  timeline: string;
  tags: string[];
}

export interface RelatedService {
  id: string;
  title: string;
  description: string;
  primaryMetric: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
