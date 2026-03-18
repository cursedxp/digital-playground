import { AnalysisData, Issue, Severity } from "@/app/types/report";
import { SERVICES, ServiceInfo } from "./services";

export interface Recommendation {
  service: ServiceInfo;
  reason: string;
}

export function generateIssues(data: AnalysisData): Issue[] {
  const issues: Issue[] = [];
  const ps = data.pagespeed;

  // Performance issues
  if (ps?.mobile?.performance_score !== null && ps?.mobile?.performance_score !== undefined) {
    if (ps.mobile.performance_score < 50) {
      issues.push({ label: "Mobile performance is poor", severity: "critical", detail: `Score: ${ps.mobile.performance_score}/100` });
    } else if (ps.mobile.performance_score < 90) {
      issues.push({ label: "Mobile performance needs improvement", severity: "warning", detail: `Score: ${ps.mobile.performance_score}/100` });
    }
  }

  if (ps?.desktop?.performance_score !== null && ps?.desktop?.performance_score !== undefined) {
    if (ps.desktop.performance_score < 50) {
      issues.push({ label: "Desktop performance is poor", severity: "critical", detail: `Score: ${ps.desktop.performance_score}/100` });
    } else if (ps.desktop.performance_score < 90) {
      issues.push({ label: "Desktop performance needs improvement", severity: "warning", detail: `Score: ${ps.desktop.performance_score}/100` });
    }
  }

  // Accessibility
  if (ps?.mobile?.accessibility_score !== null && ps?.mobile?.accessibility_score !== undefined) {
    if (ps.mobile.accessibility_score < 50) {
      issues.push({ label: "Mobile accessibility is poor", severity: "critical", detail: `Score: ${ps.mobile.accessibility_score}/100` });
    } else if (ps.mobile.accessibility_score < 90) {
      issues.push({ label: "Mobile accessibility needs improvement", severity: "warning", detail: `Score: ${ps.mobile.accessibility_score}/100` });
    }
  }

  // Core Web Vitals
  if (ps?.mobile?.lcp_ms && ps.mobile.lcp_ms > 4000) {
    issues.push({ label: "Largest Contentful Paint is too slow", severity: "critical", detail: `${(ps.mobile.lcp_ms / 1000).toFixed(1)}s (should be < 2.5s)` });
  } else if (ps?.mobile?.lcp_ms && ps.mobile.lcp_ms > 2500) {
    issues.push({ label: "Largest Contentful Paint needs improvement", severity: "warning", detail: `${(ps.mobile.lcp_ms / 1000).toFixed(1)}s (should be < 2.5s)` });
  }

  if (ps?.mobile?.cls !== null && ps?.mobile?.cls !== undefined && ps.mobile.cls > 0.25) {
    issues.push({ label: "Cumulative Layout Shift is too high", severity: "critical", detail: `${ps.mobile.cls.toFixed(3)} (should be < 0.1)` });
  } else if (ps?.mobile?.cls !== null && ps?.mobile?.cls !== undefined && ps.mobile.cls > 0.1) {
    issues.push({ label: "Cumulative Layout Shift needs improvement", severity: "warning", detail: `${ps.mobile.cls.toFixed(3)} (should be < 0.1)` });
  }

  // SSL
  if (data.ssl && !data.ssl.valid) {
    issues.push({ label: "SSL certificate is invalid", severity: "critical", detail: data.ssl.error });
  } else if (data.ssl?.expired) {
    issues.push({ label: "SSL certificate has expired", severity: "critical" });
  } else if (data.ssl?.days_until_expiry !== undefined && data.ssl.days_until_expiry < 30) {
    issues.push({ label: "SSL certificate expiring soon", severity: "warning", detail: `${data.ssl.days_until_expiry} days remaining` });
  }

  // Mobile viewport
  if (data.has_mobile_viewport === false) {
    issues.push({ label: "Missing mobile viewport meta tag", severity: "critical", detail: "Site may not render properly on mobile devices" });
  }

  // Contact
  if (!data.has_contact_form && !data.has_email) {
    issues.push({ label: "No contact form or email found", severity: "warning", detail: "Visitors have no clear way to reach you" });
  }
  if (!data.has_phone) {
    issues.push({ label: "No phone number displayed", severity: "info", detail: "Adding a phone number builds trust" });
  }

  // Freshness
  if (data.freshness?.copyright_year) {
    const currentYear = new Date().getFullYear();
    if (data.freshness.copyright_year < currentYear - 1) {
      issues.push({ label: "Outdated copyright year", severity: "warning", detail: `Shows ${data.freshness.copyright_year}, current year is ${currentYear}` });
    }
  }

  // Social media
  const socialCount = Object.keys(data.social_media).length;
  if (socialCount === 0) {
    issues.push({ label: "No social media links found", severity: "info", detail: "Social profiles help build credibility" });
  }

  // SEO issues
  const seo = data.seo;
  if (seo) {
    if (seo.h1_count === 0) {
      issues.push({ label: "Missing H1 heading tag", severity: "warning", detail: "Every page should have exactly one H1" });
    } else if (seo.h1_count > 1) {
      issues.push({ label: "Multiple H1 heading tags", severity: "warning", detail: `Found ${seo.h1_count} H1 tags — should be exactly one` });
    }

    const titleLen = data.title?.length || 0;
    if (titleLen === 0) {
      issues.push({ label: "Missing page title", severity: "critical" });
    } else if (titleLen < 30) {
      issues.push({ label: "Page title is too short", severity: "warning", detail: `${titleLen} characters (recommended: 50-60)` });
    } else if (titleLen > 70) {
      issues.push({ label: "Page title is too long", severity: "warning", detail: `${titleLen} characters (recommended: 50-60)` });
    }

    const descLen = data.description?.length || 0;
    if (descLen === 0) {
      issues.push({ label: "Missing meta description", severity: "warning", detail: "Meta description helps click-through rate in search" });
    } else if (descLen < 70) {
      issues.push({ label: "Meta description is too short", severity: "info", detail: `${descLen} characters (recommended: 150-160)` });
    } else if (descLen > 170) {
      issues.push({ label: "Meta description is too long", severity: "info", detail: `${descLen} characters (recommended: 150-160)` });
    }

    if (!seo.canonical) {
      issues.push({ label: "No canonical URL set", severity: "info", detail: "Canonical URLs prevent duplicate content issues" });
    }

    if (!seo.og_title || !seo.og_image) {
      issues.push({ label: "Incomplete Open Graph tags", severity: "info", detail: "OG tags improve how links appear when shared on social media" });
    }

    if (seo.images_missing_alt > 0) {
      issues.push({ label: "Images missing alt text", severity: "warning", detail: `${seo.images_missing_alt} of ${seo.total_images} images lack alt text` });
    }

    if (!seo.has_structured_data) {
      issues.push({ label: "No structured data (JSON-LD)", severity: "info", detail: "Structured data enables rich snippets in search results" });
    }
  }

  // Observatory security issues
  const obs = data.observatory;
  if (obs) {
    if (obs.grade && ["D", "D-", "D+", "F"].includes(obs.grade)) {
      issues.push({ label: "Poor security headers grade", severity: "critical", detail: `Mozilla Observatory: Grade ${obs.grade} (${obs.score}/145)` });
    } else if (obs.grade && ["C", "C-", "C+"].includes(obs.grade)) {
      issues.push({ label: "Security headers need improvement", severity: "warning", detail: `Mozilla Observatory: Grade ${obs.grade} (${obs.score}/145)` });
    }
  }

  // Sort by severity
  const order: Record<Severity, number> = { critical: 0, warning: 1, info: 2 };
  issues.sort((a, b) => order[a.severity] - order[b.severity]);

  return issues;
}

