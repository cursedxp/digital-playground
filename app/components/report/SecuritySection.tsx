import { ObservatoryData, SSLInfo } from "@/app/types/report";

interface SecuritySectionProps {
  observatory: ObservatoryData | null;
  ssl: SSLInfo | null;
}

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

      {observatory && (
        <div>
          <p className="text-sm text-white mb-6 uppercase tracking-wide">Mozilla Observatory</p>
          <div className="flex items-center gap-6 mb-4">
            <div className="text-center">
              <p className="text-6xl font-bold" style={{ color: "#FFE028" }}>{observatory.grade}</p>
              <p className="text-xs text-white mt-1">grade</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-white">
                <span className="font-semibold text-white">{observatory.score}</span>
                <span className="text-white">/145</span> score
              </p>
              <p className="text-sm text-white">
                <span className="font-semibold text-white">{observatory.tests_passed}</span>
                <span className="text-white">/{observatory.tests_quantity}</span> tests passed
              </p>
              <p className="text-xs text-white mt-2 leading-relaxed max-w-xs">
                Mozilla Observatory checks your HTTP security headers — Content-Security-Policy, HSTS, X-Frame-Options, and more.
              </p>
            </div>
          </div>
        </div>
      )}

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
