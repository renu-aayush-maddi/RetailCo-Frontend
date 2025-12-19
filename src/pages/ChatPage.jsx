// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";
// import "./chat.css";

// export default function ChatPage() {
//   const navigate = useNavigate();
//   const { token, logout } = useAuth();
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const sessionId = "default-session";

//   useEffect(() => {
//     if (!token) return; // don’t fetch if not signed in
//     const loadHistory = async () => {
//       try {
//         const { data } = await api.get("/history/me");
//         setMessages(data.reverse());
//       } catch (err) {
//         console.error("Failed to load history", err);
//         // if backend rejects (401), log user out
//         if (err?.response?.status === 401) {
//           logout();
//           navigate("/login");
//         }
//       }
//     };
//     loadHistory();
//   }, [token, logout, navigate]);


//   const sendMessage = async () => {
//   if (!text.trim()) return;
//   const userMsg = { role: "user", message: text };
//   setMessages((prev) => [...prev, userMsg]);
//   setText("");

//   try {
//     const { data } = await api.post("/chat", { session_id: sessionId, text });
//     // Build assistant message with friendly text + results
//     const assistantMsg = {
//       role: "assistant",
//       message: data.results?.message || "",
//       results: data.results || {}
//     };
//     setMessages((prev) => [...prev, assistantMsg]);
//   } catch (err) {
//     console.error("Chat error", err);
//     if (err?.response?.status === 401) {
//       logout();
//       navigate("/login");
//     } else {
//       // show a simple error bubble
//       setMessages((prev) => [...prev, { role: "assistant", message: "Sorry — something went wrong." }]);
//     }
//   }
// };


//   // const sendMessage = async () => {
//   //   if (!text.trim()) return;
//   //   const userMsg = { role: "user", message: text };
//   //   setMessages((prev) => [...prev, userMsg]);
//   //   setText("");

//   //   try {
//   //     const { data } = await api.post("/chat", { session_id: sessionId, text });
//   //     const botMsg = {
//   //       role: "assistant",
//   //       message: data.results?.message || "",
//   //       results: data.results,
//   //     };
//   //     setMessages((prev) => [...prev, botMsg]);
//   //   } catch (err) {
//   //     console.error("Chat error", err);
//   //     if (err?.response?.status === 401) {
//   //       logout();
//   //       navigate("/signin");
//   //     }
//   //   }
//   // };

//   // 🚨 If no token, show session expired screen
//   if (!token) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
//           <h2 className="text-xl font-semibold mb-2">Session expired</h2>
//           <p className="text-gray-600 mb-4">Please sign in again to continue.</p>
//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg"
//           >
//             Go to Sign in
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="flex h-screen w-full">
//         {/* Sidebar */}
//         <aside className="w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex flex-col p-4">
//           <div className="flex-grow">
//             <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
//               + New Conversation
//             </button>
//             <nav className="mt-8 space-y-2">
//               {/* Later: map session history */}
//               <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//                 <span className="text-sm font-medium">Default Session</span>
//                 <span className="text-xs text-[var(--text-light-secondary)]">Today</span>
//               </a>
//             </nav>
//           </div>
//           <div className="border-t border-[var(--border-light)] pt-4 space-y-1">
//             <button
//               onClick={() => {
//                 logout();
//                 navigate("/");
//               }}
//               className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500"
//             >
//               Sign Out
//             </button>
//           </div>
//         </aside>

//         {/* Main chat */}
//         <main className="flex-1 flex flex-col">
//           <header className="flex items-center h-[73px] px-8 border-b border-[var(--border-light)]">
//             <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
//           </header>

          

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-8">
//             <div className="max-w-3xl mx-auto space-y-8">
//               {messages.map((m, i) =>
//                 m.role === "user" ? (
//                   <div key={i} className="flex justify-end">
//                     <div className="bg-[var(--user-bubble-light)] text-white px-4 py-3 rounded-xl rounded-br-none max-w-lg">
//                       {m.message}
//                     </div>
//                   </div>
//                 ) : (
//                   <div key={i} className="flex items-start gap-4">
//                     <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">
//                       🤖
//                     </div>
//                     <div className="flex flex-col gap-4 w-full">
//                       {m.message && (
//                         <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                           <p className="text-sm">{m.message}</p>
//                         </div>
//                       )}
//                       {m.results?.items &&
//                         m.results.items.map((item, j) => (
//                           <div
//                             key={j}
//                             className="bg-white border border-[var(--border-light)] p-4 rounded-xl flex items-center gap-4 max-w-md"
//                           >
//                             <img
//                               alt={item.name}
//                               src={item.image || "https://via.placeholder.com/100"}
//                               className="w-24 h-24 object-cover rounded-lg"
//                             />
//                             <div className="flex-grow">
//                               <h3 className="font-bold text-sm">{item.name}</h3>
//                               <p className="text-lg font-bold mt-1">${item.price}</p>
//                             </div>
//                             <button className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg text-sm">
//                               Add to Cart
//                             </button>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Input */}
//           <div className="p-4 bg-[var(--background-light)] border-t border-[var(--border-light)]">
//             <div className="max-w-3xl mx-auto flex gap-2">
//               <input
//                 className="flex-1 border rounded-lg py-3 px-4 text-sm"
//                 placeholder="Type your message..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-[var(--brand-primary)] text-white rounded-md px-4"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";
// import "./chat.css";
// import ProfileModal from "../components/ProfileModal";

// export default function ChatPage() {
//   const navigate = useNavigate();
//   const { token, logout } = useAuth();
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const sessionId = "default-session";

//   const [showProfile, setShowProfile] = useState(false);

//   useEffect(() => {
//     if (!token) return;
//     const loadHistory = async () => {
//       try {
//         const { data } = await api.get("/history/me");
//         setMessages((data || []).reverse());
//       } catch (err) {
//         console.error("Failed to load history", err);
//         if (err?.response?.status === 401) {
//           logout();
//           navigate("/login");
//         }
//       }
//     };
//     loadHistory();
//   }, [token, logout, navigate]);

//   const sendMessage = async () => {
//     if (!text.trim()) return;
//     const userMsg = { role: "user", message: text };
//     setMessages((prev) => [...prev, userMsg]);
//     setText("");

//     try {
//       const { data } = await api.post("/chat", { session_id: sessionId, text });
//       const assistantMsg = {
//         role: "assistant",
//         message: data.results?.message || "",
//         results: data.results || {},
//       };
//       setMessages((prev) => [...prev, assistantMsg]);
//     } catch (err) {
//       console.error("Chat error", err);
//       if (err?.response?.status === 401) {
//         logout();
//         navigate("/login");
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: "Sorry — something went wrong." },
//         ]);
//       }
//     }
//   };

//   if (!token) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
//           <h2 className="text-xl font-semibold mb-2">Session expired</h2>
//           <p className="text-gray-600 mb-4">Please sign in again to continue.</p>
//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg"
//           >
//             Go to Sign in
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="flex h-screen w-full">
//         {/* Sidebar */}
//         <aside className="w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex flex-col p-4">
//           <div className="flex-grow">
//             <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
//               + New Conversation
//             </button>
//             <nav className="mt-8 space-y-2">
//               <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//                 <span className="text-sm font-medium">Default Session</span>
//                 <span className="text-xs text-[var(--text-light-secondary)]">Today</span>
//               </a>
//             </nav>
//           </div>
//           <div className="border-t border-[var(--border-light)] pt-4 space-y-1">
//             <div className="flex items-center justify-between gap-2">
//               <button
//                 onClick={() => setShowProfile(true)}
//                 className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50"
//               >
//                 Profile
//               </button>
//               <button
//                 onClick={() => {
//                   logout();
//                   navigate("/");
//                 }}
//                 className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50"
//               >
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* Main chat */}
//         <main className="flex-1 flex flex-col">
//           <header className="flex items-center h-[73px] px-8 border-b border-[var(--border-light)]">
//             <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
//           </header>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-8">
//             <div className="max-w-3xl mx-auto space-y-8">
//               {messages.map((m, i) =>
//                 m.role === "user" ? (
//                   <div key={i} className="flex justify-end">
//                     <div className="bg-[var(--user-bubble-light)] text-white px-4 py-3 rounded-xl rounded-br-none max-w-lg">
//                       {m.message}
//                     </div>
//                   </div>
//                 ) : (
//                   <div key={i} className="flex items-start gap-4">
//                     <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">
//                       🤖
//                     </div>
//                     <div className="flex flex-col gap-4 w-full">
//                       {m.message && (
//                         <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                           <p className="text-sm">{m.message}</p>
//                         </div>
//                       )}
//                       {m.results?.items &&
//                         m.results.items.map((item, j) => (
//                           <div
//                             key={j}
//                             className="bg-white border border-[var(--border-light)] p-4 rounded-xl flex items-center gap-4 max-w-md"
//                           >
//                             <img
//                               alt={item.name}
//                               src={item.image || "https://via.placeholder.com/100"}
//                               className="w-24 h-24 object-cover rounded-lg"
//                             />
//                             <div className="flex-grow">
//                               <h3 className="font-bold text-sm">{item.name}</h3>
//                               <p className="text-lg font-bold mt-1">₹{item.price}</p>
//                             </div>
//                             <button className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg text-sm">
//                               Add to Cart
//                             </button>
//                           </div>
//                         ))}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Input */}
//           <div className="p-4 bg-[var(--background-light)] border-t border-[var(--border-light)]">
//             <div className="max-w-3xl mx-auto flex gap-2">
//               <input
//                 className="flex-1 border rounded-lg py-3 px-4 text-sm"
//                 placeholder="Type your message..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-[var(--brand-primary)] text-white rounded-md px-4"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Profile modal */}
//       <ProfileModal open={showProfile} onClose={() => setShowProfile(false)} />
//     </div>
//   );
// }





//////////////cart  code/////////////////////


// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";
// import "./chat.css";
// import ProfileModal from "../components/ProfileModal";
// import CartSidebar from "../components/CartSidebar";


// export default function ChatPage() {
//   const navigate = useNavigate();
//   const { token, logout } = useAuth();
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const sessionId = "default-session"; // backend will canonicalize to user:{uid}:web
//   const [showProfile, setShowProfile] = useState(false);
//   const [showCart, setShowCart] = useState(true); // default open; toggle if you like

//   // NEW: cart state (count & subtotal)
//   const [cart, setCart] = useState({ items: [], subtotal: 0, count: 0 });
//   const [addingId, setAddingId] = useState(null); // simple loading flag for a button

//   useEffect(() => {
//     if (!token) return;
//     const loadHistory = async () => {
//       try {
//         const { data } = await api.get("/history/me");
//         setMessages((data || []).reverse());
//       } catch (err) {
//         console.error("Failed to load history", err);
//         if (err?.response?.status === 401) {
//           logout();
//           navigate("/login");
//         }
//       }
//     };
//     const loadCart = async () => {
//       try {
//         const { data } = await api.get("/cart/summary", { params: { channel: "web" } });
//         const items = data?.cart?.items || [];
//         const subtotal = data?.cart?.subtotal || 0;
//         setCart({ items, subtotal, count: items.length });
//       } catch (err) {
//         // non-fatal
//       }
//     };
//     loadHistory();
//     loadCart();
//   }, [token, logout, navigate]);

