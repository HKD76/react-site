import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import StatsSection from "../../components/StatsSection/StatsSection";
import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import AboutHero from "./components/AboutHero/AboutHero";
import { clientLogos } from "../../data/clientsLogos";

export default function AboutPage() {
  return (
    <section>
      <div className="page-background">
        <div className="page-container">
          <AboutHero />
        </div>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
      <StatsSection />
      <CallToActionSection />
    </section>
  );
}
