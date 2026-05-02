"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "We Find What's Broken First",
    description:
      "Before we build anything, we map what's actually broken and why. Sometimes the real bottleneck isn't where you think it is.",
  },
  {
    title: "Custom Internal Tools",
    description:
      "Dashboards, admin panels, client portals. Built around your specific workflow, not a template someone else designed for a different kind of business.",
  },
  {
    title: "Custom Websites & Web Apps",
    description:
      "From idea to production. Design, development, deployment — one person handling it all, no handoffs, no miscommunication.",
  },
  {
    title: "AI That Does Real Work",
    description:
      "Your existing tools, connected to AI where it actually helps. Not chatbots for the sake of it. Real automation — approvals, data extraction, automatic follow-ups, reporting. Built into how your team already works.",
  },
];

export default function WhatWeBuild() {
  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50">
      <div className="flex max-w-7xl flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1 flex flex-col order-1 mb-8 sm:mb-0">
          <motion.h2
            className="text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What We
            <br />
            Build
          </motion.h2>
        </div>
        <div className="flex-1 order-2">
          <div className="grid lg:grid-cols-2 gap-8 mt-4">
            {items.map((item) => (
              <div key={item.title}>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
