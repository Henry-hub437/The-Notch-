import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-surface-dark text-white selection:bg-accent selection:text-primary-900 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Features />
      <Gallery />
      <Testimonials />
      <Location />
      <FAQ />
      <Footer />
      <FloatingActions />
    </div>
  );
}
