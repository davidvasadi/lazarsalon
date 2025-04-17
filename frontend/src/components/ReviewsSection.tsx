// import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
export const ReviewsSection = () => {
  const reviews = [{
    name: 'Horváth Zsuzsanna',
    role: 'Visszatérő vendég',
    rating: 5,
    text: 'Fantasztikus élmény volt minden alkalommal. A szalon hangulata és a szolgáltatás minősége kiemelkedő. Több éve járok ide, és sosem csalódtam.',
    image: 'https://images.unsplash.com/photo-1557053815-9f79f70c7980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    date: '2023. november 15.',
    service: 'Hajfestés és vágás'
  }, {
    name: 'Tóth Gábor',
    role: 'Rendszeres vendég',
    rating: 5,
    text: 'Profi csapat, kiváló szolgáltatás. A személyzet figyelme és szakértelme kiemelkedő. Mindig pontosan azt kapom, amit szeretnék, sőt gyakran még annál is többet.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
    date: '2023. november 10.',
    service: 'Férfi hajvágás'
  }, {
    name: 'Nagy Eszter',
    role: 'VIP vendég',
    rating: 5,
    text: 'Páratlan minőség és professzionalizmus. A szalon eleganciája és a szolgáltatások színvonala minden alkalommal lenyűgöz. Csak ajánlani tudom mindenkinek.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
    date: '2023. november 5.',
    service: 'Komplett szépségkezelés'
  }];
  return <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div className="max-w-2xl mx-auto text-center mb-20" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }}>
          <motion.div className="inline-flex items-center justify-center gap-2 mb-6 text-[#B4943E]" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
            <span className="text-sm font-light tracking-wider uppercase">
              Vélemények
            </span>
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">
            Mit mondanak rólunk vendégeink
          </h2>
          <motion.div className="flex items-center justify-center gap-1 mb-3" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            {[1, 2, 3, 4, 5].map((_, index) => <StarIcon key={index} className="w-5 h-5 text-[#B4943E] fill-[#B4943E]" />)}
          </motion.div>
          <p className="text-[#1D1D1E] text-lg font-light">
            4.9 / 5.0{' '}
            <span className="text-[#38363C]/60 text-base">
              több mint 200 értékelés alapján
            </span>
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: index * 0.2
        }} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute -bottom-1 -right-1 bg-[#B4943E] text-white p-1 rounded-full">
                      <StarIcon className="w-3 h-3 fill-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1D1D1E] group-hover:text-[#B4943E] transition-colors duration-300">
                      {review.name}
                    </h4>
                    <p className="text-sm text-[#38363C]/60">{review.role}</p>
                  </div>
                </div>
                <div className="mb-6 flex-grow">
                  <p className="text-[#38363C] leading-relaxed">
                    {review.text}
                  </p>
                </div>
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#B4943E]">
                      {review.service}
                    </span>
                    <span className="text-sm text-[#38363C]/40">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
        <motion.div className="text-center mt-16" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }}>
          <a href="https://g.page/r/your-google-review-link" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1D1D1E] hover:text-[#B4943E] transition-colors group">
            <span className="text-sm tracking-wide">
              További vélemények megtekintése
            </span>
            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>;
};