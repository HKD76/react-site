import { useState } from "react";
import "./CasKnauf.css";

export default function CasKnauf() {
  const [open, setOpen] = useState(false);
  return (
    <section className="cas-knauf">
      <div className="cas-knauf-container">
        <div className="cas-knauf-content">
          <div className="cas-knauf-content-header">
            <h2 className="cas-knauf-content-header-title">Fabricants</h2>
            <div className="cas-knauf-content-header-logo">
              <img src="/images/knauf-color.webp" alt="Knauf Logo" />
            </div>
          </div>
          <p className="cas-knauf-content-text">
            L'isolation thermique et acoustique est un enjeu pour les années à
            venir en terme d'écologie et d'aménagement. Dans cette course à la
            productivité et à l'innovation, il est préférable de pouvoir compter
            sur un système de production efficace.
          </p>
        </div>
        <div className="cas-knauf-subcontent" onClick={() => setOpen(!open)}>
          <div className="cas-knauf-subtext">
            <p className="cas-knauf-subtext-title">Cas client Knauf</p>
            <div className={`cas-knauf-subtext-cross ${open ? "open" : ""}`}>
              <img src="/images/plus.svg" alt="cross" />
            </div>
          </div>
        </div>
        <div className={`cas-knauf-slide ${open ? "open" : ""}`}>
          <div className="cas-knauf-image">
            <img src="/images/Knauf_TB-p-800.webp" alt="Knauf Ecran" />
          </div>
        </div>
      </div>
    </section>
  );
}
