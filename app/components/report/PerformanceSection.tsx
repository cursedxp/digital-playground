"use client";

import { motion } from "framer-motion";
import { PageSpeedData, PageSpeedStrategy } from "@/app/types/report";
import ScoreRing from "./ScoreRing";
import { scoreColor, COLOR_MAP } from "@/app/lib/scoring";

interface PerformanceSectionProps {
  ps: PageSpeedData;
  mobile: PageSpeedStrategy | null;
  desktop: PageSpeedStrategy | null;
}

function ScoreStatus({ score }: { score: number | null }) {
  if (score === null) return null;
  const color = scoreColor(score);
  const label = color === "good" ? "Good" : color === "warn" ? "Needs Work" : "Poor";
  return (
    <span className="text-xs font-medium" style={{ color: COLOR_MAP[color] }}>
      {label}
    </span>
  );
}

function buildSummary(mobile: PageSpeedStrategy | null, desktop: PageSpeedStrategy | null): string {
  const mPerf = mobile?.performance_score ?? null;
  const dPerf = desktop?.performance_score ?? null;

  const worse = mPerf !== null && dPerf !== null ? Math.min(mPerf, dPerf) : (mPerf ?? dPerf);

  if (worse === null) return "";

  if (worse >= 90) {
    return "Your site loads quickly on both mobile and desktop — visitors are unlikely to leave before the page appears. Keep monitoring as you add new content or features.";
  }
  if (worse >= 50) {
    const device = mPerf !== null && dPerf !== null && mPerf < dPerf ? "mobile" : "desktop";
    return `Your site performs adequately on desktop but has room to improve on ${device}. Slow mobile load times directly increase bounce rates — most visitors won't wait more than 3 seconds.`;
  }
  return "Your site loads too slowly for most visitors. Pages scoring below 50 typically lose over half their mobile traffic before the page even appears. Image compression, unused JavaScript, and render-blocking resources are the most common causes.";
}

export default function PerformanceSection({ mobile, desktop }: PerformanceSectionProps) {
  if (!mobile && !desktop) return null;

  const summary = buildSummary(mobile, desktop);

  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 px-8 sm:px-0">
        <div className="col-span-1 flex flex-col items-end">
          <motion.h2
            className="text-7xl font-bold text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Performance
          </motion.h2>
        </div>

        <div className="col-span-2">
            <p className="text-white text-xl leading-relaxed max-w-md mb-12 ml-auto">
              How your site performs for real visitors on mobile and desktop devices.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {mobile?.performance_score != null && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white">Mobile</span>
                  <ScoreRing score={mobile.performance_score} label="Performance" size={100} strokeWidth={6} />
                  <ScoreStatus score={mobile.performance_score} />
                  <p className="text-xs text-white leading-relaxed">How fast your page loads on a 4G mobile connection</p>
                </div>
              )}
              {mobile?.accessibility_score != null && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white">Mobile</span>
                  <ScoreRing score={mobile.accessibility_score} label="Accessibility" size={100} strokeWidth={6} />
                  <ScoreStatus score={mobile.accessibility_score} />
                  <p className="text-xs text-white leading-relaxed">How usable your site is for people with disabilities</p>
                </div>
              )}
              {desktop?.performance_score != null && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white">Desktop</span>
                  <ScoreRing score={desktop.performance_score} label="Performance" size={100} strokeWidth={6} />
                  <ScoreStatus score={desktop.performance_score} />
                  <p className="text-xs text-white leading-relaxed">How fast your page loads on a desktop connection</p>
                </div>
              )}
              {desktop?.accessibility_score != null && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white">Desktop</span>
                  <ScoreRing score={desktop.accessibility_score} label="Accessibility" size={100} strokeWidth={6} />
                  <ScoreStatus score={desktop.accessibility_score} />
                  <p className="text-xs text-white leading-relaxed">How usable your site is for people with disabilities</p>
                </div>
              )}
            </div>

            {summary && (
              <div className="border-t border-white/10 pt-6 space-y-4">
                <p className="text-white text-base leading-relaxed">
                  {summary}
                </p>
                <div className="flex items-center gap-6">
                  <p className="text-xs text-white uppercase tracking-widest">Score scale</p>
                  {[
                    { range: "90–100", label: "Good", color: "#22C55E" },
                    { range: "50–89", label: "Needs Work", color: "#F59E0B" },
                    { range: "0–49", label: "Poor", color: "#EF4444" },
                  ].map(({ range, label, color }) => (
                    <div key={range} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                      <span className="text-sm" style={{ color }}>{label}</span>
                      <span className="text-xs text-white">{range}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  );
}
