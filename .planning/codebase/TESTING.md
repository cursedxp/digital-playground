# Testing Patterns

**Analysis Date:** 2026-03-18

## Current Testing Status

**Status:** No test framework configured

The project currently has no testing infrastructure set up. No test files exist in the application code (only in node_modules from dependencies like `zod` and `tsconfig-paths`).

## Test Framework Setup

**Runner:** Not configured

**Assertion Library:** Not configured

**Available Testing Options for Next.js:**
- Jest: Traditional choice for Next.js projects
- Vitest: Modern alternative (recommended for faster development)
- Playwright or Cypress: E2E testing
- React Testing Library: Component testing

**Run Commands (when configured):**
- `npm run test` - Run all tests (would need to be added to package.json)
- `npm run test:watch` - Watch mode (would need configuration)
- `npm run test:coverage` - Coverage report (would need configuration)

## Recommended Testing Setup

Based on the Next.js 16 and React 19 stack, here is a recommended testing approach:

**For Unit/Component Testing:**

**Option 1 - Vitest (Recommended):**
- Modern, fast, ESM-first
- Better TypeScript support
- Smaller configuration overhead

Install:
```bash
npm install -D vitest @vitest/ui @testing-library/react @testing-library/jest-dom
```

**Option 2 - Jest:**
- Established Next.js standard
- Better documentation resources
- Slower than Vitest

Install:
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom @types/jest
```

**For E2E Testing:**
```bash
npm install -D @playwright/test
```

## Proposed Test File Organization

**Location Pattern:** Co-located tests (preferred for this codebase)

**File Naming Convention:**
- Component tests: `ComponentName.test.tsx`
- Utility tests: `utilityName.test.ts`
- Example paths:
  - `app/components/Hero.test.tsx`
  - `app/blog/utils/blogHelpers.test.ts`
  - `app/blog/components/BlogContent.test.tsx`

**Alternative - Separate Directory:**
If preferring separation, use `__tests__` or `tests` directories:
```
app/
  components/
    __tests__/
      Hero.test.tsx
    Hero.tsx
  utils/
    __tests__/
      blogHelpers.test.ts
    blogHelpers.ts
```

## Recommended Test Structure

**Suite Organization Pattern (Vitest):**

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '@/app/components/Hero';

describe('Hero Component', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  it('should render heading text', () => {
    render(<Hero />);
    expect(screen.getByText(/Development Subscription/i)).toBeInTheDocument();
  });

  it('should have Book Call button', () => {
    render(<Hero />);
    expect(screen.getByRole('link', { name: /Book a Call/i })).toBeInTheDocument();
  });
});
```

**Setup Pattern:**
- Import test utilities from vitest/jest
- Use `describe()` for test suites
- Use `it()` or `test()` for individual tests
- Use `beforeEach()` for setup before each test
- Use `afterEach()` for cleanup after each test

**Teardown Pattern:**
- React Testing Library automatically cleans up after each test
- Use `afterEach()` for custom cleanup (mocks, timers, etc.)
- Example: `afterEach(() => { jest.clearAllMocks(); })`

**Assertion Pattern:**
- Use `expect()` from testing library
- Examples:
  - `expect(element).toBeInTheDocument()`
  - `expect(screen.getByText('...')).toBeVisible()`
  - `expect(element).toHaveClass('className')`
  - `expect(promise).resolves.toEqual(expected)`

## Mocking Patterns

**Framework:** Jest (if using Jest) or Vitest's built-in mocking

**Common Mocks Needed:**

**1. Async Function Mocks (for utility functions):**
```typescript
import { vi } from 'vitest';
import { getAllBlogPosts } from '@/app/blog/utils/blogHelpers';

vi.mock('@/app/blog/utils/blogHelpers', () => ({
  getAllBlogPosts: vi.fn().mockResolvedValue([
    {
      frontmatter: {
        slug: 'test-post',
        title: 'Test Post',
        summary: 'A test summary',
        date: '2026-03-18',
        author: 'Test Author',
        tags: ['test'],
      },
      content: '# Test Post Content',
    },
  ]),
}));
```

**2. External API Mocks (for fetch calls):**
```typescript
global.fetch = vi.fn().mockResolvedValue({
  json: () => Promise.resolve({ list: [] }),
});
```

**3. Next.js Navigation Mocks:**
```typescript
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
}));
```

**What to Mock:**
- External API calls (NocoDB, Cal.com, etc.)
- File system operations (fs.readFileSync)
- Browser APIs (window, document)
- Next.js router and navigation
- Environment variables

