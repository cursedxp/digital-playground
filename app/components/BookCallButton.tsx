"use client";

export default function BookCallButton() {
  return (
    <a
      href="#book"
      className="inline-block px-8 py-3 text-black text-base font-semibold rounded-full transition-all hover:scale-105 cursor-pointer"
      style={{ backgroundColor: "#FFE028" }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFE850")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFE028")}
    >
      Book a Call
    </a>
  );
}
