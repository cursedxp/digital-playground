"use client";

import { useCallback } from "react";
import toast from "react-hot-toast";

interface ShareButtonProps {
  reportId: string;
}

export default function ShareButton({ reportId }: ShareButtonProps) {
  const handleShare = useCallback(async () => {
    const url = window.location.href;

    // Try native share on mobile first
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: "Website Audit Report", url });
        return;
      } catch {
        // User cancelled or not supported — fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      toast("Link copied!", {
        style: {
          background: "#1a1a1a",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
    } catch {
      toast.error("Could not copy link");
    }
  }, [reportId]);

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 transition-colors rounded-full px-4 py-2 text-sm text-white cursor-pointer"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
      Share
    </button>
  );
}
