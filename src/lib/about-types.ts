export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  initials: string;
  isPlaceholder: boolean;
}

export interface CoreValue {
  id: number;
  iconName: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metrics: string;
  isPlaceholder: boolean;
}

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface MetricItem {
  id: string;
  targetValue: number;
  prefix?: string;
  suffix: string;
  label: string;
}
