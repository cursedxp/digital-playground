import CaseStudyShowcase from "@/app/components/CaseStudyShowcase";
import CTA from "@/app/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Optimotion",
  description:
    "Client work, internal tools, and technical showcases built by Optimotion.",
  alternates: {
    canonical: "https://www.optimotion.dev/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-7xl font-bold mb-6">
          All Projects
        </h1>
        <p className="text-white/60 text-lg max-w-xl">
          Client work, internal tools, and technical showcases.
        </p>
      </div>
      <CaseStudyShowcase showAll pageMode />
      <CTA />
    </div>
  );
}
