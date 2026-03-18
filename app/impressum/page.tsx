export default function Impressum() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Legal Notice</h1>

        <div className="space-y-6 text-white/80">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Information according to § 5 TMG
            </h2>
            <p>Digital Playground</p>
            <p>Meerbusch, Germany</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Email:{" "}
              <a
                href="mailto:hi@digitalplayground.com"
                className="text-white hover:underline"
              >
                hi@digitalplayground.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Responsible for content according to § 55 Abs. 2 RStV
            </h2>
            <p>Digital Playground</p>
            <p>Meerbusch, Germany</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Disclaimer
            </h2>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              Liability for Content
            </h3>
            <p className="mb-4">
              The contents of our pages were created with the greatest care.
              However, we cannot guarantee the accuracy, completeness and
              timeliness of the content. As a service provider, we are
              responsible for our own content on these pages in accordance with
              Section 7 (1) TMG under general law. According to §§ 8 to 10 TMG,
              however, we as a service provider are not obliged to monitor
              transmitted or stored third-party information or to investigate
              circumstances that indicate illegal activity.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              Liability for Links
            </h3>
            <p className="mb-4">
              Our website contains links to external third-party websites over
              whose content we have no influence. Therefore, we cannot assume
              any liability for this external content. The respective provider
              or operator of the pages is always responsible for the content of
              the linked pages.
            </p>

            <h3 className="text-xl font-semibold text-white mb-2 mt-4">
              Copyright
            </h3>
            <p>
              The content and works created by the site operators on these pages
              are subject to German copyright law. Duplication, processing,
              distribution and any kind of exploitation outside the limits of
              copyright law require the written consent of the respective author
              or creator.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
