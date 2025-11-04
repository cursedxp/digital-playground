"use client";

import { motion } from "framer-motion";

const pricingOptions = [
  {
    type: "Task-Based",
    price: "$2,400",
    description:
      "Pre-scoped, well-defined deliverables with fast turnaround. Perfect for multi-step automations and standard integrations.",
    features: [
      "Clear scope and timeline",
      "1-2 week delivery",
      "Multi-step workflows",
      "Standard integrations",
      "Documentation included",
    ],
  },
  {
    type: "Project-Based",
    price: "From $8,000",
    description:
      "Full-scope custom applications and complex integrations. Includes discovery, design, development, and deployment.",
    features: [
      "Discovery & planning",
      "Custom design & UX",
      "Full-stack development",
      "Testing & deployment",
      "Training & support",
    ],
  },
  {
    type: "Custom",
    price: "Let's Talk",
    description:
      "Simple integrations, basic automations, or unique requirements that need a tailored approach.",
    features: [
      "Flexible pricing",
      "Quick assessment",
      "Tailored solutions",
      "No commitment required",
      "Fast response time",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-black text-white px-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Title - First on mobile, Right on desktop */}
          <div className="lg:col-span-4 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                Simple,
                <br />
                Transparent
                <br />
                Pricing
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mt-6">
                No hidden fees, no surprises. Choose the engagement model that
                fits your needs and budget. All options include our commitment
                to quality and clear communication.
              </p>
              <a
                href="#contact"
                className="inline-block mt-8 px-8 py-3 bg-white text-black text-base font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Pricing Options - Second on mobile, Left on desktop */}
          <div className="lg:col-span-8 lg:order-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{option.type}</h3>
                  <div className="text-4xl font-bold mb-4">{option.price}</div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-white/40 flex-shrink-0">—</span>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
