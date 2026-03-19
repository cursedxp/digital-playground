"use client";

import { motion } from "framer-motion";
import ScoreRing from "./ScoreRing";

interface ReportHeaderProps {
  company: string;
  website: string;
  overallScore: number;
  generatedAt: string;
}

export default function ReportHeader({ company, website, overallScore, generatedAt }: ReportHeaderProps) {
  const formattedDate = (() => {
    try {
      return new Date(generatedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return generatedAt;
    }
  })();

  return (
    <div className="text-center py-16 px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm text-white uppercase tracking-wider mb-4"
      >
        Website Audit Report
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold text-white mb-3"
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
        className="text-white hover:text-white/80 transition-colors text-sm mb-10 inline-block"
      >
        {website}
      </motion.a>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center my-10"
      >
        <ScoreRing score={overallScore} label="Overall Score" size={160} strokeWidth={10} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-xs text-white"
      >
        Generated on {formattedDate}
      </motion.p>
    </div>
  );
}
