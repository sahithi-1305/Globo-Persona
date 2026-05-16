import { NextResponse } from 'next/server';

export async function GET() {
  const stats = [
    { date: "2023-10-01", opens: 4200, clicks: 1200 },
    { date: "2023-10-05", opens: 3800, clicks: 900 },
    { date: "2023-10-10", opens: 5500, clicks: 1800 },
    { date: "2023-10-15", opens: 4800, clicks: 1400 },
    { date: "2023-10-20", opens: 6100, clicks: 2100 },
    { date: "2023-10-25", opens: 5900, clicks: 1950 },
    { date: "2023-10-30", opens: 7200, clicks: 2800 },
  ];
  return NextResponse.json(stats);
}
