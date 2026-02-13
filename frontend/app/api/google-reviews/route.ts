// app/api/google-reviews/route.ts
import { NextResponse } from 'next/server';

export const revalidate = 43200; // 12 óra cache (Next/Vercel)

export async function GET() {
  const apiKey =
    process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_API_KEY; // fallback, de a secret jobb
  const placeId =
    process.env.GOOGLE_PLACE_ID || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ configured: false }, { status: 200 });
  }

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;

  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
      Accept: 'application/json',
    },
    next: { revalidate },
  });

  if (!res.ok) {
    return NextResponse.json(
      { configured: true, error: `Google Places error: ${res.status}` },
      { status: 200 }
    );
  }

  const data = await res.json();
  return NextResponse.json({ configured: true, ...data }, { status: 200 });
}
