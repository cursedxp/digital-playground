"use client";

const phases = [
  {
    number: "01",
    title: "Discover & Define",
    description:
      "Deep-dive consultation to understand your workflows and pain points. We identify what to build, define clear success metrics, and estimate ROI—so you know exactly what you're getting before we start.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "Design and development happen in parallel. You get working prototypes within days, production-ready solutions in weeks. Weekly video updates show real progress—no calendar-blocking status meetings.",
  },
  {
    number: "03",
    title: "Deploy & Optimize",
    description:
      "Launch, provide training, and monitor real usage. Then iterate based on actual data and feedback. Continuous improvement until it works exactly how you need it to.",
  },
];

export default function DeliveryProcess() {
  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20">
      <div className="flex max-w-7xl w-full flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1">
          <div className="flex flex-col">
            <p className="text-xl mt-4 max-w-sm">
              Async-first process designed for busy founders. We build while
              you run your business. Weekly progress updates you review on your
              time—no meetings disrupting your flow. Results in 1-2 weeks for
              tasks, 3 months for full projects.
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
            How It
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
