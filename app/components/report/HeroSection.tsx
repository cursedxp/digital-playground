"use client";

import { motion } from "framer-motion";
import ScoreRing from "./ScoreRing";
import ScreenshotPreview from "./ScreenshotPreview";

interface HeroSectionProps {
  company: string;
  website: string;
  overallScore: number;
  generatedAt: string;
  screenshot?: string | null;
  reportId: string;
}

export default function HeroSection({
  company,
  website,
  overallScore,
  generatedAt,
  screenshot,
}: HeroSectionProps) {
  const formattedDate = (() => {
    try {
      return new Date(generatedAt).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
      });
    } catch { return generatedAt; }
  })();

  const expiryDate = (() => {
    try {
      const d = new Date(generatedAt);
      d.setDate(d.getDate() + 30);
      return d.toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
      });
    } catch { return null; }
  })();

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden mb-20 sm:mb-50">
      <div className="relative z-10 max-w-7xl w-full m-auto flex flex-col items-center px-6 text-center pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-white uppercase tracking-wider mb-6"
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
          className="text-white hover:text-white/80 transition-colors text-lg mb-8"
        >
          {website}
        </motion.a>

        {screenshot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full flex flex-col lg:flex-row items-start gap-8 text-left"
          >
            <div className="w-full lg:w-2/3 shrink-0">
              <ScreenshotPreview screenshot={screenshot} />
            </div>
            <div className="lg:w-1/3 space-y-6 pt-2">
              <div>
                <p className="text-xs text-white uppercase tracking-widest mb-2">What this report covers</p>
                <p className="text-white text-sm leading-relaxed">We analyzed {website} across performance, SEO, security, and accessibility — the four factors that directly affect how many visitors find your site, stay on it, and take action.</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Performance", desc: "How fast your site loads on real devices" },
                  { label: "Core Web Vitals", desc: "Google's official ranking signals" },
                  { label: "SEO", desc: "How search engines index your pages" },
                  { label: "Security", desc: "SSL and HTTP security headers" },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="text-xs shrink-0 mt-0.5" style={{ color: "#FFE028" }}>✓</span>
                    <div>
                      <span className="text-sm font-medium text-white">{label}</span>
                      <span className="text-xs text-white block">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <ScoreRing score={overallScore} label="Overall Score" size={100} strokeWidth={6} />
                <p className="text-xs text-white leading-relaxed">Combined score across performance, SEO, security, and accessibility</p>
                <p className="text-xs text-white/50">
                  Generated on {formattedDate}{expiryDate && ` · Expires ${expiryDate}`}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
