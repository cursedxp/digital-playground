"use client";

import { motion } from "framer-motion";
import { PageSpeedData, PageSpeedStrategy } from "@/app/types/report";
import ScoreRing from "./ScoreRing";

interface PerformanceSectionProps {
  ps: PageSpeedData;
  mobile: PageSpeedStrategy | null;
  desktop: PageSpeedStrategy | null;
}

export default function PerformanceSection({ mobile, desktop }: PerformanceSectionProps) {
  if (!mobile && !desktop) return null;

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
                Performance
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                How your site performs for real visitors on mobile and desktop devices.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {mobile?.performance_score != null && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white">Mobile</span>
                  <ScoreRing score={mobile.performance_score} label="Performance" size={100} strokeWidth={6} />
                </div>
              )}
              {mobile?.accessibility_score != null && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white">Mobile</span>
                  <ScoreRing score={mobile.accessibility_score} label="Accessibility" size={100} strokeWidth={6} />
                </div>
              )}
              {desktop?.performance_score != null && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white">Desktop</span>
                  <ScoreRing score={desktop.performance_score} label="Performance" size={100} strokeWidth={6} />
                </div>
              )}
              {desktop?.accessibility_score != null && (
                <div className="flex flex-col gap-3">
                  <span className="text-sm text-white">Desktop</span>
                  <ScoreRing score={desktop.accessibility_score} label="Accessibility" size={100} strokeWidth={6} />
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
