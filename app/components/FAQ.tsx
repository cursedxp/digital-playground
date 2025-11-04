"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in web development, mobile app development, and digital strategy. Our services include custom website development, e-commerce solutions, mobile applications, UI/UX design, and comprehensive digital transformation consulting.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile methodology with clear milestones. The process includes discovery and planning, design and prototyping, development, testing, and deployment. You'll receive regular updates and have opportunities to provide feedback throughout.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements to ensure your digital products continue to perform at their best.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including React, Next.js, TypeScript, Node.js, and various CMS platforms. We select the best tech stack for each project based on your specific requirements and long-term goals.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain transparent communication through regular meetings, project management tools, and dedicated channels. You'll have a primary point of contact and access to our team throughout the project lifecycle.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white px-6 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left side - Title */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mt-6">
                We&apos;re ready to assist you with any questions about our
                services, pricing model, or business solutions. We aim to
                respond within 24 hours on business days.
              </p>
            </div>
          </div>

          {/* Right side - FAQ Items */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white/20 pb-4">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left flex items-start justify-between gap-4 group"
                >
                  <span className="text-xl md:text-2xl font-semibold group-hover:text-yellow-200 transition-colors">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-light flex-shrink-0 mt-[-4px]"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-white/70 text-lg leading-relaxed mt-4 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