//   const sendMessage = async () => {
//     if (!text.trim()) return;
//     const userMsg = { role: "user", message: text };
//     setMessages((prev) => [...prev, userMsg]);
//     setText("");

//     try {
//       const { data } = await api.post("/chat", { session_id: sessionId, text, channel: "web" });
//       const assistantMsg = {
//         role: "assistant",
//         message: data.results?.message || "",
//         results: data.results || {},
//       };
//       setMessages((prev) => [...prev, assistantMsg]);

//       // Optional: if the LLM added something to cart via CartAgentNode,
//       // refresh cart summary right away:
//       if (data?.results?.cart) {
//         const items = data?.results?.cart?.items || [];
//         const subtotal = data?.results?.cart?.subtotal ?? cart.subtotal;
//         setCart({ items, subtotal, count: items.length || data?.results?.cart?.count || 0 });
//       }
//     } catch (err) {
//       console.error("Chat error", err);
//       if (err?.response?.status === 401) {
//         logout();
//         navigate("/login");
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: "Sorry — something went wrong." },
//         ]);
//       }
//     }
//   };

//   // NEW: Add to cart handler for each product card
//   const handleAddToCart = async (productId, qty = 1) => {
//     try {
//       setAddingId(productId);
//       const { data } = await api.post("/cart/add", {
//         product_id: productId,
//         qty,
//         channel: "web",
//       });
//       // Update cart quick summary
//       const count = data?.cart?.count ?? cart.count + 1;
//       // If API didn’t send items, fetch summary to be sure:
//       const { data: sum } = await api.get("/cart/summary", { params: { channel: "web" } });
//       const items = sum?.cart?.items || [];
//       const subtotal = sum?.cart?.subtotal || 0;
//       setCart({ items, subtotal, count: items.length || count });
//     } catch (err) {
//       console.error("Add to cart failed", err);
//       if (err?.response?.status === 401) {
//         logout();
//         navigate("/login");
//       }
//     } finally {
//       setAddingId(null);
//     }
//   };

//   if (!token) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
//           <h2 className="text-xl font-semibold mb-2">Session expired</h2>
//           <p className="text-gray-600 mb-4">Please sign in again to continue.</p>
//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg"
//           >
//             Go to Sign in
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="flex h-screen w-full">
//         {/* Sidebar */}
//         {/* <aside className="w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex flex-col p-4">
//           <div className="flex-grow">
//             <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
//               + New Conversation
//             </button>
//             <nav className="mt-8 space-y-2">
//               <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//                 <span className="text-sm font-medium">Default Session</span>
//                 <span className="text-xs text-[var(--text-light-secondary)]">Today</span>
//               </a>
//             </nav>
//           </div>
//           <div className="border-t border-[var(--border-light)] pt-4 space-y-1">
//             <div className="flex items-center justify-between gap-2">
//               <button
//                 onClick={() => setShowProfile(true)}
//                 className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50"
//               >
//                 Profile
//               </button>
//               <button
//                 onClick={() => {
//                   logout();
//                   navigate("/");
//                 }}
//                 className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50"
//               >
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </aside> */}
//         <aside className="w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex flex-col p-4">
//   <div className="flex items-center justify-between">
//     <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
//       + New Conversation
//     </button>
//     <button
//       onClick={() => setShowCart((s) => !s)}
//       className="ml-2 px-3 py-2 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50"
//       title="Toggle cart panel"
//     >
//       Cart
//     </button>
//   </div>

//   <nav className="mt-4 space-y-2">
//     <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//       <span className="text-sm font-medium">Default Session</span>
//       <span className="text-xs text-[var(--text-light-secondary)]">Today</span>
//     </a>
//   </nav>

//   {/* Cart panel */}
//   {showCart && (
//     <CartSidebar token={token} onClose={() => setShowCart(false)} />
//   )}

//   <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
//     <div className="flex items-center justify-between gap-2">
//       <button
//         onClick={() => setShowProfile(true)}
//         className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50"
//       >
//         Profile
//       </button>
//       <button
//         onClick={() => {
//           logout();
//           navigate("/");
//         }}
//         className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50"
//       >
//         Sign Out
//       </button>
//     </div>
//   </div>
// </aside>

//         {/* Main chat */}
//         <main className="flex-1 flex flex-col">
//           <header className="flex items-center h-[73px] px-8 border-b border-[var(--border-light)] justify-between">
//             <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>

//             {/* NEW: tiny cart pill */}
//             <div className="flex items-center gap-3 text-sm">
//               <span className="px-3 py-1.5 bg-white border rounded-full">
//                 Cart: <strong>{cart.count}</strong> item{cart.count === 1 ? "" : "s"} • ₹{cart.subtotal}
//               </span>
//             </div>
//           </header>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-8">
//             <div className="max-w-3xl mx-auto space-y-8">
//               {messages.map((m, i) =>
//                 m.role === "user" ? (
//                   <div key={i} className="flex justify-end">
//                     <div className="bg-[var(--user-bubble-light)] text-white px-4 py-3 rounded-xl rounded-br-none max-w-lg">
//                       {m.message}
//                     </div>
//                   </div>
//                 ) : (
//                   <div key={i} className="flex items-start gap-4">
//                     <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">
//                       🤖
//                     </div>
//                     <div className="flex flex-col gap-4 w-full">
//                       {m.message && (
//                         <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                           <p className="text-sm">{m.message}</p>
//                         </div>
//                       )}

//                       {/* Product cards with Add to Cart */}
//                       {m.results?.items &&
//                         m.results.items.map((item, j) => (
//                           <div
//                             key={j}
//                             className="bg-white border border-[var(--border-light)] p-4 rounded-xl flex items-center gap-4 max-w-md"
//                           >
//                             <img
//                               alt={item.name}
//                               src={item.image || "https://via.placeholder.com/100"}
//                               className="w-24 h-24 object-cover rounded-lg"
//                             />
//                             <div className="flex-grow">
//                               <h3 className="font-bold text-sm">{item.name}</h3>
//                               <p className="text-lg font-bold mt-1">₹{item.price}</p>
//                             </div>
//                             <button
//                               onClick={() => handleAddToCart(item.product_id, 1)}
//                               disabled={addingId === item.product_id}
//                               className={`px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg text-sm ${
//                                 addingId === item.product_id ? "opacity-60 cursor-not-allowed" : ""
//                               }`}
//                             >
//                               {addingId === item.product_id ? "Adding..." : "Add to Cart"}
//                             </button>
//                           </div>
//                         ))}

//                       {/* If CartAgentNode returned a cart message, show it */}
//                       {m.results?.cart_message && (
//                         <div className="bg-white border border-[var(--border-light)] p-3 rounded-lg text-sm">
//                           {m.results.cart_message}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Input */}
//           <div className="p-4 bg-[var(--background-light)] border-t border-[var(--border-light)]">
//             <div className="max-w-3xl mx-auto flex gap-2">
//               <input
//                 className="flex-1 border rounded-lg py-3 px-4 text-sm"
//                 placeholder="Type your message..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button
//                 onClick={sendMessage}
//                 className="bg-[var(--brand-primary)] text-white rounded-md px-4"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Profile modal */}
//       <ProfileModal open={showProfile} onClose={() => setShowProfile(false)} />
//     </div>
//   );
// }








// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useRef, useState } from "react";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";
// import "./chat.css";
// import ProfileModal from "../components/ProfileModal";
// import CartSidebar from "../components/CartSidebar";

// export default function ChatPage() {
//   const navigate = useNavigate();
//   const { token, logout } = useAuth();
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   const [showCart, setShowCart] = useState(true);
//   const [cart, setCart] = useState({ items: [], subtotal: 0, count: 0 });
//   const [addingId, setAddingId] = useState(null);

//   const [showSidebar, setShowSidebar] = useState(false); // mobile drawer
//   const [isTyping, setIsTyping] = useState(false);       // animated dots while waiting

//   const starters = [
//   "Show me bestselling tshirt under ₹999",
//   "Find light blue slim jeans",
//   "What do you do ?", 
//   "Recommend me a black tshirt", 
//   "What’s on sale today?"
// ];

//   const sessionId = "default-session";
//   const listRef = useRef(null);
//   const bottomRef = useRef(null);
//   const typingTimerRef = useRef(null);

//   const scrollToBottom = (smooth = true) => {
//     if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
//   };

//   useEffect(() => {
//     if (!token) return;
//     const loadHistory = async () => {
//       try {
//         const { data } = await api.get("/history/me");
//         setMessages((data || []).reverse());
//       } catch (err) {
//         if (err?.response?.status === 401) {
//           logout();
//           navigate("/login");
//         }
//       }
//     };
//     const loadCart = async () => {
//       try {
//         const { data } = await api.get("/cart/summary", { params: { channel: "web" } });
//         const items = data?.cart?.items || [];
//         const subtotal = data?.cart?.subtotal || 0;
//         setCart({ items, subtotal, count: items.length });
//       } catch {}
//     };
//     loadHistory();
//     loadCart();
//   }, [token, logout, navigate]);

