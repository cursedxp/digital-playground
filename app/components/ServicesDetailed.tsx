"use client";

import { motion } from "framer-motion";
import BookCallButton from "./BookCallButton";

export default function ServicesDetailed() {
  const services = [
    {
      number: "01",
      title: "Your team spending hours on work a system could do?",
      description:
        "Approvals that wait in inboxes. Reports built by hand every Friday. Client onboarding steps someone does manually every single time. We automate the work that's eating your team's hours.",
    },
    {
      number: "02",
      title: "Making decisions from data scattered across five platforms?",
      description:
        "We build dashboards around how you actually work — not how some SaaS company thinks you should. Real-time data, one place, no more switching tabs to get the full picture.",
    },
    {
      number: "03",
      title: "Bought ten SaaS tools and still building workarounds?",
      description:
        "Every new tool brings a new workaround. We build software that fits your business exactly — customer portals, internal tools, booking systems — so your team stops adapting to software and the software adapts to them.",
    },
    {
      number: "04",
      title: "Every new tool you add creates a new problem?",
      description:
        "Tools that don't talk to each other don't just slow you down — they create errors, duplication, and decisions made on incomplete information. We connect your systems so there's one source of truth.",
    },
  ];

  return (
    <section
      id="services"
      className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50"
    >
      <div className="flex max-w-7xl flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1 order-2 sm:order-1">
          <div className="flex flex-col">
            <p className="text-xl mt-4 max-w-sm">
              Real solutions to real problems. Everything we deliver is
              designed, built, and deployed—ready to use immediately.
            </p>
            <div className="grid lg:grid-cols-3 gap-4 mt-8">
              {services.map((service) => (
                <div key={service.number}>
                  <span className="font-bold block mb-2 ">{service.title}</span>
                  <p className=" text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end order-1 sm:order-2 mb-8 sm:mb-0">
          <motion.h2
            className="text-7xl font-bold text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What You
            <br />
            Get
          </motion.h2>
          <div className="mt-8">
            <BookCallButton />
          </div>
        </div>
      </div>
    </section>
  );
}
