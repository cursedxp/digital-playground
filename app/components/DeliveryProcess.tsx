"use client";

const phases = [
  {
    number: "01",
    title: "Discover & Define",
    description:
      "We start with a deep-dive consultation to understand your business challenges, workflows, and goals. Together, we identify automation opportunities and define clear success metrics—so you know exactly what ROI to expect.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Our integrated team designs intuitive user experiences and builds robust solutions in parallel. You'll see progress through regular updates and working prototypes—without endless meetings or status calls.",
  },
  {
    number: "03",
    title: "Deploy & Optimize",
    description:
      "We launch your solution, train your team, and monitor performance against our success metrics. Then we iterate based on real usage data and feedback to maximize value and efficiency.",
  },
];

export default function DeliveryProcess() {
  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20">
      <div className="flex max-w-7xl w-full flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1">
          <div className="flex flex-col">
            <p className="text-xl mt-4 max-w-sm">
              Our streamlined process delivers measurable results in weeks, not
              months. No bureaucracy, no bloated teams—just focused expertise
              getting you to value faster.
            </p>
            <div className="hidden md:grid grid-cols-3 gap-4 mt-8 text-sm">
              {phases.map((phase, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="text-6xl md:text-7xl font-bold text-white/10 mb-2">
                    {phase.number}
                  </div>
                  <h3 className="font-semibold text-base">{phase.title}</h3>
                  <p className="text-white/70">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-right text-7xl font-bold">
            Fast, Focused
            <br />
            Delivery That
            <br />
            Works
          </h2>
        </div>
      </div>
      <div className="grid md:hidden px-8 gap-4 mt-8 text-sm max-w-7xl w-full">
        {phases.map((phase, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="text-6xl md:text-7xl font-bold text-white/10 mb-2">
              {phase.number}
            </div>
            <h3 className="font-semibold text-base">{phase.title}</h3>
            <p className="text-white/70">{phase.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
