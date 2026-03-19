interface SpeedTimelineProps {
  fcpMs: number;
  lcpMs: number;
}

export default function SpeedTimeline({ fcpMs, lcpMs }: SpeedTimelineProps) {
  const maxMs = Math.max(lcpMs * 1.3, 5000);
  const width = 600;
  const height = 60;
  const trackY = 24;
  const trackHeight = 8;
  const padding = 20;
  const usable = width - padding * 2;

  const fcpX = padding + (fcpMs / maxMs) * usable;
  const lcpX = padding + (lcpMs / maxMs) * usable;
  const hex = "#FFE028";

  return (
    <div>
      <p className="text-sm text-white mb-3">Load Timeline</p>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img" aria-label="Speed timeline">
        {/* Track */}
        <rect
          x={padding}
          y={trackY}
          width={usable}
          height={trackHeight}
          rx={trackHeight / 2}
          fill="rgba(255,255,255,0.1)"
        />

        {/* FCP marker */}
        <line x1={fcpX} y1={trackY - 4} x2={fcpX} y2={trackY + trackHeight + 4} stroke={hex} strokeWidth="2" strokeLinecap="round" />
        <text x={fcpX} y={trackY - 8} textAnchor="middle" fill={hex} fontSize="10" fontFamily="inherit">
          FCP {(fcpMs / 1000).toFixed(1)}s
        </text>

        {/* LCP marker */}
        <line x1={lcpX} y1={trackY - 4} x2={lcpX} y2={trackY + trackHeight + 4} stroke={hex} strokeWidth="2" strokeLinecap="round" />
        <text x={lcpX} y={trackY + trackHeight + 16} textAnchor="middle" fill={hex} fontSize="10" fontFamily="inherit">
          LCP {(lcpMs / 1000).toFixed(1)}s
        </text>

        {/* 0 label */}
        <text x={padding} y={height - 2} fill="white" fontSize="9" fontFamily="inherit">
          0s
        </text>
        {/* Max label */}
        <text x={width - padding} y={height - 2} textAnchor="end" fill="white" fontSize="9" fontFamily="inherit">
          {(maxMs / 1000).toFixed(1)}s
        </text>
      </svg>
    </div>
  );
}
