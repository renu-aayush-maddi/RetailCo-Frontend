// import React, { useEffect, useState } from "react";
// import Carousel from "./components/Carousel";
// import InfiniteCarousel from "./components/InfiniteCarousel";

// const features = [
//   { title: "Unified Shopping", body: "A single, seamless journey across all channels.", icon: "users" },
//   { title: "Personalized Recommendations", body: "AI-powered suggestions that customers love.", icon: "reco" },
//   { title: "24/7 Availability", body: "Always on, always ready to help and sell.", icon: "clock" },
//   { title: "Upsell & Cross-sell", body: "Intelligently increase average order value.", icon: "chart" },
//   { title: "Omnichannel Support", body: "Support customers on their preferred platform.", icon: "phone" },
// ];

// const channels = [
//   {
//     title: "Online Store",
//     body: "Integrate a smart shopping assistant into your e-commerce site to guide users, answer questions, and drive conversions.",
//     img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=60&auto=format&fit=crop"
//   },
//   {
//     title: "Messaging Apps",
//     body: "Engage customers on WhatsApp, Messenger, and other platforms, offering a convenient, personal shopping channel.",
//     img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop"
//   },
//   {
//     title: "In-Store Kiosks",
//     body: "Empower shoppers in your physical stores with interactive kiosks for product discovery and inventory checks.",
//     img: "https://images.unsplash.com/photo-1582719478174-7d9d9d3b1f97?w=1200&q=60&auto=format&fit=crop"
//   }
// ];

// function Icon({ name, className = "" }) {
//   if (name === "users")
//     return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
//   if (name === "reco")
//     return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2"/></svg>;
//   if (name === "clock")
//     return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/></svg>;
//   if (name === "chart")
//     return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>;
//   if (name === "phone")
//     return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28l1.5 4.5-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26L19 15.72V19a2 2 0 01-2 2H16C9.72 21 3 14.28 3 7V5z"/></svg>;
//   return null;
// }


// export default function App() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     const root = document.documentElement;
//     if (darkMode) root.classList.add("dark"); else root.classList.remove("dark");
//   }, [darkMode]);

//   // build carousel items as card nodes
//   const carouselItems = features.map((f, i) => (
//     <div className="swiper-slide flex flex-col items-center text-center p-6 bg-card-light dark:bg-card-dark rounded-xl shadow" key={i}>
//       <div className="p-4 bg-primary/10 rounded-full mb-4 inline-flex"><Icon name={f.icon} /></div>
//       <h3 className="text-lg font-bold">{f.title}</h3>
//       <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{f.body}</p>
//     </div>
//   ));

//   const featureCards = features.map((f, i) => (
//   <div key={i} className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow text-center">
//     <div className="p-4 bg-primary/10 rounded-full mb-4 inline-flex">
//       <Icon name={f.icon} />
//     </div>
//     <h3 className="text-lg font-bold">{f.title}</h3>
//     <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{f.body}</p>
//   </div>
// ));

// // function FeatureCard({ f }) {
// //   return (
// //     <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow h-full flex flex-col">
// //       <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
// //         <Icon name={f.icon} />
// //       </div>
// //       <h3 className="text-lg font-bold break-words">{f.title}</h3>
// //       <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 break-words">{f.body}</p>
// //     </div>
// //   );
// // }
// const featureColors = {
//   users: { bg: "bg-blue-50 dark:bg-blue-900/40", iconBg: "bg-blue-200 dark:bg-blue-700", title: "text-blue-700 dark:text-blue-300" },
//   reco: { bg: "bg-green-50 dark:bg-green-900/40", iconBg: "bg-green-200 dark:bg-green-700", title: "text-green-700 dark:text-green-300" },
//   clock: { bg: "bg-yellow-50 dark:bg-yellow-900/40", iconBg: "bg-yellow-200 dark:bg-yellow-700", title: "text-yellow-700 dark:text-yellow-300" },
//   chart: { bg: "bg-purple-50 dark:bg-purple-900/40", iconBg: "bg-purple-200 dark:bg-purple-700", title: "text-purple-700 dark:text-purple-300" },
//   phone: { bg: "bg-pink-50 dark:bg-pink-900/40", iconBg: "bg-pink-200 dark:bg-pink-700", title: "text-pink-700 dark:text-pink-300" },
// };


