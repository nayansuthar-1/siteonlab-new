/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MetricItem {
  id: string;
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
}

export interface Differentiator {
  title: string;
  description: string;
  badge: string;
}

export interface CaseStudy {
  industry: string;
  headline: string;
  shortCopy: string;
  metric: string;
  timeline: string;
  adChannels: string[];
}

export interface RelatedService {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
