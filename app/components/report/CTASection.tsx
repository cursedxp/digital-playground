"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <div className="text-center py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        Ready to Fix These Issues?
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Book a free discovery call and we&apos;ll walk through your report together.
      </p>
      <motion.a
        href="https://cal.com/optimotion.dev/60-min-meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
        style={{ backgroundColor: "#FFE028" }}
        whileHover={{ scale: 1.02 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        Book a Free Discovery Call
      </motion.a>
      <p className="text-sm text-gray-500 mt-4">
        Or email us:{" "}
        <a href="mailto:hi@optimotion.dev" className="text-gray-700 underline hover:text-gray-900">
          hi@optimotion.dev
        </a>
      </p>
    </div>
  );
}