**What NOT to Mock:**
- React components being tested (render them directly)
- React hooks like useState, useEffect (use real hooks)
- Utility functions being tested (test them directly)
- Simple dependencies (just use real instances)

## Test Data & Fixtures

**Fixture Pattern (Vitest):**

Create `__fixtures__` or `fixtures` directory in each test folder:

```typescript
// app/blog/utils/__fixtures__/blogPosts.ts
export const mockBlogPost = {
  frontmatter: {
    slug: 'getting-started',
    title: 'Getting Started',
    summary: 'Learn how to get started',
    date: '2026-03-18',
    author: 'Anil Ozsoy',
    tags: ['tutorial', 'beginner'],
    readTime: '5 min read',
  },
  content: '# Getting Started\n\nWelcome to our blog!',
};

export const mockBlogPostList = [mockBlogPost];
```

**Usage in Tests:**
```typescript
import { mockBlogPost } from '@/app/blog/utils/__fixtures__/blogPosts';

it('should display blog post title', () => {
  // Use fixture data
  expect(mockBlogPost.frontmatter.title).toBe('Getting Started');
});
```

**Location:**
- `__fixtures__` directory at same level as test files
- Or co-located with utilities: `app/blog/utils/fixtures.ts`

## Coverage

**Requirements:** Not currently enforced

**Recommended Coverage Targets:**
- Statements: 70%+
- Branches: 65%+
- Functions: 70%+
- Lines: 70%+

**View Coverage (when configured):**

With Vitest:
```bash
npm run test:coverage
# Reports in coverage/ directory
# Open coverage/index.html in browser
```

With Jest:
```bash
npm run test -- --coverage
```

## Test Types

**Unit Tests:**
- Scope: Individual utility functions and hooks
- Approach: Test function inputs and outputs in isolation
- Examples for this codebase:
  - `getBlogPost(slug)` returns correct post or null
  - `parseCaseStudySections(content)` correctly splits sections
  - `slugify(text)` produces valid URL slugs

**Component Tests:**
- Scope: React components rendering and interactions
- Approach: Use React Testing Library, test user interactions
- Examples for this codebase:
  - `Hero` component renders correct content
  - `BookCallButton` has correct link and styling
  - `BlogSidebar` shows table of contents and metadata
  - `BlogContent` renders markdown correctly

**Integration Tests:**
- Scope: Multiple components/utilities working together
- Approach: Test workflows, not just isolated pieces
- Examples for this codebase:
  - Blog page fetches posts and displays them
  - Case study page loads and renders sections
  - Navigation between blog posts works

**E2E Tests:**
- Framework: Playwright (recommended)
- Scope: Full user journeys through the application
- Examples for this codebase:
  - User visits blog, clicks post, reads content, navigates back
  - User books a call through BookCallButton
  - User navigates case studies

## Common Testing Patterns

**Async Testing Pattern (Vitest):**

```typescript
it('should fetch and transform blog posts', async () => {
  const posts = await getAllBlogPosts();
  expect(posts).toHaveLength(1);
  expect(posts[0].frontmatter.title).toBe('Test Post');
});
```

**Error Testing Pattern:**

```typescript
it('should return null when blog post not found', async () => {
  const post = await getBlogPost('non-existent-slug');
  expect(post).toBeNull();
});

it('should handle fetch errors gracefully', async () => {
  global.fetch = vi.fn().mockRejectedValueOnce(new Error('Network error'));
  await expect(getAllBlogPosts()).rejects.toThrow('Network error');
});
```

**React Hook Testing Pattern:**

```typescript
import { renderHook } from '@testing-library/react';

it('should update active heading on scroll', () => {
  const { result } = renderHook(() => useState<string>(''));
  // Test hook behavior
});
```

**Component Interaction Pattern:**

```typescript
import { render, screen, fireEvent } from '@testing-library/react';

it('should navigate to call booking on button click', () => {
  render(<BookCallButton />);
  const link = screen.getByRole('link', { name: /Book a Call/i });
  expect(link).toHaveAttribute('href', 'https://cal.com/optimotion.dev/60-min-meeting');
});
```

## Configuration Example (Vitest)

Create `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      exclude: [
        'node_modules/',
        'vitest.setup.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

Create `vitest.setup.ts`:

```typescript
import '@testing-library/jest-dom';
```

Update `package.json` scripts:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

*Testing analysis: 2026-03-18*
