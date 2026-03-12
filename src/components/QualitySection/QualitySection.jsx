import { Link } from "react-router-dom";
import "./QualitySection.css";

export default function QualitySection() {
  return (
    <section className="quality-section">
      <div className="container">
        <div className="quality-card">
          <div className="quality-image">
            <img
              src="/images/Working-at-food-plant-1022298.webp"
              alt="opérateur production tablette"
            />
          </div>

          <div className="quality-content">
            <h2>
              <span className="highlight">Autocontrôles</span> fréquentiels sur
              ligne via une tablette opérateur.
            </h2>
            <p className="quality-text">
              Les opérateurs réalisent leurs autocontrôles directement sur
              tablette, ce qui fiabilise les contrôles, renforce la traçabilité
              et réduit les erreurs de saisie. Intégré au projet MES RealTiMES,
              ce module digitalise les routines qualité et améliore la
              réactivité sur ligne.
            </p>

            <div className="quality-highlight">
              <span className="quality-highlight-title">Contrôle qualité</span>

              <img src="/images/controle-qualite.svg" alt="picto qualité" />
            </div>

            <Link to="/solution/votre-projet-mes" className="card-button">
              Construire votre projet MES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
