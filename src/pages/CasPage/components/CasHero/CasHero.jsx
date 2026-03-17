import "./CasHero.css";

export default function CasHero() {
  return (
    <section className="cas-hero">
      <div className="cas-hero-container">
        <h2 className="title">
          Cas clients RealTiMES : le suivi de performance par secteur
        </h2>
        <p className="cas-hero-text">
          Nos clients industriels sont confrontées à plusieurs défis en matière
          de <span className="highlight">lean management</span> et de <span className="highlight">lean manufacturing :</span>
        </p>
        <ul>
          <li>- Gestion efficace des flux de production (réduire le gaspillage, le temps d'attente, optimiser la productivité)</li>
          <li>- Gestion des stocks</li>
          <li>- Gestion de la qualité (et sécurité alimentaire)</li>
          <li>- Flexibilité opérationnelle</li>
          <li>- Implication du personnel</li>
        </ul>
        <p className="cas-hero-text">Notre rôle est de leur apporter une flexibilité opérationnelle grâce à un suivi de production en temps réel tout en mettant à leur disposition des outils de management visuel afin d'impliquer facilement leur personnel.</p>
        <p className="cas-hero-text"><span className="highlight">RealTiMES</span> permet à tous ces acteurs de répondre aux exigences de leurs marchés.</p>
      </div>
    </section>
  );
}
