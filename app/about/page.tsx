export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 ring-1 ring-slate-200 dark:ring-slate-800">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
            About TechPulse
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Our Mission
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                TechPulse is your go-to source for discovering the latest and most innovative tools in the tech world. 
                We leverage advanced AI technology to curate and analyze cutting-edge tools across various categories including 
                AI, development, design, marketing, and productivity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                What We Do
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Every day, our AI-powered system:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li>Scans multiple tech platforms including Product Hunt, GitHub, Hacker News, and Dev.to</li>
                <li>Analyzes trending tools and technologies</li>
                <li>Generates comprehensive, easy-to-understand reviews</li>
                <li>Delivers fresh content to help you stay ahead of the curve</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Our Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-700 dark:text-blue-300">AI Tools</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Latest AI innovations</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-700 dark:text-green-300">No-Code</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Build without coding</p>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-indigo-700 dark:text-indigo-300">Developer Tools</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Dev productivity</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-700 dark:text-purple-300">Design Tools</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Creative solutions</p>
                </div>
                <div className="bg-pink-50 dark:bg-pink-950/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300">Marketing</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Growth tools</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-300">Productivity</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Work smarter</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Powered by Technology
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Our platform is built with:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2">
                <li><strong>Google Gemini AI</strong> - For intelligent content generation and analysis</li>
                <li><strong>Next.js</strong> - For a fast, modern web experience</li>
                <li><strong>Supabase</strong> - For reliable data management</li>
                <li><strong>Automated Pipeline</strong> - For daily content updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Why TechPulse?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Daily Updates</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Fresh content every day</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">AI-Powered</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Intelligent analysis and insights</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Comprehensive</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Detailed tool reviews</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Free Access</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">No subscription required</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Have suggestions or feedback? We&apos;d love to hear from you at:{' '}
                <a href="mailto:hello@techpulse.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  hello@techpulse.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
