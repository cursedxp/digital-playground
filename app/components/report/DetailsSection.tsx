"use client";

import { motion } from "framer-motion";
import { AnalysisData } from "@/app/types/report";
import TechBadge from "./TechBadge";
import AccordionSection from "./AccordionSection";

const EXPECTED_SOCIALS = ["Instagram", "Facebook", "Twitter/X", "LinkedIn", "YouTube", "TikTok"];

interface DetailsSectionProps {
  analysis: AnalysisData;
}

export default function DetailsSection({ analysis }: DetailsSectionProps) {
  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 px-8 sm:px-0">
        <div className="col-span-2 space-y-4">
            {analysis.technologies.length > 0 && (
              <AccordionSection size="lg" title="Technology Stack" defaultOpen>
                <div className="flex flex-wrap gap-2">
                  {analysis.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </AccordionSection>
            )}

            <AccordionSection size="lg" title="Contact & Communication" defaultOpen>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Contact Form", checked: analysis.has_contact_form },
                  { label: "Email Address", checked: analysis.has_email },
                  { label: "Phone Number", checked: analysis.has_phone },
                  { label: "Live Chat", checked: analysis.has_live_chat },
                ].map(({ label, checked }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span style={{ color: checked ? "#FFE028" : undefined }} className={checked ? "" : "text-white/30"}>
                      {checked ? "✓" : "✗"}
                    </span>
                    <span className={checked ? "text-white" : "text-white/30"}>{label}</span>
                  </div>
                ))}
              </div>
            </AccordionSection>

            {analysis.freshness && (
              <AccordionSection size="lg" title="Content Freshness">
                <div className="space-y-2">
                  {analysis.freshness.copyright_year && (
                    <p>Copyright year: <span className="font-semibold text-white">{analysis.freshness.copyright_year}</span></p>
                  )}
                  {analysis.freshness.freshness_signals.map((signal, i) => (
                    <p key={i}>{signal}</p>
                  ))}
                </div>
              </AccordionSection>
            )}

            <AccordionSection size="lg" title="Social Media">
              <div className="flex flex-wrap gap-2">
                {Object.entries(analysis.social_media).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <span style={{ color: "#FFE028" }}>✓</span>
                    {platform}
                  </a>
                ))}
                {EXPECTED_SOCIALS.filter(s => !Object.keys(analysis.social_media).includes(s)).map(platform => (
                  <span key={platform} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/5 text-white/30">
                    ✗ {platform}
                  </span>
                ))}
              </div>
            </AccordionSection>

            {analysis.saas_details && (
              <AccordionSection size="lg" title="SaaS Details">
                <div className="space-y-3">
                  {analysis.saas_details.team_members_detected != null && (
                    <p>Team members: <span className="font-semibold text-white">{analysis.saas_details.team_members_detected}</span></p>
                  )}
                  {[
                    { label: "Pricing page", checked: analysis.saas_details.has_pricing_page },
                    { label: "Integrations page", checked: analysis.saas_details.has_integrations_page },
                    { label: "Careers page", checked: analysis.saas_details.has_careers_page },
                  ].map(({ label, checked }) => (
                    <div key={label} className="flex items-center gap-2">
                      <span style={{ color: checked ? "#FFE028" : undefined }} className={checked ? "" : "text-white/30"}>
                        {checked ? "✓" : "✗"}
                      </span>
                      <span className={checked ? "text-white" : "text-white/30"}>{label}</span>
                    </div>
                  ))}
                  {analysis.saas_details.integrations_mentioned.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {analysis.saas_details.integrations_mentioned.map(i => (
                        <TechBadge key={i} name={i} />
                      ))}
                    </div>
                  )}
                </div>
              </AccordionSection>
            )}
        </div>
        <div className="col-span-1 flex flex-col items-end">
          <motion.h2
            className="text-7xl font-bold text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Details
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
