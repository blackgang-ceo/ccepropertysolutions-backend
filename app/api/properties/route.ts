import { NextResponse } from 'next/server';
import { properties } from '@/lib/data';

export async function GET() {
  return NextResponse.json({ properties });
}
