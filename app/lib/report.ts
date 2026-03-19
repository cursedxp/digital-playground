import { ReportRecord, AnalysisData } from "@/app/types/report";

const NOCODB_V1_API =
  "https://core.optimotion.dev/api/v1/db/data/noco/pfj0f9gvfaprl5w/mwpedms7gbaezxp";
const NOCODB_V2_API =
  "https://core.optimotion.dev/api/v2/tables/mwpedms7gbaezxp/records";
const NOCODB_TOKEN = process.env.NOCODB_TOKEN!;

async function fetchNocoDB(params: string = ""): Promise<Record<string, unknown>[]> {
  const url = `${NOCODB_V1_API}${params ? `?${params}` : ""}`;
  const res = await fetch(url, {
    headers: { "xc-token": NOCODB_TOKEN },
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.list || [];
}

export async function getReportById(reportId: string): Promise<ReportRecord | null> {
  const records = await fetchNocoDB(
    `where=(Report ID,eq,${reportId})~and(Status,neq,generating)&limit=1`
  );
  if (records.length === 0) return null;
  return records[0] as unknown as ReportRecord;
}

export function recordToAnalysis(r: ReportRecord): AnalysisData | null {
  // If none of the key fields are populated, no analysis data exists
  if (
    r["Mobile Performance"] == null &&
    r["SSL Valid"] == null &&
    r["Page Title"] == null &&
    !r["Has Contact Form"] &&
    !r["Has Email"]
  ) {
    return null;
  }

  const saasDetails = r.Segment === "saas" ? {
    team_members_detected: r["SaaS Team Size"] ?? null,
    has_pricing_page: r["SaaS Has Pricing"] ?? false,
    pricing_tiers: [],
    has_integrations_page: r["SaaS Has Integrations"] ?? false,
    integrations_mentioned: r["SaaS Integrations List"]
      ? r["SaaS Integrations List"].split(",").map((s) => s.trim())
      : [],
    has_careers_page: r["SaaS Has Careers"] ?? false,
    open_positions: 0,
  } : null;

  let freshnessSignals: string[] = [];
  try {
    if (r["Freshness Signals"]) freshnessSignals = JSON.parse(r["Freshness Signals"]);
  } catch { /* ignore */ }

  let socialMedia: Record<string, string> = {};
  try {
    if (r["Social Media"]) socialMedia = JSON.parse(r["Social Media"]);
  } catch { /* ignore */ }

  let technologies: string[] = [];
  try {
    if (r["Technologies"]) technologies = JSON.parse(r["Technologies"]);
  } catch { /* ignore */ }

  return {
    url: r.Website || "",
    segment: r.Segment || "local",
    analyzed_at: r["Generated At"] || r.CreatedAt || "",
    reachable: true,
    ssl: r["SSL Valid"] != null ? {
      valid: r["SSL Valid"] ?? false,
      issuer: r["SSL Issuer"] ?? undefined,
      expires: r["SSL Expires"] ?? undefined,
      days_until_expiry: r["SSL Days Until Expiry"] ?? undefined,
      expired: r["SSL Expired"] ?? undefined,
      error: r["SSL Error"] ?? undefined,
    } : null,
    fetch_method: null,
    pages_checked: [],
    technologies,
    has_contact_form: r["Has Contact Form"] ?? false,
    has_email: r["Has Email"] ?? false,
    has_phone: r["Has Phone"] ?? false,
    has_live_chat: r["Has Live Chat"] ?? false,
    contact_evidence: [],
    has_ecommerce: false,
    ecommerce_evidence: [],
    pagespeed: {
      mobile: r["Mobile Performance"] != null ? {
        performance_score: r["Mobile Performance"],
        accessibility_score: r["Mobile Accessibility"] ?? null,
        lcp_ms: r["Mobile LCP"] ?? null,
        fid_ms: r["Mobile FID"] ?? null,
        cls: r["Mobile CLS"] ?? null,
        fcp_ms: r["Mobile FCP"] ?? null,
      } : null,
      desktop: r["Desktop Performance"] != null ? {
        performance_score: r["Desktop Performance"],
        accessibility_score: r["Desktop Accessibility"] ?? null,
        lcp_ms: null,
        fid_ms: null,
        cls: null,
        fcp_ms: null,
        screenshot: r["Desktop Screenshot"] ?? null,
      } : null,
    },
    freshness: {
      copyright_year: r["Copyright Year"] ?? null,
      last_blog_date: null,
      sitemap_date: null,
      freshness_signals: freshnessSignals,
    },
    social_media: socialMedia,
    saas_details: saasDetails,
    seo: r["SEO H1 Count"] != null || r["SEO OG Title"] != null ? {
      h1_count: r["SEO H1 Count"] ?? 0,
      h1_texts: r["SEO H1 Texts"] ? r["SEO H1 Texts"].split(",").map((s) => s.trim()) : [],
      h2_count: 0,
      meta_robots: null,
      canonical: r["SEO Canonical"] ?? null,
      og_title: r["SEO OG Title"] ?? null,
      og_description: r["SEO OG Description"] ?? null,
      og_image: r["SEO OG Image"] ?? null,
      twitter_card: r["SEO Twitter Card"] ?? null,
      language: r["SEO Language"] ?? null,
      total_images: r["SEO Total Images"] ?? 0,
      images_missing_alt: r["SEO Images Missing Alt"] ?? 0,
      has_structured_data: r["SEO Has Structured Data"] ?? false,
      schema_types: r["SEO Schema Types"] ? r["SEO Schema Types"].split(",").map((s) => s.trim()) : [],
      internal_links: r["SEO Internal Links"] ?? 0,
      external_links: r["SEO External Links"] ?? 0,
    } : null,
    observatory: r["Observatory Grade"] != null ? {
      grade: r["Observatory Grade"] ?? "",
      score: r["Observatory Score"] ?? 0,
      tests_passed: r["Observatory Tests Passed"] ?? 0,
      tests_failed: (r["Observatory Tests Quantity"] ?? 0) - (r["Observatory Tests Passed"] ?? 0),
      tests_quantity: r["Observatory Tests Quantity"] ?? 0,
    } : null,
    crux: null,
    title: r["Page Title"] ?? "",
    description: r["Page Description"] ?? "",
    has_mobile_viewport: r["Has Mobile Viewport"] ?? false,
    error: null,
    warnings: [],
  };
}

/** @deprecated Use recordToAnalysis instead */
export function parseAnalysis(record: ReportRecord): AnalysisData | null {
  // Try new column-based approach first
  const fromColumns = recordToAnalysis(record);
  if (fromColumns) return fromColumns;

  // Fallback to legacy JSON field
  try {
    return JSON.parse(record["Analysis JSON"] ?? "") as AnalysisData;
  } catch {
    return null;
  }
}

export function isExpired(record: ReportRecord): boolean {
  const generatedAt = record["Generated At"] || record.CreatedAt;
  if (!generatedAt) return false;
  const generated = new Date(generatedAt);
  const now = new Date();
  const diffDays = (now.getTime() - generated.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays > 30;
}

export async function incrementViewCount(reportId: string): Promise<void> {
  const records = await fetchNocoDB(
    `where=(Report ID,eq,${reportId})&limit=1&fields=Id,View Count,First Viewed At`
  );
  if (records.length === 0) return;

  const record = records[0];
  const id = record.Id as number;
  const currentViews = (record["View Count"] as number) || 0;
  const firstViewed = record["First Viewed At"] as string | null;

  const updateData: Record<string, unknown> = {
    Id: id,
    "View Count": currentViews + 1,
  };
  if (!firstViewed) {
    updateData["First Viewed At"] = new Date().toISOString();
  }

  await fetch(NOCODB_V2_API, {
    method: "PATCH",
    headers: {
      "xc-token": NOCODB_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([updateData]),
  });
}
