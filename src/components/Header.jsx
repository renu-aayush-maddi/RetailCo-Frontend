// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";

// export default function Header() {
//   const { darkMode, setDarkMode } = useTheme();
//   const link = ({ isActive }) =>
//     `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-slate-600 dark:text-slate-300"} hover:text-primary`;

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex items-center space-x-3">
//             <svg className="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none">
//               <path d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"/>
//               <path d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263Z" fill="currentColor"/>
//             </svg>
//             <h1 className="text-2xl font-bold text-slate-900 dark:text-white">RetailCo</h1>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <NavLink to="/" end className={link}>Home</NavLink>
//             <NavLink to="/usecases" className={link}>Use Cases</NavLink>
//             <NavLink to="/story" className={link}>Testimonials</NavLink>
//             <NavLink to="/pricing" className={link}>Pricing</NavLink>
//             <NavLink to="/contact" className={link}>Contact</NavLink>
//           </nav>

//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setDarkMode(d => !d)}
//               className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
//               aria-label="Toggle dark mode"
//             >
//               {darkMode ? (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                         d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"/>
//                 </svg>
//               ) : (
//                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//                         d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0020.354 15.354z"/>
//                 </svg>
//               )}
//             </button>
//             <NavLink to="/login" className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20">Log In</NavLink>
//             <NavLink to="/signup" className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-primary hover:opacity-90">Sign Up</NavLink>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { darkMode, setDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const link = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-sm font-medium transition-colors
     ${isActive ? "text-primary" : "text-slate-600 dark:text-slate-300"}
     hover:text-primary`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <svg className="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <path d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"/>
              <path d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263Z" fill="currentColor"/>
            </svg>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">RetailCo</h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" end className={link}>Home</NavLink>
            <NavLink to="/usecases" className={link}>Use Cases</NavLink>
            <NavLink to="/story" className={link}>Testimonials</NavLink>
            <NavLink to="/pricing" className={link}>Pricing</NavLink>
            <NavLink to="/contact" className={link}>Contact</NavLink>
          </nav>

          {/* Right actions (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(d => !d)}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0020.354 15.354z"/>
                </svg>
              )}
            </button>
            <NavLink to="/login" className="px-5 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20">Log In</NavLink>
            <NavLink to="/signup" className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-primary hover:opacity-90">Sign Up</NavLink>
          </div>

          {/* Hamburger (mobile) */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(d => !d)}
              className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"/>
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0020.354 15.354z"/>
                </svg>
              )}
            </button>
            <button
              onClick={() => setOpen(o => !o)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                // X icon
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out
          ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="mx-4 mt-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm shadow">
          <nav className="flex flex-col p-2">
            <NavLink to="/" end className={link}>Home</NavLink>
            <NavLink to="/usecases" className={link}>Use Cases</NavLink>
            <NavLink to="/story" className={link}>Testimonials</NavLink>
            <NavLink to="/pricing" className={link}>Pricing</NavLink>
            <NavLink to="/contact" className={link}>Contact</NavLink>
            <div className="mt-2 grid grid-cols-2 gap-2 p-2">
              <NavLink to="/login" className="text-center px-4 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20">Log In</NavLink>
              <NavLink to="/signup" className="text-center px-4 py-2.5 text-sm font-semibold rounded-lg text-white bg-primary hover:opacity-90">Sign Up</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
