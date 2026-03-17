import CallToActionSection from "../../components/CallToActionSection/CallToActionSection";
import TestimonialData from "../TestimonialPage/components/TestimonialData/TestimonialData";

export default function MediaPage() {
  return (
    <section>
      <div className="page-background">
        <div className="page-container"></div>
        <div className="page-background-black"></div>
        <div className="page-background">
            <TestimonialData />
          <CallToActionSection />
        </div>
      </div>
    </section>
  );
}
