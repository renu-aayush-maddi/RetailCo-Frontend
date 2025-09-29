import React, { useEffect, useState } from "react";

export default function ComingSoonPage() {
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
      <main className="flex-grow pt-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero image */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="h-80 w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1kkXPUFkq9ZvjJtra6DpECUoOWEUAkIdJxADgJcJqMyY4vkVe_-KaNmjUGCbFVf9nlsQDJggbvBYeOvtL4MPxttY50EOFgoQ-NV8L_-rzGg2OEU_rt5ObkX7suUxXK8vCXmxzZcsjgzFi8gLhAo7RxBvuoylXNRA0xzcI218ZpwEq3VHw0JL6iZ3WZejUjBwkgu138Pw_H7OCZSOvkKaKp5LPB-xSdT5pxHijeXuHmASKvacHMpPm33yCXi7EewcAo3H1cQ5B0t3w')",
              }}
            />
          </div>

          {/* Copy + progress */}
          <div className="w-full max-w-md mx-auto text-center mt-8">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Coming Soon
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              We're working on something amazing and can't wait to share it with you. Stay tuned!
            </p>

            <div className="mt-8 w-full">
              <div className="flex justify-between text-sm font-medium text-zinc-600 dark:text-zinc-400">
                <p>Almost there...</p>
                <p>75%</p>
              </div>
              <div className="mt-1 h-2 w-full rounded-full bg-primary/20 dark:bg-primary/30">
                <div className="h-full rounded-full bg-primary" style={{ width: "75%" }} />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-input w-full rounded-lg border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:ring-primary dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder:text-zinc-500"
              />
              <button className="flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white transition-colors hover:bg-primary/90">
                Notify Me
              </button>
            </div>

            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
              Follow us on social media for updates
            </p>
            <div className="mt-4 flex justify-center gap-4">
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 hover:bg-primary/20 hover:text-primary dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-primary/30 dark:hover:text-primary transition-colors" href="#">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/></svg>
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 hover:bg-primary/20 hover:text-primary dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-primary/30 dark:hover:text-primary transition-colors" href="#">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/></svg>
              </a>
              <a className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-600 hover:bg-primary/20 hover:text-primary dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-primary/30 dark:hover:text-primary transition-colors" href="#">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M8.5,18H6.5V12H8.5V18M7.5,10.5A1.5,1.5 0 0,1 6,9A1.5,1.5 0 0,1 7.5,7.5A1.5,1.5 0 0,1 9,9A1.5,1.5 0 0,1 7.5,10.5M17.5,18H15.5V13.5C15.5,12.55 15.17,11.9 14.25,11.9C13.25,11.9 12.5,12.63 12.5,13.5V18H10.5V12H12.5V13C13,12.44 13.78,11.75 14.9,11.75C16.5,11.75 17.5,12.83 17.5,14.75V18Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
