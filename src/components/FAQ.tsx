import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you offer delivery in Abuja?",
      a: "Yes, we deliver across major areas in Abuja. You can easily place delivery orders via our WhatsApp line or call us directly."
    },
    {
      q: "What makes your Suya Shawarma premium?",
      a: "We use only the highest grade of beef and chicken, marinated in an authentic, richly-flavored proprietary suya spice blend. Our shawarmas are larger, densely packed, and heavily garnished with our signature sauce."
    },
    {
      q: "Are the wraps authentic Lebanese flatbread?",
      a: "Absolutely. We use traditional, freshly baked thin Lebanese flatbreads that perfectly toast on our grills for that ideal crunch."
    },
    {
      q: "Until what time are you open?",
      a: "We are open daily until 10:00 PM to cater to your late-night upscale cravings."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-surface-dark">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-accent uppercase tracking-[0.2em] font-semibold text-sm mb-4">Answers</h4>
          <h2 className="font-serif text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="border border-white/10 bg-white/5 rounded-sm overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-serif font-medium text-lg text-white">{faq.q}</span>
                <ChevronDown className={`text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} size={20} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
