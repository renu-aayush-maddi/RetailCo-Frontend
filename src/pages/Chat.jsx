// import React from "react";

// export default function Chat() {
//   return (
//     <div className="flex h-screen w-full">
//       <aside className="w-80 flex-shrink-0 bg-[var(--sidebar-light)] dark:bg-[var(--sidebar-dark)] border-r border-[var(--border-light)] dark:border-[var(--border-dark)] flex flex-col p-4">
//         <div className="flex-grow">
//           <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[var(--brand-primary)] text-white dark:bg-[var(--brand-primary-dark)] dark:text-black rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
//             <svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
//             New Conversation
//           </button>

//           <nav className="mt-8 space-y-2">
//             <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)] dark:bg-[var(--brand-secondary-dark)]" href="#">
//               <div className="flex items-center gap-3">
//                 <svg className="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
//                 <span className="text-sm font-medium">Summer Outfit Search</span>
//               </div>
//               <span className="text-xs text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]">Today</span>
//             </a>

//             <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[var(--brand-secondary-light)] dark:hover:bg-[var(--brand-secondary-dark)]" href="#">
//               <div className="flex items-center gap-3">
//                 <svg className="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
//                 <span className="text-sm font-medium text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] group-hover:text-[var(--text-light-primary)] dark:group-hover:text-[var(--text-dark-primary)]">Formal Wear Ideas</span>
//               </div>
//               <span className="text-xs text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]">Yesterday</span>
//             </a>
//           </nav>
//         </div>

//         <div className="border-t border-[var(--border-light)] dark:border-[var(--border-dark)] pt-4 space-y-1">
//           <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] hover:bg-[var(--brand-secondary-light)] dark:hover:bg-[var(--brand-secondary-dark)] hover:text-[var(--text-light-primary)] dark:hover:text-[var(--text-dark-primary)]" href="#">
//             <svg className="lucide lucide-user-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
//             Profile
//           </a>

//           <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] hover:bg-[var(--brand-secondary-light)] dark:hover:bg-[var(--brand-secondary-dark)] hover:text-[var(--text-light-primary)] dark:hover:text-[var(--text-dark-primary)]" href="#">
//             <svg className="lucide lucide-log-out" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
//             Sign Out
//           </a>
//         </div>
//       </aside>

//       <main className="flex-1 flex flex-col">
//         <header className="flex-shrink-0 flex items-center h-[73px] px-8 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
//           <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
//         </header>

//         <div className="flex-1 overflow-y-auto p-8">
//           <div className="max-w-3xl mx-auto space-y-8">
//             <div className="flex items-start gap-4">
//               <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] dark:bg-[var(--ai-bubble-dark)] flex items-center justify-center shrink-0">
//                 <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
//               </div>
//               <div className="bg-[var(--ai-bubble-light)] dark:bg-[var(--ai-bubble-dark)] px-4 py-3 rounded-xl rounded-tl-none">
//                 <p className="text-sm leading-relaxed">Hi there! I'm your personal shopping assistant. How can I help you find the perfect outfit today?</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 justify-end">
//               <div className="bg-[var(--user-bubble-light)] dark:bg-[var(--user-bubble-dark)] text-[var(--user-bubble-text-light)] dark:text-[var(--user-bubble-text-dark)] px-4 py-3 rounded-xl rounded-br-none">
//                 <p className="text-sm leading-relaxed">I'm looking for a stylish summer outfit for a beach vacation.</p>
//               </div>
//             </div>

//             <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]">
//               <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
//               </svg>
//               <span>Inventory Agent checking stock…</span>
//             </div>

//             <div className="flex items-start gap-4">
//               <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] dark:bg-[var(--ai-bubble-dark)] flex items-center justify-center shrink-0">
//                 <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
//               </div>

//               <div className="flex flex-col gap-4 w-full">
//                 <div className="bg-[var(--ai-bubble-light)] dark:bg-[var(--ai-bubble-dark)] px-4 py-3 rounded-xl rounded-tl-none self-start">
//                   <p className="text-sm leading-relaxed">I found some great options for you:</p>
//                 </div>

