import './AboutDashboard.css';

export default function AboutDashboard() {
  return (
    <section className="about-dashboard">
      <div className="about-dashboard-container">
        <div className="about-dashboard-content">
          <h2 className="about-dashboard-title">
            Tableaux de bord envoyés par e-mail
          </h2>
          <p className="about-dashboard-text">
            Avec la solution complète de suivi de production <span className="highlight">RealTiMES</span>, les
            directeurs de production ont la possibilité de recevoir des
            informations à date fixe en automatique sans actions de votre part.
          </p>
        </div>
        <div className="about-dashboard-image">
          <img src="/images/tableau-de-bord-p-1080.webp" alt="Dashboard" />
        </div>
      </div>
    </section>
  );
}
