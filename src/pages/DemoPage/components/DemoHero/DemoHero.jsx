import "./DemoHero.css";

export default function DemoHero() {
  return (
    <section className="demo-hero">
      <div className="demo-hero-container">
        <div className="demo-hero-content">
          <p className="demo-hero-label">Demander une démo</p>
          <h2 className="title">Optimisez votre productivité dès aujourd'hui</h2>
        </div>
        <div className="demo-hero-image">
          <img
            src="/images/Dashboard-realtimes-vecto-p-1080.webp"
            alt="Suivi de production"
          />
        </div>
      </div>
    </section>
  );
}
