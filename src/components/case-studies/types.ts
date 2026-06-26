export interface CaseStudy {
  id: string;
  title: string; // Bold outcome-focused transformation statement
  clientName: string; // e.g. "HealthTech SaaS" or "SecOps Pro"
  industry: 'B2B SaaS' | 'IT Services & MSPs' | 'Cybersecurity' | 'Professional Services' | 'Manufacturing';
  service: 'AI Visibility/GEO' | 'SEO' | 'Demand Generation' | 'Web & CRO';
  metric: string; // e.g. "167%" or "98% ↑" or "$4.2M"
  metricLabel: string; // e.g. "sales-qualified demos" or "qualified inquiries"
  summary: string; // 1-2 sentence overview
  imageUrl: string;
  featured?: boolean;
}

export type IndustryFilter = 'All' | 'B2B SaaS' | 'IT Services & MSPs' | 'Cybersecurity' | 'Professional Services' | 'Manufacturing';
export type ServiceFilter = 'All' | 'AI Visibility/GEO' | 'SEO' | 'Demand Generation' | 'Web & CRO';

export interface FilterState {
  industry: IndustryFilter;
  service: ServiceFilter;
}

export interface ClientLogo {
  name: string;
  logoSvg: string;
}
