"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {
  return (
    <section className="text-white flex flex-col items-center w-full mb-20 sm:mb-50">
      <div className="flex flex-col justify-center items-center max-w-7xl px-8 sm:px-0">
        <motion.h2
          className="text-7xl sm:text-7xl font-bold text-left mb-10 sm:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why Choose This Approach
        </motion.h2>
        <p className="text-left sm:text-center mb-10 max-w-3xl text-xl ">
          Get custom software that solves real problems—faster and cheaper than
          hiring a full-time developer. Start with one sprint to see how we
          work.
        </p>
      </div>
      <div className="max-w-7xl px-8 sm:px-0">
        <div className="grid lg:grid-cols-3 lg:pl-[50%] md:grid-cols-3 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold mb-2">Design & Development, Unified</h3>
            <p className="text-sm">
              We handle both design and development. No separate teams, no
              handoffs, no miscommunication. What you see in the design is
              exactly what gets built.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Built Around Your Schedule</h3>
            <p className="text-sm">
              We work async so your calendar stays clear. Talk directly to us—no
              account managers or status meetings. Review progress when it suits
              you. Ship in weeks, not months.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Built for Real Results</h3>
            <p className="text-sm">
              We care about impact, not hours billed. Every solution fits your
              budget and works long-term. Automate manual work, eliminate
              errors, scale without hiring more people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
