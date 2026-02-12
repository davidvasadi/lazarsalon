// index.tsx
'use client';

import { motion } from 'framer-motion';

import { DesktopNavbar } from './desktop-navbar';
import { MobileNavbar } from './mobile-navbar';

// index.tsx

// index.tsx

export function Navbar({ data, locale }: { data: any; locale: string }) {
  return (
    <motion.nav className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="hidden w-full lg:block">
        {data?.left_navbar_items && (
          <DesktopNavbar
            locale={locale}
            leftNavbarItems={data?.left_navbar_items}
            rightNavbarItems={data?.right_navbar_items}
            logo={data?.logo}
          />
        )}
      </div>

      <div className="flex w-full items-center lg:hidden">
        {data?.left_navbar_items && (
          <MobileNavbar
            locale={locale}
            leftNavbarItems={data?.left_navbar_items}
            rightNavbarItems={data?.right_navbar_items}
            logo={data?.logo}
          />
        )}
      </div>
    </motion.nav>
  );
}
