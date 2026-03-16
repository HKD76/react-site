import "./LogicielProductivity.css"

export default function LogicielProductivity() {
  return (
    <section className="logiciel-productivity">
      <div className="logiciel-productivity-container">
        <div className="logiciel-productivity-card">
          <div className="logiciel-productivity-card-content">
            <h2 className="logiciel-productivity-card-title">
              Le logiciel TRS RealTiMES promet un gain quasi immédiat
            </h2>
            <p className="logiciel-productivity-card-text">
              L’amélioration de la productivité commence par une mesure fiable.
              <span className="highlight"> Le logiciel TRS RealTiMES</span> permet de suivre les différents facteurs
              influant sur le <span className="highlight">TRS</span> (temps et quantités) grâce à une collecte des
              données en temps réel. La gestion des équipements devient ainsi
              plus efficace.
            </p>
            <p className="logiciel-productivity-card-text">
              Avec la possibilité d'intégration avec tous les <span className="highlight">ERP</span> et systèmes de
              suivi de production existants, <span className="highlight">RealTiMES</span> assure une transition
              sans heurts pour un gain de performance immédiat. L'outil permet
              également une analyse détaillée des causes des arrêts de
              production et suggère des améliorations.
            </p>
          </div>
          <div className="logiciel-productivity-card-image">
            <img
              src="/images/suivi-productivité_1.webp"
              alt="Suivi de production"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
