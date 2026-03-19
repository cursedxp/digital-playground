"use client";

import { motion } from "framer-motion";
import { PageSpeedStrategy } from "@/app/types/report";
import SpeedTimeline from "./SpeedTimeline";
import BounceCallout from "./BounceCallout";
import { lcpColor, fidColor, clsColor, fcpColor, COLOR_MAP, ScoreColor } from "@/app/lib/scoring";

interface CoreWebVitalsSectionProps {
  mobile: PageSpeedStrategy | null;
}

function VitalStatus({ color }: { color: ScoreColor }) {
  const labels: Record<ScoreColor, string> = { good: "Good", warn: "Needs Work", poor: "Poor" };
  return (
    <span className="text-xs font-medium inline-block mt-1" style={{ color: COLOR_MAP[color] }}>
      {labels[color]}
    </span>
  );
}

const METRIC_INFO: Record<string, { full: string; description: string }> = {
  LCP: {
    full: "Largest Contentful Paint",
    description: "Time until the main content (image or text block) is visible",
  },
  FID: {
    full: "First Input Delay",
    description: "Delay before the page responds to a tap or click",
  },
  CLS: {
    full: "Cumulative Layout Shift",
    description: "How much the layout shifts while loading — 0 means nothing jumps",
  },
  FCP: {
    full: "First Contentful Paint",
    description: "Time until the first pixel of content appears on screen",
  },
};

function buildTimelineSummary(fcpMs: number, lcpMs: number): string {
  const fcpS = (fcpMs / 1000).toFixed(1);
  const lcpS = (lcpMs / 1000).toFixed(1);
  const gapMs = lcpMs - fcpMs;
  const gapS = (gapMs / 1000).toFixed(1);

  if (lcpMs <= 2500 && fcpMs <= 1800) {
    return `Your page loads fast. The first content appears at ${fcpS}s and the main content is fully visible at ${lcpS}s — well within Google's recommended thresholds. Visitors on mobile get a smooth, near-instant experience.`;
  }

  if (gapMs > 2000) {
    return `Something appears at ${fcpS}s, but visitors wait an extra ${gapS}s before the main content shows up at ${lcpS}s. That gap is where most people give up and leave. The likely cause is a large image or a slow server response for the hero section.`;
  }

  if (lcpMs > 4000) {
    return `The main content takes ${lcpS}s to appear — that's too slow for most mobile visitors. Studies show that after 3 seconds, more than half of users abandon the page. Reducing image sizes and eliminating render-blocking scripts are the fastest wins.`;
  }

  return `The first content appears at ${fcpS}s and the main content at ${lcpS}s. This is within an acceptable range, but there's still room to improve — getting LCP under 2.5s would push your Google ranking signals into the "Good" tier.`;
}

export default function CoreWebVitalsSection({ mobile }: CoreWebVitalsSectionProps) {
  if (!mobile) return null;
  if (mobile.lcp_ms == null && mobile.fid_ms == null && mobile.cls == null && mobile.fcp_ms == null) return null;

  return (
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
                Core Web
                <br />
                Vitals
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                Real-world loading, interactivity, and visual stability metrics from mobile. These are Google&apos;s official ranking signals.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {mobile.lcp_ms != null && (
                <div>
                  <span className="text-sm text-white">{METRIC_INFO.LCP.full}</span>
                  <p className="text-3xl font-bold mt-1" style={{ color: "#FFE028" }}>
                    {(mobile.lcp_ms / 1000).toFixed(1)}s
                  </p>
                  <VitalStatus color={lcpColor(mobile.lcp_ms)} />
                  <span className="text-xs text-white block mt-2">Good: &lt;2.5s · Poor: &gt;4s</span>
                  <p className="text-xs text-white leading-relaxed mt-1">{METRIC_INFO.LCP.description}</p>
                </div>
              )}
              {mobile.fid_ms != null && (
                <div>
                  <span className="text-sm text-white">{METRIC_INFO.FID.full}</span>
                  <p className="text-3xl font-bold mt-1" style={{ color: "#FFE028" }}>
                    {mobile.fid_ms}ms
                  </p>
                  <VitalStatus color={fidColor(mobile.fid_ms)} />
                  <span className="text-xs text-white block mt-2">Good: &lt;100ms · Poor: &gt;300ms</span>
                  <p className="text-xs text-white leading-relaxed mt-1">{METRIC_INFO.FID.description}</p>
                </div>
              )}
              {mobile.cls != null && (
                <div>
                  <span className="text-sm text-white">{METRIC_INFO.CLS.full}</span>
                  <p className="text-3xl font-bold mt-1" style={{ color: "#FFE028" }}>
                    {mobile.cls.toFixed(3)}
                  </p>
                  <VitalStatus color={clsColor(mobile.cls)} />
                  <span className="text-xs text-white block mt-2">Good: &lt;0.1 · Poor: &gt;0.25</span>
                  <p className="text-xs text-white leading-relaxed mt-1">{METRIC_INFO.CLS.description}</p>
                </div>
              )}
              {mobile.fcp_ms != null && (
                <div>
                  <span className="text-sm text-white">{METRIC_INFO.FCP.full}</span>
                  <p className="text-3xl font-bold mt-1" style={{ color: "#FFE028" }}>
                    {(mobile.fcp_ms / 1000).toFixed(1)}s
                  </p>
                  <VitalStatus color={fcpColor(mobile.fcp_ms)} />
                  <span className="text-xs text-white block mt-2">Good: &lt;1.8s · Poor: &gt;3s</span>
                  <p className="text-xs text-white leading-relaxed mt-1">{METRIC_INFO.FCP.description}</p>
                </div>
              )}
            </div>

            {mobile.fcp_ms != null && mobile.lcp_ms != null && (
              <>
                <SpeedTimeline fcpMs={mobile.fcp_ms} lcpMs={mobile.lcp_ms} />
                <p className="text-white text-base leading-relaxed mt-4 border-t border-white/10 pt-4">
                  {buildTimelineSummary(mobile.fcp_ms, mobile.lcp_ms)}
                </p>
              </>
            )}

            {mobile.lcp_ms != null && mobile.lcp_ms > 1000 && (
              <div className="mt-4">
                <BounceCallout lcpMs={mobile.lcp_ms} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
