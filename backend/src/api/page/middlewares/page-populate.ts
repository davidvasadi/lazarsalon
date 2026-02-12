/**
 * `page` middleware
 * - Auto deep-populate for dynamic_zone components
 * - SAFE special-case for relations to api::page.page so Services->pages can access hero.cover (and hero data) without manual OVERRIDES per component
 */
import type { Core } from '@strapi/strapi';

// 1) Kézi override-ok (ha valamit direkt kézzel akarsz szabályozni)
const OVERRIDES: Record<string, any> = {
  'dynamic-zone.hero': { populate: { CTAs: true, image: true, cover: true } },
  'dynamic-zone.features': {
    populate: {
      globe_card: true,
      ray_card: { populate: { before_ray_items: true, after_ray_items: true } },
      graph_card: { populate: { top_items: true } },
      social_media_card: { populate: { logos: { populate: { image: true } } } },
    },
  },
  'dynamic-zone.testimonials': {
    populate: {
      testimonials: { populate: { user: { populate: { image: true } } } },
    },
  },
  'dynamic-zone.how-it-works': { populate: { steps: true } },
  'dynamic-zone.brands': { populate: { logos: { populate: { image: true } } } },
  'dynamic-zone.pricing': {
    populate: {
      plans: {
        populate: {
          perks: true,
          additional_perks: true,
          CTA: true,
          product: true,
          cover: true,
        },
      },
    },
  },
  'dynamic-zone.launches': { populate: { launches: true } },
  'dynamic-zone.cta': { populate: { CTAs: true, cover: true } },
  'dynamic-zone.faq': { populate: { faqs: true } },
  'dynamic-zone.form-next-to-section': {
    populate: {
      form: { populate: { inputs: true } },
      section: {
        populate: {
          users: { populate: { image: true } },
          opening_hours: true, // ✅ ha létezik a section-ben
          cover: true,
        },
      },
      social_media_icon_links: { populate: { image: true, link: true } },
    },
  },
};

const MAX_DEPTH = 5;

/**
 * SAFE populate for relations that target api::page.page
 * (e.g. dynamic-zone.services.pages relation)
 *
 * We intentionally keep it tight to avoid huge payloads / recursion:
 * - only fields we need
 * - only hero in dynamic_zone
 * - only cover/image/CTAs in hero
 */
const SAFE_PAGE_RELATION = {
  fields: ['slug', 'label', 'locale'],
  populate: {
    dynamic_zone: {
      on: {
        'dynamic-zone.hero': {
          populate: { cover: true, image: true, CTAs: true },
        },
      },
    },
  },
};

function buildDeepPopulateForComponent(
  strapi: Core.Strapi,
  uid: string,
  depth = MAX_DEPTH,
  seen = new Set<string>()
) {
  if (!uid || depth <= 0) return '*';
  if (seen.has(uid)) return '*';
  seen.add(uid);

  const schema = (strapi.components as any)?.[uid];
  const attrs = schema?.attributes ?? {};
  const populate: Record<string, any> = {};

  for (const [key, attr] of Object.entries<any>(attrs)) {
    const type = attr?.type;

    // --- Media: always ok to populate shallow
    if (type === 'media') {
      populate[key] = true;
      continue;
    }

    // --- Relations: safe special-case for Page relations, otherwise keep shallow
    if (type === 'relation') {
      const target = attr?.target as string | undefined;

      if (target === 'api::page.page') {
        populate[key] = SAFE_PAGE_RELATION;
      } else {
        populate[key] = true;
      }
      continue;
    }

    // --- Nested component
    if (type === 'component') {
      const childUID = attr.component as string;
      populate[key] = {
        populate: buildDeepPopulateForComponent(
          strapi,
          childUID,
          depth - 1,
          new Set(seen)
        ),
      };
      continue;
    }

    // --- Dynamic zone
    if (type === 'dynamiczone') {
      const components: string[] = attr.components ?? [];
      const on: Record<string, any> = {};
      for (const c of components) {
        on[c] = {
          populate: buildDeepPopulateForComponent(
            strapi,
            c,
            depth - 1,
            new Set(seen)
          ),
        };
      }
      populate[key] = { on };
      continue;
    }

    // scalar/text/json/etc -> nem kell populate
  }

  // ha nincs populate mező, akkor '*' elég
  return Object.keys(populate).length ? populate : '*';
}

// 2) Page schema -> dynamic_zone components -> on mapping
function buildPagePopulate(strapi: Core.Strapi) {
  const pageUID = 'api::page.page';
  const pageCT = (strapi.contentTypes as any)?.[pageUID];

  const components: string[] =
    pageCT?.attributes?.dynamic_zone?.components ?? [];

  const on: Record<string, any> = {};
  for (const uid of components) {
    // ha van override: azt használjuk, ha nincs: deep schema-alapú populate
    on[uid] = OVERRIDES[uid] ?? {
      populate: buildDeepPopulateForComponent(strapi, uid),
    };
  }

  return {
    dynamic_zone: { on },
    seo: { populate: { metaImage: true } },
  };
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  const POPULATE_DEBUG = process.env.POPULATE_DEBUG === '1';
  const populate = buildPagePopulate(strapi);

  if (POPULATE_DEBUG) {
    const keys = Object.keys((populate as any).dynamic_zone.on || {});
    strapi.log.info(
      `[page-populate] dynamic_zone components (${keys.length}): ${keys.join(', ')}`
    );
  }

  return async (ctx, next) => {
    ctx.query.populate = populate;
    await next();
  };
};
