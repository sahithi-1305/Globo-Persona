import { NextResponse } from 'next/server';

export async function GET(request: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const account = {
    id: params.id,
    name: "Mock Account",
    email: "mock@example.com",
    status: "Active"
  };
  return NextResponse.json(account);
}
