import { motion } from 'motion/react';
import suyaImg from '../assets/images/shawarma_suya_1779969317809.png';
import grillImg from '../assets/images/shawarma_grill_1779969336325.png';

export default function Menu() {
  const menuItems = [
    {
      name: "Signature Suya Shawarma",
      description: "Premium beef slices marinated in authentic suya spices, fresh cabbage, carrots, and our secret creamy sauce.",
      price: "₦4,500",
      highlight: true
    },
    {
      name: "Spiced Chicken Shawarma",
      description: "Tender grilled chicken cuts, caramelized onions, crisp greens wrapped in warm Lebanese flatbread.",
      price: "₦4,000",
      highlight: false
    },
    {
      name: "Mixed Meat Special",
      description: "The best of both worlds. Rich suya beef and succulent chicken with extra cheese and double sausage.",
      price: "₦6,000",
      highlight: false
    },
    {
      name: "Gourmet Platter",
      description: "Deconstructed premium shawarma experience served with seasoned fries, coleslaw, and three signature dips.",
      price: "₦10,000",
      highlight: false
    }
  ];

  return (
    <section id="menu" className="py-24 bg-primary-900 border-y border-white/5 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 rounded-l-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-accent uppercase tracking-[0.2em] font-semibold text-sm mb-4">Culinary Excellence</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Featured Selections</h2>
          <p className="text-gray-400 font-light">Crafted with precision, passion, and the finest locally sourced ingredients.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Menu Images */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10"
            >
              <img src={suyaImg} alt="Suya Shawarma" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[21/9] rounded-lg overflow-hidden border border-white/10"
            >
              <img src={grillImg} alt="Grilling Meat" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          {/* Menu Items */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:pl-10">
            {menuItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group ${item.highlight ? 'bg-white/5 p-6 rounded-lg border border-accent/20' : 'p-4'}`}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-serif font-medium text-white group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex-1 mx-4 border-b border-dashed border-white/20 relative top-[-6px]"></div>
                  <span className="text-lg font-medium text-accent">{item.price}</span>
                </div>
                <p className="text-gray-400 font-light text-sm leading-relaxed max-w-[85%]">
                  {item.description}
                </p>
              </motion.div>
            ))}

            <div className="pt-8">
              <a href="https://wa.me/2348101243438" target="_blank" rel="noreferrer" className="inline-block bg-white text-primary-900 px-8 py-3 rounded-sm font-semibold text-sm tracking-widest uppercase hover:bg-gray-200 transition-colors">
                Order Delivery
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
