"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r min-h-screen p-6">

      <h1 className="text-xl font-bold mb-10">
        📚 Study Tracker
      </h1>

      <nav className="flex flex-col gap-4">

        <Link
          href="/"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Dashboard
        </Link>

        <Link
          href="/history"
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Study History
        </Link>

      </nav>

    </div>
  );
}
