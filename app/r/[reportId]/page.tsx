import { notFound } from "next/navigation";
import { getReportById, parseAnalysis, isExpired } from "@/app/lib/report";
import { generateIssues, generateRecommendations, computeOverallScore } from "@/app/lib/recommendations";
import ReportClient from "./ReportClient";
import Link from "next/link";
import { Metadata } from "next";
import BookCallButton from "@/app/components/BookCallButton";

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
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <Link href="https://www.optimotion.dev" className="flex items-center justify-center gap-3 mb-8 hover:opacity-80 transition-opacity">
          <div className="relative flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-white" />
            <div className="absolute w-4 h-4 rounded-full bg-white" />
          </div>
          <span className="text-white text-base font-bold">Optimotion</span>
        </Link>
        <h1 className="text-3xl font-bold text-white mb-4">This Report Has Expired</h1>
        <p className="text-white/70 text-lg mb-8 leading-relaxed">
          Your website may have changed since this analysis was generated.
          Get a fresh report with updated insights.
        </p>
        <BookCallButton
          text="Book a Free Discovery Call"
          className="inline-block px-8 py-4 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
        />
        <p className="text-sm text-white/50 mt-6">
          Or request a new report:{" "}
          <a href="mailto:hi@optimotion.dev?subject=New%20Website%20Report%20Request" className="text-white/80 hover:text-white transition-colors">
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
      <header className="sticky top-0 z-40 bg-black/50 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="https://www.optimotion.dev" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="relative flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-white" />
              <div className="absolute w-4 h-4 rounded-full bg-white" />
            </div>
            <span className="text-white text-base font-bold">Optimotion</span>
          </Link>
          <span className="text-xs text-white/50">Website Audit Report</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto pb-16">
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
