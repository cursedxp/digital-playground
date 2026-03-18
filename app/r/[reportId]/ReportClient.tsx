"use client";

import { AnalysisData, Issue } from "@/app/types/report";
import { Recommendation } from "@/app/lib/recommendations";
import { lcpColor, fidColor, clsColor, fcpColor } from "@/app/lib/scoring";
import ReportHeader from "@/app/components/report/ReportHeader";
import ScreenshotPreview from "@/app/components/report/ScreenshotPreview";
import MobileDesktopCompare from "@/app/components/report/MobileDesktopCompare";
import MetricCard from "@/app/components/report/MetricCard";
import SpeedTimeline from "@/app/components/report/SpeedTimeline";
import BounceCallout from "@/app/components/report/BounceCallout";
import SEOSection from "@/app/components/report/SEOSection";
import OGPreview from "@/app/components/report/OGPreview";
import SecuritySection from "@/app/components/report/SecuritySection";
import TechBadge from "@/app/components/report/TechBadge";
import IssueRow from "@/app/components/report/IssueRow";
import AccordionSection from "@/app/components/report/AccordionSection";
import SectionReveal from "@/app/components/report/SectionReveal";
import RecommendationCard from "@/app/components/report/RecommendationCard";
import CTASection from "@/app/components/report/CTASection";
import ViewTracker from "@/app/components/report/ViewTracker";

interface ReportClientProps {
  company: string;
  website: string;
  overallScore: number;
  generatedAt: string;
  analysis: AnalysisData;
  issues: Issue[];
  recommendations: Recommendation[];
  reportId: string;
}

function CheckItem({ label, checked }: { label: string; checked: boolean }) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      <span className={`text-sm ${checked ? "text-white/80" : "text-white/30"}`}>
        {checked ? (
          <span style={{ color: "#FFE028" }}>✓</span>
        ) : (
          <span className="text-white/30">✗</span>
        )}
      </span>
      <span className={`text-sm ${checked ? "text-white/80" : "text-white/30"}`}>{label}</span>
    </div>
  );
}

const EXPECTED_SOCIALS = ["Instagram", "Facebook", "Twitter/X", "LinkedIn", "YouTube", "TikTok"];

