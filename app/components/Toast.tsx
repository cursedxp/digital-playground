"use client";

import { useEffect, useState } from "react";

function ToastContent({ onClose }: { onClose: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="w-80 rounded-xl shadow-2xl pointer-events-auto transition-all duration-300 overflow-hidden"
      style={{ backgroundColor: "#FFE028" }}
    >
      <div
        className={`p-3 ${!isExpanded ? "cursor-pointer" : ""}`}
        onClick={() => {
          if (!isExpanded) {
            setIsExpanded(true);
          }
        }}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-black font-bold text-md">
            Founding Member Program
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="text-black/60 hover:text-black transition-colors shrink-0 w-8 h-8 flex items-center justify-center rounded hover:bg-black/10 cursor-pointer -mt-1 -mr-1"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-4">
            <p className="text-black/80 text-sm leading-relaxed">
              Join our first 3 founding members - priority scheduling,
              co-creation process, featured project
            </p>
            <a
              href="https://cal.com/optimotion.dev/60-min-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-black text-white text-sm font-semibold rounded-full transition-all hover:scale-105 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function CookieToast({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-80 rounded-xl shadow-2xl pointer-events-auto bg-white/95 backdrop-blur-sm p-4">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1">
          <p className="text-black/80 text-sm leading-relaxed">
            We use cookies to improve your experience on our site. By continuing
            to use our site, you accept our use of cookies.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-black/60 hover:text-black transition-colors shrink-0 w-8 h-8 flex items-center justify-center rounded hover:bg-black/10 cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={onClose}
          className="flex-1 px-4 py-2 bg-black text-white text-sm font-semibold rounded-full transition-all hover:scale-105 cursor-pointer"
        >
          Accept
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 border border-black/20 text-black text-sm font-semibold rounded-full transition-all hover:bg-black/5 cursor-pointer"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

export default function Toast() {
  const [isOfferVisible, setIsOfferVisible] = useState(false);
  const [isCookieVisible, setIsCookieVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOfferVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col-reverse gap-4">
      {isCookieVisible && (
        <CookieToast onClose={() => setIsCookieVisible(false)} />
      )}
      {isOfferVisible && (
        <ToastContent onClose={() => setIsOfferVisible(false)} />
      )}
    </div>
  );
}
