import './FeaturesSection.css';
import CardsSlider from "../CardsSlider/CardsSlider";

export default function FeaturesSection({ cards }) {
  return (
    <section className="features-section">
      <div className="container">

        <div className="section-header">
          <h2>
            <strong>Un suivi</strong> de production clair, fluide et
            <strong> 100% en temps réel</strong>
          </h2>

          <p>
            Mode industrie 4.0 enclenché avec une solution compatible ERP
            pour une gestion optimale.
          </p>
        </div>

        <div className="features-slider">
          <CardsSlider cards={cards} />
        </div>

      </div>
    </section>
  );
}