import Footer from "@/app/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Privacy Policy</h1>
          <p className="text-gray-300 mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p>
              Digital Playground (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website, use our services, or interact with our Facebook application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 text-white/90">2.1 Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Submit inquiries through our contact form</li>
              <li>Request a consultation or service proposal</li>
              <li>Subscribe to our newsletter or download resources</li>
              <li>Communicate with us via email</li>
            </ul>
            <p className="mt-4">
              This information may include your name, email address, phone number, company name,
              business size, and details about your project or automation needs.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-white/90">2.2 Information from Facebook</h3>
            <p className="mb-4">
              If you use our Facebook application or sign in through Facebook, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your Facebook profile information (name, email, profile picture)</li>
              <li>Any additional permissions you grant to our Facebook app</li>
              <li>Information required to provide the specific functionality of our Facebook app</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-white/90">2.3 Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device,
              including information about your web browser, IP address, time zone, and pages you visit.
              We use privacy-focused analytics (Plausible Analytics) that doesn&apos;t collect personally identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
            <h3 className="text-xl font-semibold mb-3 text-white/90">3.1 Legal Basis for Processing</h3>
            <p className="mb-4">
              We process your personal information based on the following legal grounds:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consent:</strong> When you provide explicit consent for specific purposes (e.g., newsletter subscriptions)</li>
              <li><strong>Contract Performance:</strong> To fulfill our obligations in providing services you&apos;ve requested</li>
              <li><strong>Legitimate Interests:</strong> To improve our services and communicate relevant business information</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-white/90">3.2 Purposes of Use</h3>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide consultation services</li>
              <li>Deliver custom automation, integration, and web development solutions</li>
              <li>Provide and maintain our Facebook application functionality</li>
              <li>Understand your business needs and recommend appropriate solutions</li>
              <li>Communicate with you about projects, updates, and technical support</li>
              <li>Send you relevant resources, insights, and service updates (with your consent)</li>
              <li>Improve our website, services, and user experience</li>
              <li>Analyze website usage to enhance our offerings</li>
              <li>Comply with legal obligations and protect against fraud or security issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Sharing Your Information</h2>
            <p className="mb-4">
              We respect your privacy and limit data sharing. We may share your information only in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers such as email delivery services (Resend, SendGrid), hosting providers (Vercel), and analytics platforms (Plausible) who help us operate our website and deliver our services</li>
              <li><strong>Facebook Platform:</strong> When you use our Facebook application, certain information may be shared with Facebook according to their platform policies and the permissions you grant. We only request the minimum permissions necessary for our app functionality</li>
              <li><strong>Project Collaboration:</strong> When working on your project, we may share relevant information with tools and platforms necessary for development and integration work, always with your knowledge and consent</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests from authorities</li>
            </ul>
            <p className="mt-4">
              <strong>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information. However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Retention and Storage</h2>
            <p className="mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contact Form Data:</strong> Retained for up to 2 years after the last contact</li>
              <li><strong>Project Data:</strong> Retained for the duration of the project and up to 3 years after completion for support purposes</li>
              <li><strong>Newsletter Subscriptions:</strong> Retained until you unsubscribe</li>
              <li><strong>Analytics Data:</strong> Aggregated and anonymized data may be retained indefinitely for statistical purposes</li>
            </ul>
            <p className="mt-4">
              Your data is stored on secure servers provided by trusted hosting platforms (Vercel) with appropriate security measures in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to and receive a copy of your personal data</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete personal data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (right to be forgotten)</li>
              <li><strong>Restriction:</strong> Request restriction of processing of your personal data</li>
              <li><strong>Portability:</strong> Receive your personal data in a structured, commonly used format</li>
              <li><strong>Objection:</strong> Object to processing of your personal data for specific purposes</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at hi@digitalplayground.io. We will respond to your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use minimal, privacy-focused tracking on our website and applications:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Analytics:</strong> We use Plausible Analytics, a privacy-friendly analytics tool that doesn&apos;t use cookies and doesn&apos;t collect personally identifiable information</li>
              <li><strong>Essential Cookies:</strong> We may use essential cookies necessary for website functionality, such as session management for contact forms</li>
              <li><strong>Facebook Cookies:</strong> When you use our Facebook application, Facebook may set cookies according to their own privacy policy</li>
            </ul>
            <p className="mt-4">
              You can configure your browser to refuse cookies, though this may affect some website functionality.
              To manage cookies from Facebook, please refer to Facebook&apos;s privacy settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Third-Party Services</h2>
            <p className="mb-4">
              Our website and services may contain links to third-party websites or integrate with third-party services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Facebook:</strong> Our Facebook application operates within Facebook&apos;s platform and is subject to Facebook&apos;s Privacy Policy</li>
              <li><strong>Other Integration Platforms:</strong> We may integrate with various business tools and platforms as part of our service delivery</li>
            </ul>
            <p className="mt-4">
              We are not responsible for the privacy practices of third-party services. We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence.
              We ensure appropriate safeguards are in place to protect your personal information in accordance with this Privacy Policy
              and applicable data protection laws, including GDPR for EU residents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Children&apos;s Privacy</h2>
            <p>
              Our services are designed for businesses and are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If you become aware that
              someone under 18 has provided us with personal information, please contact us immediately at hi@digitalplayground.io.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time to reflect changes in our practices or legal requirements.
              We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              For significant changes, we may provide additional notice such as email notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2">
              <li><strong>Email:</strong> hi@digitalplayground.io</li>
              <li><strong>Address:</strong> Am Kapellengraben 49, 40670 Meerbusch, Germany</li>
            </ul>
          </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
