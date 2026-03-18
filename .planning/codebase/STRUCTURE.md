# Codebase Structure

**Analysis Date:** 2026-03-18

## Directory Layout

```
digital-playground/
├── app/                        # Next.js app directory (main application code)
├── public/                     # Static assets (images, videos, logos)
├── content/                    # Markdown content for case studies
├── node_modules/               # Dependencies
├── .next/                      # Build output (generated)
├── .planning/                  # GSD planning documents
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── eslint.config.mjs           # ESLint rules
├── postcss.config.mjs          # PostCSS configuration
└── README.md                   # Project documentation
```

## Directory Purposes

**`app/`**
- Purpose: Next.js App Router directory containing all application pages, layouts, and components
- Contains: Page components, layout wrappers, routes, API logic
- Key files: Root `layout.tsx`, `page.tsx`, dynamic route handlers

**`app/components/`**
- Purpose: Reusable React components used across pages
- Contains: UI components like Hero, Pricing, Navigation, Footer, Blog sidebar, case study components
- Key files: 27 component files including Hero.tsx, Navigation.tsx, Pricing.tsx, Footer.tsx, ComplencyCurve.tsx

**`app/blog/`**
- Purpose: Blog section - fetches posts from NocoDB and displays them
- Contains: Blog listing page, individual blog post pages, blog utilities, blog-specific components
- Key files:
  - `page.tsx`: Blog listing page with all published posts
  - `[slug]/page.tsx`: Individual blog post page
  - `utils/blogHelpers.ts`: NocoDB API integration for fetching blog posts
  - `components/`: BlogSidebar.tsx, BlogContent.tsx for blog-specific UI

**`app/case-studies/`**
- Purpose: Case studies section - displays showcase projects with markdown content
- Contains: Case study page routes, markdown components, utilities for parsing case study files
- Key files:
  - `[slug]/page.tsx`: Individual case study page
  - `utils/caseStudyHelpers.ts`: File system-based case study parsing with gray-matter
  - `components/`: CaseStudyHeader.tsx, CaseStudySidebar.tsx, MarkdownRenderer.tsx for rendering markdown

**`app/pricing/`**
- Purpose: Pricing page route
- Contains: Layout and page components for pricing tier display

**`app/privacy/`**
- Purpose: Privacy policy page route
- Contains: Layout and page for privacy policy content

**`app/terms/`**
- Purpose: Terms of service page route
- Contains: Layout and page for terms and conditions

**`app/impressum/`**
- Purpose: Legal impressum/imprint page route
- Contains: Layout and page for legal disclosure

**`app/svg-test/`**
- Purpose: Development/testing page for SVG components
- Contains: Test page for trying SVG implementations

**`public/`**
- Purpose: Static assets served directly by the web server
- Contains:
  - Image files: opengraph-image.png, opengraph-image-512.jpg, basarilogo.png, icterralogo.png, picofme.png
  - Video: bg-video.mp4 (3.1 MB background video)
  - SVG files: icon.svg, file.svg, globe.svg, window.svg, marker-highlight.svg
  - Audio: the_speach.mp3
  - Logos directory: Logos for client companies/integrations
  - Metadata: favicon.ico

**`content/`**
- Purpose: Markdown source files for case studies
- Contains: Case study markdown files with YAML frontmatter
- Key files: `case-studies/generator.md`, `case-studies/sync.md`

**`content/case-studies/`**
- Purpose: Stores case study markdown files
- Contains: Individual .md files, one per case study
- Naming: Files use slug format (e.g., generator.md, sync.md)
- Each file includes YAML frontmatter with metadata and markdown content for Challenge, Solution, Results sections

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout wrapping all pages with Navigation, Footer, Google Analytics
- `app/page.tsx`: Home page composing all major sections
- `app/robots.ts`: SEO robots.txt configuration
- `app/sitemap.ts`: SEO sitemap generation

