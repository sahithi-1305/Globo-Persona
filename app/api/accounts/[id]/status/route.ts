import { NextResponse } from 'next/server';

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const { status } = await request.json();
  const account = {
    id: params.id,
    status
  };
  return NextResponse.json(account);
}
