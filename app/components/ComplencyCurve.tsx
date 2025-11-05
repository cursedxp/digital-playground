"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import ComplencyCurveMobile from "./ComplencyCurveMobile";
import BookCallButton from "./BookCallButton";

export default function ComplencyCurve() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  // Motion values to track rectangle position and rotation
  const x = useSpring(useMotionValue(50), { stiffness: 100, damping: 20 });
  const y = useSpring(useMotionValue(350), { stiffness: 100, damping: 20 });
  const rotate = useSpring(useMotionValue(0), { stiffness: 100, damping: 20 });

  const moveToPosition = (normalizedX: number) => {
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
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || !pathRef.current) return;

    const svgRect = svgRef.current.getBoundingClientRect();
    const mouseX = e.clientX - svgRect.left;
    const normalizedX = mouseX / svgRect.width;

    moveToPosition(normalizedX);
  };
  return (
    <>
      {/* Mobile Version */}
      <div className="block md:hidden">
        <ComplencyCurveMobile />
      </div>

      {/* Desktop Version */}
      <section className="hidden md:flex text-white flex-col items-center w-full relative mb-20">
        <div className="flex max-w-7xl flex-col sm:flex-row px-8 sm:p-0">
          <div className="flex-1">
            <motion.h2
              className="text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Why Growth
              <br /> Stalls
            </motion.h2>
          </div>
          <div className="flex-1">
            <div className="flex flex-col">
              <p className="text-xl mt-4 max-w-sm">
                Growth eventually slows down. The question is: will you see it
                coming?
              </p>
              <div className="grid lg:grid-cols-3 gap-4 mt-8 text-sm">
                <p>
                  Every growing business hits the same bottleneck: workflows
                  that worked for 10 people break at 50. Manual processes that
                  were &quot;fine for now&quot; become full-time jobs. Systems that
                  don&apos;t talk to each other create chaos.
                </p>
                <p>
                  Most companies react by hiring more people or buying more
                  tools. But throwing headcount at operational problems just
                  delays the inevitable—and makes the problem more expensive to
                  fix later.
                </p>
                <p>
                  We help companies extend their growth phase by eliminating
                  bottlenecks before they become crises. Turn your most
                  time-consuming processes into automated systems. Build
                  scalable foundations that grow with you—not against you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl w-full ">
          <svg
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1080 419"
            onMouseMove={handleMouseMove}
          >
            <defs>
              {/* Mask using the path stroke */}
              <mask id="pathMask">
                <rect width="100%" height="100%" fill="black" />
                <path
                  d="M 0 370 Q 350 400, 550 160 T 1000 250"
                  stroke="white"
                  strokeWidth={30}
                  fill="none"
                />
              </mask>
            </defs>

            {/* The path */}
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

            {/* Group with mask applied */}
            <g mask="url(#pathMask)">
              {/* Pill shape that follows the path */}
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
        <div className="flex w-full max-w-7xl">
          <div
            className="flex-4 group relative"
            onMouseEnter={() => {
              moveToPosition(0.02);
              setHoveredSection(0);
            }}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="absolute bottom-[140px]">
              <div
                className="w-[1px] h-8 bg-gray-700 relative pointer-events-auto"
                style={{
                  backgroundColor: hoveredSection === 0 ? "#FFE028" : "",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full border border-gray-700 absolute -top-3 -left-1.5"
                  style={{ borderColor: hoveredSection === 0 ? "#FFE028" : "" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-col">
                <span
                  className="text-sm"
                  style={{ color: hoveredSection === 0 ? "#FFE028" : "" }}
                >
                  001
                </span>
                <span
                  className="font-semibold text-lg"
                  style={{ color: hoveredSection === 0 ? "#FFE028" : "" }}
                >
                  Start up
                </span>
              </div>
              <motion.p
                className="text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={
                  hoveredSection === 0
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.3 }}
              >
                Agility and speed drive rapid development and market entry,
                prioritizing innovation over structure.
              </motion.p>
            </div>
          </div>
          <div
            className="flex-4 group relative"
            onMouseEnter={() => {
              moveToPosition(0.28);
              setHoveredSection(1);
            }}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="absolute bottom-[140px]">
              <div
                className="w-[1px] h-16 bg-gray-700 relative pointer-events-auto"
                style={{
                  backgroundColor: hoveredSection === 1 ? "#FFE028" : "",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full border border-gray-700 absolute -top-3 -left-1.5"
                  style={{ borderColor: hoveredSection === 1 ? "#FFE028" : "" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-col">
                <span
                  className="text-sm"
                  style={{ color: hoveredSection === 1 ? "#FFE028" : "" }}
                >
                  002
                </span>
                <span
                  className="font-semibold text-lg"
                  style={{ color: hoveredSection === 1 ? "#FFE028" : "" }}
                >
                  Growth
                </span>
              </div>
              <motion.p
                className="text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={
                  hoveredSection === 1
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.3 }}
              >
                Rapid expansion drives focus on scaling operations and
                optimizing processes to manage complexity.
              </motion.p>
            </div>
          </div>
          <div
            className="flex-4 group relative"
            onMouseEnter={() => {
              moveToPosition(0.6);
              setHoveredSection(2);
            }}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="absolute bottom-[140px]">
              <div
                className="w-[1px] h-64 sm:h-48 md:h-48 xl:h-64 bg-gray-700 relative pointer-events-auto"
                style={{
                  backgroundColor: hoveredSection === 2 ? "#FFE028" : "",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full border border-gray-700 absolute -top-3 -left-1.5"
                  style={{ borderColor: hoveredSection === 2 ? "#FFE028" : "" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-col">
                <span
                  className="text-sm"
                  style={{ color: hoveredSection === 2 ? "#FFE028" : "" }}
                >
                  003
                </span>
                <span
                  className="font-semibold text-lg"
                  style={{ color: hoveredSection === 2 ? "#FFE028" : "" }}
                >
                  Maturity
                </span>
              </div>
              <motion.p
                className="text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={
                  hoveredSection === 2
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.3 }}
              >
                Businesses prioritize efficiency and stability, refining
                operations to maximize profitability.
              </motion.p>
            </div>
          </div>
          <div
            className="flex-4 group relative"
            onMouseEnter={() => {
              moveToPosition(0.85);
              setHoveredSection(3);
            }}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <div className="absolute bottom-[140px]">
              <div
                className="w-[1px] md:h-64 lg:h-72 xl:h-96 bg-gray-700 relative pointer-events-auto"
                style={{
                  backgroundColor: hoveredSection === 3 ? "#FFE028" : "",
                }}
              >
                <div
                  className="w-3 h-3 rounded-full border border-gray-700 absolute -top-3 -left-1.5"
                  style={{ borderColor: hoveredSection === 3 ? "#FFE028" : "" }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex flex-col">
                <span
                  className="text-sm"
                  style={{ color: hoveredSection === 3 ? "#FFE028" : "" }}
                >
                  004
                </span>
                <span
                  className="font-semibold text-lg"
                  style={{ color: hoveredSection === 3 ? "#FFE028" : "" }}
                >
                  Decline
                </span>
              </div>
              <motion.p
                className="text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={
                  hoveredSection === 3
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.3 }}
              >
                Reduced market share and revenue signal challenges from outdated
                products and shifting preferences.
              </motion.p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center max-w-3xl mx-auto mt-16 px-8 text-center">
          <h3 className="text-4xl sm:text-5xl font-bold mb-4">
            Where are you on this curve?
          </h3>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Growth phase: You need automation before manual processes break.
            Maturity: You need integration and dashboards to scale efficiently.
            Already struggling: Let&apos;s talk about rescue and rebuild.
          </p>
          <BookCallButton
            text="Book a Discovery Call"
            className="inline-block px-8 py-4 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
          />
        </div>
      </section>
    </>
  );
}
