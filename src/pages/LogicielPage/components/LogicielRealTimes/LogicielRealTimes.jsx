import { Link } from "react-router-dom";
import "./LogicielRealTimes.css";

export default function LogicielRealTimes() {
  return (
    <section className="logiciel-realtimes">
      <div className="logiciel-realtimes-container">
        <div className="logiciel-realtimes-content">
          <p className="logiciel-realtimes-label">RealTiMES</p>
          <h2 className="logiciel-realtimes-title">
            Solution de suivie connectée et sécurisée
          </h2>
          <p className="logiciel-realtimes-text">
            Collecte de vos données de production automatique. Affichage en
            temps réel de la performance en atelier. Partage de l’information en
            temps réel dans toute l’usine.
          </p>
          <p className="logiciel-realtimes-text">
            L'hébergement de vos données est sur votre serveur, mais une
            solution "CLOUD" existe sur demande
          </p>
          <p className="logiciel-realtimes-text">
            Accès en illimité à toutes les données enregistrées sur la ligne.
            Rapports de performance personnalisables. Suivi des enregistrements
            composants et des contrôles.
          </p>
          <Link to="/demander-une-demo" className="logiciel-realtimes-button"> Demander une démo</Link>
        </div>
        <div className="logiciel-realtimes-image">
          <img
            src="/images/a-propos-realtimes_1a-propos-realtimes.webp"
            alt="A propos de Realtimes"
          />
        </div>
      </div>
    </section>
  );
}
