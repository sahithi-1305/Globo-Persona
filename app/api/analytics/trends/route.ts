import { NextResponse } from 'next/server';

export async function GET() {
  const trends = [
    { date: "2023-10-01", opens: 420, clicks: 120 },
    { date: "2023-10-02", opens: 380, clicks: 90 },
    { date: "2023-10-03", opens: 550, clicks: 180 },
  ];
  return NextResponse.json(trends);
}
