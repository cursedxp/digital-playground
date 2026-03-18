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
    <div className="text-center py-12 px-4">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-gray-500 uppercase tracking-wider mb-2"
      >
        Website Audit Report
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2"
      >
        {company}
      </motion.h1>
      <motion.a
        href={website.startsWith("http") ? website : `https://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-500 hover:text-gray-700 underline text-sm mb-8 inline-block"
      >
        {website}
      </motion.a>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center my-8"
      >
        <ScoreRing score={overallScore} label="Overall Score" size={160} strokeWidth={10} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-xs text-gray-400"
      >
        Generated on {formattedDate}
      </motion.p>
    </div>
  );
}
