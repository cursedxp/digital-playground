export interface ServiceInfo {
  name: string;
  description: string;
  bullets: string[];
}

export const SERVICES: Record<string, ServiceInfo> = {
  "monthly-plan": {
    name: "Monthly Plan",
    description: "Subscribe for ongoing development. Two complete features delivered every month.",
    bullets: [
      "Two complete features delivered per month",
      "Design + development + deployment included",
      "Delivered tested and working",
      "Documentation included",
      "Cancel anytime, no penalties",
    ],
  },
  "custom-projects": {
    name: "Custom Projects",
    description: "For projects with custom needs — big or small, simple or complex.",
    bullets: [
      "Custom assessment & proposal",
      "Flexible engagement model",
      "Tailored to your budget & timeline",
      "Transparent quoting",
      "Ongoing support options",
    ],
  },
};
