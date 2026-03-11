import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import ClientsSection from "../components/ClientsSection/ClientsSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import AboutSection from "../components/AboutSection/AboutSection";
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
const clientLogos = [
  { src: "/images/panzani.webp", alt: "Panzani" },
  { src: "/images/lactalis.webp", alt: "Lactalis" },
  { src: "/images/knauf.webp", alt: "Knauf" },
  { src: "/images/laitiere.webp", alt: "Laitiere" },
  { src: "/images/plastic-omnium.webp", alt: "Pastic-Omnium" },
  { src: "/images/ldc.webp", alt: "LDC" },
  { src: "/images/msd-logo.webp", alt: "MSD" },
];

export default function Home() {
  return (
    <>
      <div className="page-background">
        <div className="page-container">
          <header>
            <HeroSection />
          </header>
          <main>
            <ClientsSection clientLogos={clientLogos} />
            <FeaturesSection cards={cards} />
          </main>
        </div>
      </div>
        <div className="page-container">
        <AboutSection />
        </div>

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