export function generateRecommendations(data: AnalysisData, issues: Issue[]): Recommendation[] {
  const recs: Recommendation[] = [];
  const segment = data.segment || "local";
  const criticalCount = issues.filter(i => i.severity === "critical").length;

  if (segment === "local") {
    recs.push({
      service: SERVICES["mobile-first-rebuild"],
      reason: "Based on our analysis, a mobile-first rebuild would address the performance and usability issues we found on your site.",
    });
  } else if (segment === "saas") {
    recs.push({
      service: SERVICES["monthly-retainer"],
      reason: "A monthly retainer gives you ongoing development capacity to continuously improve your product and fix issues as they arise.",
    });
  } else if (segment === "founder") {
    recs.push({
      service: SERVICES["mvp-development"],
      reason: "We can take your product from concept to deployment in 4 weeks with a fixed-scope build.",
    });
  }

  // Additional recommendation based on issues
  const hasIntegrationIssue = data.saas_details && !data.saas_details.has_integrations_page;
  if (hasIntegrationIssue || criticalCount >= 3) {
    recs.push({
      service: SERVICES["integrations-automation"],
      reason: "Connecting your tools and automating workflows can reduce manual overhead and improve your team's efficiency.",
    });
  }

  return recs;
}

export function computeOverallScore(data: AnalysisData): number {
  let total = 0;
  let count = 0;

  const ps = data.pagespeed;
  if (ps?.mobile?.performance_score != null) { total += ps.mobile.performance_score; count++; }
  if (ps?.desktop?.performance_score != null) { total += ps.desktop.performance_score; count++; }
  if (ps?.mobile?.accessibility_score != null) { total += ps.mobile.accessibility_score; count++; }
  if (ps?.desktop?.accessibility_score != null) { total += ps.desktop.accessibility_score; count++; }

  // SSL bonus/penalty
  if (data.ssl?.valid && !data.ssl.expired) { total += 100; } else { total += 0; }
  count++;

  // Contact bonus
  const contactScore = [data.has_contact_form, data.has_email, data.has_phone, data.has_live_chat]
    .filter(Boolean).length * 25;
  total += contactScore;
  count++;

  // Mobile viewport
  total += data.has_mobile_viewport ? 100 : 0;
  count++;

  if (count === 0) return 0;
  return Math.round(total / count);
}
