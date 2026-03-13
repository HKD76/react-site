import { Link } from "react-router-dom";
import "./SupportSection.css";

export default function SupportSection() {
  return (
    <section className="support-section">
      <div className="container">
        <div className="support-card">
          <div className="support-image">
            <img
              src="/images/collaboration-graphic.png"
              alt="collaboration interne"
            />
          </div>

          <div className="support-content">
            <h2><span className='highlight'>Un dashboard</span> multi-utilisateurs + support client</h2>
            <p className="support-text">
              Le dashboard RealTiMES centralise les indicateurs clés pour tous
              les profils, du terrain à la direction. Associé à un support
              client réactif, il garantit un pilotage fiable et une utilisation
              optimale des données de production.
            </p>

            <div className="support-highlight">
              <span className="support-highlight-title">Support dédié</span>
              <img src="/images/support.svg" alt="picto support" />
            </div>

            <Link to="/clients/cas-clients" className="card-button">
              Ils nous font confiance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
