import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import { clientLogos } from "../../data/clientsLogos";

export default function TestimonialPage() {
  return (
    <section>
      <div className="page-background">
        <div className="page-container">
          <h2 className="title">
            Gain de productivité jusqu'à 30%, ils témoignent
          </h2>
          <p className="page-subtitle">
            Piloter la performance de leur production n'a jamais été aussi
            simple
          </p>
        </div>
      </div>
      <ClientsSlider logos={clientLogos} />
      <CallToActionSection />
    </section>
  );
}
