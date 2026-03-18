# Coding Conventions

**Analysis Date:** 2026-03-18

## Naming Patterns

**Files:**
- Component files: PascalCase (e.g., `BlogContent.tsx`, `BookCallButton.tsx`)
- Utility files: camelCase (e.g., `blogHelpers.ts`, `caseStudyHelpers.ts`)
- Type definition files: camelCase with Types suffix if necessary (e.g., `types.ts`)
- Page routes: lowercase or [slug] for dynamic routes (e.g., `page.tsx`, `[slug]`)

**Functions:**
- Component functions (React): PascalCase, exported as default or named export
  - Example: `export default function Hero() { ... }`
  - Example: `export function BlogSidebar({ ... }: BlogSidebarProps) { ... }`
- Utility functions: camelCase
  - Example: `export async function getAllBlogPosts(): Promise<BlogPost[]> { ... }`
  - Example: `function recordToPost(record: Record<string, unknown>): BlogPost { ... }`
- Helper functions: camelCase, exported with `export` keyword
  - Example: `export function getCaseStudySlugs(): string[] { ... }`

**Variables:**
- Constants: camelCase (not UPPER_CASE)
  - Example: `const NOCODB_API = "..."`
  - Example: `const siteUrl = "https://www.optimotion.dev"`
- Local variables: camelCase
  - Example: `const [activeId, setActiveId] = useState<string>("")`
  - Example: `const tags = (record.Tags as string || "").split(",")`
- React props objects: camelCase
  - Example: `interface BookCallButtonProps { text?: string; className?: string; }`

**Types & Interfaces:**
- PascalCase
  - Example: `export interface BlogFrontmatter { ... }`
  - Example: `export interface CaseStudyData { ... }`
- Prop interfaces: PascalCase with "Props" suffix
  - Example: `interface BlogContentProps { content: string; }`
  - Example: `interface BlogSidebarProps { headings: { id: string; text: string }[]; ... }`

## Code Style

**Formatting:**
- Tool: ESLint (eslint-config-next with TypeScript support)
- No Prettier config found - project uses default Next.js ESLint rules
- Line length: No explicit limit enforced, code typically fits within 100-120 characters
- Indentation: 2 spaces (implicit from Next.js defaults)

**Linting:**
- Config: `eslint.config.mjs` (ESLint 9 flat config)
- Extends: `next/core-web-vitals` and `next/typescript`
- Ignores: `node_modules/**`, `.next/**`, `out/**`, `build/**`, `next-env.d.ts`
- No custom rules observed beyond Next.js defaults

**Quote Style:**
- Double quotes for JSX attributes and strings
- Example: `className="text-white"`, `href="https://..."`

## Import Organization

**Order:**
1. External dependencies (React, Next.js, third-party packages)
   - Example: `import type { Metadata } from "next"`
   - Example: `import { useState, useEffect } from "react"`
   - Example: `import ReactMarkdown from "react-markdown"`
2. Relative imports using path aliases
   - Example: `import MoleculeBackground from "@/app/components/MoleculeBackground"`
   - Example: `import Navigation from "./components/Navigation"`
3. Type imports at top (using `import type`)
   - Example: `import type { Metadata } from "next"`

**Path Aliases:**
- `@/*` maps to project root (defined in `tsconfig.json`)
- Used for component and utility imports
- Example: `import Hero from "@/app/components/Hero"`

## Component Patterns

**Functional Components:**
- Use arrow functions or function declarations
- Accept props as destructured object parameter with type annotation
- Example:
```typescript
interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose...">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
```

**Client Components:**
- Start with `"use client"` directive at top of file
- Example found in `BlogContent.tsx`, `BookCallButton.tsx`, `BlogSidebar.tsx`

**Server Components:**
- Default in Next.js app directory
- Use for data fetching and layout components
- Example: `app/layout.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`

## Error Handling

**Patterns:**
- Functions return typed values or null for missing data
  - Example: `export async function getBlogPost(slug: string): Promise<BlogPost | null> { ... }`
  - If not found: `if (records.length === 0) return null;`
- Array operations include null coalescing and fallback values
  - Example: `const tags = (record.Tags as string || "").split(",")`
  - Example: `(record.Author as string) || "Anil Ozsoy"`
- No try-catch blocks observed in utility functions; errors propagate
- Type casting with `as` keyword for record data transformation

## Styling

**CSS Framework:** Tailwind CSS (v4)

**Application:**
- Utility classes directly in JSX className attributes
- Example: `className="text-5xl sm:text-7xl font-bold text-white mb-6"`
- Responsive design using sm:, md:, lg: prefixes
- Example: `className="hidden lg:block lg:col-span-3"`

**Color Variables:**
- Hardcoded hex colors in code (e.g., `#FFE028`, `#FFE850`)
- CSS variables for fonts defined in root layout
- Example: `--font-geist-sans`, `--font-serif`, `--font-geist-mono`

**Inline Styles:**
- Used sparingly for dynamic or complex styling
- Example: `style={{ backgroundColor: "#FFE028" }}`
- Prefer className for static styles

## Comments

**When to Comment:**
- JSDoc/TypeDoc comments on exported functions and interfaces
- Example: `/** Get all case study slugs for static generation */`
- Inline comments for complex logic (rare)
- No verbose comments for self-documenting code

**JSDoc/TSDoc:**
- Block comments with `/**` on exported functions
- Example:
```typescript
/**
 * Read and parse a case study markdown file
 */
export async function getCaseStudy(slug: string): Promise<CaseStudyData> { ... }
```

**Commented Code:**
- Old/disabled code left as comments (observed in `Hero.tsx`: `{/* <BackgroundVideo /> */}`)
- Should be removed in production

## Function Design

**Size:**
- Utility functions range from 5-20 lines
- Components range from 20-50 lines
- No strict limits enforced

**Parameters:**
- Destructured from single object parameter in components
- Multiple parameters for utility functions when needed
- Optional props marked with `?`
- Example: `function fetchNocoDB(params: string = ""): Promise<Record<string, unknown>[]>`

**Return Values:**
- Type annotations required on all exported functions
- Example: `export async function getAllBlogPosts(): Promise<BlogPost[]>`
- Example: `export function getCaseStudySlugs(): string[]`

## Module Design

**Exports:**
- Named exports for utility functions
- Default exports for components
- Example: `export default function Hero() { ... }` (component)
- Example: `export async function getAllBlogPosts(): Promise<BlogPost[]>` (utility)
- Type exports for interfaces: `export interface BlogFrontmatter { ... }`

**Barrel Files:**
- Not observed in codebase; direct imports used
- Could be useful for organizing related exports in future

## Type System

**TypeScript Strict Mode:** Enabled (`strict: true` in tsconfig.json)

**Patterns:**
- Interface over type for object shapes
- Generics used for flexible data structures
  - Example: `Record<string, unknown>` for flexible object keys/values
- Type assertions with `as` keyword when transforming data
  - Example: `(record.Tags as string || "")`
  - Example: `data as CaseStudyFrontmatter`
- Optional properties with `?`
  - Example: `tags?: string[]`, `readTime?: string`
- Union types for null possibilities
  - Example: `Promise<BlogPost | null>`

**Generics:**
- Used minimally; concrete types preferred
- Example: `Record<string, unknown>[]` for API responses

---

*Convention analysis: 2026-03-18*