//   useEffect(() => {
//     scrollToBottom(false);
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const typeOutAssistant = (fullText, baseMsg) => {
//     let i = 0;
//     const id = Symbol("assistant");
//     setMessages((prev) => [...prev, { ...baseMsg, message: "" , _id: id }]);
//     typingTimerRef.current = setInterval(() => {
//       i += Math.max(1, Math.floor(fullText.length / 80)); // speed
//       const chunk = fullText.slice(0, i);
//       setMessages((prev) =>
//         prev.map((m) => (m._id === id ? { ...m, message: chunk } : m))
//       );
//       if (i >= fullText.length) {
//         clearInterval(typingTimerRef.current);
//         typingTimerRef.current = null;
//         setIsTyping(false);
//       }
//     }, 12);
//   };
// const sendMessage = async (overrideText) => {
//   const candidate = typeof overrideText === "string" ? overrideText : text;
//   const userText = (candidate ?? "").toString().trim();
//   if (!userText) return;

//   setMessages((prev) => [...prev, { role: "user", message: userText }]);
//   setText("");
//   setIsTyping(true);

//   try {
//     const { data } = await api.post("/chat", { session_id: sessionId, text: userText, channel: "web" });
//     const full = data?.results?.message || "";
//     const results = data?.results || {};
//     console.log("chat results ->", data?.results);

//     if (full) {
//       typeOutAssistant(full, { role: "assistant", results });
//     } else {
//       setMessages((prev) => [...prev, { role: "assistant", message: "", results }]);
//       setIsTyping(false);
//     }

//     if (data?.results?.cart) {
//       const items = data?.results?.cart?.items || [];
//       const subtotal = data?.results?.cart?.subtotal ?? cart.subtotal;
//       setCart({ items, subtotal, count: items.length || data?.results?.cart?.count || 0 });
//     }
//   } catch (err) {
//     if (err?.response?.status === 401) {
//       logout();
//       navigate("/login");
//     } else {
//       setMessages((prev) => [...prev, { role: "assistant", message: "Sorry — something went wrong." }]);
//     }
//     setIsTyping(false);
//   }
// };



//   const handleAddToCart = async (productId, qty = 1) => {
//     try {
//       setAddingId(productId);
//       const { data } = await api.post("/cart/add", { product_id: productId, qty, channel: "web" });
//       const count = data?.cart?.count ?? cart.count + 1;
//       const { data: sum } = await api.get("/cart/summary", { params: { channel: "web" } });
//       const items = sum?.cart?.items || [];
//       const subtotal = sum?.cart?.subtotal || 0;
//       setCart({ items, subtotal, count: items.length || count });
//     } catch (err) {
//       if (err?.response?.status === 401) {
//         logout();
//         navigate("/login");
//       }
//     } finally {
//       setAddingId(null);
//     }
//   };

//   if (!token) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
//           <h2 className="text-xl font-semibold mb-2">Session expired</h2>
//           <p className="text-gray-600 mb-4">Please sign in again to continue.</p>
//           <button onClick={() => navigate("/login")} className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg">
//             Go to Sign in
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="retailco-theme min-h-screen">
//     <div className="min-h-screen">
//       <div className="flex h-screen w-full">
//         {/* Desktop sidebar */}
//         <aside className="hidden md:flex w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex-col p-4">
//           <div className="flex items-center justify-between">
//             <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
//               + New Conversation
//             </button>
//             <button
//               onClick={() => setShowCart((s) => !s)}
//               className="ml-2 px-3 py-2 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50 text-black"
//               title="Toggle cart panel"
//             >
//               Cart
//             </button>
//           </div>

//           <nav className="mt-4 space-y-2">
//             <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//               <span className="text-sm font-medium text-black" >Default Session</span>
//               <span className="text-xs text-[var(--text-light-secondary)] text-black">Today</span>
//             </a>
//           </nav>

//           {showCart && <CartSidebar token={token} onClose={() => setShowCart(false)} />}

//           <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
//             <div className="flex items-center justify-between gap-2">
//               <button onClick={() => setShowProfile(true)} className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50 text-black">
//                 Profile
//               </button>
//               <button
//                 onClick={() => { logout(); navigate("/"); }}
//                 className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50"
//               >
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </aside>

//         {/* Mobile drawer sidebar */}
//         {showSidebar && (
//           <div className="md:hidden fixed inset-0 z-50">
//             <div className="absolute inset-0 bg-black/40" onClick={() => setShowSidebar(false)} />
//             <aside className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-[var(--sidebar-light)] border-r border-[var(--border-light)] p-4">
//               <div className="flex items-center justify-between">
//                 <div className="font-semibold text-black">Menu</div>
//                 <button onClick={() => setShowSidebar(false)} className="px-3 py-1.5 border rounded-lg text-black">Close</button>
//               </div>

//               <nav className="mt-4 space-y-2">
//                 <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//                   <span className="text-sm font-medium text-black">Default Session</span>
//                   <span className="text-xs text-[var(--text-light-secondary)] text-black">Today</span>
//                 </a>
//               </nav>

//               <div className="mt-4">
//                 <button
//                   onClick={() => setShowCart(true)}
//                   className="w-full px-3 py-2 rounded-lg text-sm font-medium bg-white border text-black"
//                 >
//                   Open Cart
//                 </button>
//               </div>

//               <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
//                 <div className="flex items-center justify-between gap-2">
//                   <button onClick={() => setShowProfile(true)} className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border text-black">
//                     Profile
//                   </button>
//                   <button
//                     onClick={() => { logout(); navigate("/"); }}
//                     className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200"
//                   >
//                     Sign Out
//                   </button>
//                 </div>
//               </div>
//             </aside>
//           </div>
//         )}

//         {/* Main */}
//         <main className="flex-1 flex flex-col">
//           <header className="flex items-center h-[73px] px-4 md:px-8 border-b border-[var(--border-light)] justify-between">
//             <div className="flex items-center gap-2">
//               <button className="md:hidden mr-1 px-3 py-2 border rounded-lg" onClick={() => setShowSidebar(true)} aria-label="Open menu">
//                 ☰
//               </button>
//               <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
//             </div>
//             <div className="flex items-center gap-3 text-sm">
//               <span className="px-3 py-1.5 bg-white border rounded-full text-black">
//                 Cart: <strong>{cart.count}</strong> item{cart.count === 1 ? "" : "s"} • ₹{cart.subtotal}
//               </span>
//             </div>
//           </header>

//           {/* Messages */}
//           <div ref={listRef} className="flex-1 overflow-y-auto p-4 md:p-8">
//             <div className="max-w-3xl mx-auto space-y-8">
//               {messages.length === 0 && !isTyping && (
//   <div className="max-w-3xl mx-auto">
//     <div className="mb-6">
//       <h2 className="text-base font-semibold text-white/90">Try one of these</h2>
//       <p className="text-sm text-white/60">Tap to ask and I’ll take it from there.</p>
//     </div>
//     <div className="flex flex-wrap gap-2">
//       {starters.map((q) => (
//         <button
//           key={q}
//           onClick={() => sendMessage(q)}
//           className="px-3 py-2 rounded-full text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 transition"
//         >
//           {q}
//         </button>
//       ))}
//     </div>
//   </div>
// )}

//               {messages.map((m, i) =>
//                 m.role === "user" ? (
//                   <div key={i} className="flex justify-end">
//                     <div className="bg-[var(--user-bubble-light)] text-white px-4 py-3 rounded-xl rounded-br-none max-w-lg">
//                       {m.message}
//                     </div>
//                   </div>
//                 ) : (
//                   <div key={i} className="flex items-start gap-4">
//                     <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">🤖</div>
//                     <div className="flex flex-col gap-4 w-full">
//                       <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                         <p className="text-sm whitespace-pre-wrap ">{m.message}</p>
//                       </div>

//                       {m.results?.items &&
//                         m.results.items.map((item, j) => (
//                           <div key={j} className="bg-white border border-[var(--border-light)] p-4 rounded-xl flex items-center gap-4 max-w-md">
//                             <img alt={item.name} src={item.image || "https://via.placeholder.com/100"} className="w-24 h-24 object-cover rounded-lg text-black" />
//                             <div className="flex-grow">
//                               <h3 className="font-bold text-sm text-black">{item.name}</h3>
//                               <p className="text-lg font-bold mt-1 text-black">₹{item.price}</p>
//                             </div>
//                             <button
//                               onClick={() => handleAddToCart(item.product_id, 1)}
//                               disabled={addingId === item.product_id}
//                               className={`px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg text-sm ${addingId === item.product_id ? "opacity-60 cursor-not-allowed " : ""}`}
//                             >
//                               {addingId === item.product_id ? "Adding..." : "Add to Cart"}
//                             </button>
//                           </div>
//                         ))}

//                       {m.results?.cart_message && (
//                         <div className="bg-white border border-[var(--border-light)] p-3 rounded-lg text-sm text-black">{m.results.cart_message}</div>
//                       )}
//                     </div>
//                   </div>
//                 )
//               )}

//               {isTyping && (
//                 <div className="flex items-start gap-4">
//                   <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">🤖</div>
//                   <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                     <span className="typing-dots" aria-label="Assistant is typing">
//                       <span className="dot" />
//                       <span className="dot" />
//                       <span className="dot" />
//                     </span>
//                   </div>
//                 </div>
//               )}

//               <div ref={bottomRef} />
//             </div>
//           </div>

//           {/* Input */}
//           <div className="p-3 md:p-4 bg-[var(--background-light)] border-t border-[var(--border-light)]">
//             <div className="max-w-3xl mx-auto flex gap-2">
//               <input
//                 className="flex-1 border rounded-lg py-3 px-3 md:px-4 text-sm text-black"
//                 placeholder="Type your message..."
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <button onClick={sendMessage} className="bg-[var(--brand-primary)] text-white rounded-md px-4">
//                 Send
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Floating Cart on mobile */}
//       {showCart && (
//         <div className="md:hidden fixed inset-0 z-40">
//           <div className="absolute inset-0 bg-black/40" onClick={() => setShowCart(false)} />
//           <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[70%] overflow-y-auto">
//             <div className="p-3 border-b flex items-center justify-between">
//               <div className="font-semibold text-black">Cart</div>
//               <button className="px-3 py-1.5 border rounded-lg text-black" onClick={() => setShowCart(false)}>Close</button>
//             </div>
//             <CartSidebar token={token} onClose={() => setShowCart(false)} />
//           </div>
//         </div>
//       )}

//       <ProfileModal open={showProfile} onClose={() => setShowProfile(false)} />
//     </div>
//     </div>
//   );
// }



// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useRef, useState } from "react";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";
// import "./chat.css";
// import ProfileModal from "../components/ProfileModal";
// import CartSidebar from "../components/CartSidebar";

// // ---------- Payment QR Panel ----------
// function PaymentQRPanel({ payment, onPaid, onRegenerate, onClose, onTimeout }) {
//   const [remaining, setRemaining] = useState(() => {
//     if (!payment?.expiresAt) return 0;
//     // backend sends expires_at as epoch seconds
//     return Math.max(0, Math.floor(payment.expiresAt - Date.now() / 1000));
//   });

//   useEffect(() => {
//     if (!payment?.expiresAt) return;
//     const id = setInterval(() => {
//       const secondsLeft = Math.max(
//         0,
//         Math.floor(payment.expiresAt - Date.now() / 1000)
//       );
//       setRemaining(secondsLeft);
//       if (secondsLeft <= 0) {
//         clearInterval(id);
//         if (payment.status === "pending" && onTimeout) {
//           onTimeout();
//         }
//       }
//     }, 1000);
//     return () => clearInterval(id);
//   }, [payment?.expiresAt, payment?.status, onTimeout]);

//   if (!payment) return null;

//   // Use a free QR API to render the QR image from qrData string
//   const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
//     payment.qrData || ""
//   )}`;

//   const statusLabel =
//     payment.status === "success"
//       ? "Payment successful"
//       : payment.status === "failed"
//       ? "Payment failed"
//       : payment.status === "expired"
//       ? "QR expired"
//       : "Waiting for payment";

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-sm text-black">
//         <div className="flex justify-between items-center mb-3">
//           <h2 className="font-semibold text-sm">Complete Payment</h2>
//           <button
//             onClick={onClose}
//             className="text-xs px-2 py-1 border rounded-lg hover:bg-gray-100"
//           >
//             Close
//           </button>
//         </div>

//         <p className="text-xs mb-2">
//           Pay <strong>₹{Math.round(payment.amount || 0)}</strong> for{" "}
//           <strong>{payment.productName || "your selected item"}</strong>
//         </p>

//         <div className="flex justify-center my-3">
//           {payment.qrData ? (
//             <img
//               src={qrUrl}
//               alt="UPI QR"
//               className="w-48 h-48 rounded-lg border"
//             />
//           ) : (
//             <div className="w-48 h-48 flex items-center justify-center border rounded-lg text-xs">
//               QR unavailable
//             </div>
//           )}
//         </div>

//         <div className="text-xs mb-2 flex justify-between items-center">
//           <span className="font-medium">{statusLabel}</span>
//           {payment.status === "pending" && (
//             <span className="text-[10px] text-gray-600">
//               Expires in {remaining}s
//             </span>
//           )}
//         </div>

