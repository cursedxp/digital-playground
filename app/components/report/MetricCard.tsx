"use client";

import { ScoreColor, COLOR_BG_MAP, COLOR_TEXT_MAP } from "@/app/lib/scoring";

interface MetricCardProps {
  label: string;
  value: string;
  color: ScoreColor;
  sublabel?: string;
}

export default function MetricCard({ label, value, color, sublabel }: MetricCardProps) {
  return (
    <div className={`rounded-xl p-4 ${COLOR_BG_MAP[color]}`}>
      <p className="text-sm text-gray-600 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${COLOR_TEXT_MAP[color]}`}>{value}</p>
      {sublabel && <p className="text-xs text-gray-500 mt-1">{sublabel}</p>}
    </div>
  );
}
