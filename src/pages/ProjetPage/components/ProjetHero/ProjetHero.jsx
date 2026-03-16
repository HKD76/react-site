import { Link } from "react-router-dom";
import "./ProjetHero.css";

export default function ProjetHero() {
  return (
    <section className="projet-hero">
      <div className="projet-hero-container">
        <div className="projet-hero-content">
          <h2 className="projet-hero-title">Votre <span className="highlight">projet MES</span> sur projet MES en 4 étapes</h2>
          <p className="projet-hero-text">
            Vous cherchez à optimiser votre système de production ? Découvrez
            notre solution numérique d'amélioration de la performance sur votre
            ligne de production.
          </p>
          <div className="projet-hero-buttons">
            <a className="projet-hero-button" href="#timeline">
              Les étapes
            </a>
            <Link to="demander-une-demo" className="button-secondary">
              Demander une demo
            </Link>
          </div>
        </div>
        <div className="projet-hero-image">
          <img src="/images/projet-mes-realtimes-p-500.webp" alt="Projet MES" />
        </div>
      </div>
    </section>
  );
}
