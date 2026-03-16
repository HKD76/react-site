import { Link } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import ClientsSection from "./components/ClientsSection/ClientsSection";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import DataSection from "./components/DataSection/DataSection";
import InstallationSection from "./components/InstallationSection/InstallationSection";
import QualitySection from "./components/QualitySection/QualitySection";
import SupportSection from "./components/SupportSection/SupportSection";
import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import DescriptionSection from "../../components/DescriptionSection/DescriptionSection";
import StatsSection from "../../components/StatsSection/StatsSection";
import TrySection from "../../components/TrySection/TrySection";
import { clientLogos } from "../../data/clientsLogos";
import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";

const cards = [
  {
    icon: <img src="/images/installation.svg" alt="Installation" />,
    title: "Collecte automatique",
    text: "Suppression des relevés manuels, fiabilité totale des données et détection instantanée des arrêts.",
  },
  {
    icon: <img src="/images/data.svg" alt="Data" />,
    title: "TRS en continu",
    text: "Disponibilité, performance et qualité visibles en temps réel pour identifier les pertes.",
  },
  {
    icon: <img src="/images/search.svg" alt="Search" />,
    title: "Analyse des arrêts",
    text: "Catégorisation précise des défauts et anomalies, avec recommandations d’amélioration.",
  },
  {
    icon: <img src="/images/dashboard.svg" alt="Dashboard personnalisable" />,
    title: "Tableaux de bord personnalisables",
    text: "Visualisation adaptée aux opérateurs, superviseurs et responsables.",
  },
  {
    icon: <img src="/images/controle-qualite.svg" alt="Controle de qualite" />,
    title: "Intégration simple",
    text: "Connexion fluide avec ERP, pointeuses et systèmes existants.",
  },
  {
    icon: <img src="/images/support.svg" alt="Support" />,
    title: "Partage en temps réel",
    text: "Une vision commune pour toute l’usine, améliorant la coordination.",
  },
  {
    icon: <img src="/images/fast-forward.svg" alt="Gains rapides" />,
    title: "Gains rapides",
    text: "Amélioration du TRS, réduction des arrêts et ROI inférieur à 12 mois.",
  },
];

export default function Home() {
  return (
    <>
      <div className="page-background">
        <div className="page-container">
          <header>
            <HeroSection />
          </header>
          <div>
            <ClientsSection clientLogos={clientLogos} />
            <FeaturesSection cards={cards} />
          </div>
        </div>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
      <div className="page-container">
        <DataSection />
        <InstallationSection />
        <QualitySection />
        <SupportSection />
      </div>
      <TestimonialSection />
      <div className="page-container">
        <DescriptionSection />
        <StatsSection />
        <TrySection />
      </div>
      <CallToActionSection />
    </>
  );
}
