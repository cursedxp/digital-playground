"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookCallButton from "./BookCallButton";

const steps = [
  {
    id: "001",
    title: "Start up",
    description:
      "Agility and speed drive rapid development and market entry, prioritizing innovation over structure.",
    position: 0.02,
  },
  {
    id: "002",
    title: "Growth",
    description:
      "Rapid expansion drives focus on scaling operations and optimizing processes to manage complexity.",
    position: 0.28,
  },
  {
    id: "003",
    title: "Maturity",
    description:
      "Businesses prioritize efficiency and stability, refining operations to maximize profitability.",
    position: 0.6,
  },
  {
    id: "004",
    title: "Decline",
    description:
      "Reduced market share and revenue signal challenges from outdated products and shifting preferences.",
    position: 0.85,
  },
];

export default function ComplencyCurveMobile() {
  const pathRef = useRef<SVGPathElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  // Motion values to track rectangle position and rotation
  const x = useSpring(useMotionValue(50), { stiffness: 100, damping: 20 });
  const y = useSpring(useMotionValue(350), { stiffness: 100, damping: 20 });
  const rotate = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });

  const moveToPosition = useCallback((normalizedX: number) => {
    if (!pathRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    const shapeHalfWidth = 100;

    const minLength = shapeHalfWidth;
    const maxLength = pathLength - shapeHalfWidth;
    const targetLength = minLength + normalizedX * (maxLength - minLength);
    const clampedLength = Math.max(
      minLength,
      Math.min(maxLength, targetLength)
    );

    const point = pathRef.current.getPointAtLength(clampedLength);
    const nextLength = Math.min(clampedLength + 1, pathLength);
    const nextPoint = pathRef.current.getPointAtLength(nextLength);

    const angle =
      Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
      (180 / Math.PI);

    x.set(point.x);
    y.set(point.y);
    rotate.set(angle);
  }, [x, y, rotate]);

  const handleNext = () => {
    const nextStep = Math.min(currentStep + 1, steps.length - 1);
    setCurrentStep(nextStep);
    moveToPosition(steps[nextStep].position);
  };

  const handlePrev = () => {
    const prevStep = Math.max(currentStep - 1, 0);
    setCurrentStep(prevStep);
    moveToPosition(steps[prevStep].position);
  };

  // Initialize position on mount
  useEffect(() => {
    setTimeout(() => moveToPosition(steps[0].position), 100);
  }, [moveToPosition]);

  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20 px-4">
      <div className="flex flex-col w-full max-w-md">
        <motion.h2
          className="text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Why Growth
          <br /> Stalls
        </motion.h2>
        <p className="text-base mb-6">
          Growth eventually slows down. The question is: will you see it coming?
        </p>
      </div>

      <div className="w-full max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1080 419"
          className="w-full h-auto"
        >
          <defs>
            <mask id="pathMaskMobile">
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
            ref={pathRef}
            d="M 0 370 Q 350 400, 550 160 T 1000 250"
            strokeWidth={30}
            fill="none"
            className="stroke-neutral-800"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <g mask="url(#pathMaskMobile)">
            <motion.rect
              width="250"
              height="200"
              rx="100"
              className="fill-neutral-700"
              style={{
                x,
                y,
                rotate,
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{
                once: false,
                amount: 0.5,
              }}
              transition={{
                delay: 2,
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
            <motion.rect
              x="500"
              y="200"
              width="200"
              height="150"
              rx="20"
              fill="#FFE028"
              transform="rotate(45 600 175)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      </div>

      {/* Step Navigation */}
      <div className="w-full max-w-md mt-8">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <div className="flex flex-col gap-2 mb-4">
            <span className="text-sm" style={{ color: "#FFE028" }}>
              {steps[currentStep].id}
            </span>
            <span className="font-semibold text-2xl">
              {steps[currentStep].title}
            </span>
          </div>
          <p className="text-sm text-gray-300">
            {steps[currentStep].description}
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="flex items-center gap-2 px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm">Previous</span>
          </button>

          {/* Step Indicators */}
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentStep(index);
                  moveToPosition(steps[index].position);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep
                    ? "w-6"
                    : "bg-neutral-700 hover:bg-neutral-600"
                }`}
                style={
                  index === currentStep ? { backgroundColor: "#FFE028" } : {}
                }
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className="flex items-center gap-2 px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-70 transition-opacity"
          >
            <span className="text-sm">Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center w-full max-w-md mt-12 text-center">
        <h3 className="text-xl font-bold mb-3">Where are you on this curve?</h3>
        <p className="text-white/70 text-sm mb-6">
          Growth phase: Automate before manual processes break. Maturity: Integrate and scale efficiently. Struggling: Let&apos;s rebuild.
        </p>
        <BookCallButton
          text="Book a Discovery Call"
          className="inline-block px-8 py-3 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
        />
      </div>
    </section>
  );
}
