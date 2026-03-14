import { NextResponse } from "next/server";

let studyDates: string[] = [];

export async function POST() {
  const today = new Date().toDateString();

  if (studyDates.includes(today)) {
    return NextResponse.json({
      message: "You already marked today"
    });
  }

  studyDates.push(today);

  return NextResponse.json({
    message: "Study recorded",
    dates: studyDates
  });
}