//         <div className="flex gap-2 mt-3">
//           <button
//             onClick={onRegenerate}
//             disabled={payment.status === "success"}
//             className="flex-1 px-3 py-2 text-xs border rounded-lg hover:bg-gray-50 disabled:opacity-60"
//           >
//             Regenerate QR
//           </button>
//           <button
//             onClick={onPaid}
//             disabled={payment.status !== "pending"}
//             className="flex-1 px-3 py-2 text-xs bg-[var(--brand-primary)] text-white rounded-lg disabled:opacity-60"
//           >
//             I&apos;ve paid
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ---------- Main Chat Page ----------
// export default function ChatPage() {
//   const navigate = useNavigate();
//   const { token, logout } = useAuth();
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
//   const [showCart, setShowCart] = useState(true);
//   const [cart, setCart] = useState({ items: [], subtotal: 0, count: 0 });
//   const [addingId, setAddingId] = useState(null);

//   const [showSidebar, setShowSidebar] = useState(false); // mobile drawer
//   const [isTyping, setIsTyping] = useState(false); // animated dots while waiting

//   // NEW: payment state
//   const [paymentState, setPaymentState] = useState(null);
//   // shape: { intentId, qrData, amount, productName, expiresAt, status }

//   const starters = [
//     "Show me bestselling tshirt under ₹999",
//     "Find light blue slim jeans",
//     "What do you do ?",
//     "Recommend me a black tshirt",
//     "What’s on sale today?",
//   ];

//   const sessionId = "default-session";
//   const listRef = useRef(null);
//   const bottomRef = useRef(null);
//   const typingTimerRef = useRef(null);

//   const scrollToBottom = (smooth = true) => {
//     if (bottomRef.current)
//       bottomRef.current.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
//   };

//   useEffect(() => {
//     if (!token) return;
//     const loadHistory = async () => {
//       try {
//         const { data } = await api.get("/history/me");
//         setMessages((data || []).reverse());
//       } catch (err) {
//         if (err?.response?.status === 401) {
//           logout();
//           navigate("/login");
//         }
//       }
//     };
//     const loadCart = async () => {
//       try {
//         const { data } = await api.get("/cart/summary", { params: { channel: "web" } });
//         const items = data?.cart?.items || [];
//         const subtotal = data?.cart?.subtotal || 0;
//         setCart({ items, subtotal, count: items.length });
//       } catch {}
//     };
//     loadHistory();
//     loadCart();
//   }, [token, logout, navigate]);

//   useEffect(() => {
//     scrollToBottom(false);
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   const typeOutAssistant = (fullText, baseMsg) => {
//     let i = 0;
//     const id = Symbol("assistant");
//     setMessages((prev) => [...prev, { ...baseMsg, message: "", _id: id }]);
//     typingTimerRef.current = setInterval(() => {
//       i += Math.max(1, Math.floor(fullText.length / 80)); // speed
//       const chunk = fullText.slice(0, i);
//       setMessages((prev) =>
//         prev.map((m) => (m._id === id ? { ...m, message: chunk } : m))
//       );
//       if (i >= fullText.length) {
//         clearInterval(typingTimerRef.current);
//         typingTimerRef.current = null;
//         setIsTyping(false);
//       }
//     }, 12);
//   };

//   const sendMessage = async (overrideText) => {
//     const candidate = typeof overrideText === "string" ? overrideText : text;
//     const userText = (candidate ?? "").toString().trim();
//     if (!userText) return;

//     setMessages((prev) => [...prev, { role: "user", message: userText }]);
//     setText("");
//     setIsTyping(true);

//     try {
//       const { data } = await api.post("/chat", {
//         session_id: sessionId,
//         text: userText,
//         channel: "web",
//       });
//       const full = data?.results?.message || "";
//       const results = data?.results || {};
//       console.log("chat results ->", data?.results);

//       // --- handle QR payment mode from backend ---
//       const order = results.order;
//       if (order && order.mode === "qr") {
//         setPaymentState({
//           intentId: order.payment_intent_id,
//           qrData: order.qr_data,
//           amount: order.amount,
//           productName: order.product_name,
//           expiresAt: order.expires_at, // epoch seconds from backend
//           status: order.status || "pending",
//         });
//       } else if (order && order.status === "success") {
//         // close panel on success if needed
//         setPaymentState(null);
//       }

//       if (full) {
//         typeOutAssistant(full, { role: "assistant", results });
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: "", results },
//         ]);
//         setIsTyping(false);
//       }

//       if (data?.results?.cart) {
//         const items = data?.results?.cart?.items || [];
//         const subtotal = data?.results?.cart?.subtotal ?? cart.subtotal;
//         setCart({
//           items,
//           subtotal,
//           count: items.length || data?.results?.cart?.count || 0,
//         });
//       }
//     } catch (err) {
//       if (err?.response?.status === 401) {
//         logout();
//         navigate("/login");
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: "Sorry — something went wrong." },
//         ]);
//       }
//       setIsTyping(false);
//     }
//   };

//   // ---- Payment handlers ----
//   const handlePaymentPaid = async () => {
//     if (!paymentState) return;
//     try {
//       const { data } = await api.post("/payment/confirm", {
//         payment_intent_id: paymentState.intentId,
//       });

//       if (data?.message) {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: data.message },
//         ]);
//       }

//       if (data?.status === "success") {
//         setPaymentState((prev) =>
//           prev ? { ...prev, status: "success" } : prev
//         );
//       } else if (data?.status === "expired") {
//         setPaymentState((prev) =>
//           prev ? { ...prev, status: "expired" } : prev
//         );
//       } else if (data?.status === "failed") {
//         setPaymentState((prev) =>
//           prev ? { ...prev, status: "failed" } : prev
//         );
//       }
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           message: "Payment confirmation failed. Please try again.",
//         },
//       ]);
//     }
//   };

//   const handlePaymentRegenerate = async () => {
//     if (!paymentState) return;
//     try {
//       const { data } = await api.post("/payment/regenerate", {
//         payment_intent_id: paymentState.intentId,
//       });

//       if (data?.message) {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: data.message },
//         ]);
//       }

//       if (data?.status === "pending") {
//         setPaymentState((prev) =>
//           prev
//             ? {
//                 ...prev,
//                 status: "pending",
//                 qrData: data.qr_data,
//                 expiresAt: data.expires_at,
//               }
//             : prev
//         );
//       }
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", message: "Could not regenerate QR. Please try again." },
//       ]);
//     }
//   };

//   const handlePaymentTimeout = () => {
//     if (!paymentState) return;
//     setPaymentState((prev) =>
//       prev ? { ...prev, status: "expired" } : prev
//     );
//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "assistant",
//         message:
//           "The payment window expired. Would you like to continue and generate a fresh QR code?",
//       },
//     ]);
//   };

//   const handleAddToCart = async (productId, qty = 1) => {
//     try {
//       setAddingId(productId);
//       const { data } = await api.post("/cart/add", {
//         product_id: productId,
//         qty,
//         channel: "web",
//       });
//       const count = data?.cart?.count ?? cart.count + 1;
//       const { data: sum } = await api.get("/cart/summary", {
//         params: { channel: "web" },
//       });
//       const items = sum?.cart?.items || [];
//       const subtotal = sum?.cart?.subtotal || 0;
//       setCart({ items, subtotal, count: items.length || count });
//     } catch (err) {
//       if (err?.response?.status === 401) {
//         logout();
//         navigate("/login");
//       }
//     } finally {
//       setAddingId(null);
//     }
//   };

//   if (!token) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
//           <h2 className="text-xl font-semibold mb-2">Session expired</h2>
//           <p className="text-gray-600 mb-4">Please sign in again to continue.</p>
//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg"
//           >
//             Go to Sign in
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="retailco-theme min-h-screen">
//       <div className="min-h-screen">
//         <div className="flex h-screen w-full">
//           {/* Desktop sidebar */}
//           <aside className="hidden md:flex w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex-col p-4">
//             <div className="flex items-center justify-between">
//               <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
//                 + New Conversation
//               </button>
//               <button
//                 onClick={() => setShowCart((s) => !s)}
//                 className="ml-2 px-3 py-2 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50 text-black"
//                 title="Toggle cart panel"
//               >
//                 Cart
//               </button>
//             </div>

//             <nav className="mt-4 space-y-2">
//               <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//                 <span className="text-sm font-medium text-black">
//                   Default Session
//                 </span>
//                 <span className="text-xs text-[var(--text-light-secondary)] text-black">
//                   Today
//                 </span>
//               </a>
//             </nav>

//             {showCart && (
//               <CartSidebar token={token} onClose={() => setShowCart(false)} />
//             )}

//             <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
//               <div className="flex items-center justify-between gap-2">
//                 <button
//                   onClick={() => setShowProfile(true)}
//                   className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50 text-black"
//                 >
//                   Profile
//                 </button>
//                 <button
//                   onClick={() => {
//                     logout();
//                     navigate("/");
//                   }}
//                   className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* Mobile drawer sidebar */}
//           {showSidebar && (
//             <div className="md:hidden fixed inset-0 z-50">
//               <div
//                 className="absolute inset-0 bg-black/40"
//                 onClick={() => setShowSidebar(false)}
//               />
//               <aside className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-[var(--sidebar-light)] border-r border-[var(--border-light)] p-4">
//                 <div className="flex items-center justify-between">
//                   <div className="font-semibold text-black">Menu</div>
//                   <button
//                     onClick={() => setShowSidebar(false)}
//                     className="px-3 py-1.5 border rounded-lg text-black"
//                   >
//                     Close
//                   </button>
//                 </div>

//                 <nav className="mt-4 space-y-2">
//                   <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//                     <span className="text-sm font-medium text-black">
//                       Default Session
//                     </span>
//                     <span className="text-xs text-[var(--text-light-secondary)] text-black">
//                       Today
//                     </span>
//                   </a>
//                 </nav>

//                 <div className="mt-4">
//                   <button
//                     onClick={() => setShowCart(true)}
//                     className="w-full px-3 py-2 rounded-lg text-sm font-medium bg-white border text-black"
//                   >
//                     Open Cart
//                   </button>
//                 </div>

//                 <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
//                   <div className="flex items-center justify-between gap-2">
//                     <button
//                       onClick={() => setShowProfile(true)}
//                       className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border text-black"
//                     >
//                       Profile
//                     </button>
//                     <button
//                       onClick={() => {
//                         logout();
//                         navigate("/");
//                       }}
//                       className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200"
//                     >
//                       Sign Out
//                     </button>
//                   </div>
//                 </div>
//               </aside>
//             </div>
//           )}

//           {/* Main */}
//           <main className="flex-1 flex flex-col">
//             <header className="flex items-center h-[73px] px-4 md:px-8 border-b border-[var(--border-light)] justify-between">
//               <div className="flex items-center gap-2">
//                 <button
//                   className="md:hidden mr-1 px-3 py-2 border rounded-lg"
//                   onClick={() => setShowSidebar(true)}
//                   aria-label="Open menu"
//                 >
//                   ☰
//                 </button>
//                 <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
//               </div>
//               <div className="flex items-center gap-3 text-sm">
//                 <span className="px-3 py-1.5 bg-white border rounded-full text-black">
//                   Cart: <strong>{cart.count}</strong> item
//                   {cart.count === 1 ? "" : "s"} • ₹{cart.subtotal}
//                 </span>
//               </div>
//             </header>

