import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import StatsSection from "../../components/StatsSection/StatsSection";
import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import AboutHero from "./components/AboutHero/AboutHero";
import AboutStory from "./components/AboutStory/AboutStory";
import AboutBusiness from "./components/AboutBusiness/AboutBusiness";
import AboutDashboard from "./components/AboutDashboard/AboutDashboard";
import AboutReliability from "./components/AboutReliability/AboutReliability";
import AboutData from "./components/AboutData/AboutData";
import { clientLogos } from "../../data/clientsLogos";
import HeroBackgroundDataFlow from "../../components/HeroBackgroundDataFlow/HeroBackgroundDataFlow";

export default function AboutPage() {
  return (
    <section>
      <div className="page-background">
        <HeroBackgroundDataFlow />
        <div className="page-container">
          <AboutHero />
        </div>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img className="gray-bottom-shape" src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
      <div className="page-container">
        <AboutStory />
      </div>
      <div className="page-background-black">
        <div className="page-container">
          <AboutBusiness />
        </div>
      </div>
      <div className="page-container">
        <AboutDashboard />
      </div>
      <div className="page-background-grey">
        <div className="page-container">
          <AboutReliability />
        </div>
      </div>
      <div className="page-container">
        <AboutData />
      </div>
      <StatsSection />
      <CallToActionSection />
    </section>
  );
}
