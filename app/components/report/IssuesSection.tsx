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
    <section className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 px-8 sm:px-0">
        <div className="col-span-1">
              <motion.h2
                className="text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Issues
                <br />
                Found
              </motion.h2>
              <BookCallButton
                text="Let's Fix These"
                className="inline-block mt-8 px-8 py-3 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
              />
        </div>

        <div className="col-span-2 space-y-4">
            <p className="text-white text-xl leading-relaxed max-w-md mb-4">
              {issues.length} issues detected. Sorted by priority.
            </p>
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
    </section>
  );
}
