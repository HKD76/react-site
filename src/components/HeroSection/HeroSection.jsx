import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Logiciel de gestion de production industrielle en temps réel</h1>

          <div className="hero-buttons">
            <Link to="/solution/logiciel-trs" className="button">
              Solution complète de suivi
            </Link>

            <Link to="/demander-une-demo" className="button secondary">
              Demander une démo
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/Dashboard-suivi-production-industrielle_1.avif"
            alt="Dashboard suivi de production client RealTiMES"
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}
