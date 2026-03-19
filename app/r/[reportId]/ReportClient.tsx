"use client";

import { AnalysisData, Issue } from "@/app/types/report";
import { Recommendation } from "@/app/lib/recommendations";
import ViewTracker from "@/app/components/report/ViewTracker";
import HeroSection from "@/app/components/report/HeroSection";
import PerformanceSection from "@/app/components/report/PerformanceSection";
import CoreWebVitalsSection from "@/app/components/report/CoreWebVitalsSection";
import SEOReportSection from "@/app/components/report/SEOReportSection";
import SecurityReportSection from "@/app/components/report/SecurityReportSection";
import IssuesSection from "@/app/components/report/IssuesSection";
import DetailsSection from "@/app/components/report/DetailsSection";
import RecommendationsSection from "@/app/components/report/RecommendationsSection";
import CTASection from "@/app/components/report/CTASection";

interface ReportClientProps {
  company: string;
  website: string;
  overallScore: number;
  generatedAt: string;
  analysis: AnalysisData;
  issues: Issue[];
  recommendations: Recommendation[];
  reportId: string;
}

export default function ReportClient({
  company,
  website,
  overallScore,
  generatedAt,
  analysis,
  issues,
  recommendations,
  reportId,
}: ReportClientProps) {
  const ps = analysis.pagespeed;
  const mobile = ps?.mobile ?? null;
  const desktop = ps?.desktop ?? null;

  return (
    <>
      <ViewTracker reportId={reportId} />

      <HeroSection
        company={company}
        website={website}
        overallScore={overallScore}
        generatedAt={generatedAt}
        screenshot={desktop?.screenshot}
        reportId={reportId}
      />

      {ps && (mobile || desktop) && (
        <PerformanceSection ps={ps} mobile={mobile} desktop={desktop} />
      )}

      <CoreWebVitalsSection mobile={mobile} />

      {analysis.seo && (
        <SEOReportSection
          seo={analysis.seo}
          title={analysis.title}
          description={analysis.description}
          url={analysis.url}
        />
      )}

      {(analysis.observatory || analysis.ssl) && (
        <SecurityReportSection observatory={analysis.observatory} ssl={analysis.ssl} />
      )}

      <IssuesSection issues={issues} />

      <DetailsSection analysis={analysis} />

      <RecommendationsSection recommendations={recommendations} />

      <CTASection />
    </>
  );
}
