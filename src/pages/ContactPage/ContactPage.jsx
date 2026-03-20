import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import ContactHero from "./components/ContactHero/ContactHero";
import ContactFormTemp from "./components/ContactForm/ContactFormTemp";
import cards from "../../data/cards";
import { clientLogos } from "../../data/clientsLogos";
import HeroBackgroundDataFlow from "../../components/HeroBackgroundDataFlow/HeroBackgroundDataFlow";

export default function ContactPage() {
  return (
    <section>
      <div className="page-background">
        <HeroBackgroundDataFlow />
        <div className="page-container">
          <ContactHero />
          <ContactFormTemp />
        </div>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img className="gray-bottom-shape" src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
      <FAQSection />
      <CallToActionSection />
    </section>
  );
}
