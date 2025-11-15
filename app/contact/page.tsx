export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 ring-1 ring-slate-200 dark:ring-slate-800">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Contact Us
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
              We&apos;d love to hear from you! Whether you have a question, feedback, or a suggestion, 
              feel free to reach out to us.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Get in Touch
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-950/50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">General Inquiries</h3>
                      <a href="mailto:hello@techpulse.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        hello@techpulse.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950/50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Report an Issue</h3>
                      <a href="mailto:support@techpulse.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        support@techpulse.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Submit a Tool</h3>
                      <a href="mailto:submit@techpulse.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                        submit@techpulse.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-50 dark:bg-pink-950/50 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Business & Partnerships</h3>
                      <a href="mailto:business@techpulse.com" className="text-pink-600 dark:text-pink-400 hover:underline">
                        business@techpulse.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <details className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <summary className="font-semibold text-slate-900 dark:text-slate-100 cursor-pointer">
                    How often is content updated?
                  </summary>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Our AI-powered pipeline runs daily, bringing you fresh tech tool reviews and insights every day.
                  </p>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <summary className="font-semibold text-slate-900 dark:text-slate-100 cursor-pointer">
                    Can I submit my tool for review?
                  </summary>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Yes! Please email us at submit@techpulse.com with details about your tool, and we&apos;ll consider it for coverage.
                  </p>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <summary className="font-semibold text-slate-900 dark:text-slate-100 cursor-pointer">
                    Is TechPulse free to use?
                  </summary>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Absolutely! All our content is free to access. We&apos;re supported by advertisements to keep the service free for everyone.
                  </p>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <summary className="font-semibold text-slate-900 dark:text-slate-100 cursor-pointer">
                    How can I advertise on TechPulse?
                  </summary>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    For advertising opportunities, please reach out to business@techpulse.com and we&apos;ll discuss available options.
                  </p>
                </details>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Response Time
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We typically respond to all inquiries within 24-48 hours during business days. 
                Thank you for your patience!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
