import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json();
    const account = await prisma.account.create({
      data: {
        email,
        name,
        dailyLimit: 10,
        currentSends: 0,
        reputationScore: 50.0,
      },
    });
    return NextResponse.json(account, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create account' }, { status: 500 });
  }
}

export async function GET() {
  const accounts = await prisma.account.findMany();
  return NextResponse.json(accounts);
}
