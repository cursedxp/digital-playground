import { getBlogPost, getBlogSlugs } from "../utils/blogHelpers";
import Navigation from "@/app/components/Navigation";
import CTA from "@/app/components/CTA";
import ReactMarkdown from "react-markdown";
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-16">
        <Link
          href="/blog"
          className="text-white/40 hover:text-white text-sm mb-8 inline-block transition-colors"
        >
          ← Back to Blog
        </Link>

        <div className="flex items-center gap-3 text-sm text-white/40 mb-4">
          <time>{post.frontmatter.date}</time>
          {post.frontmatter.readTime && (
            <>
              <span>·</span>
              <span>{post.frontmatter.readTime}</span>
            </>
          )}
          <span>·</span>
          <span>{post.frontmatter.author}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
          {post.frontmatter.title}
        </h1>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-a:text-[#FFE028] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-white/80">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      <CTA />
    </div>
  );
}
