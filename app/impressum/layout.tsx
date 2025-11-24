import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Legal Information",
  description:
    "Legal information and company details for Optimotion. Contact information, business registration, and legal disclosure.",
  alternates: {
    canonical: "https://www.optimotion.dev/impressum",
  },
  openGraph: {
    title: "Impressum",
    description: "Legal information and company details",
    url: "https://www.optimotion.dev/impressum",
    type: "website",
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
