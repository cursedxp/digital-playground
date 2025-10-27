export default function Features() {
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
      <div className="flex max-w-7xl w-full">
        <div className="flex-1">
          <div className="flex flex-col">
            <p className="text-xl mt-4 max-w-sm">
              Growth is easy until you take it for granted. We help growing
              companies keep growing.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8 text-sm">
              <p>
                As businesses scale, they hit the same ceiling: workflows break,
                systems don&apos;t talk to each other, and teams drown in manual
                work. The instinct is to throw more tools at the problem or hire
                another person to patch the gaps.
              </p>
              <p>
                Whether you&apos;re a 25-person operation outgrowing
                spreadsheets, a 100-person company juggling disconnected
                platforms, or an established business stuck on legacy systems,
                sustaining growth without proportional headcount is the real
                challenge.
              </p>
              <p>
                We help companies extend their growth phase by turning
                operational friction into automated efficiency. Not just
                building software, but eliminating the bottlenecks that limit
                what&apos;s possible. We transform your most time-consuming
                processes into competitive advantages.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-right text-7xl font-bold ">
            The
            <br /> Complency
            <br /> Curve
          </h2>
        </div>
      </div>
      <div className="max-w-7xl w-full mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1044 419">
          <path
            stroke="#383838"
            strokeLinecap="round"
            strokeWidth="30"
            d="M 50 300 Q 300 400, 500 130 T 1000 250"
          ></path>

          <line
            x1="200"
            y1="380"
            x2="200"
            y2="450"
            stroke="#666"
            strokeWidth="2"
          />
          <line
            x1="450"
            y1="150"
            x2="450"
            y2="450"
            stroke="#666"
            strokeWidth="2"
          />
          <line
            x1="750"
            y1="250"
            x2="750"
            y2="450"
            stroke="#666"
            strokeWidth="2"
          />
          <circle cx="200" cy="380" r="8" fill="#666" />
          <circle cx="450" cy="150" r="8" fill="#ff6b35" />
          <circle cx="750" cy="250" r="8" fill="#666" />
        </svg>
      </div>
    </section>
  );
}
