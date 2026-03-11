import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
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
  );
}