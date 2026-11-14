/**
 * Site sections that exist in the code but are not live yet (no content / no public access in Strapi).
 * While `false`, their URLs temporarily redirect (307) to the homepage instead of crashing (500). To launch one: publish its content in
 * Strapi (and allow public read access), then set it to `true`.
 */
export const features = {
  blog: false,
  products: false,
} as const;
