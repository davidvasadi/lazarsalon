// A framer-motion animációs funkciói (animáció, gesztusok, húzás, layout) — KÜLÖN csomagban, az oldal után töltődnek be
// (components/motion-provider.tsx → LazyMotion). Így nem lassítják az első megjelenést (2026-11-28).
import { domMax } from 'framer-motion';

export default domMax;
