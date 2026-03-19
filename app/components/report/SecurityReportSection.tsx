"use client";

import { motion } from "framer-motion";
import { ObservatoryData, SSLInfo } from "@/app/types/report";
import SecuritySection from "./SecuritySection";

interface SecurityReportSectionProps {
  observatory: ObservatoryData | null;
  ssl: SSLInfo | null;
}

function buildSecuritySummary(observatory: ObservatoryData | null, ssl: SSLInfo | null): string {
  const sslOk = ssl?.valid === true;
  const sslExpiring = ssl?.days_until_expiry !== undefined && ssl.days_until_expiry <= 30;
  const grade = observatory?.grade ?? null;

  if (!observatory && ssl) {
    if (sslOk && !sslExpiring) return "Your SSL certificate is valid and your connection is encrypted. No HTTP header data was available for this scan — run a Mozilla Observatory check directly for a full header audit.";
    if (!sslOk) return "Your SSL certificate has an issue. Visitors will see a browser warning before reaching your site, which causes most people to leave immediately. This should be fixed as a priority.";
  }

  if (!grade) return "";

  const top = ["A+", "A"];
  const mid = ["B"];
  const low = ["C"];
  const poor = ["D", "F"];

  if (top.includes(grade)) {
    return `Your security configuration is in excellent shape${sslOk ? " and your SSL certificate is valid" : ""}. You've implemented the headers that give browsers strong instructions on how to protect your visitors.`;
  }
  if (mid.includes(grade)) {
    return `Your site has solid security fundamentals${sslOk ? " and a valid SSL certificate" : ""}. A few headers are missing that would prevent certain types of attacks, but you're ahead of most sites. Adding a Content-Security-Policy is the most impactful next step.`;
  }
  if (low.includes(grade)) {
    return `Your site has a grade of C — some important security headers are missing. ${sslOk ? "Your SSL certificate is valid, which is the most important baseline. " : "Your SSL certificate also has an issue, which should be the first priority. "}Browsers can't fully protect your visitors from cross-site scripting or clickjacking without these headers. This matters most if your site has login pages or handles any user data.`;
  }
  if (poor.includes(grade)) {
    return `Your site scored ${grade} — most HTTP security headers are absent. ${sslOk ? "Your SSL certificate is valid, so data in transit is encrypted, but " : "Your SSL certificate also has issues, and "}browsers receive no special instructions on how to protect your visitors. Adding HSTS, X-Frame-Options, and a Content-Security-Policy header would have the biggest immediate impact.`;
  }

  return "";
}

export default function SecurityReportSection({ observatory, ssl }: SecurityReportSectionProps) {
  const summary = buildSecuritySummary(observatory, ssl);

  return (
    <section className="bg-black text-white px-6 mb-20 sm:mb-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <motion.h2
                className="text-5xl sm:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Security
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                SSL certificate, security headers, and browser protection policies.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <SecuritySection observatory={observatory} ssl={ssl} />
            {summary && (
              <p className="text-white text-base leading-relaxed border-t border-white/10 pt-6 mt-8">
                {summary}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
