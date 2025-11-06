"use client";

import { motion } from "framer-motion";
import BookCallButton from "./BookCallButton";

export default function ServicesDetailed() {
  const services = [
    {
      number: "01",
      title: "Drowning in manual data entry?",
      description:
        "We connect your tools so they sync automatically. Your CRM talks to Stripe, payments flow to Google Sheets, emails trigger in Mailchimp. No more copy-paste.",
    },
    {
      number: "02",
      title: "Spreadsheets breaking down?",
      description:
        "We build custom dashboards that show what you need, when you need it. Real-time data, clean visualizations, built for how you actually work.",
    },
    {
      number: "03",
      title: "Generic tools not fitting your needs?",
      description:
        "We build software that fits your business exactly. Customer portals, admin tools, booking systems—designed around how you work, not how some SaaS thinks you should.",
    },
    {
      number: "04",
      title: "Disconnected systems causing chaos?",
      description:
        "We connect everything into one unified system. Custom APIs that make your tools talk to each other. One source of truth, no more hunting for the right data.",
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
