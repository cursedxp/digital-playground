import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection & Your Rights",
  description:
    "Our privacy policy explains how we collect, use, and protect your personal information. GDPR compliant. Learn about your rights and how we handle your data.",
  alternates: {
    canonical: "https://www.optimotion.dev/privacy",
  },
  openGraph: {
    title: "Privacy Policy",
    description: "How we protect your data and respect your privacy",
    url: "https://www.optimotion.dev/privacy",
    type: "website",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
