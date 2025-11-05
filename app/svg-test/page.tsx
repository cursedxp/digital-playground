"use client";

import { motion } from "framer-motion";
import ComplencyCurveMobile from "../components/ComplencyCurveMobile";

export default function SvgTest() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">SVG Test Page</h1>

      <div className="w-full max-w-2xl border border-white/20 p-8 rounded-lg">
        <h2 className="text-2xl mb-4">Simple SVG</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 200"
          className="w-full h-auto border border-yellow-500"
        >
          <circle cx="100" cy="100" r="50" fill="#FFE028" />
          <rect x="200" y="50" width="100" height="100" fill="#FF6B6B" />
        </svg>
      </div>

      <div className="w-full max-w-2xl border border-white/20 p-8 rounded-lg mt-8">
        <h2 className="text-2xl mb-4">Animated Path</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 419"
          className="w-full h-auto"
        >
          <motion.path
            d="M 0 370 Q 350 400, 550 160 T 1000 250"
            strokeWidth={30}
            fill="none"
            stroke="#FFE028"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="w-full max-w-2xl border border-white/20 p-8 rounded-lg mt-8">
        <h2 className="text-2xl mb-4">Path with Mask</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 419"
          className="w-full h-auto"
        >
          <defs>
            <mask id="testMask">
              <rect width="100%" height="100%" fill="black" />
              <path
                d="M 0 370 Q 350 400, 550 160 T 1000 250"
                stroke="white"
                strokeWidth={30}
                fill="none"
              />
            </mask>
          </defs>

          <motion.path
            d="M 0 370 Q 350 400, 550 160 T 1000 250"
            strokeWidth={30}
            fill="none"
            className="stroke-neutral-800"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          <g mask="url(#testMask)">
            <motion.rect
              x="500"
              y="200"
              width="200"
              height="150"
              rx="20"
              fill="#FFE028"
              transform="rotate(45 600 175)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            />
          </g>
        </svg>
      </div>

      <div className="w-full max-w-2xl border border-white/20 p-8 rounded-lg mt-8">
        <h2 className="text-2xl mb-4">ComplencyCurveMobile Component</h2>
        <ComplencyCurveMobile />
      </div>
    </div>
  );
}
