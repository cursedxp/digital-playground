"use client";

import { motion } from "framer-motion";
import { Recommendation } from "@/app/lib/recommendations";

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
}

export default function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  if (recommendations.length === 0) return null;

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
                What We
                <br />
                Recommend
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                Based on the issues we found, here&apos;s how we can help.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            {recommendations.map((rec, i) => (
              <motion.div
                key={rec.service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2">{rec.service.name}</h3>
                <p className="text-white text-sm leading-relaxed mb-4">{rec.reason}</p>
                <ul className="space-y-3">
                  {rec.service.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <span className="shrink-0" style={{ color: "#FFE028" }}>✓</span>
                      <span className="text-white">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
