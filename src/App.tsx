import { Cobertura } from "./components/cobertura";
import { Contacto } from "./components/contacto";
import { Footer } from "./components/footer";
import { Nosotros } from "./components/nosotros";
import { Rastreo } from "./components/rastreo";
import Testimonials from "./components/testimonials";
import { Header } from "./components/ui/header-3";
import LogisticsHero from "./components/ui/logistics-hero";
import { Feature51 } from "./components/ui/feature51";

export default function App() {
  return (
    <div className="relative w-full">
      <Header />

      <main className="w-full">
        <LogisticsHero />
        <Feature51 />
        <Nosotros />
        <Cobertura />
        <Rastreo />
        <Testimonials />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
} 
