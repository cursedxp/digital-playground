"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    industry: "Client Project",
    year: "2024",
    title: "How Sync turns WhatsApp into a professional support platform",
    summary:
      "Ticketing system built on WhatsApp Business API for a SaaS company. Real-time message handling, automatic team assignment, Kanban workflow management, and analytics dashboard. Build complete and production-ready, pending Facebook API approval.",
    techStack: ["Next.js", "MongoDB", "WebSockets", "AWS"],
    slug: "sync",
  },
  {
    industry: "Internal Tool",
    year: "2024",
    title: "How we built a tool that generates case studies in 15 minutes",
    summary:
      "AI-powered documentation tool that transforms project details into professional case studies. Answer 3-4 questions, get a polished case study in 15 minutes with inline editing, consistent formatting, and export to multiple formats.",
    techStack: ["Next.js", "ChatGPT", "Claude"],
    slug: "generator",
  },
];

export default function CaseStudyShowcase() {
  return (
    <section
      id="case-studies"
      className="bg-black text-white px-6 mb-20 sm:mb-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left side - Case Studies Grid */}
          <div className="lg:col-span-8 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="block group h-full"
                >
                  <div className="h-full flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:opacity-80 transition-opacity">
                      {study.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-white text-sm leading-relaxed mb-4 flex-grow">
                      {study.summary}
                    </p>

                    {/* Tech Stack */}
                    <div className="text-xs text-white mb-4">
                      {study.techStack.join(" • ")}
                    </div>

                    {/* Read More Link */}
                    <div
                      className="text-sm group-hover:opacity-80 transition-opacity flex items-center gap-2"
                      style={{ color: "#FFE028" }}
                    >
                      <span>Read more</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side - Title */}
          <div className="lg:col-span-4 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <motion.h2
                className="text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                See Our
                <br />
                Work
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                Real projects we've built. Client work, internal tools, and
                technical showcases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
