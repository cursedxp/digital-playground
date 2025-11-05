export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-8 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Service Agreement</h2>
            <p>
              By subscribing to or purchasing services from Digital Playground, you agree to these Terms of Service.
              We provide custom web development, automation, and integration services on a subscription or project basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Subscription Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Task-Based Subscription</h3>
                <p>
                  $2,400/month subscription for ongoing development tasks. Billing begins when you purchase your first task.
                  After delivery (typically 1-2 weeks), the subscription continues automatically for ongoing monthly tasks.
                  You may cancel anytime with zero penalties. Cancellation takes effect at the end of the current billing cycle.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Project-Based Subscription</h3>
                <p>
                  $8,000/quarter subscription for full-scope custom applications. Projects are delivered over 3-month cycles.
                  You may cancel after each quarter. Cancellation takes effect at the end of the current quarter.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Custom Projects</h3>
                <p>
                  Complex projects with custom requirements are quoted after discovery. Payment is one-time via custom payment link.
                  No subscription applies to custom projects.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Payment Terms</h2>
            <p>
              All payments are processed through Stripe. Subscription billing is automatic. You will receive payment reminders
              before each renewal. Failed payments may result in service suspension until payment is resolved.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Cancellation & Refunds</h2>
            <p>
              You may cancel your subscription at any time through your Stripe customer portal. Cancellations take effect at
              the end of the current billing period. No refunds are provided for partial billing periods. If you cancel during
              an active task or project, work will continue until the end of the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Scope of Work</h2>
            <p>
              Each task or project includes a clear scope defined during discovery. The deliverable includes the working application,
              source code, design files, basic documentation, and a handoff session. You own all deliverables—there is no vendor lock-in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes After Delivery</h2>
            <p>
              If the delivered solution does not work as specified in the original scope, it will be fixed at no additional cost.
              If your needs evolve after delivery (new features, additional integrations, workflow changes), those are considered
              new tasks and will be priced separately starting at $2,400.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
            <p>
              Upon full payment, you own all code, designs, and documentation created for your project. We retain the right to
              use generic techniques, frameworks, and non-proprietary code in future projects. We will not share your proprietary
              business logic or data with other clients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Confidentiality</h2>
            <p>
              We treat all client information as confidential. We will not share your business data, workflows, or proprietary
              information with third parties without your explicit consent. NDAs are available upon request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Service Availability</h2>
            <p>
              We operate in CET timezone (UTC+1) with a typical response time of 48 hours for messages. We are not available 24/7.
              German public holidays may affect response times. Weekly progress updates are provided for all active projects.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Liability Limitations</h2>
            <p>
              We deliver tested, working solutions. However, we are not liable for business losses, revenue impacts, or
              third-party service failures beyond our control (e.g., API outages, hosting provider issues). Our liability
              is limited to the amount paid for the specific task or project in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Third-Party Services</h2>
            <p>
              Integrations may rely on third-party APIs and services (Stripe, HubSpot, Google Sheets, etc.). We are not
              responsible for changes, outages, or deprecations of third-party services. Additional costs for third-party
              subscriptions, API fees, or hosting are your responsibility unless explicitly stated otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Dispute Resolution</h2>
            <p>
              Any disputes will be resolved through good-faith negotiation. If resolution cannot be reached, disputes will
              be governed by German law and resolved in German courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms of Service. Changes will be communicated via email at least 30 days
              before taking effect. Continued use of services after changes indicates acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at:{" "}
              <a href="mailto:hi@digitalplayground.io" className="underline hover:text-white">
                hi@digitalplayground.io
              </a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-white/20 text-sm text-white/60">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
