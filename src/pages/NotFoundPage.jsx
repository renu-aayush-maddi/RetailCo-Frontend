import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark text-center px-6">
      <h1 className="text-6xl font-extrabold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
