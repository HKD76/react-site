import "./MediaHero.css";

export default function MediaHero() {
  return (
    <section className="media-hero">
      <div className="media-hero-container">
        <h2 className="title">Media</h2>
        <p className="page-subtitle">Parutions : Presse et Vidéos</p>
      </div>
      <div className="media-hero-content">
        <div className="media-hero-card">
          <div className="media-hero-card-content">
            <h3 className="media-hero-card-title">
              Découvrez (bientôt) notre chaîne Youtube
            </h3>
            <a className="media-hero-card-button" href="#">Chaîne YT RealTiMES</a>
          </div>
          <div className="media-hero-card-image">
            <img src="/images/reproduction-logo.svg" alt="Logo RealTiMES" />
          </div>
        </div>
      </div>
    </section>
  );
}
