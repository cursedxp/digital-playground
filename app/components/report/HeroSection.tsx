"use client";

import { motion } from "framer-motion";
import ScoreRing from "./ScoreRing";
import ScreenshotPreview from "./ScreenshotPreview";
import ShareButton from "./ShareButton";
import BookCallButton from "@/app/components/BookCallButton";

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
  reportId,
}: HeroSectionProps) {
  const formattedDate = (() => {
    try {
      return new Date(generatedAt).toLocaleDateString("en-US", {
        year: "numeric", month: "long", day: "numeric",
      });
    } catch { return generatedAt; }
  })();

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden mb-20 sm:mb-50">
      <div className="relative z-10 max-w-5xl m-auto flex flex-col items-center px-6 text-center">
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
          className="text-white hover:text-white/80 transition-colors text-lg mb-10"
        >
          {website}
        </motion.a>

        {screenshot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 w-full max-w-2xl"
          >
            <ScreenshotPreview screenshot={screenshot} />
          </motion.div>
        )}

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
          className="text-xs text-white mb-8"
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
  );
}
