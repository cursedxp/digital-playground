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
    <div className="min-h-screen bg-black text-white pt-24">
      <CaseStudyShowcase showAll />
      <CTA />
    </div>
  );
}
