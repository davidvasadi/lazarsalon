import { motion } from 'framer-motion';
import { InstagramIcon, ArrowUpRight } from 'lucide-react';

export const InstagramFeed = () => {
  const instagramPosts = [
    {
      image: 'https://api.lazarsalon.com/uploads/hajvagas_lazars_szepsegszalon_JPG_b03ece5419.jpg',
      likes: 143,
      category: 'Hajvágás'
    },
    {
      image: 'https://api.lazarsalon.com/uploads/hajfestes_lazars_szepsegszalon_d1ca65b646.jpg',
      likes: 124,
      category: 'Hajfestés'
    },
    {
      image: 'https://api.lazarsalon.com/uploads/noi_fodraszat_lazars_szepsegszalon_c7dc634b35.jpg',
      likes: 156,
      category: 'Női fodrászat'
    },
    {
      image: 'https://api.lazarsalon.com/uploads/styling_lazars_szepsegszalon_JPG_dc74f9e1cf.jpg',
      likes: 98,
      category: 'Styling'
    },
    {
      image: 'https://api.lazarsalon.com/uploads/kormok_lazars_szepsegszalon_368a88e0d8.jpg',
      likes: 215,
      category: 'Körmök'
    },
    {
      image: 'https://api.lazarsalon.com/uploads/noi_hajvagas_lazars_szepsegszalon_1b840306bf.jpg',
      likes: 189,
      category: 'Női hajvágás'
    },
    {
      image: 'https://api.lazarsalon.com/uploads/mukorom_lazars_szepsegszalon_0fb2e70f11.jpeg',
      likes: 167,
      category: 'Műköröm és géllakk'
    },
    {
      image: 'https://api.lazarsalon.com/uploads/ferfi_hajvagas_lazars_szepsegszalon_6c5cdc42cf.jpg',
      likes: 167,
      category: 'Férfi hajvágás'
    },
    {
      image: 'https://api.lazarsalon.com/uploads/kreativ_haj_lazars_szepsegszalon_d002deeeaa.jpg',
      likes: 189,
      category: 'Kreatív hajvágás'
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
          {instagramPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img
                src={post.image}
                alt={`Instagram - ${post.category}`}
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                <div className="">
                  <div className="p-2 sm:p-4 flex items-center justify-between text-white">
                    <span className="text-sm font-light">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <ArrowUpRight size={16} className="transform -rotate-12" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                  </div>
                  <div className='px-2 sm:px-4 mb-2 sm:mb-4 sm:mx-auto'>
                    <a
                      href="https://www.instagram.com/lazarssalon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md
                       hover:bg-white/20 transition text-white
                       text-[10px] sm:text-sm md:text-base
                       whitespace-nowrap overflow-hidden
                       font-light backdrop-blur-md group-hover:bg-white/10"
                      >
                      <InstagramIcon size={14} />
                      <span className="truncate">LAZAR'S szépségszalon</span>
                    </a>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="https://www.instagram.com/lazarssalon/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#1D1D1E] hover:text-[#B4943E] transition-colors group font-light"
          >
            <span className="text-base tracking-wide">
              @lazarsszepsegszalon
            </span>
            <ArrowUpRight
              size={18}
              className="transform -rotate-12 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
