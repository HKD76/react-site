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
import cards from "../../data/cards";
import HeroBackground from "../../components/HeroBackgroundDataFlow/HeroBackgroundDataFlow";

export default function Home() {
  return (
    <>
      <div className="page-background">
        <HeroBackground />
        <div className="page-container">
          <header>
            <HeroSection />
          </header>
          <div>
            <FeaturesSection cards={cards} />
          </div>
        </div>
        <div className="page-content">
          <ClientsSection />
          <ClientsSlider logos={clientLogos} />
        </div>
      </div>
      <img className="gray-bottom-shape" src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
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
