import { motion } from 'motion/react';
import { ChefHat, Leaf, Clock, MapPin } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <ChefHat size={32} strokeWidth={1} />,
      title: "Masterful Prep",
      desc: "Every cut of meat and dash of spice is balanced by culinary experts."
    },
    {
      icon: <Leaf size={32} strokeWidth={1} />,
      title: "Premium Ingredients",
      desc: "Sourced locally to ensure the highest freshness and authentic flavor."
    },
    {
      icon: <Clock size={32} strokeWidth={1} />,
      title: "Late Night Dining",
      desc: "Satisfy your sophisticated cravings until 10 PM daily."
    },
    {
      icon: <MapPin size={32} strokeWidth={1} />,
      title: "Prime Location",
      desc: "Conveniently situated in Wanjeri Mgbokwere Cres, Abuja."
    }
  ];

  return (
    <section className="py-24 bg-surface-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-accent uppercase tracking-[0.2em] font-semibold text-sm mb-4">The Standard</h4>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 border border-white/10 p-8 text-center rounded-sm hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-accent mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-serif font-medium mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
