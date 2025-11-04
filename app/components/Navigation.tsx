import Link from "next/link";
import BookCallButton from "./BookCallButton";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-white" />
              <div className="absolute w-4 h-4 rounded-full bg-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white text-sm font-bold">Digital</span>
              <span className="text-white text-sm font-bold">Playground</span>
            </div>
          </Link>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#pricing"
              className="text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-white/80 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <a
              href="#insights"
              className="text-white/80 hover:text-white transition-colors"
            >
              Insights
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </a>
          </div>

          {/* Right side - CTA Button */}
          <BookCallButton />
        </div>
      </div>
    </nav>
  );
}
