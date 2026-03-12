import "./DescriptionSection.css";

export default function DescriptionSection() {
  return (
    <section className="description-section">
      <div className="container">
        <h2><span className="highlight">Fonctionnalités</span> et avantages principaux de notre logiciel</h2>
        <div className="description-container">
          <div className="description-card">
            <h3 className="description-title">Planification avancée</h3>
            <p className="description-text">
              Planifiez votre production de manière plus fiable grâce à un
              logiciel MES / MRP capable d’ajuster automatiquement votre
              planning. Vous pouvez simuler, modifier ou décaler vos ordres de
              fabrication en temps réel, tout en visualisant la charge de vos
              ressources par atelier et par semaine. L’outil intègre les
              fonctionnalités clés d’un logiciel d’ordonnancement, du MRP et du
              PDP pour optimiser vos stocks, réduire les retards et améliorer la
              stabilité de votre planning.
            </p>
          </div>
          <div className="description-card">
            <h3 className="description-title">
              Amélioration de la productivité
            </h3>
            <p className="description-text">
              Le logiciel améliore la performance de vos lignes grâce à une
              traçabilité complète, une gestion des stocks en temps réel et une
              visibilité continue sur votre chaîne d’approvisionnement. Ces
              fonctionnalités réduisent les erreurs, fiabilisent les données et
              accélèrent les délais de production, tout en optimisant les coûts
              et la qualité.
            </p>
          </div>
          <div className="description-card">
            <h3 className="description-title">
              Intégration de systèmes existants
            </h3>
            <p className="description-text">
              RealTiMES s’intègre facilement à vos systèmes ERP, CMMS et MES
              pour centraliser toutes vos données de production. Cette
              interconnexion renforce la coordination entre les équipes,
              fluidifie la logistique et permet une prise de décision plus
              rapide et plus éclairée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
