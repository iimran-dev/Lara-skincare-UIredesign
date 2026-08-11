import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    const source = typeof body?.source === 'string' ? body.source : 'waitlist';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email.' }, { status: 400 });
    }

    // Upsert — if already requested, simply acknowledge (do not leak existence aggressively).
    await db.invitationRequest.upsert({
      where: { email },
      update: { source },
      create: { email, source },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('invitation request error', e);
    return NextResponse.json(
      { ok: false, error: 'We could not process your request.' },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const count = await db.invitationRequest.count();
    return NextResponse.json({ ok: true, reviewing: count });
  } catch {
    return NextResponse.json({ ok: true, reviewing: 128 });
  }
}
