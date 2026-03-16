import { Link } from "react-router-dom";
import "./LogicielInfo.css";

export default function LogicielInfo() {
  return (
    <section className="logiciel-info">
      <div className="logiciel-info-container">
        <div className="logiciel-info-content">
          <p className="logiciel-info-label">Les avantages</p>
          <h2 className="logiciel-info-title">De l'analyse à l'action</h2>
          <p className="logiciel-info-text">
            Permet de quantifier en temps réel les opportunités de gains et de
            mesurer les résultats obtenus
          </p>
          <p className="logiciel-info-text">
            Dans un contexte de rareté des ressources, RealTiMES permet
            d'identifier et de diminuer les gaspillages
          </p>
          <p className="logiciel-info-text">
            Suppression des enregistrements manuels. Données exportables et
            imprimables. Support technique à distance.
          </p>
          <p className="logiciel-info-text">
            Identification rapide et précise des causes des arrêts de production
            avec des recommandations pour améliorer la performance.
          </p>
          <Link to="/demander-une-demo" className="logiciel-info-button">
            {" "}
            Demander une démo
          </Link>
        </div>
        <div className="logiciel-info-image">
            <img src="/images/amelioration-continue-production-p-800.webp" alt="Amelioration continue" />
        </div>
      </div>
    </section>
  );
}
