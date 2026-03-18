export interface ServiceInfo {
  name: string;
  description: string;
  bullets: string[];
}

export const SERVICES: Record<string, ServiceInfo> = {
  "mobile-first-rebuild": {
    name: "Mobile-First Website Rebuild",
    description: "A complete redesign and rebuild of your website, optimized for mobile-first performance and conversions.",
    bullets: [
      "Mobile-optimized experience that loads fast",
      "Improved page speed and Core Web Vitals",
      "Online booking and lead capture built in",
      "SEO foundations for local search visibility",
    ],
  },
  "monthly-retainer": {
    name: "Monthly Development Retainer",
    description: "Ongoing development capacity for your product — design, features, and fixes delivered continuously.",
    bullets: [
      "Ongoing development capacity each month",
      "Design and engineering included",
      "Direct access to your dedicated engineer",
      "Cancel or pause anytime",
    ],
  },
  "mvp-development": {
    name: "MVP Development",
    description: "Go from idea to deployed product in 4 weeks with a fixed-scope build.",
    bullets: [
      "From spec to deployed product in 4 weeks",
      "Fixed scope — no surprise costs",
      "You own everything we build",
      "Post-launch support included",
    ],
  },
  "integrations-automation": {
    name: "Custom Integrations & Automation",
    description: "Connect your tools, automate workflows, and eliminate manual processes.",
    bullets: [
      "Connect your existing tools and platforms",
      "Automate repetitive manual workflows",
      "Custom API integrations",
      "Reduce operational overhead",
    ],
  },
};
