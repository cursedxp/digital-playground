"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BookCallButton from "./BookCallButton";

const pricingOptions = [
  {
    type: "Discovery Sprint",
    price: "$800",
    priceDetail: " one-time",
    timeline: "1 week",
    description:
      "We map your current workflows, find where time and money are being lost, and give you a concrete action plan \u2014 what to build, in what order, and why.",
    highlight: "No commitment beyond this. But most clients continue from here.",
    badge: "Not sure where to start?",
    badgeText: "Start here. One week, one clear plan.",
    examples: null,
    features: [
      "90-minute workflow discovery call",
      "Written process map of your current operations",
      "Bottleneck and opportunity analysis",
      "Prioritized action plan (what to automate or build first)",
      "Fixed-scope proposal for next steps if you want to continue",
    ],
  },
  {
    type: "Monthly Retainer",
    price: "$5,000",
    priceDetail: "/month",
    priceContext:
      "Most founders spend $8,000\u2013$15,000/month on a single mid-level developer plus overhead. This gets you senior-level design, development, and deployment \u2014 without the hiring process, benefits, or long-term commitment.",
    timeline: "Two projects per month, two weeks each",
    description:
      "Continuous development for your product. Two complete features delivered every month \u2014 design, development, and deployment included.",
    highlight:
      "Most founders use it as a bridge while figuring out when to hire. Cancel anytime.",
    badge: "Best for SaaS Founders",
    badgeText:
      "SaaS founders at $10K\u2013$50K MRR who need dev capacity without the overhead of a full-time hire.",
    examples:
      "AI-powered document processing workflow, Client onboarding automation, Internal analytics dashboard replacing disconnected spreadsheets, Automated proposal generation with CRM integration, Custom API integrations between your core tools",
    features: [
      "Two complete features delivered per month",
      "Design + development + deployment included",
      "Delivered tested and working",
      "Documentation included",
      "Cancel anytime, no penalties",
    ],
  },
  {
    type: "Custom Projects",
    price: "Let's Talk",
    priceDetail: null,
    priceContext:
      "Every project is different, so we price each one based on scope. No guessing \u2014 you'll have an exact number before any work begins.",
    timeline: "Usually 3\u20135 weeks",
    description:
      "For one-time builds with a defined end point. We assess your needs, propose a fixed price, and deliver it.",
    highlight:
      "50% upfront, 50% on delivery. Price is locked at proposal \u2014 never adjusted mid-project.",
    badge: "Best for Local Businesses",
    badgeText:
      "Restaurants, law firms, fitness studios, accountants \u2014 any business that needs a modern website or online systems.",
    examples:
      "Workflow audit + automation roadmap, WhatsApp-based support ticketing system, AI-powered internal tool for a specific team process, Fixed-scope integration between two systems that don't talk to each other",
    features: [
      "Fixed price locked before work begins",
      "Mobile-first design included",
      "Usually live in 3\u20135 weeks",
      "You own everything we build",
      "Ongoing support available after launch",
    ],
  },
];

export default function Pricing() {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  return (
    <section id="pricing" className="bg-black text-white px-6 mb-20 sm:mb-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Title - First on mobile, Left on desktop */}
          <div className="lg:col-span-4 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <motion.h2
                className="text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Simple,
                <br />
                Transparent
                <br />
                Pricing
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                No hidden fees, no surprises. Pick what works for your budget
                and timeline. Everything includes design, development, and
                deployment.
              </p>
              <BookCallButton className="inline-block mt-8 px-8 py-3 text-black text-base font-semibold rounded-full transition-all hover:scale-105" />
            </div>
          </div>

          {/* Pricing Options - Second on mobile, Right on desktop */}
          <div className="lg:col-span-8 lg:order-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {option.badge && (
                  <div className="absolute -top-3 left-0 z-10">
                    <div className="relative">
                      <span
                        className="px-4 py-1 text-xs font-semibold rounded-full text-black cursor-help transition-all hover:scale-105"
                        style={{ backgroundColor: "#FFE028" }}
                        onMouseEnter={() => setHoveredBadge(index)}
                        onMouseLeave={() => setHoveredBadge(null)}
                      >
                        {option.badge}
                      </span>
                      {hoveredBadge === index && option.badgeText && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute top-full mt-2 left-0 w-64 p-3 rounded-lg shadow-xl z-20"
                          style={{
                            backgroundColor: "rgba(255, 224, 40, 0.95)",
                            border: "1px solid rgba(255, 224, 40, 1)",
                          }}
                        >
                          <p className="text-xs leading-relaxed text-black font-medium">
                            💡 {option.badgeText}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}
                <div className={`mb-6 ${option.badge ? "pt-4" : ""}`}>
                  <h3 className="text-2xl font-bold mb-2">{option.type}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {option.price}
                    {option.priceDetail && (
                      <span className="text-lg white">
                        {option.priceDetail}
                      </span>
                    )}
                  </div>
                  {"priceContext" in option && option.priceContext && (
                    <p className="text-xs text-white/60 leading-relaxed mb-3">
                      {option.priceContext}
                    </p>
                  )}
                  <div className="text-sm text-white mb-4">
                    Timeline: {option.timeline}
                  </div>
                  <p className="text-white text-sm leading-relaxed mb-2">
                    {option.description}
                  </p>
                  {option.highlight && (
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#FFE028" }}
                    >
                      {option.highlight}
                    </p>
                  )}
                  {option.examples && (
                    <div className="text-xs text-white mb-4">
                      <span className="font-semibold text-white">Examples:</span>{" "}
                      {option.examples}
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold white mb-3">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="shrink-0" style={{ color: "#FFE028" }}>
                          ✓
                        </span>
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
