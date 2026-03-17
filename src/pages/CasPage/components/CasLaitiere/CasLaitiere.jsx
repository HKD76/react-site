import { useState } from "react";
import "./CasLaitiere.css";

export default function CasLaitiere() {
  const [open, setOpen] = useState(false);
  return (
    <section className="cas-laitiere">
      <div className="cas-laitiere-container">
        <div className="cas-laitiere-content">
          <div className="cas-laitiere-content-header">
            <h2 className="cas-laitiere-content-header-title">
              Fromagerie industrielle
            </h2>
            <div className="cas-laitiere-content-header-logo">
              <img
                src="/images/laitiere-color.webp"
                alt="Société Laitière Logo"
              />
            </div>
          </div>
          <p className="cas-laitiere-content-text">
            Les fromageries font face à des enjeux importants de qualité,
            sécurité alimentaire, et flux de production. Pour elles, la solution
            RealTiMES est un vrai atout.
          </p>
        </div>
        <div className="cas-laitiere-subcontent" onClick={() => setOpen(!open)}>
          <div className="cas-laitiere-subtext">
            <p className="cas-laitiere-subtext-title">
              Cas client Société Laitière Laqueuille
            </p>
            <div className={`cas-laitiere-subtext-cross ${open ? "open" : ""}`}>
              <img src="/images/plus.svg" alt="cross" />
            </div>
          </div>
        </div>
        <div className={`cas-laitiere-slide ${open ? "open" : ""}`}>
          <div className="cas-laitiere-image">
            <img
              src="/images/Ecran_Laqueuille-p-800.webp"
              alt="Scoiété Laitière Ecran"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
