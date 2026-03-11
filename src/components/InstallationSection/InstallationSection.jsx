import { Link } from "react-router-dom";
import "./InstallationSection.css";

export default function InstallationSection() {
  return (
    <section className="installation-section">
      <div className="container">
        <div className="installation-card">
          <div className="installation-content">
            <h2>
              <strong>RealTiMES</strong> s’installe en 48h sur votre ligne de
              production
            </h2>
            <p className="installation-text">
              Installé en moins de 48h, RealTiMES collecte automatiquement vos
              données de production, calcule votre TRS en temps réel et
              s’intègre à vos systèmes existants. Une solution non intrusive qui
              améliore immédiatement la performance de vos lignes.
            </p>

            <div className="installation-highlight">
              <span className="installation-highlight-title">Installation</span>

              <img src="/images/installation.svg" alt="picto installation" />
            </div>

            <Link to="/solution/logiciel-trs" className="button">
              Logiciel TRS/MES personnalisable
            </Link>
          </div>

          <div className="installation-image">
            <img
              src="/images/suivi-trs-production.webp"
              alt="QR codes arrêts machine"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
