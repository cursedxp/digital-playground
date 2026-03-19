"use client";

import { motion } from "framer-motion";
import { Issue } from "@/app/types/report";
import BookCallButton from "@/app/components/BookCallButton";

interface IssuesSectionProps {
  issues: Issue[];
}

export default function IssuesSection({ issues }: IssuesSectionProps) {
  if (issues.length === 0) return null;

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
                  <div>
                    <p className="text-xl font-semibold">{issue.label}</p>
                    {issue.detail && <p className="text-white/80 text-sm mt-1">{issue.detail}</p>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
