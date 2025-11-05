"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes. Most integrations work with popular platforms like Stripe, HubSpot, Notion, Google Sheets, and Airtable through their APIs. If your tool has an API or webhook support, we can likely connect it. During discovery, we'll assess your specific stack and confirm compatibility.",
  },
  {
    question: "Do I need to know exactly what I want before starting?",
    answer:
      "No. Many clients come with a problem, not a solution. We start with a discovery call to understand your workflows and pain points, then recommend the right approach. You'll get a clear proposal with scope, timeline, and cost before any work begins.",
  },
  {
    question: "What's included in the final deliverable?",
    answer:
      "Every project includes the working application (deployed and live), source code access, design files (Figma/Sketch), basic documentation, and a handoff session to train your team. You own everything—no vendor lock-in.",
  },
  {
    question: "How do you charge for projects?",
    answer:
      "Projects are priced based on scope and complexity. Task-based work (integrations, simple automations) starts at $2,400 with fixed pricing. Larger projects start at $8,000 and are quoted after discovery. You'll always know the full cost upfront—no hourly surprises.",
  },
  {
    question: "What if we need changes after delivery?",
    answer:
      "Each task is delivered fully tested and working. If what we delivered doesn't work as specified, we fix it—that's our responsibility. If your needs evolve (new features, additional integrations, workflow changes), those are new tasks priced separately starting at $2,400. Want ongoing work? We can schedule recurring monthly tasks to continuously improve your systems.",
  },
  {
    question: "What if a third-party tool changes its API?",
    answer:
      "If a tool we integrated makes breaking changes to their API, adapting the integration is a new task. We'll assess the scope and provide a quote—typically $1,200-$2,400 depending on complexity. This is rare but important to plan for with third-party integrations.",
  },
  {
    question: "How is this different from hiring a developer?",
    answer:
      "Hiring takes 2-3 months and costs $80k-$120k/year plus benefits. We deliver in weeks, you pay only for what you need, and there's no onboarding time. Plus, you get both design and development expertise—most developers don't design, so you'd need to hire both.",
  },
  {
    question: "Why not use Zapier or other no-code tools?",
    answer:
      "No-code tools work great for simple workflows. When you need custom business logic, complex data transformations, branded user interfaces, or real-time dashboards, you need actual code. We build what no-code tools can't.",
  },
  {
    question: "How involved do we need to be during the project?",
    answer:
      "About 2-3 hours total—all scheduled at your convenience. Initial discovery call (1 hour), prototype feedback sessions (30-60 min), and final handoff (1 hour). Everything else is async: weekly video updates you watch on your schedule, Slack for quick questions, and Loom feedback when you have time. We build while you run your business.",
  },
  {
    question: "Can you handle projects that typically require a team?",
    answer:
      "Yes. The pricing model ($2,400-$8,000 per deliverable) is designed for realistic scope boundaries. Complex projects are broken into manageable deliverables. The advantage of this approach is that you work directly with the developer building your solution, avoiding the coordination overhead and markup that comes with larger teams. If a project genuinely requires parallel workstreams or specialized expertise beyond full-stack and UX, this will be communicated transparently and vetted specialists can be brought in.",
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
              <h2 className="text-7xl font-bold">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mt-6 mb-8">
                Real questions from businesses like yours. Can't find your
                answer? Book a quick call and we'll walk you through exactly
                how we can help.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-black text-sm font-semibold rounded-full transition-all hover:scale-105"
                style={{ backgroundColor: "#FFE028" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFE850")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFE028")}
              >
                Get Your Questions Answered
              </a>
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
                  <span className="text-xl md:text-2xl font-semibold transition-colors group-hover:opacity-80">
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
