import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST() {
  const state = await prisma.engineState.upsert({
    where: { id: 'singleton' },
    update: { status: 'running' },
    create: { id: 'singleton', status: 'running' }
  });
  return NextResponse.json(state);
}
