// app/api/google-reviews/route.ts — a kliens-komponensek (vélemények, hero, foglalás-kártya) innen kapják a Google-adatot.
// A Google-t a lib/shared/google-reviews.ts kérdezi, HETENTE egyszer; ez a válasz is egy napig gyorsítótárazott.
import { NextResponse } from 'next/server';

import { getGooglePlace, showcaseReviews } from '@/lib/shared/google-reviews';

export const revalidate = 86400;

export async function GET() {
  const place = await getGooglePlace();
  if (!place) return NextResponse.json({ configured: false }, { status: 200 });
  return NextResponse.json(
    {
      configured: true,
      rating: place.rating,
      count: place.count,
      mapsUrl: place.mapsUrl,
      reviews: showcaseReviews(place),
    },
    { status: 200 }
  );
}
