export default function ServiceOverview() {
  return (
    <section className="text-white flex flex-col items-center w-full">
      <div className="flex flex-col justify-center items-center max-w-7xl">
        <h2 className="text-5xl sm:text-7xl font-bold text-center mb-10 ">
          Your Business, Elevated
        </h2>
        <p className="text-center mb-10 max-w-3xl">
          A specialized development service delivering custom solutions that
          eliminate friction and drive measurable results—without the overhead
          of traditional agencies.
        </p>
      </div>
      <div className="max-w-7xl pb-30">
        <div className="grid grid-cols-6 gap-4">
          <div></div>
          <div></div>
          <div></div>
          <div>
            <h3 className="font-bold mb-2">Integrated Design & Development</h3>
            <p className="text-sm">
              We don&apos;t separate design from development. Every solution we
              build combines technical implementation with user experience from
              day one, resulting in tools that work beautifully and get adopted
              by your team. Faster iterations, fewer revisions, seamless
              execution.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">
              Direct Communication, Zero Bureaucracy
            </h3>
            <p className="text-sm">
              We eliminate the markup and delays that come with account managers
              and project coordinators. You work directly with senior-level
              expertise, decisions happen fast, and our streamlined approach
              delivers 30-50% cost savings compared to traditional agencies.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Business Impact First</h3>
            <p className="text-sm">
              We measure success by ROI, not billable hours. Every
              recommendation considers your budget constraints, team size, and
              long-term maintainability. We build solutions that deliver
              tangible value—time saved, errors eliminated, operations
              scaled—without creating dependencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
