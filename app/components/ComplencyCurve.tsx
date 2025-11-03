"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

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
    <section className="text-white flex flex-col items-center w-full relative mb-20">
      <div className="flex max-w-7xl">
        <div className="flex-1">
          <div className="flex flex-col">
            <p className="text-xl mt-4 max-w-sm">
              Growth is easy until you take it for granted. We help growing
              companies keep growing.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8 text-sm">
              <p>
                As businesses scale, they hit the same ceiling: workflows break,
                systems don&apos;t talk to each other, and teams drown in manual
                work. The instinct is to throw more tools at the problem or hire
                another person to patch the gaps.
              </p>
              <p>
                Whether you&apos;re a 25-person operation outgrowing
                spreadsheets, a 100-person company juggling disconnected
                platforms, or an established business stuck on legacy systems,
                sustaining growth without proportional headcount is the real
                challenge.
              </p>
              <p>
                We help companies extend their growth phase by turning
                operational friction into automated efficiency. Not just
                building software, but eliminating the bottlenecks that limit
                what&apos;s possible. We transform your most time-consuming
                processes into competitive advantages.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-right text-7xl font-bold ">
            The
            <br /> Complency
            <br /> Curve
          </h2>
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
              once: false,
              amount: 0.5,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
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
              className="fill-orange-500"
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
            <div className="w-[1px] h-8 bg-gray-700 group-hover:bg-orange-500 relative pointer-events-auto">
              <div className="w-3 h-3 rounded-full border border-gray-700 absolute -top-3 -left-1.5 group-hover:border-orange-500"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex flex-col">
              <span className="text-sm group-hover:text-orange-500">001</span>
              <span className="font-semibold text-lg group-hover:text-orange-500">
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
            <div className="w-[1px] h-16 bg-gray-700 group-hover:bg-orange-500 relative pointer-events-auto">
              <div className="w-3 h-3 rounded-full border border-gray-700 absolute -top-3 -left-1.5 group-hover:border-orange-500"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex flex-col">
              <span className="text-sm group-hover:text-orange-500">002</span>
              <span className="font-semibold text-lg group-hover:text-orange-500">
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
              Rapid expansion drives focus on scaling operations and optimizing
              processes to manage complexity.
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
            <div className="w-[1px] h-64 bg-gray-700 group-hover:bg-orange-500 relative pointer-events-auto">
              <div className="w-3 h-3 rounded-full border border-gray-700 absolute -top-3 -left-1.5 group-hover:border-orange-500"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex flex-col">
              <span className="text-sm group-hover:text-orange-500">003</span>
              <span className="font-semibold text-lg group-hover:text-orange-500">
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
            <div className="w-[1px] h-96 bg-gray-700 group-hover:bg-orange-500 relative pointer-events-auto">
              <div className="w-3 h-3 rounded-full border border-gray-700 absolute -top-3 -left-1.5 group-hover:border-orange-500"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-10">
            <div className="flex flex-col">
              <span className="text-sm group-hover:text-orange-500">004</span>
              <span className="font-semibold text-lg group-hover:text-orange-500">
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
    </section>
  );
}
