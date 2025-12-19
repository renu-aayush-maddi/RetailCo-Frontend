// src/pages/ContactPage.jsx
import React, { useState } from "react";
import themePattern from "../assets/theme_pattern.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import call from "../assets/call_icon.svg";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "e5a82009-25cd-4e4f-96cb-50df703d0933");
      const payload = JSON.stringify(Object.fromEntries(formData));
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: payload
      }).then((r) => r.json());

      if (res?.success) {
        e.target.reset();
        setTimeout(() => alert("Message sent successfully!"), 120);
      } else {
        alert(res?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f7f9fb] dark:bg-[#0e1820] text-slate-900 dark:text-slate-100">
      {loading && (
        <div className="fixed inset-0 z-[100] grid place-items-center bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-4 rounded-2xl bg-white/80 px-6 py-5 shadow-xl ring-1 ring-white/50 dark:bg-slate-900/70 dark:ring-white/10">
            <div className="loader" style={{ ["--path"]: "#ffffff", ["--dot"]: "#1193d4" }}>
              <svg viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="32"></circle>
              </svg>
            </div>
            <div className="text-sm font-semibold text-slate-700 dark:text-slate-200">Sending…</div>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 -left-24 h-[32rem] w-[32rem] rounded-full bg-[#1193d4]/10 blur-3xl" />
          <div className="absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full bg-[#1193d4]/7 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
          <div className="text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Get in touch</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Have a project, idea, or question? Drop a message—I'm happy to help.
            </p>
            
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <aside className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-sm shadow-[0_14px_40px_rgba(2,8,20,.06),_0_4px_14px_rgba(2,8,20,.04)] p-6 sm:p-8 dark:border-white/10 dark:bg-white/5">
              <h2 className="text-2xl font-bold">Let’s talk</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                I’m currently working on Agentic AI and ML projects and open to collaboration.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1193d4]/10 text-[#1193d4]">
                    <img src={mail} alt="" className="h-5 w-5" />
                  </span>
                  <span>renuaayushm@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1193d4]/10 text-[#1193d4]">
                    <img src={call} alt="" className="h-5 w-5" />
                  </span>
                  <span>+91 9396763455</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1193d4]/10 text-[#1193d4]">
                    <img src={location} alt="" className="h-5 w-5" />
                  </span>
                  <span>Guntur, India</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">

  <a
    href="https://github.com/renu-aayush-maddi" // replace with your GitHub link
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-[#1193d4] hover:border-[#1193d4] transition dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
  >
    GitHub
  </a>
  <a
    href="https://www.linkedin.com/in/renu-aayush-maddi/" // replace with your LinkedIn profile
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-[#1193d4] hover:border-[#1193d4] transition dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
  >
    in
  </a>
  <a
    href="https://www.instagram.com/renu_aayush_14_02/" // replace with your Instagram handle
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-[#1193d4] hover:border-[#1193d4] transition dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
  >
    Instagram
  </a>
</div>

            </aside>

            <div className="rounded-2xl border border-white/60 bg-white/75 backdrop-blur-sm shadow-[0_14px_40px_rgba(2,8,20,.06),_0_4px_14px_rgba(2,8,20,.04)] p-6 sm:p-8 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-xl font-bold">Send a message</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">I usually reply within 1 hour.</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold">Name</label>
                  <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 transition focus-within:border-[#1193d4] focus-within:ring-4 focus-within:ring-[#1193d4]/15 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center gap-3">
                      <span className="i-tabler-user text-slate-400" />
                      <input
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full border-0 bg-transparent p-0 outline-none ring-0 focus:ring-0 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">E-mail</label>
                  <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 transition focus-within:border-[#1193d4] focus-within:ring-4 focus-within:ring-[#1193d4]/15 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center gap-3">
                      <span className="i-tabler-mail text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="w-full border-0 bg-transparent p-0 outline-none ring-0 focus:ring-0 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">Write your message here</label>
                  <div className="rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 transition focus-within:border-[#1193d4] focus-within:ring-4 focus-within:ring-[#1193d4]/15 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-start gap-3">
                      <span className="mt-2 i-tabler-message text-slate-400" />
                      <textarea
                        name="message"
                        rows={7}
                        required
                        placeholder="Enter your message"
                        className="min-h-[7rem] w-full resize-y border-0 bg-transparent p-0 outline-none ring-0 focus:ring-0 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`group w-full transform rounded-xl border border-[#1193d4]/60 bg-[#1193d4] from-[#1193d4] to-[#0f86c1] bg-gradient-to-b px-6 py-3.5 text-center text-sm font-bold text-white shadow-[0_12px_28px_rgba(17,147,212,.25),_inset_0_1px_0_rgba(255,255,255,.15)] transition ${
                    loading ? "opacity-80 cursor-not-allowed" : "hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0"
                  }`}
                >
                  {loading ? "Sending…" : "Submit Now"}
                </button>
              </form>
            </div>
          </div>

          <div className="h-16" />
        </div>
      </section>

      <style>{`
        .loader {
          --path: white;
          --dot: #f40af0;
          --duration: 3s;
          width: 44px;
          height: 44px;
          position: relative;
          display: inline-block;
        }
        .loader:before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          display: block;
          background: var(--dot);
          top: 37px;
          left: 19px;
          transform: translate(-18px, -18px);
          animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        .loader svg { display: block; width: 100%; height: 100%; }
        .loader svg rect, .loader svg polygon, .loader svg circle {
          fill: none; stroke: var(--path); stroke-width: 10px; stroke-linejoin: round; stroke-linecap: round;
        }
        .loader svg polygon {
          stroke-dasharray: 145 76 145 76; stroke-dashoffset: 0;
          animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        .loader svg rect {
          stroke-dasharray: 192 64 192 64; stroke-dashoffset: 0;
          animation: pathRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        .loader svg circle {
          stroke-dasharray: 150 50 150 50; stroke-dashoffset: 75;
          animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        .loader.triangle { width: 48px; }
        .loader.triangle:before {
          left: 21px; transform: translate(-10px, -18px);
          animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
        }
        @keyframes pathTriangle { 33% {stroke-dashoffset:74} 66% {stroke-dashoffset:147} 100% {stroke-dashoffset:221} }
        @keyframes dotTriangle { 33% {transform:translate(0,0)} 66% {transform:translate(10px,-18px)} 100% {transform:translate(-10px,-18px)} }
        @keyframes pathRect { 25% {stroke-dashoffset:64} 50% {stroke-dashoffset:128} 75% {stroke-dashoffset:192} 100% {stroke-dashoffset:256} }
        @keyframes dotRect { 25% {transform:translate(0,0)} 50% {transform:translate(18px,-18px)} 75% {transform:translate(0,-36px)} 100% {transform:translate(-18px,-18px)} }
        @keyframes pathCircle { 25% {stroke-dashoffset:125} 50% {stroke-dashoffset:175} 75% {stroke-dashoffset:225} 100% {stroke-dashoffset:275} }
      `}</style>
    </div>
  );
}
