export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 ring-1 ring-slate-200 dark:ring-slate-800">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                By accessing and using TechPulse, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                2. Use License
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Permission is granted to temporarily access the materials (information or software) on TechPulse for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                3. Content and Accuracy
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                The materials on TechPulse are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, 
                and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                4. User Conduct
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit any harmful code or malware</li>
                <li>Engage in automated data collection without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                5. Third-Party Links
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                TechPulse may contain links to third-party websites or services that are not owned or controlled by us. 
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                In no event shall TechPulse or its suppliers be liable for any damages arising out of the use or inability to use 
                the materials on our website, even if we have been notified of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                7. Modifications
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the &quot;Last updated&quot; date. 
                Your continued use of the website following any changes indicates your acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                8. Contact Information
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                For any questions regarding these Terms of Service, please contact us at:{' '}
                <a href="mailto:legal@techpulse.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  legal@techpulse.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
