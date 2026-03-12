import { Link } from "react-router-dom";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-card">
          <div className="about-content">
            <h2>
              <span className="highlight">RealTiMES</span> est un logiciel de suivi de production en temps réel qui améliore le TRS des industriels.
            </h2>

            <p className="about-text">
              Grâce à la RTBOX, à la collecte automatique des données et à des
              tableaux de bord BI, la solution offre une fiabilité
              exceptionnelle et un pilotage précis de vos lignes de production.
            </p>

            <div className="about-highlight">
              <span className="about-highlight-title">Data et analyses</span>

              <img src="/images/data.svg" alt="picto data" />
            </div>

            <Link to="/solution/a-propos-de-realtimes" className="button">
              La solution de suivi RealTiMES
            </Link>
          </div>

          <div className="about-image">
            <img
              src="/images/suivi-production-realtimes.webp"
              alt="graphique gain productivité"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
