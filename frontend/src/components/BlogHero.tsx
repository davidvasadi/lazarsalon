import { motion } from 'framer-motion';
export const BlogHero = ({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) => {
  return <section className="relative w-full h-[40vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80')] bg-cover bg-center grayscale">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1E]/95 via-[#1D1D1E]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[#1D1D1E]/20"></div>
        </div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div className="max-w-3xl" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1
      }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 font-light">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>;
};