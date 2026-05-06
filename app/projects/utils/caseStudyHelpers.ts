import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// TypeScript types for case study data
export interface CaseStudyFrontmatter {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  year: string;
  result: string;
  techStack?: string[];
  partnerName?: string;
  partnerUrl?: string;
}

export interface CaseStudySections {
  challengeSection: string;
  solutionSection: string;
  resultsSection: string;
  restContent: string;
}

export interface CaseStudyData {
  frontmatter: CaseStudyFrontmatter;
  content: string;
  sections: CaseStudySections;
}

/**
 * Get all case study slugs for static generation
 */
export function getCaseStudySlugs(): string[] {
  const caseStudiesDir = path.join(process.cwd(), 'content/case-studies');
  const filenames = fs.readdirSync(caseStudiesDir);

  return filenames.map(filename => filename.replace('.md', ''));
}

/**
 * Read and parse a case study markdown file
 */
export async function getCaseStudy(slug: string): Promise<CaseStudyData> {
  const filePath = path.join(process.cwd(), 'content/case-studies', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  const sections = parseCaseStudySections(content);

  return {
    frontmatter: data as CaseStudyFrontmatter,
    content,
    sections
  };
}

/**
 * Parse case study content into sections
 * Splits by ## headings and extracts Challenge, Solution, Results, and rest
 */
export function parseCaseStudySections(content: string): CaseStudySections {
  // Split content by ## headings
  const sections = content.split(/(?=^## )/m);

  // Find Challenge, Solution, and Results sections for 2-column layout
  const challengeSection = sections.find(s => s.trim().startsWith('## Challenge')) || '';
  const solutionSection = sections.find(s => s.trim().startsWith('## Solution')) || '';
  const resultsSection = sections.find(s => s.trim().startsWith('## Results')) || '';

  // Rest of content (all sections except Challenge, Solution, and Results)
  const restSections = sections.filter(s =>
    !s.trim().startsWith('## Challenge') &&
    !s.trim().startsWith('## Solution') &&
    !s.trim().startsWith('## Results') &&
    s.trim().startsWith('##')
  );
  const restContent = restSections.join('\n\n');

  return {
    challengeSection,
    solutionSection,
    resultsSection,
    restContent
  };
}
