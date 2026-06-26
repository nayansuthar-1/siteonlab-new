/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceComponent {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  timeline: string;
  deliverables: string[];
}

export interface WhyUsItem {
  title: string;
  description: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  industry: string;
  tag: string;
  headline: string;
  shortCopy: string;
  metric: string;
  timeline: string;
}

export interface RelatedService {
  title: string;
  description: string;
  tag: string;
}

export interface BlueprintFormData {
  companyName: string;
  industry: string;
  icp: string;
  crm: string;
  automationTool: string;
  listSize: string;
  painPoint: string;
}

export interface AssessmentAnswers {
  database: number;
  nurture: number;
  alignment: number;
  scoring: number;
  attribution: number;
}
