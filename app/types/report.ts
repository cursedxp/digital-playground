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
  "Analysis JSON": string;
  "Overall Score": number;
  Status: "generating" | "ready" | "expired";
  "View Count": number;
  "First Viewed At": string | null;
  "CTA Clicked": boolean;
  "Generated At": string;
  CreatedAt: string;
}

export type Severity = "critical" | "warning" | "info";

export interface Issue {
  label: string;
  severity: Severity;
  detail?: string;
}
