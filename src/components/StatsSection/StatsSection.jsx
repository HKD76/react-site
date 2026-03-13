import "./StatsSection.css";

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-container">
          <div className="stats-card">
            <h2>50+</h2>
            <p className="stats-text">systèmes RealTiMES installées</p>
          </div>
          <div className="stats-card">
            <h2>200%</h2>
            <p className="stats-text">de gain de productivité cumulé</p>
          </div>
          <div className="stats-card">
            <h2>48h</h2>
            <p className="stats-text">de mise en place sur votre ligne de prod.</p>
          </div>
          <div className="stats-card">
            <h2>RTBOX</h2>
            <p className="stats-text">Notre module de captation des arrêts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
