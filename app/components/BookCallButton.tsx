"use client";

interface BookCallButtonProps {
  text?: string;
  className?: string;
}

export default function BookCallButton({
  text = "Book a Call",
  className = "inline-block px-8 py-3 text-black text-base font-semibold rounded-full transition-all hover:scale-105 cursor-pointer"
}: BookCallButtonProps) {
  return (
    <a
      href="https://cal.com"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={{ backgroundColor: "#FFE028" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFE850")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFE028")}
    >
      {text}
    </a>
  );
}
