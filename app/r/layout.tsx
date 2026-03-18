import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Audit Report | Optimotion",
  description: "Your personalized website audit report from Optimotion.",
  robots: { index: false, follow: false },
};

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}
