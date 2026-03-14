"use client";

import { useEffect, useState } from "react";
import { FaFire, FaBook, FaChartLine } from "react-icons/fa";

import StatsCard from "@/components/StatsCard";
import StudyButton from "@/components/StudyButton";
import StudyCalendar from "@/components/StudyCalendar";
import ProgressBar from "@/components/ProgressBar";
import { calculateStreak } from "@/lib/streakLogic";

export default function Dashboard() {

  const [dates, setDates] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("studyDates") || "[]");
    setDates(saved);
  }, []);

  const markStudy = () => {

    const today = new Date().toDateString();

    if (dates.includes(today)) {
      setMessage("You already studied today.");
      return;
    }

    const updated = [...dates, today];

    localStorage.setItem("studyDates", JSON.stringify(updated));
    setDates(updated);

    setMessage("Study recorded successfully!");
  };

  const streak = calculateStreak(dates);

  return (

    <div>

      <h1 className="text-3xl font-bold mb-8 dark:text-white">
        Dashboard
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <StatsCard
          title="Current Streak"
          value={`${streak} days`}
          icon={<FaFire className="text-orange-500" />}
        />

        <StatsCard
          title="Total Study Days"
          value={dates.length}
          icon={<FaBook className="text-blue-500" />}
        />

        <StatsCard
          title="Progress"
          value={`${Math.min((dates.length/30)*100,100).toFixed(0)}%`}
          icon={<FaChartLine className="text-green-500" />}
        />

      </div>

      {/* Calendar */}

      <div className="mb-8">
        <StudyCalendar studyDates={dates} />
      </div>

      {/* Progress */}

      <div className="mb-8">
        <ProgressBar totalDays={dates.length} />
      </div>

      {/* Study Button */}

      <StudyButton onStudy={markStudy} />

      <p className="mt-4 text-green-600">
        {message}
      </p>

    </div>
  );
}