//                 <div className="bg-white dark:bg-[var(--background-dark)] border border-[var(--border-light)] dark:border-[var(--border-dark)] p-4 rounded-xl flex items-center gap-4 max-w-md">
//                   <img alt="Light Blue Linen Shirt" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD4E7F1QClxuhdYHwX9rt9RaXy-PFSn_icHJUyRoSTg_G7wo0WA32eGipsxFbRPKEifnn7HllGXwCYpudt8m7mg2QapkcIaXZlD8TwlEmoIoGUe-zAPBnBaKyNlKrEGm9RxEnBmx_LhbtO5uWFFaoOhQVC3HJyut-Bzw0QOxDd2JrfuozFZ_YELqqOsipJtT8wivXA0X6Al07Y0V9ABRGZIS7j2LoDBy-dgFQM4xLTf8vNWDUdVNvtagnuNt1n7fyadvpl-JcBIpjf"/>
//                   <div className="flex-grow">
//                     <h3 className="font-bold text-sm">Light Blue Linen Shirt</h3>
//                     <p className="text-lg font-bold mt-1">$79.99</p>
//                   </div>
//                   <button className="flex-shrink-0 px-4 py-2 bg-[var(--brand-primary)] text-white dark:bg-[var(--brand-primary-dark)] dark:text-black rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">Add to Cart</button>
//                 </div>

//                 <div className="bg-white dark:bg-[var(--background-dark)] border border-[var(--border-light)] dark:border-[var(--border-dark)] p-4 rounded-xl flex items-center gap-4 max-w-md">
//                   <img alt="Beige Chino Shorts" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMLPwgiRevsYx584Rp-gYYpmYwLOVj_BYRD74NsC-5VdV14IdWwjTZqww0VO3yXULrR6i2rpShfXRpwCTfku9hafeKkKtX6p-ktBD41VJ7JNGQgySFG1lyHxNaQfYkri2yyKSiqe7pf7KXj74fGuhq_SryzL28pttrZx9B_fJqZKhrwnNbsOBjDs6jWPE00h_XOGEdrqNeMwRg29Gva0PumqXpqNgDR6tGnQxXYDrA4-kiP4CPtaBQjzVvdGpkVp2xzrqT-Sbp9qE0"/>
//                   <div className="flex-grow">
//                     <h3 className="font-bold text-sm">Beige Chino Shorts</h3>
//                     <p className="text-lg font-bold mt-1">$59.99</p>
//                   </div>
//                   <button className="flex-shrink-0 px-4 py-2 bg-[var(--brand-primary)] text-white dark:bg-[var(--brand-primary-dark)] dark:text-black rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex-shrink-0 p-4 bg-[var(--background-light)] dark:bg-[var(--background-dark)] border-t border-[var(--border-light)] dark:border-[var(--border-dark)]">
//           <div className="max-w-3xl mx-auto">
//             <div className="relative flex items-center">
//               <button className="absolute left-3 text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] hover:text-[var(--text-light-primary)] dark:hover:text-[var(--text-dark-primary)]">
//                 <svg className="lucide lucide-mic" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
//               </button>
//               <input className="w-full bg-[var(--brand-secondary-light)] dark:bg-[var(--brand-secondary-dark)] border-transparent rounded-lg py-3 pl-12 pr-28 text-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--background-light)] dark:focus:ring-offset-[var(--background-dark)] focus:ring-[var(--brand-primary)] dark:focus:ring-[var(--brand-primary-dark)] focus:outline-none placeholder:text-[var(--text-light-secondary)] dark:placeholder:text-[var(--text-dark-secondary)]" placeholder="Type your message..." type="text"/>
//               <div className="absolute right-3 flex items-center gap-3">
//                 <button className="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] hover:text-[var(--text-light-primary)] dark:hover:text-[var(--text-dark-primary)]">
//                   <svg className="lucide lucide-smile" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
//                 </button>

//                 <button className="bg-[var(--brand-primary)] text-white dark:bg-[var(--brand-primary-dark)] dark:text-black rounded-md w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity">
//                   <svg className="lucide lucide-send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }


import React from "react";
import "./chat.css"; // variables + a couple helpers (below)

