// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";

// export default function Signup() {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await api.post("/signup", form);
//       if (data?.access_token) {
//         login(data.access_token); // sessionStorage used inside
//         navigate("/chat");
//       } else {
//         alert("Signup failed");
//       }
//     } catch (err) {
//       console.error(err);
//       alert(err?.response?.data?.detail || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-6">
//       <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
//         <h2 className="text-2xl font-semibold mb-4">Create account</h2>
//         <form onSubmit={submit} className="space-y-4">
//           <input
//             required
//             placeholder="Full name"
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//             className="w-full border p-3 rounded"
//           />
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
//             {loading ? "Creating..." : "Create account"}
//           </button>
//         </form>

//         <p className="mt-4 text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600">
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }






// src/pages/Signup.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import useAuth from "../store/useAuth";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "", phone_number: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post("/signup", form);
      if (data?.access_token) {
        login(data.access_token);
        navigate("/chat");
      } else {
        alert("Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.detail || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Header — your real navbar */}
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
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Features</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/usecases">Use Cases</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/story">Testimonials</a>
              <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/pricing">Pricing</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode((d) => !d)}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"/></svg>
                ) : (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0020.354 15.354z"/></svg>
                )}
              </button>

              <a className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" href="/login">Log In</a>
              <a className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-primary hover:opacity-90 transition-opacity" href="#">Request Demo</a>
            </div>
          </div>
        </div>
      </header>

      {/* Form card */}
<main className="flex items-center justify-center min-h-screen pt-28 pb-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-background-dark/40 shadow-2xl/60 backdrop-blur-sm p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Join us to experience the future of retail.
          </p>
        </div>

              <form onSubmit={submit} className="space-y-5">
                <input
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone_number}
                  onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <input
                  required
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-primary"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-lg bg-primary text-white font-bold hover:opacity-90 transition-opacity"
                >
                  {loading ? "Creating..." : "Create account"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
