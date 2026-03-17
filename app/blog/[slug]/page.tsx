import { getBlogPost, getBlogSlugs } from "../utils/blogHelpers";
import Navigation from "@/app/components/Navigation";
import CTA from "@/app/components/CTA";
import { BlogContent } from "../components/BlogContent";
import { BlogSidebar } from "../components/BlogSidebar";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return { title: "Not Found" };

  const baseUrl = "https://www.optimotion.dev";
  const url = `${baseUrl}/blog/${slug}`;

  return {
    title: `${post.frontmatter.title} - Optimotion Blog`,
    description: post.frontmatter.summary,
    alternates: { canonical: url },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      url: url,
      type: "article",
      publishedTime: post.frontmatter.date,
    },
  };
}

function extractHeadings(content: string): { id: string; text: string }[] {
  const lines = content.split("\n");
  const headings: { id: string; text: string }[] = [];
  for (const line of lines) {
    const match = line.match(/^## (.+)$/);
    if (match) {
      const text = match[1].replace(/\*\*/g, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      headings.push({ id, text });
    }
  }
  return headings;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const headings = extractHeadings(post.content);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 py-8 sm:py-16 pt-32">
        <Link
          href="/blog"
          className="text-white/40 hover:text-white text-sm mb-8 inline-block transition-colors"
        >
          ← Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <BlogSidebar
            headings={headings}
            readTime={post.frontmatter.readTime}
            author={post.frontmatter.author}
            tags={post.frontmatter.tags}
          />

          <article className="lg:col-span-9">
            <div className="flex items-center gap-3 text-sm text-white/40 mb-4">
              <time>{post.frontmatter.date}</time>
              {post.frontmatter.readTime && (
                <>
                  <span>·</span>
                  <span>{post.frontmatter.readTime}</span>
                </>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              {post.frontmatter.title}
            </h1>

            {/* Mobile tags */}
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8 lg:hidden">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/10 px-2 py-0.5 rounded text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <BlogContent content={post.content} />
          </article>
        </div>
      </div>

      <CTA />
    </div>
  );
}
