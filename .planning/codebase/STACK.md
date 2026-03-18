# Technology Stack

**Analysis Date:** 2026-03-18

## Languages

**Primary:**
- TypeScript 5 - All source files in `app/` directory use `.ts` and `.tsx` extensions
- JavaScript - Configuration files and build scripts

**Secondary:**
- CSS - Global styles in `app/globals.css` and component-scoped CSS (e.g., `app/components/MagnetLines.css`)

## Runtime

**Environment:**
- Node.js - No specific version pinned (check runtime via `npm -v`)

**Package Manager:**
- npm - Used for dependency management
- Lockfile: `package-lock.json` present at project root

## Frameworks

**Core:**
- Next.js 16.0.10 - Full-stack framework using App Router (files in `app/` directory)
- React 19.2.3 - UI library for component rendering
- React DOM 19.2.3 - DOM rendering for React

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework via `@tailwindcss/postcss`
- Tailwind Typography Plugin 0.5.19 - Enhanced markdown/prose styling in `app/globals.css`
- PostCSS 4 - CSS transformation pipeline

**UI & Animation:**
- Framer Motion 12.23.26 - Animation and gesture library for interactive components
- Lucide React 0.561.0 - Icon library used throughout components
- Three.js 0.182.0 - 3D graphics (used in `app/components/MoleculeBackground.tsx`)

**Content & Markdown:**
- React Markdown 10.1.0 - Markdown rendering in blog and case study pages (`app/blog/` and `app/case-studies/`)
- Remark GFM 4.0.1 - GitHub-flavored markdown support for tables and extended syntax
- Gray Matter 4.0.3 - YAML frontmatter parsing for markdown files (used in case study helpers)
- React Hot Toast 2.6.0 - Toast notification library in `app/components/Toast.tsx`

**Build & Development:**
- ESLint 9 - Linting with Next.js configuration
- ESLint Config Next 16.0.10 - Preset rules for Next.js projects
- ESLint RC 3 - Compatibility layer for ESLint configuration
- TypeScript - Static type checking (config in `tsconfig.json`)

## Key Dependencies

**Critical:**
- Next.js 16.0.10 - Core framework; enables server components, API routes, image optimization, and deployment to Vercel
- React 19.2.3 - Application framework; newer version with improved concurrent rendering
- TypeScript 5 - Provides type safety across the entire codebase; strict mode enabled in `tsconfig.json`

**Infrastructure:**
- Three.js 0.182.0 - Used for 3D background animations (MoleculeBackground component)
- Framer Motion 12.23.26 - Powers all interactive animations and transitions throughout UI

**Content Processing:**
- Gray Matter 4.0.3 - Parses markdown frontmatter in `app/case-studies/utils/caseStudyHelpers.ts`
- React Markdown 10.1.0 - Renders markdown content safely in client components
- Remark GFM 4.0.1 - Extends markdown with GitHub tables, strikethrough, task lists

## Configuration

**Environment:**
- No environment variables required for development
- Production deployment via Vercel (configured in `vercel.json`)
- Domain redirects configured in `vercel.json` for optimotion.dev

**Build:**
- `next.config.ts` - Next.js build configuration
  - Trailing slash redirect rules
  - SEO-optimized URL handling
- `tsconfig.json` - TypeScript compiler options
  - Target: ES2017
  - Strict mode enabled
  - Path alias: `@/*` maps to project root
  - JSX: react-jsx
- `postcss.config.mjs` - PostCSS configuration with Tailwind CSS plugin
- `eslint.config.mjs` - ESLint configuration using flat config format

**Dev Commands:**
```bash
npm run dev         # Development server with Turbopack (--turbopack flag)
npm run build       # Production build with Turbopack optimization
npm start           # Start production server
npm run lint        # Run ESLint
```

## Platform Requirements

**Development:**
- Node.js (no version lock, but next.js 16 supports Node 18+)
- npm (for package management)
- Git (for version control)
- Modern browser with ES2017+ support

**Production:**
- Vercel platform (configured in `vercel.json` and Next.js deployment optimized)
- Custom domain: optimotion.dev and www.optimotion.dev
- Static hosting with optional serverless functions support (if API routes added)

---

*Stack analysis: 2026-03-18*
