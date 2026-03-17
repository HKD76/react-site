import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import CasHero from "./components/CasHero/CasHero";
import CasMSD from "./components/CasMSD/CasMSD";
import CasLDC from "./components/CasLDC/CasLDC";
import CasPomnium from "./components/CasPomnium/CasPomnium";
import CasLaitiere from "./components/CasLaitiere/CasLaitiere";
import CasKnauf from "./components/CasKnauf/CasKnauf";
import CasSodipan from "./components/CasSodipan/CasSodipan";
import CasPanzani from "./components/CasPanzani/CasPanzani";
import { clientLogos } from "../../data/clientsLogos";

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
        <CasLDC />
        <CasPomnium />
        <CasLaitiere />
        <CasKnauf />
        <CasSodipan />
        <CasPanzani />
      </div>
      <CallToActionSection />
    </section>
  );
}
