/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ChallengeCard {
  id: string;
  title: string;
  explanation: string;
  impact: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  explanation: string;
  outcome: string;
  iconName: string;
}

export interface JourneyStage {
  stage: string; // e.g. "Awareness"
  title: string;
  buyerMindset: string;
  keyChallenge: string;
  siteonlabSupport: string;
  metricsToWatch: string;
}

export interface ProcessStep {
  step: number;
  name: string;
  description: string;
  timeline: string;
  deliverables: string[];
}

export interface DifferentiatorCard {
  id: string;
  title: string;
  explanation: string;
}

export interface ServiceCard {
  id: string;
  name: string;
  description: string;
  internalLink: string;
  iconName: string;
}

export interface CaseStudyCard {
  id: string;
  industry: string;
  clientName: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  timeline: string;
}

export interface Testimonial {
  quote: string;
  clientName: string;
  role: string;
  company: string;
  outcome: string;
  timeline: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedIndustry {
  name: string;
  description: string;
  internalLink: string;
}

export interface SEORequirements {
  titleTag: string;
  metaDescription: string;
  urlSlug: string;
  h1: string;
  suggestedInternalLinks: { page: string; purpose: string }[];
  suggestedExternalLinks: { anchor: string; url: string; authority: string }[];
  schemaRecommendations: { type: string; details: string }[];
}
