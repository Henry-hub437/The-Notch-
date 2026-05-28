import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/dszYVHBB/Screenshot-20260528-124232-Google.jpg" 
          alt="Premium Suya Shawarma" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <span className="text-sm font-medium tracking-wide uppercase text-gray-300">4.7 / 5 based on 28 Reviews</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-white"
          >
            Elevate Your <br/>
            <span className="text-accent italic">Shawarma Experience.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light"
          >
            Abuja's premier destination for luxury authentic Suya Shawarma. Indulge in perfectly spiced, meticulously crafted rolls designed for the refined palate.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#menu" className="bg-accent hover:bg-accent-hover text-primary-900 px-8 py-4 rounded-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 transition-colors">
              Explore Our Menu
            </a>
            <a href="https://wa.me/2348101243438" target="_blank" rel="noreferrer" className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors">
              Order via WhatsApp <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
