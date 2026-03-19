interface BenchmarkBarProps {
  value: number;
  label: string;
  maxValue?: number;
}

export default function BenchmarkBar({ value, label, maxValue = 100 }: BenchmarkBarProps) {
  const clamped = Math.max(0, Math.min(value, maxValue));
  const percent = (clamped / maxValue) * 100;

  return (
    <div>
      <p className="text-sm text-white mb-2">{label}</p>
      <div className="relative h-6 rounded-full bg-white/10 overflow-hidden">
        {/* Zone gradient: red 0-49%, amber 50-89%, green 90-100% */}
        <div className="absolute inset-0 flex">
          <div className="h-full" style={{ width: "49%", background: "rgba(239,68,68,0.25)" }} />
          <div className="h-full" style={{ width: "40%", background: "rgba(245,158,11,0.25)" }} />
          <div className="h-full" style={{ width: "11%", background: "rgba(34,197,94,0.25)" }} />
        </div>
        {/* Marker */}
        <div
          className="absolute top-0 h-full w-1 rounded-full bg-[#FFE028] shadow-[0_0_6px_rgba(255,224,40,0.5)]"
          style={{ left: `calc(${percent}% - 2px)` }}
        />
      </div>
      <p className="text-xs text-white mt-1.5">
        Score: {value}/{maxValue}
      </p>
    </div>
  );
}
