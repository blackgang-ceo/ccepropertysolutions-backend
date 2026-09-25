import { NextResponse } from 'next/server';
import { leads } from '@/lib/data';

export async function GET() {
  return NextResponse.json({ leads });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    message: 'Lead received successfully',
    lead: {
      id: Date.now(),
      ...body,
      stage: 'New',
    },
  });
}
