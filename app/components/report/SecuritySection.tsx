import { ObservatoryData, SSLInfo } from "@/app/types/report";

interface SecuritySectionProps {
  observatory: ObservatoryData | null;
  ssl: SSLInfo | null;
}

const GRADE_INFO: Record<string, { label: string; description: string }> = {
  "A+": { label: "Excellent", description: "All major security headers are correctly configured. Your site follows best practices and gives browsers strong instructions for how to handle your content safely." },
  "A":  { label: "Excellent", description: "All major security headers are correctly configured. Your site follows best practices and gives browsers strong instructions for how to handle your content safely." },
  "B":  { label: "Good", description: "Most security headers are in place. A few non-critical protections are missing, but your site is well protected against common attacks." },
  "C":  { label: "Average", description: "Some important security headers are missing. Browsers can't fully enforce protections against cross-site scripting or clickjacking. Worth addressing if your site handles any user data." },
  "D":  { label: "Below average", description: "Several key security headers are absent. Your site is more vulnerable to common web attacks. Adding a Content-Security-Policy and HSTS header would have the biggest impact." },
  "F":  { label: "Poor", description: "Most security headers are missing. Browsers receive no special instructions on how to protect your visitors. This is the default state for most sites that haven't configured headers deliberately." },
};

function CheckItem({ pass, label }: { pass: boolean; label: string }) {
  return (
    <div className="flex items-start gap-2 py-2 border-b border-white/10 last:border-0">
      <span className={pass ? "text-[#FFE028] shrink-0" : "text-white/30 shrink-0"}>
        {pass ? "✓" : "✗"}
      </span>
      <span className="text-sm text-white leading-snug">{label}</span>
    </div>
  );
}

export default function SecuritySection({ observatory, ssl }: SecuritySectionProps) {
  return (
    <div className="space-y-10">

      {observatory && (() => {
        const gradeKey = observatory.grade.replace(/[^A-F+]/g, "") as string;
        const info = GRADE_INFO[observatory.grade] ?? GRADE_INFO[gradeKey] ?? GRADE_INFO["F"];
        return (
          <div>
            <p className="text-sm text-white mb-6 uppercase tracking-wide">Mozilla Observatory</p>
            <div className="flex items-start gap-6 mb-4">
              <div className="text-center shrink-0">
                <p className="text-6xl font-bold" style={{ color: "#FFE028" }}>{observatory.grade}</p>
                <p className="text-xs text-white mt-1">{info.label}</p>
              </div>

              <div className="w-px self-stretch bg-white/10 shrink-0" />

              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-white"><span style={{ color: "#FFE028" }}>{observatory.score}</span>/145</p>
                  <p className="text-xs text-white mt-1">score</p>
                  <p className="text-xs text-white mt-2 leading-relaxed">Points earned out of 145. Each security header you implement adds points.</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white"><span style={{ color: "#FFE028" }}>{observatory.tests_passed}</span>/{observatory.tests_quantity}</p>
                  <p className="text-xs text-white mt-1">tests passed</p>
                  <p className="text-xs text-white mt-2 leading-relaxed">Individual checks for HSTS, Content-Security-Policy, X-Frame-Options, and more. Each fail is a missing protection.</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-white leading-relaxed mb-4">{info.description}</p>
            <div className="flex gap-4 flex-wrap mt-4">
              {(["A+", "A", "B", "C", "D", "F"] as const).map((g) => (
                <span
                  key={g}
                  className="text-xs font-medium"
                  style={{ color: observatory.grade === g ? "#FFE028" : "rgba(255,255,255,0.3)" }}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        );
      })()}

      {ssl && (
        <div>
          <p className="text-sm text-white mb-4 uppercase tracking-wide">SSL Certificate</p>
          <div className="space-y-0">
            <CheckItem pass={ssl.valid} label={ssl.valid ? "Certificate is valid and trusted" : "Certificate is invalid or untrusted"} />
            {ssl.issuer && (
              <CheckItem pass={true} label={`Issued by ${ssl.issuer}`} />
            )}
            {ssl.days_until_expiry !== undefined && (
              <CheckItem
                pass={ssl.days_until_expiry > 30}
                label={
                  ssl.days_until_expiry > 30
                    ? `Expires in ${ssl.days_until_expiry} days${ssl.expires ? ` (${ssl.expires})` : ""}`
                    : `Expiring soon — ${ssl.days_until_expiry} days left${ssl.expires ? ` (${ssl.expires})` : ""}`
                }
              />
            )}
            {ssl.error && (
              <p className="text-xs text-white mt-2">{ssl.error}</p>
            )}
          </div>
          <p className="text-xs text-white mt-4 leading-relaxed">
            A valid SSL certificate encrypts data between your visitors and your server, and is required for Google ranking.
          </p>
        </div>
      )}

      {!observatory && !ssl && (
        <p className="text-sm text-white">No security data available.</p>
      )}

    </div>
  );
}
