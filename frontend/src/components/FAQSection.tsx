import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import useStrapi from '../hooks/useStrapi';

interface FAQItem {
  id: number;
  Question: string;
  Answer: string;
}

interface FAQData {
  FAQItem: FAQItem[];
  createdAt: string;
  documentId: string;
  id: number;
  publishedAt: string;
  updatedAt: string;
}

interface FAQResponse {
  data: FAQData;
  meta: any;
}

export const FAQSection: React.FC = () => {
  const { data, loading, error } = useStrapi<FAQResponse>('/api/faq?populate=*');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:1337';
  // if (loading) return <div>FAQ betöltése...</div>;
  // if (error) return <div>Hiba történt: {error.message}</div>;

  // Kinyerjük a FAQ elemeket a data.FAQItem kulcsból
  const faqs = data?.data?.FAQItem || [];

  // Ha nincs tartalom, használjunk statikus fallback-et
  const fallbackFaqs: FAQItem[] = [
    {
      id: 1,
      Question: 'Hogyan foglalhatok időpontot?',
      Answer:
        'Időpontot foglalhatsz telefonon, e-mailben, vagy közvetlenül a weboldalunkon keresztül az időpontfoglaló rendszerünkben. Válaszd ki a kívánt szolgáltatást, szakembert és időpontot, majd add meg elérhetőségeidet.'
    },
    {
      id: 2,
      Question: 'Mennyivel korábban érdemes időpontot foglalni?',
      Answer:
        'Javasoljuk, hogy legalább 1-2 héttel a kívánt időpont előtt foglalj, különösen hétvégékre vagy ünnepnapokra. Népszerű időszakokban akár több héttel előre is érdemes foglalni.'
    }
  ];

  const faqList = faqs.length > 0 ? faqs : fallbackFaqs;

  return (
    <section id="faq" className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1D1D1E] mb-4">Gyakori kérdések</h2>
          <p className="text-[#38363C] max-w-2xl mx-auto">
            Összegyűjtöttük a leggyakrabban feltett kérdéseket. Ha nem találod a választ a kérdésedre, keress minket bátran!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqList.map((faq, index) => (
            <div key={faq.id} className="mb-4 border-b border-gray-200 pb-4 last:border-b-0">
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-[#1D1D1E]">{faq.Question}</h3>
                {openIndex === index ? (
                  <ChevronUpIcon size={20} className="text-[#38363C]" />
                ) : (
                  <ChevronDownIcon size={20} className="text-[#38363C]" />
                )}
              </button>
              {openIndex === index && <p className="mt-2 text-[#38363C]">{faq.Answer}</p>}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#38363C] mb-4">Nem találod a választ a kérdésedre?</p>
          <a
            href="#booking"
            className="bg-[#38363C] text-white px-8 py-3 rounded-full inline-block hover:bg-[#1D1D1E] transition-colors"
          >
            Kapcsolat
          </a>
        </div>
      </div>
    </section>
  );
};
