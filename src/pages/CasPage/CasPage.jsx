import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import CasMSD from "./components/CasMSD/CasMSD";
import { clientLogos } from "../../data/clientsLogos";
import CasHero from "./components/CasHero/CasHero";

export default function CasPage() {
  return (
    <section>
      <div className="page-background">
        <div className="page-container">
          <CasHero />
        </div>
        <p className="page-subtitle">Nos cas clients triés par secteur</p>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img src="/images/gray-bottom-shape.svg" alt="Gray Bottom Shape" />
      <div className="page-container">
        <CasMSD />
      </div>
      <CallToActionSection />
    </section>
  );
}