//             {/* Messages */}
//             <div ref={listRef} className="flex-1 overflow-y-auto p-4 md:p-8">
//               <div className="max-w-3xl mx-auto space-y-8">
//                 {messages.length === 0 && !isTyping && (
//                   <div className="max-w-3xl mx-auto">
//                     <div className="mb-6">
//                       <h2 className="text-base font-semibold text-white/90">
//                         Try one of these
//                       </h2>
//                       <p className="text-sm text-white/60">
//                         Tap to ask and I’ll take it from there.
//                       </p>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {starters.map((q) => (
//                         <button
//                           key={q}
//                           onClick={() => sendMessage(q)}
//                           className="px-3 py-2 rounded-full text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 transition"
//                         >
//                           {q}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {messages.map((m, i) =>
//                   m.role === "user" ? (
//                     <div key={i} className="flex justify-end">
//                       <div className="bg-[var(--user-bubble-light)] text-white px-4 py-3 rounded-xl rounded-br-none max-w-lg">
//                         {m.message}
//                       </div>
//                     </div>
//                   ) : (
//                     <div key={i} className="flex items-start gap-4">
//                       <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">
//                         🤖
//                       </div>
//                       {m.results?.product_details && (
//   <div className="bg-white border border-[var(--border-light)] p-4 rounded-xl max-w-md">
//     <img
//       src={
//         m.results.product_details.images?.[0] ||
//         "https://via.placeholder.com/300"
//       }
//       alt={m.results.product_details.name}
//       className="w-full h-48 object-cover rounded-lg mb-3"
//     />

//     <h3 className="font-bold text-base text-black">
//       {m.results.product_details.name}
//     </h3>

//     <p className="text-lg font-semibold text-black mt-1">
//       ₹{m.results.product_details.price}
//     </p>

//     <p className="text-sm text-gray-700 mt-2">
//       {m.results.product_details.description}
//     </p>

//     {m.results.product_details.attributes && (
//       <div className="mt-3 text-xs text-gray-600">
//         {Object.entries(m.results.product_details.attributes).map(
//           ([k, v]) => (
//             <div key={k}>
//               <strong className="capitalize">{k}:</strong>{" "}
//               {Array.isArray(v) ? v.join(", ") : v}
//             </div>
//           )
//         )}
//       </div>
//     )}
//   </div>
// )}

//                       <div className="flex flex-col gap-4 w-full">
//                         <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                           <p className="text-sm whitespace-pre-wrap ">
//                             {m.message}
//                           </p>
//                         </div>

//                         {m.results?.items &&
//                           m.results.items.map((item, j) => (
//                             <div
//                               key={j}
//                               className="bg-white border border-[var(--border-light)] p-4 rounded-xl flex items-center gap-4 max-w-md"
//                             >
//                               <img
//                                 alt={item.name}
//                                 src={
//                                   item.image ||
//                                   "https://via.placeholder.com/100"
//                                 }
//                                 className="w-24 h-24 object-cover rounded-lg text-black"
//                               />
//                               <div className="flex-grow">
//                                 <h3 className="font-bold text-sm text-black">
//                                   {item.name}
//                                 </h3>
//                                 <p className="text-lg font-bold mt-1 text-black">
//                                   ₹{item.price}
//                                 </p>
//                               </div>
//                               <button
//                                 onClick={() =>
//                                   handleAddToCart(item.product_id, 1)
//                                 }
//                                 disabled={addingId === item.product_id}
//                                 className={`px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg text-sm ${
//                                   addingId === item.product_id
//                                     ? "opacity-60 cursor-not-allowed "
//                                     : ""
//                                 }`}
//                               >
//                                 {addingId === item.product_id
//                                   ? "Adding..."
//                                   : "Add to Cart"}
//                               </button>
//                             </div>
//                           ))}

//                         {m.results?.cart_message && (
//                           <div className="bg-white border border-[var(--border-light)] p-3 rounded-lg text-sm text-black">
//                             {m.results.cart_message}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )
//                 )}

//                 {isTyping && (
//                   <div className="flex items-start gap-4">
//                     <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">
//                       🤖
//                     </div>
//                     <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                       <span
//                         className="typing-dots"
//                         aria-label="Assistant is typing"
//                       >
//                         <span className="dot" />
//                         <span className="dot" />
//                         <span className="dot" />
//                       </span>
//                     </div>
//                   </div>
//                 )}

//                 <div ref={bottomRef} />
//               </div>
//             </div>

//             {/* Payment panel */}
//             {paymentState && (
//               <PaymentQRPanel
//                 payment={paymentState}
//                 onPaid={handlePaymentPaid}
//                 onRegenerate={handlePaymentRegenerate}
//                 onClose={() => setPaymentState(null)}
//                 onTimeout={handlePaymentTimeout}
//               />
//             )}

//             {/* Input */}
//             <div className="p-3 md:p-4 bg-[var(--background-light)] border-t border-[var(--border-light)]">
//               <div className="max-w-3xl mx-auto flex gap-2">
//                 <input
//                   className="flex-1 border rounded-lg py-3 px-3 md:px-4 text-sm text-black"
//                   placeholder="Type your message..."
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="bg-[var(--brand-primary)] text-white rounded-md px-4"
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>
//           </main>
//         </div>

//         {/* Floating Cart on mobile */}
//         {showCart && (
//           <div className="md:hidden fixed inset-0 z-40">
//             <div
//               className="absolute inset-0 bg-black/40"
//               onClick={() => setShowCart(false)}
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[70%] overflow-y-auto">
//               <div className="p-3 border-b flex items-center justify-between">
//                 <div className="font-semibold text-black">Cart</div>
//                 <button
//                   className="px-3 py-1.5 border rounded-lg text-black"
//                   onClick={() => setShowCart(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//               <CartSidebar token={token} onClose={() => setShowCart(false)} />
//             </div>
//           </div>
//         )}

//         <ProfileModal open={showProfile} onClose={() => setShowProfile(false)} />
//       </div>
//     </div>
//   );
// }




// import { useNavigate } from "react-router-dom";
// import React, { useEffect, useRef, useState } from "react";
// import { api } from "../utils/api";
// import useAuth from "../store/useAuth";
// import "./chat.css";
// import ProfileModal from "../components/ProfileModal";
// import CartSidebar from "../components/CartSidebar";

// // ---------- Payment QR Panel ----------
// function PaymentQRPanel({ payment, onPaid, onRegenerate, onClose, onTimeout }) {
//   const [remaining, setRemaining] = useState(() => {
//     if (!payment?.expiresAt) return 0;
//     return Math.max(0, Math.floor(payment.expiresAt - Date.now() / 1000));
//   });

//   useEffect(() => {
//     if (!payment?.expiresAt) return;
//     const id = setInterval(() => {
//       const secondsLeft = Math.max(
//         0,
//         Math.floor(payment.expiresAt - Date.now() / 1000)
//       );
//       setRemaining(secondsLeft);
//       if (secondsLeft <= 0) {
//         clearInterval(id);
//         if (payment.status === "pending" && onTimeout) {
//           onTimeout();
//         }
//       }
//     }, 1000);
//     return () => clearInterval(id);
//   }, [payment?.expiresAt, payment?.status, onTimeout]);

//   if (!payment) return null;

//   const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
//     payment.qrData || ""
//   )}`;

//   const statusLabel =
//     payment.status === "success"
//       ? "Payment successful"
//       : payment.status === "failed"
//       ? "Payment failed"
//       : payment.status === "expired"
//       ? "QR expired"
//       : "Waiting for payment";

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-sm text-black">
//         <div className="flex justify-between items-center mb-3">
//           <h2 className="font-semibold text-sm">Complete Payment</h2>
//           <button
//             onClick={onClose}
//             className="text-xs px-2 py-1 border rounded-lg hover:bg-gray-100"
//           >
//             Close
//           </button>
//         </div>

//         <p className="text-xs mb-2">
//           Pay <strong>₹{Math.round(payment.amount || 0)}</strong> for{" "}
//           <strong>{payment.productName || "your selected item"}</strong>
//         </p>

//         <div className="flex justify-center my-3">
//           {payment.qrData ? (
//             <img
//               src={qrUrl}
//               alt="UPI QR"
//               className="w-48 h-48 rounded-lg border"
//             />
//           ) : (
//             <div className="w-48 h-48 flex items-center justify-center border rounded-lg text-xs">
//               QR unavailable
//             </div>
//           )}
//         </div>

//         <div className="text-xs mb-2 flex justify-between items-center">
//           <span className="font-medium">{statusLabel}</span>
//           {payment.status === "pending" && (
//             <span className="text-[10px] text-gray-600">
//               Expires in {remaining}s
//             </span>
//           )}
//         </div>

//         <div className="flex gap-2 mt-3">
//           <button
//             onClick={onRegenerate}
//             disabled={payment.status === "success"}
//             className="flex-1 px-3 py-2 text-xs border rounded-lg hover:bg-gray-50 disabled:opacity-60"
//           >
//             Regenerate QR
//           </button>
//           <button
//             onClick={onPaid}
//             disabled={payment.status !== "pending"}
//             className="flex-1 px-3 py-2 text-xs bg-[var(--brand-primary)] text-white rounded-lg disabled:opacity-60"
//           >
//             I&apos;ve paid
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ---------- Main Chat Page ----------
// export default function ChatPage() {
//   const navigate = useNavigate();
//   const { token, logout } = useAuth();
//   const [messages, setMessages] = useState([]);
//   const [text, setText] = useState("");
//   const [showProfile, setShowProfile] = useState(false);
  
//   // Cart State (Lifted up so ChatPage controls it)
//   const [showCart, setShowCart] = useState(false); // Changed default to false to be less intrusive
//   const [cart, setCart] = useState({ items: [], subtotal: 0, count: 0 });
//   const [addingId, setAddingId] = useState(null);

//   const [showSidebar, setShowSidebar] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);

//   // Payment state
//   const [paymentState, setPaymentState] = useState(null);

//   const starters = [
//     "Show me bestselling tshirt under ₹999",
//     "Find light blue slim jeans",
//     "What do you do ?",
//     "Recommend me a black tshirt",
//     "What’s on sale today?",
//   ];

//   const sessionId = "default-session";
//   const listRef = useRef(null);
//   const bottomRef = useRef(null);
//   const typingTimerRef = useRef(null);

//   const scrollToBottom = (smooth = true) => {
//     if (bottomRef.current)
//       bottomRef.current.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
//   };

//   useEffect(() => {
//     if (!token) return;
//     const loadHistory = async () => {
//       try {
//         const { data } = await api.get("/history/me");
//         setMessages((data || []).reverse());
//       } catch (err) {
//         if (err?.response?.status === 401) {
//           logout();
//           navigate("/login");
//         }
//       }
//     };
//     const loadCart = async () => {
//       try {
//         const { data } = await api.get("/cart/summary", { params: { channel: "web" } });
//         const items = data?.cart?.items || [];
//         const subtotal = data?.cart?.subtotal || 0;
//         setCart({ items, subtotal, count: items.length });
//       } catch {}
//     };
//     loadHistory();
//     loadCart();
//   }, [token, logout, navigate]);

//   useEffect(() => {
//     scrollToBottom(false);
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   // --- Clear Chat Logic ---
//   const handleClearChat = async () => {
//     if (!window.confirm("Are you sure you want to clear your chat history?")) return;
    
