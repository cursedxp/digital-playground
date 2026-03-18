"use client";

import { AnalysisData, Issue } from "@/app/types/report";
import { Recommendation } from "@/app/lib/recommendations";
import { lcpColor, fidColor, clsColor, fcpColor } from "@/app/lib/scoring";
import ReportHeader from "@/app/components/report/ReportHeader";
import ScoreRing from "@/app/components/report/ScoreRing";
import MetricCard from "@/app/components/report/MetricCard";
import TechBadge from "@/app/components/report/TechBadge";
import IssueRow from "@/app/components/report/IssueRow";
import AccordionSection from "@/app/components/report/AccordionSection";
import SectionReveal from "@/app/components/report/SectionReveal";
import RecommendationCard from "@/app/components/report/RecommendationCard";
import CTASection from "@/app/components/report/CTASection";
import ViewTracker from "@/app/components/report/ViewTracker";
import { Check, X, Shield, Calendar, Share2 } from "lucide-react";

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
      {checked ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <X className="w-4 h-4 text-red-400" />
      )}
      <span className={`text-sm ${checked ? "text-gray-700" : "text-gray-400"}`}>{label}</span>
    </div>
  );
}

function SocialItem({ platform, url }: { platform: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
    >
      <Check className="w-3.5 h-3.5" />
      {platform}
    </a>
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

      {/* Performance Scores */}
      {ps && (mobile || desktop) && (
        <SectionReveal className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Performance & Accessibility</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <ScoreRing score={mobile?.performance_score ?? null} label="Mobile Performance" />
            <ScoreRing score={desktop?.performance_score ?? null} label="Desktop Performance" />
            <ScoreRing score={mobile?.accessibility_score ?? null} label="Mobile Accessibility" />
            <ScoreRing score={desktop?.accessibility_score ?? null} label="Desktop Accessibility" />
          </div>
        </SectionReveal>
      )}

      {/* Core Web Vitals */}
      {mobile && (mobile.lcp_ms || mobile.fid_ms || mobile.cls !== null || mobile.fcp_ms) && (
        <SectionReveal className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Core Web Vitals</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
        </SectionReveal>
      )}

      {/* Issues */}
      {issues.length > 0 && (
        <SectionReveal className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Issues Found
            <span className="ml-2 text-sm font-normal text-gray-500">({issues.length})</span>
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl px-5">
            {issues.map((issue, i) => (
              <IssueRow key={i} label={issue.label} severity={issue.severity} detail={issue.detail} />
            ))}
          </div>
        </SectionReveal>
      )}

      {/* Technology Stack */}
      {analysis.technologies.length > 0 && (
        <SectionReveal className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {analysis.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </SectionReveal>
      )}

      {/* Contact & Communication */}
      <SectionReveal className="mb-12">
        <AccordionSection title="Contact & Communication" defaultOpen>
          <div className="grid grid-cols-2 gap-x-4">
            <CheckItem label="Contact Form" checked={analysis.has_contact_form} />
            <CheckItem label="Email Address" checked={analysis.has_email} />
            <CheckItem label="Phone Number" checked={analysis.has_phone} />
            <CheckItem label="Live Chat" checked={analysis.has_live_chat} />
          </div>
        </AccordionSection>
      </SectionReveal>

      {/* Security */}
      {analysis.ssl && (
        <SectionReveal className="mb-12">
          <AccordionSection title="Security">
            <div className="flex items-center gap-3">
              <Shield className={`w-5 h-5 ${analysis.ssl.valid && !analysis.ssl.expired ? "text-green-500" : "text-red-500"}`} />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  SSL Certificate: {analysis.ssl.valid && !analysis.ssl.expired ? "Valid" : "Invalid"}
                </p>
                {analysis.ssl.issuer && (
                  <p className="text-xs text-gray-500">Issued by {analysis.ssl.issuer}</p>
                )}
                {analysis.ssl.days_until_expiry != null && (
                  <p className="text-xs text-gray-500">{analysis.ssl.days_until_expiry} days until expiry</p>
                )}
              </div>
            </div>
          </AccordionSection>
        </SectionReveal>
      )}

      {/* Content Freshness */}
      {analysis.freshness && (
        <SectionReveal className="mb-12">
          <AccordionSection title="Content Freshness">
            <div className="space-y-2">
              {analysis.freshness.copyright_year && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">
                    Copyright year: {analysis.freshness.copyright_year}
                  </span>
                </div>
              )}
              {analysis.freshness.freshness_signals.map((signal, i) => (
                <p key={i} className="text-sm text-gray-600">{signal}</p>
              ))}
            </div>
          </AccordionSection>
        </SectionReveal>
      )}

      {/* Social Media */}
      <SectionReveal className="mb-12">
        <AccordionSection title="Social Media Presence">
          <div className="flex flex-wrap gap-2">
            {Object.entries(analysis.social_media).map(([platform, url]) => (
              <SocialItem key={platform} platform={platform} url={url} />
            ))}
            {EXPECTED_SOCIALS.filter(
              (s) => !Object.keys(analysis.social_media).includes(s)
            ).map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-gray-100 text-gray-400"
              >
                <X className="w-3.5 h-3.5" />
                {platform}
              </span>
            ))}
          </div>
        </AccordionSection>
      </SectionReveal>

      {/* SaaS Details (conditional) */}
      {analysis.saas_details && (
        <SectionReveal className="mb-12">
          <AccordionSection title="SaaS Details">
            <div className="space-y-3">
              {analysis.saas_details.team_members_detected != null && (
                <p className="text-sm text-gray-700">
                  Team members detected: <strong>{analysis.saas_details.team_members_detected}</strong>
                </p>
              )}
              <CheckItem label="Pricing page" checked={analysis.saas_details.has_pricing_page} />
              <CheckItem label="Integrations page" checked={analysis.saas_details.has_integrations_page} />
              <CheckItem label="Careers page" checked={analysis.saas_details.has_careers_page} />
              {analysis.saas_details.open_positions > 0 && (
                <p className="text-sm text-gray-700">
                  Open positions: <strong>{analysis.saas_details.open_positions}</strong>
                </p>
              )}
              {analysis.saas_details.integrations_mentioned.length > 0 && (
                <div>
                  <p className="text-sm text-gray-700 mb-1">Integrations mentioned:</p>
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

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <SectionReveal className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Our Recommendations</h2>
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
