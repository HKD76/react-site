import "./LogicielInstal.css";

export default function LogicielInstal() {
  return (
    <section className="logiciel-instal">
      <div className="logiciel-instal-container">
        <div className="logiciel-instal-card">
          <div className="logiciel-instal-content">
            <h2 className="logiciel-instal-title">
              Installation rapide en 48h sur votre ligne de production
            </h2>
            <p className="logiciel-instal-text">
              Grâce à leur intégration externe, les systèmes tout-en-un de
              <span className="highlight"> RealTiMES</span> peuvent être
              installés rapidement dans un très grand nombre de situations de
              production et sont compatibles avec la majorité des équipements.
              Cette solution offre un moyen efficace d'améliorer les{" "}
              <span className="highlight">taux de disponibilité</span> et de{" "}
              <span className="highlight">réduire les arrêts machine.</span>
            </p>
          </div>
          <div className="logiciel-instal-image">
            <img
              src="/images/suivi-trs-production-p-1080.webp"
              alt="Suivi Trs"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