export default function ReportClient({
  company,
  website,
  overallScore,
  generatedAt,
  analysis,
  issues,
  recommendations,
  reportId,
}: ReportClientProps) {
  const ps = analysis.pagespeed;
  const mobile = ps?.mobile;
  const desktop = ps?.desktop;
  const seo = analysis.seo;

  return (
    <>
      <ViewTracker reportId={reportId} />

      {/* Hero */}
      <ReportHeader
        company={company}
        website={website}
        overallScore={overallScore}
        generatedAt={generatedAt}
      />

      {/* Screenshot */}
      {desktop?.screenshot && (
        <SectionReveal className="mb-20 px-6">
          <ScreenshotPreview screenshot={desktop.screenshot} />
        </SectionReveal>
      )}

      {/* Mobile vs Desktop Comparison */}
      {ps && (mobile || desktop) && (
        <SectionReveal className="mb-20 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Performance & Accessibility</h2>
          <MobileDesktopCompare mobile={mobile ?? null} desktop={desktop ?? null} />
        </SectionReveal>
      )}

      {/* Core Web Vitals + Timeline + Bounce */}
      {mobile && (mobile.lcp_ms || mobile.fid_ms || mobile.cls !== null || mobile.fcp_ms) && (
        <SectionReveal className="mb-20 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Core Web Vitals</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {mobile.lcp_ms != null && (
              <MetricCard
                label="LCP"
                value={`${(mobile.lcp_ms / 1000).toFixed(1)}s`}
                color={lcpColor(mobile.lcp_ms)}
                sublabel="Largest Contentful Paint"
              />
            )}
            {mobile.fid_ms != null && (
              <MetricCard
                label="FID"
                value={`${mobile.fid_ms}ms`}
                color={fidColor(mobile.fid_ms)}
                sublabel="First Input Delay"
              />
            )}
            {mobile.cls != null && (
              <MetricCard
                label="CLS"
                value={mobile.cls.toFixed(3)}
                color={clsColor(mobile.cls)}
                sublabel="Cumulative Layout Shift"
              />
            )}
            {mobile.fcp_ms != null && (
              <MetricCard
                label="FCP"
                value={`${(mobile.fcp_ms / 1000).toFixed(1)}s`}
                color={fcpColor(mobile.fcp_ms)}
                sublabel="First Contentful Paint"
              />
            )}
          </div>

          {/* Speed Timeline */}
          {mobile.fcp_ms != null && mobile.lcp_ms != null && (
            <SpeedTimeline fcpMs={mobile.fcp_ms} lcpMs={mobile.lcp_ms} />
          )}

          {/* Bounce Rate Callout */}
          {mobile.lcp_ms != null && mobile.lcp_ms > 1000 && (
            <div className="mt-6">
              <BounceCallout lcpMs={mobile.lcp_ms} />
            </div>
          )}
        </SectionReveal>
      )}

      {/* SEO Overview */}
      {seo && (
        <SectionReveal className="mb-20 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">SEO Overview</h2>
          <SEOSection seo={seo} title={analysis.title} description={analysis.description} />
          {/* OG Preview */}
          {(seo.og_title || seo.og_image) && (
            <div className="mt-6">
              <p className="text-sm text-white/50 mb-3">Social share preview</p>
              <OGPreview
                ogTitle={seo.og_title}
                ogDescription={seo.og_description}
                ogImage={seo.og_image}
                url={analysis.url}
              />
            </div>
          )}
        </SectionReveal>
      )}

      {/* Security & Headers */}
      {(analysis.observatory || analysis.ssl) && (
        <SectionReveal className="mb-20 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Security & Headers</h2>
          <SecuritySection observatory={analysis.observatory} ssl={analysis.ssl} />
        </SectionReveal>
      )}

      {/* Issues */}
      {issues.length > 0 && (
        <SectionReveal className="mb-20 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Issues Found
            <span className="ml-2 text-sm font-normal text-white/50">({issues.length})</span>
          </h2>
          <div className="border border-white/10 rounded-xl px-5">
            {issues.map((issue, i) => (
              <IssueRow key={i} label={issue.label} severity={issue.severity} detail={issue.detail} />
            ))}
          </div>
        </SectionReveal>
      )}

      {/* Technology Stack */}
      {analysis.technologies.length > 0 && (
        <SectionReveal className="mb-20 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {analysis.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </SectionReveal>
      )}

      {/* Accordion sections */}
      <div className="mb-20 px-6 space-y-4">
        {/* Contact & Communication */}
        <SectionReveal>
          <AccordionSection title="Contact & Communication" defaultOpen>
            <div className="grid grid-cols-2 gap-x-4">
              <CheckItem label="Contact Form" checked={analysis.has_contact_form} />
              <CheckItem label="Email Address" checked={analysis.has_email} />
              <CheckItem label="Phone Number" checked={analysis.has_phone} />
              <CheckItem label="Live Chat" checked={analysis.has_live_chat} />
            </div>
          </AccordionSection>
        </SectionReveal>

        {/* Content Freshness */}
        {analysis.freshness && (
          <SectionReveal>
            <AccordionSection title="Content Freshness">
              <div className="space-y-2">
                {analysis.freshness.copyright_year && (
                  <p className="text-sm text-white/80">
                    Copyright year: <span className="font-semibold">{analysis.freshness.copyright_year}</span>
                  </p>
                )}
                {analysis.freshness.freshness_signals.map((signal, i) => (
                  <p key={i} className="text-sm text-white/70">{signal}</p>
                ))}
              </div>
            </AccordionSection>
          </SectionReveal>
        )}

        {/* Social Media */}
        <SectionReveal>
          <AccordionSection title="Social Media Presence">
            <div className="flex flex-wrap gap-2">
              {Object.entries(analysis.social_media).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <span style={{ color: "#FFE028" }}>✓</span>
                  {platform}
                </a>
              ))}
              {EXPECTED_SOCIALS.filter(
                (s) => !Object.keys(analysis.social_media).includes(s)
              ).map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/5 text-white/30"
                >
                  ✗ {platform}
                </span>
              ))}
            </div>
          </AccordionSection>
        </SectionReveal>

        {/* SaaS Details */}
        {analysis.saas_details && (
          <SectionReveal>
            <AccordionSection title="SaaS Details">
              <div className="space-y-3">
                {analysis.saas_details.team_members_detected != null && (
                  <p className="text-sm text-white/80">
                    Team members detected: <span className="font-semibold">{analysis.saas_details.team_members_detected}</span>
                  </p>
                )}
                <CheckItem label="Pricing page" checked={analysis.saas_details.has_pricing_page} />
                <CheckItem label="Integrations page" checked={analysis.saas_details.has_integrations_page} />
                <CheckItem label="Careers page" checked={analysis.saas_details.has_careers_page} />
                {analysis.saas_details.open_positions > 0 && (
                  <p className="text-sm text-white/80">
                    Open positions: <span className="font-semibold">{analysis.saas_details.open_positions}</span>
                  </p>
                )}
                {analysis.saas_details.integrations_mentioned.length > 0 && (
                  <div>
                    <p className="text-sm text-white/80 mb-2">Integrations mentioned:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {analysis.saas_details.integrations_mentioned.map((i) => (
                        <TechBadge key={i} name={i} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </AccordionSection>
          </SectionReveal>
        )}
      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <SectionReveal className="mb-20 px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Recommendations</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {recommendations.map((rec) => (
              <RecommendationCard
                key={rec.service.name}
                service={rec.service}
                reason={rec.reason}
              />
            ))}
          </div>
        </SectionReveal>
      )}

      {/* CTA */}
      <SectionReveal>
        <CTASection />
      </SectionReveal>
    </>
  );
}
