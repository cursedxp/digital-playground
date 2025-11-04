import BookCallButton from "./BookCallButton";

export default function ServicesDetailed() {
  const services = [
    {
      number: "01",
      title: "Custom Web Applications",
      description:
        "Tailored web solutions that address your specific business challenges. From internal dashboards to customer-facing platforms, we build applications that streamline operations and drive growth.",
    },
    {
      number: "02",
      title: "UX Design",
      description:
        "User-centered design that prioritizes clarity and efficiency. We create intuitive interfaces that your team will actually want to use, reducing training time and increasing adoption.",
    },
    {
      number: "03",
      title: "Workflow Optimization",
      description:
        "Analyze and improve your business processes through technology. We identify inefficiencies, eliminate bottlenecks, and implement solutions that streamline operations and reduce manual overhead.",
    },
    {
      number: "04",
      title: "System Integration",
      description:
        "Connect your disconnected tools and platforms into a unified ecosystem. We build seamless integrations that enable automatic data flow and provide centralized visibility across your operations.",
    },
  ];

  return (
    <section className="text-white flex flex-col items-center w-full relative mb-20">
      <div className="flex max-w-7xl flex-col sm:flex-row px-8 sm:px-0">
        <div className="flex-1">
          <h2 className="text-7xl font-bold">
            What We
            <br />
            Build
          </h2>
          <div className="mt-8">
            <BookCallButton />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <p className="text-xl mt-4 max-w-sm">
              Specialized development services designed to eliminate operational
              friction and accelerate business growth.
            </p>
            <div className="grid lg:grid-cols-3 gap-4 mt-8">
              {services.map((service) => (
                <div key={service.number}>
                  <span className="font-bold block mb-2 ">{service.title}</span>
                  <p className=" text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
