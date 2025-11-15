export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 ring-1 ring-slate-200 dark:ring-slate-800">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                TechPulse collects minimal information to provide you with the best experience:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Usage data (pages visited, time spent on site)</li>
                <li>Device information (browser type, operating system)</li>
                <li>Cookies for analytics and advertising purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Improve our content and user experience</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Display relevant advertisements</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                3. Cookies and Tracking
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                4. Third-Party Services
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We may employ third-party companies and services:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Analytics providers (Google Analytics)</li>
                <li>Advertising networks (Monetag)</li>
                <li>Content delivery networks</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                5. Data Security
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                We value your trust in providing us your information and strive to use commercially acceptable means of protecting it. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                6. Your Rights
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                7. Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:privacy@techpulse.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  privacy@techpulse.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
