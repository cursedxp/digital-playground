import { ObservatoryData, SSLInfo } from "@/app/types/report";

interface SecuritySectionProps {
  observatory: ObservatoryData | null;
  ssl: SSLInfo | null;
}

function gradeColor(grade: string): string {
  if (grade.startsWith("A")) return "text-green-400 border-green-400/30 bg-green-400/10";
  if (grade.startsWith("B")) return "text-green-400 border-green-400/30 bg-green-400/10";
  if (grade.startsWith("C")) return "text-amber-400 border-amber-400/30 bg-amber-400/10";
  return "text-red-400 border-red-400/30 bg-red-400/10";
}

export default function SecuritySection({ observatory, ssl }: SecuritySectionProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">Security &amp; Headers</h2>

      {observatory && (
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <span
              className={`inline-flex items-center justify-center w-16 h-16 rounded-xl border text-2xl font-bold ${gradeColor(observatory.grade)}`}
            >
              {observatory.grade}
            </span>
            <div>
              <p className="text-sm text-white/50">Mozilla Observatory</p>
              <p className="text-white font-medium">{observatory.score}/145</p>
              <p className="text-xs text-white/50 mt-0.5">
                {observatory.tests_passed}/{observatory.tests_quantity} tests passed
              </p>
            </div>
          </div>
        </div>
      )}

      {ssl && (
        <div className="rounded-xl border border-white/10 p-4 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className={ssl.valid ? "text-[#FFE028]" : "text-red-400"}>
              {ssl.valid ? "✓" : "✗"}
            </span>
            <span className="text-white/70">
              SSL Certificate — {ssl.valid ? "valid" : "invalid"}
            </span>
          </div>

          {ssl.issuer && (
            <div className="flex items-start gap-2">
              <span className="text-[#FFE028]">✓</span>
              <span className="text-white/70">Issuer — {ssl.issuer}</span>
            </div>
          )}

          {ssl.days_until_expiry !== undefined && (
            <div className="flex items-start gap-2">
              <span className={ssl.days_until_expiry > 30 ? "text-[#FFE028]" : "text-amber-400"}>
                {ssl.days_until_expiry > 30 ? "✓" : "⚠"}
              </span>
              <span className="text-white/70">
                Expires in {ssl.days_until_expiry} days
                {ssl.expires && ` (${ssl.expires})`}
              </span>
            </div>
          )}

          {ssl.error && (
            <p className="text-red-400 text-xs mt-1">{ssl.error}</p>
          )}
        </div>
      )}

      {!observatory && !ssl && (
        <p className="text-sm text-white/50">No security data available.</p>
      )}
    </div>
  );
}
