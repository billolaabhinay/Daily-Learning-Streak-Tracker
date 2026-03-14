"use client";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Props = {
  studyDates: string[];
};

export default function StudyCalendar({ studyDates }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <Calendar
        tileClassName={({ date }) => {
          const d = date.toDateString();
          if (studyDates.includes(d)) {
            return "bg-green-400 text-white rounded";
          }
        }}
      />
    </div>
  );
}
