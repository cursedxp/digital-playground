import { NextRequest, NextResponse } from "next/server";
import { incrementViewCount } from "@/app/lib/report";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ reportId: string }> }
) {
  const { reportId } = await params;

  try {
    await incrementViewCount(reportId);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