**Configuration:**
- `tsconfig.json`: TypeScript compiler settings with path alias `@/*` → `./`
- `next.config.ts`: Next.js config for URL redirects and trailing slash handling
- `eslint.config.mjs`: Linting configuration
- `postcss.config.mjs`: PostCSS for Tailwind CSS
- `package.json`: Project dependencies and scripts

**Core Logic:**
- `app/blog/utils/blogHelpers.ts`: NocoDB API client for blog post data (external service integration)
- `app/case-studies/utils/caseStudyHelpers.ts`: File system parser for case study markdown files
- `app/components/StructuredData.tsx`: JSON-LD schema markup generation for SEO

**Testing:**
- Not detected (no test files found)

**Global Styles:**
- `app/globals.css`: Global Tailwind CSS configuration and custom styles

## Naming Conventions

**Files:**
- Components: PascalCase (e.g., `Hero.tsx`, `Navigation.tsx`, `CaseStudySidebar.tsx`)
- Utility files: camelCase (e.g., `blogHelpers.ts`, `caseStudyHelpers.ts`)
- Route pages: `page.tsx` and `layout.tsx` (Next.js convention)
- Configuration: camelCase with extensions (e.g., `next.config.ts`, `tsconfig.json`)

**Directories:**
- Feature/route directories: kebab-case (e.g., `case-studies`, `blog`, `[slug]`)
- Component directory: lowercase `components`
- Utility directory: lowercase `utils`
- Dynamic routes: Square brackets for dynamic segments (e.g., `[slug]`)

## Where to Add New Code

**New Page/Route:**
- Create directory under `app/` following kebab-case naming
- Add `page.tsx` for the page component
- Add `layout.tsx` if the page needs custom layout wrapping
- Example: For a new "services" page, create `app/services/page.tsx`

**New Component:**
- Add to `app/components/` with PascalCase filename
- Use functional components with TypeScript interfaces for props
- Example: `app/components/NewFeature.tsx`
- If component is route-specific (e.g., blog-only), place in route's `components/` subdirectory instead

**Route-Specific Components:**
- Place in route's own `components/` subdirectory (e.g., `app/blog/components/` for blog-only components)
- Example: `app/blog/components/BlogCard.tsx`

**Utilities & Helpers:**
- Place shared utilities in `app/[feature]/utils/` subdirectory if feature-specific
- Example: `app/blog/utils/blogHelpers.ts`
- Shared utilities across features: Consider `app/utils/` or co-locate with related component

**Markdown Content:**
- Case studies: Add `.md` files to `content/case-studies/`
- Include YAML frontmatter with slug, title, summary, industry, year, result, techStack
- Structure content with ## Challenge, ## Solution, ## Results sections followed by additional sections
- Example filename: `my-project.md`

**New External Service Integration:**
- Place API client/integration in `app/[feature]/utils/` directory
- Example: Blog uses `app/blog/utils/blogHelpers.ts` for NocoDB integration
- Case studies use `app/case-studies/utils/caseStudyHelpers.ts` for file system access

## Special Directories

**`.next/`**
- Purpose: Next.js build artifacts and type definitions
- Generated: Yes (during build)
- Committed: No (in .gitignore)

**`node_modules/`**
- Purpose: Installed npm dependencies
- Generated: Yes (via npm install)
- Committed: No (in .gitignore)

**`.planning/`**
- Purpose: GSD orchestrator planning and analysis documents
- Contents: STACK.md, ARCHITECTURE.md, STRUCTURE.md, etc.
- Committed: Yes

**Dynamic Route Directories:**
- `app/blog/[slug]/`: Generates blog post pages at `/blog/{slug}`
- `app/case-studies/[slug]/`: Generates case study pages at `/case-studies/{slug}`
- Next.js generates static or dynamic pages based on available slugs (from NocoDB for blog, from filesystem for case studies)

---

*Structure analysis: 2026-03-18*
