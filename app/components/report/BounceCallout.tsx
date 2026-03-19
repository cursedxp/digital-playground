interface BounceCalloutProps {
  lcpMs: number;
}

export default function BounceCallout({ lcpMs }: BounceCalloutProps) {
  const seconds = lcpMs / 1000;

  // Google's published bounce rate increase data
  let bouncePercent: number;
  let borderColor: string;

  if (seconds <= 3) {
    bouncePercent = 32;
    borderColor = "#F59E0B"; // amber
  } else if (seconds <= 5) {
    bouncePercent = 90;
    borderColor = "#EF4444"; // red
  } else if (seconds <= 6) {
    bouncePercent = 106;
    borderColor = "#EF4444";
  } else {
    bouncePercent = 123;
    borderColor = "#EF4444";
  }

  return (
    <p className="text-sm text-white/80 leading-relaxed">
      Your page takes <span className="font-semibold" style={{ color: "#FFE028" }}>{seconds.toFixed(1)}s</span> to
      load. Google research shows this causes{" "}
      <span className="font-semibold" style={{ color: "#FFE028" }}>~{bouncePercent}%</span> of mobile visitors to bounce.
    </p>
  );
}
