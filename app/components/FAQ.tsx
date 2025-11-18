"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BookCallButton from "./BookCallButton";

const faqs = [
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes. If it has an API, we can connect it. Stripe, HubSpot, Notion, Google Sheets, Airtable—we've worked with most popular tools. We'll check your specific setup during our first call.",
  },
  {
    question: "Do I need to know exactly what I want before starting?",
    answer:
      "Nope. Most clients come with a problem, not a solution. We'll talk through your workflow, figure out what makes sense to build, then give you a clear proposal with timeline and cost.",
  },
  {
    question: "What's included in the final deliverable?",
    answer:
      "The working app (deployed and live), all source code, design files, documentation, and a handoff call where we show you how everything works. You own it all.",
  },
  {
    question: "How do you charge for projects?",
    answer:
      "Task-Based: $2,400/month for ongoing tasks. Project-Based: $8,000/quarter for full apps. Custom: We'll quote it after talking. Everything's upfront—no hourly billing, no surprises.",
  },
  {
    question: "What if we need changes after delivery?",
    answer:
      "If what we built doesn't work as promised, we fix it—that's on us. If you want new features or changes to the scope, that's a new task at $2,400. Many clients keep a monthly subscription going for continuous improvements.",
  },
  {
    question: "How is this different from hiring a developer?",
    answer:
      "Hiring takes months and costs $80k-120k/year plus benefits. We start next week, you pay only for what you need, and we handle both design and development. Most developers don't design, so you'd need two hires anyway.",
  },
  {
    question: "Why not use Zapier or other no-code tools?",
    answer:
      "Zapier's great for simple stuff. When you need custom logic, complex data transformations, branded interfaces, or real-time dashboards—you need actual code. We build what no-code can't.",
  },
  {
    question: "How involved do we need to be during the project?",
    answer:
      "About 2-3 hours total. One discovery call (1 hour), feedback on prototypes (30-60 min), and final handoff (1 hour). Everything else is async—weekly video updates you watch when you want, Slack for questions. We build while you run your business.",
  },
  {
    question: "Can you handle projects that typically require a team?",
    answer:
      "Yes. We break complex projects into manageable pieces and work through them systematically. You get direct communication with no agency markup. If something truly needs parallel work or specialized expertise we don't have, we'll tell you upfront and can bring in trusted people.",
  },
  {
    question: "How does the subscription billing work?",
    answer:
      "Task-Based: $2,400/month starts when you buy your first task. After we deliver (1-2 weeks), it auto-renews monthly. Cancel anytime, no penalties. Project-Based: $8,000/quarter for 3 months, cancel after if you want. Stripe handles billing and reminds you before each renewal.",
  },
  {
    question: "What if I don't need a task every month?",
    answer:
      "Cancel anytime, no penalties. Lots of clients subscribe for a few months, pause when things are quiet, then restart later. It's built for flexibility, not lock-in.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-black text-white px-6 mb:20 sm:mb-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left side - Title */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <motion.h2
                className="text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Frequently
                <br />
                Asked
                <br />
                Questions
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6 mb-8">
                Real questions from businesses like yours. Don&apos;t see your
                question? Book a call and we&apos;ll answer it.
              </p>
              <BookCallButton
                text="Get Your Questions Answered"
                className="inline-block px-6 py-3 text-black text-sm font-semibold rounded-full transition-all hover:scale-105"
              />
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
