"use client";

import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Discover & Define",
    description:
      "We talk through your workflow and pain points. Figure out what to build, how success looks, and what it'll cost—so you know exactly what you're getting upfront.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Design and development happen in parallel. Fast iterations—you see progress early and often. Weekly async updates (Loom, Slack, email—your choice) showing what shipped and what's next. Shared workspace (Notion, Jira, or your tool) to track progress. Clear timeline after understanding your needs.",
  },
  {
    number: "03",
    title: "Deploy & Optimize",
    description:
      "Launch it, show you how it works, then watch how people use it. Make adjustments based on real feedback until it's exactly what you need.",
  },
];

export default function DeliveryProcess() {
  return (
    <section
      id="how-it-works"
      className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50"
    >
      <div className="flex max-w-7xl w-full flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1 order-2 sm:order-1">
          <div className="flex flex-col">
            <p className="text-xl mt-6 max-w-sm">
              Built for busy founders. We build while you run your business.
              Review progress updates when it suits you—async via Loom, Slack, email, or your preferred tool. No meetings needed. Fast iterations
              mean you see progress early and often. Timeline depends on scope—we&apos;ll give you exact dates upfront.
            </p>
            <div className="hidden md:grid grid-cols-3 gap-4 mt-8 text-sm">
              {phases.map((phase, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div
                    className="text-6xl md:text-7xl font-bold mb-2"
                    style={{ color: "#FFE028" }}
                  >
                    {phase.number}
                  </div>
                  <h3 className="font-semibold text-base">{phase.title}</h3>
                  <p className="text-white">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 sm:order-2">
          <motion.h2
            className="text-right text-7xl font-bold "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            How It
            <br />
            Works
          </motion.h2>
        </div>
      </div>
      <div className="grid md:hidden px-8 gap-4 mt-8 text-sm max-w-7xl w-full">
        {phases.map((phase, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div
              className="text-6xl md:text-7xl font-bold mb-2"
              style={{ color: "#FFE028" }}
            >
              {phase.number}
            </div>
            <h3 className="font-semibold text-base">{phase.title}</h3>
            <p className="text-white/70">{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
