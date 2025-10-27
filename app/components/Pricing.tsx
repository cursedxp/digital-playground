"use client";

import { useState } from "react";
import TransitionComp from "./TransitionComp";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "custom">(
    "monthly"
  );

  return (
    <section className="relative text-white flex flex-col items-center w-full py-20">
      <div className="flex flex-col justify-center items-center max-w-7xl px-4">
        {/* Large background text */}
        <div className="relative w-full mb-16">
          <h2 className="text-[22rem] font-serif font-normal leading-none mb-8 bg-gradient-to-b from-white to-black bg-clip-text text-transparent">
            Pricing
          </h2>
          <TransitionComp className="bottom-9 left-0 w-full h-56" />
        </div>

        {/* Pricing toggle */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setSelectedPlan("monthly")}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
              selectedPlan === "monthly"
                ? "bg-gray-700 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            <span className="text-xl">🔄</span>
            <span>Monthly</span>
            <span className="text-sm text-gray-400">$8,000/mo</span>
          </button>
          <button
            onClick={() => setSelectedPlan("custom")}
            className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
              selectedPlan === "custom"
                ? "bg-gray-700 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            <span className="text-xl">✦</span>
            <span>Custom</span>
            <span className="text-sm text-gray-400">Starts at $20,000</span>
          </button>
        </div>

        {/* Pricing card */}
        <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12">
            <h4 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-200">
              Monthly Design Retainer
            </h4>

            <ul className="space-y-4 mb-12">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300">
                  Ongoing design support for any project
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300">
                  Custom development or no-code (limits apply)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300">
                  Clear timeline and milestone deliverables
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-gray-300">
                  Expert project manager & weekly async updates
                </span>
              </li>
            </ul>

            <div className="flex items-end justify-between">
              <div>
                <div className="text-6xl sm:text-7xl font-bold text-white mb-2">
                  $8,000
                </div>
                <div className="text-gray-400">
                  <div>per month</div>
                  <div>billed monthly</div>
                </div>
              </div>
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                Get Started
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-2xl">
          <h5 className="font-serif italic text-2xl mb-6">
            The 5 Types of Wealth
          </h5>
          <p className="text-gray-300 mb-6">
            &quot;For us it has been important to find a creative partner like
            Off Menu a team we can trust to deliver quality work on time, even
            with short notices.&quot;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700"></div>
            <div>
              <div className="font-semibold">Sahil Bloom</div>
              <div className="text-sm text-gray-400">
                Author, The 5 Types of Wealth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
