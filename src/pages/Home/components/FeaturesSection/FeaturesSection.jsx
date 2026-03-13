import "./FeaturesSection.css";
import CardsSlider from "../../components/CardsSlider/CardsSlider.jsx";

export default function FeaturesSection({ cards }) {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="section-header">
          <h2>
            <span className="highlight">Un suivi</span> de production clair,
            fluide et
            <span className="highlight"> 100% en temps réel</span>
          </h2>

          <p>
            Mode industrie 4.0 enclenché avec une solution compatible ERP pour
            une gestion optimale.
          </p>
        </div>

        <div className="features-slider">
          <CardsSlider cards={cards} />
        </div>
      </div>
    </section>
  );
}
