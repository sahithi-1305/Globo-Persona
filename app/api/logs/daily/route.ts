import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dailyActivity = await prisma.emailLog.findMany({
    where: { createdAt: { gte: today } },
    orderBy: { createdAt: 'desc' }
  });
  return NextResponse.json(dailyActivity);
}
