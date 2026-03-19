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

export default function SEOReportSection({ seo, title, description, url }: SEOReportSectionProps) {
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
                SEO
                <br />
                Overview
              </motion.h2>
              <p className="text-white text-lg leading-relaxed mt-6">
                How your site appears to search engines and social platforms.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
