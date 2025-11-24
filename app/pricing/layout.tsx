import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Simple & Transparent Development Subscriptions",
  description:
    "2-week sprints at $2,400 or quarterly projects at $8,000. No hidden fees, no surprises. Design, development, and deployment included. Cancel anytime.",
  alternates: {
    canonical: "https://www.optimotion.dev/pricing",
  },
  openGraph: {
    title: "Pricing - Development Subscriptions",
    description:
      "Simple, transparent pricing. Sprint-based or project-based. Cancel anytime.",
    url: "https://www.optimotion.dev/pricing",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
