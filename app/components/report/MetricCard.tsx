"use client";

import { ScoreColor, COLOR_MAP } from "@/app/lib/scoring";

interface MetricCardProps {
  label: string;
  value: string;
  color: ScoreColor;
  sublabel?: string;
}

export default function MetricCard({ label, value, color, sublabel }: MetricCardProps) {
  return (
    <div className="rounded-xl p-4 border border-white/10">
      <p className="text-sm text-white/50 mb-1">{label}</p>
      <p className="text-2xl font-bold" style={{ color: COLOR_MAP[color] }}>{value}</p>
      {sublabel && <p className="text-xs text-white/50 mt-1">{sublabel}</p>}
    </div>
  );
}
