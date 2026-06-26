/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TrustMetric {
  value: string;
  label: string;
  description: string;
}

export interface ServiceComponent {
  title: string;
  description: string;
  benefits: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeline: string;
}

export interface Differentiator {
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  industry: string;
  headline: string;
  shortCopy: string;
  metric: string;
  timeline: string;
  tags: string[];
}

export interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  companyType: string;
  metric: string;
  timeline: string;
}

export interface RelatedService {
  title: string;
  description: string;
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
