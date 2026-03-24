import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-component">
      <div className="footer-container">
        <div className="footer-top padding-global">
          <div className="container-large">
            <div className="footer-top-wrapper">
              <div className="footer-left">
                <Link
                  to="/"
                  aria-label="Accueil RealTiMES"
                  className="footer-logo"
                >
                  <img
                    src="/images/reproduction-logo-white.svg"
                    alt="RealTiMES"
                    width="136"
                  />
                </Link>
                <p className="footer-description">
                  Expert du suivi de production et de la performance
                  industrielle
                </p>

                <div className="footer-contact">
                  <div>
                    <strong>Adresse</strong>
                    <br />
                    10 a rue du Maréchal de Lattre de Tassigny
                    <br />
                    76420 BIHOREL
                    <br />
                    <a href="mailto:contact@realtimes.fr">
                      contact@realtimes.fr
                    </a>
                  </div>
                  <div>
                    <a href="tel:+33255420289" className="footer-phone">
                      02 55 42 02 89
                    </a>
                  </div>
                </div>

                <div className="footer-social">
                  <a
                    href="https://www.linkedin.com/company/realtimes-france"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn RealTiMES"
                    className="footer-social-link"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="footer-menu">
                <div className="footer-link-list">
                  <Link to="/" className="footer-link">
                    RealTiMES
                  </Link>
                  <Link to="/demander-une-demo" className="footer-link">
                    Démo RealTiMES
                  </Link>
                  <Link to="/solution/logiciel-trs" className="footer-link">
                    Avantages de la solution TRS/MES
                  </Link>
                  <Link to="/solution/votre-projet-mes" className="footer-link">
                    Votre projet MES
                  </Link>
                  <Link
                    to="/solution/a-propos-de-realtimes"
                    className="footer-link"
                  >
                    À propos
                  </Link>
                  <Link to="/ressources/blog" className="footer-link">
                    Blog
                  </Link>
                  <Link to="/ressources/ebook" className="footer-link">
                    E-Book
                  </Link>
                  <Link to="/contact" className="footer-link">
                    Contact
                  </Link>
                  <Link to="/tarif" className="footer-link">
                    Tarif
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-large">
          <div className="footer-bottom-wrapper">
            <div className="footer-credit-text">© 2024 RealTiMES</div>
            <div className="footer-legal">
              <p className="version">Version 1.0</p>
              <Link to="/mentions-legales" className="footer-legal-link">
                Mentions légales
              </Link>
              <Link to="/rgpd" className="footer-legal-link">
                RGPD
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
