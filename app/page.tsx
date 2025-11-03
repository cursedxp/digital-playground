import ComplencyCurve from "./components/ComplencyCurve";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServiceOverview from "./components/ServiceOverview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceOverview />
      <ComplencyCurve />
      <Footer />
    </>
  );
}
