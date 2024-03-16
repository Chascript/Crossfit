'server-only';

import OpenAIRepository from '@/src/providers/repository/openai';
import { NextResponse } from 'next/server';

export async function GET() {
  const response: true | {
    error: string;
} = await OpenAIRepository.insertWOTD();
  console.log(response);
  return NextResponse.json(response);
}
