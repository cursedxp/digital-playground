export type ScoreColor = "good" | "warn" | "poor";

export function scoreColor(score: number | null, thresholds?: { good: number; poor: number }): ScoreColor {
  if (score === null) return "poor";
  const t = thresholds ?? { good: 90, poor: 50 };
  if (score >= t.good) return "good";
  if (score >= t.poor) return "warn";
  return "poor";
}

// Google's Core Web Vitals thresholds
export function lcpColor(ms: number | null): ScoreColor {
  if (ms === null) return "poor";
  if (ms <= 2500) return "good";
  if (ms <= 4000) return "warn";
  return "poor";
}

export function fidColor(ms: number | null): ScoreColor {
  if (ms === null) return "poor";
  if (ms <= 100) return "good";
  if (ms <= 300) return "warn";
  return "poor";
}

export function clsColor(val: number | null): ScoreColor {
  if (val === null) return "poor";
  if (val <= 0.1) return "good";
  if (val <= 0.25) return "warn";
  return "poor";
}

export function fcpColor(ms: number | null): ScoreColor {
  if (ms === null) return "poor";
  if (ms <= 1800) return "good";
  if (ms <= 3000) return "warn";
  return "poor";
}

export const COLOR_MAP: Record<ScoreColor, string> = {
  good: "#22C55E",
  warn: "#F59E0B",
  poor: "#EF4444",
};

export const COLOR_BG_MAP: Record<ScoreColor, string> = {
  good: "bg-green-50",
  warn: "bg-amber-50",
  poor: "bg-red-50",
};

export const COLOR_TEXT_MAP: Record<ScoreColor, string> = {
  good: "text-green-600",
  warn: "text-amber-600",
  poor: "text-red-600",
};
