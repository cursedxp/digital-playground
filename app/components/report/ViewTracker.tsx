"use client";

import { useEffect } from "react";

interface ViewTrackerProps {
  reportId: string;
}

export default function ViewTracker({ reportId }: ViewTrackerProps) {
  useEffect(() => {
    const key = `report-viewed-${reportId}`;
    if (typeof window !== "undefined" && !sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      fetch(`/api/view/${reportId}`, { method: "POST" }).catch(() => {});
    }
  }, [reportId]);

  return null;
}
