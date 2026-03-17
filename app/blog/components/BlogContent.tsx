"use client";

import ReactMarkdown from "react-markdown";
import { Components } from "react-markdown";

interface BlogContentProps {
  content: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const components: Components = {
  h2: ({ children }) => {
    const text =
      typeof children === "string"
        ? children
        : String(children).replace(/\*\*/g, "");
    const id = slugify(text);
    return (
      <h2 id={id} className="scroll-mt-28">
        {children}
      </h2>
    );
  },
};

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-a:text-[#FFE028] prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-li:text-white/80">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
