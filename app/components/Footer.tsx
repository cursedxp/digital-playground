"use client";

import Link from "next/link";
import { Facebook, Twitter, Mail, MapPin } from "lucide-react";
import BookCallButton from "./BookCallButton";

export default function Footer() {
  return (
    <footer className="relative z-40 bg-black/80 backdrop-blur-sm">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 border-b border-white/10">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Automate Your Workflow?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Start with a discovery call to identify your bottlenecks, or jump in with a small task to test our collaboration.
          </p>
          <BookCallButton
            text="Book a Discovery Call"
            className="inline-block px-8 py-4 text-black text-base font-semibold rounded-full transition-all hover:scale-105"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-white" />
                <div className="absolute w-6 h-6 rounded-full bg-white" />
              </div>
              <div className="flex flex-col text-white text-sm font-semibold leading-tight">
                <span>Digital</span>
                <span>Playground</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm">
              Smart Solutions for Growing Businesses
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#services"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                About
              </a>
              <a
                href="#faq"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                FAQ
              </a>
              <a
                href="/terms"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/impressum"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Impressum
              </a>
              <a
                href="/privacy"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hi@digitalplayground.io"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>hi@digitalplayground.io</span>
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  Meerbusch, Germany
                  <br />
                  <span className="text-white/40 text-xs mt-1 block">CET Timezone (UTC+1)</span>
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black hover:bg-gray flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8">
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} Digital Playground. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
