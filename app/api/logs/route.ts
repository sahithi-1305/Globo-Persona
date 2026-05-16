import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const logs = await prisma.emailLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
    include: {
      sender: { select: { email: true } },
      receiver: { select: { email: true } }
    }
  });
  return NextResponse.json(logs);
}
