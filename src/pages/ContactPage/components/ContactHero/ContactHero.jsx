import CardsSlider from "../../../../components/CardsSlider/CardsSlider";
import cards from "../../../../data/cards";
import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-container">
        <div className="contact-hero-card">
          <div className="contact-hero-card-content">
            <h2 className="contact-hero-card-label">
              Contactez un ingénieur Lean RealTiMES
            </h2>
            <h3 className="contact-hero-card-title">
              <span className="highlight">Optimisez</span> votre productivité dès aujourd'hui
            </h3>
          </div>
          <CardsSlider cards={cards} />
          <p className="contact-hero-card-text">
            <span className="highlight">Adresse</span> : 10 a rue du Maréchal de Lattre de Tassigny 76420 BIHOREL
          </p>
          <p className="contact-hero-card-text"><span className="highlight">Nous joindre :‍</span> 02 55 42 02 89</p>
        </div>
      </div>
    </section>
  );
}
