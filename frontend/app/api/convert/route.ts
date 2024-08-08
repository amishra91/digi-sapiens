import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const response = await fetch('http://127.0.0.1:8000/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `{"ipa_text":"${payload}"}`,
    });

    const data = await response.json();
    return NextResponse.json({ status: response.status, data: data });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ status: 500, error: 'Internal Server Error' });
  }
}
