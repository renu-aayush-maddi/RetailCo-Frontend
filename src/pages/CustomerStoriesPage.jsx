import React, { useEffect, useState } from "react";

export default function CustomerStoriesPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (exact code you supplied) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
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
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/usecases">Use Cases</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/story">Testimonials</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/pricing">Pricing</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button onClick={() => setDarkMode((d)=>!d)} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none">
                {darkMode ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"/></svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0020.354 15.354z"/></svg>
                )}
              </button>
              <a className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" href="/login">Log In</a>
              <a className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-primary hover:opacity-90 transition-opacity" href="/signup">SignUp</a>
            </div>
          </div>
        </div>
      </header>

      {/* Page content */}
      <main className="flex-grow pt-20">
        <section className="py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Customer Stories
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              See how our AI Sales Agent is transforming businesses just like yours.
            </p>
          </div>
        </section>

        <section className="pb-16 sm:pb-24 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Card 1 */}
              <div className="bg-white dark:bg-gray-800/20 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="w-full h-56 bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCkO-yhQJmdv4cfIru8fbrFzGhfd8XDAKYfAOvjZXs7le0ArHdNnUk09bckGksfTnRxEfUL4fNpf20mf7ATTbMrwZ9SgZ6JrobC-Z2eqTmUSKOSoXIH5AuNpTiVwuDie3N5gRolBz3cI7pbpKL5jCLCaSe0XdXfmXS4RpijbDLo2QERijzSpK14UPwZ2qWauc1G5li0r1fEqXU0mUyruQ1yDop_mdubbrv6Rosx3T-qJlZ0wnxU5_qAWpl4iLWG7WM4fkR-pC7rS6h")` }} />
                <div className="p-6 flex-grow flex flex-col">
                  <blockquote className="flex-grow">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      "The AI Sales Agent has transformed our customer interactions, leading to a 20% increase in average order value."
                    </p>
                  </blockquote>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Chen</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Head of Sales, Tech Innovators Inc.</p>
                  </footer>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-gray-800/20 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="w-full h-56 bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlqEnxS6-3gCs7muEC771wIKIxYJgDbeI30CCNsi2-D3YSs6cNXc3hSN40HbIODmXy9dHr8i6AF9izHV1qAS1RG8AQOw3K13L7nQlYd-Y5-6jW19jYChc70UoPtJaQ0Of-0cVVksDnQ1NXazIlehz8O_ydAAQzPJ_rqqCcLto4BFncs6hdZEqqe7DEGBZw1LyF_qIOilkbeqjss60yPaI_H-2THUMmQ5eRjenkh1dtGSD4iAx2GMGiUtihOKxcsqTFIpu2tGBXFQ_D")` }} />
                <div className="p-6 flex-grow flex flex-col">
                  <blockquote className="flex-grow">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      "Integrating the AI Sales Agent was seamless, and the results were immediate. Our conversion rates have jumped by 15%."
                    </p>
                  </blockquote>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">David Lee</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CEO, E-Commerce Solutions Ltd.</p>
                  </footer>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-gray-800/20 rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="w-full h-56 bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuC39My7gUMan4Ptbywjq4N8k6wcWnn8vlcLMFpXHw_Lkqwx0851dkYoPS5EXiFwbk1GVhVn0TevQeQ8j2OwdxUCK1T0jHk-UhoIlys0VRT1qOOcjmuudjHtjfty9PYNm-9p1rUqlu9HnPPGYboX7cX28EYRFOwNna8iNXd4ZhVX8x2A_l6DO4UoiPkiAbkuJ3p759DCOLldQBGpXHwT87jXq896O9R-NlYFTvn3hNYQAuEutc1lTvRaHBv-RXIHMLycM_-JCXTnwZMF")` }} />
                <div className="p-6 flex-grow flex flex-col">
                  <blockquote className="flex-grow">
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                      "The AI Sales Agent provides personalized shopping experiences at scale, enhancing customer satisfaction and loyalty."
                    </p>
                  </blockquote>
                  <footer className="mt-6">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Emily Wong</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Marketing Director, Retail Dynamics Co.</p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background-light dark:bg-gray-900/50 py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Join the growing number of businesses leveraging our AI Sales Agent to drive growth and enhance customer experiences.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-primary text-white font-bold text-base h-12 px-8 rounded-full hover:opacity-90 transition-opacity">Get Started</button>
              <button className="bg-primary/10 dark:bg-primary/20 text-primary font-bold text-base h-12 px-8 rounded-full hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">Learn More</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
