import { CaseStudy } from './types';

// ALL CONTENT BELOW IS EDITABLE PLACEHOLDER FOR SITEONLAB CUSTOMERS, METRICS, AND OUTCOMES.
// FELL FREE TO REPLACE AND MODIFY THESE VALUES TO MATCH SPECIFIC REVENUE STORIES.

export const AGGREGATE_METRICS = [
  {
    id: 'metric-1',
    value: '$25M+',
    label: 'Pipeline Influenced',
    description: 'Tracked directly in Salesforce and HubSpot'
  },
  {
    id: 'metric-2',
    value: '120+',
    label: 'B2B Brands Scaled',
    description: 'SaaS, tech, cybersecurity, & MSP leaders'
  },
  {
    id: 'metric-3',
    value: '180%',
    label: 'Avg. Revenue Growth',
    description: 'Year-over-year organic revenue scaling'
  },
  {
    id: 'metric-4',
    value: 'Top Cited',
    label: 'AI & Search Visibility',
    description: 'Across ChatGPT, Perplexity & AI Overviews'
  }
];

export const FEATURED_CASE_STUDY: CaseStudy = {
  id: 'featured-1',
  clientName: 'ThreatShield AI',
  industry: 'Cybersecurity',
  service: 'AI Visibility/GEO',
  title: 'From invisible in AI search to category-cited leader',
  metric: '167%',
  metricLabel: 'increase in sales-qualified demos in 12 months',
  summary: 'We optimized ThreatShield\'s cybersecurity platform architecture and documentation for generative engine discovery, securing direct citation and recommendation across ChatGPT, Perplexity, and Google AI Overviews.',
  imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80&q=80' // Tech geometric abstract, high contrast dark
};

export const GRID_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    clientName: 'LogiFlow Systems',
    industry: 'B2B SaaS',
    service: 'SEO',
    title: 'Dominating enterprise logistics search',
    metric: '98% ↑',
    metricLabel: 'qualified demo inquiries in 6 months',
    summary: 'Scaled organic search visibility for high-intent supply chain terms, capturing premium mid-market buyers.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' // Warehouse tech
  },
  {
    id: 'cs-2',
    clientName: 'ApexCloud Networks',
    industry: 'IT Services & MSPs',
    service: 'Demand Generation',
    title: 'Unlocking high-contract enterprise pipelines',
    metric: '$3.4M',
    metricLabel: 'new qualified pipeline generated in 8 months',
    summary: 'Engineered an outbound demand gen campaign integrated with search-intent retargeting for enterprise co-managed IT contracts.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' // Abstract server / light trails
  },
  {
    id: 'cs-3',
    clientName: 'AuthGuard Corp',
    industry: 'Cybersecurity',
    service: 'Web & CRO',
    title: 'Frictionless buyers journey optimization',
    metric: '2.4x',
    metricLabel: 'conversion rate lift on enterprise pages',
    summary: 'Redesigned threat intelligence landing pages to map to CISO mental models, reducing visual friction and form drops.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80' // Cybersecurity pattern
  },
  {
    id: 'cs-4',
    clientName: 'Beacon Advisory',
    industry: 'Professional Services',
    service: 'SEO',
    title: 'Establishing authoritative search dominance',
    metric: '115% ↑',
    metricLabel: 'corporate consultations booked online',
    summary: 'Positioned managing partners as top industry authorities via semantic SEO, high-impact whitepapers, and brand signals.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' // Modern glass skyscraper
  },
  {
    id: 'cs-5',
    clientName: 'Tekniker Robotics',
    industry: 'Manufacturing',
    service: 'Demand Generation',
    title: 'Targeting procurement decision makers',
    metric: '140% ↑',
    metricLabel: 'qualified high-value RFQs from search',
    summary: 'Captured aerospace and automotive manufacturing procurement managers with custom-designed technical engineering hubs.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' // Robotic arm / tech manufacturing
  },
  {
    id: 'cs-6',
    clientName: 'ClariDoc MedTech',
    industry: 'B2B SaaS',
    service: 'AI Visibility/GEO',
    title: 'Securing top recommendations in AI engines',
    metric: '45%',
    metricLabel: 'AI engine recommendation share for health tech',
    summary: 'Optimized HIPAA-compliant chart-automation platform code and schema for search engine AI citations, outpacing legacy competitors.',
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80' // Tech interface dashboard
  },
  {
    id: 'cs-7',
    clientName: 'NetCore Solutions',
    industry: 'IT Services & MSPs',
    service: 'SEO',
    title: 'Scaling regional IT dominance in cloud search',
    metric: '3.1x',
    metricLabel: 'increase in multi-state organic visibility',
    summary: 'Ranked localized MSP offices for competitive server migration and network support terms, capturing ready-to-buy businesses.',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80' // Server rack wires
  },
  {
    id: 'cs-8',
    clientName: 'Vanguard Partners',
    industry: 'Professional Services',
    service: 'Web & CRO',
    title: 'Re-engineering elite B2B recruitment funnels',
    metric: '185% ↑',
    metricLabel: 'increase in tier-one partner applications',
    summary: 'Designed a high-end digital hub to attract elite management talent with visual case studies and intuitive application logic.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80' // Workspace meeting
  },
  {
    id: 'cs-9',
    clientName: 'AeroForge Metalwork',
    industry: 'Manufacturing',
    service: 'AI Visibility/GEO',
    title: 'Directly recommended as premier manufacturer',
    metric: '#1 Spot',
    metricLabel: 'in Perplexity & Copilot precision manufacturing search',
    summary: 'Established dominant search credentials through structured schema and technical specifications, matching exact procurement queries.',
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80' // Industrial steel sparks
  }
];

export const CLIENT_LOGOS = [
  { name: 'Apex Group', text: 'APEX' },
  { name: 'Shield Security', text: 'SHIELD' },
  { name: 'MedScribe Corp', text: 'MEDSCRIBE' },
  { name: 'NetCore Networks', text: 'NETCORE' },
  { name: 'AeroForge Tech', text: 'AEROFORGE' },
  { name: 'LogiFlow Labs', text: 'LOGIFLOW' }
];
