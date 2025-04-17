import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock, User, ArrowLeft } from 'lucide-react';
import { BlogHero } from '../components/BlogHero';
import { CompactBooking } from '../components/CompactBooking';
import { Helmet } from 'react-helmet';
export const BlogPage = () => {
  const blogPosts = [{
    title: 'A tökéletes hajápolás titkai',
    excerpt: 'Fedezze fel a professzionális hajápolás legfontosabb lépéseit és trükkjeit. Hogyan ápoljuk hajunkat otthon szakszerűen?',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    author: 'Kovács Anna',
    date: '2023. december 1.',
    readTime: '5 perc',
    slug: 'a-tokeletes-hajapolas-titkai',
    category: 'Hajápolás'
  }, {
    title: '2024-es frizura trendek',
    excerpt: 'Ismerje meg a következő év legdivatosabb frizuráit és hajszíneit. Milyen trendek várhatóak 2024-ben?',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
    author: 'Nagy Bence',
    date: '2023. november 28.',
    readTime: '4 perc',
    slug: '2024-es-frizura-trendek',
    category: 'Trendek'
  }, {
    title: 'Téli bőrápolási rutin',
    excerpt: 'Hogyan védjük bőrünket a hideg időben? Szakértői tippek és trükkök a téli bőrápoláshoz.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2035&q=80',
    author: 'Szabó Eszter',
    date: '2023. november 25.',
    readTime: '6 perc',
    slug: 'teli-borapolasi-rutin',
    category: 'Bőrápolás'
  }];
  return <main>
      <Helmet>
        <title>Blog | Lazars Szépségszalon</title>
        <meta name="description" content="Szakértői tippek, trendek és hasznos információk a szépségápolásról. Ismerje meg a legújabb beauty trendeket és ápolási technikákat." />
        <meta property="og:title" content="Blog | Lazars Szépségszalon" />
        <meta property="og:description" content="Szakértői tippek, trendek és hasznos információk a szépségápolásról." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3" />
      </Helmet>
      <BlogHero title="Blog" subtitle="Szakértői tippek, trendek és hasznos információk a szépségápolásról" />
      <div className="fixed top-24 right-4 z-50 flex flex-col gap-4">
        <Link to="/" className="inline-flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full text-[#38363C]/60 hover:text-[#B4943E] transition-colors shadow-sm">
          <ArrowLeft size={20} />
        </Link>
      </div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="group">
                <Link to={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#B4943E] text-white px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-[#38363C]/60 mb-3">
                        <div className="flex items-center gap-2">
                          <User size={14} />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-[#1D1D1E] mb-2 group-hover:text-[#B4943E] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[#38363C]/60 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-[#B4943E]">
                        <CalendarIcon size={14} className="mr-2" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>)}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center mb-8">
            Inspiráló képek
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['https://images.unsplash.com/photo-1560869713-7d0a29430803', 'https://images.unsplash.com/photo-1605497788044-5a32c7078486', 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908', 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2'].map((image, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="aspect-square overflow-hidden rounded-lg">
                <img src={image} alt="Szépségápolási inspiráció" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
              </motion.div>)}
          </div>
        </div>
      </section>
      <CompactBooking />
    </main>;
};