export default function WhoWeAre() {
  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20">
      <div className="flex max-w-7xl w-full flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1">
          <h2 className="text-7xl font-bold mb-8">
            Who We
            <br />
            Are
          </h2>
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-6">
            <p className="text-xl leading-relaxed">
              A boutique development studio based in Germany, specializing in
              full-stack web applications and UX design for B2B companies.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              Unlike traditional agencies, there's no communication overhead or
              delegation to multiple team members. You work directly with the developer
              who handles everything from UX design to production deployment.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              This approach means faster decision-making and iterations, consistent
              quality across all project phases, deep understanding of your business
              context, and no unnecessary meetings or coordination delays.
            </p>
            <p className="text-base text-white/70 leading-relaxed">
              Built for growing businesses that need custom software but aren't ready
              to hire a full development team. You get the expertise, speed, and
              flexibility you need—without the overhead, bureaucracy, or long-term
              commitments of traditional solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <h3 className="font-semibold mb-2">Based in Germany</h3>
                <p className="text-sm text-white/60">
                  EU-based operation. CET timezone (compatible with EU/US business hours).
                  GDPR-compliant data handling.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Async-First Workflow</h3>
                <p className="text-sm text-white/60">
                  No mandatory meetings. Weekly video updates you watch on your schedule.
                  Typical response time: within 48 hours.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Full Ownership</h3>
                <p className="text-sm text-white/60">
                  Every solution is delivered tested and working. You own the code,
                  designs, and documentation. No vendor lock-in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
