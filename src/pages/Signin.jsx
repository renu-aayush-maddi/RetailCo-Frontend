// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";

// export default function Signin() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await api.post("/login", form);
//       if (data?.access_token) {
//         login(data.access_token); // sessionStorage used inside
//         navigate("/chat");
//       } else {
//         alert("Login failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert(err?.response?.data?.detail || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
//         <h2 className="text-2xl font-semibold mb-4">Login</h2>
//         <form onSubmit={submit} className="space-y-4">
//           <input
//             required
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             className="w-full border p-3 rounded"
//           />
//           <input
//             required
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={(e) => setForm({ ...form, password: e.target.value })}
//             className="w-full border p-3 rounded"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[var(--brand-primary)] text-white py-3 rounded font-medium"
//           >
//             {loading ? "Loggingin...." : "Login"}
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-gray-600">
//           Don&apos;t have an account?{" "}
//           <Link to="/signup" className="text-blue-600">
//             Create one
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import useAuth from "../store/useAuth";

export default function Signin() {
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  // keep your existing “toggle html.dark class” approach
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/login", form);
      if (data?.access_token) {
        login(data.access_token); // sessionStorage used inside your store
        navigate("/chat");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.detail || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
      {/* Header (your exact pattern) */}
<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <svg className="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none">
          <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"/>
          <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263Z" fill="currentColor"/>
        </svg>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">RetailCo</h1>
      </div>

      {/* Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Features</a>
        <a href="/usecases" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Use Cases</a>
        <a href="/story" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Testimonials</a>
        <a href="/pricing" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">Pricing</a>
      </nav>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Dark mode toggle */}
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

        {/* CTA */}
        <a href="/signup" className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors">
          Sign Up
        </a>
      </div>
    </div>
  </div>
</header>


      {/* Main */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-28">
        <div className="w-full max-w-md space-y-8 bg-white dark:bg-black/20 p-8 rounded-xl shadow-2xl">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 dark:text-white">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
              Sign in to continue your journey
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={submit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-t-md"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-b-md"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 rounded bg-background-light dark:bg-background-dark"
                />
                <span className="ml-2 text-sm text-slate-900 dark:text-white">Remember me</span>
              </label>

              <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-md text-white bg-primary hover:bg-primary/90 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in…" : "Log In"}
            </button>
          </form>

          <div className="text-sm text-center">
            <Link to="/signup" className="font-medium text-slate-600 dark:text-slate-400 hover:text-primary">
              Don’t have an account? <span className="text-primary font-semibold">Sign up</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}


