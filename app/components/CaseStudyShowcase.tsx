"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    industry: "Client Project",
    year: "2024",
    title: "Sync: WhatsApp Support Platform",
    summary:
      "A professional services firm needed to handle client support through WhatsApp without the message chaos that hits every team past five people. We built a coordination layer on top of WhatsApp Business API — auto-assignment, Kanban tracking, real-time analytics. Customers keep messaging on WhatsApp. The team stops dropping things.",
    techStack: ["Next.js", "MongoDB", "WebSockets", "AWS"],
    slug: "sync",
  },
  {
    industry: "Internal Tool",
    year: "2024",
    title: "Storycraft: AI Case Study Generator",
    summary:
      "Case studies take 3–6 hours to write. Most agencies skip them entirely. We built a tool that turns 3–4 questions into a finished, publish-ready case study in about 15 minutes.",
    techStack: ["Next.js", "ChatGPT", "Claude"],
    slug: "generator",
  },
  {
    industry: "Internal Tool",
    year: "2025",
    title: "Lead Finder: Location & ICP-Based Prospecting",
    summary:
      "Pick a sector, a city, and what your ideal customer looks like. Lead Finder does the searching. We built it for our own outreach pipeline — and to make entering unfamiliar markets a lot less painful.",
    techStack: [],
    slug: "lead-finder",
  },
  {
    industry: "Developer Tool",
    year: "2025",
    title: "Pingfyr: Scheduled Delivery API for Developers",
    summary:
      "One API call. Seven channels. Your reminders, notifications, and webhooks fire automatically — no cron jobs, no polling, nothing to babysit.",
    techStack: [],
    slug: "pingfyr",
  },
  {
    industry: "Client Project",
    year: "2025",
    title: "Social Media Automation: Instagram Content Engine",
    summary:
      "An inconsistent Instagram feed looks like an inactive business. We built an automation that writes the posts, generates the images, and produces avatar videos with a realistic on-screen presenter — so the feed stays active without the owner ever picking up their phone.",
    techStack: [],
    slug: "social-media-automation",
  },
  {
    industry: "Product",
    year: "2025",
    title: "TOM: Meeting Intelligence That Compounds",
    summary:
      "TOM records and transcribes your meetings locally on your Mac — no bots, no cloud, no subscription. Ask questions across all your past calls and get cited answers with video timestamps. The more meetings you have in it, the more useful it gets.",
    techStack: [],
    slug: "tom",
  },
];

export default function CaseStudyShowcase() {
  return (
    <section
      id="projects"
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
                    <p className="text-white text-sm leading-relaxed mb-4 grow">
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
                Real projects we&apos;ve built. Client work, internal tools, and
                technical showcases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
