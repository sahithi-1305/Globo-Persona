import { NextResponse } from 'next/server';

export async function GET() {
  const accounts = [
    { id: "1", email: "marketing@mailsaas.com", reputationScore: 98, createdAt: new Date().toISOString() },
    { id: "2", email: "hello@mailsaas.com", reputationScore: 95, createdAt: new Date().toISOString() },
  ];
  return NextResponse.json(accounts);
}
