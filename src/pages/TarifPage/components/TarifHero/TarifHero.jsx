import "./TarifHero.css";

export default function TarifHero() {
  return (
    <section className="tarif-hero">
      <div className="tarif-hero-container">
        <h2 className="title">
          Investir dans son suivi de performance industrielle avec RealTiMES
        </h2>
        <p className="page-subtitle">
          La simplicité réside également dans notre tarification
        </p>
        <div className="tarif-hero-card">
          <div className="tarif-hero-card-content">
            <p className="tarif-hero-card-label">RealTiMES</p>
            <p className="tarif-hero-card-price">3 000€</p>
            <p className="tarif-hero-card-text">
              Contrat de licence avec fonctionnalités en illimité :
            </p>
            <ul>
              <li className="tarif-hero-card-text">Outil BI intégré</li>
              <li className="tarif-hero-card-text">
                Tableaux de bord personnalisables
              </li>
              <li className="tarif-hero-card-text">Envoi de rapports automatiques</li>
              <li className="tarif-hero-card-text">Utilisateurs</li>
            </ul>
            <a className="tarif-hero-card-button" href="#tarif-form">Je demande à être appelé</a>
            <p className="tarif-hero-card-text">Pour chaque machine installée :</p>
            <ul>
              <li className="tarif-hero-card-list">Module de captation des arrêts (RTBOX)</li>
              <li className="tarif-hero-card-list">Tableaux de bord personnalisables et évolutifs</li>
              <li className="tarif-hero-card-list">Hébergement de vos données sur votre serveur</li>
              <li className="tarif-hero-card-list">1 écran TV pour votre affichage sur ligne de production</li>
              <li className="tarif-hero-card-list">Support client dédié</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
