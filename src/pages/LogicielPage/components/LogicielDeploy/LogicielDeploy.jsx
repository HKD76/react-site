import "./LogicielDeploy.css";

export default function LogicielDeploy() {
  return (
    <section className="logiciel-deploy">
      <div className="logiciel-deploy-container">
        <div className="logiciel-deploy-card">
          <div className="logiciel-deploy-content">
            <h2 className="logiciel-deploy-title">
              Déploiement et intégration simplifiés
            </h2>
            <p className="logiciel-deploy-text">
              Installation simple et adaptée à différents environnements
              industriels. <span className="highlight">RealTiMES</span> propose un accompagnement personnalisé pour
              une configuration ajustée à vos besoins spécifiques, ainsi qu’une
              formation complète pour vos équipes. Cette solution permet une
              utilisation optimale de l'atelier et <span className="highlight">améliore les performances des
              lignes de production.</span>
            </p>
          </div>
          <div className="logiciel-deploy-image">
            <img
              src="/images/a-propos-realtimes_1a-propos-realtimes.webp"
              alt="A propos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
