// components/dynamic-zone/form-next-to-section.tsx (vagy ahol ez a komponensed van)
'use client';

import {
  IconArrowRight,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCalendarEvent,
  IconChevronDown,
  IconClock,
  IconLink,
  IconMail,
  IconMapPin,
  IconPhone,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

import { Button } from '../elements/button';
import { Container } from '@/components/container';

// components/dynamic-zone/form-next-to-section.tsx (vagy ahol ez a komponensed van)

type StrapiLinkItem = {
  id?: number;
  text?: string | null;
  URL?: string | null;
  target?: string | null;
};

type SocialMediaIconLink = {
  id?: number;
  image?: any;
  link?: StrapiLinkItem[] | null;
};

type FormInput = {
  id?: number;
  type?: string | null;
  name?: string | null;
  placeholder?: string | null;
  options?: Array<{ label?: string; value?: string }> | string[] | null;
};

type OpeningHourItem = {
  id?: number;
  label?: string | null;
  time?: string | null;
  closed?: boolean | string | number | null;
  isclosed?: boolean | string | number | null;
  isClosed?: boolean | string | number | null;
  is_closed?: boolean | string | number | null;
};

type Props = {
  heading: string;
  sub_heading: string;
  form: { id?: number; inputs?: FormInput[] } | any;
  section:
    | {
        id?: number;
        heading?: string | null;
        sub_heading?: string | null;

        // left card
        address_label?: string | null;
        address?: string | null;
        phone?: string | null;
        email?: string | null;

        // map
        map_route_url?: string | null;
        cover?: any;

        // optional
        booking_url?: string | null;
        privacy_url?: string | null;

        // opening hours
        opening_hours?: OpeningHourItem[] | null;

        users?: any[];
      }
    | any;
  social_media_icon_links: SocialMediaIconLink[] | any;
};

const COLORS = {
  charcoal: '#f5f5f5',
  lightblack: '#292624',
  secondary: '#4f4c4c',
  muted: '#B2933D',
} as const;

const STRAPI_BASE = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(
  /\/$/,
  ''
);
const norm = (v: any) => String(v ?? '').trim();
const normLower = (v: any) => norm(v).toLowerCase();
const hasText = (v: any) => norm(v).length > 0;

const toAbs = (u?: string | null) => {
  const url = norm(u);
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  if (!STRAPI_BASE) return url;
  return `${STRAPI_BASE}${url.startsWith('/') ? '' : '/'}${url}`;
};

function parseBool(v: any) {
  if (v === true) return true;
  if (v === false) return false;
  const s = normLower(v);
  if (!s) return false;
  return s === 'true' || s === '1' || s === 'yes' || s === 'y';
}

function pickIconByLabel(label: string) {
  const l = normLower(label);
  if (l.includes('instagram') || l.includes('insta')) return IconBrandInstagram;
  if (l.includes('facebook') || l.includes('fb')) return IconBrandFacebook;
  if (l === 'x' || l.includes('twitter')) return IconBrandX;
  if (l.includes('linkedin')) return IconBrandLinkedin;
  if (l.includes('github')) return IconBrandGithub;
  return IconLink;
}

function getTarget(t?: string | null) {
  const target = norm(t);
  return target || undefined;
}

function getBestMediaUrl(media: any) {
  const m = media?.data?.attributes ?? media?.attributes ?? media;
  if (!m) return '';
  const f = m?.formats;
  const picked =
    f?.large?.url ||
    f?.medium?.url ||
    f?.small?.url ||
    f?.thumbnail?.url ||
    m?.url;
  return toAbs(picked);
}

function deriveEmbedUrl(routeUrl: string) {
  const u = norm(routeUrl);
  if (!u) return '';

  const lower = u.toLowerCase();

  if (lower.includes('google.com/maps/embed')) return u;
  if (lower.includes('maps.app.goo.gl') || lower.includes('goo.gl/maps'))
    return '';

  if (lower.includes('google.com/maps')) {
    if (lower.includes('output=embed')) return u;
    return u.includes('?') ? `${u}&output=embed` : `${u}?output=embed`;
  }

  return '';
}

function normalizeOptions(
  raw: FormInput['options']
): Array<{ label: string; value: string }> {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw
      .map((x: any) => {
        if (typeof x === 'string') return { label: x, value: x };
        const label = norm(x?.label);
        const value = norm(x?.value) || label;
        if (!label) return null;
        return { label, value };
      })
      .filter(Boolean) as any;
  }
  return [];
}

