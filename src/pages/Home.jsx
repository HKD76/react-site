import { Link } from "react-router-dom";
import { clientLogos, featureCategories } from "../utils/homeUtils";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";

const cards = [
  {
    icon: <img src="/images/installation.svg" alt="Installation" />,
    title: "Collecte automatique",
    text: "Suppression des relevés manuels, fiabilité totale des données et détection instantanée des arrêts.",
  },
  {
    icon: <img src="/images/data.svg" alt="Data" />,
    title: "TRS en continu",
    text: "Disponibilité, performance et qualité visibles en temps réel pour identifier les pertes.",
  },
  {
    icon: <img src="/images/search.svg" alt="Search" />,
    title: "Analyse des arrêts",
    text: "Catégorisation précise des défauts et anomalies, avec recommandations d’amélioration.",
  },
  {
    icon: <img src="/images/dashboard.svg" alt="Dashboard personnalisable" />,
    title: "Tableaux de bord personnalisables",
    text: "Visualisation adaptée aux opérateurs, superviseurs et responsables.",
  },
  {
    icon: <img src="/images/controle-qualite.svg" alt="Controle de qualite" />,
    title: "Intégration simple",
    text: "Connexion fluide avec ERP, pointeuses et systèmes existants.",
  },
  {
    icon: <img src="/images/support.svg" alt="Support" />,
    title: "Partage en temps réel",
    text: "Une vision commune pour toute l’usine, améliorant la coordination.",
  },
  {
    icon: <img src="/images/fast-forward.svg" alt="Gains rapides" />,
    title: "Gains rapides",
    text: "Amélioration du TRS, réduction des arrêts et ROI inférieur à 12 mois.",
  },
];