//     try {
//       await api.delete("/history/clear");
//       setMessages([]); // Clear local UI immediately
      
//       // Optional: Refresh cart in case the clear logic wiped it on backend (depending on your crud.py)
//       // If your crud.py preserves cart, we don't strictly need to reload it, but it's safe.
//       const { data } = await api.get("/cart/summary", { params: { channel: "web" } });
//       const items = data?.cart?.items || [];
//       const subtotal = data?.cart?.subtotal || 0;
//       setCart({ items, subtotal, count: items.length });

//     } catch (err) {
//       console.error("Failed to clear chat", err);
//       alert("Could not clear chat history.");
//     }
//   };

//   const typeOutAssistant = (fullText, baseMsg) => {
//     let i = 0;
//     const id = Symbol("assistant");
//     setMessages((prev) => [...prev, { ...baseMsg, message: "", _id: id }]);
//     typingTimerRef.current = setInterval(() => {
//       i += Math.max(1, Math.floor(fullText.length / 80)); 
//       const chunk = fullText.slice(0, i);
//       setMessages((prev) =>
//         prev.map((m) => (m._id === id ? { ...m, message: chunk } : m))
//       );
//       if (i >= fullText.length) {
//         clearInterval(typingTimerRef.current);
//         typingTimerRef.current = null;
//         setIsTyping(false);
//       }
//     }, 12);
//   };

//   const sendMessage = async (overrideText) => {
//     const candidate = typeof overrideText === "string" ? overrideText : text;
//     const userText = (candidate ?? "").toString().trim();
//     if (!userText) return;

//     setMessages((prev) => [...prev, { role: "user", message: userText }]);
//     setText("");
//     setIsTyping(true);

//     try {
//       const { data } = await api.post("/chat", {
//         session_id: sessionId,
//         text: userText,
//         channel: "web",
//       });
//       const full = data?.results?.message || "";
//       const results = data?.results || {};

//       // Handle Payment
//       const order = results.order;
//       if (order && order.mode === "qr") {
//         setPaymentState({
//           intentId: order.payment_intent_id,
//           qrData: order.qr_data,
//           amount: order.amount,
//           productName: order.product_name,
//           expiresAt: order.expires_at,
//           status: order.status || "pending",
//         });
//       } else if (order && order.status === "success") {
//         setPaymentState(null);
//       }

//       if (full) {
//         typeOutAssistant(full, { role: "assistant", results });
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: "", results },
//         ]);
//         setIsTyping(false);
//       }

//       // Handle Cart Updates from Chat Response
//       if (data?.results?.cart) {
//         const items = data?.results?.cart?.items || [];
//         const subtotal = data?.results?.cart?.subtotal ?? cart.subtotal;
//         setCart({
//           items,
//           subtotal,
//           count: items.length || data?.results?.cart?.count || 0,
//         });
//         // Optional: Open sidebar if items were added
//         // setShowCart(true); 
//       }
//     } catch (err) {
//       if (err?.response?.status === 401) {
//         logout();
//         navigate("/login");
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: "Sorry — something went wrong." },
//         ]);
//       }
//       setIsTyping(false);
//     }
//   };

//   const handlePaymentPaid = async () => {
//     if (!paymentState) return;
//     try {
//       const { data } = await api.post("/payment/confirm", {
//         payment_intent_id: paymentState.intentId,
//       });

//       if (data?.message) {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: data.message },
//         ]);
//       }

//       if (data?.status === "success") {
//         setPaymentState((prev) => (prev ? { ...prev, status: "success" } : prev));
//       } else if (data?.status === "expired") {
//         setPaymentState((prev) => (prev ? { ...prev, status: "expired" } : prev));
//       } else if (data?.status === "failed") {
//         setPaymentState((prev) => (prev ? { ...prev, status: "failed" } : prev));
//       }
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", message: "Payment confirmation failed. Please try again." },
//       ]);
//     }
//   };

//   const handlePaymentRegenerate = async () => {
//     if (!paymentState) return;
//     try {
//       const { data } = await api.post("/payment/regenerate", {
//         payment_intent_id: paymentState.intentId,
//       });

//       if (data?.message) {
//         setMessages((prev) => [
//           ...prev,
//           { role: "assistant", message: data.message },
//         ]);
//       }

//       if (data?.status === "pending") {
//         setPaymentState((prev) =>
//           prev
//             ? {
//                 ...prev,
//                 status: "pending",
//                 qrData: data.qr_data,
//                 expiresAt: data.expires_at,
//               }
//             : prev
//         );
//       }
//     } catch (err) {
//       console.error(err);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", message: "Could not regenerate QR. Please try again." },
//       ]);
//     }
//   };

//   const handlePaymentTimeout = () => {
//     if (!paymentState) return;
//     setPaymentState((prev) => (prev ? { ...prev, status: "expired" } : prev));
//     setMessages((prev) => [
//       ...prev,
//       {
//         role: "assistant",
//         message: "The payment window expired. Would you like to continue and generate a fresh QR code?",
//       },
//     ]);
//   };

//   // ADD TO CART HANDLER
//   const handleAddToCart = async (productId, qty = 1) => {
//     try {
//       setAddingId(productId);
//       const { data } = await api.post("/cart/add", {
//         product_id: productId,
//         qty,
//         channel: "web",
//       });
      
//       // Update local cart state immediately so UI reflects it
//       const { data: sum } = await api.get("/cart/summary", {
//         params: { channel: "web" },
//       });
      
//       const items = sum?.cart?.items || [];
//       const subtotal = sum?.cart?.subtotal || 0;
//       setCart({ items, subtotal, count: items.length });
      
//       // Optional: Auto-open cart to show user
//       setShowCart(true);

//     } catch (err) {
//       if (err?.response?.status === 401) {
//         logout();
//         navigate("/login");
//       }
//     } finally {
//       setAddingId(null);
//     }
//   };

//   if (!token) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
//           <h2 className="text-xl font-semibold mb-2">Session expired</h2>
//           <p className="text-gray-600 mb-4">Please sign in again to continue.</p>
//           <button
//             onClick={() => navigate("/login")}
//             className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg"
//           >
//             Go to Sign in
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="retailco-theme min-h-screen">
//       <div className="min-h-screen">
//         <div className="flex h-screen w-full">
//           {/* Desktop sidebar */}
//           <aside className="hidden md:flex w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex-col p-4">
//             <div className="flex items-center justify-between">
//               <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
//                 + New Conversation
//               </button>
//               <button
//                 onClick={() => setShowCart((s) => !s)}
//                 className="ml-2 px-3 py-2 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50 text-black"
//                 title="Toggle cart panel"
//               >
//                 Cart
//               </button>
//             </div>

//             <nav className="mt-4 space-y-2">
//               <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//                 <span className="text-sm font-medium text-black">
//                   Default Session
//                 </span>
//                 <span className="text-xs text-[var(--text-light-secondary)] text-black">
//                   Today
//                 </span>
//               </a>
//             </nav>

//             {/* Desktop Cart: Passing cart items down */}
//             {showCart && (
//               <CartSidebar 
//                 token={token} 
//                 onClose={() => setShowCart(false)} 
//                 cart={cart} // <--- PASSING CART DATA HERE
//               />
//             )}

//             <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
//               {/* CLEAR HISTORY BUTTON */}
//               <button
//                 onClick={handleClearChat}
//                 className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
//               >
//                 🗑️ Clear History
//               </button>

//               <div className="flex items-center justify-between gap-2">
//                 <button
//                   onClick={() => setShowProfile(true)}
//                   className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50 text-black"
//                 >
//                   Profile
//                 </button>
//                 <button
//                   onClick={() => {
//                     logout();
//                     navigate("/");
//                   }}
//                   className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50"
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* Mobile drawer sidebar */}
//           {showSidebar && (
//             <div className="md:hidden fixed inset-0 z-50">
//               <div
//                 className="absolute inset-0 bg-black/40"
//                 onClick={() => setShowSidebar(false)}
//               />
//               <aside className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-[var(--sidebar-light)] border-r border-[var(--border-light)] p-4 flex flex-col">
//                 <div className="flex items-center justify-between">
//                   <div className="font-semibold text-black">Menu</div>
//                   <button
//                     onClick={() => setShowSidebar(false)}
//                     className="px-3 py-1.5 border rounded-lg text-black"
//                   >
//                     Close
//                   </button>
//                 </div>

//                 <nav className="mt-4 space-y-2">
//                   <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
//                     <span className="text-sm font-medium text-black">
//                       Default Session
//                     </span>
//                     <span className="text-xs text-[var(--text-light-secondary)] text-black">
//                       Today
//                     </span>
//                   </a>
//                 </nav>

//                 <div className="mt-4">
//                   <button
//                     onClick={() => {
//                         setShowCart(true);
//                         setShowSidebar(false);
//                     }}
//                     className="w-full px-3 py-2 rounded-lg text-sm font-medium bg-white border text-black"
//                   >
//                     Open Cart ({cart.count})
//                   </button>
//                 </div>

//                 <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
//                    {/* MOBILE CLEAR HISTORY BUTTON */}
//                    <button
//                     onClick={handleClearChat}
//                     className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mb-2"
//                   >
//                     🗑️ Clear History
//                   </button>

//                   <div className="flex items-center justify-between gap-2">
//                     <button
//                       onClick={() => setShowProfile(true)}
//                       className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border text-black"
//                     >
//                       Profile
//                     </button>
//                     <button
//                       onClick={() => {
//                         logout();
//                         navigate("/");
//                       }}
//                       className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200"
//                     >
//                       Sign Out
//                     </button>
//                   </div>
//                 </div>
//               </aside>
//             </div>
//           )}

//           {/* Main */}
//           <main className="flex-1 flex flex-col">
//             <header className="flex items-center h-[73px] px-4 md:px-8 border-b border-[var(--border-light)] justify-between">
//               <div className="flex items-center gap-2">
//                 <button
//                   className="md:hidden mr-1 px-3 py-2 border rounded-lg"
//                   onClick={() => setShowSidebar(true)}
//                   aria-label="Open menu"
//                 >
//                   ☰
//                 </button>
//                 <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
//               </div>
//               <div className="flex items-center gap-3 text-sm">
//                 <span className="px-3 py-1.5 bg-white border rounded-full text-black">
//                   Cart: <strong>{cart.count}</strong> item
//                   {cart.count === 1 ? "" : "s"} • ₹{cart.subtotal}
//                 </span>
//               </div>
//             </header>

//             {/* Messages */}
//             <div ref={listRef} className="flex-1 overflow-y-auto p-4 md:p-8">
//               <div className="max-w-3xl mx-auto space-y-8">
//                 {messages.length === 0 && !isTyping && (
//                   <div className="max-w-3xl mx-auto">
//                     <div className="mb-6">
//                       <h2 className="text-base font-semibold text-white/90">
//                         Try one of these
//                       </h2>
//                       <p className="text-sm text-white/60">
//                         Tap to ask and I’ll take it from there.
//                       </p>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                       {starters.map((q) => (
//                         <button
//                           key={q}
//                           onClick={() => sendMessage(q)}
//                           className="px-3 py-2 rounded-full text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 transition"
//                         >
//                           {q}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {messages.map((m, i) =>
//                   m.role === "user" ? (
//                     <div key={i} className="flex justify-end">
//                       <div className="bg-[var(--user-bubble-light)] text-white px-4 py-3 rounded-xl rounded-br-none max-w-lg">
//                         {m.message}
//                       </div>
//                     </div>
//                   ) : (
//                     <div key={i} className="flex items-start gap-4">
//                       <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">
//                         🤖
//                       </div>
                      
