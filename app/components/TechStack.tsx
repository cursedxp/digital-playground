"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechStack() {
  const technologies = [
    { name: "React", logo: "/logos/reactjs.svg", width: 60, height: 40 },
    { name: "Next.js", logo: "/logos/next.svg", width: 60, height: 40 },
    {
      name: "TypeScript",
      logo: "/logos/typescript.svg",
      width: 60,
      height: 40,
    },
    {
      name: "Tailwind CSS",
      logo: "/logos/tailwind.svg",
      width: 60,
      height: 40,
    },
    { name: "Node.js", logo: "/logos/nodejs.svg", width: 60, height: 40 },
    { name: "MongoDB", logo: "/logos/mongodb.svg", width: 60, height: 40 },
    {
      name: "PostgreSQL",
      logo: "/logos/postgresql.svg",
      width: 60,
      height: 40,
    },
    { name: "Vercel", logo: "/logos/vercel.svg", width: 60, height: 40 },
    { name: "Figma", logo: "/logos/figma.svg", width: 60, height: 40 },
    { name: "Framer", logo: "/logos/framer.svg", width: 60, height: 40 },
    { name: "Claude", logo: "/logos/claude.svg", width: 60, height: 40 },
    { name: "OpenAI", logo: "/logos/openai.svg", width: 60, height: 40 },
    { name: "Stripe", logo: "/logos/stripe.svg", width: 60, height: 40 },
    { name: "PayPal", logo: "/logos/paypal.svg", width: 120, height: 90 },
    { name: "Notion", logo: "/logos/notion.svg", width: 60, height: 40 },
    { name: "HubSpot", logo: "/logos/hubspot.svg", width: 60, height: 40 },
  ];

  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50">
      <div className="flex max-w-7xl w-full mb-8 flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1 order-2 sm:order-1">
          <div className="flex flex-col">
            <p className="text-xl mt-6 max-w-sm">
              We work with modern, proven technologies to build scalable and
              maintainable solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-sm">
              <p>
                Our technology stack is carefully selected to ensure rapid
                development without compromising quality or future scalability.
              </p>
              <p>
                From React and Next.js for blazing-fast interfaces to TypeScript
                for type-safe code, we use tools that have proven their worth in
                production at scale.
              </p>
              <p>
                We integrate seamlessly with your existing systems, whether
                that&apos;s connecting to Stripe for payments, Notion for
                content, or building custom APIs that tie everything together.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 sm:order-2">
          <motion.h2
            className="text-7xl font-bold text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Tech Stack
          </motion.h2>
        </div>
      </div>

      <div className="flex max-w-7xl w-full mb-12 flex-col sm:flex-row px-8 sm:px-0">
        <div className="w-full sm:w-[70%] order-2 sm:order-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-base font-bold mb-4">Frontend</h3>
              <ul className="space-y-2 text-white text-sm">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-4">Backend & Database</h3>
              <ul className="space-y-2 text-white text-sm">
                <li>• Node.js</li>
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
                <li>• RESTful & GraphQL APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-4">Design & UX</h3>
              <ul className="space-y-2 text-white text-sm">
                <li>• Figma</li>
                <li>• Framer</li>
                <li>• Responsive design</li>
                <li>• Component systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-bold mb-4">Integrations</h3>
              <ul className="space-y-2 text-white text-sm">
                <li>• Stripe & PayPal</li>
                <li>• HubSpot & Notion</li>
                <li>• OpenAI & Claude</li>
                <li>• Custom APIs</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-white mt-8 max-w-2xl">
            Your team can maintain everything we build. We use industry-standard
            technologies with strong community support and extensive
            documentation.
          </p>
        </div>
        <div className="w-full sm:w-[30%] order-1 sm:order-2"></div>
      </div>

      <div className="max-w-7xl w-full overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {technologies.concat(technologies).map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 min-w-[80px]"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={tech.width}
                height={tech.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
