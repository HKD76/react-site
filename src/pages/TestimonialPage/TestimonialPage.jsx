import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import TestimonialAptar from "./components/TestimonialAptar/TestimonialAptar";
import TestimonialData from "./components/TestimonialData/TestimonialData";
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
      <ClientsSlider logos={clientLogos} />
      </div>
      <img src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
      <div className="page-container">
        <TestimonialAptar />
        <TestimonialData />
      </div>
      <CallToActionSection />
    </section>
  );
}
