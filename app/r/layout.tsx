import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Audit Report | Optimotion",
  description: "Your personalized website audit report from Optimotion.",
  robots: { index: false, follow: false },
};

export default function ReportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Hide main site nav/footer, override dark background */}
      <style>{`
        nav.fixed { display: none !important; }
        footer { display: none !important; }
        body { background: white !important; padding: 0 !important; }
      `}</style>
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </>
  );
}