export default function ChatPage() {
  return (
    <div className="min-h-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <aside className="w-80 flex-shrink-0 bg-[var(--sidebar-light)] dark:bg-[var(--sidebar-dark)] border-r border-[var(--border-light)] dark:border-[var(--border-dark)] flex flex-col p-4">
          <div className="flex-grow">
            <button
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[var(--brand-primary)] text-white dark:bg-[var(--brand-primary-dark)] dark:text-black rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M12 5v14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              New Conversation
            </button>

            <nav className="mt-8 space-y-2">
              <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)] dark:bg-[var(--brand-secondary-dark)]" href="#">
                <div className="flex items-center gap-3">
                  <svg className="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="text-sm font-medium">Summer Outfit Search</span>
                </div>
                <span className="text-xs text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]">Today</span>
              </a>

              <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-[var(--brand-secondary-light)] dark:hover:bg-[var(--brand-secondary-dark)]" href="#">
                <div className="flex items-center gap-3">
                  <svg className="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <span className="text-sm font-medium text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] group-hover:text-[var(--text-light-primary)] dark:group-hover:text-[var(--text-dark-primary)]">Formal Wear Ideas</span>
                </div>
                <span className="text-xs text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]">Yesterday</span>
              </a>
            </nav>
          </div>

          <div className="border-t border-[var(--border-light)] dark:border-[var(--border-dark)] pt-4 space-y-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] hover:bg-[var(--brand-secondary-light)] dark:hover:bg-[var(--brand-secondary-dark)] hover:text-[var(--text-light-primary)] dark:hover:text-[var(--text-dark-primary)]" href="#">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 20a6 6 0 0 0-12 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <circle cx="12" cy="10" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle>
              </svg>
              Profile
            </a>

            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] hover:bg-[var(--brand-secondary-light)] dark:hover:bg-[var(--brand-secondary-dark)] hover:text-[var(--text-light-primary)] dark:hover:text-[var(--text-dark-primary)]" href="#">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                <polyline points="16 17 21 12 16 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></polyline>
                <line x1="21" x2="9" y1="12" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
              </svg>
              Sign Out
            </a>
          </div>
        </aside>

        {/* Main chat area */}
        <main className="flex-1 flex flex-col">
          <header className="flex-shrink-0 flex items-center h-[73px] px-8 border-b border-[var(--border-light)] dark:border-[var(--border-dark)]">
            <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
          </header>

          {/* messages */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-3xl mx-auto space-y-8">

              {/* AI message */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] dark:bg-[var(--ai-bubble-dark)] flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 8V4H8" strokeWidth="2"></path><rect x="4" y="8" width="16" height="12" rx="2" strokeWidth="2"></rect></svg>
                </div>
                <div className="bg-[var(--ai-bubble-light)] dark:bg-[var(--ai-bubble-dark)] px-4 py-3 rounded-xl rounded-tl-none">
                  <p className="text-sm leading-relaxed">Hi there! I'm your personal shopping assistant. How can I help you find the perfect outfit today?</p>
                </div>
              </div>

              {/* user message */}
              <div className="flex items-start gap-4 justify-end">
                <div className="bg-[var(--user-bubble-light)] dark:bg-[var(--user-bubble-dark)] text-[var(--user-bubble-text-light)] dark:text-[var(--user-bubble-text-dark)] px-4 py-3 rounded-xl rounded-br-none max-w-lg">
                  <p className="text-sm leading-relaxed">I'm looking for a stylish summer outfit for a beach vacation.</p>
                </div>
              </div>

              {/* status */}
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)]">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle>
                  <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
                </svg>
                <span>Inventory Agent checking stock…</span>
              </div>

              {/* AI found items */}
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] dark:bg-[var(--ai-bubble-dark)] flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 8V4H8" strokeWidth="2"></path><rect x="4" y="8" width="16" height="12" rx="2" strokeWidth="2"></rect></svg>
                </div>

                <div className="flex flex-col gap-4 w-full">
                  <div className="bg-[var(--ai-bubble-light)] dark:bg-[var(--ai-bubble-dark)] px-4 py-3 rounded-xl rounded-tl-none self-start max-w-2xl">
                    <p className="text-sm leading-relaxed">I found some great options for you:</p>
                  </div>

                  <div className="bg-white dark:bg-[var(--background-dark)] border border-[var(--border-light)] dark:border-[var(--border-dark)] p-4 rounded-xl flex items-center gap-4 max-w-md">
                    <img alt="Light Blue Linen Shirt" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBD4E7F1QClxuhdYHwX9rt9RaXy-PFSn_icHJUyRoSTg_G7wo0WA32eGipsxFbRPKEifnn7HllGXwCYpudt8m7mg2QapkcIaXZlD8TwlEmoIoGUe-zAPBnBaKyNlKrEGm9RxEnBmx_LhbtO5uWFFaoOhQVC3HJyut-Bzw0QOxDd2JrfuozFZ_YELqqOsipJtT8wivXA0X6Al07Y0V9ABRGZIS7j2LoDBy-dgFQM4xLTf8vNWDUdVNvtagnuNt1n7fyadvpl-JcBIpjf" />
                    <div className="flex-grow">
                      <h3 className="font-bold text-sm">Light Blue Linen Shirt</h3>
                      <p className="text-lg font-bold mt-1">$79.99</p>
                    </div>
                    <button className="flex-shrink-0 px-4 py-2 bg-[var(--brand-primary)] text-white dark:bg-[var(--brand-primary-dark)] dark:text-black rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">Add to Cart</button>
                  </div>

                  <div className="bg-white dark:bg-[var(--background-dark)] border border-[var(--border-light)] dark:border-[var(--border-dark)] p-4 rounded-xl flex items-center gap-4 max-w-md">
                    <img alt="Beige Chino Shorts" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMLPwgiRevsYx584Rp-gYYpmYwLOVj_BYRD74NsC-5VdV14IdWwjTZqww0VO3yXULrR6i2rpShfXRpwCTfku9hafeKkKtX6p-ktBD41VJ7JNGQgySFG1lyHxNaQfYkri2yyKSiqe7pf7KXj74fGuhq_SryzL28pttrZx9B_fJqZKhrwnNbsOBjDs6jWPE00h_XOGEdrqNeMwRg29Gva0PumqXpqNgDR6tGnQxXYDrA4-kiP4CPtaBQjzVvdGpkVp2xzrqT-Sbp9qE0" />
                    <div className="flex-grow">
                      <h3 className="font-bold text-sm">Beige Chino Shorts</h3>
                      <p className="text-lg font-bold mt-1">$59.99</p>
                    </div>
                    <button className="flex-shrink-0 px-4 py-2 bg-[var(--brand-primary)] text-white dark:bg-[var(--brand-primary-dark)] dark:text-black rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">Add to Cart</button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* input */}
          <div className="flex-shrink-0 p-4 bg-[var(--background-light)] dark:bg-[var(--background-dark)] border-t border-[var(--border-light)] dark:border-[var(--border-dark)]">
            <div className="max-w-3xl mx-auto">
              <div className="relative flex items-center">
                <button className="absolute left-3 text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] hover:text-[var(--text-light-primary)] dark:hover:text-[var(--text-dark-primary)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" strokeWidth="2"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" strokeWidth="2"></path>
                    <line x1="12" x2="12" y1="19" y2="22" strokeWidth="2"></line>
                  </svg>
                </button>

                <input className="w-full bg-[var(--brand-secondary-light)] dark:bg-[var(--brand-secondary-dark)] border-transparent rounded-lg py-3 pl-12 pr-28 text-sm focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--background-light)] dark:focus:ring-offset-[var(--background-dark)] focus:ring-[var(--brand-primary)] dark:focus:ring-[var(--brand-primary-dark)] focus:outline-none placeholder:text-[var(--text-light-secondary)] dark:placeholder:text-[var(--text-dark-secondary)]" placeholder="Type your message..." type="text" />

                <div className="absolute right-3 flex items-center gap-3">
                  <button className="text-[var(--text-light-secondary)] dark:text-[var(--text-dark-secondary)] hover:text-[var(--text-light-primary)] dark:hover:text-[var(--text-dark-primary)]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeWidth="2"></path>
                      <line x1="9" x2="9.01" y1="9" y2="9" strokeWidth="2"></line>
                      <line x1="15" x2="15.01" y1="9" y2="9" strokeWidth="2"></line>
                    </svg>
                  </button>

                  <button className="bg-[var(--brand-primary)] text-white dark:bg-[var(--brand-primary-dark)] dark:text-black rounded-md w-8 h-8 flex items-center justify-center hover:opacity-90 transition-opacity">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="m22 2-7 20-4-9-9-4Z" strokeWidth="2"></path>
                      <path d="M22 2 11 13" strokeWidth="2"></path>
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
