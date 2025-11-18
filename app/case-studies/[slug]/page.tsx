import { getCaseStudy, getCaseStudySlugs } from "../utils/caseStudyHelpers";
import { CaseStudyHeader } from "../components/CaseStudyHeader";
import { CaseStudySidebar } from "../components/CaseStudySidebar";
import { TwoColumnSection } from "../components/TwoColumnSection";
import { ContentSection } from "../components/ContentSection";
import {
  challengeSolutionComponents,
  resultsComponents,
} from "../components/markdown/markdownComponents";
import CTA from "@/app/components/CTA";

export async function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { frontmatter, sections } = await getCaseStudy(slug);

  return (
    <div className="min-h-screen bg-black text-white">
      <CaseStudyHeader />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <CaseStudySidebar frontmatter={frontmatter} />

          {/* Right Content */}
          <div className="lg:col-span-9 px-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-6xl font-bold mb-12 text-white leading-tight">
              {frontmatter.title}
            </h1>

            <TwoColumnSection
              leftContent={sections.challengeSection}
              rightContent={sections.solutionSection}
              components={challengeSolutionComponents}
            />

            <TwoColumnSection
              leftContent={sections.resultsSection}
              components={resultsComponents}
            />

            <ContentSection content={sections.restContent} />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}
