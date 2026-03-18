import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import FAQSection from "../../components/FAQSection/FAQSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import ContactHero from "./components/ContactHero/ContactHero";
import ContactForm from "./components/ContactForm/ContactForm";
import cards from "../../data/cards";
import { clientLogos } from "../../data/clientsLogos";

export default function ContactPage() {
  return (
    <section>
      <div className="page-background">
        <div className="page-container">
          <ContactHero />
          <ContactForm />
        </div>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
      <FAQSection />
      <CallToActionSection />
    </section>
  );
}
