import { Link } from "react-router-dom";
import "./DataSection.css";

export default function DataSection() {
  return (
    <section className="data-section">
      <div className="container">
        <div className="data-card">
          <div className="data-content">
            <h2>
              <span className="highlight">RealTiMES</span> est un logiciel de
              suivi de production en temps réel qui améliore le TRS des
              industriels.
            </h2>

            <p className="data-text">
              Grâce à la RTBOX, à la collecte automatique des données et à des
              tableaux de bord BI, la solution offre une fiabilité
              exceptionnelle et un pilotage précis de vos lignes de production.
            </p>

            <div className="data-highlight">
              <span className="data-highlight-title">Data et analyses</span>

              <img src="/images/data.svg" alt="picto data" />
            </div>

            <Link to="/solution/a-propos-de-realtimes" className="card-button">
              La solution de suivi RealTiMES
            </Link>
          </div>

          <div className="data-image">
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
