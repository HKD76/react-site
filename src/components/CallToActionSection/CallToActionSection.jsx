import { Link } from "react-router-dom";
import "./CallToActionSection.css";

export default function CallToActionSection() {
  return (
    <section className="cta-section">
      <img
        src="/images/call-to-action-top-shape.svg"
        alt=""
        className="cta-top-shape"
      />
      <div className="cta-background">
        <div className="cta-content">
          <div className="cta-container">
            <h3>Prenez rdv avec un ingénieur lean</h3>

            <p>
              Optimiser votre performance industrielle en boostant votre TRS.
            </p>

            <Link to="/tarif" className="button">
              Tester RealTiMES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
