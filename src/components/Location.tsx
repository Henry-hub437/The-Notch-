import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-0 relative flex flex-col lg:flex-row shadow-2xl border-y border-white/10">
      <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-auto relative bg-zinc-900">
        {/* Placeholder for Map - Since we don't have API keys, using a stylized graphical map replacement */}
        <div className="absolute inset-0 flex items-center justify-center p-12 overflow-hidden">
          <div className="w-[600px] h-[600px] border border-white/10 rounded-full flex items-center justify-center relative">
            <div className="w-[400px] h-[400px] border border-white/10 rounded-full flex items-center justify-center absolute">
              <div className="w-[200px] h-[200px] border border-white/20 rounded-full absolute"></div>
            </div>
          </div>
          <div className="absolute bg-surface-dark/80 backdrop-blur-md p-6 border border-white/10 rounded-lg text-center max-w-sm">
            <MapPin className="text-accent mx-auto mb-3" size={32} />
            <h3 className="text-white font-serif text-xl mb-1">The Notch Abuja</h3>
            <p className="text-xs tracking-[0.2em] text-accent uppercase mb-3">Shawarma Grill</p>
            <p className="text-sm text-gray-400 font-light">124 Wanjeri Mgbokwere Cres,<br/>Abuja 900110, FCT</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-primary-900 px-8 py-16 lg:p-20">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto lg:mx-0"
        >
          <h4 className="text-accent uppercase tracking-[0.2em] font-semibold text-sm mb-4">Reservations & Info</h4>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-10 text-white">Visit Us</h2>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h5 className="text-white font-medium mb-1">Address</h5>
                <p className="text-gray-400 font-light">124 Wanjeri Mgbokwere Cres,<br/>Abuja 900110, Federal Capital Territory</p>
                <a href="https://maps.google.com/?q=124+Wanjeri+Mgbokwere+Cres,+Abuja" target="_blank" rel="noreferrer" className="text-accent text-sm mt-2 font-medium hover:underline inline-block">Get Directions</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h5 className="text-white font-medium mb-1">Contact</h5>
                <p className="text-gray-400 font-light cursor-pointer hover:text-white transition-colors">Tel: 0810 124 3438</p>
                <p className="text-gray-400 font-light cursor-pointer hover:text-white transition-colors">WhatsApp: 0810 124 3438</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h5 className="text-white font-medium mb-1">Hours</h5>
                <p className="text-gray-400 font-light">Mon - Sun: Open until 10:00 PM</p>
              </div>
            </div>
            
            <div className="pt-6">
              <a href="tel:08101243438" className="inline-block bg-accent text-primary-900 px-8 py-4 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-accent-hover transition-colors w-full text-center">
                Call to Order
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
