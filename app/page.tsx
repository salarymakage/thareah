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

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="services" className="bg-muted/30">
        <ServicesSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="contact" className="bg-muted/30">
        <ContactSection />
      </section>
    </div>
  );
}
