import { motion } from 'framer-motion';
import { InstagramIcon, ArrowUpRight } from 'lucide-react';
export const InstagramFeed = () => {
  const instagramPosts = [{
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    likes: 124,
    category: 'Hajfestés'
  }, {
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    likes: 156,
    category: 'Szalon'
  }, {
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    likes: 98,
    category: 'Styling'
  }, {
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    likes: 215,
    category: 'Körmök'
  }, {
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    likes: 167,
    category: 'Smink'
  }, {
    image: 'https://images.unsplash.com/photo-1526307616774-60d0098f7642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
    likes: 143,
    category: 'Hajvágás'
  }, {
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    likes: 189,
    category: 'Esküvői frizura'
  }, {
    image: 'https://images.unsplash.com/photo-1607008829749-c0f45a228d41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    likes: 167,
    category: 'Férfi hajvágás'
  }];
  return <section className="py-32 bg-white">
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
          <motion.div className="inline-flex items-center justify-center gap-2 mb-6" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <InstagramIcon size={24} className="text-[#B4943E]" />
          </motion.div>
          <h2 className="text-4xl font-light text-[#1D1D1E] mb-6">
            Kövess minket Instagramon
          </h2>
          <p className="text-[#38363C]/60 text-lg font-light">
            Inspirálódj munkáinkból és kövesd legfrissebb alkotásainkat
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8,
          delay: index * 0.1
        }} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
              <img src={post.image} alt={`Instagram - ${post.category}`} className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-sm font-light">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpRight size={16} className="transform -rotate-12" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="https://www.instagram.com/lazarssalon/" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
                <span className="sr-only">Nézd meg Instagramon</span>
              </a>
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
          <a href="https://www.instagram.com/lazarssalon/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#1D1D1E] hover:text-[#B4943E] transition-colors group font-light">
            <span className="text-base tracking-wide">
              @lazarsszepsegszalon
            </span>
            <ArrowUpRight size={18} className="transform -rotate-12 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>;
};