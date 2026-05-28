import { motion } from 'motion/react';
import gallery1 from '../assets/images/shawarma_gallery_1_1779969375184.png';
import gallery2 from '../assets/images/shawarma_gallery_2_1779969395614.png';
import gallery3 from '../assets/images/shawarma_suya_1779969317809.png';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-primary-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h4 className="text-accent uppercase tracking-[0.2em] font-semibold text-sm mb-4">Visual Taste</h4>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">The Art of Plating</h2>
          </div>
          <p className="text-gray-400 font-light md:text-right max-w-sm">
            A glimpse into the aesthetic presentation and vibrant environment that defines us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 aspect-square md:aspect-[16/9] relative group overflow-hidden rounded-sm"
          >
            <img src={gallery1} alt="Shawarma meal spread" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square relative group overflow-hidden rounded-sm"
          >
            <img src={gallery2} alt="Shawarma and cocktail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 aspect-[21/9] relative group overflow-hidden rounded-sm"
          >
            <img src={gallery3} alt="Close up shawarma" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 object-center" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
