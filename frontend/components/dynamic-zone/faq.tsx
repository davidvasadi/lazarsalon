'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronDown, Phone } from 'lucide-react';
import Link from 'next/link';
import { useId, useMemo, useState } from 'react';

import { Container } from '@/components/container';
import { Heading } from '@/components/elements/heading';
import { RatingStars } from '@/components/elements/rating-stars';
import { SECTION_TITLE } from '@/lib/shared/typography';
import { fmtRating, useGoogleRating } from '@/lib/shared/use-google-rating';

type FAQItem = { question: string; answer: string };

export const FAQ = ({
  heading,
  sub_heading,
  faqs,
}: {
  heading: string;
  sub_heading: string;
  faqs: FAQItem[];
}) => {
  const reduce = useReducedMotion();
  const gRating = useGoogleRating();
  const uid = useId();

  const items = useMemo(() => (Array.isArray(faqs) ? faqs : []), [faqs]);
  const [openIndex, setOpenIndex] = useState<number>(() =>
    items.length ? 0 : -1
  );

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    // ✅ nincs globális háttér a teljes szekcióra
    <section className="w-full">
      <Container className="py-14 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* LEFT */}
          {/* gépen a bal oszlop „ragad”, amíg a kérdések tartanak (cím, leírás, gomb, kapcsolat-kártya) */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="md:sticky md:top-28 md:self-start"
          >
            {/* ✅ ikon elrejtve / törölve */}

            {/* ✅ cím secondary színnel */}
            <Heading
              as="h2"
              className={`text-left ${SECTION_TITLE} text-secondary`}
            >
              {heading}
            </Heading>

            <p className="mt-4 max-w-md text-[15px] lg:text-[17px] leading-relaxed text-lightblack">
              {sub_heading}
            </p>

            <Link
              href="/hu/kapcsolat"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#B2933D]
                         hover:underline underline-offset-4
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B2933D]/50 rounded-md"
            >
              Kérdésed van? Írj nekünk
              <ArrowRight className="h-4 w-4" />
            </Link>

            {/* kapcsolat-kártya: aki nem találja a választ, rögtön hívhat vagy foglalhat */}
            <div className="mt-10 max-w-sm rounded-2xl border border-black/10 bg-white p-6">
              <p className="text-[15px] font-medium tracking-wide text-lightblack">
                LAZAR&apos;S®
              </p>
              {gRating ? (
                <a
                  href={gRating.mapsUrl ?? undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center gap-2 text-[14px] text-secondary hover:opacity-80"
                >
                  <RatingStars value={gRating.rating} size={16} />
                  <span>
                    <strong className="font-medium">
                      {fmtRating(gRating.rating)}
                    </strong>{' '}
                    · {gRating.count} Google-értékelés
                  </span>
                </a>
              ) : null}
              <a
                href="tel:+36203488481"
                className="mt-3 flex items-center gap-2 text-[15px] text-lightblack hover:opacity-80"
              >
                <Phone className="h-4 w-4 text-[#B2933D]" />
                +36 20 348 8481
              </a>
              <a
                href="https://n474969.alteg.io"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lightblack px-5 py-3 text-[15px] text-white transition hover:opacity-90"
              >
                <Calendar className="h-4 w-4" />
                Időpontfoglalás
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.06,
            }}
          >
            <div className="rounded-2xl bg-white border border-black/10 shadow-[0_18px_55px_rgba(0,0,0,0.25)] overflow-hidden">
              <div className="divide-y divide-black/10">
                {items.map((faq, idx) => {
                  const isOpen = idx === openIndex;
                  const contentId = `${uid}-faq-content-${idx}`;
                  const buttonId = `${uid}-faq-button-${idx}`;

                  return (
                    <div key={`${faq.question}-${idx}`} className="bg-white">
                      <button
                        id={buttonId}
                        type="button"
                        onClick={() => toggle(idx)}
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-6
                                   transition-colors hover:bg-black/[0.03]
                                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B2933D]/40"
                      >
                        <span
                          className={[
                            'text-sm md:text-[15px] font-semibold',
                            isOpen ? 'text-[#B2933D]' : 'text-[#292624]',
                          ].join(' ')}
                        >
                          {faq.question}
                        </span>

                        <motion.span
                          aria-hidden="true"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{
                            duration: 0.22,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="shrink-0 text-[#292624]/70"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={contentId}
                            role="region"
                            aria-labelledby={buttonId}
                            initial={
                              reduce
                                ? { opacity: 0 }
                                : { height: 0, opacity: 0, y: -4 }
                            }
                            animate={
                              reduce
                                ? { opacity: 1 }
                                : { height: 'auto', opacity: 1, y: 0 }
                            }
                            exit={
                              reduce
                                ? { opacity: 0 }
                                : { height: 0, opacity: 0, y: -4 }
                            }
                            transition={{
                              duration: 0.28,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5">
                              <div className="pt-4 border-t border-black/10">
                                <p className="text-sm leading-relaxed text-[#4f4c4c]">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
