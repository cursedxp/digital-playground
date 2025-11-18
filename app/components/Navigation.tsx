"use client";

import Link from "next/link";
import BookCallButton from "./BookCallButton";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
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
              <span className="text-white text-sm font-bold">Optimotion</span>
            </div>
          </Link>

          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#services"
              className="text-white/80 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="/#how-it-works"
              className="text-white/80 hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="/#pricing"
              className="text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="/#about"
              className="text-white/80 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="/#faq"
              className="text-white/80 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Right side - CTA Button (Desktop) + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <BookCallButton />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              <a
                href="/#services"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/#how-it-works"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="/#pricing"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="/#about"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#faq"
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-2">
                <BookCallButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
