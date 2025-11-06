import ComplencyCurve from "./components/ComplencyCurve";
import DeliveryProcess from "./components/DeliveryProcess";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import ServiceOverview from "./components/ServiceOverview";
import ServicesDetailed from "./components/ServicesDetailed";
import TechStack from "./components/TechStack";
import Toast from "./components/Toast";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <ServicesDetailed />
      <ComplencyCurve />
      <DeliveryProcess />
      <Pricing />
      <TechStack />
      <WhoWeAre />
      <FAQ />
      <Footer />
      <Toast />
    </>
  );
}
