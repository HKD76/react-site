import { Link } from "react-router-dom";
import "./LogicielHero.css";

export default function LogicielHero() {
  return (
    <section className="logiciel-hero">
      <div className="page-container">
        <h1 className="title">Logiciel MES/TRS personnalisable</h1>
        <p className="page-subtitle">
          Dites Aurevoir aux relevés manuels et Bienvenue dans l'ère de
          l'industrie 4.0
        </p>
        <div className="logiciel-hero-buttons">
          <a href="#logiciel-advantage" className="logiciel-hero-button">
            Les avantages
          </a>
          <Link to="/demander-une-demo" className="button-secondary">
            Demander une démo
          </Link>
        </div>
        <div className="logiciel-hero-image">
            <img src="/images/suivi-production-temps-reel-p-1080.webp" alt="Suivi de production" />
        </div>
      </div>
    </section>
  );
}