//                       {/* Product Card Rendering logic... (kept same) */}
//                       {m.results?.product_details && (
//                           <div className="bg-white border border-[var(--border-light)] p-4 rounded-xl max-w-md">
//                             <img
//                               src={m.results.product_details.images?.[0] || "https://via.placeholder.com/300"}
//                               alt={m.results.product_details.name}
//                               className="w-full h-48 object-cover rounded-lg mb-3"
//                             />
//                             <h3 className="font-bold text-base text-black">{m.results.product_details.name}</h3>
//                             <p className="text-lg font-semibold text-black mt-1">₹{m.results.product_details.price}</p>
//                             <p className="text-sm text-gray-700 mt-2">{m.results.product_details.description}</p>
//                             {/* Attributes rendering... */}
//                           </div>
//                       )}

//                       <div className="flex flex-col gap-4 w-full">
//                         <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                           <p className="text-sm whitespace-pre-wrap">{m.message}</p>
//                         </div>

//                         {/* Recommendation Items */}
//                         {m.results?.items &&
//                           m.results.items.map((item, j) => (
//                             <div
//                               key={j}
//                               className="bg-white border border-[var(--border-light)] p-4 rounded-xl flex items-center gap-4 max-w-md"
//                             >
//                               <img
//                                 alt={item.name}
//                                 src={item.image || "https://via.placeholder.com/100"}
//                                 className="w-24 h-24 object-cover rounded-lg text-black"
//                               />
//                               <div className="flex-grow">
//                                 <h3 className="font-bold text-sm text-black">{item.name}</h3>
//                                 <p className="text-lg font-bold mt-1 text-black">₹{item.price}</p>
//                               </div>
//                               <button
//                                 onClick={() => handleAddToCart(item.product_id, 1)}
//                                 disabled={addingId === item.product_id}
//                                 className={`px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg text-sm ${
//                                   addingId === item.product_id ? "opacity-60 cursor-not-allowed " : ""
//                                 }`}
//                               >
//                                 {addingId === item.product_id ? "Adding..." : "Add to Cart"}
//                               </button>
//                             </div>
//                           ))}

//                         {m.results?.cart_message && (
//                           <div className="bg-white border border-[var(--border-light)] p-3 rounded-lg text-sm text-black">
//                             {m.results.cart_message}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )
//                 )}

//                 {isTyping && (
//                   <div className="flex items-start gap-4">
//                     <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">🤖</div>
//                     <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
//                       <span className="typing-dots" aria-label="Assistant is typing">
//                         <span className="dot" /><span className="dot" /><span className="dot" />
//                       </span>
//                     </div>
//                   </div>
//                 )}
//                 <div ref={bottomRef} />
//               </div>
//             </div>

//             {paymentState && (
//               <PaymentQRPanel
//                 payment={paymentState}
//                 onPaid={handlePaymentPaid}
//                 onRegenerate={handlePaymentRegenerate}
//                 onClose={() => setPaymentState(null)}
//                 onTimeout={handlePaymentTimeout}
//               />
//             )}

//             {/* Input */}
//             <div className="p-3 md:p-4 bg-[var(--background-light)] border-t border-[var(--border-light)]">
//               <div className="max-w-3xl mx-auto flex gap-2">
//                 <input
//                   className="flex-1 border rounded-lg py-3 px-3 md:px-4 text-sm text-black"
//                   placeholder="Type your message..."
//                   value={text}
//                   onChange={(e) => setText(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                 />
//                 <button
//                   onClick={sendMessage}
//                   className="bg-[var(--brand-primary)] text-white rounded-md px-4"
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>
//           </main>
//         </div>

//         {/* Floating Cart on mobile */}
//         {showCart && (
//           <div className="md:hidden fixed inset-0 z-40">
//             <div
//               className="absolute inset-0 bg-black/40"
//               onClick={() => setShowCart(false)}
//             />
//             <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[70%] overflow-y-auto">
//               <div className="p-3 border-b flex items-center justify-between">
//                 <div className="font-semibold text-black">Cart</div>
//                 <button
//                   className="px-3 py-1.5 border rounded-lg text-black"
//                   onClick={() => setShowCart(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//               <CartSidebar 
//                 token={token} 
//                 onClose={() => setShowCart(false)} 
//                 cart={cart} // <--- PASSING CART HERE TOO
//               />
//             </div>
//           </div>
//         )}

//         <ProfileModal open={showProfile} onClose={() => setShowProfile(false)} />
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { api } from "../utils/api";
import useAuth from "../store/useAuth";
import "./chat.css";
import ProfileModal from "../components/ProfileModal";
import CartSidebar from "../components/CartSidebar";

