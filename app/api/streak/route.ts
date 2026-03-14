import { NextResponse } from "next/server";
import { calculateStreak } from "@/lib/streakLogic";

let studyDates: string[] = [];

export async function GET() {
  const streak = calculateStreak(studyDates);

  return NextResponse.json({
    streak,
    totalDays: studyDates.length,
    lastStudy: studyDates[studyDates.length - 1] || null
  });
}
