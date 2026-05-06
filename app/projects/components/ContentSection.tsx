import { MarkdownRenderer } from "./markdown/MarkdownRenderer";
import { contentComponents } from "./markdown/markdownComponents";

interface ContentSectionProps {
  content: string;
}

/**
 * Single-column content section for general case study content
 * Supports full markdown formatting: headings, lists, code, links, etc.
 */
export function ContentSection({ content }: ContentSectionProps) {
  // Don't render if content is empty
  if (!content) {
    return null;
  }

  return (
    <article className="space-y-8">
      <MarkdownRenderer content={content} components={contentComponents} />
    </article>
  );
}
