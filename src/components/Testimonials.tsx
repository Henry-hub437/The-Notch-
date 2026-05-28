import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Absolutely the best Suya Shawarma in Abuja. The meat is tender, the flavors are complex, and the presentation is top-tier.",
      name: "Tobi A.",
      role: "Local Guide"
    },
    {
      text: "A highly premium experience from start to finish. It completely elevates what you expect from a street food staple.",
      name: "Chioma E.",
      role: "Food Critic"
    },
    {
      text: "The delivery was fast, the packaging was elegant, and the taste was phenomenal. 10/10 recommend.",
      name: "David O.",
      role: "Verified Customer"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-surface-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h4 className="text-accent uppercase tracking-[0.2em] font-semibold text-sm mb-4">Guest Experiences</h4>
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16">What They Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white/5 p-8 border border-white/10 rounded-sm relative"
            >
              <Quote className="absolute top-8 right-8 text-accent/20" size={40} />
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 font-light italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="text-left mt-auto">
                <p className="text-white font-medium">{review.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
