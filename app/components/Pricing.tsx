"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import BookCallButton from "./BookCallButton";

const pricingOptions = [
  {
    type: "Task-Based",
    price: "$2,400",
    priceDetail: "/month",
    timeline: "1-2 weeks per task",
    description:
      "Monthly subscription for ongoing development tasks. Cancel anytime.",
    highlight: "Start your first task, continue monthly if you need ongoing work. No long-term commitment required.",
    badge: "Early Client Offer",
    badgeText: "First 3 clients get 20% off + featured case study in exchange for detailed testimonial",
    examples: "Stripe-to-HubSpot sync, Email automation workflow, API integration",
    features: [
      "One task per month",
      "Delivered tested and working",
      "Design + development included",
      "Documentation included",
      "Cancel anytime, no penalties",
    ],
  },
  {
    type: "Project-Based",
    price: "$8,000",
    priceDetail: "/quarter",
    timeline: "3 months per cycle",
    description:
      "Quarterly subscription for full-scope custom applications and ongoing development.",
    highlight: null,
    examples: "Customer dashboard, Internal CRM, Booking system, Multi-platform integration",
    features: [
      "Discovery & planning",
      "Custom design & UX",
      "Full-stack development",
      "Weekly progress updates",
      "Cancel after each quarter",
    ],
  },
  {
    type: "Custom",
    price: "Let's Talk",
    priceDetail: null,
    timeline: "Varies",
    description:
      "Complex projects with custom requirements. One-time payment via custom link.",
    highlight: null,
    examples: "Enterprise integrations, Legacy system modernization, Complex workflows",
    features: [
      "Custom assessment",
      "Flexible approach",
      "Tailored solutions",
      "Transparent quoting",
      "One-time payment (no subscription)",
    ],
  },
];

export default function Pricing() {
  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);

  return (
    <section id="pricing" className="bg-black text-white px-6 mb-20">
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
              <p className="text-white/70 text-lg leading-relaxed mt-6">
                No hidden fees, no surprises. Choose the engagement model that
                fits your needs and budget. All options include our commitment
                to quality and clear communication.
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
                          style={{ backgroundColor: "rgba(255, 224, 40, 0.95)", border: "1px solid rgba(255, 224, 40, 1)" }}
                        >
                          <p className="text-xs leading-relaxed text-black font-medium">
                            💡 {option.badgeText}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                )}
                <div className={`mb-6 ${option.badge ? 'pt-4' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2">{option.type}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {option.price}
                    {option.priceDetail && (
                      <span className="text-lg text-white/60">{option.priceDetail}</span>
                    )}
                  </div>
                  <div className="text-sm text-white/50 mb-4">Timeline: {option.timeline}</div>
                  <p className="text-white/70 text-sm leading-relaxed mb-2">
                    {option.description}
                  </p>
                  {option.highlight && (
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#FFE028" }}>
                      {option.highlight}
                    </p>
                  )}
                  <div className="text-xs text-white/50 mb-4">
                    <span className="font-semibold text-white/60">Examples:</span> {option.examples}
                  </div>
                </div>

                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-white/60 mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="flex-shrink-0" style={{ color: "#FFE028" }}>✓</span>
                        <span className="text-white/80">{feature}</span>
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
