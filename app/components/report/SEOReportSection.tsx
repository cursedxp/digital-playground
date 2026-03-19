"use client";

import { motion } from "framer-motion";
import { SEOData } from "@/app/types/report";
import SEOSection from "./SEOSection";
import OGPreview from "./OGPreview";

interface SEOReportSectionProps {
  seo: SEOData;
  title: string;
  description: string;
  url: string;
}

function buildSEOSummary(seo: SEOData, title: string, description: string): string {
  const issues: string[] = [];
  const wins: string[] = [];

  if (seo.h1_count === 1) wins.push("a clear H1 heading");
  else if (seo.h1_count === 0) issues.push("no H1 heading");
  else issues.push("multiple H1 headings");

  if (title.length >= 50 && title.length <= 60) wins.push("a well-sized title tag");
  else if (title.length > 60) issues.push("a title tag that's too long and will be cut off in search results");
  else if (title.length < 30) issues.push("a title tag that's too short");

  if (description.length >= 150 && description.length <= 160) wins.push("a good meta description");
  else if (description.length > 160) issues.push("a meta description that exceeds the 160-character limit");
  else if (description.length < 70) issues.push("a meta description that's too short to be effective");

  if (seo.has_structured_data) wins.push("structured data markup");
  else issues.push("no structured data");

  if (seo.og_title && seo.og_image) wins.push("social sharing tags");
  else if (!seo.og_title || !seo.og_image) issues.push("incomplete social sharing tags");

  if (seo.images_missing_alt > 0) issues.push(`${seo.images_missing_alt} image${seo.images_missing_alt > 1 ? "s" : ""} without alt text`);

  if (issues.length === 0) {
    return `Your SEO fundamentals are solid. ${wins.length > 0 ? `You have ${wins.join(", ")} — all the signals Google and social platforms need to correctly index and display your page.` : ""} Keep the quality consistent as you add new pages.`;
  }

  if (issues.length <= 2) {
    return `Your SEO is mostly in good shape. The main things to address are ${issues.join(" and ")}. Fixing these would improve how your page appears in search results and when shared on social media.`;
  }

  return `There are several SEO gaps worth addressing: ${issues.join(", ")}. These don't affect how your site looks to visitors, but they do affect how Google indexes it and how it appears when someone shares your link.`;
}

export default function SEOReportSection({ seo, title, description, url }: SEOReportSectionProps) {
  const summary = buildSEOSummary(seo, title, description);

  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 px-8 sm:px-0">
        <div className="col-span-1">
              <motion.h2
                className="text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                SEO
                <br />
                Overview
              </motion.h2>
        </div>

        <div className="col-span-2">
            <p className="text-white text-xl leading-relaxed max-w-md mb-8 ml-auto">
              How your site appears to search engines and social platforms.
            </p>
            <SEOSection seo={seo} title={title} description={description} />
            {(seo.og_title || seo.og_image) && (
              <div className="mt-8">
                <p className="text-sm text-white mb-3">How your link looks when shared</p>
                <OGPreview
                  ogTitle={seo.og_title}
                  ogDescription={seo.og_description}
                  ogImage={seo.og_image}
                  url={url}
                />
              </div>
            )}
            <p className="text-white text-base leading-relaxed border-t border-white/10 pt-6 mt-8">
              {summary}
            </p>
        </div>
      </div>
    </section>
  );
}
