import ComplencyCurve from "./components/ComplencyCurve";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServiceOverview from "./components/ServiceOverview";
import ServicesDetailed from "./components/ServicesDetailed";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <ComplencyCurve />
      <ServicesDetailed />
      <TechStack />
      <Footer />
    </>
  );
}
