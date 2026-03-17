import { useState } from "react";
import "./CasSodipan.css";

export default function CasSodipan() {
  const [open, setOpen] = useState(false);
  return (
    <section className="cas-sodipan">
      <div className="cas-sodipan-container">
        <div className="cas-sodipan-content">
          <div className="cas-sodipan-content-header">
            <h2 className="cas-sodipan-content-header-title">Fabricants</h2>
            <div className="cas-sodipan-content-header-logo">
              <img src="/images/logo_sodipan.webp" alt="Sodipan Logo" />
            </div>
          </div>
          <p className="cas-sodipan-content-text">
            Fabrication d'assiettes en carton et de serviettes en papier.
          </p>
        </div>
        <div className="cas-sodipan-subcontent" onClick={() => setOpen(!open)}>
          <div className="cas-sodipan-subtext">
            <p className="cas-sodipan-subtext-title">Cas client Sodipan</p>
            <div className={`cas-sodipan-subtext-cross ${open ? "open" : ""}`}>
              <img src="/images/plus.svg" alt="cross" />
            </div>
          </div>
        </div>
        <div className={`cas-sodipan-slide ${open ? "open" : ""}`}>
          <div className="cas-sodipan-image">
            <img src="/images/Ecran_Sodipan_1-p-800.webp" alt="Sodipan Ecran" />
          </div>
        </div>
      </div>
    </section>
  );
}
