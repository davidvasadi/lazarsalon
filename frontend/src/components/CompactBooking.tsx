import { motion } from 'framer-motion';
import { CalendarIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export const CompactBooking = () => {
  return <motion.section initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="py-16 bg-[#38363C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-6">
            Szeretne időpontot foglalni?
          </h2>
          <p className="text-white/80 mb-8">
            Foglalja le időpontját most online, és mi azonnal visszaigazoljuk a
            foglalását.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/idopontfoglalas" className="inline-flex items-center justify-center gap-2 bg-white text-[#38363C] px-8 py-3 rounded-lg hover:bg-[#B4943E] hover:text-white transition-all duration-300">
              <CalendarIcon size={20} />
              <span>Időpontfoglalás</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a href="tel:+3612345678" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
              <span>+36 1 234 5678</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>;
};