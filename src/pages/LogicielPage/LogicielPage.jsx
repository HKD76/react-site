import ClientsSlider from "../../components/ClientsSlider/ClientsSlider";
import LogicielHero from "./components/LogicielHero/LogicielHero";
import LogicielAdvantage from "./components/LogicielAdvantage/LogicielAdvantage";
import LogicielExample from "./components/LogicielExample/LogicielExample";
import LogicielProductivity from "./components/LogicielProductivity/LogicielProductivity";
import LogicielRealTimes from "./components/LogicielRealTimes/LogicielRealTimes";
import LogicielInstal from "./components/LogicielInstal/LogicielInstal";
import TestimonialData from "../TestimonialPage/components/TestimonialData/TestimonialData";
import TestimonialSection from "../../components/TestimonialSection/TestimonialSection";
import LogicielDeploy from "./components/LogicielDeploy/LogicielDeploy";
import { clientLogos } from "../../data/clientsLogos";

export default function LogicielPage() {
  return (
    <section>
      <div className="page-background">
        <div className="page-container">
          <LogicielHero />
        </div>
        <p className="page-subtitle">
          Nos clients sont des références internationales
        </p>
        <ClientsSlider logos={clientLogos} />
      </div>
      <img src="/images/gray-bottom-shape.svg" alt="gray-bottom-shape" />
      <div className="page-container">
        <LogicielAdvantage />
        <LogicielExample />
        <LogicielProductivity />
      </div>
      <div className="page-background-black">
        <div className="page-container">
          <LogicielRealTimes />
        </div>
      </div>
      <div className="page-container">
        <LogicielInstal />
        <LogicielDeploy />
      </div>
      <TestimonialSection />
      <div className="page-container">
        <TestimonialData />
      </div>
    </section>
  );
}
