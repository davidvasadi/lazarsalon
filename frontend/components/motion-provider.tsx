'use client';

// LazyMotion: az oldal az <m.*> elemeket használja (a teljes <motion.*> helyett), az animációs funkciók pedig
// aszinkron töltődnek be (components/motion-features.ts) — kisebb kezdő JavaScript, ugyanazok az animációk (2026-11-28).
// strict: ha valahol mégis a teljes `motion` maradna, fejlesztéskor hibát dob (ne hízzon vissza a csomag).
import { LazyMotion } from 'framer-motion';
import React from 'react';

const loadFeatures = () =>
  import('./motion-features').then((res) => res.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
