"use client";

import { useState, useEffect } from "react";

interface BlogSidebarProps {
  headings: { id: string; text: string }[];
  readTime?: string;
  author?: string;
  tags?: string[];
}

export function BlogSidebar({
  headings,
  readTime,
  author,
  tags,
}: BlogSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="hidden lg:block lg:col-span-3">
      <div className="lg:sticky lg:top-24 space-y-6">
        {/* Table of Contents */}
        {headings.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold mb-3 text-white">
              On this page
            </h3>
            <nav className="flex flex-col gap-2">
              {headings.map((heading) => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  className={`text-sm transition-colors ${
                    activeId === heading.id
                      ? "text-[#FFE028]"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Meta */}
        <div className="border-t border-white/10 pt-4 space-y-3">
          {readTime && (
            <div>
              <h3 className="text-sm font-semibold mb-1 text-white">
                Read Time
              </h3>
              <p className="text-sm text-white/50">{readTime}</p>
            </div>
          )}
          {author && (
            <div>
              <h3 className="text-sm font-semibold mb-1 text-white">Author</h3>
              <p className="text-sm text-white/50">{author}</p>
            </div>
          )}
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="border-t border-white/10 pt-4">
            <h3 className="text-sm font-semibold mb-2 text-white">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/10 px-2 py-0.5 rounded text-xs text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
