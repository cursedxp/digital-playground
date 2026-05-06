import { CaseStudyFrontmatter } from "../utils/caseStudyHelpers";

interface CaseStudySidebarProps {
  frontmatter: CaseStudyFrontmatter;
}

/**
 * Sidebar component displaying case study metadata
 * Sticky on large screens, shows: About, Industry, Year, Tech Stack, Key Result
 */
export function CaseStudySidebar({ frontmatter }: CaseStudySidebarProps) {
  return (
    <div className="hidden lg:block lg:col-span-3">
      <div className="lg:sticky lg:top-24">
        {/* About */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3 text-white">About</h3>
          <p className="text-sm text-white leading-relaxed">
            {frontmatter.summary}
          </p>
        </div>

        {/* Industry */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 text-white">Industry</h3>
          <p className="text-sm text-white">{frontmatter.industry}</p>
        </div>

        {/* Year */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 text-white">Year</h3>
          <p className="text-sm text-white">{frontmatter.year}</p>
        </div>

        {/* Tech Stack */}
        {frontmatter.techStack && frontmatter.techStack.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2 text-white">
              Tech Stack
            </h3>
            <div className="flex flex-col gap-2">
              {frontmatter.techStack.map((tech: string) => (
                <span key={tech} className="text-sm text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Result */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 text-white">Key Result</h3>
          <p className="text-sm font-medium" style={{ color: "#FFE028" }}>
            {frontmatter.result}
          </p>
        </div>

        {/* Built with */}
        {frontmatter.partnerName && frontmatter.partnerUrl && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-2 text-white">Built with</h3>
            <a
              href={frontmatter.partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {frontmatter.partnerName}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
