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
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", width: 60, height: 40 },
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
            <div className="grid grid-cols-3 gap-4 mt-8 text-sm">
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
