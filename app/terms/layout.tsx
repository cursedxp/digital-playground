import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Service Agreement & Conditions",
  description:
    "Terms and conditions for using Optimotion development services. Read our service agreement, usage terms, and legal information.",
  alternates: {
    canonical: "https://www.optimotion.dev/terms",
  },
  openGraph: {
    title: "Terms of Service",
    description: "Terms and conditions for our services",
    url: "https://www.optimotion.dev/terms",
    type: "website",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
