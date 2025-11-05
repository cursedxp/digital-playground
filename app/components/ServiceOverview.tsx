"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {
  return (
    <section className="text-white flex flex-col items-center w-full mb-50">
      <div className="flex flex-col justify-center items-center max-w-7xl px-8 sm:px-0">
        <motion.h2
          className="text-7xl sm:text-7xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why Choose This Approach
        </motion.h2>
        <p className="text-center mb-10 max-w-3xl ">
          A specialized development service delivering custom solutions that
          eliminate friction and drive measurable results—faster than hiring a
          full-time developer. Start with a small task to test our
          collaboration.
        </p>
      </div>
      <div className="max-w-7xl px-8 sm:px-0">
        <div className="grid lg:grid-cols-3 lg:pl-[50%] md:grid-cols-3 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold mb-2">Design & Development, Unified</h3>
            <p className="text-sm">
              You&apos;re not paying for separate design and development teams
              that need to coordinate. We handle both—eliminating handoff
              delays, translation errors, and coordination overhead. What you
              see in the design is what gets built. Faster iterations, zero
              miscommunication, seamless execution.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Built Around Your Schedule</h3>
            <p className="text-sm">
              Async-first workflow means we never block your calendar. Direct
              communication—no account managers, no status meetings. Review
              progress updates and prototypes on your own time. Ship in weeks,
              not months.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Built for Real Business Outcomes</h3>
            <p className="text-sm">
              Success is measured by impact, not billable hours. Every
              recommendation considers your budget constraints, current
              operations, and long-term maintainability. Solutions deliver
              tangible results—eliminate manual errors, free your people from
              repetitive work, scale operations without adding headcount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
