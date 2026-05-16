import { NextResponse } from 'next/server';
import { stepSimulation } from '@/lib/simulator';

export async function POST() {
  try {
    const result = await stepSimulation();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Simulation step failed' }, { status: 500 });
  }
}
