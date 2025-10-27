import { Link2, Code, Palette, Lightbulb, Workflow } from 'lucide-react';

export default function Services() {
  return (
    <section className="text-white flex flex-col items-center w-full">
      <div className="flex flex-col justify-center items-center max-w-7xl">
        <h2 className="text-5xl sm:text-7xl font-bold text-center mb-10">
          Services That Drive Results
        </h2>
        <p className="text-center mb-10 max-w-3xl">
          From seamless integrations to custom development, we deliver solutions that
          eliminate bottlenecks and help your business scale efficiently
        </p>
      </div>
      <div className="max-w-7xl pb-20 ">
        <div className="grid grid-cols-5 gap-8">
          <div className="border-r border-dashed border-white/30 pr-4 min-h-[300px] flex flex-col justify-center hover:bg-white/5 transition-colors duration-300 px-4 -mx-4">
            <Link2 className="w-6 h-6 mb-3" />
            <h3 className="font-bold mb-2">System Integration</h3>
            <p className="text-sm">
              Connect disconnected tools into a unified ecosystem. Seamless
              data synchronization across platforms eliminates duplicate entry
              and version control issues while providing centralized visibility
              across all operations.
            </p>
          </div>

          <div className="border-r border-dashed border-white/30 pr-4 min-h-[300px] flex flex-col justify-center hover:bg-white/5 transition-colors duration-300 px-4 -mx-4">
            <Code className="w-6 h-6 mb-3" />
            <h3 className="font-bold mb-2">Custom Web Development</h3>
            <p className="text-sm">
              Tailored web applications designed for your specific workflows.
              Internal dashboards, client portals, and custom interfaces built
              with modern full-stack development and responsive design for all
              devices.
            </p>
          </div>

          <div className="border-r border-dashed border-white/30 pr-4 min-h-[300px] flex flex-col justify-center hover:bg-white/5 transition-colors duration-300 px-4 -mx-4">
            <Palette className="w-6 h-6 mb-3" />
            <h3 className="font-bold mb-2">UX-Driven Design</h3>
            <p className="text-sm">
              Intuitive interfaces that your team will actually want to use.
              Professional user experience expertise ensures high adoption rates
              from day one with efficient workflows that boost productivity and
              beautiful, polished interfaces.
            </p>
          </div>

          <div className="border-r border-dashed border-white/30 pr-4 min-h-[300px] flex flex-col justify-center hover:bg-white/5 transition-colors duration-300 px-4 -mx-4">
            <Lightbulb className="w-6 h-6 mb-3" />
            <h3 className="font-bold mb-2">Business Intelligence</h3>
            <p className="text-sm">
              Transform your data into actionable insights. Custom dashboards
              and data visualization tools that provide real-time visibility
              into your operations, helping you make informed decisions and
              track key performance metrics across your business.
            </p>
          </div>

          <div className="min-h-[300px] flex flex-col justify-center hover:bg-white/5 transition-colors duration-300 px-4 -mx-4">
            <Workflow className="w-6 h-6 mb-3" />
            <h3 className="font-bold mb-2">Workflow Optimization</h3>
            <p className="text-sm">
              Eliminate repetitive manual tasks and free your team to focus on
              growth. Reduce time spent on data entry by 70-90% with intelligent
              workflows for routine communications, streamlined file management,
              and custom scripts for complex business logic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
