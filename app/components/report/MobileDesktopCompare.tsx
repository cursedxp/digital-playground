"use client";

import { PageSpeedStrategy } from "@/app/types/report";
import ScoreRing from "./ScoreRing";

interface MobileDesktopCompareProps {
  mobile: PageSpeedStrategy | null;
  desktop: PageSpeedStrategy | null;
}

function StrategyColumn({
  data,
  icon,
  label,
}: {
  data: PageSpeedStrategy | null;
  icon: React.ReactNode;
  label: string;
}) {
  if (!data) {
    return (
      <div className="flex-1 rounded-xl border border-white/10 p-6 text-center">
        <div className="mb-3">{icon}</div>
        <p className="text-sm text-white">{label} — no data</p>
      </div>
    );
  }

  return (
    <div className="flex-1 rounded-xl border border-white/10 p-6">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <span className="text-sm font-semibold text-white">{label}</span>
      </div>
      <div className="flex justify-center gap-6 mb-6">
        <ScoreRing score={data.performance_score} label="Performance" size={90} strokeWidth={6} />
        <ScoreRing score={data.accessibility_score} label="Accessibility" size={90} strokeWidth={6} />
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-white">LCP</span>
          <span className="text-white font-medium">
            {data.lcp_ms !== null ? `${(data.lcp_ms / 1000).toFixed(1)}s` : "—"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-white">FCP</span>
          <span className="text-white font-medium">
            {data.fcp_ms !== null ? `${(data.fcp_ms / 1000).toFixed(1)}s` : "—"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MobileDesktopCompare({ mobile, desktop }: MobileDesktopCompareProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <StrategyColumn
        data={mobile}
        label="Mobile"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        }
      />
      <StrategyColumn
        data={desktop}
        label="Desktop"
        icon={
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        }
      />
    </div>
  );
}
