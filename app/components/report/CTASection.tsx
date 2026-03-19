"use client";

import BookCallButton from "../BookCallButton";

export default function CTASection() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 border-b border-white/10">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ready to Fix These Issues?
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Book a free discovery call and we&apos;ll walk through your report together.
        </p>
        <BookCallButton
          text="Book a Free Discovery Call"
          className="inline-block px-8 py-4 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
        />
        <p className="text-sm text-white mt-6">
          Or email us:{" "}
          <a href="mailto:hi@optimotion.dev" className="text-white/80 hover:text-white transition-colors">
            hi@optimotion.dev
          </a>
        </p>
      </div>
    </div>
  );
}
