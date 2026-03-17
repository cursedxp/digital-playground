import Link from "next/link";
import { getAllBlogPosts } from "./utils/blogHelpers";
import Navigation from "@/app/components/Navigation";
import CTA from "@/app/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Optimotion",
  description:
    "Insights on web development, automation, and growing your business with technology.",
  alternates: {
    canonical: "https://www.optimotion.dev/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Blog</h1>
        <p className="text-white/60 text-lg mb-12">
          Insights on web development, automation, and growing your business
          with technology.
        </p>

        {posts.length === 0 ? (
          <p className="text-white/40">Coming soon.</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.frontmatter.slug}
                href={`/blog/${post.frontmatter.slug}`}
                className="block group"
              >
                <article className="border border-white/10 rounded-lg p-6 hover:border-[#FFE028]/50 transition-colors">
                  <div className="flex items-center gap-3 text-sm text-white/40 mb-3">
                    <time>{post.frontmatter.date}</time>
                    {post.frontmatter.readTime && (
                      <>
                        <span>·</span>
                        <span>{post.frontmatter.readTime}</span>
                      </>
                    )}
                    {post.frontmatter.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 px-2 py-0.5 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold group-hover:text-[#FFE028] transition-colors mb-2">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-white/60">{post.frontmatter.summary}</p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CTA />
    </div>
  );
}
