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





import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../utils/api";
import useAuth from "../store/useAuth";
import "./chat.css";
import ProfileModal from "../components/ProfileModal";

export default function ChatPage() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const sessionId = "default-session";

  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (!token) return;
    const loadHistory = async () => {
      try {
        const { data } = await api.get("/history/me");
        setMessages((data || []).reverse());
      } catch (err) {
        console.error("Failed to load history", err);
        if (err?.response?.status === 401) {
          logout();
          navigate("/login");
        }
      }
    };
    loadHistory();
  }, [token, logout, navigate]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    const userMsg = { role: "user", message: text };
    setMessages((prev) => [...prev, userMsg]);
    setText("");

    try {
      const { data } = await api.post("/chat", { session_id: sessionId, text });
      const assistantMsg = {
        role: "assistant",
        message: data.results?.message || "",
        results: data.results || {},
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Chat error", err);
      if (err?.response?.status === 401) {
        logout();
        navigate("/login");
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", message: "Sorry — something went wrong." },
        ]);
      }
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
    <div className="min-h-screen">
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <aside className="w-80 flex-shrink-0 bg-[var(--sidebar-light)] border-r border-[var(--border-light)] flex flex-col p-4">
          <div className="flex-grow">
            <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-[var(--brand-primary)] text-white rounded-lg font-semibold text-sm">
              + New Conversation
            </button>
            <nav className="mt-8 space-y-2">
              <a className="group flex items-center justify-between px-3 py-2.5 rounded-lg bg-[var(--brand-secondary-light)]">
                <span className="text-sm font-medium">Default Session</span>
                <span className="text-xs text-[var(--text-light-secondary)]">Today</span>
              </a>
            </nav>
          </div>
          <div className="border-t border-[var(--border-light)] pt-4 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => setShowProfile(true)}
                className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium bg-white border hover:bg-gray-50"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 border border-red-200 hover:bg-red-50"
              >
                Sign Out
              </button>
            </div>
          </div>
        </aside>

        {/* Main chat */}
        <main className="flex-1 flex flex-col">
          <header className="flex items-center h-[73px] px-8 border-b border-[var(--border-light)]">
            <h1 className="text-lg font-bold">ABFRL Sales Assistant</h1>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-3xl mx-auto space-y-8">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <div className="bg-[var(--user-bubble-light)] text-white px-4 py-3 rounded-xl rounded-br-none max-w-lg">
                      {m.message}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[var(--ai-bubble-light)] flex items-center justify-center shrink-0">
                      🤖
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      {m.message && (
                        <div className="bg-[var(--ai-bubble-light)] px-4 py-3 rounded-xl rounded-tl-none">
                          <p className="text-sm">{m.message}</p>
                        </div>
                      )}
                      {m.results?.items &&
                        m.results.items.map((item, j) => (
                          <div
                            key={j}
                            className="bg-white border border-[var(--border-light)] p-4 rounded-xl flex items-center gap-4 max-w-md"
                          >
                            <img
                              alt={item.name}
                              src={item.image || "https://via.placeholder.com/100"}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="flex-grow">
                              <h3 className="font-bold text-sm">{item.name}</h3>
                              <p className="text-lg font-bold mt-1">₹{item.price}</p>
                            </div>
                            <button className="px-4 py-2 bg-[var(--brand-primary)] text-white rounded-lg text-sm">
                              Add to Cart
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-[var(--background-light)] border-t border-[var(--border-light)]">
            <div className="max-w-3xl mx-auto flex gap-2">
              <input
                className="flex-1 border rounded-lg py-3 px-4 text-sm"
                placeholder="Type your message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-[var(--brand-primary)] text-white rounded-md px-4"
              >
                Send
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Profile modal */}
      <ProfileModal open={showProfile} onClose={() => setShowProfile(false)} />
    </div>
  );
}
