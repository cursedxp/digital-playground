"use client";

import { motion } from "framer-motion";
import { Recommendation } from "@/app/lib/recommendations";
import BookCallButton from "@/app/components/BookCallButton";

interface RecommendationsSectionProps {
  recommendations: Recommendation[];
}

export default function RecommendationsSection({ recommendations }: RecommendationsSectionProps) {
  if (recommendations.length === 0) return null;

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
                What We
                <br />
                Recommend
              </motion.h2>
        </div>

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                <ul className="space-y-3 mb-6">
                  {rec.service.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <span className="shrink-0" style={{ color: "#FFE028" }}>✓</span>
                      <span className="text-white">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <BookCallButton text="Book a Call" />
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
