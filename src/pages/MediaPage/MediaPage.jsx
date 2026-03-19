import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import TestimonialData from "../TestimonialPage/components/TestimonialData/TestimonialData";
import MediaHero from "./components/MediaHero/MediaHero";
import MediaPress from "./components/MediaPress/MediaPress";
import HeroBackgroundDataFlow from "../../components/HeroBackgroundDataFlow/HeroBackgroundDataFlow";

export default function MediaPage() {
  return (
    <section>
      <div className="page-background">
        <HeroBackgroundDataFlow />
        <div className="page-container">
          <MediaHero />
        </div>
      </div>
      <div className="page-background-black">
        <div className="page-container">
          <MediaPress />
        </div>
      </div>
      <div className="page-background">
        <div className="page-container">
          <TestimonialData />
        </div>
        <CallToActionSection />
      </div>
    </section>
  );
}
