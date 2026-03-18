import "../LogicielAdvantage.css";
import { motion } from "framer-motion";
import {
  fadeInUpContainer,
  fadeInUpItem,
} from "../../../../../animation/animation";

export default function LogicielAdvantageCards() {
  return (
    <motion.div
      className="logiciel-advantage-content"
      variants={fadeInUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeInUpItem} className="logiciel-advantage-card">
        <div className="logiciel-advantage-image">
          <img src="/images/logo-symbole.svg" alt="Logo Realtimes" />
        </div>
        <h3 className="logiciel-advantage-card-title">
          Logiciel TRS non intrusif
        </h3>
        <p className="logiciel-advantage-card-text">
          Solution complète de{" "}
          <span className="highlight">suivi de production</span> qui permet
          l'acquisition des données en temps réel pour un{" "}
          <span className="highlight">gain de productivité de 5 à 30% </span>
          sans perturber la production. Les opérateurs bénéficient ainsi d'une
          meilleure gestion des processus de production.
        </p>
      </motion.div>
      <motion.div variants={fadeInUpItem} className="logiciel-advantage-card">
        <div className="logiciel-advantage-image">
          <img src="/images/logo-symbole.svg" alt="Logo Realtimes" />
        </div>
        <h3 className="logiciel-advantage-card-title">Tableaux de bords</h3>
        <p className="logiciel-advantage-card-text">
          Arrêter de collecter les données à la main. La solution{" "}
          <span className="highlight">RealTiMES </span>
          catégorise tous les défauts parmi une liste de choix. Un meilleur
          suivi et une meilleure réactivité sont possibles grâce à un rapport
          envoyé dès le lendemain. L'utilisation de tableaux de bords permet une{" "}
          <span className="highlight">analyse approfondie</span> des indicateurs
          de qualité et le calcul du{" "}
          <span className="highlight">taux de rendement</span>.
        </p>
      </motion.div>
      <motion.div variants={fadeInUpItem} className="logiciel-advantage-card">
        <div className="logiciel-advantage-image">
          <img src="/images/logo-symbole.svg" alt="Logo Realtimes" />
        </div>
        <h3 className="logiciel-advantage-card-title">Outil BI intégré</h3>
        <p className="logiciel-advantage-card-text">
          Créer vos propres <span className="highlight">rapports</span>. Non
          limité en terme d’utilisateurs.
          <span className="highlight"> Connecté</span> à la base de données{" "}
          <span className="highlight">RealTiMES</span>, mais peut être connecté
          à d’autres bases de données comme une pointeuse par exemple.
        </p>
      </motion.div>
    </motion.div>
  );
}
