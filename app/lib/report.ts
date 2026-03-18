import { ReportRecord, AnalysisData } from "@/app/types/report";

const NOCODB_V1_API =
  "https://core.optimotion.dev/api/v1/db/data/noco/pfj0f9gvfaprl5w/mwpedms7gbaezxp";
const NOCODB_V2_API =
  "https://core.optimotion.dev/api/v2/tables/mwpedms7gbaezxp/records";
const NOCODB_TOKEN = process.env.NOCODB_TOKEN!;

async function fetchNocoDB(params: string = ""): Promise<Record<string, unknown>[]> {
  const url = `${NOCODB_V1_API}${params ? `?${params}` : ""}`;
  const res = await fetch(url, {
    headers: { "xc-token": NOCODB_TOKEN },
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.list || [];
}

export async function getReportById(reportId: string): Promise<ReportRecord | null> {
  const records = await fetchNocoDB(
    `where=(Report ID,eq,${reportId})~and(Status,neq,generating)&limit=1`
  );
  if (records.length === 0) return null;
  return records[0] as unknown as ReportRecord;
}

export function parseAnalysis(record: ReportRecord): AnalysisData | null {
  try {
    return JSON.parse(record["Analysis JSON"]) as AnalysisData;
  } catch {
    return null;
  }
}

export function isExpired(record: ReportRecord): boolean {
  const generatedAt = record["Generated At"] || record.CreatedAt;
  if (!generatedAt) return false;
  const generated = new Date(generatedAt);
  const now = new Date();
  const diffDays = (now.getTime() - generated.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays > 30;
}

export async function incrementViewCount(reportId: string): Promise<void> {
  const records = await fetchNocoDB(
    `where=(Report ID,eq,${reportId})&limit=1&fields=Id,View Count,First Viewed At`
  );
  if (records.length === 0) return;

  const record = records[0];
  const id = record.Id as number;
  const currentViews = (record["View Count"] as number) || 0;
  const firstViewed = record["First Viewed At"] as string | null;

  const updateData: Record<string, unknown> = {
    Id: id,
    "View Count": currentViews + 1,
  };
  if (!firstViewed) {
    updateData["First Viewed At"] = new Date().toISOString();
  }

  await fetch(NOCODB_V2_API, {
    method: "PATCH",
    headers: {
      "xc-token": NOCODB_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([updateData]),
  });
}
