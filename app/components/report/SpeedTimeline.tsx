interface SpeedTimelineProps {
  fcpMs: number;
  lcpMs: number;
}

export default function SpeedTimeline({ fcpMs, lcpMs }: SpeedTimelineProps) {
  const gapMs = lcpMs - fcpMs;

  return (
    <div className="w-full">
      <p className="text-sm text-white uppercase tracking-widest mb-6">Load Timeline</p>
      <div className="flex items-center gap-6">

        <div className="flex flex-col">
          <span className="text-xs text-white uppercase tracking-widest mb-1">First Content</span>
          <span className="text-5xl font-bold" style={{ color: "#FFE028" }}>
            {(fcpMs / 1000).toFixed(1)}<span className="text-2xl font-normal text-white">s</span>
          </span>
          <span className="text-xs text-white mt-1">FCP</span>
          <span className="text-xs text-white mt-2 max-w-[140px] leading-relaxed">Time until the first pixel of content appears on screen</span>
        </div>

        <div className="flex flex-col items-center gap-1 text-white">
          <span className="text-xs text-white">+{(gapMs / 1000).toFixed(1)}s</span>
          <span className="text-2xl">→</span>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-white uppercase tracking-widest mb-1">Main Content</span>
          <span className="text-5xl font-bold" style={{ color: "#FFE028" }}>
            {(lcpMs / 1000).toFixed(1)}<span className="text-2xl font-normal text-white">s</span>
          </span>
          <span className="text-xs text-white mt-1">LCP</span>
          <span className="text-xs text-white mt-2 max-w-[140px] leading-relaxed">Time until the main content (image or text block) is visible</span>
        </div>

      </div>
    </div>
  );
}