// function FeatureCard({ f }) {
//   const color = featureColors[f.icon] || featureColors.users;

//   return (
//     <div className={`${color.bg} p-6 rounded-xl shadow h-full flex flex-col`}>
// <div className={`inline-flex items-center justify-center p-4 ${color.iconBg} rounded-full mb-4`}>
//   <Icon name={f.icon} className="text-black dark:text-white" />
// </div>
//       <h3 className={`text-lg font-bold break-words ${color.title}`}>{f.title}</h3>
//       <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 break-words">{f.body}</p>
//     </div>
//   );
// }

//   const cards = features.map((f, i) => <FeatureCard f={f} key={i} />);

//   return (
//     <div>
//       {/* Header */}
//       {/* <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm shadow-sm">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex items-center space-x-3">
//               <svg className="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none"><path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"/><path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263Z" fill="currentColor"/></svg>
//               <h1 className="text-2xl font-bold text-slate-900 dark:text-white">RetailCo</h1>
//             </div>

//             <nav className="hidden md:flex items-center space-x-8">
//               <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/">Home</a>
//               <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/usecases">Use Cases</a>
//               <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/story">Testimonials</a>
//               <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/pricing">Pricing</a>
//             </nav>

//             <div className="flex items-center space-x-4">
//               <button onClick={() => setDarkMode((d)=>!d)} className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none">
                
//                 {darkMode ? (
//                   <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707"/></svg>
//                 ) : (
//                   <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 0020.354 15.354z"/></svg>
//                 )}
//               </button>

//               <a className="hidden sm:inline-block px-5 py-2.5 text-sm font-semibold rounded-lg text-primary hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors" href="/login">Log In</a>
//               <a className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white bg-primary hover:opacity-90 transition-opacity" href="/signup">SignUp</a>
//             </div>
//           </div>
//         </div>
//       </header> */}

//       <main className="pt-20">
//         {/* Hero */}
//         <section className="relative bg-cover bg-center py-32 sm:py-48" style={{ backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.8), rgba(15,23,42,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBIEq9uGoSh1T8GHxc0b5MHIuj-LDWOLQUudEU73PBkjwI_fFK5GwwBXWGxdM8e_bt9HozGnu0gNQ4FIZp2wUwVdtpJXA2sl5PPqCvW3U44MXG_SU4Q8u6QKN9oRsq963Y1wRr_TsxgCAo2beCP-fZkmcZua0XjoU8YMD5oJxXuE1cb75Z28ZcJp77ZbZuRKtyjMr5ZzWm3UZPzc1dUW33ZzOdmRmwM9vvDk_4im1yp4ih9WOG3PBQd8QT8YkNyQ8uGCjhs1Td7Gyg")` }}>
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="max-w-3xl mx-auto">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">The Future of Retail is Conversational</h1>
//               <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">Our AI Sales Agent unifies your online and in-store experience, driving sales and customer loyalty 24/7.</p>
//               <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <a className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-primary hover:opacity-90 transition-opacity transform hover:scale-105" href="/signup">Get Started for Free</a>
//                 <a className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors transform hover:scale-105" href="/commingsoon">Watch a Demo</a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features carousel */}
//         {/* <section className="py-20 sm:py-28 bg-background-light dark:bg-background-dark">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <Carousel
//               items={carouselItems}
//               visibleBreakpoints={[[0,1],[640,2],[768,3],[1024,5]]}
//               autoplayDelay={2500}
//             />
//           </div>
//         </section> */}
// {/* <section className="py-20 sm:py-28 bg-background-light dark:bg-background-dark">
//   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//     <InfiniteCarousel items={featureCards} speed={60} />
//   </div>
// </section> */}

//         <section className="py-20 bg-background-light dark:bg-background-dark">
//           <div className="container mx-auto px-4">
//             <InfiniteCarousel items={cards} speed={60} itemWidth={256} />
//           </div>
//         </section>

