import { MarkdownRenderer } from './markdown/MarkdownRenderer';
import { Components } from 'react-markdown';

interface TwoColumnSectionProps {
  /**
   * Content for the left column (optional)
   * If provided without rightContent, this will span both columns
   */
  leftContent?: string;

  /**
   * Content for the right column (optional)
   */
  rightContent?: string;

  /**
   * Custom markdown components to use for rendering
   */
  components: Components;

  /**
   * Additional CSS classes for the container
   */
  className?: string;
}

/**
 * Reusable two-column section component
 *
 * Usage patterns:
 * 1. Two separate columns (e.g., Challenge | Solution):
 *    <TwoColumnSection leftContent="..." rightContent="..." components={...} />
 *
 * 2. Single content spanning both columns with internal grid (e.g., Results):
 *    <TwoColumnSection leftContent="..." components={...} />
 *
 * The component automatically:
 * - Renders side-by-side on medium+ screens, stacked on mobile
 * - Handles empty content gracefully
 * - Spans content across both columns when only leftContent is provided
 */
export function TwoColumnSection({
  leftContent,
  rightContent,
  components,
  className = ''
}: TwoColumnSectionProps) {
  // Don't render if no content is provided
  if (!leftContent && !rightContent) {
    return null;
  }

  const containerClasses = `grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16 ${className}`.trim();

  // Single column spanning both columns (e.g., Results section)
  if (leftContent && !rightContent) {
    return (
      <div className={containerClasses}>
        <MarkdownRenderer
          content={leftContent}
          components={components}
        />
      </div>
    );
  }

  // Two separate columns (e.g., Challenge and Solution)
  return (
    <div className={containerClasses}>
      {/* Left Column */}
      {leftContent && (
        <div>
          <MarkdownRenderer
            content={leftContent}
            components={components}
          />
        </div>
      )}

      {/* Right Column */}
      {rightContent && (
        <div>
          <MarkdownRenderer
            content={rightContent}
            components={components}
          />
        </div>
      )}
    </div>
  );
}
