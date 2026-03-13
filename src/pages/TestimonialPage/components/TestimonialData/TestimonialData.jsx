import "./TestimonialData.css";

export default function TestimonialData() {
  return (
    <section className="testimonial-data">
      <div className="testimonial-data-container">
        <div className="testimonial-data-content">
          <h2 className="testimonial-data-title">
            La <span className="highlight">mesure</span> de la <span className="highlight">performance</span>, accessible partout dans le monde
          </h2>
          <p className="testimonial-data-text">
            Notre logiciel <span className="highlight">TRS/MES</span> s'intègre à votre ERP existant et est fourni
            avec un module de captation des arrêts (<span className="highlight">RTBOX</span>). L'analyse des arrêts
            machine permet une gestion efficace des rebuts et une disponibilité
            accrue des équipements.
          </p>
          <p className="testimonial-data-text">
            Nous proposons un ensemble de solutions, autonomes et externes
            permettant de suivre la performance de n’importe quel équipement de
            production, de valeurs physiques ou d’un ensemble de tâches
            manuelles. L'utilisation de logiciels avancés facilite la collecte
            et l'interprétation des données de production. Avec une analyse
            basée sur des données hebergées sur votre serveur, <span className="highlight">RealTiMES</span> peut
            fournir des recommandations intelligentes pour optimiser vos
            processus de production.
          </p>
          <p className="testimonial-data-text">
            Ces recommandations permettent de gérer efficacement les temps
            d'arrêt et de maximiser les performances des lignes de production.
            La gestion des informations recueillies favorise une meilleure
            utilisation des machines.
          </p>
          <p className="testimonial-data-text">
            L’ensemble des données générées est exportable à tout moment pour
            les exploiter à d’autres fins et dans d’autres logiciels. La
            disponibilité immédiate des informations facilite la gestion des
            processus de production.
          </p>
        </div>
        <div className="testimonial-data-bloc">
            <div className="testimonial-data-info">
                <p className="testimonial-data-number">#1</p>
                <p className="testimonial-data-desc">Normand en suivi de performance industrielle</p>
            </div>
            <div className="testimonial-data-info">
                <p className="testimonial-data-number">+20</p>
                <p className="testimonial-data-desc">ans d'expérience en Lean Management</p>
            </div>
            <div className="testimonial-data-info">
                <p className="testimonial-data-number">+50</p>
                <p className="testimonial-data-desc">clients internationaux déjà équipés</p>
            </div>
            <div className="testimonial-data-info">
                <p className="testimonial-data-number">4,7/5</p>
                <p className="testimonial-data-desc">la note que l'on donne à notre solution</p>
            </div>
        </div>
      </div>
    </section>
  );
}
