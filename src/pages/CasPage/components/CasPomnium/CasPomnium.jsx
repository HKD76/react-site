import { useState } from "react";
import "./CasPomnium.css";

export default function CasPomnium() {
  const [open, setOpen] = useState(false);
  return (
    <section className="cas-pomnium">
      <div className="cas-pomnium-container">
        <div className="cas-pomnium-content">
          <div className="cas-pomnium-content-header">
            <h2 className="cas-pomnium-content-header-title">Industrie</h2>
            <div className="cas-pomnium-content-header-logo">
              <img
                src="/images/plasticomnium-color.webp"
                alt="Plastic Omnium Logo"
              />
            </div>
          </div>
          <p className="cas-pomnium-content-text">
            Probablement le secteur le plus représenté chez nos clients,
            l'industrie fait face à des enjeux majeurs et en constantes
            évolutions. Pour permettre à nos industriels de croître leurs
            expansions, la productivité des usines et le suivi de performances
            industrielles est un must have.
          </p>
        </div>
        <div className="cas-pomnium-subcontent" onClick={() => setOpen(!open)}>
          <div className="cas-pomnium-subtext">
            <p className="cas-pomnium-subtext-title">Cas client Plastic Omnium</p>
            <div className={`cas-pomnium-subtext-cross ${open ? "open" : ""}`}>
              <img src="/images/plus.svg" alt="cross" />
            </div>
          </div>
        </div>
        <div className={`cas-pomnium-slide ${open ? "open" : ""}`}>
          <div className="cas-pomnium-image">
            <img
              src="/images/Ecran_Plastic-p-800.webp"
              alt="Plastic Omnium Ecran"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
