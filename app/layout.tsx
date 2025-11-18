import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import {
  OrganizationSchema,
  ServiceSchema,
} from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair({
  variable: "--font-serif",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Configuration
const siteUrl = "https://www.optimotion.dev";
const companyName = "Optimotion";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Basic Meta - Optimized for SEO
  title: {
    default:
      "Monthly Development Subscription for Growing Businesses | Custom Web Apps & Integrations",
    template: `%s | ${companyName}`,
  },
  description:
    "A monthly development subscription for growing businesses. We build custom web apps, connect your tools, and automate your workflows. Cancel anytime—no long-term contracts.",

  // Keywords for SEO
  keywords: [
    "monthly development subscription",
    "custom web development",
    "development subscription",
    "Next.js development",
    "React development",
    "API integrations",
    "workflow automation",
    "SaaS development",
    "boutique development studio",
    "custom web apps",
  ],

  // Authors and Creator
  authors: [{ name: companyName }],
  creator: companyName,
  publisher: companyName,

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: companyName,
    title:
      "Monthly Development Subscription for Growing Businesses | Custom Web Apps",
    description:
      "We build custom web apps, connect your tools, and automate your workflows. $2,400/month. Cancel anytime—no long-term contracts.",
    images: [
      {
        url: "/opengraph-image.png", // Next.js automatically serves this from /app
        width: 1200,
        height: 630,
        alt: `${companyName} - Custom Development Solutions`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Monthly Development Subscription for Growing Businesses",
    description:
      "We build custom web apps, connect your tools, and automate your workflows. $2,400/month. Cancel anytime.",
    images: ["/opengraph-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional Meta
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = "width=device-width, initial-scale=1, maximum-scale=5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <ServiceSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}  antialiased bg-black sm:px-8 md:px-8 `}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
