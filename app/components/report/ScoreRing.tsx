"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./AnimatedCounter";

interface ScoreRingProps {
  score: number | null;
  label: string;
  size?: number;
  strokeWidth?: number;
}

export default function ScoreRing({ score, label, size = 120, strokeWidth = 8 }: ScoreRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const value = score ?? 0;

  const barHeight = Math.max(4, strokeWidth - 2);
  const scoreSize = size >= 160 ? "text-4xl" : size >= 120 ? "text-2xl" : "text-xl";
  const maxWidth = size * 2.2;

  return (
    <div ref={ref} className="flex flex-col gap-2 w-full" style={{ maxWidth }}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm text-white uppercase tracking-wide">{label}</span>
        <span className={`${scoreSize} font-bold tabular-nums`} style={{ color: "#FFE028" }}>
          {isInView ? <AnimatedCounter target={value} /> : "0"}
        </span>
      </div>
      <div
        className="w-full rounded-full overflow-hidden"
        style={{ height: barHeight, background: "rgba(255,255,255,0.08)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, #B8960A 0%, #FFE028 60%, #FFF176 100%)" }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: `${value}%` } : { width: "0%" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  );
}
