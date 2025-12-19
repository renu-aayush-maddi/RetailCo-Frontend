import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <main >
        <Outlet />
      </main>
    </div>
  );
}