//         {/* Channels */}
//         <section className="py-20 sm:py-28 bg-white dark:bg-card-dark/100">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Powering Every Customer Interaction</h2>
//               <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">From your website to your physical stores, RetailCo's AI is there to elevate the experience.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {channels.map((c, idx) => (
//                 <div key={idx} className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
//                   <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
//                     <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18"/></svg>
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 dark:text-white">{c.title}</h3>
//                   <p className="mt-2 text-slate-600 dark:text-slate-400">{c.body}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials grid */}
//         <section className="py-20 sm:py-28 bg-background-light dark:bg-background-dark">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Trusted by Leading Retailers</h2>
//               <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">See how our AI is making a difference for businesses like yours.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <Testimonial name="Sarah L." title="Retail Manager" img="https://lh3.googleusercontent.com/aida-public/AB6AXuByvPq38UCaS0hV1VfacOuK_xCHQSrat9LBD14lo_Ygd-5BuaxgSyZJk2rcTZ3QMDLaYhu4B-DIolS28ObSGtiByKfEX8YJNSFwvl9ujcdQu5SqXQNqCU-JObUwyCkyoE69n3AJuws2rgezNL8qnMtiNJmJuqN1b82DSzsOUTz8-GhOAGMJsovfiJx8OoASt__EdqMp1UnV7rGReKD3mB_FqDsr6trDWvp-bIdpPkxc2DtJ9i62z-z3ZpPBWms_KRaR972P4Dghb9B0" quote="The Conversational Sales Agent has transformed our customer interactions, leading to a 25% increase in average order value. It's a game-changer."/>
//               <Testimonial name="David Chen" title="Store Owner" img="https://lh3.googleusercontent.com/aida-public/AB6AXuA5fPAsXNxx-dN6BeaQS33K4yH2zsJE_EolZpEy3xKjkCYBlS6Qfeuaupj5bo1Wyw6gU8BYLtoAKHTH2VUx5wwA6ElUmF2aAtceDtSeKtR1bQ-vaedceqh2L5HThFltKICg-7vDcqHsZDLD6cz2WKDq9MQK1ut4JCjEBsx84KW1nc1PZRU_ixXAzhYX0oq3NbS_LKh6q9pkwazJ6LTKPKYrbNdeSRyIYwJx0EyfaAlzDCYcEkj916oVr2U196N9lCsNCzKCV4UAZT8r" quote="We've seen a noticeable improvement in customer satisfaction and a 15% lift in conversion rates since implementing RetailCo's AI agent."/>
//               <Testimonial name="Emily Rodriguez" title="Customer Service Lead" img="https://lh3.googleusercontent.com/aida-public/AB6AXuBO8izJ6ncJv1UG9dx97P_cPZap4tdXEAbnDtXWkkxa5ZOayxu0GPHSURV75Pukh3-I8hPoS62gUajvwdRNARYlzdaej5XqY9fFDGZKREGfrLNvUkMN5i5tvMA1sTs3nErBTYzB3GkPfbnno7xKGJcZGyqd_X-rXftTYhZj5qhqXIQanD-ZXzGJbDMI6thXmrAaE5BU2vnBl7k0NClnTL43-7pmgt4MLe1gU4wZZBFpECxj082apPX1y4bsssabJeSLoQvAtIECyxqf" quote="The personalized recommendations are incredibly accurate. Our customers are finding products they love, and our team can focus on more complex issues."/>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="bg-primary">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
//             <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ready to Revolutionize Your Retail Experience?</h2>
//             <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Join the future of retail. Get started with our AI Conversational Sales Agent today.</p>
//             <div className="mt-8">
//               <a className="px-10 py-4 text-lg font-semibold rounded-lg text-primary bg-white hover:bg-slate-100 transition-colors transform hover:scale-105 inline-block" href="/commingsoon">Request a Free Demo</a>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200/80 dark:border-slate-800/80">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//             <div className="flex items-center space-x-3">
//               <svg className="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none"><path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor"/><path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819Z" fill="currentColor"/></svg>
//               <span className="text-lg font-bold text-slate-900 dark:text-white">RetailCo</span>
//             </div>

//             <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-last">
//               <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">About</a>
//               <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">Careers</a>
//               <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">Press</a>
//               <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">Contact</a>
//               <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">Privacy Policy</a>
//             </nav>

//             <div className="flex justify-center space-x-6 md:order-2">
//               <a className="text-slate-500 dark:text-slate-400 hover:text-primary" href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36"/></svg></a>
//               <a className="text-slate-500 dark:text-slate-400 hover:text-primary" href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.9,21 5,21H19"/></svg></a>
//               <a className="text-slate-500 dark:text-slate-400 hover:text-primary" href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5"/></svg></a>
//             </div>
//           </div>

