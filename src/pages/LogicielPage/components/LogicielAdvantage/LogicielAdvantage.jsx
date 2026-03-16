import { Link } from "react-router-dom";
import LogicielAdvantageCards from "./LogicielAdvantageCards/LogicielAdvantageCards";
import "./LogicielAdvantage.css";

export default function LogicielAdvantage() {
  return (
    <section id="logiciel-advantage" className="logiciel-advantage">
      <div className="logiciel-advantage-container">
        <h2 className="logiciel-advantage-title">
          Un <span className="highlight">logiciel TRS-MES</span> aux multiples
          avantages
        </h2>
        <p className="page-subtitle">
          un suivi de performance simplifié et connecté
        </p>
        <LogicielAdvantageCards />
        <Link to="/ressources/blog" className="logiciel-advantage-link">
          Les 7 avantages RealTiMES
        </Link>
      </div>
    </section>
  );
}
