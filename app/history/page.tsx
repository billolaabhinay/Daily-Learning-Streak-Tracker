"use client";

import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("studyDates") || "[]");
    setHistory(saved.reverse());
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Study History</h1>

      <ul>
        {history.map((d, i) => (
          <li key={i} className="border-b py-2">
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
