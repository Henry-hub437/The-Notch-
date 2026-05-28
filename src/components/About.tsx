import { motion } from 'motion/react';
import aboutImg from '../assets/images/shawarma_gallery_1_1779969375184.png';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative rounded-t-full rounded-br-2xl overflow-hidden shadow-2xl border border-white/5">
              <img 
                src={aboutImg} 
                alt="Premium Shawarma Presentation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-accent rounded-full -z-10 opacity-50"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <h4 className="text-accent uppercase tracking-[0.2em] font-semibold text-sm mb-4">Our Story</h4>
            <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-8">
              Redefining Street Food <br/>With <span className="italic font-light">Elegance</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                Located in the heart of Abuja, The Notch Abuja-Shawarma Grill was born from a simple vision: to elevate the beloved street classic into a premium culinary experience without losing its authentic soul.
              </p>
              <p>
                We source only the finest cuts of meat, marinating them in our proprietary blend of rich, bold Suya spices. Every wrap is a testament to our dedication to quality, featuring freshly baked flatbreads and our signature creamy, vibrant sauces.
              </p>
              <p>
                From quick lunches to late-night cravings, our elegant environment and meticulously crafted menu ensure every bite is nothing short of exceptional.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-serif text-white mb-1">4.7<span className="text-accent text-lg">/5</span></p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Customer Rating</p>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <p className="text-3xl font-serif text-white mb-1">10<span className="text-accent text-lg">pm</span></p>
                <p className="text-xs uppercase tracking-widest text-gray-500">Late Night Dining</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
