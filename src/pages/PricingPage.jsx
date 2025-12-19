import React, { useEffect, useState } from "react";

export default function PricingPage() {
  const [darkMode, setDarkMode] = useState(true);

  // keep your existing “toggle html.dark class” approach
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  return (
    <div>
      {/* Header (your exact pattern) */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none">
                <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"/>
                <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263Z" fill="currentColor"/>
              </svg>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">RetailCo</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/">Home</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/#use-cases">Use Cases</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/story">Testimonials</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/pricing">Pricing</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(d => !d)}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              >
                {darkMode ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0020.354 15.354z"/>
                  </svg>
                )}
              </button>

              <a className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" href="/login">
                Log In
              </a>
              <a className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-primary hover:opacity-90 transition-opacity" href="/signup">
                Signup
              </a>
            </div>
          </div>
        </div>
      </header> */}

      {/* Pricing content */}
      <main className="pt-20 bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
        <section className="flex flex-1 justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            {/* Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Simple, transparent pricing
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Choose the plan that's right for your business. Start with a free trial and upgrade as you grow.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic */}
              <div className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark shadow-sm p-8">
                <div className="flex-grow">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Basic</h2>
                  <div className="mt-4 flex items-baseline gap-x-2">
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">$49</span>
                    <span className="text-base font-semibold text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-3">✅ Up to 1,000 conversations</li>
                    <li className="flex items-center gap-3">✅ Basic reporting</li>
                    <li className="flex items-center gap-3">✅ Email support</li>
                  </ul>
                </div>
                <a href="/commingsoon">
                <button className="mt-8 w-full flex items-center justify-center rounded-lg h-11 px-5 bg-primary/10 text-primary dark:bg-primary/20 text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                  Start Free Trial
                </button>
                </a>
              </div>

              {/* Pro */}
              <div className="relative flex flex-col rounded-xl border-2 border-primary bg-white dark:bg-background-dark shadow-lg p-8">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Pro</h2>
                  <div className="mt-4 flex items-baseline gap-x-2">
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">$99</span>
                    <span className="text-base font-semibold text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-3">✅ Unlimited conversations</li>
                    <li className="flex items-center gap-3">✅ Advanced reporting</li>
                    <li className="flex items-center gap-3">✅ Priority support</li>
                    <li className="flex items-center gap-3">✅ Custom integrations</li>
                  </ul>
                </div>
                <a href="/commingsoon">
                <button className="mt-8 w-full flex items-center justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                  Start Free Trial
                </button>
                </a>
              </div>

              {/* Enterprise */}
              <div className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark shadow-sm p-8">
                <div className="flex-grow">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">Enterprise</h2>
                  <p className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Contact Us</p>
                  <ul className="mt-8 space-y-4 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-3">✅ Custom pricing</li>
                    <li className="flex items-center gap-3">✅ Dedicated account manager</li>
                    <li className="flex items-center gap-3">✅ White-glove onboarding</li>
                    <li className="flex items-center gap-3">✅ 24/7 support</li>
                  </ul>
                </div>
<a href="/commingsoon">
  <button className="mt-8 w-full flex items-center justify-center rounded-lg h-11 px-5 bg-primary/10 text-primary dark:bg-primary/20 text-sm font-bold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
    Contact Sales
  </button>
</a>

              </div>
            </div>

            {/* FAQ */}
            <div className="mt-20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 transition-all duration-300" open>
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-gray-900 dark:text-white list-none">
                    What is the free trial period?
                    <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    Our free trial lasts for 14 days. You'll have access to all the features of the Pro plan during this time.
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-gray-900 dark:text-white list-none">
                    What payment methods do you accept?
                    <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    We accept all major credit cards, including Visa, Mastercard, and American Express. We also support PayPal.
                  </p>
                </details>

                <details className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark p-6 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-gray-900 dark:text-white list-none">
                    Can I change my plan later?
                    <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes will be prorated.
                  </p>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-20 text-center bg-primary/10 dark:bg-primary/20 rounded-xl p-10 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Sign up for a free trial and experience the power of our AI Conversational Sales Agent.
              </p>
              <div className="mt-8">
                <button className="inline-flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200/80 dark:border-gray-700/80 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col items-center justify-between md:flex-row gap-8">
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Terms of Service</a>
                <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Privacy Policy</a>
                <a className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary" href="#">Contact Us</a>
              </nav>
              <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 RetailCo. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
