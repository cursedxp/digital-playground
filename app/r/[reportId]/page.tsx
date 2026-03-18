import { notFound } from "next/navigation";
import { getReportById, parseAnalysis, isExpired } from "@/app/lib/report";
import { generateIssues, generateRecommendations, computeOverallScore } from "@/app/lib/recommendations";
import ReportClient from "./ReportClient";
import CTASection from "@/app/components/report/CTASection";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ reportId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { reportId } = await params;
  const record = await getReportById(reportId);
  if (!record) return { title: "Report Not Found" };
  return {
    title: `${record.Company} - Website Audit | Optimotion`,
    description: `Website audit report for ${record.Company}`,
  };
}

function ExpiredPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-3 border-black" />
            <div className="absolute w-6 h-6 rounded-full bg-black" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">This Report Has Expired</h1>
        <p className="text-gray-600 mb-8">
          Your website may have changed since this analysis was generated.
          Get a fresh report with updated insights.
        </p>
        <a
          href="https://cal.com/optimotion.dev/60-min-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
          style={{ backgroundColor: "#FFE028" }}
        >
          Book a Free Discovery Call
        </a>
        <p className="text-sm text-gray-500 mt-4">
          Or request a new report:{" "}
          <a href="mailto:hi@optimotion.dev?subject=New%20Website%20Report%20Request" className="text-gray-700 underline">
            hi@optimotion.dev
          </a>
        </p>
      </div>
    </div>
  );
}

export default async function ReportPage({ params }: PageProps) {
  const { reportId } = await params;
  const record = await getReportById(reportId);

  if (!record) notFound();

  if (isExpired(record)) {
    return <ExpiredPage />;
  }

  const analysis = parseAnalysis(record);
  if (!analysis) notFound();

  const issues = generateIssues(analysis);
  const recommendations = generateRecommendations(analysis, issues);
  const overallScore = record["Overall Score"] || computeOverallScore(analysis);

  return (
    <>
      {/* Sticky header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="https://www.optimotion.dev" className="flex items-center gap-2">
            <div className="relative flex items-center justify-center">
              <div className="w-7 h-7 rounded-full border-2 border-black" />
              <div className="absolute w-3.5 h-3.5 rounded-full bg-black" />
            </div>
            <span className="text-sm font-semibold text-gray-900">Optimotion</span>
          </Link>
          <span className="text-xs text-gray-400">Website Audit Report</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-16">
        <ReportClient
          company={record.Company}
          website={record.Website}
          overallScore={overallScore}
          generatedAt={record["Generated At"] || record.CreatedAt}
          analysis={analysis}
          issues={issues}
          recommendations={recommendations}
          reportId={reportId}
        />
      </main>
    </>
  );
}
