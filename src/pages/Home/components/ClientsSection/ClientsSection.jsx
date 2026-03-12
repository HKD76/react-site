import "./ClientsSection.css";
import ClientsSlider from "../../../../components/ClientsSlider/ClientsSlider.jsx";

export default function ClientsSection({ clientLogos }) {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="clients-text">
          <p>
            Nos clients sont des références internationales et ils ont opté pour
            notre logiciel de suivi de production en temps réel, optimisant
            ainsi leurs processus de fabrication et la gestion de leurs
            ressources.
          </p>
        </div>

        <ClientsSlider logos={clientLogos} />
      </div>
    </section>
  );
}
