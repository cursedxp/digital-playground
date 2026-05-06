import Link from 'next/link';

/**
 * Header component with back button
 * Fixed at the top of the page
 */
export function CaseStudyHeader() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
      >
        <span>←</span>
        <span>Back to projects</span>
      </Link>
    </div>
  );
}
