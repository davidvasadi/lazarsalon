// desktop-navbar.tsx
'use client';

import React from 'react';

import { UnifiedNavbar } from './mobile-navbar';

// desktop-navbar.tsx

// desktop-navbar.tsx

type PageLike = {
  id: number;
  slug: string;
  dynamic_zone?: Array<Record<string, any>>;
};

type NavItem = {
  id: number;
  URL: string;
  text: string;
  target?: string | null;
  pages?: PageLike[];
};

type Props = {
  leftNavbarItems: NavItem[];
  rightNavbarItems: { URL: string; text: string; target?: string | null }[];
  logo: any;
  locale: string;
};

export const DesktopNavbar = (props: Props) => (
  <UnifiedNavbar {...props} enableFeatured />
);
