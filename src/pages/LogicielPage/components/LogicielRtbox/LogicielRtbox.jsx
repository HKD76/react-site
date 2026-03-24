import "./LogicielRtbox.css";

export default function LogicielRtbox() {
  return (
    <section className="logiciel-rtbox">
      <div className="logiciel-rtbox-container">
        <div className="logiciel-rtbox-card">
          <div className="logiciel-rtbox-content">
            <h2 className="logiciel-rtbox-title">
              La fiabilité d'une RTBOX industrielle
            </h2>
            <p className="logiciel-rtbox-text">
                Composée d’un automate industriel, la <span className="highlight">RTBOX</span> permet au système de bénéficier d’une extraordinaire fiabilité ainsi qu’une durée de vie de plus de 15 ans. RealTimes n'est pas qu'un simple logiciel TRS-MES.
            </p>
          </div>
          <div className="logiciel-rtbox-image">
            <img src="/images/suivi-production-realtimes-p-1080.webp" alt="Suivi de production"/>
          </div>
        </div>
      </div>
    </section>
  );
}
