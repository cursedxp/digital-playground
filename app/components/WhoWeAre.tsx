"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="text-white flex flex-col items-center w-full relative mb-20 sm:mb-50"
    >
      <div className="flex max-w-7xl w-full flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1">
          <motion.h2
            className="text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Who We
            <br />
            Are
          </motion.h2>

          {/* About the Founder - Under the title */}
          <div className="mt-8 max-w-md">
            <div className="flex flex-col gap-6 items-start">
              {/* Profile Photo */}
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden relative">
                  <Image
                    src="/picofme.png"
                    alt="Founder"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Experience Text */}
              <div>
                <h3 className="text-base font-semibold mb-1">Anil Ozsoy</h3>
                <p className="text-xs text-white/50 mb-3">Founder</p>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Experience from leading tech companies in Europe and the US.
                </p>

                {/* Company Logos */}
                <div className="mb-8">
                  <p className="text-xs text-white/50 mb-3">Previously at</p>
                  <div className="flex gap-6 items-center flex-wrap">
                    {/* Jotform */}
                    <svg
                      width="32"
                      height="32"
                      viewBox="100 100 400 400"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M231.287 450.612C237.601 456.733 233.139 467.221 224.173 467.221H168.06C156.989 467.221 147.98 458.488 147.98 447.756V393.358C147.98 384.666 158.799 380.341 165.113 386.462L231.287 450.612Z"
                        fill="#0A1551"
                      ></path>
                      <path
                        d="M319.003 454.845C302.393 438.343 302.394 411.589 319.003 395.088L378.947 335.535C395.557 319.033 422.486 319.033 439.096 335.535C455.705 352.036 455.705 378.79 439.096 395.292L379.152 454.845C362.542 471.346 335.613 471.346 319.003 454.845Z"
                        fill="#FFB629"
                      ></path>
                      <path
                        d="M160.64 305.204C144.031 288.703 144.031 261.949 160.64 245.447L261.52 145.155C278.129 128.653 305.059 128.653 321.669 145.155C338.278 161.656 338.278 188.41 321.669 204.912L220.789 305.204C204.179 321.705 177.25 321.705 160.64 305.204Z"
                        fill="#0099FF"
                      ></path>
                      <path
                        d="M243.108 376.686C226.498 360.185 226.498 333.43 243.108 316.929L379.414 181.511C396.024 165.009 422.953 165.009 439.563 181.511C456.173 198.012 456.173 224.766 439.563 241.268L303.256 376.686C286.647 393.187 259.717 393.187 243.108 376.686Z"
                        fill="#FF6100"
                      ></path>
                    </svg>
                    {/* Trivago */}
                    <svg viewBox="0 0 233.5036 299.2473" width="32" height="32">
                      <path
                        fill="#0088d9"
                        d="m3.2586,183.3815c-1.8164,0-3.2511,1.5166-3.186,3.3318,2.2422,62.5308,53.6438,112.534,116.7208,112.534s114.4609-49.9995,116.708-112.5251c.0655-1.8212-1.3744-3.3428-3.1968-3.3428h-61.4946c-1.6359,0-3.0456,1.3377-3.1738,2.9686-1.9853,25.2469-23.0869,45.1171-48.8428,45.1171-30.9024,0-43.3981-26.2411-43.4004-26.2454-3.9867-7.5129-5.149-14.8374-5.4791-18.9333-.1327-1.6465-1.5241-2.907-3.1759-2.9069l-61.4794.002Z"
                      ></path>
                      <path
                        fill="#ff932c"
                        d="m194.9433,18.1224l-127.1606,70.3098v74.6428s129.1503-71.4139,129.1503-71.4139c1.6934-.9363,2.7441-2.7185,2.7441-4.6531V20.9143c0-2.4296-2.6076-3.9675-4.7339-2.7919Z"
                      ></path>
                      <path
                        fill="#e32851"
                        d="m67.7827,3.1956c0-2.529-2.8019-4.0526-4.9246-2.6779L2.4268,39.6535c-1.5132.98-2.4268,2.66-2.4268,4.4629v115.7729c0,1.7594,1.4263,3.1857,3.1857,3.1857h64.597V3.1956Z"
                      ></path>
                    </svg>
                    {/* IcTerra */}
                    <Image
                      src="/icterralogo.png"
                      alt="IcTerra"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                    {/* Basari Mobile */}
                    <Image
                      src="/basarilogo.png"
                      alt="Basari Mobile"
                      width={32}
                      height={12}
                      className="object-contain"
                    />
                    <span className="text-white/50 text-sm">...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <p className="text-xl leading-relaxed">
              A boutique development studio based in Germany, specializing in
              software for growing businesses and UX design.
            </p>
            <p className="text-base text-white leading-relaxed">
              You work directly with us. No account managers, no project
              coordinators, no handoffs. We design it, we build it, we deploy
              it.
            </p>
            <p className="text-base text-white leading-relaxed">
              This means faster decisions, consistent quality, and no
              unnecessary meetings. We actually understand your business instead
              of playing telephone through project managers.
            </p>
            <p className="text-base text-white leading-relaxed">
              Perfect for growing businesses that need custom software but
              aren&apos;t ready to hire a full team. You get expert work,
              fast—without the overhead or long contracts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <h3 className="font-bold mb-2">Based in Germany</h3>
                <p className="text-sm text-white">
                  EU-based. CET timezone works with EU/US hours. GDPR-compliant.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Async-First Workflow</h3>
                <p className="text-sm text-white">
                  No mandatory meetings. Weekly updates on progress. We reply
                  within 48 hours.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Full Ownership</h3>
                <p className="text-sm text-white">
                  Delivered tested and working. You own the code, designs, and
                  docs. No lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
