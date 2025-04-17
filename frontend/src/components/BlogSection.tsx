import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarIcon, Clock, User } from 'lucide-react';
export const BlogSection = () => {
  const blogPosts = [{
    title: 'A tökéletes hajápolás titkai',
    excerpt: 'Fedezze fel a professzionális hajápolás legfontosabb lépéseit és trükkjeit. Hogyan ápoljuk hajunkat otthon szakszerűen?',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    author: 'Kovács Anna',
    date: '2023. december 1.',
    readTime: '5 perc',
    slug: 'a-tokeletes-hajapolas-titkai'
  }, {
    title: '2024-es frizura trendek',
    excerpt: 'Ismerje meg a következő év legdivatosabb frizuráit és hajszíneit. Milyen trendek várhatóak 2024-ben?',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
    author: 'Nagy Bence',
    date: '2023. november 28.',
    readTime: '4 perc',
    slug: '2024-es-frizura-trendek'
  }, {
    title: 'Téli bőrápolási rutin',
    excerpt: 'Hogyan védjük bőrünket a hideg időben? Szakértői tippek és trükkök a téli bőrápoláshoz.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2035&q=80',
    author: 'Szabó Eszter',
    date: '2023. november 25.',
    readTime: '6 perc',
    slug: 'teli-borapolasi-rutin'
  }];
  return <section id="blog-section" className="py-32 bg-white">
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
              Blog
            </span>
            <span className="h-[1px] w-8 bg-[#B4943E]"></span>
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">
            Legfrissebb bejegyzéseink
          </h2>
          <p className="text-[#38363C]/60 text-lg font-light">
            Szakértői tippek, trendek és hasznos információk a szépségápolásról
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => <motion.div key={index} initial={{
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
              <Link to={`/blog/${post.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
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
        <motion.div className="text-center mt-12" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }}>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#1D1D1E] hover:text-[#B4943E] transition-colors group">
            <span className="text-base tracking-wide">További bejegyzések</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>;
};