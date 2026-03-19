"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnalysisData } from "@/app/types/report";
import TechBadge from "./TechBadge";

const EXPECTED_SOCIALS = ["Instagram", "Facebook", "Twitter/X", "LinkedIn", "YouTube", "TikTok"];

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-white/20 pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 group cursor-pointer"
      >
        <span className="text-xl md:text-2xl font-semibold transition-colors group-hover:opacity-80">
          {title}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-light shrink-0 -mt-1"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="text-white text-lg leading-relaxed mt-4 pr-8">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface DetailsSectionProps {
  analysis: AnalysisData;
}

export default function DetailsSection({ analysis }: DetailsSectionProps) {
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
                Details
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                Detailed findings from our analysis of your website.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {analysis.technologies.length > 0 && (
              <Section title="Technology Stack" defaultOpen>
                <div className="flex flex-wrap gap-2">
                  {analysis.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </Section>
            )}

            <Section title="Contact & Communication" defaultOpen>
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
            </Section>

            {analysis.freshness && (
              <Section title="Content Freshness">
                <div className="space-y-2">
                  {analysis.freshness.copyright_year && (
                    <p>Copyright year: <span className="font-semibold text-white">{analysis.freshness.copyright_year}</span></p>
                  )}
                  {analysis.freshness.freshness_signals.map((signal, i) => (
                    <p key={i}>{signal}</p>
                  ))}
                </div>
              </Section>
            )}

            <Section title="Social Media">
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
            </Section>

            {analysis.saas_details && (
              <Section title="SaaS Details">
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
              </Section>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
