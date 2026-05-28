export default function Footer() {
  return (
    <footer className="bg-primary-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold tracking-wider text-accent mb-1">
              THE NOTCH ABUJA
            </h3>
            <p className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-6">Shawarma Grill</p>
            <p className="text-gray-400 font-light max-w-sm mx-auto md:mx-0 leading-relaxed">
              Abuja's premier destination for luxury authentic Suya Shawarma. Redefining street food with elegance, quality, and passion.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors font-light">Our Story</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-accent transition-colors font-light">Menu</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-accent transition-colors font-light">Gallery</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-accent transition-colors font-light">Questions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Legal & Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors font-light">Terms of Service</a></li>
              <li><a href="https://wa.me/2348101243438" className="text-gray-400 hover:text-accent transition-colors font-light">WhatsApp: 0810 124 3438</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} The Notch Abuja-Shawarma Grill. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm font-light">
            Located in Abuja, Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
}