// ---------- Payment Panel (Fixed Button Logic) ----------
function PaymentQRPanel({ payment, onPaid, onRegenerate, onClose, onTimeout }) {
  const [remaining, setRemaining] = useState(() => {
    const expiresAt = payment?.expiresAt || (Date.now() / 1000 + 300);
    return Math.max(0, Math.floor(expiresAt - Date.now() / 1000));
  });

  // Helper to check if payment is in a valid pending state
  const isPending = ["pending", "pending_payment"].includes(payment?.status);

  useEffect(() => {
    const expiresAt = payment?.expiresAt || (Date.now() / 1000 + 300);
    const id = setInterval(() => {
      const secondsLeft = Math.max(
        0,
        Math.floor(expiresAt - Date.now() / 1000)
      );
      setRemaining(secondsLeft);
      if (secondsLeft <= 0) {
        clearInterval(id);
        if (isPending && onTimeout) {
          onTimeout();
        }
      }
    }, 1000);
    return () => clearInterval(id);
  }, [payment?.expiresAt, isPending, onTimeout]);

  if (!payment) return null;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
    payment.qrData || ""
  )}`;

  const isCard = payment.type === "card";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm text-black relative animate-fade-in">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h2 className="font-bold text-lg">
            {isCard ? "Secure Card Payment" : "Scan to Pay"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-4 text-center">
          Amount to Pay: <span className="text-xl font-bold text-black">₹{Math.round(payment.amount || 0)}</span>
        </p>

        {/* --- DYNAMIC CONTENT SWITCH --- */}
        <div className="flex justify-center my-4 min-h-[200px] items-center">
          
          {/* OPTION A: CARD FORM */}
          {isCard ? (
            <div className="w-full space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500">Card Number</label>
                <div className="flex items-center border rounded px-2 bg-gray-50">
                  <span className="text-lg mr-2">💳</span>
                  <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-2 bg-transparent outline-none text-sm font-mono" />
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="space-y-1 flex-1">
                  <label className="text-xs font-semibold text-gray-500">Expiry</label>
                  <input type="text" placeholder="MM/YY" className="w-full p-2 border rounded bg-gray-50 outline-none text-sm font-mono" />
                </div>
                <div className="space-y-1 w-20">
                  <label className="text-xs font-semibold text-gray-500">CVV</label>
                  <input type="password" placeholder="123" className="w-full p-2 border rounded bg-gray-50 outline-none text-sm font-mono" />
                </div>
              </div>
              <p className="text-[10px] text-green-600 text-center pt-2">🔒 128-bit SSL Encrypted Connection</p>
            </div>
          ) : (
            
          /* OPTION B: QR CODE */
            payment.qrData ? (
              <img
                src={qrUrl}
                alt="UPI QR"
                className="w-52 h-52 rounded-lg border-2 border-dashed border-gray-300 p-1"
              />
            ) : (
              <div className="w-48 h-48 flex items-center justify-center border rounded-lg text-xs text-gray-400">
                Generating QR...
              </div>
            )
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col gap-3 mt-4">
          <button
            onClick={onPaid}
            // 🔥 FIX: Enable button if status is ANY pending state
            disabled={!isPending}
            className="w-full py-3 text-sm font-bold bg-[var(--brand-primary)] text-white rounded-lg hover:brightness-110 shadow-md disabled:opacity-50 transition-all"
          >
            {isCard ? "Pay Securely" : "I have completed payment"}
          </button>
          
          {!isCard && (
            <button
              onClick={onRegenerate}
              className="text-xs text-gray-500 hover:text-black underline"
            >
              Regenerate QR Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------- Main Chat Page ----------
export default function ChatPage() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState({ items: [], subtotal: 0, count: 0 });
  const [addingId, setAddingId] = useState(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Payment state
  const [paymentState, setPaymentState] = useState(null);

  const starters = [
    "Show me bestselling tshirt under ₹999",
    "Find light blue slim jeans",
    "What do you do ?",
    "Recommend me a black tshirt",
    "What’s on sale today?",
  ];

  const sessionId = "default-session";
  const listRef = useRef(null);
  const bottomRef = useRef(null);
  const typingTimerRef = useRef(null);

  const scrollToBottom = (smooth = true) => {
    if (bottomRef.current)
      bottomRef.current.scrollIntoView({ behavior: smooth ? "smooth" : "auto" });
  };

  useEffect(() => {
    if (!token) return;
    const loadHistory = async () => {
      try {
        const { data } = await api.get("/history/me");
        setMessages((data || []).reverse());
      } catch (err) {
        if (err?.response?.status === 401) {
          logout();
          navigate("/login");
        }
      }
    };
    const loadCart = async () => {
      try {
        const { data } = await api.get("/cart/summary", { params: { channel: "web" } });
        const items = data?.cart?.items || [];
        const subtotal = data?.cart?.subtotal || 0;
        setCart({ items, subtotal, count: items.length });
      } catch {}
    };
    loadHistory();
    loadCart();
  }, [token, logout, navigate]);

  useEffect(() => {
    scrollToBottom(false);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleClearChat = async () => {
    if (!window.confirm("Are you sure you want to clear your chat history?")) return;
    try {
      await api.delete("/history/clear");
      setMessages([]);
      const { data } = await api.get("/cart/summary", { params: { channel: "web" } });
      const items = data?.cart?.items || [];
      const subtotal = data?.cart?.subtotal || 0;
      setCart({ items, subtotal, count: items.length });
    } catch (err) {
      console.error("Failed to clear chat", err);
      alert("Could not clear chat history.");
    }
  };

  const typeOutAssistant = (fullText, baseMsg) => {
    let i = 0;
    const id = Symbol("assistant");
    setMessages((prev) => [...prev, { ...baseMsg, message: "", _id: id }]);
    typingTimerRef.current = setInterval(() => {
      i += Math.max(1, Math.floor(fullText.length / 80)); 
      const chunk = fullText.slice(0, i);
      setMessages((prev) =>
        prev.map((m) => (m._id === id ? { ...m, message: chunk } : m))
      );
      if (i >= fullText.length) {
        clearInterval(typingTimerRef.current);
        typingTimerRef.current = null;
        setIsTyping(false);
      }
    }, 12);
  };

  const sendMessage = async (overrideText) => {
    const candidate = typeof overrideText === "string" ? overrideText : text;
    const userText = (candidate ?? "").toString().trim();
    if (!userText) return;

    setMessages((prev) => [...prev, { role: "user", message: userText }]);
    setText("");
    setIsTyping(true);

    try {
      const { data } = await api.post("/chat", {
        session_id: sessionId,
        text: userText,
        channel: "web",
      });
      const full = data?.results?.message || "";
      const results = data?.results || {};

      // --- PAYMENT HANDLING FIX ---
      const order = results.order;
      if (order && (order.qr_data || order.payment_type === "upi" || order.show_card_ui)) {
        
        // Debug Log: Check if backend is sending ID
        console.log("Processing Order:", order);

        setPaymentState({
          intentId: order.payment_intent_id, // This must NOT be undefined
          qrData: order.qr_data, 
          amount: order.amount,
          type: order.payment_type || (order.qr_data ? "upi" : "card"),
          productName: "Order Total",
          expiresAt: order.expires_at || (Date.now() / 1000 + 300),
          // Store raw status, Panel handles logic
          status:"pending", 
        });
      } 
      else if (order && order.status === "success") {
        setPaymentState(null);
      }

      if (full) {
        typeOutAssistant(full, { role: "assistant", results });
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", message: "", results },
        ]);
        setIsTyping(false);
      }

      if (data?.results?.cart) {
        const items = data?.results?.cart?.items || [];
        const subtotal = data?.results?.cart?.subtotal ?? cart.subtotal;
        setCart({
          items,
          subtotal,
          count: items.length || data?.results?.cart?.count || 0,
        });
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        logout();
        navigate("/login");
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", message: "Sorry — something went wrong." },
        ]);
      }
      setIsTyping(false);
    }
  };

  const handlePaymentPaid = async () => {
    if (!paymentState || !paymentState.intentId) {
      alert("Error: Payment Intent ID missing. Please refresh.");
      return;
    }
    try {
      const { data } = await api.post("/payment/confirm", {
        payment_intent_id: paymentState.intentId,
      });

      if (data?.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", message: data.message },
        ]);
      }

      if (data?.status === "success") {
        setPaymentState((prev) => (prev ? { ...prev, status: "success" } : prev));
      } else {
        setPaymentState((prev) => (prev ? { ...prev, status: data?.status || "failed" } : prev));
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: "Payment confirmation failed. Please try again." },
      ]);
    }
  };

  const handlePaymentRegenerate = async () => {
    if (!paymentState || !paymentState.intentId) {
      alert("Error: Cannot regenerate. Payment Intent ID is missing.");
      return;
    }
    try {
      const { data } = await api.post("/payment/regenerate", {
        payment_intent_id: paymentState.intentId,
      });

      if (data?.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", message: data.message },
        ]);
      }

      if (data?.status === "pending") {
        setPaymentState((prev) =>
          prev
            ? {
                ...prev,
                status: "pending",
                qrData: data.qr_data,
                expiresAt: data.expires_at,
              }
            : prev
        );
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: "Could not regenerate QR. Please try again." },
      ]);
    }
  };

  const handlePaymentTimeout = () => {
    if (!paymentState) return;
    setPaymentState((prev) => (prev ? { ...prev, status: "expired" } : prev));
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        message: "The payment window expired. Would you like to continue and generate a fresh QR code?",
      },
    ]);
  };

  const handleAddToCart = async (productId, qty = 1) => {
    try {
      setAddingId(productId);
      const { data } = await api.post("/cart/add", {
        product_id: productId,
        qty,
        channel: "web",
      });
      const { data: sum } = await api.get("/cart/summary", {
        params: { channel: "web" },
      });
      const items = sum?.cart?.items || [];
      const subtotal = sum?.cart?.subtotal || 0;
      setCart({ items, subtotal, count: items.length });
      setShowCart(true);
    } catch (err) {
      if (err?.response?.status === 401) {
        logout();
        navigate("/login");
      }
    } finally {
      setAddingId(null);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-md w-full bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-2">Session expired</h2>
          <p className="text-gray-600 mb-4">Please sign in again to continue.</p>
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg"
          >
            Go to Sign in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="retailco-theme min-h-screen">
      <div className="min-h-screen">
        <div className="flex h-screen w-full">
          <aside className="hidden md:flex w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex-col p-4">
            <div className="flex items-center justify-between">
              <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
                + New Conversation
              </button>
              <button
                onClick={() => setShowCart((s) => !s)}
                className="ml-2 px-3 py-2 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50 text-black"
                title="Toggle cart panel"
              >
                Cart
              </button>
            </div>
            <nav className="mt-4 space-y-2">
              <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
                <span className="text-sm font-medium text-black">Default Session</span>
                <span className="text-xs text-[var(--text-light-secondary)] text-black">Today</span>
              </a>
            </nav>
            {showCart && <CartSidebar token={token} onClose={() => setShowCart(false)} cart={cart} />}
            <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
              <button onClick={handleClearChat} className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
                🗑️ Clear History
              </button>
              <div className="flex items-center justify-between gap-2">
                <button onClick={() => setShowProfile(true)} className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50 text-black">Profile</button>
                <button onClick={() => { logout(); navigate("/"); }} className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50">Sign Out</button>
              </div>
            </div>
          </aside>

          {showSidebar && (
            <div className="md:hidden fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/40" onClick={() => setShowSidebar(false)} />
              <aside className="absolute left-0 top-0 h-full w-[85%] max-w-[320px] bg-[var(--sidebar-light)] border-r border-[var(--border-light)] p-4 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-black">Menu</div>
                  <button onClick={() => setShowSidebar(false)} className="px-3 py-1.5 border rounded-lg text-black">Close</button>
                </div>
                <div className="mt-4">
                  <button onClick={() => { setShowCart(true); setShowSidebar(false); }} className="w-full px-3 py-2 rounded-lg text-sm font-medium bg-white border text-black">Open Cart ({cart.count})</button>
                </div>
                <div className="mt-auto border-t border-[var(--border-light)] pt-4 space-y-1">
                  <button onClick={handleClearChat} className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg mb-2">🗑️ Clear History</button>
                  <div className="flex items-center justify-between gap-2">
                    <button onClick={() => setShowProfile(true)} className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border text-black">Profile</button>
                    <button onClick={() => { logout(); navigate("/"); }} className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200">Sign Out</button>
                  </div>
                </div>
              </aside>
            </div>
          )}

          <main className="flex-1 flex flex-col">
            <header className="flex items-center h-[73px] px-4 md:px-8 border-b border-[var(--border-light)] justify-between">
              <div className="flex items-center gap-2">
                <button className="md:hidden mr-1 px-3 py-2 border rounded-lg" onClick={() => setShowSidebar(true)}>☰</button>
                <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="px-3 py-1.5 bg-white border rounded-full text-black">Cart: <strong>{cart.count}</strong> item{cart.count === 1 ? "" : "s"} • ₹{cart.subtotal}</span>
              </div>
            </header>

            <div ref={listRef} className="flex-1 overflow-y-auto p-4 md:p-8">
              <div className="max-w-3xl mx-auto space-y-8">
                {messages.length === 0 && !isTyping && (
                  <div className="max-w-3xl mx-auto">
                    <div className="mb-6">
                      <h2 className="text-base font-semibold text-white/90">Try one of these</h2>
                      <p className="text-sm text-white/60">Tap to ask and I’ll take it from there.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {starters.map((q) => (
                        <button key={q} onClick={() => sendMessage(q)} className="px-3 py-2 rounded-full text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 transition">{q}</button>
                      ))}
                    </div>
                  </div>
                )}

                {messages.map((m, i) => m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <div className="bg-[var(--user-bubble-light)] text-white px-4 py-3 rounded-xl rounded-br-none max-w-lg">{m.message}</div>
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">🤖</div>
                    {m.results?.product_details && (
                      <div className="bg-white border border-[var(--border-light)] p-4 rounded-xl max-w-md">
                        <img src={m.results.product_details.images?.[0] || "https://via.placeholder.com/300"} alt={m.results.product_details.name} className="w-full h-48 object-cover rounded-lg mb-3" />
                        <h3 className="font-bold text-base text-black">{m.results.product_details.name}</h3>
                        <p className="text-lg font-semibold text-black mt-1">₹{m.results.product_details.price}</p>
                        <p className="text-sm text-gray-700 mt-2">{m.results.product_details.description}</p>
                      </div>
                    )}
                    <div className="flex flex-col gap-4 w-full">
                      <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
                        <p className="text-sm whitespace-pre-wrap">{m.message}</p>
                      </div>
                      {m.results?.items && m.results.items.map((item, j) => (
                        <div key={j} className="bg-white border border-[var(--border-light)] p-4 rounded-xl flex items-center gap-4 max-w-md">
                          <img alt={item.name} src={item.image || "https://via.placeholder.com/100"} className="w-24 h-24 object-cover rounded-lg text-black" />
                          <div className="flex-grow">
                            <h3 className="font-bold text-sm text-black">{item.name}</h3>
                            <p className="text-lg font-bold mt-1 text-black">₹{item.price}</p>
                          </div>
                          <button onClick={() => handleAddToCart(item.product_id, 1)} disabled={addingId === item.product_id} className={`px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg text-sm ${addingId === item.product_id ? "opacity-60 cursor-not-allowed " : ""}`}>{addingId === item.product_id ? "Adding..." : "Add to Cart"}</button>
                        </div>
                      ))}
                      {m.results?.cart_message && <div className="bg-white border border-[var(--border-light)] p-3 rounded-lg text-sm text-black">{m.results.cart_message}</div>}
                    </div>
                  </div>
                ))}
                {isTyping && <div className="flex items-start gap-4"><div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">🤖</div><div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none"><span className="typing-dots"><span className="dot" /><span className="dot" /><span className="dot" /></span></div></div>}
                <div ref={bottomRef} />
              </div>
            </div>

            {paymentState && (
              <PaymentQRPanel
                payment={paymentState}
                onPaid={handlePaymentPaid}
                onRegenerate={handlePaymentRegenerate}
                onClose={() => setPaymentState(null)}
                onTimeout={handlePaymentTimeout}
              />
            )}

            <div className="p-3 md:p-4 bg-[var(--background-light)] border-t border-[var(--border-light)]">
              <div className="max-w-3xl mx-auto flex gap-2">
                <input className="flex-1 border rounded-lg py-3 px-3 md:px-4 text-sm text-black" placeholder="Type your message..." value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} />
                <button onClick={sendMessage} className="bg-[var(--brand-primary)] text-white rounded-md px-4">Send</button>
              </div>
            </div>
          </main>
        </div>
        {showCart && (
          <div className="md:hidden fixed inset-0 z-40">
            <div className="absolute inset-0 bg-black/40" onClick={() => setShowCart(false)} />
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[70%] overflow-y-auto">
              <div className="p-3 border-b flex items-center justify-between">
                <div className="font-semibold text-black">Cart</div>
                <button className="px-3 py-1.5 border rounded-lg text-black" onClick={() => setShowCart(false)}>Close</button>
              </div>
              <CartSidebar token={token} onClose={() => setShowCart(false)} cart={cart} />
            </div>
          </div>
        )}
        <ProfileModal open={showProfile} onClose={() => setShowProfile(false)} />
      </div>
    </div>
  );
}