//           <div className="mt-8 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 text-center text-sm text-slate-500 dark:text-slate-400">
//             © 2025 RetailCo. All rights reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// /* small testimonial subcomponent */
// function Testimonial({ name, title, img, quote }) {
//   return (
//     <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg">
//       <div className="flex items-center mb-6">
//         <img alt={name} className="h-14 w-14 rounded-full object-cover" src={img} />
//         <div className="ml-4">
//           <p className="font-bold text-slate-900 dark:text-white">{name}</p>
//           <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
//         </div>
//       </div>
//       <blockquote className="italic text-slate-600 dark:text-slate-300">"{quote}"</blockquote>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import InfiniteCarousel from "./components/InfiniteCarousel";

const features = [
  { title: "Unified Shopping", body: "A single, seamless journey across all channels.", icon: "users" },
  { title: "Personalized Recommendations", body: "AI-powered suggestions that customers love.", icon: "reco" },
  { title: "24/7 Availability", body: "Always on, always ready to help and sell.", icon: "clock" },
  { title: "Upsell & Cross-sell", body: "Intelligently increase average order value.", icon: "chart" },
  { title: "Omnichannel Support", body: "Support customers on their preferred platform.", icon: "phone" },
];

const channels = [
  {
    title: "Online Store",
    body: "Integrate a smart shopping assistant into your e-commerce site to guide users, answer questions, and drive conversions.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=60&auto=format&fit=crop"
  },
  {
    title: "Messaging Apps",
    body: "Engage customers on WhatsApp, Messenger, and other platforms, offering a convenient, personal shopping channel.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=60&auto=format&fit=crop"
  },
  {
    title: "In-Store Kiosks",
    body: "Empower shoppers in your physical stores with interactive kiosks for product discovery and inventory checks.",
    img: "https://images.unsplash.com/photo-1582719478174-7d9d9d3b1f97?w=1200&q=60&auto=format&fit=crop"
  }
];

