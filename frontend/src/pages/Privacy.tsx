import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<SectionProps> = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-6 border-b border-[#e0e0e0] pb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-2xl font-semibold text-[#1D1D1E] flex justify-between items-center"
      >
        {title}
        <span className="text-2xl">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mt-4 text-[#38363C]/80 text-base">{children}</div>}
    </div>
  );
};

export const Privacy: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-0 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-light text-[#1D1D1E] mb-8">Adatvédelmi tájékoztató</h1>

        <p className="text-[#38363C]/80 text-base mb-6">
          A Lazar’s Szépségszalon (Lázár Szalon Kft., 1138 Budapest, Danubius utca 3.) kiemelten fontosnak tartja
          a személyes adatok védelmét, valamint ügyfelei információs önrendelkezési jogának tiszteletben tartását.
        </p>

        <CollapsibleSection title="1. Az adatkezelő adatai">
          <ul className="list-disc list-inside">
            <li>Név: Lázár Szalon Kft.</li>
            <li>Székhely: 1138 Budapest, Danubius utca 3.</li>
            <li>Cégjegyzékszám: 01-09-395719</li>
            <li>Adószám: 23539576-2-41</li>
            <li>E-mail: <a href="mailto:lazarjoc85@gmail.com" className="text-[#B4943E] hover:underline">lazarjoc85@gmail.com</a></li>
            <li>Telefon: +36 20 529 2023</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="2. Kezelt személyes adatok">
          <p>Az alábbi személyes adatokat akkor kezeljük, ha Ön e-mailben kapcsolatba lép velünk, illetve hozzájárul statisztikai célú sütik használatához:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Név (amennyiben megadja az üzenetben)</li>
            <li>E-mail cím (automatikusan megjelenik a levélben)</li>
            <li>Telefonszám (amennyiben megadja)</li>
            <li>Technikai adatok (IP-cím, böngésző típusa, látogatás időpontja – csak hozzájárulás esetén)</li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="3. Cookie-k és analitika">
          <p>
            A weboldal sütiket (cookie-kat) használ a működés biztosítása, a felhasználói élmény javítása,
            valamint statisztikai célból. Harmadik féltől származó szolgáltatások is elhelyezhetnek sütiket,
            mint például a Google Analytics és a Facebook Pixel.
          </p>
          <p className="mt-2">
            A cookie-k részletes típusairól és időtartamáról az alábbi linkeken tájékozódhatsz:
          </p>
          <ul className="list-disc list-inside">
            <li><a className="text-[#B4943E] hover:underline" href="https://policies.google.com/technologies/types?hl=hu" target="_blank">Google Analytics cookie-k</a></li>
            <li><a className="text-[#B4943E] hover:underline" href="https://www.facebook.com/privacy/policies/cookies/" target="_blank">Facebook Pixel cookie-k</a></li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="4. Adatkezelés jogalapja és célja">
          <p>
            Az adatkezelés célja a szolgáltatás működtetése, az Instagram-posztok dinamikus megjelenítése,
            kapcsolattartás, statisztikák elemzése és marketing tevékenység. Az adatkezelés jogalapja:
            az érintett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="5. Érintetti jogok">
          <ul className="list-disc list-inside">
            <li>Hozzáférés a személyes adatokhoz</li>
            <li>Helyesbítés, törlés vagy korlátozás kérése</li>
            <li>Hozzájárulás visszavonása</li>
            <li>Adathordozhatósághoz való jog</li>
            <li>Tiltakozás az adatkezelés ellen</li>
            <li>Panasz benyújtása a NAIH-hoz: <a href="https://www.naih.hu/" className="text-[#B4943E] hover:underline" target="_blank">www.naih.hu</a></li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="6. Kapcsolat">
          <p>
            Amennyiben kérdésed vagy kérelmed van adatkezeléssel kapcsolatban, kérjük, vedd fel velünk a kapcsolatot:
            <br />
            <a href="mailto:info@lazarsalon.com" className="text-[#B4943E] hover:underline">info@lazarsalon.com</a>
          </p>
        </CollapsibleSection>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#B4943E] text-white font-light text-base px-6 py-3 rounded-xl hover:bg-[#9A7C32] transition-colors"
        >
          Vissza a főoldalra
        </Link>

        <p className="text-sm text-[#38363C]/60 mt-8">Utolsó frissítés: 2025. május 26.</p>
      </div>
    </section>
  );
};
