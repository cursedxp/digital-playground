"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnalysisData, Issue } from "@/app/types/report";
import { Recommendation } from "@/app/lib/recommendations";
import { lcpColor, fidColor, clsColor, fcpColor, COLOR_MAP, scoreColor } from "@/app/lib/scoring";
import ScoreRing from "@/app/components/report/ScoreRing";
import AnimatedCounter from "@/app/components/report/AnimatedCounter";
import ScreenshotPreview from "@/app/components/report/ScreenshotPreview";
import SpeedTimeline from "@/app/components/report/SpeedTimeline";
import BounceCallout from "@/app/components/report/BounceCallout";
import SEOSection from "@/app/components/report/SEOSection";
import OGPreview from "@/app/components/report/OGPreview";
import SecuritySection from "@/app/components/report/SecuritySection";
import TechBadge from "@/app/components/report/TechBadge";
import BookCallButton from "@/app/components/BookCallButton";
import ViewTracker from "@/app/components/report/ViewTracker";
import ShareButton from "@/app/components/report/ShareButton";

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

// Matches site's FAQ accordion pattern exactly
function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/20 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
      >
        <span className="text-xl md:text-2xl font-semibold transition-colors group-hover:opacity-80">
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-light shrink-0 -mt-1"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="text-white/70 text-lg leading-relaxed mt-4 pr-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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

  const formattedDate = (() => {
    try {
      return new Date(generatedAt).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
      });
    } catch { return generatedAt; }
  })();

  return (
    <>
      <ViewTracker reportId={reportId} />

      {/* ── HERO ── */}
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden mb-20 sm:mb-50">
        <div className="relative z-10 max-w-5xl m-auto flex flex-col items-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-white/50 uppercase tracking-wider mb-6"
          >
            Website Audit Report
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold text-white mb-4"
          >
            {company}
          </motion.h1>

          <motion.a
            href={website.startsWith("http") ? website : `https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 hover:text-white/80 transition-colors text-lg mb-10"
          >
            {website}
          </motion.a>

          {/* Screenshot */}
          {desktop?.screenshot && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 w-full max-w-2xl"
            >
              <ScreenshotPreview screenshot={desktop.screenshot} />
            </motion.div>
          )}

          {/* Score Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <ScoreRing score={overallScore} label="Overall Score" size={180} strokeWidth={12} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="text-xs text-white/50 mb-8"
          >
            Generated on {formattedDate}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-4"
          >
            <ShareButton reportId={reportId} />
            <BookCallButton />
          </motion.div>
        </div>
      </div>

      {/* ── PERFORMANCE ── matching Pricing/FAQ layout: 4/8 grid */}
      {ps && (mobile || desktop) && (
        <section className="bg-black text-white px-6 mb-20 sm:mb-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <motion.h2
                    className="text-5xl sm:text-7xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Performance
                  </motion.h2>
                  <p className="text-white text-lg leading-relaxed mt-6">
                    How your site performs for real visitors on mobile and desktop devices.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                {/* Mobile vs Desktop scores */}
                <div className="grid grid-cols-2 gap-12 mb-12">
                  {/* Mobile */}
                  <div>
                    <h3 className="text-sm text-white/50 uppercase tracking-wider mb-6">Mobile</h3>
                    <div className="flex flex-col items-center gap-4">
                      <ScoreRing score={mobile?.performance_score ?? null} label="Performance" />
                      <ScoreRing score={mobile?.accessibility_score ?? null} label="Accessibility" size={100} strokeWidth={6} />
                    </div>
                  </div>
                  {/* Desktop */}
                  <div>
                    <h3 className="text-sm text-white/50 uppercase tracking-wider mb-6">Desktop</h3>
                    <div className="flex flex-col items-center gap-4">
                      <ScoreRing score={desktop?.performance_score ?? null} label="Performance" />
                      <ScoreRing score={desktop?.accessibility_score ?? null} label="Accessibility" size={100} strokeWidth={6} />
                    </div>
                  </div>
                </div>

                {/* Core Web Vitals */}
                {mobile && (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Core Web Vitals</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                      {mobile.lcp_ms != null && (
                        <div>
                          <span className="text-sm text-white/50">LCP</span>
                          <p className="text-3xl font-bold" style={{ color: COLOR_MAP[lcpColor(mobile.lcp_ms)] }}>
                            {(mobile.lcp_ms / 1000).toFixed(1)}s
                          </p>
                          <span className="text-xs text-white/50">Largest Contentful Paint</span>
                        </div>
                      )}
                      {mobile.fid_ms != null && (
                        <div>
                          <span className="text-sm text-white/50">FID</span>
                          <p className="text-3xl font-bold" style={{ color: COLOR_MAP[fidColor(mobile.fid_ms)] }}>
                            {mobile.fid_ms}ms
                          </p>
                          <span className="text-xs text-white/50">First Input Delay</span>
                        </div>
                      )}
                      {mobile.cls != null && (
                        <div>
                          <span className="text-sm text-white/50">CLS</span>
                          <p className="text-3xl font-bold" style={{ color: COLOR_MAP[clsColor(mobile.cls)] }}>
                            {mobile.cls.toFixed(3)}
                          </p>
                          <span className="text-xs text-white/50">Cumulative Layout Shift</span>
                        </div>
                      )}
                      {mobile.fcp_ms != null && (
                        <div>
                          <span className="text-sm text-white/50">FCP</span>
                          <p className="text-3xl font-bold" style={{ color: COLOR_MAP[fcpColor(mobile.fcp_ms)] }}>
                            {(mobile.fcp_ms / 1000).toFixed(1)}s
                          </p>
                          <span className="text-xs text-white/50">First Contentful Paint</span>
                        </div>
                      )}
                    </div>

                    {mobile.fcp_ms != null && mobile.lcp_ms != null && (
                      <SpeedTimeline fcpMs={mobile.fcp_ms} lcpMs={mobile.lcp_ms} />
                    )}

                    {mobile.lcp_ms != null && mobile.lcp_ms > 1000 && (
                      <div className="mt-6">
                        <BounceCallout lcpMs={mobile.lcp_ms} />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SEO ── same 4/8 layout */}
      {seo && (
        <section className="bg-black text-white px-6 mb-20 sm:mb-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <motion.h2
                    className="text-5xl sm:text-7xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    SEO
                    <br />
                    Overview
                  </motion.h2>
                  <p className="text-white text-lg leading-relaxed mt-6">
                    How your site appears to search engines and social platforms.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <SEOSection seo={seo} title={analysis.title} description={analysis.description} />
                {(seo.og_title || seo.og_image) && (
                  <div className="mt-8">
                    <p className="text-sm text-white/50 mb-3">How your link looks when shared</p>
                    <OGPreview
                      ogTitle={seo.og_title}
                      ogDescription={seo.og_description}
                      ogImage={seo.og_image}
                      url={analysis.url}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SECURITY ── same 4/8 layout */}
      {(analysis.observatory || analysis.ssl) && (
        <section className="bg-black text-white px-6 mb-20 sm:mb-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <motion.h2
                    className="text-5xl sm:text-7xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Security
                  </motion.h2>
                  <p className="text-white text-lg leading-relaxed mt-6">
                    SSL certificate, security headers, and browser protection policies.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <SecuritySection observatory={analysis.observatory} ssl={analysis.ssl} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ISSUES FOUND ── same 4/8 layout, FAQ-style list */}
      {issues.length > 0 && (
        <section className="bg-black text-white px-6 mb-20 sm:mb-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <motion.h2
                    className="text-5xl sm:text-7xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    Issues
                    <br />
                    Found
                  </motion.h2>
                  <p className="text-white text-lg leading-relaxed mt-6">
                    {issues.length} issues detected. Sorted by priority.
                  </p>
                  <BookCallButton
                    text="Let's Fix These"
                    className="inline-block mt-8 px-8 py-3 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
                  />
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {issues.map((issue, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="border-b border-white/20 pb-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className={`mt-2 w-2.5 h-2.5 rounded-full shrink-0 ${
                        issue.severity === "critical" ? "bg-red-500" :
                        issue.severity === "warning" ? "bg-amber-500" : "bg-blue-400"
                      }`} />
                      <div>
                        <p className="text-xl font-semibold">{issue.label}</p>
                        {issue.detail && <p className="text-white/70 text-sm mt-1">{issue.detail}</p>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── DETAILS ── accordion sections like FAQ */}
      <section className="bg-black text-white px-6 mb-20 sm:mb-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <motion.h2
                  className="text-5xl sm:text-7xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Details
                </motion.h2>
                <p className="text-white text-lg leading-relaxed mt-6">
                  Detailed findings from our analysis of your website.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {/* Technology Stack */}
              {analysis.technologies.length > 0 && (
                <Section title="Technology Stack" defaultOpen>
                  <div className="flex flex-wrap gap-2">
                    {analysis.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </Section>
              )}

              {/* Contact */}
              <Section title="Contact & Communication" defaultOpen>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Contact Form", checked: analysis.has_contact_form },
                    { label: "Email Address", checked: analysis.has_email },
                    { label: "Phone Number", checked: analysis.has_phone },
                    { label: "Live Chat", checked: analysis.has_live_chat },
                  ].map(({ label, checked }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span style={{ color: checked ? "#FFE028" : undefined }} className={checked ? "" : "text-white/30"}>
                        {checked ? "✓" : "✗"}
                      </span>
                      <span className={checked ? "text-white" : "text-white/30"}>{label}</span>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Freshness */}
              {analysis.freshness && (
                <Section title="Content Freshness">
                  <div className="space-y-2">
                    {analysis.freshness.copyright_year && (
                      <p>Copyright year: <span className="font-semibold text-white">{analysis.freshness.copyright_year}</span></p>
                    )}
                    {analysis.freshness.freshness_signals.map((signal, i) => (
                      <p key={i}>{signal}</p>
                    ))}
                  </div>
                </Section>
              )}

              {/* Social Media */}
              <Section title="Social Media">
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
                  {EXPECTED_SOCIALS.filter(s => !Object.keys(analysis.social_media).includes(s)).map(platform => (
                    <span key={platform} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/5 text-white/30">
                      ✗ {platform}
                    </span>
                  ))}
                </div>
              </Section>

              {/* SaaS Details */}
              {analysis.saas_details && (
                <Section title="SaaS Details">
                  <div className="space-y-3">
                    {analysis.saas_details.team_members_detected != null && (
                      <p>Team members: <span className="font-semibold text-white">{analysis.saas_details.team_members_detected}</span></p>
                    )}
                    {[
                      { label: "Pricing page", checked: analysis.saas_details.has_pricing_page },
                      { label: "Integrations page", checked: analysis.saas_details.has_integrations_page },
                      { label: "Careers page", checked: analysis.saas_details.has_careers_page },
                    ].map(({ label, checked }) => (
                      <div key={label} className="flex items-center gap-2">
                        <span style={{ color: checked ? "#FFE028" : undefined }} className={checked ? "" : "text-white/30"}>
                          {checked ? "✓" : "✗"}
                        </span>
                        <span className={checked ? "text-white" : "text-white/30"}>{label}</span>
                      </div>
                    ))}
                    {analysis.saas_details.integrations_mentioned.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {analysis.saas_details.integrations_mentioned.map(i => (
                          <TechBadge key={i} name={i} />
                        ))}
                      </div>
                    )}
                  </div>
                </Section>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── RECOMMENDATIONS ── */}
      {recommendations.length > 0 && (
        <section className="bg-black text-white px-6 mb-20 sm:mb-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <motion.h2
                    className="text-5xl sm:text-7xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    What We
                    <br />
                    Recommend
                  </motion.h2>
                  <p className="text-white text-lg leading-relaxed mt-6">
                    Based on the issues we found, here&apos;s how we can help.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-8">
                {recommendations.map((rec, i) => (
                  <motion.div
                    key={rec.service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <h3 className="text-2xl font-bold mb-2">{rec.service.name}</h3>
                    <p className="text-white text-sm leading-relaxed mb-4">{rec.reason}</p>
                    <ul className="space-y-3">
                      {rec.service.bullets.map(bullet => (
                        <li key={bullet} className="flex items-start gap-2 text-sm">
                          <span className="shrink-0" style={{ color: "#FFE028" }}>✓</span>
                          <span className="text-white">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── matching existing CTA component */}
      <div className="max-w-7xl mx-auto px-8 py-16 border-b border-white/10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Fix These Issues?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Book a free discovery call and we&apos;ll walk through your report together.
          </p>
          <BookCallButton
            text="Book a Free Discovery Call"
            className="inline-block px-8 py-4 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
          />
          <p className="text-sm text-white/50 mt-6">
            Or email us:{" "}
            <a href="mailto:hi@optimotion.dev" className="text-white/80 hover:text-white transition-colors">
              hi@optimotion.dev
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
