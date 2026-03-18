# External Integrations

**Analysis Date:** 2026-03-18

## APIs & External Services

**Content Management:**
- NocoDB - CMS backend for blog posts
  - API: `https://core.optimotion.dev/api/v1/db/data/noco/pfj0f9gvfaprl5w/mq2rfhtokkgjrja`
  - Token-based auth: Header `xc-token` (hardcoded in `app/blog/utils/blogHelpers.ts`)
  - Used for: Fetching published blog posts with filtering and pagination
  - Client: Fetch API via `fetchNocoDB()` function

**Scheduling:**
- Cal.com - Meeting/call scheduling
  - Embedded link: `https://cal.com/optimotion.dev/60-min-meeting`
  - Used in: `app/components/BookCallButton.tsx`, `app/components/Toast.tsx`
  - Purpose: Direct booking without modal/SDK integration (simple hyperlink)

## Data Storage

**Databases:**
- Not actively used in codebase - this is a static marketing site
- Content stored in NocoDB (external managed database)
- Markdown files stored locally in `content/case-studies/` (filesystem-based)

**File Storage:**
- Local filesystem in `public/` directory:
  - Logos in `public/logos/`
  - Images: `basarilogo.png`, `icterralogo.png`, `picofme.png`
  - Video: `bg-video.mp4`
  - Assets: SVG files (`globe.svg`, `file.svg`, `vercel.svg`, `marker-highlight.svg`)

**Caching:**
- Next.js built-in caching via `next: { revalidate: 60 }` in `app/blog/utils/blogHelpers.ts`
  - Blog posts cached for 60 seconds before ISR (Incremental Static Regeneration) refresh
  - Case studies generated at build time (static)

## Authentication & Identity

**Auth Provider:**
- None implemented - Site is fully public
- No user accounts or authentication system
- Cal.com scheduling uses external authentication (user authenticates with Cal.com)

## Monitoring & Observability

**Error Tracking:**
- None detected - No Sentry, Rollbar, or similar

**Analytics:**
- Google Analytics 4
  - Measurement ID: G-VRNMQ6MLG7
  - Implementation: `app/components/GoogleAnalytics.tsx`
  - Script tag: `https://www.googletagmanager.com/gtag/js?id=G-VRNMQ6MLG7`
  - Tracking: Page views and user interactions

**Logs:**
- Standard Next.js console logging
- No centralized logging service detected

## CI/CD & Deployment

**Hosting:**
- Vercel platform
  - Configuration: `vercel.json` at project root
  - Deployment: Direct from git pushes to main branch

**CI Pipeline:**
- Vercel native CI/CD (automatic on push)
- No GitHub Actions or external CI detected

**Build Process:**
- Turbopack-optimized builds via Next.js 16
- Commands: `npm run build` with `--turbopack` flag

## Environment Configuration

**Required env vars:**
- None required for basic functionality
- NocoDB token is hardcoded (not environment-based)
- Google Analytics ID is hardcoded

**Secrets location:**
- `.env` file not present or used
- Hardcoded values in source code:
  - NocoDB token in `app/blog/utils/blogHelpers.ts` line 18
  - Google Analytics ID in `app/components/GoogleAnalytics.tsx` line 8

**Note:** Secrets are hardcoded in source (not ideal for production) - token visible in git history

## Webhooks & Callbacks

**Incoming:**
- None detected - No API route handlers or webhook endpoints

**Outgoing:**
- None detected - Site does not trigger external webhooks

## References to Potential Future Integrations

The following services are mentioned in marketing copy but NOT currently integrated:

**Payment Processing:**
- Stripe - Referenced in `app/terms/page.tsx` and `app/components/FAQ.tsx` as example integration
  - Not yet integrated in codebase
  - Mentioned in pricing page context

**CRM & Automation:**
- HubSpot - Mentioned in `app/components/FAQ.tsx` as possible integration example
- Google Sheets - Mentioned as sync target for integrations

**Productivity Tools:**
- Notion - Referenced as sync source/target
- Airtable - Referenced as potential integration

**Email:**
- Resend - Mentioned in `app/privacy/page.tsx` as potential service provider
- SendGrid - Mentioned in `app/privacy/page.tsx` as potential service provider
- Mailchimp - Mentioned in `app/components/ServicesDetailed.tsx` as example integration

These are discussed as service capabilities Optimotion offers to clients, not as dependencies of the site itself.

## Third-Party Services Summary

| Service | Type | Status | Location |
|---------|------|--------|----------|
| NocoDB | CMS/Database | Active | `app/blog/utils/blogHelpers.ts` |
| Google Analytics 4 | Analytics | Active | `app/components/GoogleAnalytics.tsx` |
| Cal.com | Scheduling | Active | `app/components/BookCallButton.tsx`, `app/components/Toast.tsx` |
| Vercel | Hosting | Active | `vercel.json` |
| Next.js Fonts API | Font Service | Active | `app/layout.tsx` (Google Fonts: Geist, Playfair) |

---

*Integration audit: 2026-03-18*
