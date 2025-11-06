"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50"
    >
      <div className="flex max-w-7xl w-full flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1">
          <motion.h2
            className="text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Who We
            <br />
            Are
          </motion.h2>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <p className="text-xl leading-relaxed">
              A boutique development studio based in Germany, specializing in
              full-stack web applications and UX design for growing businesses.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              You work directly with us. No account managers, no project
              coordinators, no handoffs. We design it, we build it, we deploy
              it.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              This means faster decisions, consistent quality, and no
              unnecessary meetings. We actually understand your business instead
              of playing telephone through project managers.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              Perfect for growing businesses that need custom software but
              aren&apos;t ready to hire a full team. You get expert work,
              fast—without the overhead or long contracts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <h3 className="font-semibold mb-2">Based in Germany</h3>
                <p className="text-sm text-white/60">
                  EU-based. CET timezone works with EU/US hours.
                  GDPR-compliant.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Async-First Workflow</h3>
                <p className="text-sm text-white/60">
                  No mandatory meetings. Weekly video updates on your schedule.
                  We reply within 48 hours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Full Ownership</h3>
                <p className="text-sm text-white/60">
                  Delivered tested and working. You own the code, designs, and
                  docs. No lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
