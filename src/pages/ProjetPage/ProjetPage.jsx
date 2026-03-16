import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import LogicielAdvantageCards from "../LogicielPage/components/LogicielAdvantage/LogicielAdvantageCards/LogicielAdvantageCards";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import TrySection from "../../components/TrySection/TrySection";
import ProjetStep from "./components/ProjetStep/ProjetStep";
import { Link } from "react-router-dom";
import { clientLogos } from "../../data/clientsLogos";
import "./ProjetPage.css";

export default function ProjetPage() {
  return (
    <section>
      <div className="page-background">
        <div className="page-container">
          <p className="page-subtitle">
            Ils sont équipés par le système{" "}
            <span className="highlight">RealTiMES</span>
          </p>
        </div>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img src="/images/gray-bottom-shape.svg" alt="" />
      <div className="page-container">
        <ProjetStep />
      </div>
      <CallToActionSection />
      <div className="page-container projet-container">
        <h2 className="projet-title">
          Passez votre production à l'ère de{" "}
          <span className="highlight">l'industrie 4.0 </span>
        </h2>
        <p className="page-subtitle">
          un suivi de performance simplifié et connecté
        </p>
        <LogicielAdvantageCards />
        <Link
          to="/ressources/blog"
          className="logiciel-advantage-link projet-link"
        >
          Les 7 avantages RealTiMES
        </Link>
      </div>
      <TestimonialSection />
      <div className="page-container">
        <TrySection />
      </div>
    </section>
  );
}
