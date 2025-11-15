export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 ring-1 ring-slate-200 dark:ring-slate-800">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            Disclaimer
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Website Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                The information provided by TechPulse (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on techpulsse.netlify.app (the &quot;Site&quot;) 
                is for general informational purposes only. All information on the Site is provided in good faith, however we make no 
                representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, 
                availability, or completeness of any information on the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                AI-Generated Content
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Content on TechPulse is generated using advanced artificial intelligence technology (Google Gemini AI). 
                While we strive for accuracy, AI-generated content may contain errors or outdated information.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                We recommend verifying any critical information from the original sources linked in each article before 
                making business or technical decisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                External Links Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                The Site may contain links to external websites that are not provided or maintained by us. Please note that we do not 
                guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Affiliate Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                TechPulse may contain affiliate links or advertisements. We may receive compensation when you click on links 
                to products or services. However, this does not influence our content or opinions. We only recommend products 
                and services that we believe provide value to our readers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Professional Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                The content on TechPulse is not intended as professional advice. It is meant for informational and educational 
                purposes only. Always seek the advice of qualified professionals with any questions you may have regarding 
                software, hardware, or technical implementations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Errors and Omissions Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                While we have made every attempt to ensure that the information contained in this site has been obtained from 
                reliable sources, TechPulse is not responsible for any errors or omissions or for the results obtained from 
                the use of this information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Fair Use Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                This site may contain copyrighted material, the use of which has not always been specifically authorized by 
                the copyright owner. We believe this constitutes &apos;fair use&apos; of any such copyrighted material as provided 
                for in section 107 of the US Copyright Law. If you wish to use copyrighted material from this site for purposes 
                of your own that go beyond &apos;fair use&apos;, you must obtain permission from the copyright owner.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Changes to This Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                We may update this Disclaimer from time to time. We will notify you of any changes by updating the 
                &quot;Last updated&quot; date at the top of this Disclaimer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                If you have any questions about this Disclaimer, please contact us at:{' '}
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
