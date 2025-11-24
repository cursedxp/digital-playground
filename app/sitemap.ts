import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

// Get case study slugs from content directory
function getCaseStudySlugs(): string[] {
  const caseStudiesDirectory = path.join(
    process.cwd(),
    "content",
    "case-studies"
  );
  const fileNames = fs.readdirSync(caseStudiesDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.optimotion.dev";

  // Get dynamic case study slugs
  const caseStudySlugs = getCaseStudySlugs();

  const caseStudies = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...caseStudies,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
