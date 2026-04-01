import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { password } = await req.json();
    const correctPassword = process.env.ADMIN_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json({ error: 'Server config error' }, { status: 500 });
    }

    if (password === correctPassword) {
      // Generate a simple session token
      const token = Buffer.from(`admin_${Date.now()}_${Math.random().toString(36)}`).toString('base64');
      return NextResponse.json({ success: true, token });
    } else {
      return NextResponse.json({ success: false, error: 'Wrong password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
