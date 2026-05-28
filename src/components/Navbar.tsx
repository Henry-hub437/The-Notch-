import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-surface-dark/95 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col items-start leading-none group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-accent transition-colors group-hover:text-white">
            THE NOTCH ABUJA
          </span>
          <span className="text-[10px] md:text-xs text-gray-400 font-light tracking-[0.3em] uppercase mt-1 transition-colors group-hover:text-accent">
            Shawarma Grill
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium tracking-wide uppercase hover:text-accent transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <a href="#location" className="btn-primary rounded flex items-center gap-2 bg-accent text-primary-900 px-5 py-2.5 font-medium hover:bg-accent-hover transition-colors">
            <MapPin size={18} />
            <span>Find Us</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-surface-dark z-50 flex flex-col items-center justify-center p-6"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col space-y-8 text-center mt-12 w-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                <a href="#location" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-primary-900 py-4 px-8 rounded-sm font-bold text-lg tracking-wide uppercase">
                  Visit Us in Abuja
                </a>
                <a href="tel:08101243438" className="border border-white/20 text-white py-4 px-8 rounded-sm flex items-center justify-center gap-2 font-medium">
                  <Phone size={20} />
                  Call 0810 124 3438
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
