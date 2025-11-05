export default function ServiceOverview() {
  return (
    <section className="text-white flex flex-col items-center w-full">
      <div className="flex flex-col justify-center items-center max-w-7xl px-8 sm:px-0">
        <h2 className="text-7xl sm:text-7xl font-bold text-center mb-10 ">
          Why Choose This Approach
        </h2>
        <p className="text-center mb-10 max-w-3xl ">
          A specialized development service delivering custom solutions that
          eliminate friction and drive measurable results—faster than hiring
          a full-time developer. Start with a small task to test our collaboration.
        </p>
      </div>
      <div className="max-w-7xl pb-30 px-8 sm:px-0">
        <div className="grid lg:grid-cols-3 lg:pl-[50%] md:grid-cols-3 sm:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold mb-2">Design & Development, Unified</h3>
            <p className="text-sm">
              You're not paying for a designer AND a developer who need to
              coordinate. We handle both—eliminating handoff delays,
              translation errors, and coordination overhead. What you see in the design
              is what gets built. Faster iterations, zero miscommunication,
              seamless execution.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">
              Built Around Your Schedule
            </h3>
            <p className="text-sm">
              Async-first workflow means we never block your calendar. Direct
              communication with the team handling your project—no account
              managers, no status meetings. Review progress updates and
              prototypes on your own time. Ship in weeks, not months.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Built for Real Business Outcomes</h3>
            <p className="text-sm">
              We measure success by impact, not billable hours. Every
              recommendation considers your budget constraints, team size, and
              long-term maintainability. We build solutions that deliver
              tangible results—eliminate manual errors, free your team from
              repetitive work, scale operations without adding headcount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