export default function Home() {
  return (
    <>
      <header className="section-header background-color-gray">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="text-align-center padding-top">
                <div className="margin-bottom margin-small">
                  <h1 className="heading-style-h2 text-align-center">
                    Logiciel de gestion de production industrielle en temps réel
                  </h1>
                </div>
                <div className="margin-top margin-medium">
                  <div className="button-group is-center">
                    <Link
                      to="/solution/logiciel-trs"
                      className="button w-button"
                    >
                      Solution complète de suivi
                    </Link>
                    <Link
                      to="/demander-une-demo"
                      className="button is-secondary w-button"
                    >
                      Demander une démo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-graphic-main">
            <img
              className="hero-graphic"
              src="/images/Dashboard-suivi-production-industrielle_1.avif"
              width="1070"
              alt="Dashboard suivi de production client RealTiMES"
              loading="eager"
            />
          </div>
        </div>
      </header>

      <section className="section is-gray">
        <div className="padding-section-small">
          <div className="padding-global">
            <div className="container-large">
              <div className="margin-bottom margin-large">
                <div className="text-align-center-2">
                  <div className="max-width-large align-center">
                    <div className="heading-4 heading-style-h6">
                      Nos clients sont des références internationales et ils ont
                      opté pour notre logiciel de suivi de production en temps
                      réel, optimisant ainsi leurs processus de fabrication et
                      la gestion de leurs ressources.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logos-component">
            <div className="logos-list">
              {clientLogos.firstRow.map((logo) => (
                <div key={logo} className="logo-wrapper">
                  <img
                    src={`/images/${logo}.webp`}
                    loading="lazy"
                    alt={`logo ${logo}`}
                    className="logo"
                  />
                </div>
              ))}
            </div>
            <div className="logos-list">
              {clientLogos.secondRow.map((logo) => (
                <div key={logo} className="logo-wrapper">
                  <img
                    src={`/images/${logo}.webp`}
                    loading="lazy"
                    alt={`logo ${logo}`}
                    className="logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <img
        src="/images/gray-bottom-shape.svg"
        loading="lazy"
        alt=""
        className="bottom-gray-shape"
      />

      <FeaturesSection cards={cards} />

      <section className="section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="w-layout-grid layout-component">
                <div className="layout-card blue">
                  <div className="layout-card-content">
                    <div className="layout-card-content-top">
                      <h2 className="heading-style-h3">
                        Logiciel de suivi de production industrielle en temps
                        réel
                      </h2>
                      <div className="margin-bottom margin-small">
                        <div className="feature-highlight">
                          <div className="heading-style-h4 green">
                            Data et analyses
                          </div>
                          <img
                            src="/images/data.svg"
                            loading="lazy"
                            width="30"
                            alt="picto data"
                          />
                        </div>
                      </div>
                      <Link
                        to="/solution/a-propos-de-realtimes"
                        className="button w-button"
                      >
                        La solution de suivi RealTiMES
                      </Link>
                    </div>
                  </div>
                  <div className="layout-image-wrapper">
                    <img
                      src="/images/suivi-production-realtimes.webp"
                      loading="lazy"
                      alt="graphique gain productivité"
                      className="feature-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="w-layout-grid layout-component">
                <div className="layout-card green">
                  <div className="layout-card-content">
                    <div className="layout-card-content-top">
                      <h2 className="heading-style-h3">
                        <strong className="bold-text-2">RealTiMES</strong>{" "}
                        s&apos;installe en 48h sur votre ligne de production
                      </h2>
                      <div className="margin-bottom margin-small">
                        <div className="feature-highlight">
                          <div className="heading-style-h4 green">
                            Installation
                          </div>
                          <img
                            src="/images/installation.svg"
                            loading="lazy"
                            width="30"
                            alt="picto installation"
                          />
                        </div>
                      </div>
                      <Link
                        to="/solution/logiciel-trs"
                        className="button w-button"
                      >
                        Logiciel TRS/MES personnalisable
                      </Link>
                    </div>
                  </div>
                  <div className="layout-image-wrapper">
                    <img
                      src="/images/suivi-trs-production.webp"
                      loading="lazy"
                      alt="QR codes arrêts machine"
                      className="feature-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="w-layout-grid layout-component">
                <div className="layout-card pink">
                  <div className="layout-image-wrapper">
                    <img
                      src="/images/Working-at-food-plant-1022298.webp"
                      loading="lazy"
                      alt="opérateur production tablette"
                      className="feature-image"
                    />
                  </div>
                  <div className="layout-card-content">
                    <div className="layout-card-content-top">
                      <h2 className="heading-style-h3">
                        Autocontrôles fréquentiels sur ligne via une tablette
                        opérateur.
                      </h2>
                      <div className="margin-bottom margin-small">
                        <div className="feature-highlight">
                          <div className="heading-style-h4 green">
                            Contrôle qualité
                          </div>
                          <img
                            src="/images/controle-qualite.svg"
                            loading="lazy"
                            width="50"
                            alt="picto qualité"
                          />
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/solution/votre-projet-mes"
                      className="button w-button"
                    >
                      Construire votre projet MES
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="w-layout-grid layout-component">
                <div className="layout-card orange">
                  <div className="layout-image-wrapper">
                    <img
                      src="/images/collaboration-graphic.png"
                      loading="lazy"
                      alt="collaboration interne"
                      className="feature-image"
                    />
                  </div>
                  <div className="layout-card-content">
                    <div className="layout-card-content-top">
                      <h2 className="heading-style-h3">
                        Un dashboard multi-utilisateurs + support client
                      </h2>
                      <div className="margin-bottom margin-small">
                        <div className="feature-highlight">
                          <div className="heading-style-h4 green">
                            Support dédié
                          </div>
                          <img
                            src="/images/support.svg"
                            loading="lazy"
                            width="30"
                            alt="picto support"
                          />
                        </div>
                      </div>
                    </div>
                    <Link to="/clients/cas-clients" className="button w-button">
                      Ils nous font confiance
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="section-cta-inner">
          <img
            src="/images/call-to-action-top-shape.svg"
            loading="lazy"
            alt=""
            className="call-to-action-top-shape"
          />
          <div className="section-cta-content">
            <div className="padding-global">
              <div className="container-large">
                <div className="padding-section-medium">
                  <div className="w-layout-grid call-to-action-component">
                    <div className="call-to-action-content">
                      <div className="margin-bottom margin-small">
                        <div className="cta-info">
                          <h3 className="heading-style-h3 text-color-white">
                            Prenez rdv avec un ingénieur lean
                          </h3>
                          <p className="text-color-white max-width-small">
                            Optimiser votre performance industrielle en boostant
                            votre TRS.
                          </p>
                          <div className="button-group">
                            <Link to="/tarif" className="button-25 w-button">
                              Tester RealTiMES
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
