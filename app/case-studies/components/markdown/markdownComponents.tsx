import { Components } from "react-markdown";

/**
 * Shared markdown component configuration for Challenge/Solution sections
 * These sections use a compact, 2-column layout style
 */
export const challengeSolutionComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-xl font-bold text-white mb-4">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="text-white text-base leading-relaxed mb-4">{children}</p>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#FFE028] pl-6 italic text-white/60 my-6 text-base">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
};

/**
 * Markdown component configuration for Results section
 * Special handling for grid layout of bullet points
 */
export const resultsComponents: Components = {
  h2: ({ children }) => (
    <h2 className="col-span-full text-4xl font-bold text-white mb-6">
      {children}
    </h2>
  ),
  p: ({ children }) => (
    <p className="text-white text-base leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li className="text-white leading-relaxed [&::marker]:content-none">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold block mb-2">{children}</strong>
  ),
  hr: () => null,
};

/**
 * Full markdown component configuration for general content sections
 * Includes all formatting options: headings, lists, code blocks, etc.
 */
export const contentComponents: Components = {
  h2: ({ children }) => (
    <h2 className="text-4xl font-bold text-white mt-16 mb-6 first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-white mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-white text-base leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="text-white text-base leading-relaxed mb-4 list-disc ml-5 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-white text-base leading-relaxed mb-4 list-decimal ml-5 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-white leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-[#FFE028] pl-6 italic text-white/60 my-6 text-base">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-[#FFE028] hover:opacity-80 transition-opacity"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="bg-white/10 text-[#FFE028] px-2 py-1 rounded text-xs">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-white/5 border border-white/10 rounded-lg p-6 overflow-x-auto my-6">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-white/10 my-12" />,
};
