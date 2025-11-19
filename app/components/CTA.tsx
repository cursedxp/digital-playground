"use client";

import BookCallButton from "./BookCallButton";

export default function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 border-b border-white/10">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ready to Automate Your Workflow?
        </h2>
        <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
          Start with a discovery call to identify your bottlenecks, or jump in
          with one sprint to test our collaboration.
        </p>
        <BookCallButton
          text="Book a Discovery Call"
          className="inline-block px-8 py-4 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
        />
      </div>
    </div>
  );
}
