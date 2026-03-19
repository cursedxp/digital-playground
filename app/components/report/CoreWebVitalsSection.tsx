"use client";

import { motion } from "framer-motion";
import { PageSpeedStrategy } from "@/app/types/report";
import SpeedTimeline from "./SpeedTimeline";
import BounceCallout from "./BounceCallout";

interface CoreWebVitalsSectionProps {
  mobile: PageSpeedStrategy | null;
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
                Real-world loading, interactivity, and visual stability metrics from mobile.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {mobile.lcp_ms != null && (
                <div>
                  <span className="text-sm text-white">LCP</span>
                  <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>
                    {(mobile.lcp_ms / 1000).toFixed(1)}s
                  </p>
                  <span className="text-xs text-white block">Largest Contentful Paint</span>
                  <span className="text-xs text-white/30 block mt-1">Good: &lt;2.5s</span>
                </div>
              )}
              {mobile.fid_ms != null && (
                <div>
                  <span className="text-sm text-white">FID</span>
                  <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>
                    {mobile.fid_ms}ms
                  </p>
                  <span className="text-xs text-white block">First Input Delay</span>
                  <span className="text-xs text-white/30 block mt-1">Good: &lt;100ms</span>
                </div>
              )}
              {mobile.cls != null && (
                <div>
                  <span className="text-sm text-white">CLS</span>
                  <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>
                    {mobile.cls.toFixed(3)}
                  </p>
                  <span className="text-xs text-white block">Cumulative Layout Shift</span>
                  <span className="text-xs text-white/30 block mt-1">Good: &lt;0.1</span>
                </div>
              )}
              {mobile.fcp_ms != null && (
                <div>
                  <span className="text-sm text-white">FCP</span>
                  <p className="text-3xl font-bold" style={{ color: "#FFE028" }}>
                    {(mobile.fcp_ms / 1000).toFixed(1)}s
                  </p>
                  <span className="text-xs text-white block">First Contentful Paint</span>
                  <span className="text-xs text-white/30 block mt-1">Good: &lt;1.8s</span>
                </div>
              )}
            </div>

            {mobile.fcp_ms != null && mobile.lcp_ms != null && (
              <SpeedTimeline fcpMs={mobile.fcp_ms} lcpMs={mobile.lcp_ms} />
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
