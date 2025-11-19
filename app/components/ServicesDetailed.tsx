"use client";

import { motion } from "framer-motion";
import BookCallButton from "./BookCallButton";

export default function ServicesDetailed() {
  const services = [
    {
      number: "01",
      title: "Drowning in manual data entry?",
      description:
        "We make your tools talk to each other automatically. Your CRM syncs with Stripe, payments show up in Google Sheets, emails trigger in Mailchimp. No more copy-paste, no more errors.",
    },
    {
      number: "02",
      title: "Spreadsheets breaking down?",
      description:
        "We build dashboards that show what you need, when you need it. Real-time data, clear visualizations, designed for how you actually work—not how some SaaS company thinks you should.",
    },
    {
      number: "03",
      title: "Generic tools not fitting your needs?",
      description:
        "We build software that fits your business exactly. Customer portals, admin tools, booking systems—built around your workflow, not the other way around.",
    },
    {
      number: "04",
      title: "Disconnected systems causing chaos?",
      description:
        "We connect everything into one system that actually makes sense. Your tools talk to each other. One place for the truth, no more hunting through five different platforms.",
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
