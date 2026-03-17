import { useState } from "react";
import "./CasPanzani.css";

export default function CasPanzani() {
  const [open, setOpen] = useState(false);
  return (
    <section className="cas-panzani">
      <div className="cas-panzani-container">
        <div className="cas-panzani-content">
          <div className="cas-panzani-content-header">
            <h2 className="cas-panzani-content-header-title">
              Agro-alimentaire
            </h2>
            <div className="cas-panzani-content-header-logo">
              <img
                src="/images/Logo_PANZANI_1Logo_PANZANI.webp"
                alt="Panzani Logo"
              />
            </div>
          </div>
          <p className="cas-panzani-content-text">
            Avec les normes de plus en plus strictes sur l'hygiène et les
            installations des usines du secteur. Le besoin en rendement est
            important. Le suivi de performances est crucial.
          </p>
        </div>
        <div className="cas-panzani-subcontent" onClick={() => setOpen(!open)}>
          <div className="cas-panzani-subtext">
            <p className="cas-panzani-subtext-title">Cas client Panzani</p>
            <div className={`cas-panzani-subtext-cross ${open ? "open" : ""}`}>
              <img src="/images/plus.svg" alt="cross" />
            </div>
          </div>
        </div>
        <div className={`cas-panzani-slide ${open ? "open" : ""}`}>
          <div className="cas-panzani-image">
            <p className="cas-panzani-image-text">Pas de cas client pour le moment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
