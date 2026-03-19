"use client";

import { motion } from "framer-motion";
import { ObservatoryData, SSLInfo } from "@/app/types/report";
import SecuritySection from "./SecuritySection";

interface SecurityReportSectionProps {
  observatory: ObservatoryData | null;
  ssl: SSLInfo | null;
}

export default function SecurityReportSection({ observatory, ssl }: SecurityReportSectionProps) {
  return (
    <section className="bg-black text-white px-6 mb-20 sm:mb-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <motion.h2
                className="text-5xl sm:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Security
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                SSL certificate, security headers, and browser protection policies.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <SecuritySection observatory={observatory} ssl={ssl} />
          </div>
        </div>
      </div>
    </section>
  );
}