function Icon({ name, className = "" }) {
  if (name === "users")
    return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
  if (name === "reco")
    return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2"/></svg>;
  if (name === "clock")
    return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/></svg>;
  if (name === "chart")
    return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>;
  if (name === "phone")
    return <svg className={`w-8 h-8 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28l1.5 4.5-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26L19 15.72V19a2 2 0 01-2 2H16C9.72 21 3 14.28 3 7V5z"/></svg>;
  return null;
}

const featureColors = {
  users: { bg: "bg-blue-50 dark:bg-blue-900/40", iconBg: "bg-blue-200 dark:bg-blue-700", title: "text-blue-700 dark:text-blue-300" },
  reco: { bg: "bg-green-50 dark:bg-green-900/40", iconBg: "bg-green-200 dark:bg-green-700", title: "text-green-700 dark:text-green-300" },
  clock: { bg: "bg-yellow-50 dark:bg-yellow-900/40", iconBg: "bg-yellow-200 dark:bg-yellow-700", title: "text-yellow-700 dark:text-yellow-300" },
  chart: { bg: "bg-purple-50 dark:bg-purple-900/40", iconBg: "bg-purple-200 dark:bg-purple-700", title: "text-purple-700 dark:text-purple-300" },
  phone: { bg: "bg-pink-50 dark:bg-pink-900/40", iconBg: "bg-pink-200 dark:bg-pink-700", title: "text-pink-700 dark:text-pink-300" },
};

function FeatureCard({ f }) {
  const color = featureColors[f.icon] || featureColors.users;

  return (
    <div className={`${color.bg} p-6 rounded-xl shadow h-full flex flex-col`}>
      <div className={`inline-flex items-center justify-center p-4 ${color.iconBg} rounded-full mb-4`}>
        <Icon name={f.icon} className="text-black dark:text-white" />
      </div>
      <h3 className={`text-lg font-bold break-words ${color.title}`}>{f.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 break-words">{f.body}</p>
    </div>
  );
}

// NEW: Telegram banner component
function TelegramBanner({ onClose }) {
  return (
    <div className="fixed inset-x-4 bottom-4 md:inset-x-auto md:right-6 md:bottom-6 z-50 max-w-md">
      <div className="bg-card-light dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 rounded-2xl shadow-2xl px-5 py-4 flex gap-4 items-start">
        {/* Telegram-like icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10">
          <svg
            className="h-6 w-6 text-sky-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.036 14.47l-.375 4.255c.536 0 .769-.23 1.048-.504l2.52-2.41 5.226 3.82c.959.53 1.637.252 1.888-.89l3.42-16.06.001-.001c.304-1.417-.512-1.972-1.44-1.627L1.63 9.53C.25 10.063.268 10.83 1.39 11.177l4.94 1.54L18.25 4.79c.578-.38 1.105-.17.672.21" />
          </svg>
        </div>

        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-400">
            Omnichannel AI Sales Agent
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
            Meet our Telegram-integrated RetailCo Assistant
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Start your shopping journey on the web and continue seamlessly on Telegram. 
            Our AI Sales Agent keeps your context, recommends looks, checks inventory, 
            and helps you reserve in-store or ship-to-home – all in one conversation.
          </p>

          <div className="mt-3 flex flex-wrap gap-2 items-center">
            <a
              href="https://t.me/RetailCo_Assistant_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500 text-white hover:bg-sky-600 transition-colors"
            >
              Chat on Telegram
              <span className="ml-2 text-[10px] font-mono">@RetailCo_Assistant_bot</span>
            </a>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Official ABFRL omnichannel demo
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="ml-1 mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close Telegram announcement"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" stroke="currentColor" fill="none">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showTelegramBanner, setShowTelegramBanner] = useState(false); // NEW

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark"); else root.classList.remove("dark");
  }, [darkMode]);

  // NEW: show banner once per browser using localStorage
  useEffect(() => {
    const dismissed = window.localStorage.getItem("telegramBannerDismissed");
    if (!dismissed) {
      setShowTelegramBanner(true);
    }
  }, []);

  const handleCloseTelegramBanner = () => {
    setShowTelegramBanner(false);
    window.localStorage.setItem("telegramBannerDismissed", "true");
  };

  // build carousel items as card nodes
  const carouselItems = features.map((f, i) => (
    <div className="swiper-slide flex flex-col items-center text-center p-6 bg-card-light dark:bg-card-dark rounded-xl shadow" key={i}>
      <div className="p-4 bg-primary/10 rounded-full mb-4 inline-flex"><Icon name={f.icon} /></div>
      <h3 className="text-lg font-bold">{f.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{f.body}</p>
    </div>
  ));

  const featureCards = features.map((f, i) => (
    <div key={i} className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow text-center">
      <div className="p-4 bg-primary/10 rounded-full mb-4 inline-flex">
        <Icon name={f.icon} />
      </div>
      <h3 className="text-lg font-bold">{f.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{f.body}</p>
    </div>
  ));

  const cards = features.map((f, i) => <FeatureCard f={f} key={i} />);

  return (
    <div>
      <main className="pt-20">
        {/* Hero */}
        <section
          className="relative bg-cover bg-center py-32 sm:py-48"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(15,23,42,0.8), rgba(15,23,42,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBIEq9uGoSh1T8GHxc0b5MHIuj-LDWOLQUudEU73PBkjwI_fFK5GwwBXWGxdM8e_bt9HozGnu0gNQ4FIZp2wUwVdtpJXA2sl5PPqCvW3U44MXG_SU4Q8u6QKN9oRsq963Y1wRr_TsxgCAo2beCP-fZkmcZua0XjoU8YMD5oJxXuE1cb75Z28ZcJp77ZbZuRKtyjMr5ZzWm3UZPzc1dUW33ZzOdmRmwM9vvDk_4im1yp4ih9WOG3PBQd8QT8YkNyQ8uGCjhs1Td7Gyg")`
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                The Future of Retail is Conversational
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI Sales Agent unifies your online and in-store experience, driving sales and customer loyalty 24/7.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-primary hover:opacity-90 transition-opacity transform hover:scale-105" href="/signup">
                  Get Started for Free
                </a>
                <a className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors transform hover:scale-105" href="/commingsoon">
                  Watch a Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-4">
            <InfiniteCarousel items={cards} speed={60} itemWidth={256} />
          </div>
        </section>

        {/* Channels */}
        <section className="py-20 sm:py-28 bg-white dark:bg-card-dark/100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Powering Every Customer Interaction
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                From your website to your physical stores, RetailCo&apos;s AI is there to elevate the experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {channels.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                    <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{c.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials grid */}
        <section className="py-20 sm:py-28 bg-background-light dark:bg-background-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Trusted by Leading Retailers
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                See how our AI is making a difference for businesses like yours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                name="Sarah L."
                title="Retail Manager"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuByvPq38UCaS0hV1VfacOuK_xCHQSrat9LBD14lo_Ygd-5BuaxgSyZJk2rcTZ3QMDLaYhu4B-DIolS28ObSGtiByKfEX8YJNSFwvl9ujcdQu5SqXQNqCU-JObUwyCkyoE69n3AJuws2rgezNL8qnMtiNJmJuqN1b82DSzsOUTz8-GhOAGMJsovfiJx8OoASt__EdqMp1UnV7rGReKD3mB_FqDsr6trDWvp-bIdpPkxc2DtJ9i62z-z3ZpPBWms_KRaR972P4Dghb9B0"
                quote="The Conversational Sales Agent has transformed our customer interactions, leading to a 25% increase in average order value. It's a game-changer."
              />
              <Testimonial
                name="David Chen"
                title="Store Owner"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuA5fPAsXNxx-dN6BeaQS33K4yH2zsJE_EolZpEy3xKjkCYBlS6Qfeuaupj5bo1Wyw6gU8BYLtoAKHTH2VUx5wwA6ElUmF2aAtceDtSeKtR1bQ-vaedceqh2L5HThFltKICg-7vDcqHsZDLD6cz2WKDq9MQK1ut4JCjEBsx84KW1nc1PZRU_ixXAzhYX0oq3NbS_LKh6q9pkwazJ6LTKPKYrbNdeSRyIYwJx0EyfaAlzDCYcEkj916oVr2U196N9lCsNCzKCV4UAZT8r"
                quote="We've seen a noticeable improvement in customer satisfaction and a 15% lift in conversion rates since implementing RetailCo's AI agent."
              />
              <Testimonial
                name="Emily Rodriguez"
                title="Customer Service Lead"
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuBO8izJ6ncJv1UG9dx97P_cPZap4tdXEAbnDtXWkkxa5ZOayxu0GPHSURV75Pukh3-I8hPoS62gUajvwdRNARYlzdaej5XqY9fFDGZKREGfrLNvUkMN5i5tvMA1sTs3nErBTYzB3GkPfbnno7xKGJcZGyqd_X-rXftTYhZj5qhqXIQanD-ZXzGJbDMI6thXmrAaE5BU2vnBl7k0NClnTL43-7pmgt4MLe1gU4wZZBFpECxj082apPX1y4bsssabJeSLoQvAtIECyxqf"
                quote="The personalized recommendations are incredibly accurate. Our customers are finding products they love, and our team can focus on more complex issues."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Revolutionize Your Retail Experience?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Join the future of retail. Get started with our AI Conversational Sales Agent today.
            </p>
            <div className="mt-8">
              <a
                className="px-10 py-4 text-lg font-semibold rounded-lg text-primary bg-white hover:bg-slate-100 transition-colors transform hover:scale-105 inline-block"
                href="/commingsoon"
              >
                Request a Free Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-3">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 48 48" fill="none">
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                />
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-lg font-bold text-slate-900 dark:text-white">RetailCo</span>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-last">
              <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">
                About
              </a>
              <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">
                Careers
              </a>
              <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">
                Press
              </a>
              <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">
                Contact
              </a>
              <a className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary" href="#">
                Privacy Policy
              </a>
            </nav>

            <div className="flex justify-center space-x-6 md:order-2">
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36" />
                </svg>
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.9,21 5,21H19" />
                </svg>
              </a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-primary" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 text-center text-sm text-slate-500 dark:text-slate-400">
            © 2025 RetailCo. All rights reserved.
          </div>
        </div>
      </footer>

      {/* NEW: Telegram omnichannel banner */}
      {showTelegramBanner && (
        <TelegramBanner onClose={handleCloseTelegramBanner} />
      )}
    </div>
  );
}

/* small testimonial subcomponent */
function Testimonial({ name, title, img, quote }) {
  return (
    <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl shadow-lg">
      <div className="flex items-center mb-6">
        <img alt={name} className="h-14 w-14 rounded-full object-cover" src={img} />
        <div className="ml-4">
          <p className="font-bold text-slate-900 dark:text-white">{name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
        </div>
      </div>
      <blockquote className="italic text-slate-600 dark:text-slate-300">"{quote}"</blockquote>
    </div>
  );
}
