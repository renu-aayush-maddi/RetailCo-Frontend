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



// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";

// export default function Signin() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const { login } = useAuth();

//   // keep your existing “toggle html.dark class” approach
//   useEffect(() => {
//     const root = document.documentElement;
//     if (darkMode) root.classList.add("dark");
//     else root.classList.remove("dark");
//   }, [darkMode]);

//   const submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const { data } = await api.post("/login", form);
//       if (data?.access_token) {
//         login(data.access_token); // sessionStorage used inside your store
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
//     <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">
//       {/* Header (your exact pattern) */}


//       {/* Main */}
//       <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 pt-28">
//         <div className="w-full max-w-md space-y-8 bg-white dark:bg-black/20 p-8 rounded-xl shadow-2xl">
//           <div>
//             <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900 dark:text-white">
//               Welcome back
//             </h2>
//             <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
//               Sign in to continue your journey
//             </p>
//           </div>

//           <form className="mt-8 space-y-6" onSubmit={submit}>
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="email" className="sr-only">Email address</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   placeholder="Email address"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-t-md"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">Password</label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   placeholder="Password"
//                   value={form.password}
//                   onChange={(e) => setForm({ ...form, password: e.target.value })}
//                   className="form-input appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-b-md"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 rounded bg-background-light dark:bg-background-dark"
//                 />
//                 <span className="ml-2 text-sm text-slate-900 dark:text-white">Remember me</span>
//               </label>

//               <a href="#" className="text-sm font-medium text-primary hover:text-primary/80">
//                 Forgot your password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 px-4 rounded-md text-white bg-primary hover:bg-primary/90 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
//             >
//               {loading ? "Logging in…" : "Log In"}
//             </button>
//           </form>

//           <div className="text-sm text-center">
//             <Link to="/signup" className="font-medium text-slate-600 dark:text-slate-400 hover:text-primary">
//               Don’t have an account? <span className="text-primary font-semibold">Sign up</span>
//             </Link>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import useAuth from "../store/useAuth";
import toast from "react-hot-toast";

export default function Signin() {
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

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
        login(data.access_token);
        toast.success("Login successful!");
        navigate("/chat");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      console.error(err);

      const msg =
        err?.response?.data?.detail ||
        "Invalid email or password. Please try again.";

      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-display">

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
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="form-input block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-primary focus:border-primary rounded-md"
              />

              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="form-input block w-full px-3 py-3 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:ring-primary focus:border-primary rounded-md"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-primary" />
                <span className="ml-2 text-sm text-slate-900 dark:text-white">
                  Remember me
                </span>
              </label>

              <a href="#" className="text-sm font-medium text-primary">
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
            <Link
              to="/signup"
              className="font-medium text-slate-600 dark:text-slate-400 hover:text-primary"
            >
              Don’t have an account?{" "}
              <span className="text-primary font-semibold">Sign up</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
