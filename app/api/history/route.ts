import { NextResponse } from "next/server";

let studyDates: string[] = [];

export async function GET() {
  return NextResponse.json({
    history: studyDates.reverse()
  });
}
