import { Link } from "react-router-dom";
import "./AboutBusiness.css";

export default function AboutBusiness() {
  return (
    <section className="business-section">
      <div className="business-container">
        <div className="business-content">
          <h2 className="business-title">Outil de Business Intelligence (BI) intégré</h2>
          <p className="business-description">Permet de créer ses propres rapports</p>
          <p className="business-description">Non limité en terme d’utilisateurs et de tableaux de bord</p>
          <p className="business-description">
            Connecté à notre base de données. Mais peut être connecté à d’autres
            bases de données comme une pointeuse par exemple afin d'agréger la
            donnée existante.
          </p>
          <Link to="/demander-une-demo" className="card-button">
            Demander une démo
          </Link>
        </div>
        <div className="business-image">
          <img src="/images/collaboration-graphic.png" alt="Business" />
        </div>
      </div>
    </section>
  );
}
