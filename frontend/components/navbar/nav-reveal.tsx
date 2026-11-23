'use client';

import { createContext, useContext } from 'react';

/** A menü görgetéses viselkedése (index.tsx adja): `revealed` = felfelé görgetésre lecsúszott (üveges háttér);
 *  `setMenuOpen` = a nyitott menü alatt a sáv nem tűnhet el (a teljes képernyős menü a sáv része). */
export const NavRevealContext = createContext<{
  revealed: boolean | null;
  setMenuOpen: (open: boolean) => void;
}>({
  revealed: null,
  setMenuOpen: () => {},
});
export const useNavReveal = () => useContext(NavRevealContext);
