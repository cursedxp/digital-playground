"use client";

import { motion } from "framer-motion";
import BookCallButton from "./BookCallButton";

export default function ServicesDetailed() {
  const services = [
    {
      number: "01",
      title: "Drowning in manual data entry?",
      description:
        "Automated integrations that sync your tools in real-time. Connect your CRM (HubSpot, Pipedrive, Salesforce), payment processor (Stripe, PayPal), spreadsheets (Google Sheets, Airtable), and email platform (Mailchimp, SendGrid)—eliminate copy-paste work forever.",
    },
    {
      number: "02",
      title: "Spreadsheets breaking down?",
      description:
        "Custom dashboards that give you real-time visibility. Built for your exact workflow, not generic templates. Includes data visualization, filtering, and export capabilities.",
    },
    {
      number: "03",
      title: "Generic tools not fitting your needs?",
      description:
        "Tailored applications designed around your business logic. Customer portals, internal admin tools, booking systems, inventory trackers—built exactly for your workflow with intuitive UX that people will actually use.",
    },
    {
      number: "04",
      title: "Disconnected systems causing chaos?",
      description:
        "Unified workflows that create a single source of truth. Build custom APIs and integrations that make your tools work together seamlessly—no more data silos.",
    },
  ];

  return (
    <section
      id="services"
      className="text-white flex flex-col items-center w-full relative mb-50"
    >
      <div className="flex max-w-7xl flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1 order-2 sm:order-1">
          <div className="flex flex-col">
            <p className="text-xl mt-4 max-w-sm">
              Concrete solutions that solve real problems. Each deliverable
              includes design, development, and deployment—ready to use.
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
