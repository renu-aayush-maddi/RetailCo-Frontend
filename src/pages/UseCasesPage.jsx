import React, { useEffect, useState } from "react";

export default function UseCasesPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  return (
    <div>
      {/* Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            <div className="flex items-center space-x-3">
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                />
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263Z"
                  fill="currentColor"
                />
              </svg>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                RetailCo
              </h1>
            </div>

            
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
               Home
              </a>
              <a
                href="/usecases"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Use Cases
              </a>
              <a
                href="/story"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Testimonials
              </a>
              <a
                href="/pricing"
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              >
                Pricing
              </a>
            </nav>

            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode((d) => !d)}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              >
                {darkMode ? (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0020.354 15.354z"
                    />
                  </svg>
                )}
              </button>

              <a
                href="/login"
                className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-primary hover:opacity-90 transition-opacity"
              >
                SignUp
              </a>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="pt-20 bg-background-light dark:bg-background-dark">
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-12">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tighter text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                AI Sales Agent Use Cases
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                Explore how our AI Sales Agent can transform your retail
                experience, driving higher average order values and conversion
                rates across all channels.
              </p>
            </div>

            {/* Use Case Cards */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Personalized Shopping",
                  desc: "Provide tailored product recommendations and styling advice based on individual customer preferences.",
                },
                {
                  title: "Unified Customer Profiles",
                  desc: "Access comprehensive customer data across online and physical stores for a seamless shopping experience.",
                },
                {
                  title: "Real-Time Engagement",
                  desc: "Engage with customers instantly through live chat, offering immediate support and guidance.",
                },
                {
                  title: "Increased Average Order Value",
                  desc: "Boost sales by suggesting complementary items and exclusive offers, maximizing each transaction's value.",
                },
                {
                  title: "24/7 Availability",
                  desc: "Offer continuous support and sales assistance, ensuring customers can shop and receive help anytime, anywhere.",
                },
                {
                  title: "Enhanced Security",
                  desc: "Ensure secure and private interactions, protecting customer data and maintaining trust.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/50 dark:hover:shadow-primary/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="text-lg font-bold">★</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-3xl">
                  Key Features
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Intelligent Recommendations",
                  "Cross-Channel Integration",
                  "Data Privacy",
                  "Performance Analytics",
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 rounded-xl p-4 text-center"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {feature}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
