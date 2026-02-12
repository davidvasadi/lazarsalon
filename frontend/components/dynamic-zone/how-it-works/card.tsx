// components/dynamic-zone/how-it-works/card.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

// components/dynamic-zone/how-it-works/card.tsx

// components/dynamic-zone/how-it-works/card.tsx

export const Card = ({
  step,
}: {
  step: {
    title: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
  };
}) => {
  const reduce = useReducedMotion();

  const href = step.ctaHref ?? '';
  const hasCta = !!(step.ctaText && href);
  const isExternal = /^https?:\/\//i.test(href);

  const ButtonInner = ({ children }: { children: React.ReactNode }) => (
    <motion.span
      className={[
        'inline-flex items-center gap-2 rounded-full',
        'bg-white/10 px-5 py-2 text-sm text-white/85',
        'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_16px_34px_rgba(0,0,0,0.35)]',
        'hover:bg-white/12 hover:text-white',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25',
      ].join(' ')}
      whileHover={reduce ? undefined : { y: -1 }}
      whileTap={reduce ? undefined : { y: 0, scale: 0.99 }}
      transition={
        reduce ? undefined : { type: 'spring', stiffness: 300, damping: 24 }
      }
    >
      {children}
    </motion.span>
  );

  return (
    <div className="mx-auto w-full max-w-2xl text-center">
      <div className="text-sm leading-relaxed text-white/58">
        {step.description}

        {/* {hasCta ? (
          <div className="mt-5 flex justify-center">
            {isExternal ? (
              <motion.a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full"
                whileHover={reduce ? undefined : { y: -1 }}
                whileTap={reduce ? undefined : { y: 0, scale: 0.99 }}
                transition={
                  reduce
                    ? undefined
                    : { type: 'spring', stiffness: 300, damping: 24 }
                }
              >
                <ButtonInner>
                  {step.ctaText}
                  <span aria-hidden className="text-white/60">
                    →
                  </span>
                </ButtonInner>
              </motion.a>
            ) : (
              <Link href={href} className="rounded-full">
                <ButtonInner>
                  {step.ctaText}
                  <span aria-hidden className="text-white/60">
                    →
                  </span>
                </ButtonInner>
              </Link>
            )}
          </div>
        ) : null} */}
      </div>
    </div>
  );
};
