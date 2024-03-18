'server-only';

import OpenAIRepository from '@/src/providers/repository/openai';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }
  const response: true | {
    error: string;
} = await OpenAIRepository.insertWOTD();
  console.log(response);
  return NextResponse.json(response);
}
