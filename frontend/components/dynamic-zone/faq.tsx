'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useId, useMemo, useState } from 'react';

import { Container } from '@/components/container';
import { Heading } from '@/components/elements/heading';

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
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* ✅ ikon elrejtve / törölve */}

            {/* ✅ cím secondary színnel */}
            <Heading
              as="h2"
              className="text-left text-4xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight"
            >
              {heading}
            </Heading>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-lightblack">
              {sub_heading}
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#B2933D]
                         hover:underline underline-offset-4
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B2933D]/50 rounded-md"
            >
              További kérdésem van
              <ArrowRight className="h-4 w-4" />
            </a>
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
