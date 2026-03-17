import "./MediaPress.css";

export default function MediaPress() {
  return (
    <section className="media-press">
      <div className="media-press-container">
        <div className="media-press-content">
          <h2 className="media-press-title">
            Les parutions en presses de RealTiMES
          </h2>
          <p className="media-press-text">
            Cliquer sur l'icon "Voir" en face de chaque Media pour visualiser la
            parution presse.
          </p>
        </div>
        <div className="media-press-subcontent">
          <div className="media-press-image">
            <img
              src="/images/lusine-nouvelle_logo_mod_1.webp"
              alt="Logo l'usine nouvelle"
            />
          </div>
          <div className="media-press-button">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="media-press-link"
              href="/Realtimes-Industrie-Nouvelle-2023.pdf"
            >
              Voir l'article
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
