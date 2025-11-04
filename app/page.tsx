import ComplencyCurve from "./components/ComplencyCurve";
import DeliveryProcess from "./components/DeliveryProcess";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
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
      <DeliveryProcess />
      <TechStack />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
