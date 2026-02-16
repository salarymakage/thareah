import HeroSection from './components/sections/HeroSection';
import PortfolioSection from './components/sections/PortfolioSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <div className="relative">
      <section id="home">
        <HeroSection />
      </section>

      <section id="portfolio" className="bg-white relative z-10">
        <PortfolioSection />
      </section>

      <section id="services" className="bg-slate-50 relative z-10">
        <ServicesSection />
      </section>

      <section id="about" className="bg-white relative z-10">
        <AboutSection />
      </section>

      <section id="contact" className="bg-slate-50 relative z-10">
        <ContactSection />
      </section>
    </div>
  );
}