function toTel(phone?: string | null) {
  const p = norm(phone);
  if (!p) return '';
  const cleaned = p.replace(/[^\d+]/g, '');
  return cleaned ? `tel:${cleaned}` : '';
}

export function FormNextToSection({
  heading,
  sub_heading,
  form,
  section,
  social_media_icon_links,
}: Props) {
  const topHeading =
    norm(section?.heading) || norm(heading) || 'Időpont & Elérhetőség';
  const topSub = norm(section?.sub_heading) || norm(sub_heading) || '';

  const formCardHeading = norm(heading) || 'Kapcsolatfelvétel';
  const formCardSub = norm(sub_heading) || '';

  const inputs = useMemo<FormInput[]>(
    () => (Array.isArray(form?.inputs) ? form.inputs : []),
    [form?.inputs]
  );

  const fields = useMemo(() => {
    const byType = (t: string) => inputs.find((i) => normLower(i?.type) === t);
    const byNameIncludes = (needle: string) =>
      inputs.find((i) => normLower(i?.name).includes(needle.toLowerCase()));

    const nameInput = byNameIncludes('név') || inputs[0];
    const phoneInput = byNameIncludes('telefon') || inputs[1];
    const emailInput =
      byNameIncludes('e-mail') || byNameIncludes('email') || inputs[2];

    const textareaInput =
      byType('textarea') ||
      byNameIncludes('üzenet') ||
      inputs.find((i) => normLower(i?.type) === 'textarea');

    const submitInput =
      byType('submit') ||
      inputs.find((i) => normLower(i?.type) === 'submit') ||
      inputs[inputs.length - 1];

    const selectInput = byType('select');
    const selectOptionsFromStrapi = normalizeOptions(selectInput?.options);

    // fallback: tartsd enum-kompatibilisen (pont úgy, ahogy Strapi-ban van)
    const fallbackOptions: Array<{ label: string; value: string }> = [
      { label: 'Balayage', value: 'Balayage' },
      { label: 'Hajfestés', value: 'Hajfestés' },
      { label: 'Hajápoló Kezelés', value: 'Hajápoló Kezelés' },
      { label: 'Női Hajvágás', value: 'Női Hajvágás' },
      { label: 'Férfi Hajvágás', value: 'Férfi Hajvágás' },
      { label: 'Hajszárítás & Styling', value: 'Hajszárítás & Styling' },
    ];

    const serviceOptions = selectOptionsFromStrapi.length
      ? selectOptionsFromStrapi
      : fallbackOptions;

    return {
      name: {
        label: norm(nameInput?.name) || 'Név',
        placeholder: norm(nameInput?.placeholder) || 'Kovács Anna',
      },
      phone: {
        label: norm(phoneInput?.name) || 'Telefonszám',
        placeholder: norm(phoneInput?.placeholder) || '+36 30 123 4567',
      },
      service: {
        label: norm(selectInput?.name) || 'Szolgáltatás',
        placeholder: norm(selectInput?.placeholder) || 'Válassz szolgáltatást…',
        options: serviceOptions,
      },
      email: {
        label: norm(emailInput?.name) || 'E-mail',
        placeholder: norm(emailInput?.placeholder) || 'hello@lazarsalon.com',
      },
      message: {
        label: norm(textareaInput?.name) || 'Üzenet',
        placeholder:
          norm(textareaInput?.placeholder) || 'Írd le miben segíthetünk...',
      },
      submit: {
        label: norm(submitInput?.name) || 'Üzenet küldése',
      },
    };
  }, [inputs]);

  const leftPhoneTitle = fields.phone.label || 'Telefonszám';
  const leftEmailTitle = fields.email.label || 'E-mail';

  const addressLabel = hasText(section?.address_label)
    ? norm(section?.address_label)
    : 'Címünk';

  const contact = useMemo(() => {
    const routeUrl = hasText(section?.map_route_url)
      ? norm(section?.map_route_url)
      : '';
    return {
      address: norm(section?.address),
      // ✅ nincs több hardcoded fallback
      phone: hasText(section?.phone) ? norm(section?.phone) : '',
      email: hasText(section?.email) ? norm(section?.email) : '',
      routeUrl,
      embedUrl: deriveEmbedUrl(routeUrl),
      coverUrl: getBestMediaUrl(section?.cover),
    };
  }, [section]);

  const openingHours = useMemo(() => {
    const raw: OpeningHourItem[] = Array.isArray(section?.opening_hours)
      ? section.opening_hours
      : [];
    return raw
      .map((x) => {
        const label = norm(x?.label);
        const time = norm(x?.time);
        const closedRaw =
          (x as any)?.isclosed ??
          (x as any)?.isClosed ??
          (x as any)?.is_closed ??
          (x as any)?.closed;

        const closed =
          parseBool(closedRaw) || normLower(time).includes('zárva');
        return { id: x?.id, label, time, closed };
      })
      .filter((x) => x.label || x.time);
  }, [section]);

  const bookingUrl = hasText(section?.booking_url)
    ? norm(section?.booking_url)
    : '';
  const privacyUrl = hasText(section?.privacy_url)
    ? norm(section?.privacy_url)
    : '';

  const socialLinks = useMemo(() => {
    const arr: Array<{ text: string; url: string; target?: string }> = [];
    const raw = Array.isArray(social_media_icon_links)
      ? social_media_icon_links
      : [];
    for (const group of raw) {
      const links = Array.isArray(group?.link) ? group.link : [];
      for (const l of links) {
        const text = norm(l?.text);
        const url = norm(l?.URL);
        if (!text || !url) continue;
        arr.push({ text, url, target: getTarget(l?.target) });
      }
    }
    const seen = new Set<string>();
    return arr.filter((x) => {
      const k = `${x.text}__${x.url}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }, [social_media_icon_links]);

  // -----------------------------
  // ✅ Form state + submit logic
  // -----------------------------
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(''); // must match Strapi enum value
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!norm(fullName)) e.fullName = 'Kérlek add meg a neved.';
    if (!norm(email) || !norm(email).includes('@'))
      e.email = 'Kérlek adj meg egy érvényes e-mail címet.';
    if (!norm(message)) e.message = 'Kérlek írd le az üzeneted.';
    if (!norm(service)) e.service = 'Kérlek válassz szolgáltatást.';
    setFieldErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setSuccessMsg(null);
    setErrorMsg(null);

    if (!validate()) return;

    setSubmitting(true);
    try {
      const page_url =
        typeof window !== 'undefined' ? window.location.href : '';

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: norm(fullName),
          email: norm(email),
          message: norm(message),
          phone: norm(phone),
          service: norm(service),
          page_url,
          submission_status: 'new',
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json?.ok) {
        const backendErrors = json?.errors as
          | Record<string, string>
          | undefined;
        if (backendErrors && typeof backendErrors === 'object') {
          const mapped: Record<string, string> = {};
          if (backendErrors.name) mapped.fullName = 'Kérlek add meg a neved.';
          if (backendErrors.email)
            mapped.email = 'Kérlek adj meg egy érvényes e-mail címet.';
          if (backendErrors.message)
            mapped.message = 'Kérlek írd le az üzeneted.';
          if (backendErrors.service)
            mapped.service = 'Kérlek válassz szolgáltatást.';
          setFieldErrors(mapped);
        }
        setErrorMsg('Hiba történt az elküldés során. Kérlek próbáld újra.');
        return;
      }

      setSuccessMsg('Köszönjük! Hamarosan válaszolunk.');
      setFieldErrors({});
      setFullName('');
      setPhone('');
      setService('');
      setEmail('');
      setMessage('');
    } catch {
      setErrorMsg('Hiba történt az elküldés során. Kérlek próbáld újra.');
    } finally {
      setSubmitting(false);
    }
  };

  const cardClass = 'rounded-2xl bg-white shadow-sm border border-black/5';
  const labelClass = 'block text-sm font-medium';
  const inputBase =
    'block w-full rounded-md px-4 py-3 text-sm outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-[#B2933D]/30';

  const errorTextClass = 'mt-2 text-xs text-red-600';

  // ✅ CTA-stílusú “primary” gomb (sötét háttér + arany/muted ikon + sweep)
  const primaryBtnClass =
    'group relative overflow-hidden border-none shadow-sm bg-secondary text-white hover:opacity-100';
  const primaryBtnStyle = {
    background: COLORS.secondary,
  } as React.CSSProperties;

  return (
    <section>
      <Container className="py-16 lg:py-20">
        <div>
          <div className="text-left">
            <h1
              className="text-left text-4xl md:text-6xl lg:text-7xl font-light text-secondary leading-tight max-w-xl"
              style={{ color: COLORS.lightblack }}
            >
              {topHeading}
            </h1>

            {topSub ? (
              <p
                className="mt-4 max-w-md text-sm leading-relaxed text-lightblack text-left"
                style={{ color: COLORS.secondary }}
              >
                {topSub}
              </p>
            ) : null}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* LEFT CARD */}
            <div className={`${cardClass} p-6 sm:p-8`}>
              <h2
                className="text-xl font-semibold"
                style={{ color: COLORS.lightblack }}
              >
                Elérhetőségeink
              </h2>

              <div className="mt-6 space-y-5">
                {hasText(contact.address) ? (
                  <div className="flex gap-4">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: COLORS.charcoal }}
                    >
                      <IconMapPin
                        className="h-5 w-5"
                        style={{ color: COLORS.muted }}
                        stroke={1.8}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: COLORS.muted }}
                      >
                        {addressLabel}
                      </p>
                      <p
                        className="mt-1 text-sm whitespace-pre-line"
                        style={{ color: COLORS.lightblack }}
                      >
                        {contact.address}
                      </p>
                    </div>
                  </div>
                ) : null}

                {/* ✅ csak ha van Strapi phone */}
                {hasText(contact.phone) ? (
                  <div className="flex gap-4">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: COLORS.charcoal }}
                    >
                      <IconPhone
                        className="h-5 w-5"
                        style={{ color: COLORS.muted }}
                        stroke={1.8}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: COLORS.muted }}
                      >
                        {leftPhoneTitle}
                      </p>
                      <Link
                        href={toTel(contact.phone)}
                        className="mt-1 inline-block text-sm hover:underline"
                        style={{ color: COLORS.lightblack }}
                      >
                        {contact.phone}
                      </Link>
                    </div>
                  </div>
                ) : null}

                {/* ✅ csak ha van Strapi email */}
                {hasText(contact.email) ? (
                  <div className="flex gap-4">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: COLORS.charcoal }}
                    >
                      <IconMail
                        className="h-5 w-5"
                        style={{ color: COLORS.muted }}
                        stroke={1.8}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: COLORS.muted }}
                      >
                        {leftEmailTitle}
                      </p>
                      <Link
                        href={`mailto:${contact.email}`}
                        className="mt-1 inline-block text-sm hover:underline"
                        style={{ color: COLORS.lightblack }}
                      >
                        {contact.email}
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>

              {openingHours.length ? (
                <div className="mt-8">
                  <div
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: COLORS.lightblack }}
                  >
                    <IconClock
                      className="h-4 w-4"
                      style={{ color: COLORS.muted }}
                      stroke={1.8}
                    />
                    <span>Nyitvatartás</span>
                  </div>

                  <div className="mt-4 space-y-3 text-sm">
                    {openingHours.map((it, idx) => (
                      <div
                        key={`${it.id ?? idx}`}
                        className="flex items-center justify-between"
                        style={{ color: COLORS.secondary }}
                      >
                        <span>{it.label || '—'}</span>
                        {it.closed ? (
                          <span className="font-medium text-red-600">
                            {it.time || 'Zárva'}
                          </span>
                        ) : (
                          <span style={{ color: COLORS.lightblack }}>
                            {it.time || '—'}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 h-56 rounded-xl overflow-hidden relative border border-black/5 bg-white">
                {contact.embedUrl ? (
                  <>
                    <iframe
                      title="Térkép"
                      src={contact.embedUrl}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      style={{
                        border: 0,
                        filter: 'grayscale(1) contrast(1.12) brightness(1.02)',
                      }}
                      allowFullScreen
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/10" />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 35%, rgba(0,0,0,0.10), transparent 55%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.16), transparent 55%)',
                      }}
                    />
                  </>
                ) : contact.coverUrl ? (
                  <>
                    <Image
                      src={contact.coverUrl}
                      alt="Térkép"
                      fill
                      unoptimized
                      className="object-cover will-change-transform"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        filter: 'grayscale(1) contrast(1.12) brightness(1.02)',
                        transform: 'translate(-20px, 20px) scale(1.18)',
                        transformOrigin: 'center',
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/25" />
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 30% 35%, rgba(0,0,0,0.10), transparent 55%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.16), transparent 55%)',
                      }}
                    />
                  </>
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(0deg, rgba(0,0,0,0.04), rgba(0,0,0,0.04)), radial-gradient(circle at 35% 30%, rgba(0,0,0,0.10), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.14), transparent 60%)',
                    }}
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center justify-center rounded-full bg-white/85 h-11 w-11 shadow-sm ">
                    <IconMapPin
                      className="h-5 w-5"
                      style={{ color: COLORS.muted }}
                      stroke={1.8}
                    />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3">
                  {hasText(contact.routeUrl) ? (
                    <Link
                      href={contact.routeUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-sm hover:border-black/20"
                      style={{ color: COLORS.lightblack }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Útvonaltervezés
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-sm opacity-60 cursor-not-allowed"
                      style={{ color: COLORS.lightblack }}
                      disabled
                      title="Nincs megadva map_route_url a Strapi-ban"
                    >
                      Útvonaltervezés
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT CARD (FORM) */}
            <div className={`${cardClass} p-6 sm:p-8`}>
              <div className="flex items-center justify-between gap-4">
                <h2
                  className="text-xl font-semibold"
                  style={{ color: COLORS.lightblack }}
                >
                  {formCardHeading}
                </h2>

                {bookingUrl ? (
                  <Link
                    href={bookingUrl}
                    className="shrink-0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      className={`h-9 px-3 rounded-md ${primaryBtnClass}`}
                      style={primaryBtnStyle}
                      type="button"
                    >
                      <span className="relative z-10 inline-flex items-center gap-2 text-xs font-semibold tracking-wide">
                        <IconCalendarEvent
                          className="h-4 w-4"
                          stroke={2}
                          style={{ color: COLORS.muted }}
                        />
                        IDŐPONTFOGLALÁS
                      </span>
                      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className={`h-9 px-3 rounded-md opacity-70 cursor-not-allowed ${primaryBtnClass}`}
                    style={primaryBtnStyle}
                    type="button"
                    disabled
                    title="Nincs megadva booking_url a Strapi-ban"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2 text-xs font-semibold tracking-wide">
                      <IconCalendarEvent
                        className="h-4 w-4"
                        stroke={2}
                        style={{ color: COLORS.muted }}
                      />
                      IDŐPONTFOGLALÁS
                    </span>
                    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
                  </Button>
                )}
              </div>

              {formCardSub ? (
                <p
                  className="mt-4 text-xs sm:text-sm max-w-md"
                  style={{ color: `${COLORS.secondary}cc` }}
                >
                  {formCardSub}
                </p>
              ) : null}

              <form className="mt-7 space-y-5" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className={labelClass}
                      htmlFor="fullName"
                      style={{ color: COLORS.secondary }}
                    >
                      {fields.name.label}
                    </label>
                    <div className="mt-2">
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder={fields.name.placeholder}
                        className={inputBase}
                        style={{
                          background: COLORS.charcoal,
                          color: COLORS.lightblack,
                        }}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        aria-invalid={!!fieldErrors.fullName}
                      />
                      {fieldErrors.fullName ? (
                        <p className={errorTextClass}>{fieldErrors.fullName}</p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      className={labelClass}
                      htmlFor="phone"
                      style={{ color: COLORS.secondary }}
                    >
                      {fields.phone.label}
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder={fields.phone.placeholder}
                        className={inputBase}
                        style={{
                          background: COLORS.charcoal,
                          color: COLORS.lightblack,
                        }}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    className={labelClass}
                    htmlFor="service"
                    style={{ color: COLORS.secondary }}
                  >
                    {fields.service.label}
                  </label>
                  <div className="mt-2 relative">
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={`${inputBase} appearance-none pr-10`}
                      style={{
                        background: COLORS.charcoal,
                        color: COLORS.lightblack,
                      }}
                      aria-invalid={!!fieldErrors.service}
                    >
                      <option value="" disabled>
                        {fields.service.placeholder}
                      </option>

                      {Array.isArray(fields.service.options) &&
                        fields.service.options.map((opt: any, idx: number) => {
                          const label =
                            typeof opt === 'string' ? opt : opt?.label;
                          const value =
                            typeof opt === 'string'
                              ? opt
                              : opt?.value || opt?.label;
                          if (!label || !value) return null;
                          return (
                            <option key={`opt-${idx}`} value={String(value)}>
                              {String(label)}
                            </option>
                          );
                        })}
                    </select>

                    <IconChevronDown
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4"
                      style={{ color: `${COLORS.secondary}b3` }}
                      stroke={2}
                    />
                  </div>
                  {fieldErrors.service ? (
                    <p className={errorTextClass}>{fieldErrors.service}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    className={labelClass}
                    htmlFor="email"
                    style={{ color: COLORS.secondary }}
                  >
                    {fields.email.label}
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder={fields.email.placeholder}
                      className={inputBase}
                      style={{
                        background: COLORS.charcoal,
                        color: COLORS.lightblack,
                      }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={!!fieldErrors.email}
                    />
                    {fieldErrors.email ? (
                      <p className={errorTextClass}>{fieldErrors.email}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    className={labelClass}
                    htmlFor="message"
                    style={{ color: COLORS.secondary }}
                  >
                    {fields.message.label}
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="message"
                      rows={6}
                      placeholder={fields.message.placeholder}
                      className={`${inputBase} resize-none`}
                      style={{
                        background: COLORS.charcoal,
                        color: COLORS.lightblack,
                      }}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      aria-invalid={!!fieldErrors.message}
                    />
                    {fieldErrors.message ? (
                      <p className={errorTextClass}>{fieldErrors.message}</p>
                    ) : null}
                  </div>
                </div>

                {privacyUrl ? (
                  <p
                    className="text-[11px] sm:text-xs"
                    style={{ color: `${COLORS.secondary}bf` }}
                  >
                    Az űrlap elküldésével hozzájárul adatai kezeléséhez az{' '}
                    <Link
                      href={privacyUrl}
                      className="hover:underline font-medium"
                      style={{ color: COLORS.muted }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Adatvédelmi irányelveink
                    </Link>{' '}
                    szerint.
                  </p>
                ) : null}

                {/* ✅ CTA-stílusú submit gomb */}
                <Button
                  className={`w-full h-11 rounded-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed ${primaryBtnClass}`}
                  style={primaryBtnStyle}
                  type="submit"
                  disabled={submitting}
                >
                  <span className="relative z-10 inline-flex items-center gap-2 font-semibold">
                    {submitting ? 'Küldés…' : fields.submit.label}
                    <IconArrowRight
                      className="h-4 w-4"
                      stroke={2.2}
                      style={{ color: COLORS.muted }}
                    />
                  </span>
                  <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
                </Button>

                {successMsg ? (
                  <p
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: '#16803c' }}
                  >
                    {successMsg}
                  </p>
                ) : null}

                {errorMsg ? (
                  <p className="text-xs sm:text-sm font-medium text-red-600">
                    {errorMsg}
                  </p>
                ) : null}

                {socialLinks.length ? (
                  <div className="pt-4 flex flex-wrap items-center gap-2">
                    {socialLinks.map((s, idx) => {
                      const Icon = pickIconByLabel(s.text);
                      return (
                        <Link
                          key={`${s.url}-${idx}`}
                          href={s.url}
                          target={s.target || '_self'}
                          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold border border-black/10 bg-white hover:border-black/20"
                          style={{ color: COLORS.lightblack }}
                          rel={s.target === '_blank' ? 'noreferrer' : undefined}
                        >
                          <Icon
                            className="h-4 w-4"
                            style={{ color: COLORS.muted }}
                            stroke={2}
                          />
                          <span>{s.text}</span>
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
