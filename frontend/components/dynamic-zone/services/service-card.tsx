'use client';

// „Szolgáltatásaink részletesen” (Szolgáltatások oldal) — átrajzolva 2026-11-23. Korábban ugyanazt a 7 kártyát mutatta,
// mint a fölötte lévő Szolgáltatások blokk (duplikáció); most szolgáltatásonként egy tartalmas, kulcsszavas szakasz:
// kép (felváltva balra / jobbra), H3, leírás, a TELJES árlista időtartammal (élőben a Strapiból), Részletek + Foglalás.
// A hosszabb leírások itt vannak (a Strapiban nincs rá mező); az árak és az idők a Strapi árlistájából jönnek.
import { m as motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

import { Container } from '@/components/container';
import { fmtDuration, fmtPrice, pageOfPlan } from '@/lib/shared/plan-pages';
import { SECTION_TITLE } from '@/lib/shared/typography';

const STRAPI_BASE = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_API_URL ??
  ''
)
  .replace(/\/$/, '')
  .replace(/\/api$/, '');
const BOOKING_URL = 'https://n474969.alteg.io';
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type StrapiMedia = {
  url?: string;
  alternativeText?: string | null;
  data?: any;
  attributes?: any;
} | null;
type DZItem = {
  __component?: string;
  heading?: string | null;
  sub_heading?: string | null;
  duration?: string | null;
  cover?: StrapiMedia;
};
type PageLike = {
  id?: number;
  documentId?: string;
  slug?: string | null;
  label?: string | null;
  dynamic_zone?: DZItem[] | null;
  attributes?: any;
};
type Plan = { name: string; price?: string | null; number?: string | null };

export type ServiceCardBlock = {
  __component: 'items.service-card' | 'dynamic-zone.service-card' | string;
  id: number;
  pages?: any;
  locale?: string;
  [key: string]: any;
};

/** szolgáltatásonkénti, kulcsszavas leírás (tények: szolgáltatásoldalak, Altegio, csapat) */
const DETAILS: Record<string, { title: string; text: string }> = {
  'noi-hajvagas': {
    title: 'Női hajvágás Budapesten',
    text: 'Női hajvágás Budapest VI. kerületében: rövid konzultáció után a hajad eséséhez, sűrűségéhez és az arcformádhoz igazítjuk a fazont – legyen szó hosszú, rétegzett hajról, bobról, frufruról vagy rövid fazonról. Vékonyszálú, sűrű, hullámos és göndör hajra egyaránt vágunk; a vágást szárítással és formázással zárjuk, és megmutatjuk, hogyan kezeld otthon egyszerűen.',
  },
  balayage: {
    title: 'Balayage hajfestés Budapesten',
    text: 'Balayage hajfestés Terézvárosban: szabadkézi technikával felvitt, lágy színátmenet, ami természetesen nő ki, így ritkábban kell frissíteni. A világosítás után tonalizálással finomítjuk a színt, hogy harmonikus és ragyogó legyen; vágással együtt is kérhető. Balayage specialistáink: Váradi Norbert és Váradi Tamás.',
  },
  hajfestes: {
    title: 'Ammóniamentes hajfestés Budapesten',
    text: 'Ammóniamentes hajfestés kíméletes festékekkel: hajszínezés, tőfestés, teljes hajfestés, szőkítés és visszafestés. A konzultáción megnézzük a hajad állapotát és korábbi festéseit, és a bőrtónusodhoz illő árnyalatot választunk – a természetes barnától a szőkén át a vörösig.',
  },
  'curly-hair-styling': {
    title: 'Göndör haj fodrász Budapesten',
    text: 'Göndör haj fodrász Budapest VI. kerületében: curly technikával vágjuk és formázzuk a göndör és hullámos hajat, a fürtök természetes esését követve. Megmutatjuk, milyen termékekkel és hogyan tartsd otthon formában a göndör hajad. Göndör haj specialistánk: Mezei Melinda.',
  },
  'ferfi-hajvagas': {
    title: 'Férfi hajvágás Budapesten',
    text: 'Férfi hajvágás a Terézvárosban: modern és klasszikus fazonok, tiszta átmenetek és kontúrok rövid és hosszabb hajra is (az állvonaltól hosszabb haj vágása külön tétel). A vágás szárítással együtt kb. 60 perc, és adunk tippet az otthoni formázáshoz is.',
  },
  'hajapolo-kezelesek': {
    title: 'Hajápoló kezelések',
    text: 'Hajápoló kezelés bármely szolgáltatás mellé: a Miracle hajápoló kezelés a festett, szőkített vagy töredezett hajnak ad vissza fényt és rugalmasságot. Kevin Murphy, Authentic Beauty Concept és Eleven Australia termékekkel dolgozunk.',
  },
  'mukorom-es-manikur': {
    title: 'Műköröm és manikűr',
    text: 'Műköröm és manikűr Budapest VI. kerületében: géllakk kézre és lábra, japán manikűr, műköröm-építés, valamint egyedi nail art – kézzel festett minták, köves és 3D díszítés. Körmös szakembereink: Zsengellér Bara és Makszimec Diána.',
  },
};

