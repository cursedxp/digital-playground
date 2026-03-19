// TypeScript interfaces matching analyze-website.py JSON output

export interface SSLInfo {
  valid: boolean;
  issuer?: string;
  expires?: string;
  days_until_expiry?: number;
  expired?: boolean;
  error?: string;
}

export interface PageSpeedStrategy {
  performance_score: number | null;
  accessibility_score: number | null;
  lcp_ms: number | null;
  fid_ms: number | null;
  cls: number | null;
  fcp_ms: number | null;
  screenshot?: string | null;
}

export interface PageSpeedData {
  mobile: PageSpeedStrategy | null;
  desktop: PageSpeedStrategy | null;
}

export interface ContactEvidence {
  type: "contact_form" | "email" | "phone" | "live_chat";
  detail: string;
  confidence: string;
}

export interface FreshnessData {
  copyright_year: number | null;
  last_blog_date: string | null;
  sitemap_date: string | null;
  freshness_signals: string[];
}

export interface SaaSDetails {
  team_members_detected: number | null;
  has_pricing_page: boolean;
  pricing_tiers: string[];
  has_integrations_page: boolean;
  integrations_mentioned: string[];
  has_careers_page: boolean;
  open_positions: number;
}

export interface SEOData {
  h1_count: number;
  h1_texts: string[];
  h2_count: number;
  meta_robots: string | null;
  canonical: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  twitter_card: string | null;
  language: string | null;
  total_images: number;
  images_missing_alt: number;
  has_structured_data: boolean;
  schema_types: string[];
  internal_links: number;
  external_links: number;
}

export interface ObservatoryData {
  grade: string;
  score: number;
  tests_passed: number;
  tests_failed: number;
  tests_quantity: number;
}

export interface CrUXData {
  largest_contentful_paint?: number;
  cumulative_layout_shift?: number;
  interaction_to_next_paint?: number;
  first_contentful_paint?: number;
  experimental_time_to_first_byte?: number;
}

export interface AnalysisData {
  url: string;
  segment: "local" | "saas" | "founder";
  analyzed_at: string;
  reachable: boolean;
  ssl: SSLInfo | null;
  fetch_method: string | null;
  pages_checked: string[];
  technologies: string[];
  has_contact_form: boolean;
  has_email: boolean;
  has_phone: boolean;
  has_live_chat: boolean;
  contact_evidence: ContactEvidence[];
  has_ecommerce: boolean;
  ecommerce_evidence: { type: string; detail: string; confidence: string }[];
  pagespeed: PageSpeedData | null;
  freshness: FreshnessData | null;
  social_media: Record<string, string>;
  saas_details: SaaSDetails | null;
  seo: SEOData | null;
  observatory: ObservatoryData | null;
  crux: CrUXData | null;
  title: string;
  description: string;
  has_mobile_viewport?: boolean;
  error: string | null;
  warnings: string[];
}

export interface ReportRecord {
  Id: number;
  Title: string;
  "Report ID": string;
  "Lead ID": number | null;
  Company: string;
  Website: string;
  Segment: "local" | "saas" | "founder";
  "Overall Score": number;
  Status: "generating" | "ready" | "expired";
  "View Count": number;
  "First Viewed At": string | null;
  "CTA Clicked": boolean;
  "Generated At": string;
  CreatedAt: string;

  // PageSpeed - Mobile
  "Mobile Performance": number | null;
  "Mobile Accessibility": number | null;
  "Mobile LCP": number | null;
  "Mobile FID": number | null;
  "Mobile CLS": number | null;
  "Mobile FCP": number | null;

  // PageSpeed - Desktop
  "Desktop Performance": number | null;
  "Desktop Accessibility": number | null;
  "Desktop Screenshot": string | null;

  // SEO
  "SEO H1 Count": number | null;
  "SEO H1 Texts": string | null;
  "SEO Canonical": string | null;
  "SEO OG Title": string | null;
  "SEO OG Description": string | null;
  "SEO OG Image": string | null;
  "SEO Twitter Card": string | null;
  "SEO Language": string | null;
  "SEO Total Images": number | null;
  "SEO Images Missing Alt": number | null;
  "SEO Has Structured Data": boolean;
  "SEO Schema Types": string | null;
  "SEO Internal Links": number | null;
  "SEO External Links": number | null;

  // SSL
  "SSL Valid": boolean;
  "SSL Issuer": string | null;
  "SSL Expires": string | null;
  "SSL Days Until Expiry": number | null;
  "SSL Expired": boolean;
  "SSL Error": string | null;

  // Observatory
  "Observatory Grade": string | null;
  "Observatory Score": number | null;
  "Observatory Tests Passed": number | null;
  "Observatory Tests Quantity": number | null;

  // Contact
  "Has Contact Form": boolean;
  "Has Email": boolean;
  "Has Phone": boolean;
  "Has Live Chat": boolean;

  // Page info
  "Page Title": string | null;
  "Page Description": string | null;
  "Has Mobile Viewport": boolean;
  "Technologies": string | null;
  "Copyright Year": number | null;
  "Freshness Signals": string | null;
  "Social Media": string | null;
  "Social Media Count": number | null;

  // SaaS
  "SaaS Team Size": number | null;
  "SaaS Has Pricing": boolean;
  "SaaS Has Integrations": boolean;
  "SaaS Integrations List": string | null;
  "SaaS Has Careers": boolean;
}

export type Severity = "critical" | "warning" | "info";

export interface Issue {
  label: string;
  severity: Severity;
  detail?: string;
}
