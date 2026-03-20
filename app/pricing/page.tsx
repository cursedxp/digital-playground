"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BookCallButton from "../components/BookCallButton";

const pricingOptions = [
  {
    type: "Monthly Retainer",
    price: "$5,000",
    priceDetail: "/month",
    timeline: "Two 2-week sprints per month",
    description:
      "Ongoing engineering capacity for your product. Two complete features delivered every month \u2014 design, development, and deployment included.",
    highlight:
      "Most founders use it as a bridge while figuring out when to hire. Cancel anytime.",
    badge: "Best for SaaS Founders",
    badgeText:
      "SaaS founders at $10K\u2013$50K MRR who need dev capacity without the overhead of a full-time hire.",
    examples:
      "User authentication system, Stripe payment integration, Admin dashboard with analytics, Email notification system, API integrations, Search functionality",
    features: [
      "Two complete features delivered per month",
      "Design + development + deployment included",
      "Delivered tested and working",
      "Documentation included",
      "Cancel anytime, no penalties",
    ],
    cta: "Book a Discovery Call",
  },
  {
    type: "Custom Projects",
    price: "Let's Talk",
    priceDetail: null,
    timeline: "Usually 3\u20135 weeks",
    description:
      "For one-time builds with a defined end point. We assess your needs, propose a fixed price, and deliver it.",
    highlight:
      "50% upfront, 50% on delivery. Price is locked at proposal \u2014 never adjusted mid-project.",
    badge: "Best for Local Businesses",
    badgeText:
      "Restaurants, law firms, fitness studios, accountants \u2014 any business that needs a modern website or online systems.",
    examples:
      "Website rebuild, online booking system, mobile-first redesign, Google Business optimization, contact forms and lead capture",
    features: [
      "Fixed price locked before work begins",
      "Mobile-first design included",
      "Usually live in 3\u20135 weeks",
      "You own everything we build",
      "Ongoing support available after launch",
    ],
    cta: "Get a Free Quote",
  },
];

export default function PricingPage() {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  return (
    <main className="bg-black min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section - Centered Title and Description */}
      <section className="text-white px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center ">
          <motion.h1
            className="text-6xl sm:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Simple
            <br />
            Transparent Pricing
          </motion.h1>
          <motion.p
            className="text-white text-lg sm:text-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            No hidden fees, no surprises. Pick what works for your budget and
            timeline. Everything includes design, development, and deployment.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="text-white px-6 pb-20 max-w-4xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {pricingOptions.slice(0, 2).map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl p-8"
              >
                {option.badge && (
                  <div className="absolute -top-3 left-6 z-10">
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
                      <span className="text-lg text-white">
                        {option.priceDetail}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-white/70 mb-4">
                    Timeline: {option.timeline}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed mb-2">
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
                  <div className="text-xs text-white/70 mb-6">
                    <span className="font-semibold text-white">Examples:</span>{" "}
                    {option.examples}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">
                    What&apos;s Included:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="shrink-0" style={{ color: "#FFE028" }}>
                          ✓
                        </span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Now CTA */}
                <BookCallButton
                  text={option.cta}
                  className="px-8 py-3 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
