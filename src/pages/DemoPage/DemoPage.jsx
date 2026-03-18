import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import CardsSlider from "../../components/CardsSlider/CardsSlider";
import FAQSection from "../../components/FAQSection/FAQSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import DataSection from "../Home/components/DataSection/DataSection";
import InstallationSection from "../Home/components/InstallationSection/InstallationSection";
import QualitySection from "../Home/components/QualitySection/QualitySection";
import SupportSection from "../Home/components/SupportSection/SupportSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import DemoHero from "./components/DemoHero/DemoHero";
import DemoForm from "./components/DemoForm/DemoForm";
import cards from "../../data/cards";
import { clientLogos } from "../../data/clientsLogos";

export default function DemoPage() {
  return (
    <section>
      <div className="page-background">
        <div className="page-container">
          <DemoHero />
          <DemoForm />
        </div>
        <p className="page-subtitle">
          Nos clients sont des références internationales
        </p>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img src="/images/gray-bottom-shape.svg" alt="Gray Shape" />
      <div className="page-container">
        <h2 className="page-title">
          <span className="highlight">Un pilotage</span> de performance
          simplifié
        </h2>
        <p className="page-subtitle">Entrez dans l'ère de l'industrie 4.0</p>
        <CardsSlider cards={cards} />
        <DataSection />
        <InstallationSection />
        <QualitySection />
        <SupportSection />
      </div>
      <TestimonialSection />
      <div className="page-container">
        <FAQSection />
      </div>
      <CallToActionSection />
    </section>
  );
}
