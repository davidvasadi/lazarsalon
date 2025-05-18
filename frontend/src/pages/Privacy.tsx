import React from 'react';
import { Link } from 'react-router-dom';

export const Privacy: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-0">
        <h1 className="text-4xl font-light text-[#1D1D1E] mb-6">Adatvédelmi tájékoztató</h1>
        <p className="text-[#38363C]/80 text-lg mb-6">
          Ez a weboldal (<a href="https://lazarsalon.com" className="text-[#B4943E] hover:underline">https://lazarsalon.com</a>) üzemeltetője („mi", „minket")
          elkötelezett a felhasználók adatainak védelme iránt. A Facebook Login és az Instagram Graph API
          használata során a felhasználói engedélyeken túl további személyes adatot nem gyűjtünk, és azokat nem
          tároljuk hosszabb távon.
        </p>

        <h2 className="text-2xl font-semibold text-[#1D1D1E] mb-4">Gyűjtött adatok</h2>
        <ul className="list-disc list-inside text-[#38363C]/80 mb-6">
          <li>Facebook-tól kapott felhasználói engedélyek (scope-ok)</li>
          <li>Instagram Business Page token (hosszú élettartamú hozzáférési token)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#1D1D1E] mb-4">Adatkezelés célja</h2>
        <p className="text-[#38363C]/80 mb-6">
          Az Instagram-posztok dinamikus megjelenítése és a weboldal működésének biztosítása.
        </p>

        <h2 className="text-2xl font-semibold text-[#1D1D1E] mb-4">Adatmegőrzés</h2>
        <p className="text-[#38363C]/80 mb-6">
          A hozzáférési tokeneket legfeljebb 60 napig tároljuk, majd újat kérünk a Facebook-tól.
        </p>

        <h2 className="text-2xl font-semibold text-[#1D1D1E] mb-4">Hozzáférés és törlés</h2>
        <p className="text-[#38363C]/80 mb-6">
          Bármikor kérheted engedélyeid visszavonását vagy az adataid törlését az alábbi email címen:<br />
          <a href="mailto:info@lazarsalon.com" className="text-[#B4943E] hover:underline">info@lazarsalon.com</a>
        </p>

        <h2 className="text-2xl font-semibold text-[#1D1D1E] mb-4">Kapcsolat</h2>
        <p className="text-[#38363C]/80 mb-12">
          Ha bármilyen kérdésed vagy észrevételed van ezzel a tájékoztatóval kapcsolatban, kérjük, írj nekünk:
          <br />
          <a href="mailto:info@lazarsalon.com" className="text-[#B4943E] hover:underline">info@lazarsalon.com</a>
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#B4943E] text-white font-light text-base px-6 py-3 rounded-xl hover:bg-[#9A7C32] transition-colors"
        >
          Vissza a főoldalra
        </Link>

        <p className="text-sm text-[#38363C]/60 mt-8">Utolsó frissítés: 2025. május 11.</p>
      </div>
    </section>
  );
};
