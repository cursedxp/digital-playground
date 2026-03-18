# Architecture

**Analysis Date:** 2026-03-18

## Pattern Overview

**Overall:** Next.js 16 Server-Side Rendering (SSR) with Static Generation

**Key Characteristics:**
- Server-side rendering and static site generation (ISR)
- Marketing website with content management via external CMS (NocoDB) and local markdown
- Component-driven UI with Tailwind CSS
- Multi-page site with marketing pages, blog, and case studies sections
- SEO-optimized with metadata, structured data, and canonical URLs

## Layers

**Presentation Layer:**
- Purpose: Render UI components and marketing pages
- Location: `app/components/`, `app/*/components/`
- Contains: React components (both server and client components), layout components, page components
- Depends on: React, Tailwind CSS, markdown rendering libraries
- Used by: Pages and other components

**Page/Route Layer:**
- Purpose: Define application routes and handle dynamic routing
- Location: `app/page.tsx`, `app/*/page.tsx`, `app/*/[slug]/page.tsx`
- Contains: Next.js page components, layout definitions, dynamic route handlers
- Depends on: Data utilities, presentation components
- Used by: Next.js router

**Data Access Layer:**
- Purpose: Fetch and transform content from external sources
- Location: `app/*/utils/` (blogHelpers.ts, caseStudyHelpers.ts)
- Contains: API client functions, data transformation logic, filesystem readers
- Depends on: External APIs (NocoDB), filesystem access, type definitions
- Used by: Page components, Server Components

**Styling Layer:**
- Purpose: Provide consistent visual design
- Location: `app/globals.css`, component inline Tailwind classes
- Contains: Global CSS variables, animations, Tailwind configuration
- Depends on: Tailwind CSS, PostCSS
- Used by: All components

## Data Flow

**Blog Content Flow (External CMS):**

1. Blog page (`app/blog/page.tsx`) calls `getAllBlogPosts()`
2. `blogHelpers.ts` fetches from NocoDB API with token authentication
3. Raw records transform via `recordToPost()` to `BlogPost` interface
4. Posts sorted by date, filtered by status=published
5. Rendered as list on blog index or single post on `[slug]/page.tsx`

**Case Study Content Flow (Local Markdown):**

1. Case study page (`app/case-studies/[slug]/page.tsx`) calls `getCaseStudy(slug)`
2. `caseStudyHelpers.ts` reads markdown from `content/case-studies/` using fs
3. `gray-matter` parses frontmatter (YAML) from markdown content
4. Content split into sections (Challenge, Solution, Results, Rest)
5. Sections rendered with specialized markdown components in TwoColumnSection layout

**Static Generation:**

- `generateStaticParams()` called at build time for blog and case study routes
- Blog slugs fetched from NocoDB API during build
- Case study slugs read from filesystem during build
- Pages pre-rendered to HTML at build time, ISR with 60-second revalidation

**State Management:**

- Minimal client-side state: Navigation menu open/close state (`Navigation.tsx`)
- Blog sidebar active heading tracked via IntersectionObserver (`BlogSidebar.tsx`)
- All data state managed at page component level, passed via props
- No global state management (Redux, Zustand, etc.)

## Key Abstractions

**BlogPost Interface:**
- Purpose: Represent blog content with metadata
- Location: `app/blog/utils/blogHelpers.ts`
- Fields: frontmatter (slug, title, summary, date, author, tags, readTime), content (markdown string)
- Pattern: Interface-based contracts between data layer and components

**CaseStudyData Interface:**
- Purpose: Represent case study with structured sections
- Location: `app/case-studies/utils/caseStudyHelpers.ts`
- Fields: frontmatter (slug, title, summary, industry, year, result, techStack), content, sections
- Pattern: Structured data with specialized parsing for multi-column layout

**Markdown Components Pattern:**
- Purpose: Customize React Markdown rendering per context
- Examples: `app/blog/components/BlogContent.tsx`, `app/case-studies/components/markdown/markdownComponents.tsx`
- Pattern: Pass custom `Components` object to ReactMarkdown to override h2, p, a, etc. with styled versions

**TwoColumnSection:**
- Purpose: Reusable layout for side-by-side or full-width content
- Location: `app/case-studies/components/TwoColumnSection.tsx`
- Pattern: Accepts leftContent, rightContent, markdown components - renders grid on desktop, stack on mobile

## Entry Points

**Home Page:**
- Location: `app/page.tsx`
- Triggers: User visits `/`
- Responsibilities: Orchestrates 12 marketing component sections (Hero, Services, Pricing, etc.)

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: Every page request
- Responsibilities: Applies global metadata, fonts, Navigation/Footer wrapping, Google Analytics

**Blog Index:**
- Location: `app/blog/page.tsx`
- Triggers: User visits `/blog`
- Responsibilities: Fetches all published posts, renders list with metadata

**Blog Post Detail:**
- Location: `app/blog/[slug]/page.tsx`
- Triggers: User visits `/blog/{slug}`
- Responsibilities: Generates static params at build time, renders single post with TOC sidebar

**Case Study Detail:**
- Location: `app/case-studies/[slug]/page.tsx`
- Triggers: User visits `/case-studies/{slug}`
- Responsibilities: Reads markdown, parses sections, renders in two-column layout

## Error Handling

**Strategy:** Minimal error handling with graceful defaults

**Patterns:**

- NocoDB fetch returns `[]` if request fails or API unavailable (`fetchNocoDB()`)
- Blog post not found returns `null`, page triggers `notFound()` showing 404
- Case study markdown parsing extracts sections safely with `.find()` returning empty string if not found
- Date parsing wrapped in try/catch, falls back to original string if invalid
- Markdown content renders as-is without validation

**Missing Error Handling:**
- No retry logic on failed API calls
- No error logging or monitoring
- No user-facing error messages for failed content loads
- Network timeouts not explicitly configured

## Cross-Cutting Concerns

**Logging:**
- None detected. No console.log statements in production code.

**Validation:**
- Type validation via TypeScript interfaces (BlogFrontmatter, CaseStudyFrontmatter)
- Frontend validation: None - relies on CMS data quality
- Build-time validation: None - missing markdown files would crash build

**Authentication:**
- NocoDB API authenticated via token in `blogHelpers.ts` (hardcoded - security risk)
- No user authentication - all content public
- No authorization checks - any route accessible by any user

**Performance:**
- Next.js Image component not used - inline SVG and HTML preferred
- Markdown parsing happens at build time (blog) and request time (case studies)
- Large components composed from smaller sections (e.g., `page.tsx` imports 12 components)
- No code splitting strategy detected beyond Next.js defaults

**SEO:**
- Metadata declared in `layout.tsx` (global) and page files (per-route)
- Structured data components: `OrganizationSchema`, `ServiceSchema` injected in `<head>`
- Canonical URLs set for all pages
- Open Graph and Twitter cards configured
- `robots.ts` and `sitemap.ts` for search engine guidance

---

*Architecture analysis: 2026-03-18*
