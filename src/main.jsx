// import React from "react";
// import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// console.log('react', React.version);
// console.log('react-dom', ReactDOM ? 'present' : 'missing');

// import Chat from "./pages/Chat";
// import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
// import useAuth from "./store/useAuth";
// import App from "./App";
// import "./index.css";

//  const { token } = useAuth();

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//       <BrowserRouter>
//       <Routes>
//         {/* <Route path="/" element={<App />} /> */}
//         <Route path="/" element={token ? <Navigate to="/chat" /> : <Navigate to="/signin" />} />
//         <Route path="/chat" element={<Chat />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );


// // import React from "react";
// // import { createRoot } from "react-dom/client";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import App from "./App";
// // import Chat from "./pages/Chat";
// // import "./index.css";

// // createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<App />} />
// //         <Route path="/chat" element={<Chat />} />
// //       </Routes>
// //     </BrowserRouter>
// //   </React.StrictMode>
// // );












// // src/main.jsx
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// console.log("react", React.version);

// import "./index.css";
// import Chat from "./pages/ChatPage";
// import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
// import useAuth from "./store/useAuth";
// import PricingPage from "./pages/PricingPage";
// import UsecasesPage from "./pages/UseCasesPage";
// import Stories from "./pages/CustomerStoriesPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import App from "./App";
// import CustomerStoriesPage from "./pages/CustomerStoriesPage";
// import ComingSoonPage from "./pages/ComingSoonPage";
// import Contact from "./pages/Contact";
// // RootApp - used so we can call hooks (useAuth) inside a component
// function RootApp() {
//   const { token } = useAuth();

  

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />

//         <Route
//           path="/chat"
//           element={token ? <Chat /> : <Navigate to="/" replace />}
//         />

//         <Route path="/login" element={<Signin />} />
//         <Route path="/signup" element={<Signup />} />


//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/usecases" element={<UsecasesPage />} />
//         <Route path="/story" element={<CustomerStoriesPage />} />
//         <Route path="/commingsoon" element={<ComingSoonPage />} />
//         <Route path="/contact" element={<Contact />} />
        

//         {/* fallback */}
//           <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RootApp />
//   </React.StrictMode>
// );





// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./layouts/AppLayout";

import App from "./App";
import Chat from "./pages/ChatPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PricingPage from "./pages/PricingPage";
import UsecasesPage from "./pages/UseCasesPage";
import CustomerStoriesPage from "./pages/CustomerStoriesPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import useAuth from "./store/useAuth";
import { Toaster } from "react-hot-toast";

function Protected({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}

function RootApp() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Toaster />
        <Routes>
          {/* All routes that share the global navbar go inside AppLayout */}
          <Route element={<AppLayout />}>
            <Route index element={<App />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="usecases" element={<UsecasesPage />} />
            <Route path="story" element={<CustomerStoriesPage />} />
            <Route path="commingsoon" element={<ComingSoonPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />


          </Route>

                      <Route
              path="chat"
              element={
                <Protected>
                  <Chat />
                </Protected>
              }
            />

          {/* Auth pages (no global navbar) */}
          


          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);
