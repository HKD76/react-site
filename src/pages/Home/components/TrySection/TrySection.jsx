import { Link } from "react-router-dom";
import "./TrySection.css";

export default function TrySection() {
  return (
    <section className="try-section">
      <div className="try-container">
        <div className="try-image">
          <img
            src="/images/Dashboard-suivi-production-industrielle_1.avif"
            alt="QR codes arrêts machine"
          />
        </div>

        <div className="try-content">
          <h2 className="try-title">RealTiMES</h2>
          <p className="try-description">
            Demandez votre démo pour un aperçu réel
          </p>
          <Link to="/demander-une-demo" className="try-button">
            Demander une démo
          </Link>
        </div>
      </div>
    </section>
  );
}