const pick = (x: any) =>
  x?.attributes ? { ...x.attributes, id: x.id, documentId: x.documentId } : x;
function mediaUrl(m: StrapiMedia | undefined) {
  const u = m?.url ?? m?.attributes?.url ?? m?.data?.attributes?.url;
  if (!u) return null;
  return /^https?:\/\//.test(u)
    ? u
    : STRAPI_BASE
      ? `${STRAPI_BASE}${u.startsWith('/') ? '' : '/'}${u}`
      : u;
}

function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  useEffect(() => {
    if (!STRAPI_BASE) return;
    const ac = new AbortController();
    const q = new URLSearchParams({
      locale: 'hu',
      'fields[0]': 'name',
      'fields[1]': 'price',
      'fields[2]': 'number',
      'pagination[pageSize]': '100',
    });
    fetch(`${STRAPI_BASE}/api/plans?${q}`, { signal: ac.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => setPlans((j?.data ?? []).filter((p: any) => p?.name)))
      .catch(() => {});
    return () => ac.abort();
  }, []);
  return plans;
}

export function ServiceCard(props: ServiceCardBlock) {
  const reduce = useReducedMotion();
  const plans = usePlans();
  const pages: PageLike[] = useMemo(() => {
    const raw = props.pages;
    const list = Array.isArray(raw) ? raw : (raw?.data ?? []);
    return (list as any[]).map(pick).filter((p) => p?.slug);
  }, [props.pages]);

  if (!pages.length) return null;

  return (
    <section id="szolgaltatasok-reszletesen" className="py-20 md:py-28">
      <Container>
        <div className="mb-14 max-w-3xl md:mb-20">
          <h2 className={`text-left ${SECTION_TITLE} text-lightblack`}>
            Szolgáltatásaink részletesen
          </h2>
          <div className="mt-6 h-[2px] w-28 rounded-full bg-muted/80" />
          <p className="mt-6 text-left text-[15px] leading-relaxed text-secondary/70 lg:text-[17px]">
            Minden szolgáltatásunk árral és időtartammal – a pontos árat a
            hajhossz és a hajmennyiség alapján a konzultáción mondjuk meg.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {pages.map((p, i) => {
            const slug = p.slug as string;
            const hero = (p.dynamic_zone ?? []).find(
              (x) => x?.__component === 'dynamic-zone.hero'
            );
            const d = DETAILS[slug];
            const title = d?.title ?? p.label ?? slug;
            const text = d?.text ?? hero?.sub_heading ?? '';
            const img = mediaUrl(hero?.cover ?? null);
            const items = plans.filter((pl) => pageOfPlan(pl.name) === slug);
            const flip = i % 2 === 1;
            return (
              <motion.article
                key={p.documentId ?? p.id ?? slug}
                id={slug}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: EASE }}
                className="grid scroll-mt-28 grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                <div
                  className={['lg:col-span-5', flip ? 'lg:order-2' : ''].join(
                    ' '
                  )}
                >
                  <Link
                    href={`/hu/${slug}`}
                    className="group relative block aspect-[4/5] overflow-hidden rounded-3xl bg-lightblack/90"
                  >
                    {img ? (
                      <Image
                        src={img}
                        alt={title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 520px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : null}
                  </Link>
                </div>
                <div
                  className={['lg:col-span-7', flip ? 'lg:order-1' : ''].join(
                    ' '
                  )}
                >
                  <h3 className="text-3xl font-light leading-tight text-lightblack md:text-4xl">
                    {title}
                  </h3>
                  <p className="mt-5 text-[16px] leading-relaxed text-secondary/80 lg:text-[17px]">
                    {text}
                  </p>

                  {items.length ? (
                    <ul className="mt-7 divide-y divide-secondary/10 border-y border-secondary/10">
                      {items.map((pl) => (
                        <li
                          key={pl.name}
                          className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3"
                        >
                          <span className="text-[15px] text-lightblack">
                            {pl.name.trim()}
                          </span>
                          <span className="text-[15px] text-secondary">
                            <strong className="font-medium text-lightblack">
                              {fmtPrice(pl.price)}
                            </strong>
                            {pl.number ? (
                              <span className="text-secondary/60">
                                {' '}
                                · {fmtDuration(pl.number)}
                              </span>
                            ) : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-lightblack px-5 py-3 text-[15px] text-white transition hover:opacity-90"
                    >
                      <Calendar size={17} />
                      Időpontfoglalás
                    </a>
                    <Link
                      href={`/hu/${slug}`}
                      className="inline-flex items-center gap-2 text-[15px] font-medium text-muted hover:underline underline-offset-4"
                    >
                      Részletek
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
